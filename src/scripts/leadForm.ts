/* Lead forms → Apps Script endpoint.
   POST as application/x-www-form-urlencoded (URLSearchParams) so it stays a
   "simple" request with NO CORS preflight (Apps Script rejects preflight).
   The response is opaque (mode:'no-cors') and intentionally not read; on
   completion we redirect to the form's /thanks/ page, and on a network error
   we reveal a fallback with a direct email.

   Validation (before sending): need a description, plus at least one VALID
   contact — a valid email OR a valid phone. A filled-but-invalid email/phone
   blocks the send and highlights the field. Messages come localized via the
   form's data-msg-* attributes. */
const ENDPOINT = import.meta.env.PUBLIC_LEADS_ENDPOINT as string | undefined;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_ALLOWED = /^[+()\d\s-]+$/;
const isEmail = (v: string) => EMAIL_RE.test(v);
const isPhone = (v: string) => PHONE_ALLOWED.test(v) && (v.match(/\d/g) || []).length >= 7;

type MsgKey = 'need' | 'contact' | 'email' | 'phone';

function wire(form: HTMLFormElement) {
  const thanks = form.dataset.thanks || '/thanks/';
  const msgEl = form.querySelector<HTMLElement>('[data-err="msg"]');
  const errNetwork = form.querySelector<HTMLElement>('[data-err="network"]');
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const field = (n: string) =>
    form.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(`[name="${n}"]`);
  const val = (n: string) => (field(n)?.value || '').trim();

  const clearErrors = () => {
    if (msgEl) msgEl.hidden = true;
    for (const n of ['need', 'email', 'phone']) {
      const el = field(n);
      el?.classList.remove('is-error');
      el?.removeAttribute('aria-invalid');
    }
  };

  const fail = (key: MsgKey, highlight: string[]) => {
    if (errNetwork) errNetwork.hidden = true;
    if (msgEl) {
      msgEl.textContent = form.dataset[`msg${key[0].toUpperCase()}${key.slice(1)}`] || '';
      msgEl.hidden = false;
    }
    let focused = false;
    for (const n of highlight) {
      const el = field(n);
      if (!el) continue;
      el.classList.add('is-error');
      el.setAttribute('aria-invalid', 'true');
      if (!focused) {
        el.focus();
        focused = true;
      }
    }
  };

  // Clear a field's error state as soon as the visitor edits it.
  for (const n of ['need', 'email', 'phone']) {
    field(n)?.addEventListener('input', () => {
      const el = field(n);
      el?.classList.remove('is-error');
      el?.removeAttribute('aria-invalid');
      if (msgEl) msgEl.hidden = true;
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Honeypot: a real visitor never fills this — silently drop bots.
    if (val('website') !== '') return;

    clearErrors();

    const need = val('need');
    const email = val('email');
    const phone = val('phone');

    if (!need) return fail('need', ['need']);
    if (email && !isEmail(email)) return fail('email', ['email']);
    if (phone && !isPhone(phone)) return fail('phone', ['phone']);
    if (!(isEmail(email) || isPhone(phone))) return fail('contact', ['email', 'phone']);

    // Build urlencoded payload from all named fields except the honeypot.
    const params = new URLSearchParams();
    for (const el of Array.from(form.elements) as Array<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >) {
      if (!el.name || el.name === 'website') continue;
      params.append(el.name, el.value);
    }
    params.set('page', location.pathname);

    if (submit) submit.disabled = true;
    try {
      if (!ENDPOINT) throw new Error('PUBLIC_LEADS_ENDPOINT is not set');
      await fetch(ENDPOINT, { method: 'POST', mode: 'no-cors', body: params });
      window.location.href = thanks;
    } catch {
      if (msgEl) msgEl.hidden = true;
      if (errNetwork) errNetwork.hidden = false;
      if (submit) submit.disabled = false;
    }
  });
}

document.querySelectorAll<HTMLFormElement>('form[data-lead]').forEach(wire);

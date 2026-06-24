/* Lead forms → Apps Script endpoint.
   POST as application/x-www-form-urlencoded (URLSearchParams) so it stays a
   "simple" request with NO CORS preflight (Apps Script rejects preflight).
   The response is opaque (mode:'no-cors') and intentionally not read; on
   completion we redirect to the form's /thanks/ page, and on a network error
   we reveal a fallback with a direct email. */
const ENDPOINT = import.meta.env.PUBLIC_LEADS_ENDPOINT as string | undefined;

function wire(form: HTMLFormElement) {
  const thanks = form.dataset.thanks || '/thanks/';
  const errValidation = form.querySelector<HTMLElement>('[data-err="validation"]');
  const errNetwork = form.querySelector<HTMLElement>('[data-err="network"]');
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const field = (n: string) =>
    form.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(`[name="${n}"]`);
  const val = (n: string) => (field(n)?.value || '').trim();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Honeypot: a real visitor never fills this — silently drop bots.
    if (val('website') !== '') return;

    const need = val('need');
    const email = val('email');
    const phone = val('phone');

    // Need a description, and at least one way to reach back (email OR phone).
    if (!need || (!email && !phone)) {
      if (errNetwork) errNetwork.hidden = true;
      if (errValidation) errValidation.hidden = false;
      (!need ? field('need') : field('email'))?.focus();
      return;
    }
    if (errValidation) errValidation.hidden = true;

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
      if (errNetwork) errNetwork.hidden = false;
      if (submit) submit.disabled = false;
    }
  });
}

document.querySelectorAll<HTMLFormElement>('form[data-lead]').forEach(wire);

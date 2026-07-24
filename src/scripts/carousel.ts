/* Horizontal card carousel: native scroll-snap + drag-to-scroll (mouse) +
   prev/next buttons. Progressive enhancement — works as a plain scroll list without JS. */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

function initCarousel(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>('[data-carousel-track]');
  if (!track) return;
  const prev = root.querySelector<HTMLButtonElement>('[data-carousel-prev]');
  const next = root.querySelector<HTMLButtonElement>('[data-carousel-next]');

  const step = () => {
    const card = track.querySelector<HTMLElement>(':scope > *');
    const gap = parseFloat(getComputedStyle(track).columnGap || '18') || 18;
    return card ? card.offsetWidth + gap : track.clientWidth * 0.8;
  };
  const go = (dir: number) => track.scrollBy({ left: dir * step(), behavior: reduce ? 'auto' : 'smooth' });
  prev?.addEventListener('click', () => go(-1));
  next?.addEventListener('click', () => go(1));

  const update = () => {
    const max = track.scrollWidth - track.clientWidth - 1;
    if (prev) prev.disabled = track.scrollLeft <= 0;
    if (next) next.disabled = track.scrollLeft >= max;
  };
  track.addEventListener('scroll', update, { passive: true });
  new ResizeObserver(update).observe(track);
  update();

  // Drag-to-scroll with a mouse/trackpad. Touch uses native scrolling.
  const DRAG_THRESHOLD = 12;
  let down = false, startX = 0, startLeft = 0, moved = false;
  track.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'touch') return;
    down = true; moved = false; startX = e.clientX; startLeft = track.scrollLeft;
    // Захват указателя НЕ ставим здесь: он уводит все последующие события на трек,
    // и обычный клик по карточке перестаёт доходить до ссылки. Захватываем только
    // когда пользователь реально начал тащить (см. pointermove).
    track.classList.add('is-grabbing');
  });
  track.addEventListener('pointermove', (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    // Порог 4px был меньше естественного дрожания руки: на трекпаде Mac курсор
    // почти всегда смещается на несколько пикселей между нажатием и отпусканием,
    // клик считался перетаскиванием и отменялся — карточки каталога не
    // открывались вовсе. 12px — сдвиг, который пользователь делает намеренно.
    if (Math.abs(dx) > DRAG_THRESHOLD && !moved) {
      moved = true;
      try { track.setPointerCapture(e.pointerId); } catch {}
    }
    if (moved) track.scrollLeft = startLeft - dx;
  });
  const end = () => { down = false; track.classList.remove('is-grabbing'); };
  track.addEventListener('pointerup', end);
  track.addEventListener('pointercancel', end);
  // Swallow the click that ends a drag so cards don't navigate accidentally.
  track.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
}

document.querySelectorAll<HTMLElement>('[data-carousel]').forEach(initCarousel);

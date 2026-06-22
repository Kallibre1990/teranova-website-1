/* Motion island: smooth scroll + reveal + light parallax.
   Loaded as a deferred module. Everything degrades gracefully and
   fully respects prefers-reduced-motion (no smoothing, no parallax,
   content shown immediately). */
import Lenis from 'lenis';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* 1) Reveal on scroll ----------------------------------------------------- */
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (revealEls.length) {
  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );
    revealEls.forEach((el) => io.observe(el));
  }
}

/* 2) Hero parallax -------------------------------------------------------- */
const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
function applyParallax(scroll: number) {
  for (const el of parallaxEls) {
    const speed = parseFloat(el.dataset.parallax || '0');
    el.style.transform = `translate3d(0, ${(scroll * speed).toFixed(2)}px, 0)`;
  }
}

/* 3) Smooth scroll (Lenis) ------------------------------------------------ */
if (!reduce) {
  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  lenis.on('scroll', (e: { scroll: number }) => applyParallax(e.scroll));

  // In-page anchor links -> smooth scroll with header offset
  document.querySelectorAll<HTMLAnchorElement>('a[href*="#"]').forEach((a) => {
    if (a.classList.contains('skip-link')) return; // keep native jump + focus
    const url = new URL(a.href, location.href);
    if (url.pathname === location.pathname && url.hash.length > 1) {
      const target = document.querySelector(url.hash);
      if (!target) return;
      a.addEventListener('click', (ev) => {
        ev.preventDefault();
        lenis.scrollTo(target as HTMLElement, { offset: -84 });
        history.replaceState(null, '', url.hash);
      });
    }
  });
} else {
  applyParallax(0);
}

/* 4) Back-to-top ---------------------------------------------------------- */
const toTop = document.getElementById('toTop');
if (toTop) {
  const onScroll = () => toTop.classList.toggle('show', window.scrollY > 600);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  toTop.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }),
  );
}

/* Motion island. Heavy motion (Lenis smooth-scroll, GSAP pin/parallax, pointer-parallax,
   custom cursor) runs ONLY on desktop pointers and only when motion is allowed. On touch /
   mobile and under prefers-reduced-motion: native scroll + static layers — content fully
   visible, smooth native swipe, no jank. */
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const desktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const allowMotion = !reduce && desktop;

if (allowMotion) {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // In-page anchors -> smooth scroll (skip the a11y skip-link)
  document.querySelectorAll<HTMLAnchorElement>('a[href*="#"]').forEach((a) => {
    if (a.classList.contains('skip-link')) return;
    const url = new URL(a.href, location.href);
    if (url.pathname === location.pathname && url.hash.length > 1) {
      const target = document.querySelector(url.hash);
      if (!target) return;
      a.addEventListener('click', (ev) => {
        ev.preventDefault();
        lenis.scrollTo(target as HTMLElement, { offset: -80 });
        history.replaceState(null, '', url.hash);
      });
    }
  });

  // Parallax for non-hero sections (hero is driven by the pinned timeline below)
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    if (el.closest('.hero')) return;
    const speed = parseFloat(el.dataset.parallax || '0');
    if (!speed) return;
    gsap.to(el, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: { trigger: el.closest('section') ?? el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  // Hero — one pinned "fall into the core" moment (pin-spacing => no layout void)
  const hero = document.querySelector<HTMLElement>('.hero');
  if (hero) {
    const diamond = hero.querySelector('[data-hero-art]');
    const content = hero.querySelector('[data-hero-content]');
    const cross = hero.querySelector('[data-hero-cross]');
    const floor = hero.querySelector('[data-floor]');
    const tl = gsap.timeline({
      scrollTrigger: { trigger: hero, start: 'top top', end: '+=85%', pin: true, pinSpacing: true, scrub: 0.6 },
    });
    if (diamond) tl.to(diamond, { scale: 1.5, yPercent: -4, ease: 'none' }, 0);
    if (floor) tl.to(floor, { yPercent: 16, opacity: 0.35, ease: 'none' }, 0);
    if (content) tl.to(content, { yPercent: -24, opacity: 0, ease: 'none' }, 0);
    if (cross) tl.fromTo(cross, { opacity: 0 }, { opacity: 1, ease: 'none' }, 0);

    // Pointer-parallax: diamond + text drift toward the cursor
    const dia = hero.querySelector('[data-hero-art]');
    const txt = hero.querySelector('[data-hero-content]');
    if (dia) {
      const dx = gsap.quickTo(dia, 'x', { duration: 0.7, ease: 'power3' });
      const dy = gsap.quickTo(dia, 'y', { duration: 0.7, ease: 'power3' });
      const tx = txt ? gsap.quickTo(txt, 'x', { duration: 0.8, ease: 'power3' }) : null;
      const ty = txt ? gsap.quickTo(txt, 'y', { duration: 0.8, ease: 'power3' }) : null;
      hero.addEventListener('mousemove', (e) => {
        const r = hero.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        dx(nx * 26); dy(ny * 20);
        if (tx && ty) { tx(nx * -9); ty(ny * -7); }
      });
      hero.addEventListener('mouseleave', () => { dx(0); dy(0); tx?.(0); ty?.(0); });
    }
  }

  // Custom cursor + magnetic primary buttons
  const cur = document.getElementById('cursor');
  if (cur) {
    document.documentElement.classList.add('cursor-on');
    window.addEventListener('mousemove', (e) => { cur.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`; }, { passive: true });
    document.querySelectorAll('a, button, summary, .cat, label, input, textarea, select, [data-magnetic]').forEach((el) => {
      el.addEventListener('mouseenter', () => cur.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => cur.classList.remove('is-hover'));
    });
  }
  document.querySelectorAll<HTMLElement>('.btn--primary').forEach((btn) => {
    const s = 16;
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      btn.style.transform = `translate(${(mx / r.width) * s}px, ${(my / r.height) * s}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });

  window.addEventListener('load', () => ScrollTrigger.refresh());
}

/* Back-to-top — all devices (cheap) */
const toTop = document.getElementById('toTop');
if (toTop) {
  const onScroll = () => toTop.classList.toggle('show', window.scrollY > 600);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));
}

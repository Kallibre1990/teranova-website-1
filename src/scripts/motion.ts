/* Motion island: Lenis smooth scroll + GSAP ScrollTrigger parallax/zoom + reveals.
   Everything is scrub/transform-based (no layout-changing pins) and fully disabled
   under prefers-reduced-motion. Works with JS off (content is static HTML). */
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Scroll-in text reveal removed by request — content is always visible.
   Background motion (parallax, hero zoom, globe, cursor) stays. */

/* 2) Smooth scroll + parallax/zoom (skipped entirely under reduced-motion) */
if (!reduce) {
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

  // Layered parallax for [data-parallax] (drift through their section).
  // Hero layers are excluded — they're driven by the pinned timeline below.
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

  // HERO — one pinned "fall into the core" moment. ScrollTrigger pin manages
  // pin-spacing (no layout void); layers diverge at different rates.
  const hero = document.querySelector<HTMLElement>('.hero');
  if (hero) {
    const diamond = hero.querySelector('[data-hero-art]');
    const content = hero.querySelector('[data-hero-content]');
    const cross = hero.querySelector('[data-hero-cross]');
    const floor = hero.querySelector('[data-floor]');
    const tl = gsap.timeline({
      scrollTrigger: { trigger: hero, start: 'top top', end: '+=85%', pin: true, pinSpacing: true, scrub: 0.6 },
    });
    if (diamond) tl.to(diamond, { scale: 1.55, yPercent: -4, ease: 'none' }, 0);
    if (floor) tl.to(floor, { yPercent: 16, opacity: 0.35, ease: 'none' }, 0);
    if (content) tl.to(content, { yPercent: -24, opacity: 0, ease: 'none' }, 0);
    if (cross) tl.fromTo(cross, { opacity: 0 }, { opacity: 1, ease: 'none' }, 0);
  }

  // Desktop pointer-parallax: diamond + content drift slightly toward the cursor.
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && hero) {
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
        dx(nx * 28); dy(ny * 22);
        if (tx && ty) { tx(nx * -10); ty(ny * -8); }
      });
      hero.addEventListener('mouseleave', () => { dx(0); dy(0); tx?.(0); ty?.(0); });
    }
  }

  window.addEventListener('load', () => ScrollTrigger.refresh());
}

/* 3) Custom cursor + magnetic buttons (desktop, fine pointer, motion only) */
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
if (!reduce && finePointer) {
  const cur = document.getElementById('cursor');
  if (cur) {
    document.documentElement.classList.add('cursor-on');
    window.addEventListener(
      'mousemove',
      (e) => {
        cur.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      },
      { passive: true },
    );
    document.querySelectorAll('a, button, summary, .cat, label, input, textarea, select, [data-magnetic]').forEach((el) => {
      el.addEventListener('mouseenter', () => cur.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => cur.classList.remove('is-hover'));
    });
  }

  // Magnetic pull on primary buttons.
  document.querySelectorAll<HTMLElement>('.btn--primary').forEach((btn) => {
    const strength = 16;
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      btn.style.transform = `translate(${(mx / r.width) * strength}px, ${(my / r.height) * strength}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* 4) Back-to-top */
const toTop = document.getElementById('toTop');
if (toTop) {
  const onScroll = () => toTop.classList.toggle('show', window.scrollY > 600);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));
}

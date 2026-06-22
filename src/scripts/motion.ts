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

  // Layered parallax for [data-parallax] (drift through their section)
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const speed = parseFloat(el.dataset.parallax || '0');
    if (!speed) return;
    gsap.to(el, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el.closest('section') ?? el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  // Hero diamond: gentle zoom + drift; content lifts and softens as you scroll past.
  const art = document.querySelector('[data-hero-art]');
  if (art) {
    gsap.to(art, {
      scale: 1.16,
      yPercent: 12,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    });
  }
  const heroContent = document.querySelector('.hero__content');
  if (heroContent) {
    gsap.to(heroContent, {
      yPercent: -6,
      opacity: 0.2,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    });
  }
  // Background cross-fade during the pinned hero ("falling through" to the next layer).
  const cross = document.querySelector('[data-hero-cross]');
  if (cross) {
    gsap.fromTo(
      cross,
      { opacity: 0 },
      { opacity: 1, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } },
    );
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

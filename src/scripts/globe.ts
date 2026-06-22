/* Crisp canvas globe: wireframe sphere (graticule + dots) on a base disc, with
   animated arcs from Korea to key markets. Vanilla 2D canvas (no WebGL).
   Always renders (draws on resize), spins while in view, static under reduced-motion. */

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface V3 { x: number; y: number; z: number; }
const sphere = (lat: number, lon: number): V3 => {
  const phi = ((90 - lat) * Math.PI) / 180;
  const th = ((lon + 180) * Math.PI) / 180;
  return { x: -Math.sin(phi) * Math.cos(th), y: Math.cos(phi), z: Math.sin(phi) * Math.sin(th) };
};
const rotY = (p: V3, a: number): V3 => { const c = Math.cos(a), s = Math.sin(a); return { x: p.x * c + p.z * s, y: p.y, z: -p.x * s + p.z * c }; };
const rotX = (p: V3, a: number): V3 => { const c = Math.cos(a), s = Math.sin(a); return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c }; };
const slerp = (a: V3, b: V3, t: number): V3 => {
  const d = Math.max(-1, Math.min(1, a.x * b.x + a.y * b.y + a.z * b.z));
  const om = Math.acos(d), so = Math.sin(om) || 1e-6;
  const k0 = Math.sin((1 - t) * om) / so, k1 = Math.sin(t * om) / so;
  return { x: a.x * k0 + b.x * k1, y: a.y * k0 + b.y * k1, z: a.z * k0 + b.z * k1 };
};

const KOREA = sphere(36.5, 127.8);
const DESTS = [[43.2, 76.9], [55.75, 37.6], [41.0, 28.98], [50.1, 8.68], [40.7, -74.0], [25.2, 55.27], [1.35, 103.8]].map(([la, lo]) => sphere(la, lo));

// dot grid
const DOTS: V3[] = [];
for (let lat = -84; lat <= 84; lat += 7) {
  const step = 7 / Math.max(0.16, Math.cos((lat * Math.PI) / 180));
  for (let lon = -180; lon < 180; lon += step) DOTS.push(sphere(lat, lon));
}
// graticule polylines (meridians + parallels)
const LINES: V3[][] = [];
for (let lon = -150; lon <= 180; lon += 30) { const l: V3[] = []; for (let lat = -90; lat <= 90; lat += 4) l.push(sphere(lat, lon)); LINES.push(l); }
for (let lat = -60; lat <= 60; lat += 30) { const l: V3[] = []; for (let lon = -180; lon <= 180; lon += 4) l.push(sphere(lat, lon)); LINES.push(l); }

function initGlobe(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  let w = 0, h = 0, cx = 0, cy = 0, R = 0;
  const tilt = 0.42; // look from slightly above the equator
  let a = reduce ? 2.4 : 0.9, raf = 0, inView = true, last = 0;

  const view = (p: V3) => rotX(rotY(p, a), tilt);
  const px = (p: V3) => ({ x: cx + R * p.x, y: cy - R * p.y, z: p.z });

  function draw(now: number) {
    if (R <= 0) return;
    if (!reduce && inView) { const dt = Math.min(48, now - last || 16); last = now; a += dt * 0.00016; }
    ctx!.clearRect(0, 0, w, h);

    // base disc
    const g = ctx!.createRadialGradient(cx - R * 0.28, cy - R * 0.32, R * 0.1, cx, cy, R);
    g.addColorStop(0, 'rgba(18,24,40,0.96)');
    g.addColorStop(1, 'rgba(3,6,12,0.99)');
    ctx!.fillStyle = g;
    ctx!.beginPath(); ctx!.arc(cx, cy, R, 0, 7); ctx!.fill();

    // graticule
    ctx!.lineWidth = 1;
    for (const line of LINES) {
      ctx!.beginPath(); let started = false;
      for (const pt of line) {
        const p = view(pt);
        if (p.z <= 0) { started = false; continue; }
        const s = px(p);
        if (!started) { ctx!.moveTo(s.x, s.y); started = true; } else ctx!.lineTo(s.x, s.y);
      }
      ctx!.strokeStyle = 'rgba(206,216,230,0.15)';
      ctx!.stroke();
    }

    // dots — dark-blue (far) to light-blue (near)
    for (const d of DOTS) {
      const p = view(d);
      if (p.z <= 0) continue;
      const s = px(p);
      const m = p.z;
      const r = Math.round(26 + (111 - 26) * m);
      const gg = Math.round(56 + (158 - 56) * m);
      const bl = Math.round(108 + (232 - 108) * m);
      ctx!.globalAlpha = 0.32 + 0.62 * m;
      ctx!.fillStyle = `rgb(${r},${gg},${bl})`;
      ctx!.beginPath(); ctx!.arc(s.x, s.y, 0.85 + 1.55 * m, 0, 7); ctx!.fill();
    }
    ctx!.globalAlpha = 1;

    // arcs + destination dots
    for (const db of DESTS) {
      ctx!.beginPath(); let started = false;
      for (let t = 0; t <= 1.0001; t += 0.03) {
        const sp = slerp(KOREA, db, t);
        const lift = 1 + 0.2 * Math.sin(Math.PI * t);
        const p = view({ x: sp.x * lift, y: sp.y * lift, z: sp.z * lift });
        if (p.z <= 0) { started = false; continue; }
        const s = px(p);
        if (!started) { ctx!.moveTo(s.x, s.y); started = true; } else ctx!.lineTo(s.x, s.y);
      }
      ctx!.strokeStyle = 'rgba(63,122,224,0.7)'; ctx!.lineWidth = 1.4; ctx!.stroke();

      if (!reduce) {
        const tt = (now * 0.00024) % 1;
        const sp = slerp(KOREA, db, tt);
        const lift = 1 + 0.2 * Math.sin(Math.PI * tt);
        const p = view({ x: sp.x * lift, y: sp.y * lift, z: sp.z * lift });
        if (p.z > 0) { const s = px(p); ctx!.fillStyle = '#bcd4ff'; ctx!.beginPath(); ctx!.arc(s.x, s.y, 2.2, 0, 7); ctx!.fill(); }
      }
      const pd = view(db);
      if (pd.z > 0) { const s = px(pd); ctx!.fillStyle = '#eef3fb'; ctx!.beginPath(); ctx!.arc(s.x, s.y, 2.6, 0, 7); ctx!.fill(); }
    }

    // Korea marker
    const kr = view(KOREA);
    if (kr.z > 0) {
      const s = px(kr);
      const pulse = reduce ? 0 : 0.5 + 0.5 * Math.sin(now * 0.004);
      ctx!.fillStyle = '#3f7ae0'; ctx!.beginPath(); ctx!.arc(s.x, s.y, 4, 0, 7); ctx!.fill();
      ctx!.strokeStyle = `rgba(63,122,224,${0.6 - 0.5 * pulse})`; ctx!.lineWidth = 1.6;
      ctx!.beginPath(); ctx!.arc(s.x, s.y, 6 + 9 * pulse, 0, 7); ctx!.stroke();
    }

    if (!reduce && inView) raf = requestAnimationFrame(draw);
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = canvas.getBoundingClientRect();
    w = r.width || canvas.clientWidth || 520;
    h = r.height || canvas.clientHeight || 520;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx = w / 2; cy = h / 2; R = (Math.min(w, h) / 2) * 0.9;
    draw(performance.now());
  }

  new ResizeObserver(resize).observe(canvas);
  requestAnimationFrame(resize);

  const io = new IntersectionObserver((es) => {
    for (const e of es) {
      inView = e.isIntersecting;
      if (inView && !reduce) { last = 0; cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); }
      else cancelAnimationFrame(raf);
    }
  }, { threshold: 0.02 });
  io.observe(canvas);
}

document.querySelectorAll<HTMLCanvasElement>('canvas[data-globe]').forEach(initGlobe);

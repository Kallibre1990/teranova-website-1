/* Canvas globe: a lit ocean sphere with a procedurally-coloured "dotted Earth"
   (real coastlines, climate-band colours) + animated arcs from Korea to key markets.
   Vanilla 2D canvas (no WebGL), no photos. Spins while in view, static under reduced-motion. */

// Static (no spin) under reduced-motion AND on phones: the globe still renders once,
// it just doesn't animate — saves battery/CPU on mobile (matches the spec's "static on phone").
const reduce =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
  window.matchMedia('(max-width: 760px)').matches;

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

// Continents — a precomputed "dotted Earth" (Natural Earth land sampling), loaded async and
// coloured procedurally by climate band: ice · taiga · temperate · desert · savanna · forest.
const BANDS = ['224,233,241', '64,104,84', '78,134,80', '184,160,106', '126,150,76', '44,116,60'];
const LANDB: V3[][] = BANDS.map(() => []);
let landReady = false;
const hash = (a: number, b: number) => { const v = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453; return v - Math.floor(v); };
const bandOf = (lat: number, lon: number): number => {
  const a = Math.abs(lat) + (hash(lat, lon) - 0.5) * 7; // jitter so bands aren't hard stripes
  if (a > 67) return 0;   // polar ice
  if (a > 55) return 1;   // taiga
  if (a > 35) return 2;   // temperate green
  if (a > 18) return 3;   // subtropical desert / steppe
  if (a > 10) return 4;   // savanna
  return 5;               // equatorial forest
};
// graticule polylines (meridians + parallels)
const LINES: V3[][] = [];
for (let lon = -150; lon <= 180; lon += 30) { const l: V3[] = []; for (let lat = -90; lat <= 90; lat += 4) l.push(sphere(lat, lon)); LINES.push(l); }
for (let lat = -60; lat <= 60; lat += 30) { const l: V3[] = []; for (let lon = -180; lon <= 180; lon += 4) l.push(sphere(lat, lon)); LINES.push(l); }

function initGlobe(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  let w = 0, h = 0, cx = 0, cy = 0, R = 0;
  let tilt = 0.42; // look from slightly above the equator (adjustable by drag)
  let a = reduce ? 2.4 : 0.9, raf = 0, inView = true, last = 0, dragging = false;

  const view = (p: V3) => rotX(rotY(p, a), tilt);
  const px = (p: V3) => ({ x: cx + R * p.x, y: cy - R * p.y, z: p.z });

  function draw(now: number) {
    if (R <= 0) return;
    if (!reduce && inView && !dragging) { const dt = Math.min(48, now - last || 16); last = now; a += dt * 0.00016; }
    ctx!.clearRect(0, 0, w, h);

    // base sphere — a lit ocean (sunlit sea top-left → deep water at the terminator)
    const g = ctx!.createRadialGradient(cx - R * 0.28, cy - R * 0.32, R * 0.1, cx, cy, R);
    g.addColorStop(0, 'rgba(118,174,222,0.99)');
    g.addColorStop(0.5, 'rgba(46,110,184,0.99)');
    g.addColorStop(1, 'rgba(14,46,100,0.99)');
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
      ctx!.strokeStyle = 'rgba(206,224,242,0.12)';
      ctx!.stroke();
    }

    // continents — coloured land dots (forest/desert/ice), depth-shaded toward the limb
    for (let bi = 0; bi < LANDB.length; bi++) {
      const bucket = LANDB[bi];
      if (!bucket.length) continue;
      ctx!.fillStyle = `rgb(${BANDS[bi]})`;
      for (const d of bucket) {
        const p = view(d);
        if (p.z <= 0) continue;
        const s = px(p);
        const m = p.z;
        ctx!.globalAlpha = 0.5 + 0.5 * m;
        const sz = 1.15 + 1.5 * m;
        ctx!.fillRect(s.x - sz / 2, s.y - sz / 2, sz, sz);
      }
    }
    ctx!.globalAlpha = 1;

    // atmospheric rim — a cyan limb glow that lifts the globe off the dark section
    const rim = ctx!.createRadialGradient(cx, cy, R * 0.84, cx, cy, R * 1.08);
    rim.addColorStop(0, 'rgba(128,188,248,0)');
    rim.addColorStop(0.72, 'rgba(128,188,248,0.2)');
    rim.addColorStop(0.96, 'rgba(156,204,255,0.5)');
    rim.addColorStop(1, 'rgba(156,204,255,0)');
    ctx!.fillStyle = rim;
    ctx!.beginPath(); ctx!.arc(cx, cy, R * 1.08, 0, 7); ctx!.fill();

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
      ctx!.strokeStyle = 'rgba(150,205,255,0.8)'; ctx!.lineWidth = 1.3; ctx!.stroke();

      if (!reduce) {
        const tt = (now * 0.00024) % 1;
        const sp = slerp(KOREA, db, tt);
        const lift = 1 + 0.2 * Math.sin(Math.PI * tt);
        const p = view({ x: sp.x * lift, y: sp.y * lift, z: sp.z * lift });
        if (p.z > 0) { const s = px(p); ctx!.fillStyle = '#eaf6ff'; ctx!.beginPath(); ctx!.arc(s.x, s.y, 2.2, 0, 7); ctx!.fill(); }
      }
      const pd = view(db);
      if (pd.z > 0) { const s = px(pd); ctx!.fillStyle = '#f2f9ff'; ctx!.beginPath(); ctx!.arc(s.x, s.y, 2.6, 0, 7); ctx!.fill(); }
    }

    // Korea marker
    const kr = view(KOREA);
    if (kr.z > 0) {
      const s = px(kr);
      const pulse = reduce ? 0 : 0.5 + 0.5 * Math.sin(now * 0.004);
      ctx!.fillStyle = '#eaf5ff'; ctx!.beginPath(); ctx!.arc(s.x, s.y, 4, 0, 7); ctx!.fill();
      ctx!.strokeStyle = `rgba(120,190,255,${0.7 - 0.55 * pulse})`; ctx!.lineWidth = 1.6;
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

  // Load the dotted-Earth land data once, sort into colour bands, then redraw.
  if (!landReady) {
    landReady = true;
    fetch('/data/land-dots.json')
      .then((r) => r.json())
      .then((flat: number[]) => {
        for (let i = 0; i + 1 < flat.length; i += 2) LANDB[bandOf(flat[i], flat[i + 1])].push(sphere(flat[i], flat[i + 1]));
        draw(performance.now());
      })
      .catch(() => { landReady = false; });
  }

  const io = new IntersectionObserver((es) => {
    for (const e of es) {
      inView = e.isIntersecting;
      if (inView && !reduce) { last = 0; cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); }
      else cancelAnimationFrame(raf);
    }
  }, { threshold: 0.02 });
  io.observe(canvas);

  // Drag to rotate — desktop + touch. User-driven, so allowed even under reduced-motion.
  canvas.style.touchAction = 'none';
  canvas.style.cursor = 'grab';
  let px0 = 0, py0 = 0;
  canvas.addEventListener('pointerdown', (e) => {
    dragging = true; px0 = e.clientX; py0 = e.clientY;
    try { canvas.setPointerCapture(e.pointerId); } catch {}
    canvas.style.cursor = 'grabbing';
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    a += (e.clientX - px0) * 0.005;
    tilt = Math.max(-1.2, Math.min(1.2, tilt + (e.clientY - py0) * 0.005));
    px0 = e.clientX; py0 = e.clientY;
    draw(performance.now());
  });
  const endDrag = () => {
    if (!dragging) return;
    dragging = false; canvas.style.cursor = 'grab';
    if (!reduce && inView) { last = 0; cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); }
  };
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', endDrag);
}

document.querySelectorAll<HTMLCanvasElement>('canvas[data-globe]').forEach(initGlobe);

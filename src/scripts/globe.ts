/* Lightweight canvas dot-globe: Korea as base + animated arcs to key markets.
   Vanilla 2D canvas (no WebGL). Spins slowly, pauses off-viewport, and is
   static (no spin) under prefers-reduced-motion. */

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface V3 { x: number; y: number; z: number; }

function sphere(lat: number, lon: number): V3 {
  const phi = ((90 - lat) * Math.PI) / 180;
  const th = ((lon + 180) * Math.PI) / 180;
  return { x: -Math.sin(phi) * Math.cos(th), y: Math.cos(phi), z: Math.sin(phi) * Math.sin(th) };
}
function rotY(p: V3, a: number): V3 {
  const c = Math.cos(a), s = Math.sin(a);
  return { x: p.x * c + p.z * s, y: p.y, z: -p.x * s + p.z * c };
}
function rotX(p: V3, a: number): V3 {
  const c = Math.cos(a), s = Math.sin(a);
  return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c };
}
function slerp(a: V3, b: V3, t: number): V3 {
  const dot = Math.max(-1, Math.min(1, a.x * b.x + a.y * b.y + a.z * b.z));
  const om = Math.acos(dot);
  const so = Math.sin(om) || 1e-6;
  const k0 = Math.sin((1 - t) * om) / so;
  const k1 = Math.sin(t * om) / so;
  return { x: a.x * k0 + b.x * k1, y: a.y * k0 + b.y * k1, z: a.z * k0 + b.z * k1 };
}

const KOREA = sphere(36.5, 127.8);
const DESTS = [
  [43.2, 76.9],   // Almaty (CIS)
  [55.75, 37.6],  // Moscow (CIS)
  [41.0, 28.98],  // Istanbul (Türkiye)
  [50.1, 8.68],   // Frankfurt (Europe)
  [40.7, -74.0],  // New York (USA)
  [25.2, 55.27],  // Dubai
  [1.35, 103.8],  // Singapore (Asia)
].map(([la, lo]) => sphere(la, lo));

// Even-ish dot grid (fewer dots near the poles).
const DOTS: V3[] = [];
for (let lat = -78; lat <= 78; lat += 6) {
  const step = 6 / Math.max(0.18, Math.cos((lat * Math.PI) / 180));
  for (let lon = -180; lon < 180; lon += step) DOTS.push(sphere(lat, lon));
}

function initGlobe(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  let w = 0, h = 0, cx = 0, cy = 0, R = 0;
  const tilt = -0.36;
  let a = reduce ? 2.2 : 0;
  let raf = 0, running = false, last = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    w = rect.width; h = rect.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx = w / 2; cy = h / 2; R = (Math.min(w, h) / 2) * 0.92;
  }
  resize();
  new ResizeObserver(resize).observe(canvas);

  const px = (p: V3) => ({ x: cx + R * p.x, y: cy - R * p.y, z: p.z });
  const view = (p: V3) => rotX(rotY(p, a), tilt);

  function draw(now: number) {
    if (!running) return;
    if (!reduce) { const dt = Math.min(48, now - last || 16); last = now; a += dt * 0.00017; }
    ctx!.clearRect(0, 0, w, h);

    // sphere dots
    for (const d of DOTS) {
      const p = view(d);
      if (p.z <= 0) continue;
      const s = px(p);
      ctx!.globalAlpha = 0.14 + 0.5 * p.z;
      ctx!.fillStyle = '#7e93b5';
      ctx!.beginPath();
      ctx!.arc(s.x, s.y, 0.7 + 1.1 * p.z, 0, 7);
      ctx!.fill();
    }
    ctx!.globalAlpha = 1;

    // arcs Korea -> destinations
    for (const db of DESTS) {
      ctx!.beginPath();
      let started = false;
      for (let t = 0; t <= 1.0001; t += 0.035) {
        const sp = slerp(KOREA, db, t);
        const lift = 1 + 0.17 * Math.sin(Math.PI * t);
        const p = view({ x: sp.x * lift, y: sp.y * lift, z: sp.z * lift });
        if (p.z <= 0) { started = false; continue; }
        const s = px(p);
        if (!started) { ctx!.moveTo(s.x, s.y); started = true; } else ctx!.lineTo(s.x, s.y);
      }
      ctx!.strokeStyle = 'rgba(63,122,224,0.5)';
      ctx!.lineWidth = 1.2;
      ctx!.stroke();

      if (!reduce) {
        const tt = (now * 0.00022) % 1;
        const sp = slerp(KOREA, db, tt);
        const lift = 1 + 0.17 * Math.sin(Math.PI * tt);
        const p = view({ x: sp.x * lift, y: sp.y * lift, z: sp.z * lift });
        if (p.z > 0) {
          const s = px(p);
          ctx!.fillStyle = '#9fc0f0';
          ctx!.beginPath();
          ctx!.arc(s.x, s.y, 2.1, 0, 7);
          ctx!.fill();
        }
      }
      const pd = view(db);
      if (pd.z > 0) {
        const s = px(pd);
        ctx!.fillStyle = '#edf1f6';
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, 2.4, 0, 7);
        ctx!.fill();
      }
    }

    // Korea marker + pulse
    const kr = view(KOREA);
    if (kr.z > 0) {
      const s = px(kr);
      const pulse = reduce ? 0 : 0.5 + 0.5 * Math.sin(now * 0.004);
      ctx!.fillStyle = '#3f7ae0';
      ctx!.beginPath();
      ctx!.arc(s.x, s.y, 3.6, 0, 7);
      ctx!.fill();
      ctx!.strokeStyle = `rgba(63,122,224,${0.55 - 0.45 * pulse})`;
      ctx!.lineWidth = 1.5;
      ctx!.beginPath();
      ctx!.arc(s.x, s.y, 5 + 7 * pulse, 0, 7);
      ctx!.stroke();
    }

    if (!reduce && running) raf = requestAnimationFrame(draw);
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          if (!running) { running = true; last = 0; raf = requestAnimationFrame(draw); }
        } else {
          running = false;
          cancelAnimationFrame(raf);
        }
      }
    },
    { threshold: 0.04 },
  );
  io.observe(canvas);

  if (reduce) { running = true; draw(0); running = false; }
}

document.querySelectorAll<HTMLCanvasElement>('canvas[data-globe]').forEach(initGlobe);

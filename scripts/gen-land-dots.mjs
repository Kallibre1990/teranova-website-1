/* Dev-only data generator (run manually, output is committed).
   Source: Natural Earth 110m land (public domain) via martynafford/natural-earth-geojson.
   Samples the sphere on an equal-area-ish lat/lon grid and keeps points that fall on
   land (ray-cast point-in-polygon vs coastlines). Output: a compact flat [lat,lon,...]
   list the canvas globe plots as a "dotted Earth". No runtime geo-math, no photos. */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const SRC_LOCAL = '/tmp/land1.json';
const SRC_URL = 'https://raw.githubusercontent.com/martynafford/natural-earth-geojson/master/110m/physical/ne_110m_land.json';
const OUT = new URL('../public/data/land-dots.json', import.meta.url);

const DLAT = 1.7;        // base angular spacing (deg)
const LAT_MIN = -58;     // skip deep Antarctic interior (grazing at our tilt)
const LAT_MAX = 83;

const raw = existsSync(SRC_LOCAL)
  ? await readFile(SRC_LOCAL, 'utf8')
  : await (await fetch(SRC_URL)).text();
const gj = JSON.parse(raw);

// Normalise every feature into a list of polygons: [outerRing, ...holes]
const polygons = [];
for (const f of gj.features) {
  const g = f.geometry;
  const arr = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
  for (const poly of arr) polygons.push(poly);
}

const inRing = (x, y, ring) => {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
    if (((yi > y) !== (yj > y)) && (x < ((xj - xi) * (y - yi)) / (yj - yi) + xi)) inside = !inside;
  }
  return inside;
};
const isLand = (x, y) => {
  for (const poly of polygons) {
    if (!inRing(x, y, poly[0])) continue;
    let hole = false;
    for (let h = 1; h < poly.length; h++) if (inRing(x, y, poly[h])) { hole = true; break; }
    if (!hole) return true;
  }
  return false;
};

const r1 = (n) => Math.round(n * 10) / 10;
const dots = [];
for (let lat = LAT_MIN; lat <= LAT_MAX; lat += DLAT) {
  const lonStep = DLAT / Math.max(0.18, Math.cos((lat * Math.PI) / 180));
  for (let lon = -180; lon < 180; lon += lonStep) {
    if (isLand(lon, lat)) dots.push(r1(lat), r1(lon));
  }
}

await mkdir(new URL('../public/data/', import.meta.url), { recursive: true });
const json = JSON.stringify(dots);
await writeFile(OUT, json);
console.log('land dots:', dots.length / 2, '| bytes:', json.length, '| ~kb:', (json.length / 1024).toFixed(1));

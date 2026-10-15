/** Structural checks only: successful parity is not a linguistic review. */
export function leaves(value, path = '', result = new Map()) {
  if (Array.isArray(value)) {
    if (!value.length) result.set(path, []);
    value.forEach((item, i) => leaves(item, `${path}[${i}]`, result));
  } else if (value && typeof value === 'object') {
    const entries = Object.entries(value);
    if (!entries.length) result.set(path, {});
    for (const [key, item] of entries) leaves(item, path ? `${path}.${key}` : key, result);
  } else result.set(path, value);
  return result;
}

const placeholders = (value) => typeof value === 'string'
  ? (value.match(/\{\{?\s*[\w.]+\s*\}?\}|%\(?\w*\)?[sd]/g) ?? []).sort() : [];
const kind = (value) => Array.isArray(value) ? 'array' : value === null ? 'null' : typeof value;

export function parity(reference, candidate) {
  const expected = leaves(reference);
  const actual = candidate == null ? new Map() : leaves(candidate);
  const result = { leaves: expected.size, missing: [], extra: [], types: [], placeholders: [], empty: [] };
  for (const [key, value] of expected) {
    if (!actual.has(key)) { result.missing.push(key); continue; }
    const translated = actual.get(key);
    if (kind(value) !== kind(translated)) result.types.push(key);
    if (typeof value === 'string' && value.trim() && typeof translated === 'string' && !translated.trim()) result.empty.push(key);
    if (JSON.stringify(placeholders(value)) !== JSON.stringify(placeholders(translated))) result.placeholders.push(key);
  }
  for (const key of actual.keys()) if (!expected.has(key)) result.extra.push(key);
  return result;
}

export const hasErrors = (result) => ['missing', 'extra', 'types', 'placeholders', 'empty'].some((key) => result[key].length);

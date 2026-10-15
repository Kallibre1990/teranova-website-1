/** Shared catalog data is outside supplier i18n parity. Audit marked display
 * labels and the complete DOOBOM grouping/pack-label surface from review 019.
 * Product names, photos, certification codes and numeric SI units stay shared.
 */
export function catalogCopyIssues(suppliers, lang) {
  const issues = [];
  const targetScript = lang === 'he' ? /[\u0590-\u05ff]/ : /[\u0900-\u097f]/;
  const check = (source, entries, path, required) => {
    if (!required && !entries) return;
    const text = entries?.[lang];
    if (typeof text !== 'string' || !text.trim() || !targetScript.test(text)) {
      issues.push(`${path}: missing ${lang} display translation`);
      return;
    }
    if (JSON.stringify(source.match(/\d+(?:[.,]\d+)?/g) ?? []) !== JSON.stringify(text.match(/\d+(?:[.,]\d+)?/g) ?? [])) {
      issues.push(`${path}: changed quantities`);
    }
  };
  for (const supplier of suppliers) {
    if (/[\u0400-\u04ff]/.test(supplier.brand)) issues.push(`${supplier.slug}.brand: description in language-neutral identity`);
    for (const [gi, group] of (supplier.catalog ?? []).entries()) {
      const path = `${supplier.slug}.catalog[${gi}]`;
      check(group.line, group.lineI18n, `${path}.line`, supplier.slug === 'doobom');
      for (const [ii, item] of group.items.entries()) {
        if (item.volume) {
          const unitOnly = /^\d+(?:[.,]\d+)?\s*(?:ml|g|kg|l|mg|µg)$/i.test(item.volume);
          check(item.volume, item.volumeI18n, `${path}.items[${ii}].volume`, supplier.slug === 'doobom' && !unitOnly);
        }
      }
    }
  }
  return issues;
}

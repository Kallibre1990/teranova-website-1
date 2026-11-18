import type { Lang } from '../i18n/ui';
import { donggukLocales } from './dongguk-locales';

/** Public subset of the accepted T-20261116-047 registry. No researcher names,
 * licensing availability, commercial terms or numerical TRL are included. */
export const donggukTechnologies = [
  { id: 'SMK-01', group: 0, stage: 0, applications: '10-2022-0071621', registrations: '10-2946279 (2026-03-26)' },
  { id: 'SMK-02', group: 1, stage: 1, applications: '10-2022-0166303', registrations: '10-2904684 (2026-03-26)' },
  { id: 'SMK-03', group: 1, stage: 2, applications: '10-2022-0039918', registrations: '10-2764423 (2025-02-03)' },
  { id: 'SMK-04', group: 1, stage: 1, applications: '10-2022-0170523', registrations: '10-2747200 (2024-12-23)' },
  { id: 'SMK-05', group: 0, stage: 0, applications: '10-2025-0142972', registrations: null },
  { id: 'SMK-06', group: 0, stage: 3, applications: '10-2023-0112872 | 10-2023-0112873', registrations: null },
  { id: 'SMK-07', group: 3, stage: 4, applications: '10-2022-0098101', registrations: '10-2887356' },
  { id: 'SMK-08', group: 2, stage: 5, applications: '10-2023-0101569 | 10-2023-0070206', registrations: '10-2851566 (2025-08-25) | 10-2851565 (2025-08-25)' },
  { id: 'SMK-09', group: 0, stage: 0, applications: '10-2022-0076616 | 10-2022-0076615', registrations: '10-2730556 (2024-11-12) | 10-2974430 (2026-06-02)' },
  { id: 'SMK-10', group: 3, stage: 6, applications: '10-2026-0069002; PCT/KR2026/005500 (2026-04-21)', registrations: null },
  { id: 'SMK-11', group: 1, stage: 7, applications: '10-2022-0182632', registrations: '10-2809600 (2025-05-14)' },
  { id: 'SMK-12', group: 2, stage: 8, applications: '10-2024-0053237', registrations: null },
  { id: 'SMK-13', group: 0, stage: 9, applications: '10-2023-0034880', registrations: null },
  { id: 'SMK-14', group: 3, stage: 10, applications: '10-2025-0064694', registrations: null },
  { id: 'SMK-15', group: 1, stage: 11, applications: '10-2020-0069587 | 10-2023-0164887', registrations: '10-2467288 (2022-11-10)' },
] as const;

export const donggukContent = (lang: Lang) => {
  const c = donggukLocales[lang];
  if (!c || c.titles.length !== 15 || c.stages.length !== 12) throw new Error(`Incomplete Dongguk locale: ${lang}`);
  return c;
};

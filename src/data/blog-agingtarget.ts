/* AgingTarget editorial cluster. The supplied reduced IR deck is the only
   source. These entries deliberately describe research scope and stage, never
   clinical outcomes or comparative efficacy. */
import type { BlogPost, BlogPostContent } from './blog';
import type { Lang } from '../i18n/ui';

type Copy = { title: string; excerpt: string; heading: string; body: string };
const langs: Lang[] = ['ru', 'en', 'ko', 'zh', 'ja', 'it', 'de', 'fr', 'tr', 'es', 'pt', 'he', 'hi'];
const make = (copy: Copy): BlogPostContent => ({
  title: copy.title, excerpt: copy.excerpt, seoTitle: `${copy.title} · Teranova`,
  seoDesc: copy.excerpt, sections: [{ h: copy.heading, p: [copy.body] }],
});
const post = (slug: string, hero: string, copy: Partial<Record<Lang, Copy>>): BlogPost => ({
  slug, category: 'overview', date: '2026-11-01', related: ['agingtarget', 'medical'],
  /* The source deck is in Korean and the research vocabulary is safety-critical.
     The supplied English rendition is retained for locales without an approved
     medical translation, rather than inventing medical claims in a machine
     translation. */
  supplier: 'agingtarget', hero, i18n: Object.fromEntries(langs.map((lang) => [lang, make(copy[lang] ?? copy.en!)])) as Partial<Record<Lang, BlogPostContent>>,
});

export const agingTargetPosts: BlogPost[] = [
  post('agingtarget-research-programs', '/img/suppliers/agingtarget/gallery/ir-2.jpg', {
    ru: { title: 'AgingTarget: две исследовательские программы', excerpt: 'Материалы компании описывают две программы малых молекул для атеросклероза и болезни Альцгеймера.', heading: 'Что сообщает компания', body: 'В корпоративной презентации от 5 октября 2026 года AgingTarget указывает две исследовательские программы: атеросклероз, связанный в материалах компании со старением сосудов, и болезнь Альцгеймера. Компания относит оба кандидата к этапу до доклинических исследований. Это описание компании, а не вывод об эффективности.' },
    en: { title: 'AgingTarget: two research programs', excerpt: 'Company materials describe two small-molecule programs for atherosclerosis and Alzheimer’s disease.', heading: 'What the company states', body: 'In its company presentation dated 5 October 2026, AgingTarget identifies two research programs: atherosclerosis, associated in the company materials with vascular ageing, and Alzheimer’s disease. The company places both candidates before the preclinical stage. This is the company’s description, not an efficacy conclusion.' },
    ko: { title: 'AgingTarget: 두 가지 연구 프로그램', excerpt: '회사 자료는 동맥경화증과 알츠하이머병을 위한 두 가지 소분자 프로그램을 설명합니다.', heading: '회사가 밝힌 내용', body: '2026년 10월 5일자 회사 발표자료에서 AgingTarget은 혈관 노화와 연관지은 동맥경화증 및 알츠하이머병이라는 두 연구 프로그램을 제시합니다. 회사는 두 후보물질을 전임상 이전 단계로 분류합니다. 이는 회사의 설명이며 효능에 대한 결론이 아닙니다.' },
  }),
  post('agingtarget-research-stage-and-partnership', '/img/suppliers/agingtarget/gallery/ir-10.jpg', {
    ru: { title: 'AgingTarget: стадия исследований и партнёрства', excerpt: 'Компания указывает переддоклиническую стадию и рассматривает исследования, лицензирование и трансфер технологий.', heading: 'Как сформулирована стадия', body: 'По материалам AgingTarget от 5 октября 2026 года обе программы находятся до доклинических исследований. Компания называет среди направлений сотрудничества инвестиции, совместные исследования, лицензирование и трансфер технологий. Конкретные условия, документация и применимость для рынка обсуждаются по отдельному запросу.' },
    en: { title: 'AgingTarget: research stage and partnership', excerpt: 'The company identifies a pre-preclinical stage and names research, licensing and technology transfer among its interests.', heading: 'How the stage is described', body: 'According to AgingTarget materials dated 5 October 2026, both programs are before the preclinical stage. The company names investment, collaborative research, licensing and technology transfer among its partnership directions. Specific terms, documentation and market applicability are discussed for an individual enquiry.' },
    ko: { title: 'AgingTarget: 연구 단계와 파트너십', excerpt: '회사는 전임상 이전 단계를 밝히고 공동연구, 라이선싱 및 기술이전을 협력 방향으로 제시합니다.', heading: '단계에 대한 설명', body: '2026년 10월 5일자 AgingTarget 자료에 따르면 두 프로그램 모두 전임상 이전 단계입니다. 회사는 투자, 공동연구, 라이선싱 및 기술이전을 협력 방향으로 언급합니다. 구체적인 조건, 문서와 시장 적용 가능성은 개별 문의에서 논의합니다.' },
  }),
  post('agingtarget-scientific-advisory-group', '/img/suppliers/agingtarget/gallery/ir-17.jpg', {
    ru: { title: 'AgingTarget: команда и научные консультанты', excerpt: 'В презентации компании перечислены руководители команд и научные консультанты с областями экспертизы.', heading: 'Структура, указанная в презентации', body: 'В презентации AgingTarget от 5 октября 2026 года названы CEO/CTO Dr. Kim, руководитель команды синтеза новых препаратов Dr. Chung и научные консультанты. Среди указанных областей их экспертизы есть болезнь Альцгеймера, онкология, разработка лекарств, органическая химия, биохимия и молекулярное моделирование. Сведения приведены по материалам компании.' },
    en: { title: 'AgingTarget: team and scientific advisers', excerpt: 'The company presentation lists team leaders and scientific advisers with their stated fields of expertise.', heading: 'Structure stated in the presentation', body: 'The AgingTarget presentation dated 5 October 2026 names CEO/CTO Dr. Kim, New Drug Synthesis Team Director Dr. Chung and scientific advisers. Their stated fields include Alzheimer’s disease, oncology, drug development, organic chemistry, biochemistry and molecular modelling. The information is drawn from company materials.' },
    ko: { title: 'AgingTarget: 팀과 과학 자문단', excerpt: '회사 발표자료에는 팀 책임자와 과학 자문단 및 각 전문 분야가 기재되어 있습니다.', heading: '발표자료에 제시된 구조', body: '2026년 10월 5일자 AgingTarget 발표자료에는 CEO/CTO Dr. Kim, 신약 합성팀 책임자 Dr. Chung 및 과학 자문단이 기재되어 있습니다. 명시된 전문 분야에는 알츠하이머병, 종양학, 약물 개발, 유기화학, 생화학 및 분자 모델링이 포함됩니다. 이 정보는 회사 자료에 근거합니다.' },
  }),
];

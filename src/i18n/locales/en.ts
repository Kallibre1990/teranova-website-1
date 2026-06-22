import type { UIDict } from './ru';

export const en: UIDict = {
  htmlLang: 'en',
  langShort: 'EN',
  langName: 'English',

  nav: {
    catalog: 'Catalog',
    verify: 'How we verify',
    buyers: 'On demand',
    suppliers: 'For suppliers',
    about: 'About',
    faq: 'FAQ',
    contacts: 'Contacts',
  },

  common: {
    cta_request: 'Submit a request',
    menu: 'Menu',
    close: 'Close',
    to_top: 'To top',
    skip: 'Skip to content',
    switch_lang: 'Language',
    scroll: 'Scroll down',
    loading: 'Loading',
  },

  meta: {
    home_title: 'Teranova Group — verified Korean manufacturers & end-to-end deal support',
    home_desc:
      'We find, verify and support supply from Korean factories to your warehouse: marine supply, cosmetics & care (OEM/ODM), medical & aesthetics, industrial equipment, commercial & special vehicles.',
  },

  marquee: [
    'Marine supply',
    'Cosmetics & care',
    'Medical & aesthetics',
    'Industrial equipment',
    'Commercial & special vehicles',
    'Adjacent sectors',
  ],

  hero: {
    sup: 'Korea → world',
    title: 'Verified Korean manufacturers — direct',
    sub: 'We find, verify and support supply from Korean factories to your warehouse. Transparently, tailored to your task.',
    cta_primary: 'View catalog',
    cta_secondary: 'Source on demand',
    scroll_hint: 'Scroll down',
  },

  verify: {
    sup: 'Trust',
    title: 'Verification first, then contact',
    intro:
      'Every supplier has a status. It is a documented fact, not a promise of outcome — we coordinate and support the deal.',
    card_visited_t: 'Verified — site visit',
    card_visited_d: 'The founder was at the factory in person — with photos and the visit date.',
    card_provided_t: 'Company-provided data',
    card_provided_d: 'Information provided by the supplier — a personal visit has not happened yet.',
    note: 'Quality terms are fixed in the contract with the supplier. We do not publish suppliers’ personal contacts — all communication goes through Teranova.',
    link: 'How we verify',
  },

  categories: {
    sup: 'Catalog',
    title: 'What we supply from Korea',
    sub: 'The catalog is what we have already verified. What is not there — we source on demand. Commercial, passenger and special vehicles are a separate direction; consumer cars are out of scope.',
    demo_note: 'The catalog is being populated — some data is currently for demonstration.',
    groups: [
      { key: 'marine', name: 'Marine supply', blurb: 'Full supply for ships and shipyards.', items: ['engines & spare parts', 'deck equipment', 'propellers, rudders, thrusters', 'navigation & communications', 'life-saving & firefighting', 'paints & coatings'] },
      { key: 'cosmetics', name: 'Cosmetics & care (OEM/ODM)', blurb: 'Korean cosmetics and contract manufacturing under your brand.', items: ['skincare', 'serums & ampoules', 'sun care (SPF)', 'sheet masks & patches', 'color cosmetics', 'cosmetic packaging'] },
      { key: 'medical', name: 'Medical & aesthetics', blurb: 'Equipment and consumables for clinics and aesthetic medicine.', items: ['lasers, IPL, HIFU, RF', 'fillers, threads, skinboosters', 'dentistry (implants, CAD/CAM)', 'diagnostics & tests', 'rehabilitation', 'hospital equipment'] },
      { key: 'industrial', name: 'Industrial equipment', blurb: 'Machine tools, automation and components for manufacturing.', items: ['CNC machines', 'laser & plasma cutting', 'industrial robots', 'hydraulics & pneumatics', 'pumps & valves', 'molds & tooling'] },
      { key: 'transport', name: 'Commercial & special vehicles', blurb: 'Freight, passenger and special vehicles with parts.', items: ['trucks & tractor units', 'buses', 'construction machinery', 'agricultural machinery', 'special vehicles', 'trailers, tires, batteries'] },
      { key: 'adjacent', name: 'Adjacent sectors', blurb: 'Broad coverage of niches where Korea is strong.', items: ['building materials', 'food & packaging', 'water treatment & ecology', 'energy & renewables', 'industrial electronics & LED', 'technical textiles'] },
    ],
  },

  ondemand: {
    sup: 'On demand',
    title: 'Not in the catalog — we’ll find the factory for you',
    sub: 'Describe what you need. We source Korean manufacturers for your task, verify them and arrange supply. The catalog is what is already verified; on demand is something new for you.',
    points: [
      'Clarify the task and requirements',
      'Source and verify factories',
      'Agree prices and terms',
      'Support payment, logistics and control',
    ],
    form_title: 'Submit a request',
    form_note: 'After you submit, we will contact you, clarify the details and propose options. Prices and terms are tailored to your request.',
  },

  presence: {
    sup: 'Where we’re close',
    title: 'We’re next to the manufacturer',
    onsite_lead: 'In these countries we have people on the ground — we find, visit and personally verify suppliers:',
    countries: ['Korea', 'Japan', 'China', 'Türkiye'],
    other: 'Requests for other regions are taken on request.',
    buyers_lead: 'We support buyers worldwide:',
    buyers_regions: ['CIS', 'Europe', 'Türkiye', 'USA', 'Asia'],
  },

  how: {
    sup: 'How we work',
    title: 'Three steps — from request to delivery',
    sub: 'Transparent and tailored to your task.',
    steps: [
      { t: 'Request', d: 'You tell us what you need.' },
      { t: 'Sourcing & verification', d: 'We find the factory, verify it and agree terms.' },
      { t: 'Deal & delivery', d: 'We support payment, logistics and control through to receipt.' },
    ],
  },

  cta: {
    sup: 'Let’s start',
    title: 'Tell us what you need to find in Korea',
    sub: 'One contact — and we take sourcing, verification and supply on ourselves.',
    button: 'Get in touch',
  },

  form: {
    company: 'Company',
    contact: 'Contact person',
    email: 'Email',
    phone: 'Phone / messenger',
    need: 'What you need to find',
    volume: 'Volume',
    timeline: 'Timeline',
    comment: 'Comment',
    submit: 'Send request',
    required_hint: 'Fields marked * are required. We use your data only to process your request.',
    ph_company: 'Your company',
    ph_contact: 'Full name',
    ph_email: 'business@email.com',
    ph_phone: '+1 / +82 …',
    ph_need: 'e.g. OEM serums, marine pumps, CNC machine',
    ph_volume: 'e.g. 50,000 units',
    ph_timeline: 'e.g. 6–8 weeks',
    ph_comment: 'Details, requirements, certification…',
  },

  thanks: {
    title: 'Request sent',
    body: 'Thank you! We have received your request and will contact you shortly.',
    back: 'Back to home',
  },

  notfound: {
    title: 'This page is coming soon',
    body: 'This section is still in progress. Head back to the home page — that one is ready.',
    back: 'Go home',
  },

  footer: {
    blurb: 'We connect verified Korean manufacturers with buyers worldwide and support the entire deal.',
    nav_title: 'Navigation',
    contact_title: 'Contacts',
    loc: 'Korea',
    joint_brand: 'Teranova Group — a joint brand of AIA Group Ltd and Teranova Group Ltd.',
    disclaimer:
      'The catalog is being populated; some data is for demonstration. Prices are indicative and not an offer. Teranova Group coordinates and supports deals through trusted partners and is not a manufacturer.',
    rights: '© 2025 Teranova Group',
  },
};

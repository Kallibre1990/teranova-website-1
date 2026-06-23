import type { UIDict } from './ru';

export const en: UIDict = {
  htmlLang: 'en',
  langShort: 'EN',
  langName: 'English',

  nav: {
    catalog: 'Catalog',
    buyers: 'For buyers',
    verify: 'How we verify',
    ondemand: 'On demand',
    how: 'How we work',
    presence: 'Where we are',
    suppliers: 'For suppliers',
    about: 'About',
    faq: 'FAQ',
    contacts: 'Contacts',
    team: 'Team',
    tenders: 'Tenders',
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
    prev: 'Previous',
    next: 'Next',
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
    card_visited_d: 'A team member visited the factory in person — with photos and the visit date.',
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
    more: 'Learn more',
    groups: [
      { key: 'marine', name: 'Marine supply', blurb: 'Full supply for ships and shipyards.', items: ['engines & spare parts', 'deck equipment', 'propellers, rudders, thrusters', 'navigation & communications', 'life-saving & firefighting', 'paints & coatings'] },
      { key: 'cosmetics', name: 'Cosmetics & care (OEM/ODM)', blurb: 'Korean cosmetics and contract manufacturing under your brand.', items: ['skincare', 'serums & ampoules', 'sun care (SPF)', 'sheet masks & patches', 'color cosmetics', 'cosmetic packaging'] },
      { key: 'medical', name: 'Medical & aesthetics', blurb: 'Equipment and consumables for clinics and aesthetic medicine.', items: ['lasers, IPL, HIFU, RF', 'fillers, threads, skinboosters', 'dentistry (implants, CAD/CAM)', 'diagnostics & tests', 'rehabilitation', 'hospital equipment'] },
      { key: 'industrial', name: 'Industrial equipment', blurb: 'Machine tools, automation and components for manufacturing.', items: ['CNC machines', 'laser & plasma cutting', 'industrial robots', 'hydraulics & pneumatics', 'pumps & valves', 'molds & tooling'] },
      { key: 'transport', name: 'Commercial & special vehicles', blurb: 'Freight, passenger and special vehicles with parts.', items: ['trucks & tractor units', 'buses', 'construction machinery', 'agricultural machinery', 'special vehicles', 'trailers, tires, batteries'] },
      { key: 'adjacent', name: 'Adjacent sectors', blurb: 'Broad coverage of niches where Korea is strong.', items: ['building materials', 'food & packaging', 'water treatment & ecology', 'energy & renewables', 'industrial electronics & LED', 'technical textiles'] },
      { key: 'chemical', name: 'Chemicals & materials', blurb: 'Chemical raw materials, polymers and industrial materials.', items: ['chemical raw materials & reagents', 'plastics & polymers', 'rubber', 'paints & coatings', 'adhesives & sealants', 'fertilizers & agrochemicals'] },
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

  about_home: {
    sup: 'About us',
    title: 'Real people and personal factory visits',
    body: 'Teranova finds manufacturers in Korea, verifies them — up to a personal on-site visit to the factory — and runs the deal from the first request to receipt of the goods. One accountable partner instead of a chain of middlemen.',
    photo_note: 'Real photos will go here: the founder, the team, factory visits.',
    cta: 'More about the company',
  },

  tenders_home: {
    sup: 'Tenders',
    title: 'Turnkey tenders & procurement',
    body: 'We source Korean manufacturers for your tender or RFQ, help prepare the proposal and support the supply.',
    cta: 'Send a tender request',
  },

  team_home: {
    sup: 'Team',
    title: 'Behind every deal are real people',
    body: 'The founder, the lead and the managers who personally handle sourcing, verification and supply.',
    cta: 'Meet the team',
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

  pages: {
    catalog: {
      title: 'Catalog of directions',
      sub: 'Seven sourcing directions from Korea. Open a direction to see sub-niches and verified suppliers. The catalog is being populated — some cards are demonstration samples.',
      view: 'View suppliers',
    },
    group: {
      back: 'All directions',
      subniches: 'Sub-niches',
      products_title: 'Sample products',
      suppliers_title: 'Suppliers in this direction',
      demo_badge: 'Demo data',
      demo_note: 'Sample cards — the catalog is being populated with real suppliers.',
      request: 'Request in this category',
      sample_a: 'Sample · Supplier A',
      sample_b: 'Sample · Supplier B',
      sample_c: 'Sample · Supplier C',
      role_maker: 'Korea · manufacturer',
      role_oem: 'Korea · OEM/ODM',
      role_exporter: 'Korea · exporter',
      blurbs: [
        'Full-cycle manufacturer — from development to series production.',
        'OEM/ODM: production under your own brand.',
        'Exporter experienced in shipping to the CIS, Europe and Asia.',
        'Supplier of components and consumables.',
      ],
    },
    buyers: {
      title: 'If you buy from Korea',
      sub: 'You get one accountable partner on the Korean side. We speak to the factory in its language, check the product and take on what usually breaks a supply.',
      cards: [
        { t: 'Verified supplier', d: 'We source factories for your task and verify them — up to a personal visit to the production.' },
        { t: 'Turnkey deal', d: 'Negotiations, contract, payment, logistics and customs, quality control — we coordinate and support.' },
        { t: 'A language you understand', d: 'We work in English and Russian and support buyers from the CIS, Europe, Türkiye, the USA and Asia.' },
      ],
    },
    verify: {
      title: 'How we verify',
      sub: 'Every supplier has a status — a documented fact, not a promise of outcome. We coordinate and support the deal.',
      visit_title: 'What a “site visit” means',
      visit_body: 'Our team member comes to the production, meets the management, inspects the line and records the visit with dated photos. The “Verified — site visit” status is backed by fact, not words.',
      transparency_title: 'Transparent statuses',
      transparency_body: 'If a visit has not happened yet, the supplier is marked “Company-provided data” — honestly, without overstatement. Quality terms are fixed in the contract. We do not publish suppliers’ personal contacts — all communication goes through Teranova.',
    },
    about: {
      title: 'About the company',
      sub: 'Teranova Group is a B2B trust partner: we connect verified Korean manufacturers with buyers worldwide and support the entire deal.',
      who_title: 'Who we are',
      who_body: 'We find manufacturers in Korea, verify them and run the deal from the first request to receipt of the goods — one accountable partner instead of a chain of middlemen. We coordinate and support; quality terms are fixed in the contract with the supplier.',
      onsite_title: 'On the ground, where things are made',
      markets_title: 'Who we support',
    },
    suppliers: {
      title: 'For suppliers',
      sub: 'Do you manufacture in Korea and want to reach buyers in the CIS, Europe, Türkiye, the USA and Asia? List in the Teranova catalog.',
      cards: [
        { t: 'Why list', d: 'Access to verified buyers and deal support in their language — without the middleman chain.' },
        { t: 'What we provide', d: 'We present your profile to buyers and help with communication, contract and logistics. Requests go through Teranova.' },
        { t: 'How to join', d: 'Submit a request — we will get in touch, discuss the product and terms. A personal visit for the “Verified” status is possible.' },
      ],
      free_note: 'Listing in the catalog is currently free.',
      cta: 'Become a supplier',
    },
    faq: {
      title: 'Questions and answers',
      sub: 'A short take on how we work. Didn’t find an answer — write to us.',
      items: [
        { q: 'Are you a manufacturer or an intermediary?', a: 'We are a B2B trust partner: we find and verify Korean manufacturers and support the deal. We do not manufacture ourselves.' },
        { q: 'What do the verification statuses mean?', a: '“Verified — site visit” means the founder was at the factory in person, with photos and a date. “Company-provided data” means a profile from the supplier’s words. It is a documented fact, not a promise of outcome.' },
        { q: 'What is in the catalog vs on demand?', a: 'The catalog is what we have already verified. If something is missing, we find a factory for your request: source, verify and arrange supply.' },
        { q: 'Which directions do you cover?', a: 'Marine supply; cosmetics & care (OEM/ODM); medical & aesthetics; industrial equipment; commercial & special vehicles; adjacent sectors; chemicals & materials. Consumer cars are out of scope.' },
        { q: 'Where are your buyers from?', a: 'We support buyers from the CIS, Europe, Türkiye, the USA and Asia. On the ground we are in Korea, Japan, China and Türkiye; other regions on request.' },
        { q: 'Do you publish suppliers’ contacts?', a: 'No. We do not publish suppliers’ personal contacts — all communication goes through Teranova. A supplier may agree to publication if they wish.' },
      ],
    },
    contacts: {
      title: 'Contacts',
      sub: 'Tell us what you need to find in Korea — we take on sourcing, verification and supply.',
      email_label: 'Email',
      phone_label: 'Phone',
      kakao_label: 'KakaoTalk',
      kakao_value: 'On request',
      legal_label: 'Legal entity',
      legal_value: 'AIA Group Ltd. (Korea)',
      loc_label: 'Presence',
      loc_value: 'Korea · Japan · China · Türkiye',
      channels: {
        info: { t: 'General enquiries', d: 'First point of contact: we receive all enquiries and route them to the right specialist.' },
        buyers: { t: 'For buyers', d: 'Requests to source goods, prices, supply terms, buyer support.' },
        suppliers: { t: 'For suppliers', d: 'Manufacturer registration, partnership offers, price lists and terms.' },
        deals: { t: 'Deal support', d: 'Documents, logistics, payments, status of active orders.' },
        tenders: { t: 'Tenders', d: 'Requests to run procurement tenders.' },
      },
    },
    team: {
      title: 'Team',
      sub: 'Behind every request are specific people: we know the product, the language and the factory, and we run your deal personally.',
      members: [
        { photo: '/img/team/anton-madelkanov.jpg', name: 'Anton Madelkanov', role: 'Founder, Teranova Group · CEO, AIA Group', bio: 'Founder and architect of the project. Responsible for strategy, the Korean supplier network and personal verification — production visits, meetings with management, photo documentation. Oversees key deals and the international direction.' },
        { photo: '/img/team/irene-tutova.jpg', name: 'Irene Tutova', role: 'CEO, Teranova Group', bio: "Leads the company's operations — management, development, client and partner relations." },
        { photo: '/img/team/ha-jeong-su.jpg', name: 'Ha Jeong-su (Denis) 하정수', role: 'Manager — Suppliers', bio: 'Works with Korean suppliers. Communication in Korean and Russian, order support, negotiation of prices and supply terms.' },
        { photo: '/img/team/an-larisa.jpg', name: 'Larisa An 안라리사', role: 'Manager — Buyers', bio: 'Works with buyers. Intake and coordination of requests, deal support, communication between parties.' },
      ],
      note: 'We do not publish staff personal addresses — write to us via the form or at info@teranovagroup.com.',
      cta: 'Contact the team',
    },
    tenders: {
      title: 'Tenders & procurement',
      sub: 'We organise and run turnkey procurement tenders — from collecting offers at vetted Korean factories to selection and delivery. Tenders come in different shapes: we draft the brief, agree the criteria and run the whole process.',
      points: [
        'We draft the tender brief: requirements, terms, criteria',
        'We collect offers from vetted Korean suppliers',
        'We compare at market prices and help you choose',
        'We support the deal and delivery through to receipt',
      ],
      dev_note: 'For now we run tenders manually, on request. A separate online platform where buyers and suppliers run tenders themselves is in development.',
      form_title: 'Send a tender request',
      form_note: 'Describe the task — we will come back with options and tender terms.',
      cta: 'Send a tender request',
    },
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

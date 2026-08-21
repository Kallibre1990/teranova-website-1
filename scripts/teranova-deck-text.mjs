/* Тексты профиля компании. Каждый язык — функция от статистики витрины, чтобы
   цифра производителей приходила из данных, а не из памяти автора.

   Источники текста: страницы сайта «О компании», «Поставщикам», «Как мы
   проверяем», «Вопросы» и Teranova_CHARTER. Ничего сверх них не добавлено. */

export const TEXTS = {
  en: (s) => ({
    eyebrow: 'Teranova Group · Company profile',
    tagline: 'Korean manufacturers, taken to buyers abroad',
    descriptor: 'A B2B platform and full deal support · Korea',

    who_h: 'Who we are',
    who: [
      'Teranova Group is a trade platform registered in Korea. The legal entity behind it is AIA Group Ltd.; the founder is Anton Madelkanov. We work on the buyer’s side: a partner brings us a requirement, we find the manufacturer who genuinely fits it, and then carry the deal through — negotiation, documents, logistics, customs clearance and translation.',
      'We hold no stock and we do not resell. We are paid a commission on a completed deal, which is why we have no reason to push one manufacturer over another. It also means we say plainly when a requirement does not fit what a manufacturer actually makes.',
      `Today ${s.total} manufacturers are published on the platform — ${s.korea} of them in Korea. Each has a company profile and product pages in eleven languages, built from the materials the manufacturer provided and published only with written consent.`,
    ],
    who_facts: ['Registered in Korea', 'No stock, no resale', 'Paid on a completed deal', 'Eleven languages'],

    listing_h: 'What a listing gives you',
    listing_lead: 'Publication is free for the manufacturer and creates no obligation on your side.',
    listing: [
      { n: 'A profile in eleven languages', d: 'Company page and product pages in English, Korean, Chinese, Japanese, Russian, Spanish, Portuguese, German, French, Italian and Turkish. A buyer reads about you in their own language.' },
      { n: 'Documents built from your data', d: 'A terms sheet and a presentation, generated from the same data as the page, so a buyer can download them and circulate them internally.' },
      { n: 'Articles, not just a card', d: 'We write about the technology behind your products, so a buyer who has never heard of the brand understands what makes it different.' },
      { n: 'Your contacts stay closed', d: 'Direct contact details are not published. Enquiries come to us first, and we qualify them before they reach you.' },
    ],
    listing_note: 'Prices are published only when the manufacturer asks for it. By default the pages show “price on request”.',

    verify_h: 'How we present a manufacturer',
    verify_lead: 'A buyer needs to know where a fact came from. We use exactly two statuses and never blur the line between them.',
    verify: [
      { n: 'Verified — personal visit', d: 'The founder has been to the office or the plant, met management and taken photographs. The page carries the date and the photographs. A meeting at a trade show does not count as a visit.' },
      { n: 'Information provided by the company', d: 'The default. Everything on the page comes from the manufacturer’s own materials, and the page says so plainly.' },
    ],
    verify_note: 'A visit is a documented fact about what we saw. Certificates and registrations are shown as stated by the company; copies are provided to a buyer at the deal stage.',

    deal_h: 'How a deal runs',
    deal: [
      { n: 'Enquiry', d: 'A buyer comes to us. We check the country, the channel, the volume and whether they are able to import the goods themselves.' },
      { n: 'A concrete request', d: 'We bring you a request with figures and terms, not a name. If an enquiry does not hold up, you never hear about it.' },
      { n: 'Introduction', d: 'When it becomes concrete, you and the buyer sit at the same table with us present — a call or a meeting. We do not hold information back.' },
      { n: 'Tripartite contract', d: 'Signed by the buyer, the manufacturer and Teranova. Payment for the goods goes to you directly. Our commission is a separate line in the same contract, which you sign and therefore see.' },
      { n: 'Execution', d: 'Logistics, documents, customs clearance and translation — the contract states which of these we take on for that particular deal.' },
    ],

    cost_h: 'What it costs you',
    cost_lead: 'Nothing to be listed, and nothing until a deal is done.',
    cost: [
      { n: 'Publication and updates', d: 'Free. New products, certifications and company news are added to your profile as you send them.' },
      { n: 'Our commission', d: 'Paid on a completed deal and written into the tripartite contract. It is not a margin added to your price and not a hidden fee. The rate depends on the deal and is agreed before anything is signed.' },
      { n: 'What we take on', d: 'Stated per deal in the contract, because the scope changes from one deal to the next and we would rather write it down than leave it assumed.' },
    ],
    cost_note: 'Logistics and brokerage are quoted separately and shown in full on the invoice.',

    markets_h: 'Markets, channels and categories',
    markets_sub1: 'Markets',
    markets: ['Mexico', 'Brazil', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Uruguay', 'Paraguay', 'Europe', 'CIS'],
    markets_sub2: 'Channels',
    channels: ['Importers and distributors', 'Pharmacy and specialty retail', 'Clinics and salons', 'Marketplaces and e-commerce'],
    markets_sub3: 'Categories',
    categories: ['K-beauty (OEM/ODM)', 'Medical and aesthetics', 'Marine supply', 'Industrial equipment', 'Chemicals', 'Commercial vehicles'],
    markets_note: 'Passenger cars and their parts are outside our scope. We do not approach a market where you already have an official partner — tell us which territories are closed and they stay closed.',

    need_h: 'What we need to publish you',
    need_lead: 'Five things, and none of them are documents you would hesitate to share at this stage.',
    need: [
      { n: 'Written consent', d: 'One line in an email confirming we may use your materials to present your company on the platform.' },
      { n: 'Catalogue and images', d: 'Product photographs and a catalogue. Product names and volumes as they appear on the label — we check the page against the label before publishing.' },
      { n: 'Certifications you hold', d: 'Which certifications and registrations, and which products and markets they cover. Copies are needed only at the deal stage.' },
      { n: 'Closed territories', d: 'Countries where you already have an exclusive or official partner, so we do not bring you a buyer you cannot serve.' },
      { n: 'Prices — optional', d: 'Send them if you want a buyer to see them. If you would rather not, the page shows “price on request” and nothing is published.' },
    ],

    cta_h: 'Ready to be published?',
    cta_d: 'Reply to this letter or write to us. We prepare the profile from your materials, send you the live link, and change anything you ask the same day.',
  }),
};

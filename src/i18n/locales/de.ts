import type { UIDict } from './ru';
import type { DeepPartial } from '../deep';

const de: DeepPartial<UIDict> = {
  nav: {
    catalog: "Katalog",
    verify: "Wie wir prüfen",
    buyers: "Auf Anfrage",
    suppliers: "Für Lieferanten",
    about: "Über uns",
    faq: "FAQ",
    contacts: "Kontakt",
  },

  common: {
    cta_request: "Anfrage senden",
    menu: "Menü",
    close: "Schließen",
    to_top: "Nach oben",
    skip: "Zum Inhalt springen",
    switch_lang: "Sprache",
    scroll: "Nach unten scrollen",
    loading: "Wird geladen",
  },

  meta: {
    home_title: "Teranova Group — geprüfte koreanische Hersteller und durchgängige Begleitung Ihrer Lieferungen",
    home_desc:
      "Wir finden, prüfen und begleiten Lieferungen von koreanischen Werken bis zu Ihrem Lager: Schiffsausrüstung, Kosmetik & Pflege (OEM/ODM), Medizin & Ästhetik, Industrieausrüstung, Nutz- und Spezialfahrzeuge.",
  },

  marquee: [
    "Schiffsausrüstung",
    "Kosmetik & Pflege",
    "Medizin & Ästhetik",
    "Industrieausrüstung",
    "Nutz- und Spezialfahrzeuge",
    "Angrenzende Branchen",
  ],

  hero: {
    sup: "Korea → Welt",
    title: "Geprüfte koreanische Hersteller — direkt",
    sub: "Wir finden, prüfen und begleiten Lieferungen von koreanischen Werken bis zu Ihrem Lager. Transparent und auf Ihre Aufgabe zugeschnitten.",
    cta_primary: "Katalog ansehen",
    cta_secondary: "Auf Anfrage beschaffen",
    scroll_hint: "Nach unten scrollen",
  },

  verify: {
    sup: "Vertrauen",
    title: "Erst die Prüfung, dann der Kontakt",
    intro:
      "Jeder Lieferant hat einen Status. Das ist eine dokumentierte Tatsache, kein Versprechen eines Ergebnisses — wir koordinieren und begleiten das Geschäft.",
    card_visited_t: "Geprüft — Besuch vor Ort",
    card_visited_d: "Der Gründer war persönlich im Werk — mit Fotos und Besuchsdatum.",
    card_provided_t: "Vom Unternehmen bereitgestellte Daten",
    card_provided_d: "Vom Lieferanten bereitgestellte Informationen — ein persönlicher Besuch hat noch nicht stattgefunden.",
    note: "Die Qualitätsbedingungen werden im Vertrag mit dem Lieferanten festgelegt. Persönliche Kontaktdaten der Lieferanten veröffentlichen wir nicht — die gesamte Kommunikation läuft über Teranova.",
    link: "Wie wir prüfen",
  },

  categories: {
    sup: "Katalog",
    title: "Was wir aus Korea liefern",
    sub: "Der Katalog enthält das, was wir bereits geprüft haben. Was nicht dabei ist, beschaffen wir auf Anfrage. Nutz-, Personen- und Spezialfahrzeuge sind ein eigener Bereich; Pkw für Endverbraucher liegen außerhalb unseres Profils.",
    demo_note: "Der Katalog wird befüllt — einige Daten dienen derzeit nur zur Veranschaulichung.",
    groups: [
      { key: "marine", name: "Schiffsausrüstung", blurb: "Vollständige Ausrüstung für Schiffe und Werften.", items: ["Motoren & Ersatzteile", "Deckausrüstung", "Propeller, Ruder, Strahlruder", "Navigation & Kommunikation", "Rettungs- & Brandschutztechnik", "Lacke & Beschichtungen"] },
      { key: "cosmetics", name: "Kosmetik & Pflege (OEM/ODM)", blurb: "Koreanische Kosmetik und Auftragsfertigung unter Ihrer Marke.", items: ["Hautpflege", "Seren & Ampullen", "Sonnenschutz (SPF)", "Tuchmasken & Patches", "dekorative Kosmetik", "Kosmetikverpackungen"] },
      { key: "medical", name: "Medizin & Ästhetik", blurb: "Geräte und Verbrauchsmaterialien für Kliniken und ästhetische Medizin.", items: ["Laser, IPL, HIFU, RF", "Filler, Fäden, Skinbooster", "Zahnmedizin (Implantate, CAD/CAM)", "Diagnostik & Tests", "Rehabilitation", "Krankenhausausstattung"] },
      { key: "industrial", name: "Industrieausrüstung", blurb: "Werkzeugmaschinen, Automatisierung und Komponenten für die Fertigung.", items: ["CNC-Maschinen", "Laser- & Plasmaschneiden", "Industrieroboter", "Hydraulik & Pneumatik", "Pumpen & Ventile", "Formen & Werkzeuge"] },
      { key: "transport", name: "Nutz- und Spezialfahrzeuge", blurb: "Fracht-, Personen- und Spezialfahrzeuge samt Teilen.", items: ["Lkw & Sattelzugmaschinen", "Busse", "Baumaschinen", "Landmaschinen", "Spezialfahrzeuge", "Anhänger, Reifen, Batterien"] },
      { key: "adjacent", name: "Angrenzende Branchen", blurb: "Breite Abdeckung von Nischen, in denen Korea stark ist.", items: ["Baustoffe", "Lebensmittel & Verpackung", "Wasseraufbereitung & Ökologie", "Energie & erneuerbare Energien", "Industrieelektronik & LED", "technische Textilien"] },
    ],
  },

  ondemand: {
    sup: "Auf Anfrage",
    title: "Nicht im Katalog — wir finden das Werk für Sie",
    sub: "Beschreiben Sie, was Sie benötigen. Wir beschaffen koreanische Hersteller für Ihre Aufgabe, prüfen sie und organisieren die Lieferung. Der Katalog enthält bereits Geprüftes; auf Anfrage finden wir Neues für Sie.",
    points: [
      "Aufgabe und Anforderungen klären",
      "Werke beschaffen und prüfen",
      "Preise und Bedingungen abstimmen",
      "Zahlung, Logistik und Kontrolle begleiten",
    ],
    form_title: "Anfrage senden",
    form_note: "Nach Ihrer Anfrage melden wir uns, klären die Details und schlagen Optionen vor. Preise und Bedingungen werden auf Ihre Anfrage zugeschnitten.",
  },

  presence: {
    sup: "Wo wir nah sind",
    title: "Wir sind direkt beim Hersteller",
    onsite_lead: "In diesen Ländern haben wir Mitarbeiter vor Ort — wir finden, besuchen und prüfen Lieferanten persönlich:",
    countries: ["Korea", "Japan", "China", "Türkiye"],
    other: "Anfragen für andere Regionen nehmen wir auf Anfrage an.",
    buyers_lead: "Käufer begleiten wir weltweit:",
    buyers_regions: ["GUS", "Europa", "Türkiye", "USA", "Asien"],
  },

  how: {
    sup: "Wie wir arbeiten",
    title: "Drei Schritte — von der Anfrage bis zur Lieferung",
    sub: "Transparent und auf Ihre Aufgabe zugeschnitten.",
    steps: [
      { t: "Anfrage", d: "Sie teilen uns mit, was Sie benötigen." },
      { t: "Beschaffung & Prüfung", d: "Wir finden das Werk, prüfen es und stimmen die Bedingungen ab." },
      { t: "Geschäft & Lieferung", d: "Wir begleiten Zahlung, Logistik und Kontrolle bis zum Erhalt." },
    ],
  },

  cta: {
    sup: "Legen wir los",
    title: "Sagen Sie uns, was Sie in Korea finden möchten",
    sub: "Ein Kontakt — und Beschaffung, Prüfung und Lieferung übernehmen wir für Sie.",
    button: "Kontakt aufnehmen",
  },

  form: {
    company: "Unternehmen",
    contact: "Ansprechpartner",
    email: "E-Mail",
    phone: "Telefon / Messenger",
    need: "Was Sie finden möchten",
    volume: "Menge",
    timeline: "Zeitrahmen",
    comment: "Kommentar",
    submit: "Anfrage senden",
    required_hint: "Mit * markierte Felder sind Pflichtfelder. Ihre Daten verwenden wir ausschließlich zur Bearbeitung Ihrer Anfrage.",
    ph_company: "Ihr Unternehmen",
    ph_contact: "Vor- und Nachname",
    ph_email: "business@email.com",
    ph_phone: "+49 / +82 …",
    ph_need: "z. B. OEM-Seren, Schiffspumpen, CNC-Maschine",
    ph_volume: "z. B. 50.000 Stück",
    ph_timeline: "z. B. 6–8 Wochen",
    ph_comment: "Details, Anforderungen, Zertifizierung…",
  },

  thanks: {
    title: "Anfrage gesendet",
    body: "Vielen Dank! Wir haben Ihre Anfrage erhalten und melden uns in Kürze bei Ihnen.",
    back: "Zurück zur Startseite",
  },

  notfound: {
    title: "Diese Seite ist bald verfügbar",
    body: "Dieser Bereich befindet sich noch in Arbeit. Kehren Sie zur Startseite zurück — diese ist bereits fertig.",
    back: "Zur Startseite",
  },

  footer: {
    blurb: "Wir verbinden geprüfte koreanische Hersteller mit Käufern weltweit und begleiten das gesamte Geschäft.",
    nav_title: "Navigation",
    contact_title: "Kontakt",
    loc: "Korea",
    joint_brand: "Teranova Group — eine gemeinsame Marke von AIA Group Ltd und Teranova Group Ltd.",
    disclaimer:
      "Der Katalog wird befüllt; einige Daten dienen der Veranschaulichung. Preise sind Richtwerte und stellen kein Angebot dar. Die Teranova Group koordiniert und begleitet Geschäfte über vertrauenswürdige Partner und ist kein Hersteller.",
    rights: "© 2025 Teranova Group",
  },
};

export default de;

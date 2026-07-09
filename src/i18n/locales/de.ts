import type { UIDict } from './ru';
import type { DeepPartial } from '../deep';

const de: DeepPartial<UIDict> = {
  nav: {
    catalog: "Katalog",
    verify: "Wie wir prüfen",
    buyers: "Auf Anfrage",
    suppliers: "Für Lieferanten",
    about: "Über uns",
    team: "Team",
    tenders: "Ausschreibungen",
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
    prev: "Zurück",
    next: "Weiter",
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
    card_visited_d: "Ein Mitarbeiter war persönlich im Werk — mit Fotos und Besuchsdatum.",
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
    more: "Mehr erfahren",
    groups: [
      { key: "marine", name: "Schiffsausrüstung", blurb: "Vollständige Ausrüstung für Schiffe und Werften.", items: ["Motoren & Ersatzteile", "Deckausrüstung", "Propeller, Ruder, Strahlruder", "Navigation & Kommunikation", "Rettungs- & Brandschutztechnik", "Lacke & Beschichtungen"] },
      { key: "cosmetics", name: "Kosmetik & Pflege (OEM/ODM)", blurb: "Koreanische Kosmetik und Auftragsfertigung unter Ihrer Marke.", items: ["Hautpflege", "Seren & Ampullen", "Sonnenschutz (SPF)", "Tuchmasken & Patches", "dekorative Kosmetik", "Kosmetikverpackungen"] },
      { key: "medical", name: "Medizin & Ästhetik", blurb: "Geräte und Verbrauchsmaterialien für Kliniken und ästhetische Medizin.", items: ["Laser, IPL, HIFU, RF", "Filler, Fäden, Skinbooster", "Zahnmedizin (Implantate, CAD/CAM)", "Diagnostik & Tests", "Rehabilitation", "Krankenhausausstattung"] },
      { key: "industrial", name: "Industrieausrüstung", blurb: "Werkzeugmaschinen, Automatisierung und Komponenten für die Fertigung.", items: ["CNC-Maschinen", "Laser- & Plasmaschneiden", "Industrieroboter", "Hydraulik & Pneumatik", "Pumpen & Ventile", "Formen & Werkzeuge"] },
      { key: "transport", name: "Nutz- und Spezialfahrzeuge", blurb: "Fracht-, Personen- und Spezialfahrzeuge samt Teilen.", items: ["Lkw & Sattelzugmaschinen", "Busse", "Baumaschinen", "Landmaschinen", "Spezialfahrzeuge", "Anhänger, Reifen, Batterien"] },
      { key: "adjacent", name: "Angrenzende Branchen", blurb: "Breite Abdeckung von Nischen, in denen Korea stark ist.", items: ["Baustoffe", "Lebensmittel & Verpackung", "Wasseraufbereitung & Ökologie", "Energie & erneuerbare Energien", "Industrieelektronik & LED", "technische Textilien"] },
      { key: "chemical", name: "Chemie & Materialien", blurb: "Chemische Rohstoffe, Polymere und Industriematerialien.", items: ["chemische Rohstoffe & Reagenzien", "Kunststoffe & Polymere", "Gummi", "Lacke & Beschichtungen", "Klebstoffe & Dichtstoffe", "Düngemittel & Agrochemikalien"] },
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
    buyers_regions: ["GUS", "Europa", "Türkiye", "USA", "Asien", "Lateinamerika"],
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
    category: "Kategorie",
    category_ph: "— Kategorie wählen —",
    categories: [
      "Schiffsausrüstung",
      "K-beauty",
      "Medizin & Ästhetik",
      "Industrieausrüstung",
      "Nutz- und Spezialfahrzeuge",
      "Chemie & Materialien",
      "Sonstiges — noch unklar",
    ],
    err_need: "Bitte teilen Sie uns mit, was Sie benötigen.",
    err_contact: "Bitte geben Sie eine gültige E-Mail oder Telefonnummer an.",
    err_email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    err_phone: "Bitte geben Sie eine gültige Telefonnummer ein — mindestens 7 Ziffern.",
    err_required: "Bitte füllen Sie die Pflichtfelder aus.",
    err_network: "Senden fehlgeschlagen. Schreiben Sie uns direkt:",
    req_note: "Pflichtangaben: was Sie benötigen sowie eine E-Mail oder Telefonnummer. Ihre Daten verwenden wir ausschließlich zur Bearbeitung Ihrer Anfrage.",
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

  pages: {
    cosmetics: {
      intro_title: "Koreanische Kosmetik & Pflege — OEM/ODM unter Ihrer eigenen Marke",
      intro_body:
        "Korea ist das weltweite Zentrum der Auftragsfertigung von Kosmetik. Wir finden das passende koreanische Werk für Sie, prüfen es persönlich vor Ort und führen das gesamte Projekt: von Rezeptur und Mustern bis zu Produktion, Zertifizierung und Lieferung bis zu Ihrem Lager. Ob Sie eine Linie unter Ihrer eigenen Marke auf den Markt bringen oder fertige K-beauty einkaufen möchten — wir übernehmen Beschaffung, Verhandlungen und die durchgängige Begleitung.",
      models_title: "Wie die Auftragsfertigung von Kosmetik in Korea funktioniert",
      models_sub: "Drei Modelle — wir wählen das passende für Ihr Ziel.",
      models: [
        { name: "ODM", full: "Original Design Manufacturing", desc: "Das Werk verfügt über eigene fertige Rezepturen und Entwicklungen. Sie wählen eine Rezeptur, passen sie an Ihre Marke an und bringen sie unter Ihrem eigenen Label heraus. Der schnellste und günstigste Weg, eine Marke ohne eigenes Labor zu starten. Die meisten der stärksten koreanischen Werke arbeiten genau nach dem ODM-Prinzip." },
        { name: "OEM", full: "Original Equipment Manufacturing", desc: "Das Werk produziert nach Ihrer fertigen Rezeptur und Spezifikation. Passend, wenn Sie bereits eine eigene Rezeptur haben." },
        { name: "private label", full: "", desc: "Ein fertiges, geprüftes Werksprodukt unter Ihrem Label. Minimale Vorlaufzeit." },
      ],
      process_title: "So läuft ein Projekt ab",
      process_lead: "Typische Phasen:",
      process: [
        "Briefing — welches Produkt, Menge, Markt und Anforderungen.",
        "Werksauswahl nach Kategorie, Menge und Budget.",
        "Rezeptur — eine fertige ODM-Rezeptur oder eine individuelle Entwicklung (OEM).",
        "Muster und Feinabstimmung.",
        "Tests und Zertifizierung für Ihren Markt.",
        "Produktion und Qualitätskontrolle (QC).",
        "Versand und Logistik bis zu Ihrem Lager.",
      ],
      facts: [
        { k: "Vorlaufzeit", v: "Richtwert: eine fertige ODM-Rezeptur mit minimalen Anpassungen — etwa 30–60 Tage nach Freigabe des Musters; eine vollständig individuelle Rezeptur — etwa 90–150 Tage einschließlich Tests und Zertifizierung." },
        { k: "MOQ", v: "Bei Top-Werken (Niveau Cosmax, Kolmar) meist 5.000–10.000 Einheiten pro SKU; bei mittelgroßen und Boutique-Herstellern — ab ca. 500–1.000 Einheiten. MOQ und Preis sind oft Verhandlungssache — das ist eine unserer Aufgaben." },
        { k: "Zertifizierung", v: "Koreanische Werke arbeiten nach ISO 22716 (GMP für Kosmetik) und CGMP; für Korea — MFDS; die Freigabe für einen bestimmten Markt wird separat organisiert." },
      ],
      scope_title: "Was wir im Bereich Kosmetik abdecken",
      scope_items: [
        "Hautpflege — Cremes, Seren, Ampullen, Toner, Reinigung",
        "Sonnenschutz (SPF) — eine der stärksten Kategorien Koreas",
        "Tuchmasken und Patches — Korea hat den weltweiten Standard für Serum-Masken gesetzt",
        "Cosmeceuticals / funktionelle Pflege — Anti-Age, Aufhellung, unreine und empfindliche Haut",
        "Dekorative Kosmetik — Cushions, Tints, Foundation, Make-up",
        "Haar- und Körperpflege",
        "Kosmetikverpackungen — Airless, Tuben, Tiegel, Spender, Umverpackung",
        "Inhaltsstoffe und Rohstoffe — auf Anfrage (angrenzende Branche)",
      ],
      scope_note: "Wir besuchen regelmäßig koreanische Branchenmessen und wählen und prüfen die Hersteller in diesen Kategorien persönlich aus.",
      why_title: "Warum Sie einen Partner vor Ort brauchen",
      why_points: [
        { t: "Zugang", d: "Die stärksten koreanischen Werke ignorieren Kalt- und Auslandsanfragen oft oder setzen eine hohe Einstiegs-MOQ an. Wir öffnen Türen und finden ein Werk, das bereit ist, mit Ihrer Menge zu arbeiten." },
        { t: "Die richtige Auswahl", d: "Es gibt Hunderte von Werken, jedes mit seiner eigenen Stärke: die einen in Hautpflege, die anderen in dekorativer Kosmetik, in Masken oder Verpackungen. Wir wissen, wer was tatsächlich kann — und verschwenden Ihre Zeit nicht mit den falschen." },
        { t: "Verhandlung", d: "MOQ und Preis sinken in Verhandlungen oft — wir übernehmen das für Sie, auf Koreanisch." },
        { t: "Sprache & Kultur", d: "Der gesamte Dialog mit dem Werk läuft über uns — nichts geht in der Übersetzung verloren." },
        { t: "Prüfung", d: "Ein Mitarbeiter unseres Teams besucht das Werk persönlich (Fotos, Besuchsdatum) — der Status „Geprüft“." },
        { t: "Ein Partner für alles", d: "Beschaffung → Prüfung → Verhandlung → Muster → Produktion → Zahlung → Logistik → Kontrolle bis zu Ihrem Lager. Ein verantwortlicher Partner statt einer Kette von Zwischenhändlern." },
      ],
      steps_title: "Von der Idee bis zum Lager — mit uns",
      steps: [
        { t: "Anfrage", d: "Beschreiben Sie das Produkt, die Menge und den Markt." },
        { t: "Beschaffung & Prüfung", d: "Wir finden ein Werk für Ihre Aufgabe und prüfen es persönlich." },
        { t: "Muster & Konditionen", d: "Wir stimmen Rezeptur, Preis, MOQ und Zeitrahmen ab." },
        { t: "Produktion & Lieferung", d: "Wir begleiten Produktion, QC, Zahlung und Logistik bis zu Ihrem Lager." },
      ],
      markets_title: "Ihren Launch für Ihren Markt vorbereiten",
      markets_body:
        "Wir helfen bei der Vorbereitung der Dokumentation für Ihren Zielmarkt: für die USA — die FDA-OTC-Registrierung (z. B. für SPF-Produkte); für die EU — die Konformität mit der EU Cosmetics Regulation (EC No 1223/2009). Einige koreanische Werke verfügen bereits über Exporterfahrung in die USA, die EU und nach Asien und besitzen die entsprechenden Zertifizierungen (einschließlich halal). Der genaue Anforderungsumfang hängt von der Produktkategorie ab — wir klären ihn zu Beginn des Projekts.",
      cta_title: "Starten Sie Ihre Kosmetik aus Korea",
      cta_body: "Sagen Sie uns, was Sie produzieren oder einkaufen möchten — wir finden das Werk, prüfen es und führen das Geschäft. Erstberatung und Beschaffung sind kostenlos.",
      cta_button: "Anfrage senden",
    },
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

  about_home: {
    sup: "Über uns",
    title: "Echte Menschen und persönliche Werksbesuche",
    body: "Teranova findet Hersteller in Korea, prüft sie — bis hin zum persönlichen Besuch vor Ort im Werk — und führt das Geschäft von der ersten Anfrage bis zum Erhalt der Ware. Ein verantwortlicher Partner statt einer Kette von Zwischenhändlern.",
    photo_note: "Hier kommen echte Fotos hin: das Team und die Werksbesuche.",
    cta: "Mehr über das Unternehmen",
  },

  tenders_home: {
    sup: "Ausschreibungen",
    title: "Ausschreibungen & Beschaffung schlüsselfertig",
    body: "Wir beschaffen koreanische Hersteller für Ihre Ausschreibung oder Ihr Angebotsersuchen, helfen bei der Vorbereitung des Angebots und begleiten die Lieferung.",
    cta: "Ausschreibungsanfrage senden",
  },

  team_home: {
    sup: "Team",
    title: "Hinter jedem Geschäft stehen echte Menschen",
    body: "Die Geschäftsleitung und die Manager, die sich persönlich um Beschaffung, Prüfung und Lieferung kümmern.",
    cta: "Das Team kennenlernen",
  },
};

export default de;

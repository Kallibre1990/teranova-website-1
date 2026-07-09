import type { UIDict } from './ru';
import type { DeepPartial } from '../deep';

const it: DeepPartial<UIDict> = {
  nav: {
    catalog: "Catalogo",
    verify: "Come verifichiamo",
    buyers: "Su richiesta",
    suppliers: "Per i fornitori",
    about: "Chi siamo",
    faq: "FAQ",
    contacts: "Contatti",
    team: "Team",
    tenders: "Gare d'appalto",
  },

  common: {
    cta_request: "Invia una richiesta",
    menu: "Menu",
    close: "Chiudi",
    to_top: "Torna su",
    skip: "Vai al contenuto",
    switch_lang: "Lingua",
    scroll: "Scorri verso il basso",
    loading: "Caricamento",
    prev: "Precedente",
    next: "Successivo",
  },

  meta: {
    home_title: "Teranova Group — produttori coreani verificati e supporto completo alle trattative",
    home_desc:
      "Troviamo, verifichiamo e seguiamo le forniture dalle fabbriche coreane fino al vostro magazzino: forniture navali, cosmetica e cura (OEM/ODM), medicale ed estetica, attrezzature industriali, veicoli commerciali e speciali.",
  },

  marquee: [
    "Forniture navali",
    "Cosmetica e cura",
    "Medicale ed estetica",
    "Attrezzature industriali",
    "Veicoli commerciali e speciali",
    "Settori affini",
  ],

  hero: {
    sup: "Corea → mondo",
    title: "Produttori coreani verificati — in via diretta",
    sub: "Troviamo, verifichiamo e seguiamo le forniture dalle fabbriche coreane fino al vostro magazzino. In modo trasparente e su misura per le vostre esigenze.",
    cta_primary: "Vedi il catalogo",
    cta_secondary: "Ricerca su richiesta",
    scroll_hint: "Scorri verso il basso",
  },

  verify: {
    sup: "Fiducia",
    title: "Prima la verifica, poi il contatto",
    intro:
      "Ogni fornitore ha uno stato. È un fatto documentato, non una promessa di risultato — coordiniamo e seguiamo la trattativa.",
    card_visited_t: "Verificato — visita in loco",
    card_visited_d: "Un membro del team ha visitato di persona la fabbrica — con foto e data della visita.",
    card_provided_t: "Dati forniti dall'azienda",
    card_provided_d: "Informazioni fornite dal fornitore — una visita di persona non è ancora avvenuta.",
    note: "Le condizioni di qualità sono fissate nel contratto con il fornitore. Non pubblichiamo i contatti personali dei fornitori — ogni comunicazione passa attraverso Teranova.",
    link: "Come verifichiamo",
  },

  categories: {
    sup: "Catalogo",
    title: "Cosa forniamo dalla Corea",
    sub: "Il catalogo è ciò che abbiamo già verificato. Ciò che non c'è — lo cerchiamo su richiesta. I veicoli commerciali, passeggeri e speciali sono una direzione a parte; le auto di consumo sono fuori ambito.",
    demo_note: "Il catalogo è in fase di popolamento — al momento alcuni dati sono dimostrativi.",
    more: "Scopri di più",
    groups: [
      { key: "marine", name: "Forniture navali", blurb: "Fornitura completa per navi e cantieri navali.", items: ["motori e ricambi", "attrezzature di coperta", "eliche, timoni, propulsori", "navigazione e comunicazioni", "salvataggio e antincendio", "vernici e rivestimenti"] },
      { key: "cosmetics", name: "Cosmetica e cura (OEM/ODM)", blurb: "Cosmetica coreana e produzione conto terzi con il vostro marchio.", items: ["cura della pelle", "sieri e fiale", "protezione solare (SPF)", "maschere in tessuto e patch", "cosmetica colorata", "packaging cosmetico"] },
      { key: "medical", name: "Medicale ed estetica", blurb: "Apparecchiature e materiali di consumo per cliniche e medicina estetica.", items: ["laser, IPL, HIFU, RF", "filler, fili, skinbooster", "odontoiatria (impianti, CAD/CAM)", "diagnostica e test", "riabilitazione", "attrezzature ospedaliere"] },
      { key: "industrial", name: "Attrezzature industriali", blurb: "Macchine utensili, automazione e componenti per la produzione.", items: ["macchine CNC", "taglio laser e plasma", "robot industriali", "oleodinamica e pneumatica", "pompe e valvole", "stampi e utensili"] },
      { key: "transport", name: "Veicoli commerciali e speciali", blurb: "Veicoli da trasporto, passeggeri e speciali con ricambi.", items: ["camion e trattori stradali", "autobus", "macchine da cantiere", "macchine agricole", "veicoli speciali", "rimorchi, pneumatici, batterie"] },
      { key: "adjacent", name: "Settori affini", blurb: "Ampia copertura delle nicchie in cui la Corea è forte.", items: ["materiali da costruzione", "alimentare e packaging", "trattamento delle acque ed ecologia", "energia e rinnovabili", "elettronica industriale e LED", "tessili tecnici"] },
      { key: "chemical", name: "Chimica e materiali", blurb: "Materie prime chimiche, polimeri e materiali industriali.", items: ["materie prime chimiche e reagenti", "plastiche e polimeri", "gomma", "vernici e rivestimenti", "adesivi e sigillanti", "fertilizzanti e agrofarmaci"] },
    ],
  },

  ondemand: {
    sup: "Su richiesta",
    title: "Non è nel catalogo — troviamo la fabbrica per voi",
    sub: "Descrivete ciò che vi serve. Individuiamo produttori coreani su misura per le vostre esigenze, li verifichiamo e organizziamo la fornitura. Il catalogo è ciò che è già verificato; su richiesta è qualcosa di nuovo per voi.",
    points: [
      "Definiamo l'esigenza e i requisiti",
      "Individuiamo e verifichiamo le fabbriche",
      "Concordiamo prezzi e condizioni",
      "Seguiamo pagamento, logistica e controllo",
    ],
    form_title: "Invia una richiesta",
    form_note: "Dopo l'invio vi contatteremo, definiremo i dettagli e proporremo le opzioni. Prezzi e condizioni sono su misura per la vostra richiesta.",
  },

  presence: {
    sup: "Dove siamo vicini",
    title: "Siamo accanto al produttore",
    onsite_lead: "In questi paesi abbiamo persone sul posto — troviamo, visitiamo e verifichiamo personalmente i fornitori:",
    countries: ["Corea", "Giappone", "Cina", "Türkiye"],
    other: "Le richieste per altre regioni vengono accolte su richiesta.",
    buyers_lead: "Seguiamo gli acquirenti in tutto il mondo:",
    buyers_regions: ["CSI", "Europa", "Türkiye", "USA", "Asia", "America Latina"],
  },

  how: {
    sup: "Come lavoriamo",
    title: "Tre passaggi — dalla richiesta alla consegna",
    sub: "In modo trasparente e su misura per le vostre esigenze.",
    steps: [
      { t: "Richiesta", d: "Ci dite ciò che vi serve." },
      { t: "Ricerca e verifica", d: "Troviamo la fabbrica, la verifichiamo e concordiamo le condizioni." },
      { t: "Trattativa e consegna", d: "Seguiamo pagamento, logistica e controllo fino alla ricezione." },
    ],
  },

  cta: {
    sup: "Iniziamo",
    title: "Diteci cosa dovete trovare in Corea",
    sub: "Un solo contatto — e ricerca, verifica e fornitura le prendiamo in carico noi.",
    button: "Mettiti in contatto",
  },

  form: {
    company: "Azienda",
    contact: "Persona di contatto",
    email: "Email",
    phone: "Telefono / messenger",
    need: "Cosa dovete trovare",
    volume: "Volume",
    timeline: "Tempistiche",
    comment: "Commento",
    submit: "Invia la richiesta",
    required_hint: "I campi contrassegnati con * sono obbligatori. Usiamo i vostri dati solo per gestire la richiesta.",
    ph_company: "La vostra azienda",
    ph_contact: "Nome e cognome",
    ph_email: "business@email.com",
    ph_phone: "+39 / +82 …",
    ph_need: "ad es. sieri OEM, pompe navali, macchina CNC",
    ph_volume: "ad es. 50.000 pezzi",
    ph_timeline: "ad es. 6–8 settimane",
    ph_comment: "Dettagli, requisiti, certificazione…",
    category: "Categoria",
    category_ph: "— Seleziona una categoria —",
    categories: [
      "Forniture navali",
      "K-beauty",
      "Medicale ed estetica",
      "Attrezzature industriali",
      "Veicoli commerciali e speciali",
      "Chimica e materiali",
      "Altro — non saprei",
    ],
    err_need: "Indicateci di cosa avete bisogno.",
    err_contact: "Aggiungete un'email o un telefono validi.",
    err_email: "Inserite un'email valida.",
    err_phone: "Inserite un telefono valido — almeno 7 cifre.",
    err_required: "Compilate i campi obbligatori.",
    err_network: "Invio non riuscito. Scriveteci direttamente:",
    req_note: "Obbligatori: di cosa avete bisogno e un'email o un telefono. Usiamo i vostri dati solo per gestire la richiesta.",
  },

  thanks: {
    title: "Richiesta inviata",
    body: "Grazie! Abbiamo ricevuto la vostra richiesta e vi contatteremo a breve.",
    back: "Torna alla home",
  },

  notfound: {
    title: "Questa pagina sarà presto disponibile",
    body: "Questa sezione è ancora in lavorazione. Tornate alla home page — quella è pronta.",
    back: "Vai alla home",
  },

  pages: {
    cosmetics: {
      intro_title: "Cosmetica e cura coreana — OEM/ODM con il vostro marchio",
      intro_body:
        "La Corea è l'hub mondiale della produzione conto terzi di cosmetici. Troviamo per voi la fabbrica coreana giusta, la verifichiamo di persona e gestiamo l'intero progetto: dalla formula e dai campioni fino alla produzione, alla certificazione e alla consegna al vostro magazzino. Che vogliate lanciare una linea con il vostro marchio o acquistare cosmetica K-beauty già pronta, ci occupiamo noi della ricerca dei fornitori, delle trattative e del supporto completo.",
      models_title: "Come funziona la produzione conto terzi di cosmetici in Corea",
      models_sub: "Tre modelli — scegliamo quello adatto al vostro obiettivo.",
      models: [
        { name: "ODM", full: "Original Design Manufacturing", desc: "La fabbrica dispone di formulazioni e sviluppi propri già pronti. Voi scegliete una formula, la adattate al vostro marchio e la lanciate con la vostra etichetta. È il modo più rapido ed economico per lanciare un marchio senza un laboratorio proprio. La maggior parte delle migliori fabbriche coreane lavora proprio in modalità ODM." },
        { name: "OEM", full: "Original Equipment Manufacturing", desc: "La fabbrica produce secondo la vostra formula e specifica già pronte. È adatto quando avete già una formula vostra." },
        { name: "private label", full: "", desc: "Un prodotto di fabbrica già pronto e verificato, con la vostra etichetta. Tempi di realizzazione minimi." },
      ],
      process_title: "Come si svolge un progetto",
      process_lead: "Fasi tipiche:",
      process: [
        "Brief — quale prodotto, volume, mercato e requisiti.",
        "Selezione della fabbrica per categoria, volume e budget.",
        "Formula — una formula ODM già pronta o uno sviluppo su misura (OEM).",
        "Campioni e perfezionamento.",
        "Test e certificazione per il vostro mercato.",
        "Produzione e controllo qualità (QC).",
        "Spedizione e logistica fino al vostro magazzino.",
      ],
      facts: [
        { k: "Tempi di realizzazione", v: "Indicativi: una formula ODM già pronta con ritocchi minimi — circa 30–60 giorni dopo l'approvazione del campione; una formula completamente su misura — circa 90–150 giorni, inclusi test e certificazione." },
        { k: "MOQ", v: "Nelle migliori fabbriche (livello Cosmax, Kolmar) di solito 5.000–10.000 unità per SKU; presso produttori di media dimensione e boutique — a partire da ~500–1.000 unità. MOQ e prezzo sono spesso oggetto di trattativa — ed è uno dei nostri compiti." },
        { k: "Certificazione", v: "Le fabbriche coreane operano secondo gli standard ISO 22716 (GMP per i cosmetici) e CGMP; per la Corea — MFDS; l'immissione su un mercato specifico viene organizzata a parte." },
      ],
      scope_title: "Cosa copriamo nella cosmetica",
      scope_items: [
        "Cura della pelle — creme, sieri, fiale, tonici, detersione",
        "Protezione solare (SPF) — una delle categorie più forti della Corea",
        "Maschere in tessuto e patch — la Corea ha definito lo standard mondiale delle maschere al siero",
        "Cosmeceutici / funzionali — anti-age, illuminanti, pelli problematiche e sensibili",
        "Cosmetica colorata — cushion, tinte, fondotinta, make-up",
        "Cura di capelli e corpo",
        "Packaging cosmetico — airless, tubetti, vasetti, dispenser, packaging secondario",
        "Ingredienti e materie prime — su richiesta (settore affine)",
      ],
      scope_note: "Partecipiamo regolarmente alle fiere di settore coreane e selezioniamo e verifichiamo personalmente i produttori in tutte queste categorie.",
      why_title: "Perché vi serve un partner sul posto",
      why_points: [
        { t: "Accesso", d: "Le migliori fabbriche coreane spesso ignorano le richieste a freddo e quelle straniere, oppure impongono un MOQ d'ingresso elevato. Noi apriamo le porte e troviamo una fabbrica pronta a lavorare con il vostro volume." },
        { t: "L'abbinamento giusto", d: "Esistono centinaia di fabbriche, ciascuna con il proprio punto di forza: chi nella cura della pelle, chi nella cosmetica colorata, chi nelle maschere, chi nel packaging. Sappiamo chi fa davvero cosa — e non vi faremo perdere tempo con quelle sbagliate." },
        { t: "Trattativa", d: "MOQ e prezzo spesso si riducono in fase di trattativa — ce ne occupiamo noi per voi, in coreano." },
        { t: "Lingua e cultura", d: "L'intero dialogo con la fabbrica passa attraverso di noi — nulla si perde nella traduzione." },
        { t: "Verifica", d: "Un membro del nostro team visita la fabbrica di persona (foto, data della visita) — lo stato «Verificato»." },
        { t: "Un unico partner per tutto", d: "Ricerca fornitori → verifica → trattativa → campioni → produzione → pagamento → logistica → controllo fino al vostro magazzino. Un unico responsabile invece di una catena di intermediari." },
      ],
      steps_title: "Dall'idea al magazzino — con noi",
      steps: [
        { t: "Richiesta", d: "Descrivete il prodotto, il volume e il mercato." },
        { t: "Ricerca e verifica", d: "Troviamo e verifichiamo personalmente una fabbrica per la vostra esigenza." },
        { t: "Campioni e condizioni", d: "Concordiamo la formula, il prezzo, il MOQ e i tempi." },
        { t: "Produzione e fornitura", d: "Seguiamo produzione, QC, pagamento e logistica fino al vostro magazzino." },
      ],
      markets_title: "Prepariamo il vostro lancio per il vostro mercato",
      markets_body:
        "Aiutiamo a preparare la documentazione per il vostro mercato di destinazione: per gli USA — la registrazione FDA OTC (ad es. per i prodotti SPF); per l'EU — la conformità all'EU Cosmetics Regulation (EC No 1223/2009). Alcune fabbriche coreane hanno già esperienza di esportazione verso USA, EU e Asia e possiedono le certificazioni pertinenti (halal inclusa). L'insieme esatto dei requisiti dipende dalla categoria di prodotto — lo chiariamo all'inizio del progetto.",
      cta_title: "Lanciate la vostra cosmetica dalla Corea",
      cta_body: "Diteci cosa volete produrre o acquistare — troveremo la fabbrica, la verificheremo e gestiremo la trattativa. La consulenza iniziale e la ricerca dei fornitori sono gratuite.",
      cta_button: "Invia una richiesta",
    },
  },

  footer: {
    blurb: "Colleghiamo produttori coreani verificati con acquirenti di tutto il mondo e seguiamo l'intera trattativa.",
    nav_title: "Navigazione",
    contact_title: "Contatti",
    loc: "Corea",
    joint_brand: "Teranova Group — marchio congiunto di AIA Group Ltd e Teranova Group Ltd.",
    disclaimer:
      "Il catalogo è in fase di popolamento; alcuni dati sono dimostrativi. I prezzi sono indicativi e non costituiscono un'offerta. Teranova Group coordina e segue le trattative tramite partner di fiducia e non è un produttore.",
    rights: "© 2025 Teranova Group",
  },

  about_home: {
    sup: "Chi siamo",
    title: "Persone reali e visite personali alle fabbriche",
    body: "Teranova trova produttori in Corea, li verifica — fino a una visita personale in loco presso la fabbrica — e segue la trattativa dalla prima richiesta fino alla ricezione della merce. Un unico partner responsabile invece di una catena di intermediari.",
    photo_note: "Qui andranno foto reali: il team e le visite alle fabbriche.",
    cta: "Scopri di più sull'azienda",
  },

  tenders_home: {
    sup: "Gare d'appalto",
    title: "Gare d'appalto e approvvigionamento chiavi in mano",
    body: "Individuiamo produttori coreani per la vostra gara o richiesta di offerta (RFQ), aiutiamo a preparare la proposta e seguiamo la fornitura.",
    cta: "Invia una richiesta per una gara",
  },

  team_home: {
    sup: "Team",
    title: "Dietro ogni trattativa ci sono persone reali",
    body: "La direzione e i manager che gestiscono personalmente ricerca, verifica e fornitura.",
    cta: "Conosci il team",
  },
};

export default it;

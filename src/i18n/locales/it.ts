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
    card_visited_d: "Il fondatore è stato di persona in fabbrica — con foto e data della visita.",
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
    groups: [
      { key: "marine", name: "Forniture navali", blurb: "Fornitura completa per navi e cantieri navali.", items: ["motori e ricambi", "attrezzature di coperta", "eliche, timoni, propulsori", "navigazione e comunicazioni", "salvataggio e antincendio", "vernici e rivestimenti"] },
      { key: "cosmetics", name: "Cosmetica e cura (OEM/ODM)", blurb: "Cosmetica coreana e produzione conto terzi con il vostro marchio.", items: ["cura della pelle", "sieri e fiale", "protezione solare (SPF)", "maschere in tessuto e patch", "cosmetica colorata", "packaging cosmetico"] },
      { key: "medical", name: "Medicale ed estetica", blurb: "Apparecchiature e materiali di consumo per cliniche e medicina estetica.", items: ["laser, IPL, HIFU, RF", "filler, fili, skinbooster", "odontoiatria (impianti, CAD/CAM)", "diagnostica e test", "riabilitazione", "attrezzature ospedaliere"] },
      { key: "industrial", name: "Attrezzature industriali", blurb: "Macchine utensili, automazione e componenti per la produzione.", items: ["macchine CNC", "taglio laser e plasma", "robot industriali", "oleodinamica e pneumatica", "pompe e valvole", "stampi e utensili"] },
      { key: "transport", name: "Veicoli commerciali e speciali", blurb: "Veicoli da trasporto, passeggeri e speciali con ricambi.", items: ["camion e trattori stradali", "autobus", "macchine da cantiere", "macchine agricole", "veicoli speciali", "rimorchi, pneumatici, batterie"] },
      { key: "adjacent", name: "Settori affini", blurb: "Ampia copertura delle nicchie in cui la Corea è forte.", items: ["materiali da costruzione", "alimentare e packaging", "trattamento delle acque ed ecologia", "energia e rinnovabili", "elettronica industriale e LED", "tessili tecnici"] },
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
    buyers_regions: ["CSI", "Europa", "Türkiye", "USA", "Asia"],
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
};

export default it;

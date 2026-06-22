import type { UIDict } from './ru';
import type { DeepPartial } from '../deep';

const fr: DeepPartial<UIDict> = {
  nav: {
    catalog: "Catalogue",
    verify: "Notre vérification",
    buyers: "Sur demande",
    suppliers: "Pour les fournisseurs",
    about: "À propos",
    faq: "FAQ",
    contacts: "Contacts",
  },

  common: {
    cta_request: "Envoyer une demande",
    menu: "Menu",
    close: "Fermer",
    to_top: "Haut de page",
    skip: "Aller au contenu",
    switch_lang: "Langue",
    scroll: "Faites défiler vers le bas",
    loading: "Chargement",
  },

  meta: {
    home_title: "Teranova Group — fabricants coréens vérifiés et accompagnement complet des transactions",
    home_desc:
      "Nous trouvons, vérifions et accompagnons les approvisionnements depuis les usines coréennes jusqu'à votre entrepôt : avitaillement maritime, cosmétiques et soins (OEM/ODM), médical et esthétique, équipements industriels, véhicules commerciaux et spéciaux.",
  },

  marquee: [
    "Avitaillement maritime",
    "Cosmétiques et soins",
    "Médical et esthétique",
    "Équipements industriels",
    "Véhicules commerciaux et spéciaux",
    "Secteurs connexes",
  ],

  hero: {
    sup: "Corée → monde",
    title: "Fabricants coréens vérifiés — en direct",
    sub: "Nous trouvons, vérifions et accompagnons les approvisionnements depuis les usines coréennes jusqu'à votre entrepôt. En toute transparence, adapté à votre besoin.",
    cta_primary: "Voir le catalogue",
    cta_secondary: "Sourcer sur demande",
    scroll_hint: "Faites défiler vers le bas",
  },

  verify: {
    sup: "Confiance",
    title: "D'abord la vérification, ensuite le contact",
    intro:
      "Chaque fournisseur dispose d'un statut. Il s'agit d'un fait documenté, et non d'une promesse de résultat — nous coordonnons et accompagnons la transaction.",
    card_visited_t: "Vérifié — visite sur site",
    card_visited_d: "Le fondateur s'est rendu en personne à l'usine — avec photos et date de la visite.",
    card_provided_t: "Données fournies par l'entreprise",
    card_provided_d: "Informations communiquées par le fournisseur — une visite en personne n'a pas encore eu lieu.",
    note: "Les conditions de qualité sont fixées dans le contrat avec le fournisseur. Nous ne publions pas les coordonnées personnelles des fournisseurs — toute communication passe par Teranova.",
    link: "Notre vérification",
  },

  categories: {
    sup: "Catalogue",
    title: "Ce que nous fournissons depuis la Corée",
    sub: "Le catalogue regroupe ce que nous avons déjà vérifié. Ce qui n'y figure pas, nous le sourçons sur demande. Les véhicules commerciaux, de tourisme et spéciaux constituent une activité distincte ; les voitures particulières grand public sont hors de notre périmètre.",
    demo_note: "Le catalogue est en cours d'enrichissement — certaines données sont actuellement présentées à titre de démonstration.",
    groups: [
      { key: "marine", name: "Avitaillement maritime", blurb: "Avitaillement complet pour navires et chantiers navals.", items: ["moteurs et pièces détachées", "équipements de pont", "hélices, gouvernails, propulseurs", "navigation et communications", "sauvetage et lutte contre l'incendie", "peintures et revêtements"] },
      { key: "cosmetics", name: "Cosmétiques et soins (OEM/ODM)", blurb: "Cosmétiques coréens et fabrication à façon sous votre marque.", items: ["soin de la peau", "sérums et ampoules", "protection solaire (SPF)", "masques en tissu et patchs", "maquillage", "emballages cosmétiques"] },
      { key: "medical", name: "Médical et esthétique", blurb: "Équipements et consommables pour cliniques et médecine esthétique.", items: ["lasers, IPL, HIFU, RF", "fillers, fils tenseurs, skinboosters", "dentisterie (implants, CAD/CAM)", "diagnostic et tests", "rééducation", "équipements hospitaliers"] },
      { key: "industrial", name: "Équipements industriels", blurb: "Machines-outils, automatisation et composants pour la production.", items: ["machines CNC", "découpe laser et plasma", "robots industriels", "hydraulique et pneumatique", "pompes et vannes", "moules et outillage"] },
      { key: "transport", name: "Véhicules commerciaux et spéciaux", blurb: "Véhicules de transport de marchandises, de passagers et spéciaux avec pièces détachées.", items: ["camions et tracteurs routiers", "autobus", "engins de chantier", "machines agricoles", "véhicules spéciaux", "remorques, pneus, batteries"] },
      { key: "adjacent", name: "Secteurs connexes", blurb: "Large couverture des niches où la Corée excelle.", items: ["matériaux de construction", "agroalimentaire et emballage", "traitement de l'eau et écologie", "énergie et énergies renouvelables", "électronique industrielle et LED", "textiles techniques"] },
    ],
  },

  ondemand: {
    sup: "Sur demande",
    title: "Pas dans le catalogue — nous trouverons l'usine pour vous",
    sub: "Décrivez votre besoin. Nous sourçons des fabricants coréens adaptés à votre projet, nous les vérifions et organisons l'approvisionnement. Le catalogue regroupe ce qui est déjà vérifié ; sur demande, c'est du nouveau pour vous.",
    points: [
      "Préciser le besoin et les exigences",
      "Sourcer et vérifier les usines",
      "Convenir des prix et des conditions",
      "Accompagner le paiement, la logistique et le contrôle",
    ],
    form_title: "Envoyer une demande",
    form_note: "Après l'envoi de votre demande, nous vous contacterons, préciserons les détails et vous proposerons des options. Les prix et conditions sont adaptés à votre demande.",
  },

  presence: {
    sup: "Où nous sommes proches",
    title: "Nous sommes aux côtés du fabricant",
    onsite_lead: "Dans ces pays, nous disposons d'équipes sur place — nous trouvons, visitons et vérifions personnellement les fournisseurs :",
    countries: ["Corée", "Japon", "Chine", "Türkiye"],
    other: "Les demandes pour d'autres régions sont prises en charge sur demande.",
    buyers_lead: "Nous accompagnons les acheteurs dans le monde entier :",
    buyers_regions: ["CEI", "Europe", "Türkiye", "États-Unis", "Asie"],
  },

  how: {
    sup: "Comment nous travaillons",
    title: "Trois étapes — de la demande à la livraison",
    sub: "En toute transparence et adapté à votre besoin.",
    steps: [
      { t: "Demande", d: "Vous nous indiquez votre besoin." },
      { t: "Sourcing et vérification", d: "Nous trouvons l'usine, la vérifions et convenons des conditions." },
      { t: "Transaction et livraison", d: "Nous accompagnons le paiement, la logistique et le contrôle jusqu'à la réception." },
    ],
  },

  cta: {
    sup: "Commençons",
    title: "Dites-nous ce que vous devez trouver en Corée",
    sub: "Un seul contact — et nous prenons en charge le sourcing, la vérification et l'approvisionnement.",
    button: "Nous contacter",
  },

  form: {
    company: "Entreprise",
    contact: "Personne à contacter",
    email: "E-mail",
    phone: "Téléphone / messagerie",
    need: "Ce que vous devez trouver",
    volume: "Volume",
    timeline: "Délais",
    comment: "Commentaire",
    submit: "Envoyer la demande",
    required_hint: "Les champs marqués d'un * sont obligatoires. Nous utilisons vos données uniquement pour traiter votre demande.",
    ph_company: "Votre entreprise",
    ph_contact: "Nom et prénom",
    ph_email: "business@email.com",
    ph_phone: "+33 / +82 …",
    ph_need: "ex. sérums OEM, pompes maritimes, machine CNC",
    ph_volume: "ex. 50 000 unités",
    ph_timeline: "ex. 6 à 8 semaines",
    ph_comment: "Détails, exigences, certification…",
  },

  thanks: {
    title: "Demande envoyée",
    body: "Merci ! Nous avons bien reçu votre demande et nous vous contacterons sous peu.",
    back: "Retour à l'accueil",
  },

  notfound: {
    title: "Cette page arrive bientôt",
    body: "Cette section est encore en cours de préparation. Retournez à la page d'accueil — celle-ci est prête.",
    back: "Aller à l'accueil",
  },

  footer: {
    blurb: "Nous relions des fabricants coréens vérifiés à des acheteurs du monde entier et accompagnons l'intégralité de la transaction.",
    nav_title: "Navigation",
    contact_title: "Contacts",
    loc: "Corée",
    joint_brand: "Teranova Group — une marque commune d'AIA Group Ltd et de Teranova Group Ltd.",
    disclaimer:
      "Le catalogue est en cours d'enrichissement ; certaines données sont présentées à titre de démonstration. Les prix sont indicatifs et ne constituent pas une offre. Teranova Group coordonne et accompagne les transactions par l'intermédiaire de partenaires de confiance et n'est pas un fabricant.",
    rights: "© 2025 Teranova Group",
  },
};

export default fr;

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
    team: "Équipe",
    tenders: "Appels d'offres",
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
    prev: "Précédent",
    next: "Suivant",
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
    card_visited_d: "Un collaborateur de l'équipe s'est rendu en personne à l'usine — avec photos et date de la visite.",
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
    more: "En savoir plus",
    groups: [
      { key: "marine", name: "Avitaillement maritime", blurb: "Avitaillement complet pour navires et chantiers navals.", items: ["moteurs et pièces détachées", "équipements de pont", "hélices, gouvernails, propulseurs", "navigation et communications", "sauvetage et lutte contre l'incendie", "peintures et revêtements"] },
      { key: "cosmetics", name: "Cosmétiques et soins (OEM/ODM)", blurb: "Cosmétiques coréens et fabrication à façon sous votre marque.", items: ["soin de la peau", "sérums et ampoules", "protection solaire (SPF)", "masques en tissu et patchs", "maquillage", "emballages cosmétiques"] },
      { key: "medical", name: "Médical et esthétique", blurb: "Équipements et consommables pour cliniques et médecine esthétique.", items: ["lasers, IPL, HIFU, RF", "fillers, fils tenseurs, skinboosters", "dentisterie (implants, CAD/CAM)", "diagnostic et tests", "rééducation", "équipements hospitaliers"] },
      { key: "industrial", name: "Équipements industriels", blurb: "Machines-outils, automatisation et composants pour la production.", items: ["machines CNC", "découpe laser et plasma", "robots industriels", "hydraulique et pneumatique", "pompes et vannes", "moules et outillage"] },
      { key: "transport", name: "Véhicules commerciaux et spéciaux", blurb: "Véhicules de transport de marchandises, de passagers et spéciaux avec pièces détachées.", items: ["camions et tracteurs routiers", "autobus", "engins de chantier", "machines agricoles", "véhicules spéciaux", "remorques, pneus, batteries"] },
      { key: "adjacent", name: "Secteurs connexes", blurb: "Large couverture des niches où la Corée excelle.", items: ["matériaux de construction", "agroalimentaire et emballage", "traitement de l'eau et écologie", "énergie et énergies renouvelables", "électronique industrielle et LED", "textiles techniques"] },
      { key: "chemical", name: "Chimie et matériaux", blurb: "Matières premières chimiques, polymères et matériaux industriels.", items: ["matières premières chimiques et réactifs", "plastiques et polymères", "caoutchouc", "peintures et revêtements", "adhésifs et mastics", "engrais et produits agrochimiques"] },
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
    buyers_regions: ["CEI", "Europe", "Türkiye", "États-Unis", "Asie", "Amérique latine"],
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
    category: "Catégorie",
    category_ph: "— Choisir une catégorie —",
    categories: ["Avitaillement maritime", "K-beauty", "Médical et esthétique", "Équipements industriels", "Véhicules commerciaux et spéciaux", "Produits chimiques", "Autre — je ne suis pas sûr(e)"],
    err_need: "Indiquez-nous ce dont vous avez besoin.",
    err_contact: "Ajoutez un e-mail ou un téléphone valide.",
    err_email: "Saisissez un e-mail valide.",
    err_phone: "Saisissez un téléphone valide — au moins 7 chiffres.",
    err_required: "Veuillez remplir les champs obligatoires.",
    err_network: "L'envoi a échoué. Écrivez-nous directement :",
    req_note: "Obligatoire : ce dont vous avez besoin et un e-mail ou un téléphone. Nous utilisons vos données uniquement pour traiter votre demande.",
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

  pages: {
    cosmetics: {
      intro_title: "Cosmétiques et soins coréens — OEM/ODM sous votre marque",
      intro_body:
        "La Corée est le centre mondial de la fabrication à façon de cosmétiques. Nous trouvons pour vous la bonne usine coréenne, la vérifions en personne et menons le projet de bout en bout : de la formule et des échantillons jusqu'à la production, la certification et la livraison à votre entrepôt. Que vous souhaitiez lancer une ligne sous votre propre marque ou acheter des produits K-beauty prêts à l'emploi, nous prenons en charge le sourcing, les négociations et l'accompagnement complet.",
      models_title: "Comment fonctionne la fabrication à façon de cosmétiques en Corée",
      models_sub: "Trois modèles — nous choisissons celui qui correspond à votre objectif.",
      models: [
        { name: "ODM", full: "Original Design Manufacturing", desc: "L'usine dispose de ses propres formulations et développements prêts à l'emploi. Vous choisissez une formule, l'adaptez à votre marque et la commercialisez sous votre propre étiquette. La voie la plus rapide et la plus abordable pour lancer une marque sans laboratoire propre. La plupart des meilleures usines coréennes travaillent précisément en ODM." },
        { name: "OEM", full: "Original Equipment Manufacturing", desc: "L'usine produit selon votre formule et votre cahier des charges. Une solution adaptée lorsque vous disposez déjà de votre propre formule." },
        { name: "private label", full: "", desc: "Un produit d'usine prêt et vérifié sous votre étiquette. Délai minimal." },
      ],
      process_title: "Comment se déroule un projet",
      process_lead: "Étapes types :",
      process: [
        "Brief — quel produit, quel volume, quel marché et quelles exigences.",
        "Sélection de l'usine selon la catégorie, le volume et le budget.",
        "Formule — une formule ODM prête ou un développement sur mesure (OEM).",
        "Échantillons et mise au point.",
        "Tests et certification pour votre marché.",
        "Production et contrôle qualité (QC).",
        "Expédition et logistique jusqu'à votre entrepôt.",
      ],
      facts: [
        { k: "Délais", v: "À titre indicatif : une formule ODM prête avec des ajustements minimes — environ 30 à 60 jours après validation de l'échantillon ; une formule entièrement sur mesure — environ 90 à 150 jours, tests et certification compris." },
        { k: "MOQ", v: "Dans les grandes usines (de niveau Cosmax, Kolmar), généralement 5 000 à 10 000 unités par SKU ; chez les fabricants de taille moyenne et les ateliers boutique — à partir d'environ 500 à 1 000 unités. Le MOQ et le prix sont souvent une affaire de négociation — c'est l'une de nos missions." },
        { k: "Certification", v: "Les usines coréennes travaillent selon les normes ISO 22716 (GMP pour les cosmétiques) et CGMP ; pour la Corée — MFDS ; la mise sur un marché spécifique est organisée séparément." },
      ],
      scope_title: "Ce que nous couvrons en cosmétiques",
      scope_items: [
        "Soin de la peau — crèmes, sérums, ampoules, toniques, nettoyants",
        "Protection solaire (SPF) — l'une des catégories les plus fortes de la Corée",
        "Masques en tissu et patchs — la Corée a défini le standard mondial des masques au sérum",
        "Cosméceutiques / fonctionnels — anti-âge, éclaircissement, peaux à problèmes et sensibles",
        "Maquillage — cushions, teintes, fond de teint, make-up",
        "Soins capillaires et corporels",
        "Emballages cosmétiques — airless, tubes, pots, distributeurs, emballage secondaire",
        "Ingrédients et matières premières — sur demande (secteur connexe)",
      ],
      scope_note: "Nous participons régulièrement aux salons professionnels coréens et sélectionnons et vérifions personnellement les fabricants dans ces catégories.",
      why_title: "Pourquoi vous avez besoin d'un partenaire sur place",
      why_points: [
        { t: "Accès", d: "Les usines coréennes les plus fortes ignorent souvent les demandes externes et étrangères, ou imposent un MOQ d'entrée élevé. Nous ouvrons les portes et sélectionnons une usine prête à travailler avec votre volume." },
        { t: "La bonne usine", d: "Il existe des centaines d'usines, chacune avec sa force : certaines dans le soin, d'autres dans le maquillage, dans les masques ou dans l'emballage. Nous savons qui fait réellement quoi — et nous ne perdons pas votre temps avec des usines non pertinentes." },
        { t: "Négociation", d: "Le MOQ et le prix baissent souvent au cours de la négociation — nous la menons pour vous, en coréen." },
        { t: "Langue et culture", d: "Tout le dialogue avec l'usine passe par nous — sans perte à la traduction." },
        { t: "Vérification", d: "Notre collaborateur se rend en personne à l'usine (photos, date de la visite) — le statut « Vérifié »." },
        { t: "Un seul partenaire pour tout", d: "Sourcing → vérification → négociation → échantillons → production → paiement → logistique → contrôle jusqu'à votre entrepôt. Un seul interlocuteur responsable plutôt qu'une chaîne d'intermédiaires." },
      ],
      steps_title: "De l'idée à l'entrepôt — avec nous",
      steps: [
        { t: "Demande", d: "Décrivez le produit, le volume et le marché." },
        { t: "Sourcing et vérification", d: "Nous trouvons et vérifions personnellement une usine adaptée à votre projet." },
        { t: "Échantillons et conditions", d: "Nous convenons de la formule, du prix, du MOQ et des délais." },
        { t: "Production et approvisionnement", d: "Nous accompagnons la production, le QC, le paiement et la logistique jusqu'à votre entrepôt." },
      ],
      markets_title: "Préparer votre lancement pour votre marché",
      markets_body:
        "Nous vous aidons à préparer la documentation pour votre marché cible : pour les États-Unis — l'enregistrement FDA OTC (par exemple pour les produits SPF) ; pour l'UE — la conformité à l'EU Cosmetics Regulation (EC No 1223/2009). Certaines usines coréennes ont déjà l'expérience de l'exportation vers les États-Unis, l'UE et l'Asie et détiennent les certifications correspondantes (y compris halal). L'ensemble exact des exigences dépend de la catégorie de produit — nous le précisons au démarrage du projet.",
      cta_title: "Lancez vos cosmétiques depuis la Corée",
      cta_body: "Décrivez ce que vous souhaitez produire ou acheter — nous sélectionnons l'usine, la vérifions et menons la transaction. La consultation initiale et le sourcing sont gratuits.",
      cta_button: "Envoyer une demande",
    },
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

  about_home: {
    sup: "À propos de nous",
    title: "Des personnes réelles et des visites d'usine en personne",
    body: "Teranova trouve des fabricants en Corée, les vérifie — jusqu'à une visite personnelle sur site à l'usine — et mène la transaction de la première demande jusqu'à la réception des marchandises. Un seul partenaire responsable plutôt qu'une chaîne d'intermédiaires.",
    photo_note: "De vraies photos seront placées ici : l'équipe et les visites d'usine.",
    cta: "En savoir plus sur l'entreprise",
  },

  tenders_home: {
    sup: "Appels d'offres",
    title: "Appels d'offres et achats clés en main",
    body: "Nous sourçons des fabricants coréens pour votre appel d'offres ou votre demande de prix, vous aidons à préparer la proposition et accompagnons l'approvisionnement.",
    cta: "Envoyer une demande d'appel d'offres",
  },

  team_home: {
    sup: "Équipe",
    title: "Derrière chaque transaction, il y a des personnes réelles",
    body: "La direction et les responsables qui gèrent personnellement le sourcing, la vérification et l'approvisionnement.",
    cta: "Rencontrer l'équipe",
  },
};

export default fr;

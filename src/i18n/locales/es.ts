import type { UIDict } from './ru';
import type { DeepPartial } from '../deep';

const es: DeepPartial<UIDict> = {
  nav: {
    catalog: "Catálogo",
    buyers: "Para compradores",
    verify: "Cómo verificamos",
    ondemand: "Bajo pedido",
    how: "Cómo trabajamos",
    presence: "Dónde estamos",
    suppliers: "Para proveedores",
    about: "Nosotros",
    faq: "Preguntas frecuentes",
    contacts: "Contacto",
    team: "Equipo",
    tenders: "Licitaciones",
  },

  common: {
    cta_request: "Enviar una solicitud",
    menu: "Menú",
    close: "Cerrar",
    to_top: "Arriba",
    skip: "Saltar al contenido",
    switch_lang: "Idioma",
    scroll: "Desplázate hacia abajo",
    loading: "Cargando",
    prev: "Anterior",
    next: "Siguiente",
  },

  meta: {
    home_title: "Teranova Group — fabricantes coreanos verificados y acompañamiento integral de la operación",
    home_desc:
      "Encontramos, verificamos y acompañamos suministros desde fábricas coreanas hasta su almacén: suministro naval, cosmética y cuidado (OEM/ODM), medicina y estética, equipos industriales, vehículos comerciales y especiales.",
  },

  marquee: [
    "Suministro naval",
    "Cosmética y cuidado",
    "Medicina y estética",
    "Equipos industriales",
    "Vehículos comerciales y especiales",
    "Sectores afines",
  ],

  hero: {
    sup: "Corea → mundo",
    title: "Fabricantes coreanos verificados — directo",
    sub: "Encontramos, verificamos y acompañamos suministros desde fábricas coreanas hasta su almacén. Con transparencia y a la medida de su necesidad.",
    cta_primary: "Ver el catálogo",
    cta_secondary: "Buscar bajo pedido",
    scroll_hint: "Desplázate hacia abajo",
  },

  verify: {
    sup: "Confianza",
    title: "Primero la verificación, después el contacto",
    intro:
      "Cada proveedor tiene un estado. Es un hecho documentado, no una promesa de resultado — coordinamos y acompañamos la operación.",
    card_visited_t: "Verificado — visita presencial",
    card_visited_d: "Un miembro del equipo visitó la fábrica en persona — con fotos y fecha de la visita.",
    card_provided_t: "Datos facilitados por la empresa",
    card_provided_d: "Información facilitada por el proveedor — todavía no se ha realizado una visita presencial.",
    note: "Las condiciones de calidad se fijan en el contrato con el proveedor. No publicamos los contactos personales de los proveedores — toda la comunicación pasa por Teranova.",
    link: "Cómo verificamos",
  },

  categories: {
    sup: "Catálogo",
    title: "Lo que suministramos desde Corea",
    sub: "El catálogo es lo que ya hemos verificado. Lo que no está, lo buscamos bajo pedido. Los vehículos comerciales, de pasajeros y especiales son una línea aparte; los automóviles de consumo quedan fuera de nuestro alcance.",
    demo_note: "El catálogo se está completando — algunos datos se muestran actualmente a modo de demostración.",
    more: "Saber más",
    groups: [
      { key: "marine", name: "Suministro naval", blurb: "Suministro completo para buques y astilleros.", items: ["motores y repuestos", "equipos de cubierta", "hélices, timones, propulsores", "navegación y comunicaciones", "salvamento y contraincendios", "pinturas y revestimientos"] },
      { key: "cosmetics", name: "Cosmética y cuidado (OEM/ODM)", blurb: "Cosmética coreana y fabricación por contrato bajo su marca.", items: ["cuidado de la piel", "sérums y ampollas", "protección solar (SPF)", "mascarillas y parches", "maquillaje", "envases cosméticos"] },
      { key: "medical", name: "Medicina y estética", blurb: "Equipos y consumibles para clínicas y medicina estética.", items: ["láseres, IPL, HIFU, RF", "rellenos, hilos tensores, skinboosters", "odontología (implantes, CAD/CAM)", "diagnóstico y pruebas", "rehabilitación", "equipamiento hospitalario"] },
      { key: "industrial", name: "Equipos industriales", blurb: "Máquinas-herramienta, automatización y componentes para la producción.", items: ["máquinas CNC", "corte por láser y plasma", "robots industriales", "hidráulica y neumática", "bombas y válvulas", "moldes y utillaje"] },
      { key: "transport", name: "Vehículos comerciales y especiales", blurb: "Vehículos de carga, de pasajeros y especiales, con repuestos.", items: ["camiones y cabezas tractoras", "autobuses", "maquinaria de construcción", "maquinaria agrícola", "vehículos especiales", "remolques, neumáticos, baterías"] },
      { key: "adjacent", name: "Sectores afines", blurb: "Amplia cobertura de nichos donde Corea destaca.", items: ["materiales de construcción", "alimentación y envasado", "tratamiento de agua y ecología", "energía y renovables", "electrónica industrial y LED", "textiles técnicos"] },
      { key: "chemical", name: "Química y materiales", blurb: "Materias primas químicas, polímeros y materiales industriales.", items: ["materias primas químicas y reactivos", "plásticos y polímeros", "caucho", "pinturas y revestimientos", "adhesivos y selladores", "fertilizantes y agroquímicos"] },
    ],
  },

  ondemand: {
    sup: "Bajo pedido",
    title: "¿No está en el catálogo? Encontramos la fábrica por usted",
    sub: "Describa lo que necesita. Buscamos fabricantes coreanos para su proyecto, los verificamos y organizamos el suministro. El catálogo es lo ya verificado; bajo pedido es algo nuevo para usted.",
    points: [
      "Precisar la necesidad y los requisitos",
      "Buscar y verificar fábricas",
      "Acordar precios y condiciones",
      "Acompañar el pago, la logística y el control",
    ],
    form_title: "Enviar una solicitud",
    form_note: "Tras enviar su solicitud, nos pondremos en contacto, precisaremos los detalles y propondremos opciones. Los precios y las condiciones se adaptan a su solicitud.",
  },

  presence: {
    sup: "Dónde estamos cerca",
    title: "Estamos junto al fabricante",
    onsite_lead: "En estos países contamos con equipos sobre el terreno — encontramos, visitamos y verificamos personalmente a los proveedores:",
    countries: ["Corea", "Japón", "China", "Türkiye"],
    other: "Las solicitudes para otras regiones se atienden bajo pedido.",
    buyers_lead: "Acompañamos a compradores en todo el mundo:",
    buyers_regions: ["CEI", "Europa", "Türkiye", "EE. UU.", "Asia"],
  },

  how: {
    sup: "Cómo trabajamos",
    title: "Tres pasos — de la solicitud a la entrega",
    sub: "Con transparencia y a la medida de su necesidad.",
    steps: [
      { t: "Solicitud", d: "Usted nos dice qué necesita." },
      { t: "Búsqueda y verificación", d: "Encontramos la fábrica, la verificamos y acordamos las condiciones." },
      { t: "Operación y entrega", d: "Acompañamos el pago, la logística y el control hasta la recepción." },
    ],
  },

  cta: {
    sup: "Empecemos",
    title: "Díganos qué necesita encontrar en Corea",
    sub: "Un solo contacto — y nos encargamos de la búsqueda, la verificación y el suministro.",
    button: "Contactar",
  },

  about_home: {
    sup: "Nosotros",
    title: "Personas reales y visitas presenciales a las fábricas",
    body: "Teranova encuentra fabricantes en Corea, los verifica — incluso con una visita presencial a la fábrica — y gestiona la operación desde la primera solicitud hasta la recepción de la mercancía. Un único socio responsable en lugar de una cadena de intermediarios.",
    photo_note: "Aquí irán fotos reales: el equipo y las visitas a las fábricas.",
    cta: "Más sobre la empresa",
  },

  tenders_home: {
    sup: "Licitaciones",
    title: "Licitaciones y compras llave en mano",
    body: "Buscamos fabricantes coreanos para su licitación o RFQ, ayudamos a preparar la propuesta y acompañamos el suministro.",
    cta: "Enviar una solicitud de licitación",
  },

  team_home: {
    sup: "Equipo",
    title: "Detrás de cada operación hay personas reales",
    body: "La dirección y los gestores que se encargan personalmente de la búsqueda, la verificación y el suministro.",
    cta: "Conocer al equipo",
  },

  form: {
    company: "Empresa",
    contact: "Persona de contacto",
    email: "Correo electrónico",
    phone: "Teléfono / mensajería",
    need: "Qué necesita encontrar",
    volume: "Volumen",
    timeline: "Plazos",
    comment: "Comentario",
    submit: "Enviar solicitud",
    required_hint: "Los campos marcados con * son obligatorios. Usamos sus datos únicamente para tramitar su solicitud.",
    ph_company: "Su empresa",
    ph_contact: "Nombre y apellidos",
    ph_email: "business@email.com",
    ph_phone: "+34 / +82 …",
    ph_need: "p. ej., sérums OEM, bombas navales, máquina CNC",
    ph_volume: "p. ej., 50 000 unidades",
    ph_timeline: "p. ej., 6–8 semanas",
    ph_comment: "Detalles, requisitos, certificación…",
  },

  thanks: {
    title: "Solicitud enviada",
    body: "¡Gracias! Hemos recibido su solicitud y nos pondremos en contacto en breve.",
    back: "Volver al inicio",
  },

  notfound: {
    title: "Esta página estará disponible pronto",
    body: "Esta sección aún está en preparación. Vuelva a la página de inicio — esa ya está lista.",
    back: "Ir al inicio",
  },

  footer: {
    blurb: "Conectamos a fabricantes coreanos verificados con compradores de todo el mundo y acompañamos toda la operación.",
    nav_title: "Navegación",
    contact_title: "Contacto",
    loc: "Corea",
    joint_brand: "Teranova Group — marca conjunta de AIA Group Ltd y Teranova Group Ltd.",
    disclaimer:
      "El catálogo se está completando; algunos datos son de demostración. Los precios son orientativos y no constituyen una oferta. Teranova Group coordina y acompaña las operaciones a través de socios de confianza y no es un fabricante.",
    rights: "© 2025 Teranova Group",
  },
};

export default es;

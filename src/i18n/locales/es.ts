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
    buyers_regions: ["CEI", "Europa", "Türkiye", "EE. UU.", "Asia", "América Latina"],
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
    category: "Categoría",
    category_ph: "— Seleccione una categoría —",
    categories: [
      "Suministro naval",
      "K-beauty",
      "Medicina y estética",
      "Equipos industriales",
      "Vehículos comerciales y especiales",
      "Productos químicos",
      "Otro — no estoy seguro",
    ],
    err_need: "Indíquenos qué necesita.",
    err_contact: "Añada un correo electrónico o teléfono válido.",
    err_email: "Introduzca un correo electrónico válido.",
    err_phone: "Introduzca un teléfono válido — al menos 7 dígitos.",
    err_required: "Rellene los campos obligatorios.",
    err_network: "No se pudo enviar. Escríbanos directamente:",
    req_note: "Obligatorio: qué necesita y un correo electrónico o teléfono. Usamos sus datos únicamente para tramitar su solicitud.",
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

  pages: {
    cosmetics: {
      intro_title: "Cosmética y cuidado de Corea — OEM/ODM bajo su propia marca",
      intro_body:
        "Corea es el centro mundial de la fabricación por contrato de cosmética. Encontramos la fábrica coreana adecuada para usted, la verificamos en persona y dirigimos todo el proyecto: desde la fórmula y las muestras hasta la producción, la certificación y la entrega en su almacén. Tanto si quiere lanzar una línea bajo su propia marca como si prefiere comprar K-beauty ya lista, nos encargamos de la búsqueda de proveedores, las negociaciones y el acompañamiento integral.",
      models_title: "Cómo funciona la fabricación por contrato de cosmética en Corea",
      models_sub: "Tres modelos — elegimos el que se ajusta a su objetivo.",
      models: [
        { name: "ODM", full: "Original Design Manufacturing", desc: "La fábrica dispone de sus propias formulaciones y desarrollos ya listos. Usted elige una fórmula, la adapta a su marca y la lanza bajo su propia etiqueta. La vía más rápida y asequible para lanzar una marca sin laboratorio propio. La mayoría de las mejores fábricas coreanas trabajan precisamente como ODM." },
        { name: "OEM", full: "Original Equipment Manufacturing", desc: "La fábrica produce según su fórmula y su especificación ya definidas. La opción idónea cuando usted ya cuenta con su propia fórmula." },
        { name: "private label", full: "", desc: "Un producto de fábrica ya listo y verificado, con su etiqueta. Plazo de ejecución mínimo." },
      ],
      process_title: "Cómo se desarrolla un proyecto",
      process_lead: "Etapas habituales:",
      process: [
        "Brief — qué producto, volumen, mercado y requisitos.",
        "Selección de fábrica según categoría, volumen y presupuesto.",
        "Fórmula — una fórmula ODM ya lista o un desarrollo a medida (OEM).",
        "Muestras y ajustes.",
        "Pruebas y certificación para su mercado.",
        "Producción y control de calidad (QC).",
        "Envío y logística hasta su almacén.",
      ],
      facts: [
        { k: "Plazo de ejecución", v: "Orientativo: una fórmula ODM ya lista con ajustes mínimos — unos 30–60 días desde la aprobación de la muestra; una fórmula totalmente a medida — unos 90–150 días, incluidas las pruebas y la certificación." },
        { k: "MOQ", v: "En las grandes fábricas (nivel Cosmax, Kolmar) suele ser de 5000–10 000 unidades por SKU; en fabricantes medianos y boutique — desde unas 500–1000 unidades. El MOQ y el precio suelen ser objeto de negociación — y esa es una de nuestras tareas." },
        { k: "Certificación", v: "Las fábricas coreanas trabajan conforme a ISO 22716 (GMP de cosmética) y CGMP; para Corea — MFDS; la autorización para un mercado concreto se gestiona por separado." },
      ],
      scope_title: "Qué abarcamos en cosmética",
      scope_items: [
        "Cuidado de la piel — cremas, sérums, ampollas, tónicos, limpieza",
        "Protección solar (SPF) — una de las categorías más fuertes de Corea",
        "Mascarillas de tejido y parches — Corea marcó el estándar mundial de las mascarillas con sérum",
        "Cosmecéutica / funcional — antiedad, iluminadora, piel problemática y sensible",
        "Cosmética de color — cushions, tints, bases y maquillaje",
        "Cuidado del cabello y del cuerpo",
        "Envases cosméticos — airless, tubos, tarros, dispensadores, embalaje secundario",
        "Ingredientes y materias primas — bajo pedido (sector afín)",
      ],
      scope_note: "Asistimos con regularidad a las ferias del sector en Corea y seleccionamos y verificamos personalmente a fabricantes en todas estas categorías.",
      why_title: "Por qué necesita un socio sobre el terreno",
      why_points: [
        { t: "Acceso", d: "Las mejores fábricas coreanas a menudo ignoran las consultas en frío y del extranjero, o fijan un MOQ de entrada elevado. Nosotros abrimos puertas y encontramos una fábrica dispuesta a trabajar con su volumen." },
        { t: "El encaje adecuado", d: "Hay cientos de fábricas, cada una con su punto fuerte: unas en cuidado de la piel, otras en maquillaje de color, otras en mascarillas, otras en envases. Sabemos quién hace realmente qué — y no le haremos perder el tiempo con las que no encajan." },
        { t: "Negociación", d: "El MOQ y el precio suelen bajar en la negociación — nos ocupamos de ello por usted, en coreano." },
        { t: "Idioma y cultura", d: "Todo el diálogo con la fábrica pasa por nosotros — no se pierde nada en la traducción." },
        { t: "Verificación", d: "Un miembro de nuestro equipo visita la fábrica en persona (fotos, fecha de la visita) — el estado «Verificado»." },
        { t: "Un único socio para todo", d: "Búsqueda → verificación → negociación → muestras → producción → pago → logística → control hasta su almacén. Un único responsable en lugar de una cadena de intermediarios." },
      ],
      steps_title: "De la idea al almacén — con nosotros",
      steps: [
        { t: "Solicitud", d: "Describa el producto, el volumen y el mercado." },
        { t: "Búsqueda y verificación", d: "Encontramos y verificamos personalmente una fábrica para su proyecto." },
        { t: "Muestras y condiciones", d: "Acordamos la fórmula, el precio, el MOQ y los plazos." },
        { t: "Producción y suministro", d: "Acompañamos la producción, el QC, el pago y la logística hasta su almacén." },
      ],
      markets_title: "Preparamos su lanzamiento para su mercado",
      markets_body:
        "Ayudamos a preparar la documentación para su mercado de destino: para EE. UU. — el registro FDA OTC (por ejemplo, para productos con SPF); para la UE — el cumplimiento del EU Cosmetics Regulation (EC No 1223/2009). Algunas fábricas coreanas ya tienen experiencia exportando a EE. UU., la UE y Asia, y cuentan con las certificaciones pertinentes (incluida la halal). El conjunto exacto de requisitos depende de la categoría de producto — lo precisamos al inicio del proyecto.",
      cta_title: "Lance su cosmética desde Corea",
      cta_body: "Díganos qué quiere producir o comprar — encontramos la fábrica, la verificamos y gestionamos la operación. La consulta inicial y la búsqueda de proveedores son gratuitas.",
      cta_button: "Enviar una solicitud",
    },
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

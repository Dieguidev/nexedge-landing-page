export const siteConfig = {
  name: "NEXEDGE",
  tagline: "PERU DIGITALSTUDIO",
  description: "Innovación tecnológica con enfoque humano",
  email: "tech@nexedgeperu.com",
  phone: "+51 956 096 607",
  location: "Lima, Perú",
  schedule: "Lun - Vie 9:00 - 18:00",
  copyright: "© 2026 Nexedge. Todos los derechos reservados.",
};

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Sobre nosotros", href: "#sobre-nosotros" },
];

export const heroContent = {
  brandName: "NEXEDGE",
  title: "Innovación con Propósito",
  subtitle: "Tecnología que cierra brechas y acompaña tu crecimiento digital",
  ctas: [
    { label: "Descubre más", href: "#servicios", variant: "teal" as const },
    {
      label: "Pedir una Demo",
      href: "#contacto",
      variant: "hero-outline" as const,
    },
  ],
  backgroundImage: "/images/hero/hero-bg-global-network.jpg",
};

export const stats = [
  {
    value: 5,
    suffix: " Años",
    label: "Experiencia en el mercado",
    icon: "/icons/features/soluciones-escalables.png",
  },
  {
    value: 98,
    suffix: " %",
    label: "Satisfacción del cliente",
    icon: "/icons/ui/estrella.png",
  },
  {
    value: 150,
    suffix: "+",
    label: "Proyectos entregados",
    icon: "/icons/ui/cohete.png",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Soporte Disponible",
    isAlwaysOn: true,
    icon: "/icons/ui/burbuja-dialogo.png",
  },
];

export const services = [
  {
    title: "Desarrollo de Software y Apps",
    description:
      "Creamos aplicaciones web y móviles personalizadas que impulsan tu negocio hacia el futuro digital",
    icon: "/icons/services/desarrollo-software.png",
    href: "#servicios",
  },
  {
    title: "Transformación Digital",
    description:
      "Modernizamos tus procesos empresariales con tecnología de vanguardia para maximizar tu eficiencia",
    icon: "/icons/features/mantenimiento.png",
    href: "#servicios",
  },
  {
    title: "IA y\nAutomatización",
    description:
      "Implementamos inteligencia artificial y automatización para automatizar tus operaciones y reducir costos",
    icon: "/icons/services/ia-automatizacion.png",
    href: "#servicios",
  },
];

export const whyChooseUs = [
  {
    title: "Soluciones Escalables",
    description:
      "Desarrollamos tecnología que crecerá a la par del volumen de tu negocio.",
    image: "/images/sections/why-soluciones-escalables.png",
    imagePosition: "center center",
  },
  {
    title: "Acompañamiento Estratégico",
    description:
      "No somos solo proveedores técnicos; somos socios en tu estrategia digital.",
    image: "/images/sections/about-team-meeting.png",
    imagePosition: "center center",
  },
  {
    title: "Garantía y Soporte",
    description: "Respaldo continuo post-lanzamiento.",
    image: "/images/hero/hero-bg-coding.jpg",
    imagePosition: "center center",
  },
];

export const processSteps = [
  {
    title: "Descubrimiento",
    description:
      "Analizamos tus necesidades y objetivos para diseñar la solución perfecta.",
    icon: "/icons/process/descubrimiento.png",
  },
  {
    title: "Planificación",
    description:
      "Creamos un roadmap detallado con hitos claros y tiempos de entrega realistas.",
    icon: "/icons/process/planificacion.png",
  },
  {
    title: "Desarrollo",
    description:
      "Construimos tu solución con las mejores prácticas y tecnologías de vanguardia.",
    icon: "/icons/process/desarrollo.png",
  },
  {
    title: "Testing",
    description:
      "Probamos exhaustivamente cada funcionalidad para garantizar calidad superior.",
    icon: "/icons/process/testing.png",
  },
  {
    title: "Lanzamiento",
    description:
      "Desplegamos tu proyecto y te acompañamos en cada paso del lanzamiento.",
    icon: "/icons/process/lanzamiento.png",
  },
  {
    title: "Soporte",
    description:
      "Mantenimiento continuo y mejoras para asegurar el éxito a largo plazo.",
    icon: "/icons/process/soporte.png",
  },
];

export const portfolioProjects = [
  {
    title: "GESTOREDU",
    category: "Desarrollo Web & UI/UX",
    tag: "Plataforma Escolar",
    description: "Gestión Escolar moderna, ultrarrápida y sin complicaciones.",
    image: "/images/portfolio/gestoredu.png",
    cta: "Ver Caso de Estudio",
    href: "#contacto",
  },
  {
    title: "PERÚ MISTERIOSO",
    category: "Branding & Diseño Visual",
    tag: "Turismo Discovery",
    description: "Descubre los secretos ancestrales del corazón de sudamérica.",
    image: "/images/portfolio/peru-misterioso.png",
    cta: "Explorar Diseño",
    href: "#contacto",
  },
  {
    title: "HSK",
    category: "Plataforma Web Corporativa",
    tag: "Portal de Logística",
    description:
      "Soluciones Logística Globales y Aduanas. Costo Asequible. Soporte 24/7.",
    image: "/images/portfolio/hsk-logistics.png",
    cta: "Explorar Proyecto",
    href: "#contacto",
  },
  {
    title: "PERÚ EXPLORER",
    category: "Desarrollo Web & UI/UX",
    tag: "10 Destinos",
    description: "Explorando Peruano... 10 Destinos Impredibles del país.",
    image: "/images/portfolio/peru-explorer.png",
    cta: "Descubrir Más",
    href: "#contacto",
  },
];

export const valuePropositions = [
  {
    title: "Atención personalizada 24/7",
    description:
      "Estamos disponibles cuando nos necesites, con soporte humano real.",
    icon: "/icons/features/garantia-soporte.png",
  },
  {
    title: "Acompañamiento post-entrega",
    description:
      "No te dejamos solo después de la implementación, te acompañamos en el crecimiento.",
    icon: "/icons/ui/burbuja-dialogo.png",
  },
  {
    title: "Soluciones escalables",
    description:
      "Tecnología que crece contigo, adaptándose a tus necesidades futuras.",
    icon: "/icons/features/soluciones-escalables.png",
  },
  {
    title: "Transparencia en costos",
    description:
      "Sin sorpresas ni costos ocultos, presupuestos claros desde el inicio.",
    icon: "/icons/ui/estrella.png",
  },
  {
    title: "Diseño centrado en UX",
    description:
      "Priorizamos la experiencia del usuario en cada solución que desarrollamos.",
    icon: "/icons/services/desarrollo-software.png",
  },
  {
    title: "Innovación constante",
    description:
      "Utilizamos las últimas tecnologías para mantenerte a la vanguardia.",
    icon: "/icons/services/ia-automatizacion.png",
  },
];

export const valueSideBenefits = [
  {
    label: "Capacitación post-desarrollo",
    icon: "/icons/features/mantenimiento.png",
  },
  {
    label: "Atención personalizada",
    icon: "/icons/features/garantia-soporte.png",
  },
  {
    label: "Actualizaciones y mantenimiento",
    icon: "/icons/features/mantenimiento.png",
  },
  {
    label: "Transparencia total",
    icon: "/icons/features/cloud-infraestructura.png",
  },
];

export const footerLinks = {
  quick: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Quiénes Somos", href: "#sobre-nosotros" },
  ],
  services: [
    { label: "Desarrollo Web", href: "#servicios" },
    { label: "Apps Móviles", href: "#servicios" },
    { label: "Inteligencia Artificial", href: "#servicios" },
    { label: "Consultoría", href: "#servicios" },
  ],
  support: [
    { label: "Soporte Técnico", href: "#contacto" },
    { label: "Actualizaciones de Software", href: "#contacto" },
    {
      label: "Enviar solicitud de Soporte",
      href: "mailto:tech@nexedgeperu.com",
    },
    { label: "Enviar Comentarios", href: "mailto:tech@nexedgeperu.com" },
  ],
};

export const contactItems = [
  {
    label: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: "/icons/contact/email.png",
  },
  {
    label: siteConfig.location,
    href: "#contacto",
    icon: "/icons/contact/ubicacion.png",
  },
  {
    label: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    icon: "/icons/contact/telefono.png",
  },
  {
    label: siteConfig.schedule,
    href: "#contacto",
    icon: "/icons/contact/horario.png",
  },
];

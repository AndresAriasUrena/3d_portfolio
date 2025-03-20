import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  tuti,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  servidental,
  abraham,
  abraham2024,
  pranayama,
  woof,
  abrahamfoto,
  aquelarre,
  leilyn,
  tutitips,
  aguadelasierra,
  galileo,
  giofi,
  adv,
  servidental24,
  terciopelo,
  esgb,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Nosotros",
  },
  {
    id: "work",
    title: "Trabajo",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Desarrollo Web: Desktop y Mobile",
    icon: web,
  },
  {
    title: "Diseño UI/UX y Funcionalidades",
    icon: mobile,
  },
  {
    title: "Animaciones y efectos dinámicos",
    icon: backend,
  },
  {
    title: "Inteligencia Artificial Generativa",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  /*  {
    name: "docker",
    icon: docker,
  }, */
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Estoy muy satisfecho con la forma que nuestro Sito Web representa los valores de nuestra compañía.",
    name: "Allan Chan",
    designation: "CEO",
    company: "ServiDentalCr",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Nunca he conocido un equipo que le importe tanto el éxito de sus clientes como lo hace Aurigital.",
    name: "Abraham Corella",
    designation: "Propietario",
    company: "Abraham Studio",
    image: abrahamfoto,
  },
  {
    testimonial:
      "Después de que Aurigital rediseñara nuestro sitio Web, el tráfico ha aumentado en un 50%. Estamos agradecidos.",
    name: "Daniel Hernandez",
    designation: "CEO",
    company: "Agua de al Sierra",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Pranayama",
    description:
      "Sitio Web que le permite al propietario vender productos y automatizar el sistema de reservas.",
    tags: [
      { name: "pranayama", color: "blue-text-gradient" },
      { name: "personalbrand", color: "green-text-gradient" },
      { name: "calendarhit", color: "pink-text-gradient" },
    ],
    image: pranayama,
    source_code_link: "https://pranayamacr.com/",
  },
  {
    name: "Abraham Studio 2024",
    description:
      "Aplicación Web que le permite al propietario automatizar el sistema de reservas.",
    tags: [
      { name: "barber", color: "blue-text-gradient" },
      { name: "personalbrand", color: "green-text-gradient" },
      { name: "calendarhit", color: "pink-text-gradient" },
    ],
    image: abraham2024,
    source_code_link: "https://abrahamstudio.calendarhit.com/",
  },
  {
    name: "Tulsi Psicóloga 2024",
    description:
      "Los pacientes pueden consultar servicios, talleres y disponibilidad desde cualquier dispositivo 24/7.",
    tags: [
      { name: "therapy", color: "blue-text-gradient" },
      { name: "art", color: "green-text-gradient" },
      { name: "calendarhit", color: "pink-text-gradient" },
    ],
    image: tuti,
    source_code_link: "https://tulsi.calendarhit.com/",
  },
  {
    name: "Servidental 2024",
    description:
      "Rediseño de Catálogo de productos y servicios ofrecidos por ServiDental.",
    tags: [
      { name: "equipo médico", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "seo", color: "pink-text-gradient" },
    ],
    image: servidental24,
    source_code_link: "https://servidentalcr.com/products/",
  },
  {
    name: "Terciopelo Beauty",
    description:
      "Formulario de cotización de servicios y sistema de reservas para salón de belleza.",
    tags: [
      { name: "calendarhit", color: "blue-text-gradient" },
      { name: "agenda en linea", color: "green-text-gradient" },
      { name: "microanimaciones", color: "pink-text-gradient" },
    ],
    image: terciopelo,
    source_code_link: "https://terciopelo.aurigital.com/",
  },
  {
    name: "Escuela Sotero González B",
    description:
      "Proyecto de responsabilidad social para la Escuela Sotero González B. Historia, Servicios, Proyectos y Actividades.",
    tags: [
      { name: "escuela", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "educación", color: "pink-text-gradient" },
    ],
    image: esgb,
    source_code_link: "https://esgb.aurigital.com/",
  },
  {
    name: "GIOFI",
    description:
      "Fintech registrada y regulada en Costa Rica, para el canje de dinero, transferencias de fondos, y administración de fideicomisos y escrow",
    tags: [
      { name: "fintech", color: "blue-text-gradient" },
      { name: "transactions", color: "green-text-gradient" },
      { name: "lottieAnimations", color: "pink-text-gradient" },
    ],
    image: giofi,
    source_code_link: "https://giofi.io/",
  },
  {
    name: "Architecte du Visage",
    description:
      "Centro de estética del Dr. Dominique Magnin. Ubicado en Suiza. Sitio web en inglés y francés.",
    tags: [
      { name: "aestheticmedicine", color: "blue-text-gradient" },
      { name: "art", color: "green-text-gradient" },
      { name: "multilingual", color: "pink-text-gradient" },
    ],
    image: adv,
    source_code_link: "https://drmagnin.aurigital.com/",
  },
  {
    name: "Galileo Capital",
    description:
      "Fintech registrada y regulada en el mercado americano y latinoamericano, para el comercio de cryptomonedas, divisas y activos digitales. Formularios KYC.",
    tags: [
      { name: "crypto", color: "blue-text-gradient" },
      { name: "digitalassets", color: "green-text-gradient" },
      { name: "lottieAnimations", color: "pink-text-gradient" },
    ],
    image: galileo,
    source_code_link: "https://galileocapital.io/",
  },
  {
    name: "Tutitips",
    description:
      "Los pacientes pueden consultar servicios, talleres y disponibilidad desde cualquier dispositivo 24/7.",
    tags: [
      { name: "therapy", color: "blue-text-gradient" },
      { name: "art", color: "green-text-gradient" },
      { name: "calendarhit", color: "pink-text-gradient" },
    ],
    image: tutitips,
    source_code_link: "https://tuti.calendarhit.com/",
  },
  /*{
    name: "Aquelarre",
    description:
      "Comunidad creativa de artistas blog de noticias, podcast, agenda cultural, oportunidades y comercio.",
   tags: [
     { name: "artist", color: "blue-text-gradient" },
      { name: "creativecommunity", color: "green-text-gradient" },
      { name: "communication", color: "pink-text-gradient" },
    ],
    image: aquelarre,
    source_code_link: "https://www.aquelarre.wtf",
  },*/
  {
    name: "Agua de la Sierra",
    description:
      "Pagina informativa, catálogo y contacto para envasadora de agua de manantial.",
    tags: [
      { name: "catalog", color: "blue-text-gradient" },
      { name: "watercontainers", color: "green-text-gradient" },
      { name: "informative", color: "pink-text-gradient" },
    ],
    image: aguadelasierra,
    source_code_link: "https://aguadelasierra.com",
  },
  {
    name: "2022 - ServiDental",
    description:
      "Catálogo de productos y servicios ofrecidos por ServiDental.",
    tags: [
      { name: "medicalequipment", color: "blue-text-gradient" },
      { name: "catalog", color: "green-text-gradient" },
      { name: "dentist", color: "pink-text-gradient" },
    ],
    image: servidental,
    source_code_link: "https://2022.servidentalcr.com/",
  },
  {
    name: "Abraham Studio 2022",
    description:
      "Aplicación Web que le permite al propietario automatizar el sistema de reservas.",
    tags: [
      { name: "barber", color: "blue-text-gradient" },
      { name: "personalbrand", color: "green-text-gradient" },
      { name: "calendarhit", color: "pink-text-gradient" },
    ],
    image: abraham,
    source_code_link: "https://abrahamstudio.aurigital.com/",
  },
  // {
  //   name: "Woof",
  //   description:
  //     "Agendar diversos servicios veterinarios a domicilio, desde cualquier dispositivo.",
  //   tags: [
  //     { name: "veterinarian", color: "blue-text-gradient" },
  //     { name: "calendarhit", color: "green-text-gradient" },
  //     { name: "emergencyservices", color: "pink-text-gradient" },
  //   ],
  //   image: woof,
  //   source_code_link: "https://woofcr.calendarhit.com/",
  // },
];


export { services, technologies, experiences, testimonials, projects };

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
  woof,
  abrahamfoto,
  aquelarre,
  leilyn,
  tutitips,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mí",
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
    title: "Desarrollador Web",
    icon: web,
  },
  {
    title: "Diseñador de Marca",
    icon: mobile,
  },
  {
    title: "Desarrollador Backend",
    icon: backend,
  },
  /* {
    title: "Creador de contenido",
    icon: creator,
  }, */
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
      "Nunca he conocido un desarrollador que le importe tanto el éxito de sus clientes como lo hace Andrés.",
    name: "Abraham Corella",
    designation: "Propietario",
    company: "Abraham Studio",
    image: abrahamfoto,
  },
  {
    testimonial:
      "Después de que Andrés rediseñara nuestro sitio Web, el tráfico ha aumentado en un 50%. Estamos agradecidos.",
    name: "Daniel Hernandez",
    designation: "CEO",
    company: "Agua de al Sierra",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Tutitips",
    description:
      "Aplicación Web que le permite automatizar la gestión de consultas de psicología. Los pacientes pueden consultar servicios, talleres y disponibilidad desde cualquier dispositivo 24/7.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "FramerMotion",
        color: "pink-text-gradient",
      },
    ],
    image: tutitips,
    source_code_link: "https://tuti.calendarhit.com/",
  },
  {
    name: "Aquelarre",
    description:
      "Comunidad creativa de artistas multidisciplinarios en la cual se comparte un blog de noticias, podcast, agenda cultural, oportunidades y comercio.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
    ],
    image: aquelarre,
    source_code_link: "https://www.aquelarre.wtf",
  },
  {
    name: "Clínica Dra. Leilyn Tacsan",
    description:
      "Aplicación Web que le permite automatizar la gestión de citas odóntolicas. Los usuarios pueden consultar servicios y disponibilidad desde cualquier dispositivo 24/7.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: leilyn,
    source_code_link: "https://draleilyntacsan.calendarhit.com/",
  },
  {
    name: "ServiDental",
    description:
      "Plataforma web que le permite a los usuarios, consultar el catálogo de productos y servicios ofrecidos por ServiDental así como facilitar los medios de contacto para diversas solicitudes.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: servidental,
    source_code_link: "http://servidentalcr.com/",
  },
  {
    name: "Abraham Studio",
    description:
      "Aplicación Web que le permite al propietario automatizar el sistema de reservas. Los usuarios pueden consultar precios y disponibilidad desde cualquier dispositivo 24/7.",
    tags: [
      {
        name: "scss",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: abraham,
    source_code_link: "https://abrahamstudio.calendarhit.com/",
  },
  {
    name: "Woof",
    description:
      "Aplicación Web interactiva que le permite a los usuarios agendar diversos servicios veterinarios a domicilio, automáticamente y desde cualquier dispositivo.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: woof,
    source_code_link: "https://woofcr.calendarhit.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

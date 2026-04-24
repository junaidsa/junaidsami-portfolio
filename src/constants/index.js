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
  tailwind,
  nodejs,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  passionclinicsVideo,
  vue,
  laravel,
  python,
  ai,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Development (Laravel, React, Vue.js)",
    icon: web,
  },
  {
    title: "Scalable Backend & API Development (Laravel + Python)",
    icon: backend,
  },
  {
    title: "Modern Frontend Development (React.js & Vue.js)",
    icon: creator,
  },
  {
    title: "AI & NLP Solutions (Python Automation & Data Intelligence)",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript (ES6+)",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Vue.js",
    icon: vue,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Laravel (PHP)",
    icon: laravel,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git & GitHub",
    icon: git,
  },
  {
    name: "Ai",
    icon: ai,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Allied Tajar",
    icon: starbucks,
    iconBg: "#f2f2f2",
    date: "Fab 2022 - March 2023",
    points: [
      "Led the development of a full-scale ERP system, improving operational efficiency and productivity.",
      "Managed end-to-end full stack development, including database design and system integrations.",
      "Built a real-time reporting module with customizable dashboards for data-driven decision-making.",
      "Developed and optimized POS and geolocation features, ensuring seamless transactions and real-time tracking.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Crexed",
    icon: tesla,
    iconBg: "#f2f2f2",
    date: "Apr 2023 - Jun 2024",
    points: [
      "Developed and maintained scalable web applications using Laravel and MySQL.",
      "Designed and implemented RESTful APIs for seamless third-party integrations.",
      "Built real-time features including video calling and chat for remote healthcare solutions.",
      "Implemented advanced search and filtering to improve user experience and accessibility.",
    ],
  },
{
  title: "Full Stack Developer",
  company_name: "Huzmark Tech",
  icon: shopify,
  iconBg: "#383E56",
  date: "Jul 2024 - May 2025",
  points: [
    "Delivered multiple Laravel-based projects for international clients across domains including ERP, healthcare, job portals, and event management systems.",
    "Developed scalable web applications with custom features such as POS systems, patient history management, and task management platforms.",
    "Designed and implemented RESTful APIs and dynamic dashboards for seamless system integrations and improved user experience.",
    "Collaborated with clients to gather requirements, provide technical solutions, and ensure timely delivery of high-quality products.",
  ],
},
{
  title: "Full Stack Developer",
  company_name: "TechFridge",
  icon: meta,
  iconBg: "#E6DEDD",
  date: "Jun 2025 - DEC 2025",
  points: [
    "Developed scalable full stack solutions for Lote Tree Nursery, including a multilingual child activity and attendance management system.",
    "Built a parent panel with automated observation reports via email, improving communication and long-term student tracking.",
    "Engineered a custom installment management system with an investor panel for secure payment tracking and financial transparency.",
    "Designed robust backend architecture using Laravel, MySQL, and JavaScript, ensuring data integrity and system scalability.",
  ],
}
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "PassionClinics",
    description:
      "A Laravel 11 web app for seamless patient–doctor interaction with appointment scheduling, video consultations, real-time notifications, and multi-language support. Built with performance and SEO in mind.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: passionclinicsVideo,
    source_code_link: "https://github.com/",
    mediaType: "video",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    // mediaType: "image" (default) or "video" - add this property to use video
    // mediaType: "image",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
    // mediaType: "image" (default) or "video" - add this property to use video
    // mediaType: "image",
  },
  // Example of a project with video:
  // {
  //   name: "Video Project",
  //   description: "A project showcasing video content.",
  //   tags: [
  //     { name: "react", color: "blue-text-gradient" },
  //     { name: "video", color: "green-text-gradient" },
  //   ],
  //   image: "/path/to/your/video.mp4", // Can be a local path or URL
  //   source_code_link: "https://github.com/",
  //   mediaType: "video",
  // },
];

export { services, technologies, experiences, testimonials, projects };

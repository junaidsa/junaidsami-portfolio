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
  smarteduVideo,
  vue,
  laravel,
  python,
  ai,
easyinstallments,
wrkbid,
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
    name: "SmartEdu",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap 5.3",
        color: "pink-text-gradient",
      },
    ],
    image: smarteduVideo,
    source_code_link: "https://github.com/",
    // mediaType: "image" (default) or "video" - add this property to use video
    mediaType: "video",
  },
{
  name: "skillslay",
  description:
    "A comprehensive course management portal that allows students to enroll in courses, track their progress, manage schedules, and access learning materials, while admins can manage courses, teachers, and student data efficiently.",
  tags: [
    {
      name: "reactjs",
      color: "blue-text-gradient",
    },
    {
      name: "Laravel",
      color: "green-text-gradient",
    },
    {
      name: "mysql",
      color: "pink-text-gradient",
    },
  ],
  image: tripguide,
  source_code_link: "https://github.com/",
},

{
    name: "Easy installments",
    description:
      "A sales and installment management platform designed to handle product financing, track customer payment schedules, monitor outstanding balances, and generate comprehensive reports for better business insights.",
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
    image: easyinstallments,
    source_code_link: "https://github.com/",
    mediaType: "video",
  },
  {
    name: "Wrkbid",
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
    image: wrkbid,
    source_code_link: "https://github.com/",
  },
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
];

export { services, technologies, experiences, testimonials, projects };

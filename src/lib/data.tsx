import { Github, Twitter, Figma, Facebook, Link, Linkedin } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoHtml5 from "/public/images/logos/html5.svg";
import LogoRedux from "/public/images/logos/redux.svg";
import LogoAnt from "/public/images/logos/ant.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoPostman from "/public/images/logos/postman.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoBootstrap from "/public/images/logos/Bootstrap.svg";
import LogoFpt from "/public/images/fpt-sw.png";
import ProjectWH from "/public/images/WH.jpeg";
import ProjectJobee from "/public/images/jobee.jpeg";
import ProjectWeatherHub from "/public/images/weatherhub.png";
import ProjectMinnaGo from "/public/images/minnago.png";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  LINKEDIN: "https://www.linkedin.com/in/khanhnqse-3oo32003",
  GITHUB: "https://github.com/khanhnqse",
  GITHUB_REPO: "https://github.com/shahsagarm/sagarshah.dev",
  TWITTER: "https://twitter.com/shahsagarm",
  FIGMA: "https://www.figma.com/@shahsagarm",
  FIGMA_FILE:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  // {
  //   label: "Testimonials",
  //   href: "#testimonials",
  // },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/khanhnqse",
  },
  {
    icon: Facebook,
    url: "https://www.facebook.com/jinjin135/",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/khanhnqse-3oo32003/",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Bootstrap",
    logo: LogoBootstrap,
    darkModeLogo: LogoBootstrap,
    url: "https://getbootstrap.com/",
  },
  {
    label: "HTML5",
    logo: LogoHtml5,
    url: "#",
  },
  {
    label: "Redux",
    logo: LogoRedux,
    darkModeLogo: LogoRedux,
    url: "https://redux.js.org/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Ant Design",
    logo: LogoAnt,
    darkModeLogo: LogoAnt,
    url: "https://ant.design/",
  },
  {
    label: "Postman",
    logo: LogoPostman,
    url: "https://www.postman.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoFpt,
    logoAlt: "Fpt logo",
    position: "FPT Software Academy - Intern",
    startDate: new Date(2024, 1),
    endDate: new Date(2024, 4),
    // currentlyWorkHere: true,
    summary: [
      "Fresher Academy Management System (FAMS).",
      "Role: Intern Frontend Developer.",
      "Used ReactJS, TypeScript, Tailwind CSS, Ant Design to build a responsive and user-friendly interface.",
      "Ensured smooth UI/UX and collaborated effectively within within an 8-member team.",
    ],
  },

  // {
  //   logo: LogoDotnpixel,
  //   darkModeLogo: LogoDotnpixelLight,
  //   logoAlt: "Dotnpixel logo",
  //   position: "Full Stack Developer",
  //   startDate: new Date(2015, 11),
  //   endDate: new Date(2017, 4),
  //   summary: ["Worked as a full stack developer (React / Laravel)."],
  // },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "WorkHive",
    description:
      "WorkHive was developed as a groundbreaking solution for managing and booking coworking spaces.",
    url: "https://workhive-clients.vercel.app/",
    previewImage: ProjectWH,
    technologies: [
      "React",
      "Typescript",
      "React Bootstrap",
      "Cloudinary",
      "Next.js",
      "PostgreSQL",
      "Ant Design",
      "Redux",
      "Tailwindcss",
    ],
  },
  {
    name: "Jobee",
    description:
      "Jobee - AI-powered Job & CV Platform. Jobee is a platform that connects job seekers with employers, providing a seamless experience for both parties.",
    url: "https://solva-app.vercel.app/",
    previewImage: ProjectJobee,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Material UI",
      "Redux Toolkit",
      "Express.js",
      "PostgreSQL",
      "Firebase",
    ],
  },
  // {
  //   name: "Koishop",
  //   description:
  //     "Koi Fish Management & E-commerce Platform. Koishop is a platform that allows users to manage and sell koi fish.",
  //   url: "#",
  //   previewImage: ProjectKoishop,
  //   technologies: [
  //     "React",
  //     "Next.js",
  //     "Typescript",
  //     "Tailwindcss",
  //     "Ant Design",
  //   ],
  // },

  {
    name: "WeatherHub - Modern Weather Application",
    description:
      "Weather Hub is a weather web app built with Next.js and OpenWeatherMap API, featuring an AI chatbot for natural language weather queries.",
    url: "https://my-weather-beige.vercel.app/",
    previewImage: ProjectWeatherHub,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Lucide Icons",
      "OpenWeatherMap API",
      "Gemini API",
    ],
  },
  {
    name: "MinnaGo - Anime & Manga Discovery App",
    description:
      "MinnaGo is a personal web app project built with Next.js and the MyAnimeList API, allowing users to explore anime, manga, and community content. It features a modern UI, responsive design, and smooth animations.",
    url: "https://minna-go.vercel.app/",
    previewImage: ProjectMinnaGo,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: LogoFigma,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: LogoFigma,
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: LogoFigma,
    title: "Freelancer",
    testimonial:
      "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];

export const CERTIFICATES = [
  {
    name: "Honorable Student of Trimester",
    issuer: "FPT University",
    date: "Jun 2025",
    url: "https://fap.fpt.edu.vn/temp/185598c3-b6d5-40d4-8f2c-37e5b5fc65b7.pdf",
    image: "/images/certificates/honorable-student.jpg", // Placeholder
  },
  {
    name: "Excellent Student of Trimester",
    issuer: "FPT University",
    date: "Mar 2024",
    url: "https://fap.fpt.edu.vn/temp/185598c3-b6d5-40d4-8f2c-37e5b5fc65b7.pdf",
    image: "/images/certificates/excellent-student.jpg", // Placeholder
  },
  {
    name: "User Experience Research and Design",
    issuer: "University of Michigan – Coursera",
    date: "Nov 2024",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/NR64ATTSQBA0",
    image: "/images/certificates/ux-research-design.png", // Placeholder
  },
  {
    name: "Project Management Principles and Practices",
    issuer: "University of California, Irvine – Coursera",
    date: "May 2024",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/NLKEQVKH9UXE",
    image: "/images/certificates/project-management.png", // Placeholder
  },
];

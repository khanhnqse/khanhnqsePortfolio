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

import ProjectWorkhive from "/public/images/workhive.jpg";
import ProjectWH from "/public/images/WH.jpeg";
import ProjectJobee from "/public/images/jobee.jpeg";
import ProjectKoishop from "/public/images/koishop.jpeg";

// import AvatarKrisztian from "/public/images/avatar-krisztian.png";
// import AvatarEugen from "/public/images/avatar-eugen.png";
// import AvatarDummy from "/public/images/avatar-dummy.svg";

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
    url: "https://workhive.io.vn/",
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
  {
    name: "Koishop",
    description:
      "Koi Fish Management & E-commerce Platform. Koishop is a platform that allows users to manage and sell koi fish.",
    url: "#",
    previewImage: ProjectKoishop,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Ant Design",
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

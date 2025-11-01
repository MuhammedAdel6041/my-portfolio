import React from "react";

import { FaLinkedin, FaGithub, FaWhatsapp, FaReact } from "react-icons/fa";
import { FaRegHandPeace, FaHandshake, FaRegCopyright } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import P1 from "../public/images/P1.png";
import P2 from "../public/images/P2.png";
import P3 from "../public/images/P3.png";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const socialLinks = [
  { icon: React.createElement(FaLinkedin), href: 'https://www.linkedin.com/in/muhammed-el-menshawy-165b2135b' },
  { icon: React.createElement(FaGithub), href: 'https://github.com/MuhammedAdel6041' },
  { icon: React.createElement(SiGmail), href: 'mailto:muhammad.a.elmenshawy@gmail.com' },
  { icon: React.createElement(FaWhatsapp), href: 'https://wa.me/201122249273' },
] as const;



export const Scroll = [
  { text: "Welcome to my profile", icon: React.createElement(FaRegHandPeace) },
  { text: "Let's work together", icon: React.createElement(FaHandshake) },
  { text: "2024 Muhammed Adel", icon: React.createElement(FaRegCopyright) },
  { text: "Welcome to my profile", icon: React.createElement(FaRegHandPeace) },
  { text: "Let's work together", icon: React.createElement(FaHandshake) },
  { text: "2024 Muhammed Adel", icon: React.createElement(FaRegCopyright) }
] as const;


export const lines = [
  { text: "const aboutMe = {", color: "text-[var(--color-Accent)]" },
  { text: '  name: "Muhammad Adel",', color: "text-green-400" },
  { text: '  role: "Front-End Developer",', color: "text-blue-400" },
  { text: '  location: "Egypt",', color: "text-purple-400" },
  {
    text: '  stack: ["React", "Next.js", "Tailwind CSS"],',
    color: "text-amber-400",
  },
  {
    text: '  passion: "Building elegant & fast web experiences 🚀",',
    color: "text-pink-400",
  },
  {
    text: '  goal: "Creating user interfaces that feel alive ✨",',
    color: "text-orange-400",
  },
  {
    text: '  availableFor: "Frontend Opportunities 💼"',
    color: "text-emerald-400",
  },
  { text: "};", color: "text-[var(--color-Accent)]" },
] as const;

export const projectsData = [
  {
    title: "Deal Hunt E-Commerce",
    description:
      "Developed a fully responsive e-commerce platform with dynamic product listings and seamless user navigation, improving user retention by 25% .",
    tags: ["React", "Vite", "Ant Design", "JavaScript", "Tailwind", "Redux Toolkit"],
    imageUrl: P1,
    demoLink: "https://ecommerce-swap.netlify.app/",
    gitHubRepo: "https://github.com/MuhammedAdel6041/E-commerce_Swap"
  },
  {
    title: "Cryptocurrency",
    description:
      "Built a Responsive Cryptocurrency Website to display Real-Time Market data , Coins  and  Integrated Dynamic Charts for Data Visualization and Enhanced Interactivity with Animation.",
    tags: ["React", "Vite", "Ant Design", "JavaScript", "Tailwind", "Redux Toolkit ", "Chart.js"],
    imageUrl: P2,
    demoLink: "https://cryptomeria.netlify.app/",
    gitHubRepo: "https://github.com/MuhammedAdel6041/Cryptomeria"
  },
  {
    title: "Dashboard",
    description:
      " Built a Responsive Admin-Dashboard with Visualization, real-time data fetching adn Implement Form Validation, State Management, and Seamless Navigation.",
    tags: ["React", "Vite", "Ant Design", "JavaScript", "Tailwind", "Redux Toolkit ", "Axios"],
    imageUrl: P3,
    demoLink: "https://deal-hunt.netlify.app/signup",
    gitHubRepo: "https://github.com/MuhammedAdel6041/Dashborad"
  },
] as const;
export const skillsData = [

  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Vite",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Redux Toolkit",

  // 🎨 UI/UX Design
  "Figma",
  "Ant Design",
  "SASS",
  "Styled Components",
  "Responsive Design",


  "Lazy Loading",
  "Webpack",
  "SEO Optimization",


  "Git",
  "GitHub",
  "Version Control",
  "NPM",
  "VS Code",
  "Code Splitting",


  "Node.js",
  "Express.js",
  "REST APIs",
  "API Integration",
  "Backend Development",
] as const;
export const experiencesData = [
  {
    title: "Front-End Developer Intern",
    location: "The American | Giza, Egypt",
    description:
      "Built responsive UI components for a tourism web platform and collaborated on optimizing performance and navigation. Gained experience with teamwork and real-world project delivery.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2025 – Jun 2025",
  },
  {
    title: "Bachelor’s Degree in Computer Science",
    location: "Helwan University | Cairo, Egypt",
    description:
      "Graduated with a Bachelor’s in Information Systems. Built a strong foundation in programming, web technologies, and database systems.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2025",
  },
  {
    title: "Front-End Developer (Freelance)",
    location: "Remote | Giza, Egypt",
    description:
      "Delivered modern and fully responsive web apps such as an E-Commerce platform and a Crypto dashboard using React, Next.js, Tailwind CSS, and Ant Design. Focused on UI performance, SEO, and scalability.",
    icon: React.createElement(FaReact),
    date: "2024 – Present",
  },
  {
    title: "Front-End Development Bootcamp",
    location: "Route Academy, Cairo",
    description:
      "Completed a 4-month intensive program focused on building modern web applications using React.js, Next.js, and Tailwind CSS. Developed multiple projects applying clean code and best UI practices.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2023 – Oct 2023",
  },
] as const;

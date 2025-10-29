import React from "react";

import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaRegHandPeace, FaHandshake, FaRegCopyright } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import P1 from "../public/images/P1.png";
import P2 from "../public/images/P2.png";
import P3 from "../public/images/P3.png";

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
    demoLink:"https://ecommerce-swap.netlify.app/",
    gitHubRepo:"https://github.com/MuhammedAdel6041/E-commerce_Swap"
  },
  {
    title: "Cryptocurrency",
    description:
      "Built a Responsive Cryptocurrency Website to display Real-Time Market data , Coins  and  Integrated Dynamic Charts for Data Visualization and Enhanced Interactivity with Animation.",
    tags: ["React", "Vite", "Ant Design", "JavaScript", "Tailwind", "Redux Toolkit ", "Chart.js"],
    imageUrl: P2,
     demoLink:"https://cryptomeria.netlify.app/",
    gitHubRepo:"https://github.com/MuhammedAdel6041/Cryptomeria"
  },
  {
    title: "Dashboard",
    description:
      " Built a Responsive Admin-Dashboard with Visualization, real-time data fetching adn Implement Form Validation, State Management, and Seamless Navigation.",
    tags: ["React", "Vite", "Ant Design", "JavaScript", "Tailwind", "Redux Toolkit ", "Axios"],
    imageUrl: P3,
     demoLink:"https://deal-hunt.netlify.app/signup",
    gitHubRepo:"https://github.com/MuhammedAdel6041/Dashborad"
  },
] as const;

// export const skillsData = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Node.js",
//   "Git",
//   "Tailwind",
//   "Prisma",
//   "MongoDB",
//   "Redux",
//   "GraphQL",
//   "Apollo",
//   "Express",
//   "PostgreSQL",
//   "Python",
//   "Django",
//   "Framer Motion",
// ] as const;


// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

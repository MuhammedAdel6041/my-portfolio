import React from "react";

import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaRegHandPeace, FaHandshake, FaRegCopyright } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

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
]as const;
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

// export const projectsData = [
//   {
//     title: "CorpComment",
//     description:
//       "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
//     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//     imageUrl: corpcommentImg,
//   },
//   {
//     title: "rmtDev",
//     description:
//       "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//     imageUrl: rmtdevImg,
//   },
//   {
//     title: "Word Analytics",
//     description:
//       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//     imageUrl: wordanalyticsImg,
//   },
// ] as const;

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
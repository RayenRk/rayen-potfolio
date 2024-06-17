import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import kanbanboardImg from "@/public/kanbanboard.png";
import rigmaImg from "@/public/rigma.png";
import rbnbImg from "@/public/rbnb.png";
import chatupImg from "@/public/chatup.png";

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
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Rbnb",
    description:
    "This full-stack Airbnb clone delivers a scalable, secure, and seamless web experience. Users can easily search and book tenants.",
    tags: ["Angular 17", "TypeScript", "Spring Boot", "PostgreSQL", "Docker", "Auth0", "PrimeNG"],
    imageUrl: rbnbImg,
    link:"https://github.com/RayenRk/airbnb-clone",
  },
  {
    title: "Rigma",
    description:
      "Rigma is a collaborative design tool. It enables real-time teamwork with live cursors, shapes, and text.",
    tags: ["Next.js", "TypeScript", "React", "Liveblocks", "Fabric.js", "Tailwind CSS", "Vercel"],
    imageUrl: rigmaImg,
    link:"https://rigma-tau.vercel.app/",
  },

  {
    title: "Kanban",
    description:
      "The Kanban Board App organizes tasks visually, following the Kanban methodology. Ideal for personal projects or team collaboration.",
    tags: ["Angular 17", "TypeScript", "Node.js", "Express", "MongoDB", "Mongoose", "Tailwind CSS"],
    imageUrl: kanbanboardImg,
    link:"https://github.com/RayenRk/kanban-project",
  },

  {
    title: "Chatup",
    description:
      "Chatup is a real-time chat application that allows users to create chat rooms for group or 1-on-1 conversations.",
    tags: ["Next.js", "TypeScript","Tailwind CSS", "Convex", "Clerk", "ShadCN"],
    imageUrl: chatupImg,
    link:"https://chatup-eosin.vercel.app/",
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "PHP",
  "C#",
  "Python",
  "Symfony",
  ".NET",
  "Angular",
  "Spring Boot",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Express",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Azure",
  "Linux",
  "UX/UI",
  "Figma"

] as const;

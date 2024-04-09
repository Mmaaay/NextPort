import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import asl from "@//assets/Capture.png";
import Hotel from "@//assets/Capture2.png";


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

export const experiencesData = [
  {
    title: "Majored in Data Science",
    location: "Alexandia , EG",
    description:
      "Switched majors to Data Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "ML & DL",
    location: "Alexandia , EG",
    description:
      "Developed couple of DL model of Computer Vision such as ASL detector, Fake Logo Detection",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Alexandia , EG",
    description:
      "Started full stack development using MERN And Next.js Developing this portofolio and also a Booking.com Clone",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Full Hotel Booking Website",
    description:
      "Developed a full stack booking site for a client. It has features like authentication, booking, payments. I used React, Redux, Node.js, Express, MongoDB, Tailwind and Stripe.",
    tags: ["React", "Redux Query", "MongoDB", "Tailwind", "Stripe"],
    imageUrl: Hotel,
  },
  {
    title: "ASL Computer Vision",
    description:
      "Developed a computer vision model to recognize American Sign Language. I used Python, TensorFlow, YOLO.",
    tags: ["Python", "Machine Learning", "Deep Learning", "Computer Vision"],
    imageUrl: asl,
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
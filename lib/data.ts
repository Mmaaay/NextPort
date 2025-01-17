import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import asl from "../public/assets/Capture.jpg";
import Hotel from "../public/assets/Capture2.png";
import main from "../public/assets/main.jpg";
import rooms from "../public/assets/room.jpg";

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
    description: "Switched majors to Data Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "ML & DL",
    location: "Alexandia , EG",
    description:
      "Using advanced Deep learning algortihms to develope a ASL detection model through camera.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "MERN Full Stack Developer",
    location: "Alexandia , EG",
    description:
      "Using MERN stack developed a full stack hotel booking website.",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  {
    title: "NextJs Developer",
    location: "Alexandia , EG",
    description:
      "Using NextJs developed a fully functioning RTC app, a Reddit clone.",
    icon: React.createElement(FaReact),
    date: "2022 - 2024",
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
  },
  {
    title: "Reddit Clone",
    description:
      "Using NextJs, developed a fully functioning Reddit clone with features like authentication, posting, commenting, upvoting, downvoting.",
    tags: ["NextJs", "React", "TypeScript"],
    imageUrl: main,
  },
  {
    title: "Discord Clone",
    description:
      "Using NextJs, developed a fully functioning Discord clone with features like authentication, channels, voice chat, video chat.",
    tags: ["NextJs", "React", "TypeScript", "SocketIo"],
    imageUrl: rooms,
  },
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

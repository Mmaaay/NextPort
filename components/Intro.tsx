"use client";
import { useActiveSectionContext } from "@/Context/activeSectionContext";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.75);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/assets/file2.jpg"
              alt="Mazen"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl hover:scale-[2.5] transition duration-500 cursor-pointer hover:z-[999] hover:relative"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              duration: 0.7,
              damping: 20,
              delay: 0.1,
            }}
            className="absolute text-4xl bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          duration: 0.6,
          delay: 0.3,
        }}
        className="mb-8 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-xl"
      >
        Hello! I'm <span className="font-bold">Mazen</span>, a passionate Full
        Stack Developer and AI enthusiast. 🚀 With expertise in React, Next.js,
        TypeScript, Tailwind, Prisma, and MongoDB, I bring innovative solutions
        to life. Let's create something extraordinary together!
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 0.3, delay: 0.5 }}
      >
        <Link
          href="#contact"
          className="group flex bg-gray-900 text-white px-7 py-3 items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me Here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="assets/Mazen's CV.pdf"
          download
          className="group flex border border-black/10 bg-white text-black px-7 py-3 items-center gap-2 rounded-full cursor-pointer outline-none hover:text-gray-950  hover:scale-[1.15]  active:scale-105 transition dark:bg-white/10 dark:text-white"
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
<div className="flex flex-row gap-4">
          <a
            rel="noopener"
            title="Linkedin"
            href="https://www.linkedin.com/in/mazen-mohammedaay/"
            target="_blank"
            className="group flex bg-white border border-black/10 text-gray-700 p-4 items-center gap-2 rounded-full cursor-pointer outline-none hover:text-gray-950 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition  dark:text-white/60 dark:bg-white/10"
          >
            <BsLinkedin />
          </a>
          <a
            rel="noopener"
            title="Github"
            href="https://github.com/Mmaaay"
            target="_blank"
            className="group flex bg-white border border-black/10 text-gray-700 p-4 items-center gap-2 text-[1.35rem] rounded-full cursor-pointer outline-none hover:text-gray-950 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition dark:text-white/60 dark:bg-white/10 "
          >
            <FaGithubSquare />
          </a>
</div>
      </motion.div>
    </section>
  );
}

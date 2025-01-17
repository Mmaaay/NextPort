"use client";
import { useActiveSectionContext } from "@/Context/activeSectionContext";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.75);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      className="scroll-mt-[100rem] mb-28 sm:mb-0 max-w-[50rem] text-center"
      id="home"
      ref={ref}
    >
      <div className="flex justify-center items-center">
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
              className="hover:relative hover:z-[999] border-[0.35rem] border-white shadow-xl rounded-full w-24 h-24 transition duration-500 cursor-pointer hover:scale-[2] object-cover"
              onClick={() => setIsExpanded(!isExpanded)}
            />
          </motion.div>
          {!isExpanded && (
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
              className="right-0 bottom-0 absolute text-4xl"
            >
              👋
            </motion.span>
          )}
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
        className="mt-4 mb-8 px-4 font-medium text-lg sm:text-xl !leading-[1.5]"
      >
        Hello! I'm <span className="font-bold">Mazen</span>, a passionate Full
        Stack Developer and AI enthusiast. 🚀 With expertise in React, Next.js,
        TypeScript, Tailwind, Prisma, and MongoDB, I bring innovative solutions
        to life. Let's create something extraordinary together!
      </motion.h1>

      <motion.div
        className="flex sm:flex-row flex-col justify-center items-center gap-3 px-4 font-medium text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 0.3, delay: 0.5 }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 bg-gray-900 hover:bg-gray-950 px-7 py-3 rounded-full text-white transition hover:scale-110 focus:scale-110 active:scale-105 group outline-none"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me Here
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>
        <a
          href="assets/Mazen's CV.pdf"
          download
          className="flex items-center gap-2 bg-white dark:bg-white/10 px-7 py-3 border border-black/10 rounded-full text-black hover:text-gray-950 dark:text-white transition cursor-pointer group hover:scale-[1.15] active:scale-105 outline-none"
        >
          Download CV
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>
        <div className="flex flex-row gap-4">
          <a
            rel="noopener"
            title="Linkedin"
            href="https://www.linkedin.com/in/mazen-mohammedaay/"
            target="_blank"
            className="flex items-center gap-2 bg-white dark:bg-white/10 p-4 border border-black/10 rounded-full text-gray-700 hover:text-gray-950 dark:text-white/60 transition cursor-pointer hover:scale-[1.15] focus:scale-[1.15] active:scale-105 group outline-none"
          >
            <BsLinkedin />
          </a>
          <a
            rel="noopener"
            title="Github"
            href="https://github.com/Mmaaay"
            target="_blank"
            className="flex items-center gap-2 bg-white dark:bg-white/10 p-4 border border-black/10 rounded-full text-[1.35rem] text-gray-700 hover:text-gray-950 dark:text-white/60 transition cursor-pointer focus:scale-[1.15] group hover:scale-[1.15] active:scale-105 outline-none"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

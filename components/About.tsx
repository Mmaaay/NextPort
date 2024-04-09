"use client";
import React, { useEffect } from "react";
import { SectionHeading } from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> About Me </SectionHeading>
      <p className="mb-3">
        Experienced professional specializing in{" "}
        <span className="font-medium">AI</span> and{" "}
        <span className="font-medium">Full Stack Development</span>. I've
        seamlessly integrated AI into robust full stack applications, using
        technologies like{" "}
        <span className="font-medium">
          Python, TensorFlow, React, Node.js, and MongoDB
        </span>
        . Actively seeking opportunities to apply my expertise in cutting-edge
        projects.
      </p>
      <p>
        <span className="italic">Beyond coding</span>, I find joy in books,
        gaming, and meaningful social interactions. A perpetual learner, I'm
        driven to expand my knowledge in technology, diverse subjects, and
        engaging conversations.
      </p>
    </motion.section>
  );
}

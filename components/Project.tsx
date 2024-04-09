"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
type ProjectProps = (typeof projectsData)[number];

export const Project = ({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1 ]);

  return (
<motion.div
  ref={ref}
  style={{ scale: scaleProgress, opacity: opacityProgress }}
  className="group mb-3 sm:mb-8 last:mb-0"
>
  <section className="rounded-lg bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[25`rem] group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20  hover:bg-gray-200 dark:text-white transition">
    <div className="pt-4 pb-7 px-5 sm:pl-8 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[20rem]">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
      <div className="mt-4 flex flex-wrap gap-1 sm:mt-auto">
        {tags.map((tag, index) => (
          <span
            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full mb-2 inline-block dark:text-white/70"
            key={index}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    <Image
      src={imageUrl}
      alt={title}
      quality={95}
      className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                group-even:-right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-odd:group-hover:scale-[1.04] transition
                group-even:scale-x-[-1] group-even:group-hover:translate-x-3 group-even:group-hover:-translate-y-3 group-even:group-hover:rotate-2 "
    />
  </section>
</motion.div>


  );
};

"use client";

import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/Context/activeSectionContext";
import { BsArrowDown } from "react-icons/bs";

type navbar = "open" | "close";

export default function Header() {
  const [menu, setmenu] = useState<navbar | null>("open");

  function toggleMenu() {
    setmenu(menu === "open" ? "close" : "open");
  }

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  function handleOnClick(link: {
    name: (typeof links)[number]["name"];
    hash: string;
  }): React.MouseEventHandler<HTMLAnchorElement> | undefined {
    return () => {
      setActiveSection(link.name);
      setTimeOfLastClick(Date.now());
    };
  }

  return (
    <>
      <div className=" flex flex-row justify-center">
        <AnimatePresence>
          {menu === "open" && (
            <header className="z-[500] relative">
              <motion.div
                key="menu"
                className="fixed top-0 left-1/2   h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.5rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                exit={{ y: -100 }}
              ></motion.div>

              <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                  {links.map((link) => (
                    <motion.li
                      key={link.hash}
                      className="h-3/4 flex items-center justify-center relative"
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -100 }}
                    >
                      <Link
                        href={link.hash}
                        onClick={handleOnClick(link)}
                        className={clsx(
                          "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition  dark:text-gray-500 dark:hover:text-gray-300",
                          activeSection === link.name
                            ? "text-gray-950 dark:text-gray-300 dark:font-bold"
                            : "text-gray-500"
                        )}
                      >
                        {link.name}
                        {link.name === activeSection && (
                          <motion.span
                            layoutId="activeSection"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                            className="bg-gray-200  rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                          ></motion.span>
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </header>
          )}
        </AnimatePresence>
      </div>
      <motion.button
        initial={{ y: -100, opacity: 0 }}
        animate={
          menu === "open"
            ? { y: 0, opacity: 1 }
            : menu === "close"
            ? { y: 0, opacity: 1 }
            : { y: 0, opacity: 1 }
        }
        className={clsx(
          {
            "flex justify-center fixed left-0 right-0 top-[4.8rem] z-50 dark:text-black":
              menu === "open",
          },
          {
            "flex justify-center fixed left-0 right-0 top-0 z-50 dark:text-black":
              menu === "close",
          }
        )}
        onClick={toggleMenu}
      >
        <BsArrowDown />
      </motion.button>
    </>
  );
}

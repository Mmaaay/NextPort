"use client";

import React from "react";
import { SectionHeading } from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import {  sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);


  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center "
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="undeline" href="mailto:mazenyousef.my@gmail.com">
          mazenyousef.my@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData: FormData)  => {
          const {data , error } = await sendEmail(formData);
          if(error){
            toast.error(error)
            return
          }
          toast.success("Email sent successfully")
        }}
      >
        <input
          name="sender"
          type="email"
          placeholder="Your Email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all "
          required
          maxLength={500}
        ></input>
        <textarea
          name="message"
          title="Message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all"
          placeholder="Your Message"
          required
          maxLength={1000}
        />
      <SubmitBtn/>
      </form>
    </motion.section>
  );
}

"use server";
import { Resend } from "resend";
import React from "react";
import contactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const sender = formData.get("sender")?.toString() || "";
  const message = formData.get("message")?.toString() || "";

  try {
    resend.emails.send({
      from: "Contact From <onboarding@resend.dev>",
      to: "202103102@pua.edu.eg",
      subject: "New Contact Form Submission",
      react: React.createElement(contactFormEmail, {
        message: message,
        sender: sender,
      }),
    });
    return { data: "Email sent successfully" };
  } catch (error) {
    return { error: "Failed to send email" };
  }
};

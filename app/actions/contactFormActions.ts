"use server";

import prisma from "@/lib/db";
import { z } from "zod";
import { contactFormSchema } from "@/lib/utils";

export async function contactFormSubmission(
  data: z.infer<typeof contactFormSchema>
) {
  try {
    const validateData = contactFormSchema.parse(data);

    const newContactForm = await prisma.contactForm.create({
      data: validateData,
    });

    return {
      success: true,
      message: "Form submitted successfully",
      data: newContactForm,
    };
  } catch (error) {
    console.error("Error submitting contact form", error);
    return {
      success: false,
      message: "Failed to submit form",
    };
  }
}

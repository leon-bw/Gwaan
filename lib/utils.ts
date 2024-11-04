import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const contactFormSchema = z.object({
  name: z.string(),
  subject: z.string().min(5, {
    message: "Subject must contain at least 5 character(s)",
  }),
  email: z.string().email(),
  message: z.string().max(2000),
});
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required").max(70),
  email: z.string().email(),
  reason: z.string().min(1, "Please select a reason"),
  message: z.string().min(10, "Message is required").max(3000),
});

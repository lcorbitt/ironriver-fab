import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Enter a valid email."),
  phone: z
    .string()
    .trim()
    .max(40)
    .optional()
    .transform((v) => (v === "" ? undefined : v)),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a bit more (at least 20 characters).")
    .max(8000),
  /** Honeypot — must stay empty */
  companyWebsite: z.string().optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

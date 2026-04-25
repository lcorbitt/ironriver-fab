import { z } from "zod";

/** Payload accepted by POST /api/contact (honeypot stripped client-side). */
export const contactApiSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email(),
  phone: z
    .string()
    .trim()
    .max(40)
    .optional()
    .transform((v) => (v === "" ? undefined : v)),
  message: z.string().trim().min(20).max(8000),
});

export type ContactApiPayload = z.infer<typeof contactApiSchema>;

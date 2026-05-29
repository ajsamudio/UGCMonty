import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  property: z.string().min(2, "Please enter your property or company"),
  dates: z.string().optional(),
  message: z.string().min(10, "Please tell me a little more (10+ characters)"),
  // Honeypot — must stay empty. Bots tend to fill every field.
  company_website: z.string().max(0).optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

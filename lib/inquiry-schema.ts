import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  property: z.string().min(2, "Please enter your brand or company"),
  dates: z.string().optional(),
  message: z.string().min(10, "Please tell me a little more (10+ characters)"),
  // Honeypot — bots tend to fill every field. Deliberately unvalidated so a
  // filled value reaches the API route, which then fakes success silently;
  // rejecting it here would 422 and name the trap field in the error body.
  company_website: z.string().optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

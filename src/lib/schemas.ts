import { z } from "zod";

export const contactFormSchema = z.object({
  // Step 1
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  // Step 2
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  referralSource: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  // Honeypot
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const bookingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  package: z.string(),
  travelDate: z.string().min(1, "Please select a preferred date"),
  travelers: z.coerce.number().min(1).max(100),
  requirements: z.string().optional(),
  referralSource: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;

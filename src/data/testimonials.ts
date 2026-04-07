export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
  videoUrl?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  // Populate with real testimonials
];

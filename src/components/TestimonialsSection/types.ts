export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  /** Role, project type, or location line under the name */
  detail: string;
  /** 1–5 inclusive; drives star row for quick scan */
  rating: number;
}

export interface TestimonialsSectionProps {
  className?: string;
}

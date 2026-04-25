"use client";

import { useMemo } from "react";
import { TESTIMONIALS } from "../constants";

export interface UseTestimonialsSectionResult {
  items: typeof TESTIMONIALS;
}

export const useTestimonialsSection = (): UseTestimonialsSectionResult =>
  useMemo(() => ({ items: TESTIMONIALS }), []);

import type { ReactNode } from "react";

/** `fade-up` uses translateY (avoid under transformed ancestors that scale). */
export type RevealVariant = "fade-up" | "fade";

export interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
}

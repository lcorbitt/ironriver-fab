"use client";

import { cn } from "@/lib/cn";
import { useReveal } from "./hooks/useReveal";
import type { RevealProps } from "./types";
import {
  revealHiddenClasses,
  revealTransitionClasses,
  revealVisibleClasses,
} from "./utils";

export const Reveal = ({ children, className }: RevealProps) => {
  const { isVisible } = useReveal();

  return (
    <div
      className={cn(
        revealTransitionClasses,
        isVisible ? revealVisibleClasses : revealHiddenClasses,
        className,
      )}
    >
      {children}
    </div>
  );
};

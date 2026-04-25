"use client";

import { cn } from "@/lib/cn";
import { useReveal } from "./hooks/useReveal";
import type { RevealProps } from "./types";
import {
  revealFadeHiddenClasses,
  revealFadeTransitionClasses,
  revealFadeVisibleClasses,
  revealHiddenClasses,
  revealTransitionClasses,
  revealVisibleClasses,
} from "./utils";

export const Reveal = ({
  children,
  className,
  variant = "fade-up",
}: RevealProps) => {
  const { ref, isVisible } = useReveal();

  const isFadeOnly = variant === "fade";

  return (
    <div
      ref={ref}
      className={cn(
        isFadeOnly ? revealFadeTransitionClasses : revealTransitionClasses,
        isVisible
          ? isFadeOnly
            ? revealFadeVisibleClasses
            : revealVisibleClasses
          : isFadeOnly
            ? revealFadeHiddenClasses
            : revealHiddenClasses,
        className,
      )}
    >
      {children}
    </div>
  );
};

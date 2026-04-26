"use client";

import { useEffect, useRef, useState } from "react";
import { computeParallaxTranslateY } from "../utils";

const PARALLAX_MAX_TRANSLATE_PX = 48;

export interface UseWhyChooseUsSectionResult {
  parallaxContainerRef: React.RefObject<HTMLDivElement | null>;
  parallaxTranslateY: number;
}

export const useWhyChooseUsSection = (): UseWhyChooseUsSectionResult => {
  const parallaxContainerRef = useRef<HTMLDivElement | null>(null);
  const [parallaxTranslateY, setParallaxTranslateY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;
    if (prefersReducedMotion) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const el = parallaxContainerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 0;
      const next = computeParallaxTranslateY(rect, viewportHeight, {
        maxTranslatePx: PARALLAX_MAX_TRANSLATE_PX,
      });
      setParallaxTranslateY(next);
    };

    const onScrollOrResize = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return { parallaxContainerRef, parallaxTranslateY };
};


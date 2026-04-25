"use client";

import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";
import { REVEAL_INTERSECTION_THRESHOLD } from "../constants";

export interface UseRevealResult {
  ref: RefObject<HTMLDivElement | null>;
  isVisible: boolean;
}

const buildThresholdList = (): number[] =>
  Array.from({ length: 21 }, (_, i) => i / 20);

export const useReveal = (): UseRevealResult => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio >= REVEAL_INTERSECTION_THRESHOLD
          ) {
            setIsVisible(true);
            observer.disconnect();
            return;
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: buildThresholdList(),
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

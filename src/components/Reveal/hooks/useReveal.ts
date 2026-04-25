"use client";

import { useEffect, useState } from "react";

export interface UseRevealResult {
  isVisible: boolean;
}

export const useReveal = (): UseRevealResult => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return { isVisible };
};

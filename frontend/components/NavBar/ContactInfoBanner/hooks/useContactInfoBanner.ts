"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { getContactBannerScrollThresholds } from "../utils";

export interface UseContactInfoBannerResult {
  isHidden: boolean;
}

export const useContactInfoBanner = (): UseContactInfoBannerResult => {
  const [isHidden, setIsHidden] = useState(false);
  const blockToggleUntil = useRef(0);

  useLayoutEffect(() => {
    const onScroll = () => {
      const now = performance.now();
      const y = window.scrollY;
      const t = getContactBannerScrollThresholds();

      setIsHidden((prev) => {
        if (y <= t.forceShowBelowPx) {
          blockToggleUntil.current = 0;
          return false;
        }

        let next = prev;
        if (y >= t.hideWhenScrollYGtePx) next = true;
        else if (y <= t.showWhenScrollYLtePx) next = false;
        else return prev;

        if (next === prev) return prev;

        const allowDespiteCooldown =
          next === false && y <= t.showWhenScrollYLtePx;
        if (now < blockToggleUntil.current && !allowDespiteCooldown)
          return prev;

        blockToggleUntil.current = now + t.toggleCooldownMs;
        return next;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { isHidden };
};

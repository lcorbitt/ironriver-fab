"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
  CONTACT_BANNER_FORCE_SHOW_BELOW_PX,
  CONTACT_BANNER_HIDE_WHEN_SCROLL_Y_GTE,
  CONTACT_BANNER_SHOW_WHEN_SCROLL_Y_LTE,
  CONTACT_BANNER_TOGGLE_COOLDOWN_MS,
} from "../constants";

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

      setIsHidden((prev) => {
        if (y <= CONTACT_BANNER_FORCE_SHOW_BELOW_PX) {
          blockToggleUntil.current = 0;
          return false;
        }

        let next = prev;
        if (y >= CONTACT_BANNER_HIDE_WHEN_SCROLL_Y_GTE) next = true;
        else if (y <= CONTACT_BANNER_SHOW_WHEN_SCROLL_Y_LTE) next = false;
        else return prev;

        if (next === prev) return prev;

        const allowDespiteCooldown =
          next === false && y <= CONTACT_BANNER_SHOW_WHEN_SCROLL_Y_LTE;
        if (now < blockToggleUntil.current && !allowDespiteCooldown)
          return prev;

        blockToggleUntil.current = now + CONTACT_BANNER_TOGGLE_COOLDOWN_MS;
        return next;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { isHidden };
};

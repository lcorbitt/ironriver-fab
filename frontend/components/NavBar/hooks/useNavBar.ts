"use client";

import type { RefObject } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { MOBILE_NAV_MENU_ID, NAV_ITEMS } from "../constants";
import { isActivePath } from "../utils";

export interface UseNavBarResult {
  pathname: string;
  navItems: typeof NAV_ITEMS;
  isActive: (href: string) => boolean;
  mobileMenuContainerRef: RefObject<HTMLDivElement | null>;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  mobileNavMenuId: typeof MOBILE_NAV_MENU_ID;
}

export const useNavBar = (): UseNavBarResult => {
  const pathname = usePathname() || "/";
  const mobileMenuContainerRef = useRef<HTMLDivElement | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((open) => !open);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    const onPointerDown = (e: PointerEvent) => {
      const root = mobileMenuContainerRef.current;
      if (root && !root.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, [isMobileMenuOpen]);

  return {
    pathname,
    navItems: NAV_ITEMS,
    isActive: (href: string) => {
      const item = NAV_ITEMS.find((n) => n.href === href);
      if (!item) return false;
      return isActivePath(pathname, item);
    },
    mobileMenuContainerRef,
    isMobileMenuOpen,
    toggleMobileMenu,
    mobileNavMenuId: MOBILE_NAV_MENU_ID,
  };
};

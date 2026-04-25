"use client";

import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "../constants";
import { isActivePath } from "../utils";

export interface UseSiteHeaderResult {
  pathname: string;
  navItems: typeof NAV_ITEMS;
  isActive: (href: string) => boolean;
}

export const useSiteHeader = (): UseSiteHeaderResult => {
  const pathname = usePathname() || "/";

  return {
    pathname,
    navItems: NAV_ITEMS,
    isActive: (href: string) => {
      const item = NAV_ITEMS.find((n) => n.href === href);
      if (!item) return false;
      return isActivePath(pathname, item);
    },
  };
};

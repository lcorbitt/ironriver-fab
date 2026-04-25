import type { NavItem } from "./types";

/** `aria-controls` target for the mobile menu toggle */
export const MOBILE_NAV_MENU_ID = "mobile-primary-nav";

export const NAV_ITEMS: readonly NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

import type { FooterLink } from "./types";

/** Credit link; change if your live URL differs. */
export const BITWERKS_SITE_URL = "https://bitwerks.dev";

export const FOOTER_MENU_LINKS: readonly FooterLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_QUICK_LINKS: readonly FooterLink[] = [
  { href: "/services/mobile-welding", label: "Mobile Welding" },
  { href: "/services/custom-fabrication", label: "Custom Fabrication" },
  { href: "/services/welding-repairs", label: "Welding Repairs" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

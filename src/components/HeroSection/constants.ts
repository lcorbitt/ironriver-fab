import { siteConfig } from "@/lib/site";
import type { HeroCta } from "./types";

export const HERO_KICKER = "Northern Colorado & Surrounding Areas";

export const HERO_HEADLINE = "Expert Welding Services";

export const HERO_SUBHEAD =
  "Our team of experienced welders provides both on-site and in-shop fabrication, repair, and installation services for residential and commercial clients. Contact us today for a free quote!";

export const HERO_CTAS: readonly HeroCta[] = [
  { href: "/contact", label: "Request a quote", variant: "primary" },
  {
    href: `tel:${siteConfig.phoneE164}`,
    label: "Call the shop",
    variant: "secondary",
  },
];

/** Hero photo — swap for an owned asset in `public/` when ready. */
export const HERO_IMAGE_SRC = "/ir-hero.jpg";

export const HERO_IMAGE_ALT =
  "Mobile welding truck and welding equipment";

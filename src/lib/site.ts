export interface BusinessHoursRow {
  dayLabel: string;
  hoursLabel: string;
}

/** Optional URLs for the header utility bar; omit a key to hide that icon. */
export interface SiteSocialLinks {
  instagram?: string;
  facebook?: string;
  yelp?: string;
}

export interface SiteConfig {
  businessName: string;
  legalName: string;
  tagline: string;
  description: string;
  primaryCity: string;
  primaryState: string;
  secondaryRegion: string;
  /** Single line for the top contact bar (street, suite, city, etc.). */
  contactAddressLine: string;
  socialLinks: SiteSocialLinks;
  phoneDisplay: string;
  phoneE164: string;
  email: string;
  locale: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

/** Display strings for footer and contact; keep in sync with JSON-LD where applicable. */
export const businessHours: readonly BusinessHoursRow[] = [
  { dayLabel: "Mon", hoursLabel: "08:00 am – 05:00 pm" },
  { dayLabel: "Tue", hoursLabel: "08:00 am – 05:00 pm" },
  { dayLabel: "Wed", hoursLabel: "08:00 am – 05:00 pm" },
  { dayLabel: "Thu", hoursLabel: "08:00 am – 05:00 pm" },
  { dayLabel: "Fri", hoursLabel: "08:00 am – 05:00 pm" },
  { dayLabel: "Sat", hoursLabel: "By Appointment" },
  { dayLabel: "Sun", hoursLabel: "Closed" },
];

export const siteConfig: SiteConfig = {
  businessName: "IronRiver Fabrication",
  legalName: "IronRiver Fabrication",
  tagline: "Precision metal fabrication for Northern Colorado.",
  description:
    "IronRiver Fabrication delivers custom metal fabrication, welding, and structural steel work for Berthoud, Colorado and the broader Northern Colorado region. Request a quote for industrial-quality craftsmanship.",
  primaryCity: "Berthoud",
  primaryState: "CO",
  secondaryRegion: "Northern Colorado",
  contactAddressLine: "Northern Colorado, USA",
  socialLinks: {
    instagram: undefined,
    facebook: undefined,
    yelp: undefined,
  },
  phoneDisplay: "(303) 775-3028",
  phoneE164: "+13037753028",
  email: "reece@ironriverfabrication.com",
  locale: "en_US",
  coordinates: {
    latitude: 40.3083,
    longitude: -105.075,
  },
};

export const getSiteUrl = (): string => {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  return "http://localhost:3000";
};

export const absoluteUrl = (path: string): string => {
  const base = getSiteUrl();
  if (path.startsWith("/")) return `${base}${path}`;
  return `${base}/${path}`;
};

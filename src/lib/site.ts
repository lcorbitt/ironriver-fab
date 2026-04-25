export interface SiteConfig {
  businessName: string;
  legalName: string;
  tagline: string;
  description: string;
  primaryCity: string;
  primaryState: string;
  secondaryRegion: string;
  phoneDisplay: string;
  phoneE164: string;
  email: string;
  locale: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export const siteConfig: SiteConfig = {
  businessName: "IronRiver Fabrication",
  legalName: "IronRiver Fabrication",
  tagline: "Precision metal fabrication for Northern Colorado.",
  description:
    "IronRiver Fabrication delivers custom metal fabrication, welding, and structural steel work for Berthoud, Colorado and the broader Northern Colorado region. Request a quote for industrial-quality craftsmanship.",
  primaryCity: "Berthoud",
  primaryState: "CO",
  secondaryRegion: "Northern Colorado",
  phoneDisplay: "(970) 555-0142",
  phoneE164: "+19705550142",
  email: "hello@ironriverfab.com",
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

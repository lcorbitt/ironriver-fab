import { absoluteUrl, siteConfig } from "@/lib/site";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": absoluteUrl("/#business"),
  name: siteConfig.businessName,
  description: siteConfig.description,
  url: absoluteUrl("/"),
  telephone: siteConfig.phoneE164,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.primaryCity,
    addressRegion: siteConfig.primaryState,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.coordinates.latitude,
    longitude: siteConfig.coordinates.longitude,
  },
  areaServed: [
    {
      "@type": "City",
      name: siteConfig.primaryCity,
      containedInPlace: {
        "@type": "State",
        name: "Colorado",
      },
    },
    {
      "@type": "AdministrativeArea",
      name: siteConfig.secondaryRegion,
    },
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "17:00",
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": absoluteUrl("/#services"),
  name: "Custom metal fabrication",
  provider: { "@id": absoluteUrl("/#business") },
  serviceType: [
    "Metal fabrication",
    "Structural steel fabrication",
    "Welding services",
  ],
  areaServed: siteConfig.secondaryRegion,
  description:
    "Custom metal fabrication, structural steel, and welding for commercial and industrial projects in Berthoud and Northern Colorado.",
};

export const StructuredData = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessJsonLd),
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(servicesJsonLd),
      }}
    />
  </>
);

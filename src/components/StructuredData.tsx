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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
  ],
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": absoluteUrl("/#services"),
  name: "Expert Welding Services in Northern Colorado & Surrounding Areas",
  provider: { "@id": absoluteUrl("/#business") },
  serviceType: [
    "Mobile Welding",
    "Custom Fabrication",
    "Welding Repairs",
  ],
  areaServed: siteConfig.secondaryRegion,
  description:
    "Expert Welding Services in Northern Colorado & Surrounding Areas.",
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

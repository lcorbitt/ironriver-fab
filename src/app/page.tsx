import type { Metadata } from "next";
import { CtaStrip } from "@/components/CtaStrip";
import { GalleryPreview } from "@/components/GalleryPreview";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustSignals } from "@/components/TrustSignals";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | Expert welding services in Northern Colorado & Surrounding Areas`,
  description: siteConfig.description,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    url: absoluteUrl("/"),
    title: `${siteConfig.businessName} | Expert welding services in Northern Colorado & Surrounding Areas`,
    description: siteConfig.description,
  },
  twitter: {
    title: `${siteConfig.businessName} | Expert welding services in Northern Colorado & Surrounding Areas`,
    description: siteConfig.description,
  },
};

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <TrustSignals />
      <ServicesSection />
      <GalleryPreview />
      <CtaStrip />
    </main>
  );
}

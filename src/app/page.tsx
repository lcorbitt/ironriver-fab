import type { Metadata } from "next";
import { CtaStrip } from "@/components/CtaStrip";
import { GalleryPreview } from "@/components/GalleryPreview";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustSignals } from "@/components/TrustSignals";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Metal fabrication Berthoud & Northern Colorado",
  description: siteConfig.description,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    url: absoluteUrl("/"),
    title: `${siteConfig.businessName} | Metal fabrication Berthoud CO`,
    description: siteConfig.description,
  },
  twitter: {
    title: `${siteConfig.businessName} | Metal fabrication Berthoud CO`,
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

import type { Metadata } from "next";
import { CtaStrip } from "@/components/CtaStrip";
import { GalleryPreview } from "@/components/GalleryPreview";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TrustSignals } from "@/components/TrustSignals";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | Expert Welding Services in Northern Colorado & Surrounding Areas`,
  description: siteConfig.description,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    url: absoluteUrl("/"),
    title: `${siteConfig.businessName} | Expert Welding Services in Northern Colorado & Surrounding Areas`,
    description: siteConfig.description,
  },
  twitter: {
    title: `${siteConfig.businessName} | Expert Welding Services in Northern Colorado & Surrounding Areas`,
    description: siteConfig.description,
  },
};

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <TrustSignals />
      <GalleryPreview />
      <ProcessSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaStrip />
    </main>
  );
}

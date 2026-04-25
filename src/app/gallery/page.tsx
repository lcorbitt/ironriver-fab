import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { GalleryMasonry } from "@/components/GalleryMasonry";
import { galleryItems } from "@/data/gallery";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fabrication gallery | Portfolio",
  description:
    "Premium metal fabrication portfolio from IronRiver Fabrication — structural steel, weldments, and custom metalwork across Berthoud and Northern Colorado.",
  alternates: { canonical: absoluteUrl("/gallery") },
  openGraph: {
    url: absoluteUrl("/gallery"),
    title: `Fabrication gallery | ${siteConfig.businessName}`,
    description:
      "Explore selected structural steel, welding, and custom fabrication projects.",
  },
  twitter: {
    title: `Fabrication gallery | ${siteConfig.businessName}`,
    description:
      "Explore selected structural steel, welding, and custom fabrication projects.",
  },
};

export default function GalleryPage() {
  return (
    <main
      id="main-content"
      className="border-b border-border bg-background py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl space-y-5">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
            Portfolio
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-5xl">
            Fabrication gallery
          </h1>
          <p className="text-base font-medium leading-relaxed text-muted">
            A curated look at weld quality, material handling, and finished
            assemblies from our shop serving{" "}
            <span className="font-semibold text-foreground">
              {siteConfig.primaryCity}, {siteConfig.primaryState}
            </span>{" "}
            and {siteConfig.secondaryRegion}. Tap any image to expand.
          </p>
        </Reveal>

        <div className="mt-14">
          <GalleryMasonry items={galleryItems} />
        </div>
      </div>
    </main>
  );
}

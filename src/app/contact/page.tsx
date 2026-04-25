import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & quote request",
  description: `Request a fabrication quote from ${siteConfig.businessName}. Serving ${siteConfig.primaryCity}, ${siteConfig.primaryState} and ${siteConfig.secondaryRegion}.`,
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    url: absoluteUrl("/contact"),
    title: `Contact | ${siteConfig.businessName}`,
    description: `Request a metal fabrication quote for projects in ${siteConfig.primaryCity} and Northern Colorado.`,
  },
  twitter: {
    title: `Contact | ${siteConfig.businessName}`,
    description: `Request a metal fabrication quote for projects in ${siteConfig.primaryCity} and Northern Colorado.`,
  },
};

export default function ContactPage() {
  return (
    <main
      id="main-content"
      className="border-b border-border bg-background py-16 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 max-w-2xl space-y-5">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
            Contact
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-5xl">
            Let&apos;s scope your next fabrication package
          </h1>
          <p className="text-sm font-medium leading-relaxed text-muted">
            Prefer the phone? Call{" "}
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className="color-fade font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-hover"
            >
              {siteConfig.phoneDisplay}
            </a>{" "}
            or return to the{" "}
            <Link
              href="/gallery"
              className="color-fade font-semibold text-foreground underline decoration-steel underline-offset-4 hover:text-accent"
            >
              project gallery
            </Link>
            .
          </p>
        </Reveal>
        <ContactForm />
      </div>
    </main>
  );
}

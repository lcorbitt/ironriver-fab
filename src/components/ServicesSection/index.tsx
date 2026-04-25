"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site";
import { CAPABILITIES_EYEBROW } from "./constants";
import { useServicesSection } from "./hooks/useServicesSection";

export const ServicesSection = () => {
  const { intro } = useServicesSection();

  return (
    <section
      className="relative border-b border-border bg-surface py-16 sm:py-20"
      aria-labelledby="services-heading"
    >
      <div
        className="hatch-diagonal pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl space-y-5">
          <h2
            id="services-heading"
            className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-accent"
          >
            {CAPABILITIES_EYEBROW}
          </h2>
          <p className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl">
            Metal fabrication in {siteConfig.primaryCity},{" "}
            {siteConfig.primaryState} — built for demanding sites.
          </p>
          <p className="text-base font-medium leading-relaxed text-foreground/78">
            {intro}
          </p>
          <p className="text-sm text-muted">
            Planning a build? Start with a{" "}
            <Link
              href="/contact"
              className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-300 ease-industrial hover:text-accent-hover"
            >
              detailed quote request
            </Link>{" "}
            or browse the{" "}
            <Link
              href="/gallery"
              className="font-semibold text-foreground underline decoration-steel underline-offset-4 transition-colors duration-300 ease-industrial hover:text-accent"
            >
              fabrication gallery
            </Link>{" "}
            for recent work.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

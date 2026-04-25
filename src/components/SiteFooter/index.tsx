"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { FOOTER_LINKS } from "./constants";
import { useSiteFooter } from "./hooks/useSiteFooter";

export const SiteFooter = () => {
  const { year } = useSiteFooter();

  return (
    <footer className="border-t-2 border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-4">
            <p className="font-display text-lg font-bold uppercase tracking-[0.2em] text-foreground">
              {siteConfig.businessName}
            </p>
            <p className="text-sm leading-relaxed text-muted">
              Custom metal fabrication and welding serving{" "}
              <Link
                href="/contact"
                className="font-semibold text-foreground underline decoration-accent/50 underline-offset-4 transition-colors duration-300 ease-industrial hover:text-accent"
              >
                {siteConfig.primaryCity}, {siteConfig.primaryState}
              </Link>{" "}
              and {siteConfig.secondaryRegion}. Built for contractors,
              builders, and industrial partners who need it done right the first
              time.
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-col gap-3 border-l-2 border-border pl-8 text-sm"
          >
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-xs font-semibold uppercase tracking-widest text-muted transition-colors duration-300 ease-industrial hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className="font-mono text-sm font-medium text-accent transition-colors duration-300 ease-industrial hover:text-accent-hover"
            >
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-muted transition-colors duration-300 ease-industrial hover:text-foreground"
            >
              {siteConfig.email}
            </a>
          </nav>
        </div>
        <p className="mt-14 border-t border-border pt-8 font-mono text-[11px] uppercase tracking-widest text-steel">
          © {year} {siteConfig.legalName}. Berthoud & Northern Colorado.
        </p>
      </div>
    </footer>
  );
};

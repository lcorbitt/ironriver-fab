"use client";

import { Fragment } from "react";
import Link from "next/link";
import { businessHours, siteConfig } from "@/lib/site";
import {
  BITWERKS_SITE_URL,
  FOOTER_MENU_LINKS,
  FOOTER_QUICK_LINKS,
} from "./constants";
import { useFooter } from "./hooks/useFooter";

export const Footer = () => {
  const { year } = useFooter();

  return (
    <footer className="border-t-2 border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-4">
            <p className="font-display text-lg font-bold uppercase tracking-[0.2em] text-foreground">
              {siteConfig.businessName}
            </p>
            <p className="text-sm leading-relaxed text-muted">
              IronRiver Fabrication has served Northern Colorado since 2019 with certified welding,
              precision fabrication, and industrial installations. Our experienced crew brings skill, safety,
              and service excellence to every project.
            </p>
            <div className="pt-2 space-y-2">
              <a
                href={`tel:${siteConfig.phoneE164}`}
                className="color-fade block text-sm font-medium text-white hover:text-accent w-max"
              >
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="color-fade block text-sm font-medium text-white hover:text-accent w-max"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
          <nav
            aria-label="Footer menu"
            className="lg:border-l-2 lg:border-border lg:pl-8"
          >
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-muted">
              Menu
            </p>
            <div className="mt-3 h-px w-10 bg-accent/80" aria-hidden />
            <ul className="mt-4 space-y-2">
              {FOOTER_MENU_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-display color-fade text-xs font-semibold uppercase tracking-[0.18em] text-foreground hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav
            aria-label="Footer quick links"
            className="lg:border-l-2 lg:border-border lg:pl-8"
          >
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-muted">
              Quick Links
            </p>
            <div className="mt-3 h-px w-26 bg-accent/80" aria-hidden />
            <ul className="mt-4 space-y-2">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="font-display color-fade text-xs font-semibold uppercase tracking-[0.18em] text-foreground hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:border-l-2 lg:border-border lg:pl-8">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-muted">
              Hours
            </p>
            <div className="mt-3 h-px w-14 bg-accent/80" aria-hidden />
            <dl className="mt-4 grid grid-cols-[minmax(0,auto)_1fr] gap-x-2 gap-y-3 text-xs tabular-nums text-muted">
              {businessHours.map((row) => (
                <Fragment key={row.dayLabel}>
                  <dt className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                    {row.dayLabel}:
                  </dt>
                  <dd>{row.hoursLabel}</dd>
                </Fragment>
              ))}
            </dl>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-center gap-3 border-t border-border pt-8 text-center sm:justify-between sm:gap-4 sm:text-left">
          <p className="font-mono text-[11px] uppercase tracking-widest text-steel">
            © 2019-{year} {siteConfig.legalName}. Northern Colorado & Surrounding
            Areas.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-widest text-steel">
            Website by:{" "}
            <a
              href={BITWERKS_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="color-fade font-semibold text-foreground underline decoration-steel/50 underline-offset-4 transition-colors duration-600 hover:text-accent hover:decoration-accent/50"
            >
              BitWerks
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

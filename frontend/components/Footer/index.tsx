"use client";

import { Fragment } from "react";
import Link from "next/link";
import { businessHours, siteConfig } from "@/lib/site";
import { FOOTER_LINKS } from "./constants";
import { useFooter } from "./hooks/useFooter";

export const Footer = () => {
  const { year } = useFooter();

  return (
    <footer className="border-t-2 border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-4">
            <p className="font-display text-lg font-bold uppercase tracking-[0.2em] text-foreground">
              {siteConfig.businessName}
            </p>
            <p className="text-sm leading-relaxed text-muted">
              IronRiver Fabrication has served Northern Colorado since 2019 with certified welding,
              precision fabrication, and industrial installations. Our experienced crew brings skill, safety,
              and service excellence to every project.
            </p>
          </div>
          <div className="lg:border-l-2 lg:border-border lg:pl-8">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Hours
            </p>
            <dl className="mt-4 grid grid-cols-[minmax(0,auto)_1fr] gap-x-6 gap-y-2 text-sm tabular-nums text-muted">
              {businessHours.map((row) => (
                <Fragment key={row.dayLabel}>
                  <dt className="font-medium text-foreground">
                    {row.dayLabel}:
                  </dt>
                  <dd>{row.hoursLabel}</dd>
                </Fragment>
              ))}
            </dl>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-col gap-3 border-l-2 border-border pl-8 text-sm lg:min-w-48"
          >
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display color-fade text-xs font-semibold uppercase tracking-widest text-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className="color-fade font-mono text-sm font-medium text-accent hover:text-accent-hover"
            >
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="color-fade text-muted hover:text-foreground"
            >
              {siteConfig.email}
            </a>
          </nav>
        </div>
        <p className="mt-14 border-t border-border pt-8 font-mono text-[11px] uppercase tracking-widest text-steel">
          © 2019-{year} {siteConfig.legalName}. Northern Colorado & Surrounding Areas.
        </p>
      </div>
    </footer>
  );
};

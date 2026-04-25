"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";
import { ctaStripLayoutClasses } from "./utils";
import { useCtaStrip } from "./hooks/useCtaStrip";
import type { CtaStripProps } from "./types";

export const CtaStrip = ({ className }: CtaStripProps) => {
  const { headline, body } = useCtaStrip();

  return (
    <section className={cn("bg-background py-16 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className={ctaStripLayoutClasses}>
            <div
              className="pointer-events-none absolute inset-0 opacity-30 hatch-diagonal"
              aria-hidden
            />
            <div className="relative max-w-xl space-y-4">
              <h2 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-3xl">
                {headline}
              </h2>
              <p className="text-sm font-medium leading-relaxed text-muted">
                {body}
              </p>
            </div>
            <div className="relative flex w-full flex-col gap-4 sm:flex-row sm:justify-end md:w-auto">
              <Link
                href="/contact"
                className="font-display inline-flex h-14 min-h-14 items-center justify-center border-2 border-accent bg-accent px-8 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground shadow-[inset_0_1px_0_rgb(255_255_255_/_0.08)] transition-[background-color,border-color,transform] duration-300 ease-industrial hover:border-accent-hover hover:bg-accent-hover active:translate-y-px"
              >
                Request a quote
              </Link>
              <a
                href={`tel:${siteConfig.phoneE164}`}
                className="font-display inline-flex h-14 min-h-14 items-center justify-center border-2 border-border bg-surface px-8 text-xs font-semibold uppercase tracking-[0.2em] text-foreground shadow-[inset_0_1px_0_rgb(255_255_255_/_0.05)] transition-[border-color,color,transform] duration-300 ease-industrial hover:border-steel-bright hover:text-accent active:translate-y-px"
              >
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

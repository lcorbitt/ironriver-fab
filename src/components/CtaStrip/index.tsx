"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { ctaStripBandClasses } from "./utils";
import { useCtaStrip } from "./hooks/useCtaStrip";
import type { CtaStripProps } from "./types";

export const CtaStrip = ({ className }: CtaStripProps) => {
  const { headline, body } = useCtaStrip();

  return (
    <section className={cn("bg-background py-16 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className={cn(
              ctaStripBandClasses,
              "relative flex flex-col items-center lg:items-start gap-6 overflow-hidden p-10 sm:p-12 md:flex-row md:items-center md:justify-between",
            )}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-25 hatch-diagonal"
              aria-hidden
            />
            <div className="relative z-10 flex w-full flex-col gap-6 md:max-w-3xl text-center lg:text-left">
              <h2 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-3xl">
                {headline}
              </h2>
              <p className="text-base font-medium leading-relaxed text-muted max-w-xl">
                {body}
              </p>
            </div>
            <Link
              href="/contact"
              className="font-display color-fade inline-flex h-14 min-h-14 w-fit shrink-0 items-center justify-center whitespace-nowrap border-2 border-accent bg-accent px-8 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] transition-transform duration-300 ease-industrial hover:border-border/90 hover:bg-surface hover:text-accent active:translate-y-px"
            >
              Request Build
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

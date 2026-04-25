"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { ctaStripBandClasses } from "./utils";
import { useCtaStrip } from "./hooks/useCtaStrip";
import type { CtaStripProps } from "./types";

export const CtaStrip = ({ className }: CtaStripProps) => {
  const { headline } = useCtaStrip();

  return (
    <section className={cn("bg-background py-16 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className={cn(
              ctaStripBandClasses,
              "relative flex flex-col items-center justify-center overflow-hidden p-10 text-center sm:p-12",
            )}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-25 hatch-diagonal"
              aria-hidden
            />
            <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center gap-4">
              <h2 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-3xl">
                {headline}
              </h2>
              <Link
                href="/contact"
                className="font-display color-fade inline-flex h-14 min-h-14 w-full max-w-sm items-center justify-center border-2 border-accent bg-accent px-8 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] transition-transform duration-300 ease-industrial hover:border-accent-hover hover:bg-accent-hover active:translate-y-px sm:w-auto"
              >
                Request Build
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

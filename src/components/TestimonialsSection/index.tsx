"use client";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import {
  TESTIMONIALS_EYEBROW,
  TESTIMONIALS_HEADING,
  TESTIMONIALS_SUBHEAD,
} from "./constants";
import { useTestimonialsSection } from "./hooks/useTestimonialsSection";
import type { TestimonialsSectionProps } from "./types";
import { ratingStarsAriaLabel } from "./utils";

const STAR_COUNT = 5;

export const TestimonialsSection = ({
  className,
}: TestimonialsSectionProps) => {
  const { items } = useTestimonialsSection();

  return (
    <section
      className={cn(
        "relative border-b border-border bg-background py-20 sm:py-28",
        className,
      )}
      aria-labelledby="testimonials-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 hatch-diagonal"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal className="space-y-4">
            <h2
              id="testimonials-heading"
              className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-accent"
            >
              {TESTIMONIALS_EYEBROW}
            </h2>
            <p className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl">
              {TESTIMONIALS_HEADING}
            </p>
            <p className="text-base font-medium leading-relaxed text-muted sm:text-lg">
              {TESTIMONIALS_SUBHEAD}
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((item) => (
            <li key={item.id}>
              <Reveal>
                <figure className="group relative flex h-full flex-col overflow-hidden border-2 border-border bg-surface p-6 pt-8 shadow-[inset_0_1px_0_rgb(255_255_255/0.04)] sm:p-8">
                  <span
                    className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-accent"
                    aria-hidden
                  />
                  <blockquote className="relative flex-1">
                    <span
                      className="font-display text-5xl font-bold leading-none text-accent/25 sm:text-6xl"
                      aria-hidden
                    >
                      &ldquo;
                    </span>
                    <p className="-mt-2 font-medium leading-relaxed text-foreground/90 text-base">
                      {item.quote}
                    </p>
                  </blockquote>
                  <figcaption className="mt-8 border-t border-border pt-6">
                    <div
                      className="mb-3 flex gap-0.5"
                      role="img"
                      aria-label={ratingStarsAriaLabel(item.rating)}
                    >
                      {Array.from({ length: STAR_COUNT }, (_, i) => (
                        <span
                          key={i}
                          className={cn(
                            "text-[15px] leading-none",
                            i < item.rating
                              ? "text-accent"
                              : "text-border",
                          )}
                          aria-hidden
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="font-display text-sm font-bold uppercase tracking-wide text-foreground">
                      {item.name}
                    </p>
                    <p className="mt-1 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-steel-bright">
                      {item.detail}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

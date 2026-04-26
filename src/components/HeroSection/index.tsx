"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { HERO_IMAGE_ALT, HERO_IMAGE_SRC } from "./constants";
import { useHeroSection } from "./hooks/useHeroSection";
import { isExternalCta } from "./utils";

export const HeroSection = () => {
  const { kicker, headline, subhead, ctas } = useHeroSection();

  return (
    <section className="relative overflow-hidden border-b border-border bg-zinc-950">
      {/* Full-bleed photography — scrims use black at modest opacity so the photo stays visible */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE_SRC}
          alt={HERO_IMAGE_ALT}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center saturate-[0.9] contrast-[1.03]"
        />
        {/* Dark left → clear right over a long horizontal blend */}
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0/0.86)_0%,rgb(0_0_0/0.82)_12%,rgb(0_0_0/0.72)_28%,rgb(0_0_0/0.56)_52%,rgb(0_0_0/0.4)_68%,rgb(0_0_0/0.24)_80%,rgb(0_0_0/0.12)_90%,rgb(0_0_0/0.05)_96%,transparent_100%)] sm:bg-[linear-gradient(90deg,rgb(0_0_0/0.93)_0%,rgb(0_0_0/0.9)_8%,rgb(0_0_0/0.82)_18%,rgb(0_0_0/0.62)_48%,rgb(0_0_0/0.38)_55%,rgb(0_0_0/0.2)_72%,rgb(0_0_0/0.09)_86%,rgb(0_0_0/0.03)_96%,transparent_100%)]"
          aria-hidden
        />
        <div
          className="hatch-diagonal absolute inset-0 opacity-[0.05]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_80px_40px_rgb(0_0_0/0.12)]"
          aria-hidden
        />
      </div>

      <div
        className="pointer-events-none absolute left-0 top-0 z-20 hidden h-full w-1.5 bg-gradient-to-b from-accent via-steel to-transparent opacity-90 sm:block"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex lg:min-h-[min(92vh,52rem)] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-steel-bright">
              <span className="h-px w-10 bg-accent" aria-hidden />
              {kicker}
            </p>
            <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-foreground drop-shadow-[0_2px_24px_rgb(0_0_0_/_0.45)] sm:text-5xl lg:text-6xl lg:tracking-tighter">
              {headline}
            </h1>
          </div>
          <p className="max-w-xl border-l-2 border-accent/60 pl-5 text-lg font-medium leading-relaxed text-foreground/92 drop-shadow-[0_1px_12px_rgb(0_0_0_/_0.35)] sm:text-xl">
            {subhead}
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-accent drop-shadow-[0_1px_8px_rgb(0_0_0_/_0.5)]">
            Mobile Welding · Custom Fabrication · Repairs
          </p>

          <div className="mt-10 flex w-full max-w-md flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center lg:mt-12">
            {ctas.map((cta) => {
              const external = isExternalCta(cta);
              const className = cn(
                    "font-display color-fade inline-flex h-14 min-h-14 flex-1 items-center justify-center border-2 px-6 text-xs font-semibold uppercase tracking-[0.18em] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.06)] transition-transform duration-300 ease-industrial active:translate-y-px sm:px-8 sm:text-sm sm:tracking-[0.2em]",
                cta.variant === "primary" &&
                  "border-accent hover:border-border/90 bg-accent text-accent-foreground hover:bg-surface hover:text-accent",
                cta.variant === "secondary" &&
                  "border-border/90 bg-surface/90 text-foreground shadow-[0_8px_32px_rgb(0_0_0_/_0.35)] backdrop-blur-sm hover:border-steel-bright hover:bg-surface",
              );
              if (external)
                return (
                  <Link target="_blank" key={cta.href} href={cta.href} className={className}>
                    {cta.label}
                  </Link>
                );
              return (
                <Link key={cta.href} href={cta.href} className={className}>
                  {cta.label}
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

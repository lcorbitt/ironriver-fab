"use client";

import Image from "next/image";
import {
  CircleDollarSign,
  Clock,
  Info,
  Medal,
  UsersRound,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import {
  WHY_CHOOSE_US_BODY,
  WHY_CHOOSE_US_CALLOUTS,
  WHY_CHOOSE_US_EYEBROW,
  WHY_CHOOSE_US_HEADING,
  WHY_CHOOSE_US_PARALLAX_IMAGE_ALT,
  WHY_CHOOSE_US_PARALLAX_IMAGE_SRC,
  WHY_CHOOSE_US_RIGHT_IMAGE_ALT,
  WHY_CHOOSE_US_RIGHT_IMAGE_SRC,
} from "./constants";
import { useWhyChooseUsSection } from "./hooks/useWhyChooseUsSection";
import type { WhyChooseUsCalloutIconId, WhyChooseUsSectionProps } from "./types";

const CALLOUT_ICON_CLASSNAME = "h-8 w-8";
const CALLOUT_ICON_STROKE_WIDTH = 1.6;

const CalloutIcon = ({ iconId }: { iconId: WhyChooseUsCalloutIconId }) => {
  const shared = {
    className: CALLOUT_ICON_CLASSNAME,
    strokeWidth: CALLOUT_ICON_STROKE_WIDTH,
    "aria-hidden": true as const,
  };

  switch (iconId) {
    case "medal":
      return <Medal {...shared} />;
    case "info":
      return <Info {...shared} />;
    case "circle-dollar-sign":
      return <CircleDollarSign {...shared} />;
    case "clock":
      return <Clock {...shared} />;
    case "users-round":
      return <UsersRound {...shared} />;
    default: {
      const _exhaustive: never = iconId;
      return _exhaustive;
    }
  }
};

export const WhyChooseUsSection = ({ className }: WhyChooseUsSectionProps) => {
  const { parallaxContainerRef, parallaxTranslateY } = useWhyChooseUsSection();

  return (
    <section
      className={cn(
        "relative border-b border-border bg-background",
        className,
      )}
      aria-labelledby="why-choose-us-heading"
    >
      <div className="grid lg:grid-cols-3">
        <div
          ref={parallaxContainerRef}
          className="relative overflow-hidden bg-zinc-950 lg:col-span-2"
        >
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute inset-0"
                style={{
                  transform: `translate3d(0, ${parallaxTranslateY}px, 0) scale(1.06)`,
                }}
              >
                <Image
                  src={WHY_CHOOSE_US_PARALLAX_IMAGE_SRC}
                  alt={WHY_CHOOSE_US_PARALLAX_IMAGE_ALT}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center saturate-[0.9] contrast-[1.04]"
                  priority={false}
                />
              </div>
              <div className="absolute inset-0 bg-background/80" aria-hidden />
              <div
                className="hatch-diagonal absolute inset-0 opacity-[0.06]"
                aria-hidden
              />
            </div>

          <div className="relative z-10 mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-14">
            <Reveal className="max-w-xl space-y-5">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
                  {WHY_CHOOSE_US_EYEBROW}
                </p>
                <h2
                  id="why-choose-us-heading"
                  className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl"
                >
                  {WHY_CHOOSE_US_HEADING}
                </h2>
                <p className="text-base font-medium leading-relaxed text-foreground/80 sm:text-lg">
                  {WHY_CHOOSE_US_BODY}
                </p>
                <ul className="space-y-6 pt-1">
                  {WHY_CHOOSE_US_CALLOUTS.map((callout) => (
                    <li key={`${callout.iconId}-${callout.title}`} className="flex gap-6 items-center">
                      <span className="mt-0.5 text-accent" aria-hidden>
                        <CalloutIcon iconId={callout.iconId} />
                      </span>
                      <div className="space-y-1">
                        <p className="font-display text-base font-bold uppercase leading-tight tracking-tight text-foreground">
                          {callout.title}
                        </p>
                        <p className="text-base font-medium leading-relaxed text-foreground/80">
                          {callout.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
            </Reveal>
          </div>
        </div>

        <div className="relative min-h-88 overflow-hidden bg-surface lg:col-span-1">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute inset-0 scale-135">
              <Image
                src={WHY_CHOOSE_US_RIGHT_IMAGE_SRC}
                alt={WHY_CHOOSE_US_RIGHT_IMAGE_ALT}
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover object-right opacity-90"
                priority={false}
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-background/0" aria-hidden />
        </div>
      </div>
    </section>
  );
};


"use client";

import { Hammer, Lightbulb, PencilRuler } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { PROCESS_SECTION_HEADING } from "./constants";
import { useProcessSection } from "./hooks/useProcessSection";
import type { ProcessSectionProps, ProcessStepIconId } from "./types";
import { STEP_LABEL_RAIL_CLASS } from "./utils";

const GLYPH_CLASS =
  "h-9 w-9 shrink-0 text-accent sm:h-10 sm:w-10";

const LUCIDE_STROKE = 1.25;

const ProcessStepGlyph = ({ iconId }: { iconId: ProcessStepIconId }) => {
  const shared = {
    className: GLYPH_CLASS,
    strokeWidth: LUCIDE_STROKE,
    "aria-hidden": true as const,
  };

  switch (iconId) {
    case "concept":
      return <Lightbulb {...shared} />;
    case "design":
      return <PencilRuler {...shared} />;
    case "fabricate":
      return <Hammer {...shared} />;
    default: {
      const _exhaustive: never = iconId;
      return _exhaustive;
    }
  }
};

export const ProcessSection = ({ className }: ProcessSectionProps) => {
  const { steps } = useProcessSection();

  return (
    <section
      className={cn(
        "relative border-b border-border bg-surface py-16 sm:py-24",
        className,
      )}
      aria-labelledby="process-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.55] hatch-diagonal"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            id="process-section-heading"
            className="text-center font-display text-2xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl"
          >
            {PROCESS_SECTION_HEADING}
          </h2>
        </Reveal>

        <ol className="mt-14 grid list-none gap-12 sm:mt-16 md:grid-cols-3 md:gap-10 lg:gap-14">
          {steps.map((step) => (
            <li key={step.id}>
              <Reveal>
                <article className="flex flex-col items-center text-center">
                  <div
                    className="flex h-22 w-22 shrink-0 items-center justify-center border-2 border-accent bg-surface shadow-[inset_0_1px_0_rgb(255_255_255/0.04)] sm:h-24 sm:w-24"
                    aria-hidden
                  >
                    <ProcessStepGlyph iconId={step.iconId} />
                  </div>
                  <div className="mt-6 flex w-full max-w-xs items-center justify-center gap-3 sm:mt-8">
                    <span className={STEP_LABEL_RAIL_CLASS} aria-hidden />
                    <h3 className="font-display text-sm font-bold uppercase tracking-[0.22em] text-foreground sm:text-base">
                      {step.title}
                    </h3>
                    <span className={STEP_LABEL_RAIL_CLASS} aria-hidden />
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import {
  FAQ_EYEBROW,
  FAQ_HEADING,
  FAQ_SERVICE_AREA_CITIES,
  FAQ_SERVICE_AREA_HEADING,
  FAQ_SUBHEAD,
} from "./constants";
import { useFaqSection } from "./hooks/useFaqSection";
import type { FaqItem, FaqSectionProps } from "./types";
import { buildFaqAriaIds } from "./utils";

const AccordionItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const { panelId, triggerId } = useMemo(() => buildFaqAriaIds(item.id), [item.id]);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [measuredHeight, setMeasuredHeight] = useState(0);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const measure = () => setMeasuredHeight(el.scrollHeight);
    measure();

    const ro = new ResizeObserver(() => measure());
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <li className="border-2 border-border bg-surface shadow-[inset_0_1px_0_rgb(255_255_255/0.04)]">
      <button
        id={triggerId}
        type="button"
        className="group flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-500 ease-in-out hover:bg-accent hover:text-surface motion-reduce:transition-none sm:px-6"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="font-display text-sm font-bold uppercase tracking-[0.14em] text-current sm:text-base">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-accent transition-[transform,color] duration-500 ease-in-out group-hover:text-surface motion-reduce:transition-none",
            isOpen ? "rotate-180" : "rotate-0",
          )}
          aria-hidden
        />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={cn(
          "overflow-hidden border-t border-border",
          "transition-[max-height,opacity] duration-500 ease-in-out motion-reduce:transition-none",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        style={{ maxHeight: isOpen ? measuredHeight : 0 }}
      >
        <div ref={innerRef} className="px-5 pb-6 pt-4 sm:px-6">
          <p className="text-sm font-medium leading-relaxed text-muted sm:text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </li>
  );
};

export const FaqSection = ({ className }: FaqSectionProps) => {
  const { items, openId, toggle } = useFaqSection();

  return (
    <section
      className={cn("relative border-b border-border bg-background py-20 sm:py-28", className)}
      aria-labelledby="faq-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 hatch-diagonal" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal className="space-y-4">
            <h2
              id="faq-heading"
              className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-accent"
            >
              {FAQ_EYEBROW}
            </h2>
            <p className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl">
              {FAQ_HEADING}
            </p>
            <p className="text-base font-medium leading-relaxed text-muted sm:text-lg">
              {FAQ_SUBHEAD}
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <ul className="space-y-4">
            {items.map((item) => (
              <Reveal key={item.id} variant="fade">
                <AccordionItem
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => toggle(item.id)}
                />
              </Reveal>
            ))}
          </ul>

          <div className="mt-12 border-t border-border/80 pt-10 text-center">
            <Reveal variant="fade">
              <p className="font-sans text-sm font-semibold leading-relaxed text-foreground sm:text-base">
                {FAQ_SERVICE_AREA_HEADING}
              </p>
              <ul className="mx-auto mt-6 grid max-w-5xl grid-cols-2 justify-items-center gap-x-10 gap-y-3 text-sm text-muted sm:grid-cols-2 sm:text-base lg:grid-cols-3">
                {FAQ_SERVICE_AREA_CITIES.map((city) => (
                  <li key={city} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span className="leading-relaxed">{city}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};


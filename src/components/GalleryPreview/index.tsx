"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import {
  GALLERY_PREVIEW_HEADING,
  GALLERY_PREVIEW_SUBHEAD,
} from "./constants";
import { useGalleryPreview } from "./hooks/useGalleryPreview";
import type { GalleryPreviewProps } from "./types";

export const GalleryPreview = ({ className }: GalleryPreviewProps) => {
  const { items } = useGalleryPreview();

  return (
    <section
      className={cn(
        "border-b border-border bg-background py-20 sm:py-28",
        className,
      )}
      aria-labelledby="gallery-preview-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <Reveal className="max-w-2xl space-y-4">
            <h2
              id="gallery-preview-heading"
              className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-accent"
            >
              {GALLERY_PREVIEW_HEADING}
            </h2>
            <p className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl">
              {GALLERY_PREVIEW_SUBHEAD}
            </p>
          </Reveal>
          <Reveal>
            <Link
              href="/gallery"
              className="font-display color-fade inline-flex h-12 items-center justify-center border-2 border-border bg-surface px-6 text-xs font-semibold uppercase tracking-[0.2em] text-foreground shadow-[inset_0_1px_0_rgb(255_255_255_/_0.05)] hover:border-accent hover:text-accent"
            >
              View full gallery
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Reveal key={item.id}>
              <Link
                href="/gallery"
                className="group relative block aspect-4/5 overflow-hidden border-2 border-border bg-surface shadow-[inset_0_0_0_1px_rgb(255_255_255_/_0.04)]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-[transform,filter] duration-500 ease-industrial group-hover:scale-[1.04] group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent opacity-95 transition-opacity duration-300 ease-industrial group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 border-t-2 border-accent/80 bg-background/90 p-4 backdrop-blur-[2px]">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-steel-bright">
                    On the floor
                  </p>
                  <p className="mt-1 font-display text-sm font-bold uppercase tracking-wide text-foreground">
                    {item.title}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

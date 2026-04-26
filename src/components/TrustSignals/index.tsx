"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import {
  TRUST_SIGNALS_SECTION_HEADING,
  TRUST_SIGNALS_SECTION_SUBHEAD,
} from "./constants";
import { useTrustSignals } from "./hooks/useTrustSignals";
import { SERVICE_IMAGE_INTRINSIC } from "./utils";
import Link from "next/link";

export const TrustSignals = () => {
  const { columns } = useTrustSignals();

  return (
    <section
      className="relative border-b border-border bg-surface"
      aria-labelledby="home-services-heading"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: "url(/metal-grate.jpg)",
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
            backgroundPosition: "top left",
          }}
        />
        <div className="absolute inset-0 bg-background/95" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="mx-auto max-w-3xl pb-12 text-center sm:pb-14 md:pb-16">
          <h2
            id="home-services-heading"
            className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            {TRUST_SIGNALS_SECTION_HEADING}
          </h2>
          <p className="mt-3 text-base font-medium leading-relaxed text-muted sm:mt-4 sm:text-lg">
            {TRUST_SIGNALS_SECTION_SUBHEAD}
          </p>
        </Reveal>
        <ul className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0 mb-16">
          {columns.map((column) => (
            <li key={column.title}>
              <Reveal>
                <article className="flex flex-col items-center px-5 py-12 text-center sm:px-8 md:min-h-[280px] md:py-14">
                  <div className="relative mb-6 flex h-16 w-16 shrink-0 justify-center md:mb-8 md:h-17 md:w-17">
                    <Image
                      src={column.imageSrc}
                      alt=""
                      width={SERVICE_IMAGE_INTRINSIC.width}
                      height={SERVICE_IMAGE_INTRINSIC.height}
                      sizes="(min-width: 768px) 4.25rem, 4rem"
                      className="object-contain mix-blend-screen opacity-90"
                    />
                  </div>
                  <h3 className="font-sans text-lg font-bold tracking-tight text-foreground sm:text-xl">
                    {column.title}
                  </h3>
                  <span
                    className="mx-auto mt-2.5 block h-0.5 w-10 bg-accent sm:mt-3 sm:w-12"
                    aria-hidden
                  />
                  <p className="mt-3 max-w-sm text-sm font-normal leading-relaxed text-muted sm:mt-4">
                    {column.body}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Link href={'/contact'} className="bg-surface text-sm font-medium leading-relaxed text-muted sm:text-lg p-4 border-2 border-border rounded-md hover:border-accent hover:text-accent">
          {"Don't see what you're looking for? Give us a call!"}
        </Link>
      </div>
    </section>
  );
};

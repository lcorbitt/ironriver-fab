"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { useTrustSignals } from "./hooks/useTrustSignals";
import { SERVICE_IMAGE_INTRINSIC } from "./utils";

export const TrustSignals = () => {
  const { columns } = useTrustSignals();

  return (
    <section
      className="border-b border-border bg-background py-16 sm:py-20"
      aria-labelledby="home-services-heading"
    >
      <h2 id="home-services-heading" className="sr-only">
        Services
      </h2>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ul className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {columns.map((column) => (
            <li key={column.title}>
              <Reveal>
                <article className="flex flex-col items-center px-5 py-12 text-center sm:px-8 md:min-h-[280px] md:py-14">
                  <div className="relative mb-6 flex h-16 w-16 shrink-0 justify-center md:mb-8 md:h-[4.25rem] md:w-[4.25rem]">
                    <Image
                      src={column.imageSrc}
                      alt=""
                      width={SERVICE_IMAGE_INTRINSIC.width}
                      height={SERVICE_IMAGE_INTRINSIC.height}
                      sizes="(min-width: 768px) 4.25rem, 4rem"
                      className="object-contain"
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
      </div>
    </section>
  );
};

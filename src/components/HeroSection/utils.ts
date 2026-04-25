import type { HeroCta } from "./types";

export const isExternalCta = (cta: HeroCta): boolean =>
  cta.href.startsWith("tel:") || cta.href.startsWith("http");

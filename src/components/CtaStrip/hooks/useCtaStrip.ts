"use client";

import { useMemo } from "react";
import { CTA_STRIP_BODY, CTA_STRIP_HEADLINE } from "../constants";

export interface UseCtaStripResult {
  headline: string;
  body: string;
}

export const useCtaStrip = (): UseCtaStripResult =>
  useMemo(
    () => ({
      headline: CTA_STRIP_HEADLINE,
      body: CTA_STRIP_BODY,
    }),
    [],
  );

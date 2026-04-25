"use client";

import { getCopyrightYear } from "../utils";

export interface UseSiteFooterResult {
  year: number;
}

export const useSiteFooter = (): UseSiteFooterResult => ({
  year: getCopyrightYear(),
});

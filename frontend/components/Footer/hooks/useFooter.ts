"use client";

import { getCopyrightYear } from "../utils";

export interface UseFooterResult {
  year: number;
}

export const useFooter = (): UseFooterResult => ({
  year: getCopyrightYear(),
});

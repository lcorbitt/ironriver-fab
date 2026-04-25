"use client";

import { useMemo } from "react";
import { PROCESS_STEPS } from "../constants";

export interface UseProcessSectionResult {
  steps: typeof PROCESS_STEPS;
}

export const useProcessSection = (): UseProcessSectionResult =>
  useMemo(() => ({ steps: PROCESS_STEPS }), []);

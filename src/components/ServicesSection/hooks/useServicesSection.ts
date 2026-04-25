"use client";

import { useMemo } from "react";
import { servicesIntro } from "../utils";

export interface UseServicesSectionResult {
  intro: string;
}

export const useServicesSection = (): UseServicesSectionResult =>
  useMemo(() => ({ intro: servicesIntro() }), []);

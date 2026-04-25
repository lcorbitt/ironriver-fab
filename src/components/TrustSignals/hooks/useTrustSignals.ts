"use client";

import { useMemo } from "react";
import { HOME_SERVICE_COLUMNS } from "../constants";

export interface UseTrustSignalsResult {
  columns: typeof HOME_SERVICE_COLUMNS;
}

export const useTrustSignals = (): UseTrustSignalsResult =>
  useMemo(() => ({ columns: HOME_SERVICE_COLUMNS }), []);

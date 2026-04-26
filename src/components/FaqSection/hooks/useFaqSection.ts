"use client";

import { useCallback, useMemo, useState } from "react";
import { FAQ_ITEMS } from "../constants";

export interface UseFaqSectionResult {
  items: typeof FAQ_ITEMS;
  openId: string | null;
  toggle: (id: string) => void;
}

export const useFaqSection = (): UseFaqSectionResult => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const items = useMemo(() => FAQ_ITEMS, []);

  const toggle = useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  return { items, openId, toggle };
};


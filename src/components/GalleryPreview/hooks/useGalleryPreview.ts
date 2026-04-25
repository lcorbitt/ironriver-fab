"use client";

import { useMemo } from "react";
import { galleryItems, galleryPreviewIds } from "@/data/gallery";
import { filterGalleryPreview } from "../utils";

export interface UseGalleryPreviewResult {
  items: ReturnType<typeof filterGalleryPreview>;
}

export const useGalleryPreview = (): UseGalleryPreviewResult =>
  useMemo(
    () => ({
      items: filterGalleryPreview(galleryItems, galleryPreviewIds),
    }),
    [],
  );

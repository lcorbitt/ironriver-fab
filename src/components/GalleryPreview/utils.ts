import type { GalleryItem } from "@/data/gallery";
import type { galleryPreviewIds } from "@/data/gallery";

type PreviewId = (typeof galleryPreviewIds)[number];

export const filterGalleryPreview = (
  items: readonly GalleryItem[],
  ids: readonly PreviewId[],
): readonly GalleryItem[] => {
  const idSet = new Set<string>(ids);
  return items.filter((item) => idSet.has(item.id as PreviewId));
};

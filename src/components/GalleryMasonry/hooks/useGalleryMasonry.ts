"use client";

import { useCallback, useMemo, useState } from "react";
import type { ClickHandlerProps, Photo } from "react-photo-album";
import type { GalleryItem } from "@/data/gallery";
import { toLightboxSlides, toPhotoAlbumPhotos } from "../utils";

export interface UseGalleryMasonryResult {
  photos: ReturnType<typeof toPhotoAlbumPhotos>;
  slides: ReturnType<typeof toLightboxSlides>;
  lightboxOpen: boolean;
  lightboxIndex: number;
  closeLightbox: () => void;
  onPhotoClick: (props: ClickHandlerProps<Photo>) => void;
  onLightboxView: (props: { index: number }) => void;
}

export const useGalleryMasonry = (
  items: readonly GalleryItem[],
): UseGalleryMasonryResult => {
  const photos = useMemo(() => toPhotoAlbumPhotos(items), [items]);
  const slides = useMemo(() => toLightboxSlides(items), [items]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const onPhotoClick = useCallback(({ index }: ClickHandlerProps<Photo>) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const onLightboxView = useCallback((props: { index: number }) => {
    setLightboxIndex(props.index);
  }, []);

  return {
    photos,
    slides,
    lightboxOpen,
    lightboxIndex,
    closeLightbox,
    onPhotoClick,
    onLightboxView,
  };
};

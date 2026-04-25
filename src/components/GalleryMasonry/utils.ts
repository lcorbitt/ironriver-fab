import type { GalleryItem } from "@/data/gallery";
import type { Slide } from "yet-another-react-lightbox";

export const toPhotoAlbumPhotos = (items: readonly GalleryItem[]) =>
  items.map((item) => ({
    key: item.id,
    src: item.src,
    width: item.width,
    height: item.height,
    alt: item.alt,
    title: item.title,
  }));

export const toLightboxSlides = (items: readonly GalleryItem[]): Slide[] =>
  items.map((item) => ({
    src: item.src,
    width: item.width,
    height: item.height,
    alt: item.alt,
    title: item.title,
  }));

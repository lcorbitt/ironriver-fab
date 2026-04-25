"use client";

import dynamic from "next/dynamic";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import "yet-another-react-lightbox/styles.css";
import type { GalleryItem } from "@/data/gallery";
import { GALLERY_MASONRY_COLUMNS, GALLERY_MASONRY_SPACING } from "./constants";
import { useGalleryMasonry } from "./hooks/useGalleryMasonry";
import type { GalleryMasonryProps } from "./types";

const Lightbox = dynamic(
  () => import("yet-another-react-lightbox").then((m) => m.default),
  { ssr: false },
);

const GalleryMasonryInner = ({ items }: { items: readonly GalleryItem[] }) => {
  const {
    photos,
    slides,
    lightboxOpen,
    lightboxIndex,
    closeLightbox,
    onPhotoClick,
    onLightboxView,
  } = useGalleryMasonry(items);

  return (
    <>
      <MasonryPhotoAlbum
        photos={photos}
        columns={GALLERY_MASONRY_COLUMNS}
        spacing={GALLERY_MASONRY_SPACING}
        onClick={onPhotoClick}
        sizes={{
          size: "100vw",
          sizes: [
            { viewport: "(max-width: 480px)", size: "100vw" },
            { viewport: "(max-width: 900px)", size: "100vw" },
            { viewport: "(max-width: 1280px)", size: "100vw" },
            { viewport: "(max-width: 1600px)", size: "100vw" },
          ],
        }}
      />
      <Lightbox
        open={lightboxOpen}
        close={closeLightbox}
        index={lightboxIndex}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(15, 14, 12, 0.96)" },
        }}
        carousel={{ finite: true }}
        controller={{ closeOnBackdropClick: true }}
        on={{ view: onLightboxView }}
      />
    </>
  );
};

export const GalleryMasonry = ({ items }: GalleryMasonryProps) => (
  <div className="gallery-masonry">
    <GalleryMasonryInner items={items} />
  </div>
);

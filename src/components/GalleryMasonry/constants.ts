export const GALLERY_MASONRY_SPACING = 10;

export const GALLERY_MASONRY_COLUMNS = (containerWidth: number): number => {
  if (containerWidth < 480) return 1;
  if (containerWidth < 900) return 2;
  if (containerWidth < 1280) return 3;
  return 4;
};

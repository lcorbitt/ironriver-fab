export interface GalleryItem {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
}

/** Curated portfolio imagery (Unsplash) — replace with owned WebP assets in production. */
export const galleryItems: readonly GalleryItem[] = [
  {
    id: "gate-1",
    src: "/gate-1.png",
    width: 1600,
    height: 1067,
    alt: "Steel Entry Gates",
    title: "Steel Entry Gates",
  },
   {
    id: "gate-2",
    src: "/gate-2.png",
    width: 1600,
    height: 1067,
    alt: "Steel Enclosure Frames",
    title: "Steel Enclosure Frames",
  },
  {
    id: "gate-3",
    src: "/gate-3.png",
    width: 1600,
    height: 1067,
    alt: "Window Well Grates",
    title: "Window Well Grates",
  },
  {
    id: "railing-1",
    src: "/railing-1.png",
    width: 1600,
    height: 1067,
    alt: "Custom Stair Railings",
    title: "Custom Stair Railings",
  },
  {
    id: "bench-1",
    src: "/bench-1.png",
    width: 1200,
    height: 1800,
    alt: "Stacked steel plate ready for cutting",
    title: "Material staging",
  },
 
  {
    id: "barrel-1",
    src: "/barrel-1.png",
    width: 1600,
    height: 1067,
    alt: "Industrial components staged for delivery",
    title: "Finishing & QA",
  },
  {
    id: "detail-1",
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80",
    width: 1400,
    height: 933,
    alt: "Close detail of TIG weld bead",
    title: "TIG finish pass",
  },
  {
    id: "beam-1",
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80",
    width: 1600,
    height: 1067,
    alt: "Steel beams at a commercial jobsite",
    title: "Structural install",
  },
];

export const galleryPreviewIds = [
  "gate-1",
  "gate-2",
  "gate-3",
  "railing-1",
] as const;

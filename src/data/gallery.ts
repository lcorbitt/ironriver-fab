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
    id: "weld-1",
    src: "https://images.unsplash.com/photo-1504917595217-d002dc953781?auto=format&fit=crop&w=1600&q=80",
    width: 1600,
    height: 1067,
    alt: "Precision welding on structural steel",
    title: "Structural weldment",
  },
  {
    id: "shop-1",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
    width: 1600,
    height: 1067,
    alt: "Fabrication workshop with CNC and hand tools",
    title: "Shop floor",
  },
  {
    id: "metal-1",
    src: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
    width: 1200,
    height: 1800,
    alt: "Stacked steel plate ready for cutting",
    title: "Material staging",
  },
  {
    id: "spark-1",
    src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1600&q=80",
    width: 1600,
    height: 1067,
    alt: "Plasma cutting sparks on mild steel",
    title: "Thermal cutting",
  },
  {
    id: "assembly-1",
    src: "https://images.unsplash.com/photo-1504325131762-298918f8b496?auto=format&fit=crop&w=1600&q=80",
    width: 1600,
    height: 1067,
    alt: "Large weldment during fit-up",
    title: "Fit-up & assembly",
  },
  {
    id: "industrial-1",
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
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
  "weld-1",
  "spark-1",
  "assembly-1",
  "metal-1",
] as const;

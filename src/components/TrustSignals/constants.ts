import type { HomeServiceColumn } from "./types";

/**
 * Drop matching files in `public/service-icons/` (any square asset works;
 * WebP or PNG recommended). Filenames must match these paths.
 */
export const HOME_SERVICE_COLUMNS: readonly HomeServiceColumn[] = [
  {
    imageSrc: "/fabricate.png",
    title: "Custom Projects",
    body: "Let us make your ideas into a reality. From custom fabrication from scratch to adding on to existing metal projects. Mild steel, aluminum, or stainless steel, we can do it all!",
  },
  {
    imageSrc: "/broken.png",
    title: "Welding Repairs",
    body: "Our most demanded service. Let us make repairs for you! Our most expensive repairs are a result of someone inexperienced attempting to make the repair themselves.",
  },
  {
    imageSrc: "/torch.png",
    title: "Metal cutting",
    body: "Whether you need metal cutting for a special project or to make something small enough to fit in a dumpster, let us cut it for you! We are equipped with several different methods of cutting metal.",
  },
];

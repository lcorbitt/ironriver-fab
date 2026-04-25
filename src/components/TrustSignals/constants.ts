import type { HomeServiceColumn } from "./types";

export const TRUST_SIGNALS_SECTION_HEADING = "Our most popular services";

export const TRUST_SIGNALS_SECTION_SUBHEAD =
  "Convenient service. One phone call. Best pricing.";

/**
 * Drop matching files in `public/service-icons/` (any square asset works;
 * WebP or PNG recommended). Filenames must match these paths.
 */
export const HOME_SERVICE_COLUMNS: readonly HomeServiceColumn[] = [
  {
    imageSrc: "/torch.png",
    title: "Mobile Welding",
    body: "We are equipped with a mobile welding unit that can travel to your site to weld, fabricate, and repair your metal projects.",
  },
  {
    imageSrc: "/fabricate.png",
    title: "Custom Fabrication",
    body: "Let us make your ideas into a reality. From custom fabrication from scratch to adding on to existing metal projects. Mild steel, aluminum, or stainless steel, we can do it all!",
  },
  {
    imageSrc: "/broken.png",
    title: "Welding Repairs",
    body: "Our most demanded service. Let us make repairs for you! Our most expensive repairs are a result of someone inexperienced attempting to make the repair themselves.",
  },
];

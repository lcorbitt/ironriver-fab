import type { FaqItem } from "./types";

export const FAQ_EYEBROW = "FAQ";

export const FAQ_HEADING = "Answers Before You Call";

export const FAQ_SUBHEAD =
  "A few quick details on scheduling, materials, and what to expect when we show up on site.";

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "service-area",
    question: "Do you travel for mobile welding?",
    answer:
      "Yes. We provide mobile welding throughout Northern Colorado and the Front Range. Share your address and timeline and we will confirm availability and any travel considerations.",
  },
  {
    id: "materials",
    question: "What materials do you weld and fabricate?",
    answer:
      "We work with mild steel, stainless, and aluminum depending on the project. If you are unsure, send photos and dimensions and we will recommend the right approach.",
  },
  {
    id: "timeline",
    question: "How fast can you turn around a repair?",
    answer:
      "Many repairs can be scheduled quickly if parts and access are straightforward. For urgent issues, contact us with photos and we will prioritize a safe plan and realistic ETA.",
  },
  {
    id: "quote",
    question: "How do quotes work?",
    answer:
      "We start with scope, photos, and location. You will get a clear estimate and next steps. If anything changes on site, we confirm before proceeding.",
  },
];

export const FAQ_SERVICE_AREA_HEADING =
  "Proudly providing welding and metal fabrication across Northern Colorado, including:";

export const FAQ_SERVICE_AREA_CITIES: readonly string[] = [
  "Fort Collins, CO",
  "Loveland, CO",
  "Greeley, CO",
  "Longmont, CO",
  "Berthoud, CO",
  "Windsor, CO",
  "Johnstown, CO",
  "Timnath, CO",
  "Wellington, CO",
  "Estes Park, CO",
  "Boulder, CO",
  "Lafayette, CO",
  "Louisville, CO",
  "Erie, CO",
];


import type { ProcessStep } from "./types";

export const PROCESS_SECTION_HEADING = "Our fabrication process";

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    id: "concept",
    title: "Conceptualize",
    iconId: "concept",
  },
  {
    id: "design",
    title: "Design",
    iconId: "design",
  },
  {
    id: "fabricate",
    title: "Fabricate",
    iconId: "fabricate",
  },
];

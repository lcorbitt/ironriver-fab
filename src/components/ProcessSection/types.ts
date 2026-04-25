export type ProcessStepIconId = "concept" | "design" | "fabricate";

export interface ProcessStep {
  id: string;
  title: string;
  iconId: ProcessStepIconId;
}

export interface ProcessSectionProps {
  className?: string;
}

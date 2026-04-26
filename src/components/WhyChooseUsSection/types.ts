export interface WhyChooseUsBenefit {
  title: string;
  body: string;
}

export type WhyChooseUsCalloutIconId = "medal" | "info" | "circle-dollar-sign" | "clock" | "users-round";

export const WhyChooseUsCalloutIconId = {
  medal: "medal",
  info: "info",
  "circle-dollar-sign": "circle-dollar-sign",
  clock: "clock",
  "users-round": "users-round",
};

export interface WhyChooseUsCallout {
  iconId: WhyChooseUsCalloutIconId;
  title: string;
  body: string;
}

export interface WhyChooseUsSectionProps {
  className?: string;
}


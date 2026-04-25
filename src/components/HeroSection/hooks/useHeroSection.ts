import { HERO_CTAS, HERO_HEADLINE, HERO_KICKER, HERO_SUBHEAD } from "../constants";

export interface UseHeroSectionResult {
  kicker: string;
  headline: string;
  subhead: string;
  ctas: typeof HERO_CTAS;
}

export const useHeroSection = (): UseHeroSectionResult => ({
  kicker: HERO_KICKER,
  headline: HERO_HEADLINE,
  subhead: HERO_SUBHEAD,
  ctas: HERO_CTAS,
});

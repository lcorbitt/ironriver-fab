export interface ParallaxConfig {
  maxTranslatePx: number;
}

const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

/**
 * Returns a translateY in pixels based on where the element sits in viewport.
 * 0 when centered; moves opposite scroll direction for subtle depth.
 */
export const computeParallaxTranslateY = (
  rect: DOMRect,
  viewportHeight: number,
  config: ParallaxConfig,
): number => {
  if (viewportHeight <= 0) return 0;

  const elementCenterY = rect.top + rect.height / 2;
  const viewportCenterY = viewportHeight / 2;
  const distance = elementCenterY - viewportCenterY;
  const normalized = clamp(distance / viewportHeight, -1, 1);

  return -normalized * config.maxTranslatePx;
};


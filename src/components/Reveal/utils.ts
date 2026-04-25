export const revealVisibleClasses =
  "opacity-100 translate-y-0 motion-reduce:opacity-100";

export const revealHiddenClasses =
  "opacity-0 translate-y-2 motion-reduce:opacity-100";

export const revealTransitionClasses =
  "transform transition-[opacity,transform] duration-600 ease-industrial motion-reduce:transition-none motion-reduce:transform-none";

/** Opacity-only reveal — no `transform` on the wrapper (keeps child scale transitions smooth). */
export const revealFadeVisibleClasses = "opacity-100";

export const revealFadeHiddenClasses =
  "opacity-0 motion-reduce:opacity-100";

export const revealFadeTransitionClasses =
  "transition-opacity duration-600 ease-industrial motion-reduce:transition-none";

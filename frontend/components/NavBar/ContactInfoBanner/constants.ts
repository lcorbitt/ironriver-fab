/**
 * `scrollY` at or below this always shows the bar (also clears toggle cooldown).
 */
export const CONTACT_BANNER_FORCE_SHOW_BELOW_PX = 14;

/** When `scrollY` is at or above this, the bar hides (wide band avoids layout jitter). */
export const CONTACT_BANNER_HIDE_WHEN_SCROLL_Y_GTE = 100;

/**
 * When `scrollY` is at or below this, the bar shows again.
 * Must be well below `HIDE_WHEN_SCROLL_Y_GTE` so `scrollY` noise does not cross both.
 */
export const CONTACT_BANNER_SHOW_WHEN_SCROLL_Y_LTE = 40;

/** After a hide/show flip, ignore further flips for this long (ms). */
export const CONTACT_BANNER_TOGGLE_COOLDOWN_MS = 320;

export const CONTACT_BANNER_EMAIL_LABEL = "E-mail:";

export const CONTACT_BANNER_PHONE_LABEL = "Phone:";

/** Same breakpoint as Tailwind `sm` (640px) for threshold + responsive UI. */
export const CONTACT_BANNER_VIEWPORT_MOBILE_MAX_WIDTH_PX = 640;

/** `scrollY` at or below: always show bar (clears cooldown). */
export const CONTACT_BANNER_FORCE_SHOW_BELOW_PX_MOBILE = 6;
export const CONTACT_BANNER_FORCE_SHOW_BELOW_PX_DESKTOP = 14;

/** `scrollY` at or above: hide bar. */
export const CONTACT_BANNER_HIDE_WHEN_SCROLL_Y_GTE_MOBILE = 40;
export const CONTACT_BANNER_HIDE_WHEN_SCROLL_Y_GTE_DESKTOP = 100;

/**
 * `scrollY` at or below: show bar again (hysteresis; must stay below hide threshold band).
 */
export const CONTACT_BANNER_SHOW_WHEN_SCROLL_Y_LTE_MOBILE = 16;
export const CONTACT_BANNER_SHOW_WHEN_SCROLL_Y_LTE_DESKTOP = 40;

/** After a hide/show flip, ignore further flips for this long (ms). */
export const CONTACT_BANNER_TOGGLE_COOLDOWN_MS_MOBILE = 240;
export const CONTACT_BANNER_TOGGLE_COOLDOWN_MS_DESKTOP = 320;

export const CONTACT_BANNER_EMAIL_LABEL = "E-mail:";

export const CONTACT_BANNER_PHONE_LABEL = "Phone:";

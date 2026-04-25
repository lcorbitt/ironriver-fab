import type { SiteSocialLinks } from "@/lib/site";
import {
  CONTACT_BANNER_FORCE_SHOW_BELOW_PX_DESKTOP,
  CONTACT_BANNER_FORCE_SHOW_BELOW_PX_MOBILE,
  CONTACT_BANNER_HIDE_WHEN_SCROLL_Y_GTE_DESKTOP,
  CONTACT_BANNER_HIDE_WHEN_SCROLL_Y_GTE_MOBILE,
  CONTACT_BANNER_SHOW_WHEN_SCROLL_Y_LTE_DESKTOP,
  CONTACT_BANNER_SHOW_WHEN_SCROLL_Y_LTE_MOBILE,
  CONTACT_BANNER_TOGGLE_COOLDOWN_MS_DESKTOP,
  CONTACT_BANNER_TOGGLE_COOLDOWN_MS_MOBILE,
  CONTACT_BANNER_VIEWPORT_MOBILE_MAX_WIDTH_PX,
} from "./constants";
import type { SocialLinkConfig, SocialNetwork } from "./types";

const SOCIAL_ORDER: readonly SocialNetwork[] = [
  "instagram",
  "facebook",
  "yelp",
];

export const getSocialLinksFromSite = (
  social: SiteSocialLinks,
): readonly SocialLinkConfig[] =>
  SOCIAL_ORDER.flatMap((network) => {
    const href = social[network];
    return href ? [{ network, href }] : [];
  });

export interface ContactBannerScrollThresholds {
  forceShowBelowPx: number;
  hideWhenScrollYGtePx: number;
  showWhenScrollYLtePx: number;
  toggleCooldownMs: number;
}

export const getContactBannerScrollThresholds =
  (): ContactBannerScrollThresholds => {
    const mobile =
      typeof window !== "undefined" &&
      window.innerWidth < CONTACT_BANNER_VIEWPORT_MOBILE_MAX_WIDTH_PX;

    if (mobile) {
      return {
        forceShowBelowPx: CONTACT_BANNER_FORCE_SHOW_BELOW_PX_MOBILE,
        hideWhenScrollYGtePx: CONTACT_BANNER_HIDE_WHEN_SCROLL_Y_GTE_MOBILE,
        showWhenScrollYLtePx: CONTACT_BANNER_SHOW_WHEN_SCROLL_Y_LTE_MOBILE,
        toggleCooldownMs: CONTACT_BANNER_TOGGLE_COOLDOWN_MS_MOBILE,
      };
    }

    return {
      forceShowBelowPx: CONTACT_BANNER_FORCE_SHOW_BELOW_PX_DESKTOP,
      hideWhenScrollYGtePx: CONTACT_BANNER_HIDE_WHEN_SCROLL_Y_GTE_DESKTOP,
      showWhenScrollYLtePx: CONTACT_BANNER_SHOW_WHEN_SCROLL_Y_LTE_DESKTOP,
      toggleCooldownMs: CONTACT_BANNER_TOGGLE_COOLDOWN_MS_DESKTOP,
    };
  };

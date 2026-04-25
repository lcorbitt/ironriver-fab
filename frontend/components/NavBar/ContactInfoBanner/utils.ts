import type { SiteSocialLinks } from "@/lib/site";
import type { SocialLinkConfig, SocialNetwork } from "./types";

const ORDER: readonly SocialNetwork[] = ["instagram", "facebook", "yelp"];

export const getSocialLinksFromSite = (
  social: SiteSocialLinks,
): readonly SocialLinkConfig[] =>
  ORDER.flatMap((network) => {
    const href = social[network];
    return href ? [{ network, href }] : [];
  });

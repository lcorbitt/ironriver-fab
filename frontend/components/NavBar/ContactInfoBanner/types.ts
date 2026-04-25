export type SocialNetwork = "instagram" | "facebook" | "yelp";

export interface SocialLinkConfig {
  network: SocialNetwork;
  href: string;
}

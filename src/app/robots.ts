import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
    disallow: ["/api/"],
  },
  sitemap: `${getSiteUrl()}/sitemap.xml`,
});

export default robots;

import type { MetadataRoute } from "next";
import { posts, serviceAreas } from "./content";
import { routableServices } from "./services/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ssexteriorservices.com.au";
  const siteUpdated = new Date("2026-10-02");

  return [
    { url: base, lastModified: siteUpdated, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: siteUpdated, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: siteUpdated, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/services`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/service-areas`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/resources`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/recent-activity`, lastModified: siteUpdated, changeFrequency: "daily", priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: siteUpdated, changeFrequency: "yearly", priority: 0.2 },
    ...routableServices.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified: siteUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...serviceAreas.map((area) => ({
      url: `${base}/service-areas/${area.slug}`,
      lastModified: siteUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...posts.map((post) => ({
      url: `${base}/resources/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.55,
    })),
  ];
}

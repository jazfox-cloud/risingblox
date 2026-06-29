import type { MetadataRoute } from "next";
import { games } from "@/content/games";

const baseUrl = "https://risingblox.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/trending", "/about", "/privacy"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-06-13")
  }));

  const gameRoutes = games.flatMap((game) =>
    ["/games", "/codes", "/guides"].map((prefix) => ({
      url: `${baseUrl}${prefix}/${game.slug}`,
      lastModified: new Date(game.lastUpdated)
    }))
  );

  const standaloneGuideRoutes = [
    {
      url: `${baseUrl}/guides/animal-hospital-anomaly`,
      lastModified: new Date("2026-06-27")
    }
  ];

  const standaloneCodeRoutes = [
    {
      url: `${baseUrl}/codes/animal-hospital-anomaly`,
      lastModified: new Date("2026-06-29")
    }
  ];

  return [...staticRoutes, ...gameRoutes, ...standaloneGuideRoutes, ...standaloneCodeRoutes];
}

import type { MetadataRoute } from "next";
import { games } from "@/content/games";

const baseUrl = "https://risingblox.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", lastModified: "2026-07-04" },
    { path: "/trending/", lastModified: "2026-07-04" },
    { path: "/about/", lastModified: "2026-06-13" },
    { path: "/privacy/", lastModified: "2026-06-13" }
  ].map((route) => ({
    url: `${baseUrl}${route.path === "/" ? "/" : route.path}`,
    lastModified: new Date(route.lastModified)
  }));

  const gameRoutes = games.flatMap((game) =>
    ["/games", "/codes", "/guides"].map((prefix) => ({
      url: `${baseUrl}${prefix}/${game.slug}/`,
      lastModified: new Date(game.lastUpdated)
    }))
  );

  const standaloneGuideRoutes = [
    {
      url: `${baseUrl}/games/animal-hospital-anomaly/`,
      lastModified: new Date("2026-07-03")
    },
    {
      url: `${baseUrl}/guides/animal-hospital-anomaly/`,
      lastModified: new Date("2026-06-27")
    }
  ];

  const standaloneCodeRoutes = [
    {
      url: `${baseUrl}/codes/animal-hospital-anomaly/`,
      lastModified: new Date("2026-06-29")
    }
  ];

  return [...staticRoutes, ...gameRoutes, ...standaloneGuideRoutes, ...standaloneCodeRoutes];
}

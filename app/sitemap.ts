import type { MetadataRoute } from "next";

const baseUrl = "https://twoja-fundacja-mediacje.vercel.app";

const routes = [
  "",
  "/mediator-krakow",
  "/mediacje-rodzinne-krakow",
  "/mediacje-karne-krakow",
  "/mediacje-gospodarcze-krakow",
  "/mediacje-online",
  "/cennik",
  "/blog",
  "/en",
  "/uk",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route === "/blog" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/mediator-krakow"
          ? 0.95
          : route === "/mediacje-rodzinne-krakow"
            ? 0.9
            : route === "/mediacje-karne-krakow"
              ? 0.9
              : route === "/cennik"
                ? 0.85
                : route === "/blog"
                  ? 0.8
                  : 0.6,
  }));
}

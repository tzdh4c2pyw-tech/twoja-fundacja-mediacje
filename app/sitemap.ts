import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";

const baseUrl = "https://twoja-fundacja-mediacje.vercel.app";

const staticRoutes = [
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
  const blogRoutes = getBlogPosts("pl").map((post) => `/blog/${post.slug}`);

  const routes = [...staticRoutes, ...blogRoutes];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route === "/blog" || route.startsWith("/blog/")
        ? "weekly"
        : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/mediator-krakow"
          ? 0.95
          : route === "/mediacje-rodzinne-krakow"
            ? 0.9
            : route === "/mediacje-karne-krakow"
              ? 0.9
              : route === "/mediacje-gospodarcze-krakow"
                ? 0.9
                : route === "/mediacje-online"
                  ? 0.88
                  : route === "/cennik"
                    ? 0.85
                    : route === "/blog"
                      ? 0.8
                      : route.startsWith("/blog/")
                        ? 0.72
                        : 0.6,
  }));
}

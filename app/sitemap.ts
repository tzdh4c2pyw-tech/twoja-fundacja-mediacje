import type { MetadataRoute } from "next";
import { absoluteUrl, corePages } from "@/lib/seo";
import { getBlogPosts } from "@/lib/blog";

const seoLandingPages = [
  {
    url: "/mediator-krakow",
    priority: 0.95,
    changeFrequency: "weekly"
  },
  {
    url: "/mediacje-rodzinne-krakow",
    priority: 0.9,
    changeFrequency: "weekly"
  },
  {
    url: "/mediacje-karne-krakow",
    priority: 0.9,
    changeFrequency: "weekly"
  }
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = corePages.map((page) => ({
    url: absoluteUrl(page.url),
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority
  }));

  const landingPages = seoLandingPages.map((page) => ({
    url: absoluteUrl(page.url),
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority
  }));

  const blogPosts = getBlogPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  return [...pages, ...landingPages, ...blogPosts];
}
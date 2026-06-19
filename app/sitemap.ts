import type { MetadataRoute } from "next";
import { absoluteUrl, corePages } from "@/lib/seo";
import { getBlogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = corePages.map((page) => ({
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

  return [...pages, ...blogPosts];
}
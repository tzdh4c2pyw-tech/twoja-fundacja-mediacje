import type { MetadataRoute } from "next";

const baseUrl = "https://www.twojafundacja.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          pl: `${baseUrl}/`,
          en: `${baseUrl}/en`,
          uk: `${baseUrl}/uk`
        }
      }
    },
    {
      url: `${baseUrl}/en`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: {
        languages: {
          pl: `${baseUrl}/`,
          en: `${baseUrl}/en`,
          uk: `${baseUrl}/uk`
        }
      }
    },
    {
      url: `${baseUrl}/uk`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: {
        languages: {
          pl: `${baseUrl}/`,
          en: `${baseUrl}/en`,
          uk: `${baseUrl}/uk`
        }
      }
    },
    {
      url: `${baseUrl}/cennik`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/kwalifikacje`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75
    }
  ];
}
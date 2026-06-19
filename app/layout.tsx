import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingContactWidget from "./components/FloatingContactWidget";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"]
});

const siteUrl = "https://twoja-fundacja-mediacje.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Mediator Kraków | Fundacja Mediacji Sądowej i Pozasądowej | Mediacje online",
    template: "%s | Fundacja Mediacji Sądowej i Pozasądowej"
  },

  description:
    "Mediator sądowy w Krakowie. Mediacje rodzinne, karne, cywilne, gospodarcze i online. Fundacja Mediacji Sądowej i Pozasądowej, ul. Kielecka 2/53, Kraków.",

  keywords: [
    "mediator Kraków",
    "mediacje Kraków",
    "mediator sądowy Kraków",
    "mediacje rodzinne Kraków",
    "mediacje karne Kraków",
    "mediacje cywilne Kraków",
    "mediacje gospodarcze Kraków",
    "mediacje online",
    "mediator online",
    "Fundacja Mediacji Sądowej i Pozasądowej",
    "mediator Rondo Mogilskie",
    "mediator ul. Kielecka Kraków",
    "mediacje sądowe Kraków",
    "mediacje pozasądowe Kraków",
    "court mediator Krakow",
    "mediation in Krakow",
    "online mediation Poland",
    "медіатор у Кракові",
    "медіація у Кракові",
    "онлайн медіація"
  ],

  authors: [
    {
      name: "Fundacja Mediacji Sądowej i Pozasądowej",
      url: siteUrl
    }
  ],

  creator: "Fundacja Mediacji Sądowej i Pozasądowej",
  publisher: "Fundacja Mediacji Sądowej i Pozasądowej",

  alternates: {
    canonical: "/",
    languages: {
      pl: "/",
      en: "/en",
      uk: "/uk",
      "x-default": "/"
    }
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    alternateLocale: ["en_GB", "uk_UA"],
    url: siteUrl,
    siteName: "Fundacja Mediacji Sądowej i Pozasądowej",
    title:
      "Mediator Kraków | Fundacja Mediacji Sądowej i Pozasądowej | Mediacje online",
    description:
      "Mediacje rodzinne, karne, cywilne, gospodarcze i online w Krakowie. Mediator sądowy, ul. Kielecka 2/53, okolice Ronda Mogilskiego.",
    images: [
      {
        url: "/foto/vadym%20rekel.jpg",
        width: 1280,
        height: 1542,
        alt: "Mediator sądowy Kraków — Fundacja Mediacji Sądowej i Pozasądowej"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Mediator Kraków | Fundacja Mediacji Sądowej i Pozasądowej | Mediacje online",
    description:
      "Mediacje rodzinne, karne, cywilne, gospodarcze i online w Krakowie.",
    images: ["/foto/vadym%20rekel.jpg"]
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },

  category: "legal services",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#123c31"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: "Fundacja Mediacji Sądowej i Pozasądowej",
    url: siteUrl,
    telephone: "+48883040483",
    email: "mediacje@twojafundacja.pl",
    image: `${siteUrl}/foto/vadym%20rekel.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Kielecka 2/53",
      postalCode: "31-526",
      addressLocality: "Kraków",
      addressRegion: "Małopolskie",
      addressCountry: "PL"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.0664757,
      longitude: 19.9621993
    },
    areaServed: [
      {
        "@type": "City",
        name: "Kraków"
      },
      {
        "@type": "AdministrativeArea",
        name: "Małopolska"
      },
      {
        "@type": "Country",
        name: "Polska"
      }
    ],
    knowsLanguage: ["pl", "en", "uk"],
    serviceType: [
      "mediacje rodzinne",
      "mediacje karne",
      "mediacje cywilne",
      "mediacje gospodarcze",
      "mediacje online",
      "mediacje sądowe",
      "mediacje pozasądowe",
      "family mediation",
      "criminal mediation",
      "civil mediation",
      "business mediation",
      "online mediation",
      "сімейна медіація",
      "кримінальна медіація",
      "цивільна медіація",
      "господарська медіація",
      "онлайн-медіація"
    ],
    sameAs: []
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Fundacja Mediacji Sądowej i Pozasądowej",
    inLanguage: ["pl", "en", "uk"],
    publisher: {
      "@id": `${siteUrl}/#organization`
    }
  };

  return (
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />

        {children}

        <FloatingContactWidget />
      </body>
    </html>
  );
}
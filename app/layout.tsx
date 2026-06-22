import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mediacje.twojafundacja.pl"),

  title: {
    default: "Mediator sądowy Kraków | Mediacje rodzinne, karne i cywilne",
    template: "%s | Twoja Fundacja Mediacje",
  },

  description:
    "Mediator sądowy w Krakowie. Mediacje rodzinne, karne, cywilne i gospodarcze. Informacje o mediacji, kosztach mediacji i przebiegu postępowania mediacyjnego.",

  applicationName: "Twoja Fundacja Mediacje",

  alternates: {
    canonical: "https://mediacje.twojafundacja.pl",
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://mediacje.twojafundacja.pl",
    siteName: "Twoja Fundacja Mediacje",
    title: "Mediator sądowy Kraków | Twoja Fundacja Mediacje",
    description:
      "Mediacje sądowe i pozasądowe w Krakowie. Mediacje rodzinne, karne, cywilne i gospodarcze.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mediator sądowy Kraków | Twoja Fundacja Mediacje",
    description:
      "Mediacje sądowe i pozasądowe w Krakowie. Mediacje rodzinne, karne, cywilne i gospodarcze.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}

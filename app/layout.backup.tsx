import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import FloatingContactWidget from "@/components/FloatingContactWidget";
import "./globals.css";

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined;

export const metadata: Metadata = {
  metadataBase: new URL("https://twoja-fundacja-mediacje.vercel.app"),
  title: {
    default:
      "Mediator sądowy Kraków | Mediacje rodzinne, karne, cywilne i gospodarcze",
    template: "%s | Mediator sądowy Kraków"
  },
  description:
    "Mediator sądowy w Krakowie. Mediacje rodzinne, karne, cywilne, gospodarcze i online. Kontakt po polsku, angielsku i ukraińsku. Sprawdź cennik i opisz sprawę.",
  alternates: {
    canonical: "/"
  },
  verification: {
    google: googleSiteVerification
  },

  openGraph: {
    title:
      "Mediator sądowy Kraków | Mediacje rodzinne, karne, cywilne i gospodarcze",
    description:
      "Mediator sądowy w Krakowie. Mediacje rodzinne, karne, cywilne, gospodarcze i online. Kontakt po polsku, angielsku i ukraińsku.",
    url: "https://twoja-fundacja-mediacje.vercel.app",
    siteName: "Fundacja Mediacji Sądowej i Pozasądowej",
    locale: "pl_PL",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        {children}
        <FloatingContactWidget />
        <Analytics />
      </body>
    </html>
  );
}

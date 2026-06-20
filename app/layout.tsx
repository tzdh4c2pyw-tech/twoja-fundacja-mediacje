import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://twoja-fundacja-mediacje.vercel.app"),
  title: {
    default: "Mediator sądowy Kraków | Mediacje rodzinne, karne i online",
    template: "%s | Mediator Kraków",
  },
  description:
    "Mediator w Krakowie: mediacje sądowe, rodzinne, karne, cywilne, gospodarcze i online. Sprawdź cennik, zasady mediacji i kontakt.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mediator sądowy Kraków | Mediacje rodzinne, karne i online",
    description:
      "Mediacje w Krakowie i online: rodzinne, karne, cywilne, gospodarcze, sądowe i pozasądowe.",
    url: "https://twoja-fundacja-mediacje.vercel.app",
    siteName: "Mediator Kraków",
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

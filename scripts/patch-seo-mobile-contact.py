from pathlib import Path

seo_path = Path("lib/seo.ts")
layout_path = Path("app/layout.tsx")
widget_path = Path("components/FloatingContactWidget.tsx")
duplicate_widget_path = Path("app/components/FloatingContactWidget.tsx")

seo = seo_path.read_text()
seo = seo.replace(
    'pl: "Mediator sądowy Kraków | Mediacje rodzinne, karne, cywilne i gospodarcze",',
    'pl: "Mediator sądowy Kraków | Mediacje rodzinne, karne, cywilne i gospodarcze",'
)
seo = seo.replace(
    'pl: "Mediator sądowy w Krakowie. Mediacje rodzinne, karne, cywilne, gospodarcze i online. Fundacja Mediacji Sądowej i Pozasądowej, ul. Kielecka 2/53.",',
    'pl: "Mediator sądowy w Krakowie. Mediacje rodzinne, karne, cywilne, gospodarcze i online. Kontakt po polsku, angielsku i ukraińsku. Sprawdź cennik i opisz sprawę.",'
)
seo_path.write_text(seo)

layout = '''import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import FloatingContactWidget from "@/components/FloatingContactWidget";
import "./globals.css";

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
'''
layout_path.write_text(layout)

widget = '''"use client";

const phone = "883 040 483";
const phoneHref = "+48883040483";
const email = "mediacje@twojafundacja.pl";

const whatsappHref =
  "https://wa.me/48883040483?text=Dzie%C5%84%20dobry%2C%20chcia%C5%82bym%2Fchcia%C5%82abym%20opisa%C4%87%20spraw%C4%99%20do%20mediacji.";

const mailtoHref =
  "mailto:mediacje@twojafundacja.pl?subject=Opis%20sprawy%20do%20mediacji&body=Dzie%C5%84%20dobry,%0A%0AChcia%C5%82bym%2Fchcia%C5%82abym%20opisa%C4%87%20spraw%C4%99%20do%20mediacji.%0A%0ARodzaj%20sprawy:%20%0ALiczba%20stron:%20%0ACzy%20sprawa%20jest%20w%20s%C4%85dzie%2Fprokuraturze%2FPolicji:%20%0ACzy%20sprawa%20zosta%C5%82a%20skierowana%20do%20mediacji:%20%0APreferowany%20tryb%20kontaktu:%20%0AKr%C3%B3tki%20opis%20sprawy:%20%0A%0A";

export default function FloatingContactWidget() {
  return (
    <>
      <nav
        className="mobile-contact-bar"
        aria-label="Szybki kontakt z mediatorem"
      >
        <a href={`tel:${phoneHref}`} aria-label={`Zadzwoń: ${phone}`}>
          <strong>Zadzwoń</strong>
          <span>{phone}</span>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Napisz przez WhatsApp"
        >
          <strong>WhatsApp</strong>
          <span>Szybki kontakt</span>
        </a>

        <a href={mailtoHref} aria-label={`Wyślij opis sprawy na ${email}`}>
          <strong>Opisz sprawę</strong>
          <span>E-mail</span>
        </a>

        <a href="/cennik" aria-label="Sprawdź cennik mediacji">
          <strong>Cennik</strong>
          <span>Kalkulator</span>
        </a>
      </nav>

      <style jsx>{`
        .mobile-contact-bar {
          position: fixed;
          left: 12px;
          right: 12px;
          bottom: 12px;
          z-index: 9999;
          display: none;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 6px;
          padding: 8px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 20px;
          background: rgba(18, 31, 39, 0.94);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(18px);
        }

        .mobile-contact-bar a {
          min-height: 58px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          padding: 8px 4px;
          border-radius: 14px;
          color: #ffffff;
          text-decoration: none;
          text-align: center;
          background: rgba(255, 255, 255, 0.08);
        }

        .mobile-contact-bar a:first-child {
          background: #c9a45c;
          color: #10212b;
        }

        .mobile-contact-bar strong {
          font-size: 11px;
          font-weight: 800;
          line-height: 1.1;
        }

        .mobile-contact-bar span {
          font-size: 9px;
          line-height: 1.1;
          opacity: 0.86;
        }

        @media (max-width: 820px) {
          .mobile-contact-bar {
            display: grid;
          }

          body {
            padding-bottom: 96px;
          }
        }
      `}</style>
    </>
  );
}
'''
widget_path.write_text(widget)

if duplicate_widget_path.exists():
    duplicate_widget_path.unlink()

print("OK: SEO metadata and mobile contact bar patched.")

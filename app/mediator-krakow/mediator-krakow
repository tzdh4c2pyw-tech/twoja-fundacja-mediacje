import type { Metadata } from "next";
import {
  localBusinessJsonLd,
  siteUrl,
  websiteJsonLd
} from "@/lib/seo";

const phone = "883 040 483";
const phoneHref = "+48883040483";
const email = "mediacje@twojafundacja.pl";

export const metadata: Metadata = {
  title: "Mediator Kraków | Mediator sądowy i mediacje online",
  description:
    "Mediator w Krakowie. Mediacje sądowe i pozasądowe: rodzinne, karne, cywilne, gospodarcze i online. Fundacja Mediacji Sądowej i Pozasądowej, ul. Kielecka 2/53.",
  keywords: [
    "mediator Kraków",
    "mediator sądowy Kraków",
    "mediacje Kraków",
    "mediacje online Kraków",
    "mediacje rodzinne Kraków",
    "mediacje karne Kraków",
    "mediacje cywilne Kraków",
    "mediacje gospodarcze Kraków",
    "Fundacja Mediacji Sądowej i Pozasądowej"
  ],
  alternates: {
    canonical: "/mediator-krakow"
  },
  openGraph: {
    title: "Mediator Kraków | Mediator sądowy i mediacje online",
    description:
      "Mediator sądowy w Krakowie. Mediacje rodzinne, karne, cywilne, gospodarcze i online.",
    url: `${siteUrl}/mediator-krakow`,
    type: "website",
    siteName: "Fundacja Mediacji Sądowej i Pozasądowej",
    locale: "pl_PL"
  }
};

const faqItems = [
  {
    question: "Kiedy warto skontaktować się z mediatorem w Krakowie?",
    answer:
      "Warto skontaktować się z mediatorem, gdy konflikt dotyczy spraw rodzinnych, cywilnych, gospodarczych, karnych lub organizacyjnych, a strony chcą sprawdzić możliwość rozmowy i porozumienia."
  },
  {
    question: "Czy mediator w Krakowie może prowadzić mediację online?",
    answer:
      "Tak. W części spraw możliwa jest mediacja online albo wstępny kontakt zdalny. Zależy to od rodzaju sprawy, zgody stron i warunków organizacyjnych."
  },
  {
    question: "Czy mediator rozstrzyga spór?",
    answer:
      "Nie. Mediator nie jest sędzią i nie wydaje decyzji. Pomaga stronom rozmawiać, porządkować kwestie sporne i szukać możliwego rozwiązania."
  },
  {
    question: "Czy mediacja jest poufna?",
    answer:
      "Tak. Poufność jest jedną z podstawowych zasad mediacji i sprzyja spokojniejszej rozmowie o konflikcie."
  },
  {
    question: "Gdzie odbywają się mediacje w Krakowie?",
    answer:
      "Fundacja Mediacji Sądowej i Pozasądowej działa przy ul. Kieleckiej 2/53 w Krakowie, w okolicy Ronda Mogilskiego."
  }
];

function SectionHeading({
  label,
  title,
  text
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default function MediatorKrakowPage() {
  const localBusinessSchema = localBusinessJsonLd();
  const websiteSchema = websiteJsonLd();

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mediator Kraków",
    serviceType: "Mediacje sądowe i pozasądowe",
    provider: {
      "@id": `${siteUrl}/#organization`
    },
    areaServed: {
      "@type": "City",
      name: "Kraków"
    },
    url: `${siteUrl}/mediator-krakow`,
    availableLanguage: ["Polish", "Ukrainian", "English"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema)
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <div className="topbar">
        <nav className="nav">
          <a className="brand" href="/" aria-label="Strona główna">
            <span className="brand-mark">FM</span>
            <span>
              <span className="brand-title">
                Fundacja Mediacji Sądowej i Pozasądowej
              </span>
              <span className="brand-subtitle">
                Mediator sądowy · Kraków · mediacje online
              </span>
            </span>
          </a>

          <div className="nav-links">
            <a href="/">Strona główna</a>
            <a href="/cennik">Cennik</a>
            <a href="/blog">Blog</a>
            <a href="/kwalifikacje">Kwalifikacje</a>
            <a href="#kontakt">Kontakt</a>
            <a className="nav-phone" href={`tel:${phoneHref}`}>
              {phone}
            </a>
          </div>
        </nav>
      </div>

      <section className="hero hero-premium">
        <div className="hero-main">
          <span className="eyebrow">
            Mediator Kraków · mediacje sądowe i pozasądowe
          </span>

          <h1>Mediator w Krakowie.</h1>

          <p className="lead">
            Fundacja Mediacji Sądowej i Pozasądowej prowadzi mediacje w
            Krakowie: rodzinne, karne, cywilne, gospodarcze oraz online. To
            poufna i uporządkowana rozmowa, której celem jest zmniejszenie
            konfliktu i sprawdzenie możliwości porozumienia.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${phoneHref}`}>
              Zadzwoń do mediatora
            </a>
            <a className="button button-secondary" href={`mailto:${email}`}>
              Wyślij opis sprawy
            </a>
            <a className="button button-secondary" href="/cennik">
              Sprawdź cennik
            </a>
            <a className="button button-secondary" href="/kwalifikacje">
              Kwalifikacje
            </a>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>Kraków</strong>
              <span>ul. Kielecka 2/53</span>
            </div>
            <div>
              <strong>Mediacje karne</strong>
              <span>0 zł dla stron postępowania</span>
            </div>
            <div>
              <strong>Języki</strong>
              <span>polski, ukraiński, angielski</span>
            </div>
          </div>
        </div>

        <aside className="hero-side">
          <figure className="portrait">
            <img
              src="/foto/vadym%20rekel.jpg"
              alt="Mediator Kraków Vadym Rekel"
            />
          </figure>

          <div className="hero-badge">
            <strong>Centrum mediacji w Krakowie</strong>
            <span>
              Mediacje sądowe i pozasądowe · Rondo Mogilskie · kontakt
              stacjonarny i online.
            </span>
          </div>
        </aside>
      </section>

      <section className="section">
        <SectionHeading
          label="Dla kogo"
          title="Kiedy warto skorzystać z mediatora w Krakowie?"
          text="Mediator pomaga wtedy, gdy zwykła rozmowa stron przestała działać, ale nadal istnieje potrzeba ustalenia zasad, rozliczeń, kontaktu lub sposobu zakończenia sporu."
        />

        <div className="grid-3">
          <article className="card card-gold">
            <span className="tag">Rodzina</span>
            <h3>Mediacje rodzinne</h3>
            <p>
              Rozwód, separacja, kontakty z dzieckiem, alimenty, opieka,
              komunikacja rodzicielska i porozumienia dotyczące codziennej
              organizacji życia rodziny.
            </p>
            <a className="card-link" href="/mediacje-rodzinne-krakow">
              Mediacje rodzinne Kraków →
            </a>
          </article>

          <article className="card card-dark">
            <span className="tag">Karne</span>
            <h3>Mediacje karne</h3>
            <p>
              Rozmowa pokrzywdzonego i sprawcy, naprawienie szkody,
              zadośćuczynienie, przeprosiny i ustalenie warunków możliwego
              porozumienia.
            </p>
            <a className="card-link" href="/mediacje-karne-krakow">
              Mediacje karne Kraków →
            </a>
          </article>

          <article className="card">
            <span className="tag">Cywilne i gospodarcze</span>
            <h3>Spory prywatne i biznesowe</h3>
            <p>
              Sprawy o zapłatę, umowy, rozliczenia, spory między
              przedsiębiorcami, zakończenie współpracy i ustalenia ugodowe.
            </p>
            <a className="card-link" href="/cennik">
              Koszty mediacji →
            </a>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Proces"
          title="Jak wygląda kontakt z mediatorem?"
          text="Pierwszy kontakt nie wymaga pełnej dokumentacji. Wystarczy krótki opis sprawy i informacja, czego dotyczy konflikt."
        />

        <div className="grid-4 process">
          <article className="card process-card">
            <h3>1. Opis sprawy</h3>
            <p>
              Podajesz rodzaj sprawy, liczbę stron, etap postępowania i
              informację, czy sprawa jest już w sądzie.
            </p>
          </article>

          <article className="card process-card">
            <h3>2. Wstępna kwalifikacja</h3>
            <p>
              Ustalany jest możliwy tryb mediacji: rodzinny, karny, cywilny,
              gospodarczy, sądowy, pozasądowy albo online.
            </p>
          </article>

          <article className="card process-card">
            <h3>3. Organizacja spotkania</h3>
            <p>
              Ustalany jest termin, forma rozmowy, sposób kontaktu ze stronami i
              podstawowe zasady mediacji.
            </p>
          </article>

          <article className="card process-card">
            <h3>4. Rozmowa i ustalenia</h3>
            <p>
              Strony pracują nad możliwym rozwiązaniem. Jeżeli dojdzie do
              porozumienia, może powstać ugoda mediacyjna.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Lokalizacja"
          title="Mediator Kraków — ul. Kielecka 2/53."
          text="Siedziba Fundacji znajduje się w Krakowie, w okolicy Ronda Mogilskiego, około 600 metrów od Sądu Okręgowego przy ul. Przy Rondzie 7."
        />

        <div className="location-rich">
          <div className="location-copy">
            <p>
              Lokalizacja przy <strong>ul. Kieleckiej 2/53</strong> jest
              dogodna dla osób poszukujących mediatora w centrum Krakowa,
              szczególnie w sprawach sądowych, rodzinnych, karnych, cywilnych i
              gospodarczych.
            </p>

            <p>
              Spotkanie z mediatorem może odbyć się stacjonarnie, a w części
              spraw możliwy jest także kontakt online. Forma zależy od rodzaju
              sprawy, zgody stron i warunków organizacyjnych.
            </p>

            <div className="location-advantages">
              <div className="location-advantage">Rondo Mogilskie</div>
              <div className="location-advantage">
                Około 600 m od Sądu Okręgowego
              </div>
              <div className="location-advantage">
                Mediacje po polsku, ukraińsku i angielsku
              </div>
              <div className="location-advantage">
                Możliwość kontaktu online
              </div>
            </div>
          </div>

          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10244.231941308924!2d19.9621993!3d50.0664757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b57a3e08b9d%3A0xf4ed3bbeb098c39!2sFundacja%20Mediacji%20Sądowej%20i%20Pozasądowej!5e0!3m2!1spl!2spl!4v1701936419454!5m2!1spl!2spl"
              loading="lazy"
              title="Mediator Kraków — lokalizacja Fundacji"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="FAQ"
          title="Najczęstsze pytania o mediatora w Krakowie."
          text="Krótko o poufności, mediacji online, kosztach, roli mediatora i przygotowaniu do pierwszego kontaktu."
        />

        <div className="faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section" id="kontakt">
        <div className="contact-panel">
          <div>
            <p className="section-label">Kontakt</p>
            <h2>Skontaktuj się z mediatorem w Krakowie.</h2>
            <p>
              W wiadomości podaj rodzaj sprawy, liczbę stron, etap postępowania
              i informację, czy sprawa jest sądowa, pozasądowa albo wymaga
              wstępnej konsultacji.
            </p>
          </div>

          <div className="contact-box">
            <span className="contact-line">
              <strong>Telefon:</strong>{" "}
              <a href={`tel:${phoneHref}`}>{phone}</a>
            </span>
            <span className="contact-line">
              <strong>E-mail:</strong> <a href={`mailto:${email}`}>{email}</a>
            </span>
            <span className="contact-line">
              <strong>Adres:</strong> ul. Kielecka 2/53, 31-526 Kraków
            </span>

            <div className="hero-actions">
              <a className="button button-secondary" href={`tel:${phoneHref}`}>
                Zadzwoń
              </a>
              <a className="button button-secondary" href={`mailto:${email}`}>
                Wyślij e-mail
              </a>
              <a className="button button-secondary" href="/cennik">
                Cennik mediacji
              </a>
              <a className="button button-secondary" href="/blog">
                Blog
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
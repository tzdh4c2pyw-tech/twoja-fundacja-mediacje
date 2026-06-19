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
  title: "Mediacje karne Kraków | Mediacja karna bezpłatna dla stron",
  description:
    "Mediacje karne w Krakowie. Fundacja wpisana do wykazu instytucji uprawnionych do prowadzenia mediacji w sprawach karnych. Koszty mediacji karnej ponosi Skarb Państwa.",
  keywords: [
    "mediacje karne Kraków",
    "mediator karny Kraków",
    "mediacja karna bezpłatna",
    "czy mediacja karna jest bezpłatna",
    "pokrzywdzony i sprawca mediacja",
    "naprawienie szkody mediacja karna",
    "mediator sądowy Kraków"
  ],
  alternates: {
    canonical: "/mediacje-karne-krakow"
  },
  openGraph: {
    title: "Mediacje karne Kraków | 0 zł dla stron",
    description:
      "Mediacje karne w Krakowie. Rozmowa pokrzywdzonego i sprawcy, naprawienie szkody, przeprosiny i porozumienie.",
    url: `${siteUrl}/mediacje-karne-krakow`,
    type: "website",
    siteName: "Fundacja Mediacji Sądowej i Pozasądowej",
    locale: "pl_PL"
  }
};

const faqItems = [
  {
    question: "Czy mediacja karna jest bezpłatna dla stron?",
    answer:
      "Tak. W sprawach karnych koszty mediacji ponosi Skarb Państwa. Strony nie płacą mediatorowi za udział w mediacji karnej."
  },
  {
    question: "Czego dotyczy mediacja karna?",
    answer:
      "Może dotyczyć skutków czynu, naprawienia szkody, zadośćuczynienia, przeprosin, odpowiedzialności i zasad dalszego postępowania między stronami."
  },
  {
    question: "Czy mediator decyduje o winie?",
    answer:
      "Nie. Mediator nie rozstrzyga o winie, nie wydaje decyzji i nie zastępuje sądu, prokuratora ani obrońcy."
  },
  {
    question: "Czy pokrzywdzony musi spotkać się ze sprawcą?",
    answer:
      "Forma mediacji zależy od sprawy, zgody stron i warunków organizacyjnych. Mediator powinien zadbać o bezpieczny i uporządkowany przebieg rozmowy."
  },
  {
    question: "Czy mediacja karna zawsze kończy się ugodą?",
    answer:
      "Nie. Może zakończyć się porozumieniem, częściowymi ustaleniami albo brakiem porozumienia."
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

export default function MediacjeKarneKrakowPage() {
  const localBusinessSchema = localBusinessJsonLd();
  const websiteSchema = websiteJsonLd();

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mediacje karne Kraków",
    serviceType: "Mediacja karna",
    provider: {
      "@id": `${siteUrl}/#organization`
    },
    areaServed: {
      "@type": "City",
      name: "Kraków"
    },
    url: `${siteUrl}/mediacje-karne-krakow`,
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
                Mediacje karne · Kraków · 0 zł dla stron
              </span>
            </span>
          </a>

          <div className="nav-links">
            <a href="/">Strona główna</a>
            <a href="/mediator-krakow">Mediator Kraków</a>
            <a href="/cennik">Cennik</a>
            <a href="/blog">Blog</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </nav>
      </div>

      <section className="hero hero-premium">
        <div className="hero-main">
          <span className="eyebrow">
            Mediacje karne Kraków · pokrzywdzony i sprawca
          </span>

          <h1>Mediacje karne w Krakowie.</h1>

          <p className="lead">
            Fundacja Mediacji Sądowej i Pozasądowej jest wpisana do wykazu
            instytucji uprawnionych do prowadzenia mediacji w sprawach karnych.
            Mediacja karna może dotyczyć rozmowy pokrzywdzonego i sprawcy,
            naprawienia szkody, przeprosin, zadośćuczynienia i warunków
            porozumienia.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${phoneHref}`}>
              Zapytaj o mediację karną
            </a>
            <a className="button button-secondary" href={`mailto:${email}`}>
              Wyślij opis sprawy
            </a>
            <a
              className="button button-secondary"
              href="/blog/czy-mediacja-karna-jest-bezplatna-dla-stron"
            >
              Czytaj o kosztach
            </a>
            <a className="button button-secondary" href="/cennik">
              Cennik
            </a>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>0 zł dla stron</strong>
              <span>koszty ponosi Skarb Państwa</span>
            </div>
            <div>
              <strong>Wpis do wykazu</strong>
              <span>instytucja uprawniona</span>
            </div>
            <div>
              <strong>Kraków</strong>
              <span>ul. Kielecka 2/53</span>
            </div>
          </div>
        </div>

        <aside className="hero-side">
          <figure className="portrait">
            <img
              src="/foto/vadym%20rekel.jpg"
              alt="Mediator karny Kraków Vadym Rekel"
            />
          </figure>

          <div className="hero-badge">
            <strong>Mediacje karne</strong>
            <span>
              Poufna i uporządkowana rozmowa w sprawach karnych — bez kosztów
              dla stron postępowania.
            </span>
          </div>
        </aside>
      </section>

      <section className="section">
        <SectionHeading
          label="Cel"
          title="Po co prowadzi się mediację karną?"
          text="Mediacja karna nie zastępuje sądu. Daje jednak stronom możliwość rozmowy o skutkach czynu i możliwym sposobie naprawienia szkody."
        />

        <div className="grid-3">
          <article className="card card-gold">
            <span className="tag">Pokrzywdzony</span>
            <h3>Nazwanie skutków czynu</h3>
            <p>
              Pokrzywdzony może przedstawić skutki zdarzenia, swoje oczekiwania
              i warunki, które uważa za istotne dla możliwego porozumienia.
            </p>
          </article>

          <article className="card">
            <span className="tag">Sprawca</span>
            <h3>Odpowiedzialność i naprawienie szkody</h3>
            <p>
              Sprawca może odnieść się do skutków czynu, zaproponować sposób
              naprawienia szkody, przeprosiny albo inne formy zadośćuczynienia.
            </p>
          </article>

          <article className="card card-dark">
            <span className="tag">Porozumienie</span>
            <h3>Ustalenia możliwe do wykonania</h3>
            <p>
              Mediacja może zakończyć się porozumieniem obejmującym konkretne
              działania, terminy, kwoty lub zasady dalszego kontaktu.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Koszty"
          title="Mediacja karna jest bezpłatna dla stron."
          text="W sprawach karnych koszt mediacji nie obciąża pokrzywdzonego ani sprawcy. Wynagrodzenie mediatora i zwrot wydatków ponosi Skarb Państwa."
        />

        <div className="grid-3">
          <article className="card card-gold">
            <span className="tag">Pokrzywdzony</span>
            <h3>Nie płaci za mediację</h3>
            <p>
              Pokrzywdzony nie ponosi kosztu wynagrodzenia mediatora w sprawie
              karnej.
            </p>
          </article>

          <article className="card card-gold">
            <span className="tag">Sprawca</span>
            <h3>Nie płaci za mediację</h3>
            <p>
              Sprawca również nie ponosi kosztów mediacji karnej jako strona
              postępowania.
            </p>
          </article>

          <article className="card">
            <span className="tag">Skarb Państwa</span>
            <h3>Pokrycie kosztów</h3>
            <p>
              Koszty postępowania mediacyjnego w sprawach karnych ponosi Skarb
              Państwa.
            </p>
            <a
              className="card-link"
              href="/blog/czy-mediacja-karna-jest-bezplatna-dla-stron"
            >
              Czytaj więcej →
            </a>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Proces"
          title="Jak wygląda mediacja karna?"
          text="Mediacja karna wymaga ostrożności, neutralności i jasnych zasad rozmowy."
        />

        <div className="grid-4 process">
          <article className="card process-card">
            <h3>1. Skierowanie lub kontakt</h3>
            <p>
              Sprawa może trafić do mediacji w związku z postępowaniem karnym
              albo po kontakcie organizacyjnym.
            </p>
          </article>

          <article className="card process-card">
            <h3>2. Wyjaśnienie zasad</h3>
            <p>
              Mediator wyjaśnia poufność, dobrowolność, swoją bezstronność i
              cel mediacji.
            </p>
          </article>

          <article className="card process-card">
            <h3>3. Rozmowa stron</h3>
            <p>
              Rozmowa może dotyczyć skutków czynu, naprawienia szkody,
              przeprosin i możliwych ustaleń.
            </p>
          </article>

          <article className="card process-card">
            <h3>4. Wynik mediacji</h3>
            <p>
              Mediacja może zakończyć się porozumieniem, częściowymi ustaleniami
              albo brakiem porozumienia.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="FAQ"
          title="Najczęstsze pytania o mediacje karne."
          text="Krótko o kosztach, roli mediatora, odpowiedzialności i możliwym przebiegu rozmowy."
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
            <h2>Zapytaj o mediację karną w Krakowie.</h2>
            <p>
              W wiadomości podaj, czy sprawa została skierowana do mediacji, na
              jakim jest etapie i jakiego rodzaju kontakt jest potrzebny.
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
                Cennik
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
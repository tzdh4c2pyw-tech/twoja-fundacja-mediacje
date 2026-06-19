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
  title: "Mediacje rodzinne Kraków | Mediator rodzinny Kraków",
  description:
    "Mediacje rodzinne w Krakowie: rozwód, separacja, kontakty z dzieckiem, alimenty, opieka i porozumienie rodzicielskie. Fundacja Mediacji Sądowej i Pozasądowej.",
  keywords: [
    "mediacje rodzinne Kraków",
    "mediator rodzinny Kraków",
    "mediacje rozwodowe Kraków",
    "kontakty z dzieckiem mediacja Kraków",
    "alimenty mediacja Kraków",
    "porozumienie rodzicielskie Kraków",
    "mediator sądowy Kraków"
  ],
  alternates: {
    canonical: "/mediacje-rodzinne-krakow"
  },
  openGraph: {
    title: "Mediacje rodzinne Kraków | Mediator rodzinny Kraków",
    description:
      "Mediacje rodzinne w Krakowie: rozwód, kontakty z dzieckiem, alimenty, opieka i porozumienia rodzinne.",
    url: `${siteUrl}/mediacje-rodzinne-krakow`,
    type: "website",
    siteName: "Fundacja Mediacji Sądowej i Pozasądowej",
    locale: "pl_PL"
  }
};

const faqItems = [
  {
    question: "Czego mogą dotyczyć mediacje rodzinne?",
    answer:
      "Mediacje rodzinne mogą dotyczyć rozwodu, separacji, kontaktów z dzieckiem, alimentów, opieki, kosztów utrzymania dziecka, wakacji, świąt i komunikacji między rodzicami."
  },
  {
    question: "Czy mediator rodzinny decyduje o kontaktach z dzieckiem?",
    answer:
      "Nie. Mediator nie wydaje decyzji. Pomaga stronom rozmawiać i porządkować możliwe ustalenia."
  },
  {
    question: "Czy mediacje rodzinne mogą odbyć się online?",
    answer:
      "Tak, jeżeli strony wyrażają zgodę i sprawa nadaje się do takiej formy organizacyjnej."
  },
  {
    question: "Czy mediacja rodzinna jest terapią?",
    answer:
      "Nie. Mediacja rodzinna nie jest terapią. Jej celem jest rozmowa o konkretnych ustaleniach i możliwym porozumieniu."
  },
  {
    question: "Co przygotować przed mediacją rodzinną?",
    answer:
      "Warto przygotować listę tematów, podstawowe daty, informacje o dzieciach, harmonogramach, kosztach i najważniejszych potrzebach rodziny."
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

export default function MediacjeRodzinneKrakowPage() {
  const localBusinessSchema = localBusinessJsonLd();
  const websiteSchema = websiteJsonLd();

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mediacje rodzinne Kraków",
    serviceType: "Mediacja rodzinna",
    provider: {
      "@id": `${siteUrl}/#organization`
    },
    areaServed: {
      "@type": "City",
      name: "Kraków"
    },
    url: `${siteUrl}/mediacje-rodzinne-krakow`,
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
                Mediacje rodzinne · Kraków · mediator sądowy
              </span>
            </span>
          </a>

          <div className="nav-links">
            <a href="/">Strona główna</a>
            <a href="/mediator-krakow">Mediator Kraków</a>
            <a href="/cennik">Cennik</a>
            <a href="/blog">Blog</a>
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
            Mediacje rodzinne Kraków · rozwód · kontakty · alimenty
          </span>

          <h1>Mediacje rodzinne w Krakowie.</h1>

          <p className="lead">
            Mediacje rodzinne pomagają uporządkować rozmowę o dzieciach,
            kontaktach, alimentach, opiece, kosztach i sprawach organizacyjnych
            po rozstaniu. Celem jest spokojna rozmowa, konkretne ustalenia i
            ograniczenie eskalacji konfliktu.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${phoneHref}`}>
              Umów mediację rodzinną
            </a>
            <a className="button button-secondary" href={`mailto:${email}`}>
              Wyślij opis sprawy
            </a>
            <a className="button button-secondary" href="/cennik">
              Sprawdź cennik
            </a>
            <a
              className="button button-secondary"
              href="/blog/mediacje-rodzinne-w-krakowie-kiedy-warto"
            >
              Czytaj artykuł
            </a>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>Rozwód i separacja</strong>
              <span>rozmowa o sprawach rodzinnych</span>
            </div>
            <div>
              <strong>Dzieci</strong>
              <span>kontakty, opieka, komunikacja</span>
            </div>
            <div>
              <strong>Kraków i online</strong>
              <span>kontakt stacjonarny lub zdalny</span>
            </div>
          </div>
        </div>

        <aside className="hero-side">
          <figure className="portrait">
            <img
              src="/foto/vadym%20rekel.jpg"
              alt="Mediator rodzinny Kraków Vadym Rekel"
            />
          </figure>

          <div className="hero-badge">
            <strong>Mediacje rodzinne</strong>
            <span>
              Spokojna struktura rozmowy w sprawach rodzinnych, rodzicielskich i
              okołorozwodowych.
            </span>
          </div>
        </aside>
      </section>

      <section className="section">
        <SectionHeading
          label="Zakres"
          title="W jakich sprawach pomaga mediacja rodzinna?"
          text="Mediacja rodzinna koncentruje się na praktycznych ustaleniach, które mają działać w codziennym życiu stron i dzieci."
        />

        <div className="grid-3">
          <article className="card card-gold">
            <span className="tag">Rodzice</span>
            <h3>Kontakty z dzieckiem</h3>
            <p>
              Harmonogram kontaktów, weekendy, wakacje, ferie, święta, miejsce
              odbioru dziecka, kontakt telefoniczny i zasady zmian planu.
            </p>
          </article>

          <article className="card">
            <span className="tag">Finanse</span>
            <h3>Alimenty i koszty</h3>
            <p>
              Rozmowa o kosztach utrzymania dziecka, wydatkach stałych,
              nadzwyczajnych, terminach płatności i sposobie rozliczeń.
            </p>
          </article>

          <article className="card card-dark">
            <span className="tag">Rozstanie</span>
            <h3>Rozwód i separacja</h3>
            <p>
              Ustalenia dotyczące organizacji życia po rozstaniu, komunikacji
              rodzicielskiej i spraw okołorozwodowych.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Praktyka"
          title="Dlaczego konkretne ustalenia są tak ważne?"
          text="W sprawach rodzinnych ogólne deklaracje często nie wystarczają. Potrzebne są zasady, które można zastosować w codziennym życiu."
        />

        <div className="grid-3">
          <article className="card">
            <span className="tag">Harmonogram</span>
            <h3>Plan kontaktów</h3>
            <p>
              Dobre porozumienie powinno wskazywać dni, godziny, miejsce
              odbioru i zasady postępowania w razie choroby, wyjazdu albo
              zmiany planu.
            </p>
          </article>

          <article className="card">
            <span className="tag">Komunikacja</span>
            <h3>Zasady kontaktu rodziców</h3>
            <p>
              W mediacji można ustalić, jak rodzice będą wymieniać informacje o
              dziecku, szkole, zdrowiu, zajęciach i sprawach bieżących.
            </p>
          </article>

          <article className="card">
            <span className="tag">Bezpieczeństwo</span>
            <h3>Mniej napięcia</h3>
            <p>
              Jasne ustalenia zmniejszają liczbę nieporozumień i pomagają
              ograniczyć sytuacje, w których dziecko staje się świadkiem
              konfliktu dorosłych.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Proces"
          title="Jak wygląda mediacja rodzinna?"
          text="Mediacja rodzinna zwykle zaczyna się od krótkiego opisu sprawy i ustalenia, jakie tematy wymagają rozmowy."
        />

        <div className="grid-4 process">
          <article className="card process-card">
            <h3>1. Kontakt</h3>
            <p>
              Przekazujesz krótki opis sprawy, liczbę uczestników i informację,
              czy sprawa jest już w sądzie.
            </p>
          </article>

          <article className="card process-card">
            <h3>2. Tematy</h3>
            <p>
              Ustalane są główne kwestie: dzieci, kontakty, alimenty, koszty,
              komunikacja albo inne sprawy rodzinne.
            </p>
          </article>

          <article className="card process-card">
            <h3>3. Spotkanie</h3>
            <p>
              Mediator prowadzi rozmowę tak, aby strony mogły spokojnie
              przedstawić swoje potrzeby i propozycje.
            </p>
          </article>

          <article className="card process-card">
            <h3>4. Ustalenia</h3>
            <p>
              Jeżeli strony osiągną porozumienie, możliwe jest spisanie ustaleń
              albo ugody mediacyjnej.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="FAQ"
          title="Najczęstsze pytania o mediacje rodzinne."
          text="Krótko o kontaktach z dzieckiem, alimentach, roli mediatora i przygotowaniu do rozmowy."
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
            <h2>Zapytaj o mediację rodzinną w Krakowie.</h2>
            <p>
              W wiadomości podaj, czy sprawa dotyczy kontaktów, alimentów,
              opieki, rozwodu, separacji albo innych ustaleń rodzinnych.
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
import type { Metadata } from "next";
import {
  localBusinessJsonLd,
  seoDescriptions,
  seoKeywords,
  seoTitles,
  siteUrl,
  websiteJsonLd
} from "@/lib/seo";

export const metadata: Metadata = {
  title: seoTitles.pl,
  description: seoDescriptions.pl,
  keywords: seoKeywords.pl,

  verification: {
    google: "IRGY-E1KJFL1eUQihR952TtnvoTINcS0GzMSq0XJbfQ"
  },

  alternates: {
    canonical: "/",
    languages: {
      "pl-PL": "/",
      en: "/en",
      uk: "/uk",
      "x-default": "/"
    }
  },

  openGraph: {
    title: seoTitles.pl,
    description: seoDescriptions.pl,
    url: siteUrl,
    type: "website",
    siteName: "Fundacja Mediacji Sądowej i Pozasądowej",
    locale: "pl_PL"
  },

  twitter: {
    card: "summary_large_image",
    title: seoTitles.pl,
    description: seoDescriptions.pl
  }
};

const phone = "883 040 483";
const phoneHref = "+48883040483";
const email = "mediacje@twojafundacja.pl";

const languageLinks = [
  { label: "PL", href: "/" },
  { label: "EN", href: "/en" },
  { label: "UA", href: "/uk" }
];

const mediationTypes = [
  {
    title: "Mediacje rodzinne",
    text: "Rozwód, separacja, kontakty z dzieckiem, alimenty, opieka, komunikacja rodzicielska i porozumienia rodzinne.",
    href: "#rodzinne",
    className: "card card-petrol bento-large"
  },
  {
    title: "Mediacje karne",
    text: "Rozmowa pokrzywdzonego i sprawcy, naprawienie szkody, zadośćuczynienie, przeprosiny i warunki porozumienia.",
    href: "#karne",
    className: "card card-dark bento-large"
  },
  {
    title: "Mediacje cywilne",
    text: "Spory prywatne, zobowiązania, rozliczenia, sprawy sąsiedzkie, umowy i konflikty majątkowe.",
    href: "#cywilne",
    className: "card"
  },
  {
    title: "Mediacje gospodarcze",
    text: "Spory między przedsiębiorcami, płatności, umowy, odpowiedzialność, negocjacje i propozycje ugodowe.",
    href: "#gospodarcze",
    className: "card"
  },
  {
    title: "Mediacje online",
    text: "Wstępna konsultacja, opis sprawy, kontakt zdalny i mediacja online, jeżeli charakter sprawy na to pozwala.",
    href: "#online",
    className: "card card-gold"
  }
];

const processSteps = [
  {
    title: "Opis sprawy",
    text: "Przekazujesz krótki opis konfliktu, liczbę stron, etap sprawy i informację, czy mediacja ma być sądowa, pozasądowa albo online."
  },
  {
    title: "Ustalenie trybu",
    text: "Mediator ustala organizacyjnie, czy sprawa dotyczy mediacji rodzinnej, karnej, cywilnej, gospodarczej lub zdalnej."
  },
  {
    title: "Kontakt ze stronami",
    text: "Ustalane są zasady kontaktu, możliwość udziału stron, termin spotkania i forma prowadzenia mediacji."
  },
  {
    title: "Ugoda albo zakończenie",
    text: "Strony pracują nad rozwiązaniem. Jeżeli dojdzie do porozumienia, możliwe jest przygotowanie ugody mediacyjnej."
  }
];

const qualificationCards = [
  {
    title: "Stały mediator",
    label: "Sąd Okręgowy w Krakowie",
    text: "Wpis na listę stałych mediatorów prowadzoną przez Prezesa Sądu Okręgowego w Krakowie.",
    href: "/foto/decyzja-wpis-lista-stalych-mediatorow-vadym-rekel-sad-okregowy-krakow-2018.pdf"
  },
  {
    title: "Mediacje karne",
    label: "Wpis Fundacji do wykazu",
    text: "Fundacja wpisana do wykazu instytucji uprawnionych do prowadzenia mediacji w sprawach karnych.",
    href: "/foto/decyzja-wpis-wykaz-mediacje-karne-fundacja-mediacji-sadowej-pozasadowej-krakow-2020.pdf"
  },
  {
    title: "Zawód mediatora",
    label: "Studia podyplomowe",
    text: "Studia podyplomowe z zakresu zawodu mediatora i przygotowania do prowadzenia mediacji.",
    href: "/foto/swiadectwo-studia-podyplomowe-zawod-mediatora-vadym-rekel.pdf"
  },
  {
    title: "Mediacje rodzinne",
    label: "Studia podyplomowe",
    text: "Studia podyplomowe z zakresu mediacji rodzinnych i podstaw pomocy psychologicznej dla rodziny.",
    href: "/foto/swiadectwo-studia-podyplomowe-mediacje-rodzinne-vadym-rekel.pdf"
  }
];

const faqItems = [
  {
    question: "Czy mediacja jest poufna?",
    answer:
      "Tak. Mediacja jest postępowaniem poufnym. Poufność pomaga stronom spokojnie rozmawiać o konflikcie i szukać rozwiązania bez dalszej eskalacji."
  },
  {
    question: "Czy możliwa jest mediacja online?",
    answer:
      "Tak, w części spraw możliwa jest mediacja online albo wstępna konsultacja zdalna. Zależy to od rodzaju sprawy, zgody stron i warunków organizacyjnych."
  },
  {
    question: "Czy Fundacja prowadzi mediacje karne?",
    answer:
      "Tak. Fundacja posiada wpis do wykazu instytucji uprawnionych do prowadzenia postępowania mediacyjnego w sprawach karnych."
  },
  {
    question: "Czy mediacja karna jest bezpłatna dla stron?",
    answer:
      "Tak. W sprawach karnych koszty mediacji nie obciążają stron postępowania. Wynagrodzenie mediatora i zwrot wydatków ponosi Skarb Państwa."
  },
  {
    question: "Jak przygotować się do pierwszego kontaktu?",
    answer:
      "Warto podać rodzaj sprawy, liczbę stron, etap postępowania, informację o ewentualnym skierowaniu z sądu lub organu oraz preferowany tryb kontaktu."
  },
  {
    question: "Czy ugoda mediacyjna może zakończyć spór?",
    answer:
      "W wielu sprawach ugoda mediacyjna może uporządkować relacje stron i zakończyć spór. Skutek prawny zależy od rodzaju sprawy oraz właściwej procedury."
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

function LanguageSwitcher() {
  return (
    <div className="language-switcher" aria-label="Wersje językowe">
      {languageLinks.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </div>
  );
}

function PdfPreviewCard({
  title,
  label,
  text,
  href
}: {
  title: string;
  label: string;
  text: string;
  href: string;
}) {
  return (
    <article className="pdf-preview-card">
      <a
        className="pdf-preview-window"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Otwórz PDF: ${title}`}
      >
        <iframe
          src={`${href}#toolbar=0&navpanes=0&scrollbar=0`}
          title={`Podgląd PDF — ${title}`}
          loading="lazy"
        />
        <span className="pdf-preview-overlay">Otwórz PDF</span>
      </a>

      <div className="pdf-preview-content">
        <span className="tag">{label}</span>
        <h3>{title}</h3>
        <p>{text}</p>
        <a
          className="card-link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          Otwórz dokument →
        </a>
      </div>
    </article>
  );
}

export default function HomePage() {
  const localBusinessSchema = localBusinessJsonLd();
  const websiteSchema = websiteJsonLd();

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
            <a href="#zakres">Zakres</a>
            <a href="#proces">Jak działa</a>
            <a href="#online">Online</a>
            <a href="/cennik">Cennik</a>
            <a href="/blog">Blog</a>
            <a href="#lokalizacja">Lokalizacja</a>
            <a href="#kwalifikacje">Kwalifikacje</a>
            <a href="#kontakt">Kontakt</a>
            <LanguageSwitcher />
          </div>
        </nav>
      </div>

      <section className="hero hero-premium">
        <div className="hero-main">
          <span className="eyebrow">
            Mediator sądowy · Kraków · mediacje online
          </span>

          <h1>Mediator sądowy w Krakowie.</h1>

          <p className="lead">
            Mediacje rodzinne, karne, cywilne, gospodarcze i online. Poufna,
            uporządkowana rozmowa prowadzona przez bezstronnego mediatora — z
            możliwością wypracowania ugody i ograniczenia eskalacji sporu.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${phoneHref}`}>
              Umów konsultację
            </a>
            <a className="button button-secondary" href={`mailto:${email}`}>
              Wyślij opis sprawy
            </a>
            <a className="button button-secondary" href="/cennik">
              Sprawdź cennik
            </a>
            <a className="button button-secondary" href="/blog">
              Czytaj blog
            </a>
            <a className="button button-secondary" href="#kwalifikacje">
              Sprawdź kwalifikacje
            </a>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>Stały mediator</strong>
              <span>Sąd Okręgowy w Krakowie</span>
            </div>
            <div>
              <strong>Mediacje karne</strong>
              <span>0 zł dla stron postępowania</span>
            </div>
            <div>
              <strong>Blog SEO</strong>
              <span>wiedza o mediacji, kosztach i procedurach</span>
            </div>
          </div>
        </div>

        <aside className="hero-side">
          <figure className="portrait">
            <img
              src="/foto/vadym%20rekel.jpg"
              alt="Vadym Rekel mediator sądowy w Krakowie"
            />
          </figure>

          <div className="hero-badge">
            <strong>Centrum mediacji</strong>
            <span>
              Mediacje sądowe i pozasądowe · Kraków · ul. Kielecka 2/53 ·
              możliwość kontaktu online.
            </span>
          </div>
        </aside>
      </section>

      <section className="trust">
        <div className="trust-inner">
          <div className="trust-item">
            <strong>Stały mediator</strong>
            wpis przy Sądzie Okręgowym w Krakowie
          </div>
          <div className="trust-item">
            <strong>Mediacje karne</strong>
            koszt mediacji ponosi Skarb Państwa
          </div>
          <div className="trust-item">
            <strong>Kraków</strong>
            ul. Kielecka 2/53, okolice Ronda Mogilskiego
          </div>
          <div className="trust-item">
            <strong>Trzy języki</strong>
            wersja polska, angielska i ukraińska
          </div>
        </div>
      </section>

      <section className="section" id="zakres">
        <SectionHeading
          label="Zakres mediacji"
          title="Wybierz rodzaj sprawy."
          text="Najważniejsze obszary mediacji zostały podzielone tak, aby użytkownik szybko znalazł właściwy kierunek kontaktu."
        />

        <div className="bento-grid">
          {mediationTypes.map((item) => (
            <article className={item.className} key={item.title}>
              <span className="tag">Mediacje</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a className="card-link" href={item.href}>
                Czytaj więcej →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="cennik">
        <SectionHeading
          label="Cennik"
          title="Koszty mediacji i kalkulator opłat."
          text="Na osobnej podstronie znajdziesz kalkulator kosztów mediacji sądowej, pozasądowej oraz informację, że mediacja karna jest bezpłatna dla stron."
        />

        <div className="grid-3">
          <article className="card card-gold">
            <span className="tag">Cywilne</span>
            <h3>Sprawy majątkowe</h3>
            <p>
              Kalkulator oblicza wynagrodzenie mediatora według wartości
              przedmiotu sporu: od minimum 300 zł do maksimum 8000 zł.
            </p>
            <a className="card-link" href="/cennik">
              Oblicz koszt →
            </a>
          </article>

          <article className="card">
            <span className="tag">Rodzinne</span>
            <h3>Sprawy niemajątkowe</h3>
            <p>
              Kalkulator uwzględnia pierwsze i kolejne posiedzenia mediacyjne
              oraz limit wynagrodzenia w sprawach niemajątkowych.
            </p>
            <a className="card-link" href="/cennik">
              Sprawdź cennik →
            </a>
          </article>

          <article className="card card-dark">
            <span className="tag">Karne</span>
            <h3>0 zł dla stron</h3>
            <p>
              W sprawach karnych koszty mediacji nie obciążają stron
              postępowania. Wynagrodzenie mediatora ponosi Skarb Państwa.
            </p>
            <a className="card-link" href="/cennik">
              Zobacz podstawy →
            </a>
          </article>
        </div>
      </section>

      <section className="section" id="blog">
        <SectionHeading
          label="Blog"
          title="Artykuły o mediacji, kosztach i procedurach."
          text="Blog rozwija widoczność strony w Google i wyjaśnia użytkownikom najczęstsze pytania dotyczące mediacji rodzinnych, karnych, cywilnych, gospodarczych i online."
        />

        <div className="grid-3">
          <article className="card card-gold">
            <span className="tag">Mediacje karne</span>
            <h3>Czy mediacja karna jest bezpłatna dla stron?</h3>
            <p>
              Pierwszy wpis wyjaśnia, kto ponosi koszty mediacji karnej i kiedy
              strony nie płacą za udział w postępowaniu mediacyjnym.
            </p>
            <a
              className="card-link"
              href="/blog/czy-mediacja-karna-jest-bezplatna-dla-stron"
            >
              Czytaj wpis →
            </a>
          </article>

          <article className="card">
            <span className="tag">Cennik</span>
            <h3>Ile kosztuje mediacja?</h3>
            <p>
              Kalkulator i wpisy blogowe wyjaśniają koszty mediacji sądowej,
              pozasądowej, cywilnej, rodzinnej i gospodarczej.
            </p>
            <a
              className="card-link"
              href="/blog/ile-kosztuje-mediacja-sadowa-w-sprawie-cywilnej"
            >
              Czytaj wpis →
            </a>
          </article>

          <article className="card card-dark">
            <span className="tag">SEO PL / EN / UA</span>
            <h3>Centrum wiedzy o mediacji</h3>
            <p>
              Blog jest rozwijany po polsku, angielsku i ukraińsku, aby
              wzmacniać lokalne SEO dla Krakowa i Polski.
            </p>
            <a className="card-link" href="/blog">
              Przejdź do bloga →
            </a>
          </article>
        </div>
      </section>

      <section className="section" id="proces">
        <SectionHeading
          label="Jak działa mediacja"
          title="Prosty proces, spokojna struktura rozmowy."
          text="Mediacja jest pokazana jako czytelna procedura: pierwszy kontakt, ustalenie trybu, organizacja spotkania i praca nad rozwiązaniem."
        />

        <div className="grid-4 process">
          {processSteps.map((item) => (
            <article className="card process-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section compact" id="online">
        <div className="feature green">
          <div>
            <p className="section-label">Online i przygotowanie sprawy</p>
            <h2>Mediacja online i szybki pierwszy kontakt.</h2>
          </div>

          <div>
            <p>
              Możesz przesłać krótki opis konfliktu, dokumenty organizacyjne lub
              pytania dotyczące trybu mediacji. Na tej podstawie możliwe jest
              wstępne ustalenie rodzaju sprawy, potrzebnych informacji oraz
              tego, czy właściwa będzie mediacja stacjonarna czy online.
            </p>

            <div className="labels">
              <span className="label">opis sprawy</span>
              <span className="label">kontakt online</span>
              <span className="label">mediacja zdalna</span>
              <span className="label">wstępna kwalifikacja</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="karne">
        <SectionHeading
          label="Mediacje karne"
          title="Fundacja wpisana do wykazu mediacji karnych."
          text="Mediacje karne wymagają szczególnej ostrożności, neutralności i rozumienia funkcji postępowania. Dla stron postępowania mediacja karna jest bezpłatna."
        />

        <div className="grid-3">
          <article className="card card-gold">
            <span className="tag">Sprawy karne</span>
            <h3>Pokrzywdzony i sprawca</h3>
            <p>
              Mediacja może dotyczyć skutków czynu, odpowiedzialności,
              przeprosin, naprawienia szkody, zadośćuczynienia i warunków
              porozumienia.
            </p>
          </article>

          <article className="card card-gold">
            <span className="tag">Koszty</span>
            <h3>0 zł dla stron</h3>
            <p>
              W sprawach karnych koszty postępowania mediacyjnego nie obciążają
              stron. Wynagrodzenie mediatora i zwrot wydatków ponosi Skarb
              Państwa.
            </p>
            <a className="card-link" href="/cennik">
              Zobacz cennik →
            </a>
          </article>

          <article className="card card-dark">
            <span className="tag">Dokument</span>
            <h3>Wpis do wykazu</h3>
            <p>
              Fundacja posiada decyzję o wpisie do wykazu instytucji
              uprawnionych do prowadzenia mediacji w sprawach karnych.
            </p>
            <a
              className="card-link"
              href="/foto/decyzja-wpis-wykaz-mediacje-karne-fundacja-mediacji-sadowej-pozasadowej-krakow-2020.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Otwórz decyzję →
            </a>
          </article>
        </div>
      </section>

      <section className="section" id="rodzinne">
        <SectionHeading
          label="Mediacje rodzinne"
          title="Sprawy rodzinne wymagają spokoju, języka i granic."
          text="W sprawach rodzinnych mediacja porządkuje rozmowę tam, gdzie emocje, oczekiwania i odpowiedzialność za przyszłość rodziny nakładają się na siebie."
        />

        <div className="grid-3">
          <article className="card">
            <span className="tag">Rodzina</span>
            <h3>Kontakty i opieka</h3>
            <p>
              Ustalenia dotyczące kontaktów z dzieckiem, opieki, komunikacji
              rodzicielskiej i organizacji codziennych spraw.
            </p>
          </article>

          <article className="card">
            <span className="tag">Rozstanie</span>
            <h3>Rozwód i separacja</h3>
            <p>
              Rozmowa o sprawach okołorozwodowych, rodzinnych, majątkowych i
              organizacyjnych.
            </p>
          </article>

          <article className="card">
            <span className="tag">Przygotowanie</span>
            <h3>Mediacje rodzinne</h3>
            <p>
              Przygotowanie obejmuje studia podyplomowe z zakresu mediacji
              rodzinnych i podstaw pomocy psychologicznej dla rodziny.
            </p>
            <a
              className="card-link"
              href="/foto/swiadectwo-studia-podyplomowe-mediacje-rodzinne-vadym-rekel.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Otwórz dokument →
            </a>
          </article>
        </div>
      </section>

      <section className="section" id="cywilne">
        <SectionHeading
          label="Mediacje cywilne i gospodarcze"
          title="Spory prywatne, umowne i biznesowe."
          text="W sprawach cywilnych i gospodarczych mediacja może pomóc szybciej ustalić warunki porozumienia, rozliczeń lub zakończenia współpracy."
        />

        <div className="grid-3">
          <article className="card">
            <span className="tag">Cywilne</span>
            <h3>Spory prywatne</h3>
            <p>
              Zobowiązania, roszczenia, umowy, konflikty sąsiedzkie, sprawy
              majątkowe i rozliczenia.
            </p>
          </article>

          <article className="card" id="gospodarcze">
            <span className="tag">Gospodarcze</span>
            <h3>Spory między przedsiębiorcami</h3>
            <p>
              Płatności, odpowiedzialność, umowy, współpraca, zakończenie
              relacji biznesowej i ugody.
            </p>
          </article>

          <article className="card">
            <span className="tag">Cennik</span>
            <h3>Kalkulator kosztów</h3>
            <p>
              Dla spraw majątkowych kalkulator pozwala oszacować koszt mediacji
              według wartości przedmiotu sporu.
            </p>
            <a className="card-link" href="/cennik">
              Oblicz koszt →
            </a>
          </article>
        </div>
      </section>

      <section
        className="section"
        id="lokalizacja"
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        <SectionHeading
          label="Lokalizacja"
          title="Mediacje w Krakowie — ul. Kielecka 2/53, okolice Ronda Mogilskiego."
          text="Profesjonalne mediacje w dogodnej lokalizacji w centrum Krakowa, blisko Sądu Okręgowego, instytucji publicznych i komunikacji miejskiej."
        />

        <div className="location-rich">
          <div className="location-copy">
            <p>
              <strong itemProp="name">
                Fundacja Mediacji Sądowej i Pozasądowej
              </strong>{" "}
              prowadzi <strong>mediacje w Krakowie</strong> przy{" "}
              <strong>ul. Kieleckiej 2/53, 31-526 Kraków</strong>, w
              bezpośrednim sąsiedztwie <strong>Ronda Mogilskiego</strong>.
            </p>

            <p>
              To dogodna lokalizacja dla osób poszukujących{" "}
              <strong>mediatora w Krakowie</strong>, zarówno w sprawach{" "}
              <strong>
                rodzinnych, cywilnych, gospodarczych, jak i karnych
              </strong>
              . Kancelaria zapewnia spokojne, neutralne warunki sprzyjające
              rozmowie, uporządkowaniu konfliktu i osiągnięciu porozumienia.
            </p>

            <p>
              Siedziba znajduje się około{" "}
              <strong>600 metrów od Sądu Okręgowego w Krakowie</strong> przy
              ul. Przy Rondzie 7, co stanowi istotne ułatwienie dla osób
              prowadzących sprawy sądowe oraz dla pełnomocników korzystających z
              usług <strong>mediatora sądowego w Krakowie</strong>.
            </p>

            <div className="location-advantages">
              <div className="location-advantage">
                Centrum Krakowa — Rondo Mogilskie
              </div>
              <div className="location-advantage">
                Około 600 m od Sądu Okręgowego
              </div>
              <div className="location-advantage">
                Łatwy dojazd komunikacją miejską
              </div>
              <div className="location-advantage">
                Spokojna przestrzeń do mediacji
              </div>
            </div>
          </div>

          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10244.231941308924!2d19.9621993!3d50.0664757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b57a3e08b9d%3A0xf4ed3bbeb098c39!2sFundacja%20Mediacji%20Sądowej%20i%20Pozasądowej!5e0!3m2!1spl!2spl!4v1701936419454!5m2!1spl!2spl"
              loading="lazy"
              title="Mediator Kraków — Fundacja Mediacji Sądowej i Pozasądowej lokalizacja"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="location-cta">
            <a
              className="location-cta-map"
              href="https://www.google.com/maps/dir/?api=1&destination=Fundacja+Mediacji+Sądowej+i+Pozasądowej,+Kielecka+2%2F53,+31-526+Kraków"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dojazd do mediatora w Krakowie
            </a>

            <a className="location-cta-phone" href={`tel:${phoneHref}`}>
              {phone}
            </a>

            <a className="location-cta-email" href={`mailto:${email}`}>
              Umów mediację
            </a>
          </div>

          <meta itemProp="telephone" content="+48 883 040 483" />
          <meta itemProp="email" content="mediacje@twojafundacja.pl" />
          <meta itemProp="url" content={siteUrl} />
          <meta itemProp="areaServed" content="Kraków, Małopolska, Polska" />

          <div
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <meta itemProp="streetAddress" content="ul. Kielecka 2/53" />
            <meta itemProp="postalCode" content="31-526" />
            <meta itemProp="addressLocality" content="Kraków" />
            <meta itemProp="addressCountry" content="PL" />
          </div>

          <div
            itemProp="geo"
            itemScope
            itemType="https://schema.org/GeoCoordinates"
          >
            <meta itemProp="latitude" content="50.0664757" />
            <meta itemProp="longitude" content="19.9621993" />
          </div>
        </div>
      </section>

      <section className="section" id="kwalifikacje">
        <SectionHeading
          label="Kwalifikacje"
          title="Dokumenty i certyfikaty mediatora."
          text="Poniżej znajdują się wybrane dokumenty potwierdzające przygotowanie mediatora i Fundacji do prowadzenia mediacji sądowych, pozasądowych, rodzinnych oraz karnych."
        />

        <div className="pdf-preview-grid">
          {qualificationCards.map((item) => (
            <PdfPreviewCard
              key={item.href}
              title={item.title}
              label={item.label}
              text={item.text}
              href={item.href}
            />
          ))}
        </div>

        <div className="hero-actions">
          <a className="button button-secondary" href="/kwalifikacje">
            Zobacz wszystkie kwalifikacje
          </a>
          <a className="button button-secondary" href="/cennik">
            Sprawdź cennik mediacji
          </a>
          <a className="button button-secondary" href="/blog">
            Czytaj blog
          </a>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="FAQ"
          title="Najczęstsze pytania przed kontaktem z mediatorem."
          text="Krótko o poufności, mediacji online, mediacjach karnych, kosztach i przygotowaniu sprawy."
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
            <h2>Opisz sprawę i ustal możliwy tryb mediacji.</h2>
            <p>
              W wiadomości podaj rodzaj sprawy, liczbę stron, etap postępowania,
              informację o ewentualnym skierowaniu z sądu albo organu oraz
              preferowany tryb mediacji. W sprawach kosztów możesz skorzystać
              także z kalkulatora mediacji.
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

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-title">
              Fundacja Mediacji Sądowej i Pozasądowej
            </span>
            <span className="footer-line">
              Mediator sądowy · mediacje rodzinne, karne, cywilne i gospodarcze
            </span>
            <span className="footer-line">Kraków · mediacje online</span>
          </div>

          <div>
            <span className="footer-title">Kontakt</span>
            <span className="footer-line">
              Telefon: <a href={`tel:${phoneHref}`}>{phone}</a>
            </span>
            <span className="footer-line">
              <a href={`mailto:${email}`}>{email}</a>
            </span>
            <span className="footer-line">ul. Kielecka 2/53, 31-526 Kraków</span>
          </div>

          <div>
            <span className="footer-title">Nawigacja</span>
            <a className="footer-link" href="/cennik">
              Cennik mediacji
            </a>
            <br />
            <a className="footer-link" href="/blog">
              Blog o mediacji
            </a>
            <br />
            <a className="footer-link" href="/kwalifikacje">
              Kwalifikacje
            </a>
            <br />
            <a className="footer-link" href="/en">
              English version
            </a>
            <br />
            <a className="footer-link" href="/uk">
              Українська версія
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
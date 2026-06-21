import type { Metadata } from "next";
import { localBusinessJsonLd, siteUrl } from "@/lib/seo";

const phone = "883 040 483";
const phoneHref = "+48883040483";
const email = "mediacje@twojafundacja.pl";

export const metadata: Metadata = {
  title: "Mediator sądowy Kraków | Stały mediator",
  description:
    "Mediator sądowy w Krakowie. Mediacje sądowe i pozasądowe: rodzinne, karne, cywilne, gospodarcze i online. Kontakt PL EN UA.",
  alternates: {
    canonical: "/mediator-sadowy-krakow"
  },
  openGraph: {
    title: "Mediator sądowy Kraków | Stały mediator",
    description:
      "Stały mediator sądowy w Krakowie. Mediacje rodzinne, karne, cywilne, gospodarcze i online.",
    url: `${siteUrl}/mediator-sadowy-krakow`,
    type: "website",
    locale: "pl_PL"
  }
};

const mediationAreas = [
  {
    title: "Mediacje rodzinne",
    text: "Rozwód, separacja, kontakty z dzieckiem, alimenty, opieka, plan wychowawczy i porozumienia rodzicielskie.",
    href: "/mediacje-rodzinne-krakow"
  },
  {
    title: "Mediacje karne",
    text: "Sprawy między pokrzywdzonym i sprawcą, naprawienie szkody, zadośćuczynienie, przeprosiny i warunki porozumienia.",
    href: "/mediacje-karne-krakow"
  },
  {
    title: "Mediacje cywilne",
    text: "Spory o zapłatę, umowy, rozliczenia, sprawy sąsiedzkie, majątkowe, spadkowe i prywatne.",
    href: "/mediacje-cywilne-krakow"
  },
  {
    title: "Mediacje gospodarcze",
    text: "Spory między przedsiębiorcami, kontrahentami, wspólnikami, wykonanie umów, płatności i rozliczenia.",
    href: "/mediacje-gospodarcze-krakow"
  },
  {
    title: "Mediacje online",
    text: "Kontakt zdalny i mediacje online, gdy strony mieszkają w różnych miejscowościach albo państwach.",
    href: "/mediacje-online"
  },
  {
    title: "Mediacje dla pełnomocników",
    text: "Kontakt organizacyjny dla adwokatów, radców prawnych i pełnomocników prowadzących sprawy sądowe.",
    href: "/mediacje-dla-pelnomocnikow"
  }
];

const process = [
  {
    title: "Skierowanie albo opis sprawy",
    text: "Sprawa może trafić do mediacji po skierowaniu przez sąd albo z inicjatywy stron przed postępowaniem."
  },
  {
    title: "Kontakt organizacyjny",
    text: "Ustalane są dane stron, etap sprawy, rodzaj mediacji, możliwy termin i tryb spotkania."
  },
  {
    title: "Spotkanie mediacyjne",
    text: "Mediator prowadzi rozmowę w sposób bezstronny, poufny i uporządkowany, bez rozstrzygania sporu."
  },
  {
    title: "Protokół i ugoda",
    text: "Po mediacji sporządzany jest protokół. Jeżeli strony osiągną porozumienie, możliwa jest ugoda mediacyjna."
  }
];

const faq = [
  {
    question: "Kim jest mediator sądowy?",
    answer:
      "Mediator sądowy to mediator wpisany na listę stałych mediatorów prowadzoną przez prezesa właściwego sądu okręgowego albo osoba prowadząca mediację w sprawie skierowanej przez sąd."
  },
  {
    question: "Czy mediator sądowy wydaje decyzję?",
    answer:
      "Nie. Mediator nie wydaje wyroku, nie rozstrzyga sporu i nie reprezentuje żadnej ze stron. Pomaga stronom rozmawiać i szukać możliwego porozumienia."
  },
  {
    question: "Czy mediacja sądowa może zakończyć się ugodą?",
    answer:
      "Tak. Jeżeli strony osiągną porozumienie, możliwe jest przygotowanie ugody mediacyjnej. Jej dalszy skutek zależy od rodzaju sprawy i właściwej procedury."
  },
  {
    question: "Czy mediator sądowy w Krakowie prowadzi mediacje online?",
    answer:
      "W części spraw możliwy jest kontakt zdalny albo mediacja online, jeżeli pozwalają na to warunki organizacyjne, charakter sprawy i zgoda stron."
  }
];

export default function MediatorSadowyKrakowPage() {
  const localBusinessSchema = localBusinessJsonLd();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
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
                Mediator sądowy · Kraków · Sąd Okręgowy
              </span>
            </span>
          </a>

          <div className="nav-links">
            <a href="/">Strona główna</a>
            <a href="/kontakt">Kontakt</a>
            <a href="/cennik">Cennik</a>
            <a href="/#kwalifikacje">Kwalifikacje</a>
            <a href="/blog">Blog</a>
          </div>
        </nav>
      </div>

      <section className="hero hero-premium">
        <div className="hero-main">
          <span className="eyebrow">Mediator sądowy Kraków</span>

          <h1>
            Mediator sądowy w Krakowie — mediacje sądowe, pozasądowe i online.
          </h1>

          <p className="lead">
            Stały mediator w Krakowie prowadzący mediacje rodzinne, karne,
            cywilne, gospodarcze i online. Mediacja pomaga stronom uporządkować
            konflikt, omówić możliwe rozwiązania i — jeżeli jest taka wola —
            przygotować ugodę.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="/kontakt">
              Opisz sprawę
            </a>
            <a className="button button-secondary" href="/cennik">
              Sprawdź cennik
            </a>
            <a className="button button-secondary" href="/#kwalifikacje">
              Sprawdź kwalifikacje
            </a>
            <a className="button button-secondary" href={`tel:${phoneHref}`}>
              Zadzwoń
            </a>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>Stały mediator</strong>
              <span>Sąd Okręgowy w Krakowie</span>
            </div>
            <div>
              <strong>Zakres</strong>
              <span>rodzinne, karne, cywilne, gospodarcze</span>
            </div>
            <div>
              <strong>Języki</strong>
              <span>polski, angielski, ukraiński</span>
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
            <strong>Blisko Sądu Okręgowego w Krakowie</strong>
            <span>
              Lokalizacja: ul. Kielecka 2/53, Kraków, okolice Ronda
              Mogilskiego i Sądu Okręgowego.
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
            0 zł dla stron postępowania
          </div>
          <div className="trust-item">
            <strong>Kraków</strong>
            ul. Kielecka 2/53
          </div>
          <div className="trust-item">
            <strong>Online</strong>
            możliwy kontakt zdalny
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Zakres</p>
            <h2>Jakie sprawy prowadzi mediator sądowy?</h2>
          </div>
          <p>
            Mediacje mogą dotyczyć spraw rodzinnych, karnych, cywilnych,
            gospodarczych, sądowych i pozasądowych. Każdy typ sprawy wymaga
            osobnego ustalenia trybu kontaktu i podstawowych danych.
          </p>
        </div>

        <div className="grid-3">
          {mediationAreas.map((item) => (
            <article className="card" key={item.title}>
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

      <section className="section compact">
        <div className="feature green">
          <div>
            <p className="section-label">Rola mediatora</p>
            <h2>Mediator nie jest sędzią i nie rozstrzyga sporu.</h2>
          </div>

          <div>
            <p>
              Mediator nie reprezentuje żadnej ze stron, nie wydaje decyzji i
              nie narzuca rozwiązania. Jego zadaniem jest prowadzenie rozmowy w
              sposób bezstronny, poufny i uporządkowany.
            </p>

            <div className="labels">
              <span className="label">bezstronność</span>
              <span className="label">poufność</span>
              <span className="label">neutralna rozmowa</span>
              <span className="label">możliwa ugoda</span>
            </div>

            <div className="hero-actions">
              <a className="button button-secondary" href="/kontakt">
                Opisz sprawę
              </a>
              <a className="button button-secondary" href="/blog">
                Czytaj blog
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Proces</p>
            <h2>Jak wygląda mediacja sądowa?</h2>
          </div>
          <p>
            Procedura obejmuje przekazanie sprawy, kontakt organizacyjny,
            spotkanie mediacyjne, protokół i ewentualną ugodę.
          </p>
        </div>

        <div className="grid-4 process">
          {process.map((item) => (
            <article className="card process-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">FAQ</p>
            <h2>Najczęstsze pytania o mediatora sądowego.</h2>
          </div>
          <p>
            Krótko o roli mediatora, ugodzie, mediacji online i różnicy między
            mediatorem a sądem.
          </p>
        </div>

        <div className="faq-list">
          {faq.map((item) => (
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
            <h2>Opisz sprawę do mediatora sądowego.</h2>
            <p>
              W wiadomości podaj rodzaj sprawy, etap postępowania, informację o
              skierowaniu do mediacji, liczbę stron i preferowany tryb kontaktu.
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
              <a className="button button-primary" href="/kontakt">
                Formularz kontaktowy
              </a>
              <a className="button button-secondary" href="/cennik">
                Cennik mediacji
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

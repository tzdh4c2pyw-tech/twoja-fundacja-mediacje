import type { Metadata } from "next";
import { localBusinessJsonLd, siteUrl } from "@/lib/seo";

const phone = "883 040 483";
const phoneHref = "+48883040483";
const email = "mediacje@twojafundacja.pl";

export const metadata: Metadata = {
  title: "Mediacje dla pełnomocników | Mediator sądowy Kraków",
  description:
    "Mediacje dla adwokatów, radców prawnych i pełnomocników. Mediacje rodzinne, cywilne, gospodarcze i karne w Krakowie oraz online.",
  alternates: {
    canonical: "/mediacje-dla-pelnomocnikow"
  },
  openGraph: {
    title: "Mediacje dla pełnomocników | Mediator sądowy Kraków",
    description:
      "Kontakt dla pełnomocników: mediacje sądowe i pozasądowe w sprawach rodzinnych, cywilnych, gospodarczych i karnych.",
    url: `${siteUrl}/mediacje-dla-pelnomocnikow`,
    type: "website",
    locale: "pl_PL"
  }
};

const useCases = [
  {
    title: "Sprawy rodzinne",
    text: "Rozwód, kontakty z dzieckiem, alimenty, plan wychowawczy, opieka, porozumienie rodzicielskie i sprawy okołorozwodowe."
  },
  {
    title: "Sprawy cywilne",
    text: "Spory o zapłatę, rozliczenia, umowy, sprawy sąsiedzkie, majątkowe, spadkowe i zobowiązaniowe."
  },
  {
    title: "Sprawy gospodarcze",
    text: "Spory między przedsiębiorcami, kontrahentami, wspólnikami, roszczenia z umów, płatności i zakończenie współpracy."
  },
  {
    title: "Sprawy karne",
    text: "Mediacje między pokrzywdzonym i sprawcą, naprawienie szkody, zadośćuczynienie, przeprosiny i warunki porozumienia."
  },
  {
    title: "Mediacje online",
    text: "Kontakt zdalny i mediacje online, gdy strony lub pełnomocnicy znajdują się w różnych miastach albo państwach."
  },
  {
    title: "Sprawy po skierowaniu z sądu",
    text: "Organizacja mediacji po formalnym skierowaniu sprawy przez sąd, prokuraturę albo inny uprawniony organ."
  }
];

const requiredInfo = [
  "sygnatura sprawy, jeżeli sprawa jest już w toku",
  "sąd, prokuratura albo organ kierujący",
  "rodzaj sprawy i etap postępowania",
  "liczba stron i dane kontaktowe stron albo pełnomocników",
  "informacja, czy strony wyraziły zgodę na mediację",
  "preferowany tryb: Kraków, online, telefon, e-mail",
  "terminy istotne procesowo albo organizacyjnie"
];

const process = [
  {
    title: "Kontakt pełnomocnika",
    text: "Pełnomocnik przekazuje podstawowe informacje o sprawie, etapie postępowania, stronach i preferowanym trybie mediacji."
  },
  {
    title: "Weryfikacja organizacyjna",
    text: "Mediator ustala, jakie informacje są potrzebne do kontaktu ze stronami i czy możliwa jest mediacja sądowa, pozasądowa albo online."
  },
  {
    title: "Kontakt ze stronami",
    text: "Po ustaleniu warunków organizacyjnych możliwy jest kontakt ze stronami lub ich pełnomocnikami w celu uzgodnienia terminu."
  },
  {
    title: "Spotkanie i dokumenty",
    text: "Po mediacji sporządzany jest protokół, a w razie porozumienia możliwe jest przygotowanie ugody mediacyjnej."
  }
];

const faq = [
  {
    question: "Czy pełnomocnik może kontaktować się z mediatorem przed mediacją?",
    answer:
      "Tak. Pełnomocnik może przekazać mediatorowi podstawowe informacje organizacyjne dotyczące sprawy, stron, etapu postępowania i możliwego trybu mediacji."
  },
  {
    question: "Czy pełnomocnik może uczestniczyć w mediacji?",
    answer:
      "Udział pełnomocnika zależy od rodzaju sprawy, zgody stron i przyjętej organizacji mediacji. W wielu sprawach obecność pełnomocników jest możliwa."
  },
  {
    question: "Jakie dokumenty warto przekazać mediatorowi?",
    answer:
      "Zwykle wystarczają podstawowe dokumenty organizacyjne: postanowienie o skierowaniu do mediacji, sygnatura, dane kontaktowe, informacje o rodzaju sprawy i zakresie sporu."
  },
  {
    question: "Czy mediator sporządza ugodę?",
    answer:
      "Jeżeli strony osiągną porozumienie, możliwe jest przygotowanie ugody mediacyjnej odzwierciedlającej ustalenia stron. Zakres dokumentu zależy od sprawy."
  }
];

export default function MediacjeDlaPelnomocnikowPage() {
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
                Mediacje dla pełnomocników · Kraków · online
              </span>
            </span>
          </a>

          <div className="nav-links">
            <a href="/">Strona główna</a>
            <a href="/cennik">Cennik</a>
            <a href="/kontakt">Kontakt</a>
            <a href="/blog">Blog</a>
          </div>
        </nav>
      </div>

      <section className="hero hero-premium">
        <div className="hero-main">
          <span className="eyebrow">Dla pełnomocników</span>

          <h1>
            Mediacje dla adwokatów, radców prawnych i pełnomocników w Krakowie.
          </h1>

          <p className="lead">
            Kontakt organizacyjny dla pełnomocników prowadzących sprawy rodzinne,
            cywilne, gospodarcze i karne. Mediacje sądowe, pozasądowe oraz
            online, z jasnym ustaleniem trybu kontaktu, dokumentów i kolejnych
            kroków.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="/kontakt">
              Przekaż sprawę do mediacji
            </a>
            <a className="button button-secondary" href="/cennik">
              Sprawdź cennik
            </a>
            <a className="button button-secondary" href={`tel:${phoneHref}`}>
              Zadzwoń
            </a>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>Zakres</strong>
              <span>rodzinne, cywilne, gospodarcze, karne</span>
            </div>
            <div>
              <strong>Tryb</strong>
              <span>sądowe, pozasądowe, online</span>
            </div>
            <div>
              <strong>Lokalizacja</strong>
              <span>Kraków, ul. Kielecka 2/53</span>
            </div>
          </div>
        </div>

        <aside className="hero-side">
          <div className="hero-badge">
            <strong>Kontakt zawodowy</strong>
            <span>
              W wiadomości warto podać sygnaturę, sąd albo organ, etap sprawy,
              liczbę stron, zakres sporu i preferowany tryb mediacji.
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
            <strong>Sprawy sądowe</strong>
            mediacje po skierowaniu z sądu
          </div>
          <div className="trust-item">
            <strong>Online</strong>
            możliwa organizacja zdalna
          </div>
          <div className="trust-item">
            <strong>PL / EN / UA</strong>
            kontakt wielojęzyczny
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Zakres</p>
            <h2>Jakie sprawy mogą kierować pełnomocnicy?</h2>
          </div>
          <p>
            Podstrona jest przeznaczona dla profesjonalnych pełnomocników, którzy
            chcą szybko ustalić możliwość mediacji, tryb kontaktu i podstawowe
            wymagania organizacyjne.
          </p>
        </div>

        <div className="grid-3">
          {useCases.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">Mediacje</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section compact">
        <div className="feature green">
          <div>
            <p className="section-label">Informacje</p>
            <h2>Co warto podać w wiadomości?</h2>
          </div>

          <div>
            <p>
              Im więcej podstawowych danych organizacyjnych znajduje się w
              pierwszej wiadomości, tym łatwiej ustalić możliwy tryb mediacji i
              dalszy kontakt ze stronami.
            </p>

            <ul className="rich-list">
              {requiredInfo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="hero-actions">
              <a className="button button-secondary" href="/kontakt">
                Przejdź do formularza
              </a>
              <a className="button button-secondary" href={`mailto:${email}`}>
                Wyślij e-mail
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Proces</p>
            <h2>Jak wygląda współpraca organizacyjna?</h2>
          </div>
          <p>
            Mediacja wymaga jasnej komunikacji z pełnomocnikami i stronami:
            od przekazania danych po spotkanie, protokół i ewentualną ugodę.
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
            <h2>Najczęstsze pytania pełnomocników.</h2>
          </div>
          <p>
            Krótko o kontakcie przed mediacją, udziale pełnomocnika,
            dokumentach i ugodzie mediacyjnej.
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
            <p className="section-label">Kontakt dla pełnomocników</p>
            <h2>Przekaż podstawowe informacje o sprawie.</h2>
            <p>
              W wiadomości podaj sygnaturę, sąd lub organ, rodzaj sprawy, etap
              postępowania, liczbę stron, zakres sporu i preferowany tryb
              mediacji.
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

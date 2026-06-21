import type { Metadata } from "next";
import { localBusinessJsonLd, siteUrl } from "@/lib/seo";

const phone = "883 040 483";
const phoneHref = "+48883040483";
const email = "mediacje@twojafundacja.pl";

export const metadata: Metadata = {
  title: "Mediacje cywilne Kraków | Mediator sądowy",
  description:
    "Mediacje cywilne w Krakowie: spory o zapłatę, umowy, rozliczenia, sprawy sąsiedzkie, majątkowe i prywatne. Mediator sądowy Kraków.",
  alternates: {
    canonical: "/mediacje-cywilne-krakow"
  },
  openGraph: {
    title: "Mediacje cywilne Kraków | Mediator sądowy",
    description:
      "Mediacje cywilne w Krakowie: zapłata, umowy, rozliczenia, sprawy sąsiedzkie, majątkowe i prywatne.",
    url: `${siteUrl}/mediacje-cywilne-krakow`,
    type: "website",
    locale: "pl_PL"
  }
};

const caseTypes = [
  {
    title: "Spory o zapłatę",
    text: "Mediacja może dotyczyć zaległych płatności, rozliczeń, pożyczek, faktur prywatnych albo innych zobowiązań pieniężnych."
  },
  {
    title: "Spory z umów",
    text: "Strony mogą omówić wykonanie umowy, opóźnienia, rozliczenia, odstąpienie od umowy albo możliwe warunki porozumienia."
  },
  {
    title: "Sprawy sąsiedzkie",
    text: "Mediacja może pomóc w uporządkowaniu konfliktów dotyczących granic, immisji, hałasu, korzystania z nieruchomości albo wspólnych przestrzeni."
  },
  {
    title: "Sprawy majątkowe",
    text: "Mediacje cywilne mogą obejmować rozliczenia, współwłasność, zobowiązania, odszkodowania i inne spory majątkowe."
  },
  {
    title: "Sprawy spadkowe",
    text: "W mediacji można rozmawiać o dziale spadku, rozliczeniach rodzinnych, korzystaniu z majątku i możliwych warunkach ugody."
  },
  {
    title: "Spory przed pozwem",
    text: "Mediacja może zostać podjęta przed skierowaniem sprawy do sądu, jeżeli strony chcą najpierw spróbować rozmowy i ugody."
  }
];

const steps = [
  {
    title: "Opis sprawy",
    text: "Przekazujesz krótki opis sporu, liczbę stron, wartość przedmiotu sporu, etap sprawy i preferowany tryb kontaktu."
  },
  {
    title: "Ustalenie trybu",
    text: "Mediator sprawdza organizacyjnie, czy właściwa będzie mediacja sądowa, pozasądowa, stacjonarna albo online."
  },
  {
    title: "Kontakt ze stronami",
    text: "Ustalane są zasady kontaktu, termin spotkania, forma mediacji oraz ewentualne dokumenty potrzebne do rozmowy."
  },
  {
    title: "Protokół albo ugoda",
    text: "Jeżeli strony osiągną porozumienie, możliwe jest przygotowanie ugody mediacyjnej zgodnej z ustaleniami stron."
  }
];

const faq = [
  {
    question: "Czy mediacja cywilna może odbyć się przed pozwem?",
    answer:
      "Tak. Mediacja może odbyć się przed wszczęciem postępowania sądowego albo już w toku sprawy sądowej."
  },
  {
    question: "Czy mediacja cywilna nadaje się do spraw o zapłatę?",
    answer:
      "Tak. Spory o zapłatę, rozliczenia, pożyczki, umowy i zobowiązania należą do typowych obszarów mediacji cywilnej."
  },
  {
    question: "Czy ugoda mediacyjna może zakończyć sprawę?",
    answer:
      "W wielu sprawach ugoda może uporządkować spór i zakończyć konflikt. Skutek prawny zależy od rodzaju sprawy i właściwej procedury."
  },
  {
    question: "Czy mediacja cywilna może odbyć się online?",
    answer:
      "Tak, jeżeli charakter sprawy, warunki organizacyjne oraz zgoda stron pozwalają na przeprowadzenie mediacji online."
  }
];

export default function MediacjeCywilneKrakowPage() {
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
                Mediacje cywilne · Kraków · online
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
          <span className="eyebrow">Mediacje cywilne Kraków</span>

          <h1>Mediacje cywilne w Krakowie — spory o zapłatę, umowy, rozliczenia i sprawy prywatne.</h1>

          <p className="lead">
            Mediacja cywilna pomaga stronom uporządkować spór, omówić możliwe
            rozwiązania i — jeżeli jest taka wola — przygotować ugodę bez
            dalszej eskalacji konfliktu. Spotkania mogą odbywać się w Krakowie
            albo online.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="/kontakt">
              Opisz sprawę cywilną
            </a>
            <a className="button button-secondary" href="/cennik">
              Sprawdź koszt mediacji
            </a>
            <a className="button button-secondary" href={`tel:${phoneHref}`}>
              Zadzwoń
            </a>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>Zakres</strong>
              <span>zapłata, umowy, rozliczenia, sąsiedzi</span>
            </div>
            <div>
              <strong>Tryb</strong>
              <span>mediacja sądowa, pozasądowa lub online</span>
            </div>
            <div>
              <strong>Lokalizacja</strong>
              <span>Kraków, ul. Kielecka 2/53</span>
            </div>
          </div>
        </div>

        <aside className="hero-side">
          <div className="hero-badge">
            <strong>Nie wiesz, czy to sprawa cywilna?</strong>
            <span>
              Opisz krótko sytuację, liczbę stron, etap postępowania i wartość
              sporu. Nie musisz samodzielnie kwalifikować sprawy.
            </span>
          </div>
        </aside>
      </section>

      <section className="trust">
        <div className="trust-inner">
          <div className="trust-item">
            <strong>Spory o zapłatę</strong>
            rozliczenia, pożyczki, zobowiązania
          </div>
          <div className="trust-item">
            <strong>Umowy</strong>
            wykonanie, opóźnienia, odpowiedzialność
          </div>
          <div className="trust-item">
            <strong>Sąsiedzi</strong>
            nieruchomości, granice, korzystanie
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
            <p className="section-label">Zakres spraw</p>
            <h2>Jakie spory cywilne mogą trafić do mediacji?</h2>
          </div>
          <p>
            Mediacja cywilna może dotyczyć wielu konfliktów prywatnych,
            majątkowych i umownych, w których strony chcą rozmawiać o możliwym
            porozumieniu.
          </p>
        </div>

        <div className="grid-3">
          {caseTypes.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">Cywilne</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section compact">
        <div className="feature green">
          <div>
            <p className="section-label">Przygotowanie</p>
            <h2>Co podać w pierwszej wiadomości?</h2>
          </div>

          <div>
            <p>
              W pierwszym kontakcie warto podać rodzaj sporu, liczbę stron,
              etap sprawy, wartość przedmiotu sporu, informację o sądzie albo
              pozwie oraz preferowany tryb kontaktu.
            </p>

            <div className="labels">
              <span className="label">rodzaj sporu</span>
              <span className="label">liczba stron</span>
              <span className="label">wartość sporu</span>
              <span className="label">etap sprawy</span>
              <span className="label">tryb kontaktu</span>
            </div>

            <div className="hero-actions">
              <a className="button button-secondary" href="/kontakt">
                Opisz sprawę
              </a>
              <a className="button button-secondary" href="/cennik">
                Sprawdź cennik
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Proces</p>
            <h2>Jak wygląda mediacja cywilna?</h2>
          </div>
          <p>
            Proces jest uporządkowany: opis sprawy, ustalenie trybu, kontakt ze
            stronami, spotkanie mediacyjne i ewentualna ugoda.
          </p>
        </div>

        <div className="grid-4 process">
          {steps.map((item) => (
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
            <h2>Najczęstsze pytania o mediacje cywilne.</h2>
          </div>
          <p>
            Krótko o mediacji przed pozwem, sprawach o zapłatę, ugodzie i
            mediacji online.
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
            <h2>Opisz sprawę cywilną do mediacji.</h2>
            <p>
              W wiadomości podaj rodzaj sporu, liczbę stron, etap postępowania,
              wartość przedmiotu sporu i preferowany sposób kontaktu.
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
                Wyślij opis sprawy
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

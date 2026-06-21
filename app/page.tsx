import type { Metadata } from "next";
import {
  faqPageJsonLd,
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
    href: "/mediacje-cywilne-krakow",
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
    title: "Wysyłasz opis sprawy",
    text: "Podajesz rodzaj konfliktu, liczbę stron, etap postępowania oraz informację, czy sprawa została już skierowana do mediacji."
  },
  {
    title: "Mediator sprawdza informacje",
    text: "Na podstawie wiadomości ustalane są podstawowe kwestie organizacyjne i możliwy tryb dalszego kontaktu."
  },
  {
    title: "Ustalany jest tryb mediacji",
    text: "Mediacja może odbyć się stacjonarnie w Krakowie albo online, jeżeli charakter sprawy i zgoda stron na to pozwalają."
  },
  {
    title: "Strony otrzymują dalsze kroki",
    text: "W zależności od sprawy ustalany jest termin, forma spotkania, zakres potrzebnych danych i dokumentów."
  },
  {
    title: "Protokół albo ugoda",
    text: "Po mediacji sporządzany jest protokół. Jeżeli strony osiągną porozumienie, możliwe jest przygotowanie ugody mediacyjnej."
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
    question: "Czy mediator decyduje, kto ma rację?",
    answer:
      "Nie. Mediator nie wydaje rozstrzygnięcia, nie zastępuje sądu i nie reprezentuje żadnej ze stron. Jego rolą jest prowadzenie rozmowy w sposób bezstronny, poufny i uporządkowany."
  },
  {
    question: "Czy mediacja jest poufna?",
    answer:
      "Tak. Co do zasady mediacja jest poufna. Informacje ujawnione w mediacji nie powinny być wykorzystywane poza jej przebiegiem, z zastrzeżeniem wyjątków wynikających z przepisów prawa."
  },
  {
    question: "Czy mogę skorzystać z mediacji, jeżeli sprawa jest już w sądzie?",
    answer:
      "Tak. Mediacja może odbywać się przed wszczęciem postępowania albo w toku sprawy sądowej, jeżeli pozwalają na to okoliczności danej sprawy."
  },
  {
    question: "Czy możliwa jest mediacja online?",
    answer:
      "Tak. Mediacja może odbywać się online, zwłaszcza gdy strony mieszkają w różnych miejscowościach albo za granicą."
  },
  {
    question: "Czy mediacja karna jest bezpłatna dla stron?",
    answer:
      "Tak. W sprawach karnych koszty mediacji nie obciążają stron postępowania. Wynagrodzenie mediatora i zwrot wydatków ponosi Skarb Państwa."
  },
  {
    question: "Czy muszę wiedzieć, czy moja sprawa jest rodzinna, cywilna, karna czy gospodarcza?",
    answer:
      "Nie. Wystarczy krótko opisać sytuację. Mediator wskaże, jakie informacje są potrzebne organizacyjnie do dalszego kontaktu."
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
  const faqSchema = faqPageJsonLd(faqItems);

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
            <a href="#sytuacje">Sytuacje</a>
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

          <h1>
            Mediator sądowy w Krakowie — mediacje rodzinne, karne, cywilne i
            gospodarcze.
          </h1>

          <p className="lead">
            Pomagam stronom uporządkować konflikt, przygotować rozmowę i — jeżeli
            to możliwe — wypracować ugodę bez eskalacji sporu. Prowadzę mediacje
            stacjonarne w Krakowie oraz online, także w języku polskim,
            angielskim i ukraińskim.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="/kontakt">
              Umów mediację
            </a>
            <a className="button button-secondary" href="/kontakt">
              Wyślij opis sprawy
            </a>
            <a className="button button-secondary" href="/cennik">
              Sprawdź koszt mediacji
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
              <strong>PL / EN / UA</strong>
              <span>kontakt po polsku, angielsku i ukraińsku</span>
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

      <section className="section" id="sytuacje">
        <SectionHeading
          label="Wybierz swoją sytuację"
          title="Nie musisz znać rodzaju mediacji. Wybierz problem, od którego chcesz zacząć."
          text="Poniższe ścieżki pomagają szybciej przejść od problemu do właściwego kontaktu: rodzinnego, karnego, cywilnego, gospodarczego, online albo wielojęzycznego."
        />

        <div className="grid-3">
          <article className="card">
            <span className="tag">Rodzina</span>
            <h3>Kontakty z dzieckiem, alimenty albo rozwód</h3>
            <p>
              Sprawy rodzinne wymagają spokojnego uporządkowania rozmowy:
              opieka, kontakty, alimenty, plan wychowawczy, rozstanie albo
              podział obowiązków.
            </p>
            <a className="card-link" href="/mediacje-rodzinne-krakow">
              Mediacje rodzinne →
            </a>
          </article>

          <article className="card card-gold">
            <span className="tag">Karne</span>
            <h3>Sprawa karna, szkoda, przeprosiny albo zadośćuczynienie</h3>
            <p>
              W sprawach karnych mediacja może dotyczyć skutków czynu,
              naprawienia szkody, przeprosin, zadośćuczynienia i warunków
              porozumienia.
            </p>
            <a className="card-link" href="/mediacje-karne-krakow">
              Mediacje karne →
            </a>
          </article>

          <article className="card">
            <span className="tag">Cywilne</span>
            <h3>Spór o zapłatę, umowę, sąsiada albo rozliczenia</h3>
            <p>
              Mediacja cywilna może pomóc w sprawach prywatnych, majątkowych,
              sąsiedzkich, umownych i rozliczeniowych.
            </p>
            <a className="card-link" href="/mediacje-cywilne-krakow">
              Spory cywilne →
            </a>
          </article>

          <article className="card">
            <span className="tag">Biznes</span>
            <h3>Kontrahent, faktura, wspólnicy albo spór firmowy</h3>
            <p>
              Mediacje gospodarcze są dla przedsiębiorców, którzy chcą omówić
              rozliczenia, umowy, odpowiedzialność albo warunki zakończenia
              sporu.
            </p>
            <a className="card-link" href="/mediacje-gospodarcze-krakow">
              Mediacje gospodarcze →
            </a>
          </article>

          <article className="card card-dark">
            <span className="tag">Online</span>
            <h3>Strony są w różnych miastach albo państwach</h3>
            <p>
              Mediacja online może być właściwa, gdy strony mieszkają daleko,
              potrzebują szybkiego kontaktu albo nie mogą spotkać się w
              Krakowie.
            </p>
            <a className="card-link" href="/mediacje-online">
              Mediacje online →
            </a>
          </article>

          <article className="card">
            <span className="tag">Nie wiem</span>
            <h3>Nie wiem, czy moja sprawa nadaje się do mediacji</h3>
            <p>
              Nie musisz samodzielnie kwalifikować sprawy. Opisz sytuację,
              liczbę stron, etap postępowania i preferowany sposób kontaktu.
            </p>
            <a className="card-link" href="/kontakt">
              Opisz sprawę →
            </a>
          </article>
        </div>
      </section>

      <section className="section compact">
        <div className="feature green">
          <div>
            <p className="section-label">Pierwszy kontakt</p>
            <h2>Nie wiesz, jaki rodzaj mediacji wybrać?</h2>
          </div>

          <div>
            <p>
              Nie musisz samodzielnie kwalifikować swojej sprawy. W wiadomości
              opisz krótko sytuację, etap postępowania, liczbę stron oraz
              informację, czy sprawa została już skierowana do mediacji przez
              sąd, prokuraturę albo Policję.
            </p>
            <p>
              Na tej podstawie mediator wskaże, jakie informacje są potrzebne
              organizacyjnie do dalszego kontaktu i jaki tryb mediacji może być
              właściwy: rodzinny, karny, cywilny, gospodarczy albo online.
            </p>

            <div className="labels">
              <span className="label">rodzinna</span>
              <span className="label">karna</span>
              <span className="label">cywilna</span>
              <span className="label">gospodarcza</span>
              <span className="label">online</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Rola mediatora"
          title="Mediator nie jest sędzią."
          text="Mediator nie rozstrzyga sporu, nie reprezentuje żadnej ze stron i nie narzuca rozwiązania. Jego zadaniem jest prowadzenie rozmowy w sposób bezstronny, poufny i uporządkowany."
        />

        <div className="grid-3">
          <article className="card">
            <span className="tag">Bezstronność</span>
            <h3>Neutralne prowadzenie rozmowy</h3>
            <p>
              Mediator dba o strukturę spotkania i warunki rozmowy, ale nie
              wskazuje, która strona ma rację.
            </p>
          </article>

          <article className="card">
            <span className="tag">Poufność</span>
            <h3>Bezpieczna przestrzeń rozmowy</h3>
            <p>
              Mediacja pozwala omówić konflikt w sposób spokojny i ograniczyć
              dalszą eskalację sporu.
            </p>
          </article>

          <article className="card card-gold">
            <span className="tag">Ugoda</span>
            <h3>Możliwe porozumienie stron</h3>
            <p>
              Jeżeli strony osiągną porozumienie, możliwe jest przygotowanie
              ugody mediacyjnej odpowiadającej ustaleniom stron.
            </p>
          </article>
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
          label="Jak wygląda kontakt z mediatorem"
          title="Prosty proces, spokojna struktura rozmowy."
          text="Od pierwszej wiadomości do ustalenia trybu mediacji użytkownik powinien wiedzieć, co stanie się dalej i jakie informacje będą potrzebne."
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

      
<section className="section">
  <div className="feature green">
    <div>
      <p className="section-label">Mediacje w Krakowie</p>
      <h2>Najczęściej wybierane mediacje</h2>
      <p>
        Sprawdź najważniejsze obszary mediacji: pomoc mediatora w Krakowie,
        mediacje rodzinne oraz mediacje karne. Każda z tych stron opisuje
        konkretny typ sprawy, przygotowanie do mediacji i możliwe formy kontaktu.
      </p>
    </div>

    <div className="cards three">
      <article className="card">
        <span className="tag">Mediator Kraków</span>
        <h3>Mediator sądowy i pozasądowy</h3>
        <p>
          Mediacje sądowe, pozasądowe, rodzinne, karne, cywilne, gospodarcze
          oraz online w Krakowie.
        </p>
        <a className="text-link" href="/mediator-krakow">
          Zobacz stronę mediatora →
        </a>
      </article>

      <article className="card">
        <span className="tag">Sprawy rodzinne</span>
        <h3>Mediacje rodzinne Kraków</h3>
        <p>
          Rozwód, alimenty, kontakty z dzieckiem, plan wychowawczy, opieka i
          porozumienie rodzicielskie.
        </p>
        <a className="text-link" href="/mediacje-rodzinne-krakow">
          Zobacz mediacje rodzinne →
        </a>
      </article>

      <article className="card">
        <span className="tag">Sprawy karne</span>
        <h3>Mediacje karne Kraków</h3>
        <p>
          Rozmowa pokrzywdzonego i sprawcy, naprawienie szkody, przeprosiny,
          zadośćuczynienie i ugoda.
        </p>
        <a className="text-link" href="/mediacje-karne-krakow">
          Zobacz mediacje karne →
        </a>
      </article>

      <article className="card">
        <span className="tag">Sprawy gospodarcze</span>
        <h3>Mediacje gospodarcze Kraków</h3>
        <p>
          Spory firm, umowy, rozliczenia, zapłata, kontrahenci, wspólnicy i
          ugody biznesowe.
        </p>
        <a className="text-link" href="/mediacje-gospodarcze-krakow">
          Zobacz mediacje gospodarcze →
        </a>
      </article>

      <article className="card">
        <span className="tag">Online</span>
        <h3>Mediacje online</h3>
        <p>
          Mediacje rodzinne, gospodarcze i cywilne prowadzone zdalnie, gdy strony
          mieszkają w różnych miejscach albo potrzebują szybkiego kontaktu.
        </p>
        <a className="text-link" href="/mediacje-online">
          Zobacz mediacje online →
        </a>
      </article>
    </div>
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
            <a className="card-link" href="/mediacje-cywilne-krakow">
              Zobacz mediacje cywilne →
            </a>
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
          <a className="button button-secondary" href="/#kwalifikacje">
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
            <h2>Opisz sprawę do mediacji.</h2>
            <p>
              Nie musisz znać przepisów ani właściwego rodzaju mediacji. Wystarczy
              krótki opis sytuacji. Mediator odpowie, jakie informacje są
              potrzebne do dalszego kontaktu i czy sprawa może zostać wstępnie
              zakwalifikowana do mediacji.
            </p>

            <div className="labels">
              <span className="label">rodzaj sprawy</span>
              <span className="label">liczba stron</span>
              <span className="label">etap postępowania</span>
              <span className="label">tryb kontaktu</span>
            </div>
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

            <div className="grid-3">
              <article className="card">
                <span className="tag">1</span>
                <h3>Rodzaj sprawy</h3>
                <p>Rodzinna, karna, cywilna, gospodarcza, online albo „nie wiem”.</p>
              </article>

              <article className="card">
                <span className="tag">2</span>
                <h3>Etap sprawy</h3>
                <p>Czy sprawa jest już w sądzie, prokuraturze albo Policji?</p>
              </article>

              <article className="card">
                <span className="tag">3</span>
                <h3>Kontakt</h3>
                <p>Podaj telefon, e-mail oraz preferowany sposób kontaktu.</p>
              </article>
            </div>

            <p>
              Przy pierwszej wiadomości warto podać: rodzaj sprawy, liczbę stron,
              etap postępowania, informację o skierowaniu do mediacji oraz
              preferowany tryb spotkania.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href={`tel:${phoneHref}`}>
                Zadzwoń
              </a>
              <a
                className="button button-secondary"
                href={`mailto:${email}?subject=Opis%20sprawy%20do%20mediacji&body=Dzie%C5%84%20dobry,%0A%0AChcia%C5%82bym%2Fchcia%C5%82abym%20opisa%C4%87%20spraw%C4%99%20do%20mediacji.%0A%0ARodzaj%20sprawy:%20%0ALiczba%20stron:%20%0ACzy%20sprawa%20jest%20w%20s%C4%85dzie%2Fprokuraturze%2FPolicji:%20%0ACzy%20sprawa%20zosta%C5%82a%20skierowana%20do%20mediacji:%20%0APreferowany%20tryb%20kontaktu:%20%0AKr%C3%B3tki%20opis%20sprawy:%20%0A%0A`}
              >
                Wyślij opis sprawy
              </a>
              <a className="button button-secondary" href="/cennik">
                Sprawdź cennik
              </a>
            </div>

            <p>
              Przesłanie wiadomości nie oznacza zawarcia umowy ani rozpoczęcia
              mediacji. Dane są wykorzystywane w celu odpowiedzi na zapytanie.
            </p>
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
            <a className="footer-link" href="/#kwalifikacje">
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
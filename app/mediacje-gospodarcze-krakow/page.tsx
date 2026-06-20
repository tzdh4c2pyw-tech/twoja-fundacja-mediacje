import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mediacje gospodarcze Kraków | Spory firm, umowy, zapłata",
  description:
    "Mediacje gospodarcze w Krakowie i online: spory między przedsiębiorcami, kontrahentami, wspólnikami, sprawy o zapłatę, umowy i ugody biznesowe.",
  alternates: {
    canonical: "/mediacje-gospodarcze-krakow",
  },
};

const faq = [
  {
    question: "Czym są mediacje gospodarcze?",
    answer:
      "Mediacje gospodarcze to poufne i dobrowolne rozmowy między przedsiębiorcami lub innymi uczestnikami obrotu gospodarczego, prowadzone z udziałem bezstronnego mediatora.",
  },
  {
    question: "W jakich sprawach gospodarczych można skorzystać z mediacji?",
    answer:
      "Mediacja może dotyczyć sporów o zapłatę, wykonanie umowy, rozliczenia, współpracę handlową, spory między wspólnikami, odpowiedzialność kontraktową albo warunki dalszej współpracy.",
  },
  {
    question: "Czy mediacje gospodarcze mogą odbywać się online?",
    answer:
      "Tak. W wielu sprawach gospodarczych mediacje online są praktycznym rozwiązaniem, szczególnie gdy strony prowadzą działalność w różnych miejscach.",
  },
  {
    question: "Co może zawierać ugoda gospodarcza?",
    answer:
      "Ugoda może obejmować harmonogram spłaty, zmniejszenie lub rozłożenie należności, sposób wykonania umowy, zwrot rzeczy, zmianę zasad współpracy albo inne ustalenia przyjęte przez strony.",
  },
];

export default function MediacjeGospodarczeKrakowPage() {
  const baseUrl = "https://twoja-fundacja-mediacje.vercel.app";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mediacje gospodarcze Kraków",
        item: `${baseUrl}/mediacje-gospodarcze-krakow`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mediacje gospodarcze Kraków",
    description:
      "Mediacje gospodarcze w Krakowie i online w sporach między przedsiębiorcami, kontrahentami, wspólnikami oraz stronami umów.",
    url: `${baseUrl}/mediacje-gospodarcze-krakow`,
    areaServed: ["Kraków", "Małopolskie", "Polska"],
    serviceType: [
      "mediacje gospodarcze",
      "mediacje biznesowe",
      "spory o zapłatę",
      "spory między przedsiębiorcami",
      "ugoda gospodarcza",
      "mediacje online",
    ],
  };

  return (
    <main className="family-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="family-hero">
        <div className="family-container">
          <p className="family-eyebrow">Mediator gospodarczy Kraków i online</p>

          <h1>Mediacje gospodarcze w Krakowie: spory firm, umowy i zapłata</h1>

          <p className="family-lead">
            Mediacje gospodarcze pomagają przedsiębiorcom rozmawiać o sporach
            biznesowych w sposób poufny, rzeczowy i nastawiony na praktyczne
            rozwiązanie: ugodę, harmonogram spłaty, zmianę zasad współpracy albo
            zakończenie konfliktu.
          </p>

          <div className="family-actions">
            <Link href="/#kontakt" className="family-button family-button-primary">
              Skontaktuj się z mediatorem
            </Link>

            <Link href="/cennik" className="family-button family-button-secondary">
              Sprawdź cennik mediacji
            </Link>
          </div>
        </div>
      </section>

      <section className="family-section">
        <div className="family-container">
          <div className="family-grid family-grid-3">
            <article className="family-card">
              <h2>Spory o zapłatę</h2>
              <p>
                Mediacja może pomóc ustalić harmonogram spłaty, częściowe
                rozliczenie, termin płatności albo inne warunki zakończenia sporu.
              </p>
            </article>

            <article className="family-card">
              <h2>Spory z kontrahentem</h2>
              <p>
                Strony mogą omówić wykonanie umowy, jakość usług, dostawy,
                reklamacje, odpowiedzialność i warunki dalszej współpracy.
              </p>
            </article>

            <article className="family-card">
              <h2>Spory między wspólnikami</h2>
              <p>
                Mediacja może wspierać rozmowę o rozliczeniach, podziale zadań,
                odpowiedzialności, wyjściu ze spółki albo dalszym prowadzeniu firmy.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="family-section family-section-alt">
        <div className="family-container">
          <h2 className="family-section-title">
            Kiedy mediacja gospodarcza może być korzystna?
          </h2>

          <div className="family-grid family-grid-2">
            <article className="family-card">
              <h3>Gdy liczy się czas</h3>
              <p>
                Spór sądowy może trwać długo. Mediacja pozwala szybciej sprawdzić,
                czy strony są w stanie uzgodnić praktyczne rozwiązanie.
              </p>
            </article>

            <article className="family-card">
              <h3>Gdy strony chcą zachować relacje biznesowe</h3>
              <p>
                W wielu sporach gospodarczych ważne jest nie tylko rozliczenie,
                ale też możliwość dalszej współpracy albo spokojnego zakończenia relacji.
              </p>
            </article>

            <article className="family-card">
              <h3>Gdy potrzebna jest poufność</h3>
              <p>
                Mediacja pozwala rozmawiać o konflikcie bez publicznego omawiania
                szczegółów relacji handlowej, dokumentów i warunków współpracy.
              </p>
            </article>

            <article className="family-card">
              <h3>Gdy ugoda jest lepsza niż wyrok</h3>
              <p>
                Strony mogą ustalić rozwiązanie bardziej elastyczne niż typowe
                rozstrzygnięcie sądowe, np. raty, terminy, świadczenia wzajemne
                albo zmianę umowy.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="family-section">
        <div className="family-container">
          <h2 className="family-section-title">
            Jak przygotować się do mediacji gospodarczej?
          </h2>

          <div className="family-grid family-grid-3">
            <article className="family-card">
              <span className="family-step">Krok 1</span>
              <h3>Określ przedmiot sporu</h3>
              <p>
                Wskaż, czy sprawa dotyczy zapłaty, wykonania umowy, rozliczeń,
                reklamacji, współpracy, wspólników albo innego problemu.
              </p>
            </article>

            <article className="family-card">
              <span className="family-step">Krok 2</span>
              <h3>Przygotuj dokumenty</h3>
              <p>
                Przydatne mogą być umowy, faktury, wezwania do zapłaty,
                korespondencja, potwierdzenia przelewów i wcześniejsze ustalenia.
              </p>
            </article>

            <article className="family-card">
              <span className="family-step">Krok 3</span>
              <h3>Przygotuj możliwe warunki ugody</h3>
              <p>
                Warto określić minimalne warunki porozumienia, możliwe terminy,
                zakres ustępstw i oczekiwania wobec drugiej strony.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="family-section family-section-alt">
        <div className="family-container family-narrow">
          <h2 className="family-section-title">Najczęstsze pytania</h2>

          <div className="family-faq-list">
            {faq.map((item) => (
              <article key={item.question} className="family-card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="family-section">
        <div className="family-container">
          <h2 className="family-section-title">Powiązane strony</h2>

          <div className="family-link-grid">
            <Link href="/mediator-krakow" className="family-link-card">
              Mediator Kraków
            </Link>

            <Link href="/mediacje-rodzinne-krakow" className="family-link-card">
              Mediacje rodzinne Kraków
            </Link>

            <Link href="/mediacje-karne-krakow" className="family-link-card">
              Mediacje karne Kraków
            </Link>
          </div>
        </div>
      </section>

      <section className="family-cta">
        <div className="family-container">
          <h2>Chcesz omówić spór gospodarczy z mediatorem?</h2>

          <p>
            Opisz krótko strony sporu, rodzaj umowy, etap sprawy i to, czy sprawa
            dotyczy zapłaty, wykonania zobowiązania, rozliczeń lub dalszej współpracy.
          </p>

          <div className="family-actions">
            <Link href="/#kontakt" className="family-button family-button-light">
              Przejdź do kontaktu
            </Link>

            <Link href="/cennik" className="family-button family-button-outline-light">
              Zobacz cennik
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

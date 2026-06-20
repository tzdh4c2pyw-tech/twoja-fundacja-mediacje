import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mediacje karne Kraków | Pokrzywdzony, sprawca, ugoda",
  description:
    "Mediacje karne w Krakowie: rozmowa pokrzywdzonego i sprawcy, naprawienie szkody, przeprosiny, zadośćuczynienie i ugoda. Mediacje karne mogą być bezpłatne dla stron.",
  alternates: {
    canonical: "/mediacje-karne-krakow",
  },
};

const faq = [
  {
    question: "Czym są mediacje karne?",
    answer:
      "Mediacje karne to poufne i dobrowolne spotkania prowadzone przez bezstronnego mediatora, w których pokrzywdzony i sprawca mogą porozmawiać o skutkach czynu, naprawieniu szkody, przeprosinach, zadośćuczynieniu lub innym sposobie zakończenia konfliktu.",
  },
  {
    question: "Czy mediacje karne są obowiązkowe?",
    answer:
      "Nie. Mediacja karna jest dobrowolna. Udział w mediacji wymaga zgody stron, a każda ze stron może zrezygnować z udziału.",
  },
  {
    question: "Czy mediacje karne są bezpłatne dla stron?",
    answer:
      "W sprawach karnych kierowanych przez uprawniony organ koszty mediacji co do zasady nie obciążają stron. W praktyce oznacza to, że pokrzywdzony i sprawca nie płacą mediatorowi bezpośrednio za udział w takiej mediacji.",
  },
  {
    question: "Co może być wynikiem mediacji karnej?",
    answer:
      "Wynikiem mediacji może być ugoda, przeprosiny, ustalenie sposobu naprawienia szkody, zapłata określonej kwoty, zobowiązanie do określonego zachowania albo inne porozumienie zaakceptowane przez strony.",
  },
];

export default function MediacjeKarneKrakowPage() {
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
        name: "Mediacje karne Kraków",
        item: `${baseUrl}/mediacje-karne-krakow`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mediacje karne Kraków",
    description:
      "Mediacje karne w Krakowie prowadzone w sprawach między pokrzywdzonym i sprawcą, dotyczące naprawienia szkody, przeprosin, zadośćuczynienia i ugody.",
    url: `${baseUrl}/mediacje-karne-krakow`,
    areaServed: ["Kraków", "Małopolskie", "Polska"],
    serviceType: [
      "mediacje karne",
      "mediacje między pokrzywdzonym i sprawcą",
      "ugoda w sprawie karnej",
      "naprawienie szkody",
      "zadośćuczynienie",
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
          <p className="family-eyebrow">Mediator karny Kraków</p>

          <h1>Mediacje karne w Krakowie: pokrzywdzony, sprawca i ugoda</h1>

          <p className="family-lead">
            Mediacje karne pozwalają pokrzywdzonemu i sprawcy porozmawiać o
            skutkach czynu, odpowiedzialności, naprawieniu szkody, przeprosinach,
            zadośćuczynieniu oraz możliwym porozumieniu.
          </p>

          <div className="family-actions">
            <Link href="/#kontakt" className="family-button family-button-primary">
              Skontaktuj się w sprawie mediacji
            </Link>

            <Link href="/cennik" className="family-button family-button-secondary">
              Sprawdź koszty mediacji
            </Link>
          </div>
        </div>
      </section>

      <section className="family-section">
        <div className="family-container">
          <div className="family-grid family-grid-3">
            <article className="family-card">
              <h2>Pokrzywdzony</h2>
              <p>
                Pokrzywdzony może przedstawić skutki zdarzenia, swoje oczekiwania
                i warunki, które uważa za istotne dla możliwego porozumienia.
              </p>
            </article>

            <article className="family-card">
              <h2>Sprawca</h2>
              <p>
                Sprawca może odnieść się do sytuacji, zaproponować sposób
                naprawienia szkody, przeprosiny albo inne działania prowadzące do
                zakończenia sporu.
              </p>
            </article>

            <article className="family-card">
              <h2>Ugoda</h2>
              <p>
                Porozumienie może obejmować naprawienie szkody, zadośćuczynienie,
                przeprosiny, zwrot rzeczy, zapłatę określonej kwoty albo inne
                ustalenia zaakceptowane przez strony.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="family-section family-section-alt">
        <div className="family-container">
          <h2 className="family-section-title">
            Kiedy mediacja karna może być szczególnie przydatna?
          </h2>

          <div className="family-grid family-grid-2">
            <article className="family-card">
              <h3>Gdy strony chcą porozmawiać o skutkach czynu</h3>
              <p>
                Mediacja daje możliwość spokojnej rozmowy o tym, co się wydarzyło,
                jakie skutki wywołało zdarzenie i jakie oczekiwania mają strony.
              </p>
            </article>

            <article className="family-card">
              <h3>Gdy możliwe jest naprawienie szkody</h3>
              <p>
                Strony mogą ustalić sposób naprawienia szkody, termin wykonania
                zobowiązania, wysokość świadczenia albo inne praktyczne działania.
              </p>
            </article>

            <article className="family-card">
              <h3>Gdy ważne są przeprosiny lub zadośćuczynienie</h3>
              <p>
                W niektórych sprawach kluczowe znaczenie ma nie tylko kwota, ale
                również przeproszenie, uznanie skutków zdarzenia i zamknięcie
                konfliktu.
              </p>
            </article>

            <article className="family-card">
              <h3>Gdy sprawa została skierowana do mediacji</h3>
              <p>
                Mediacja karna może odbywać się na podstawie skierowania przez
                uprawniony organ. Udział stron pozostaje dobrowolny.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="family-section">
        <div className="family-container">
          <h2 className="family-section-title">Jak przygotować się do mediacji karnej?</h2>

          <div className="family-grid family-grid-3">
            <article className="family-card">
              <span className="family-step">Krok 1</span>
              <h3>Określ swoje oczekiwania</h3>
              <p>
                Warto wcześniej przemyśleć, czego oczekujesz od drugiej strony:
                przeprosin, zapłaty, naprawienia szkody albo innego zachowania.
              </p>
            </article>

            <article className="family-card">
              <span className="family-step">Krok 2</span>
              <h3>Przygotuj informacje o sprawie</h3>
              <p>
                Pomocne mogą być dokumenty, korespondencja, informacje o szkodzie,
                rachunki, potwierdzenia kosztów albo wcześniejsze ustalenia.
              </p>
            </article>

            <article className="family-card">
              <span className="family-step">Krok 3</span>
              <h3>Ustal granice porozumienia</h3>
              <p>
                Dobrze jest wiedzieć, które warunki są dla Ciebie konieczne, a w
                których obszarach możliwe jest rozwiązanie kompromisowe.
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
          <h2 className="family-section-title">Powiązane informacje</h2>

          <div className="family-link-grid">
            <Link href="/cennik" className="family-link-card">
              Cennik mediacji
            </Link>

            <Link href="/mediacje-rodzinne-krakow" className="family-link-card">
              Mediacje rodzinne Kraków
            </Link>

            <Link href="/blog" className="family-link-card">
              Poradniki o mediacjach
            </Link>
          </div>
        </div>
      </section>

      <section className="family-cta">
        <div className="family-container">
          <h2>Chcesz omówić sprawę karną z mediatorem?</h2>

          <p>
            Opisz krótko, czy występujesz jako pokrzywdzony, sprawca, pełnomocnik
            albo obrońca oraz czego dotyczy sprawa.
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

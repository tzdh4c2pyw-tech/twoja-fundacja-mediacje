import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mediacje online | Mediator online, rodzinne i gospodarcze",
  description:
    "Mediacje online z mediatorem: sprawy rodzinne, gospodarcze, cywilne i inne spory możliwe do omówienia zdalnie. Sprawdź, jak wygląda mediacja przez internet.",
  alternates: {
    canonical: "/mediacje-online",
  },
};

const faq = [
  {
    question: "Czy mediacje mogą odbywać się online?",
    answer:
      "Tak. Mediacje mogą odbywać się online, jeżeli strony akceptują taką formę i charakter sprawy pozwala na prowadzenie rozmowy zdalnie.",
  },
  {
    question: "W jakich sprawach sprawdzają się mediacje online?",
    answer:
      "Mediacje online mogą sprawdzić się w sprawach rodzinnych, gospodarczych, cywilnych, sąsiedzkich, umownych i innych sporach, w których strony mogą rozmawiać zdalnie.",
  },
  {
    question: "Czy mediator online podejmuje decyzję za strony?",
    answer:
      "Nie. Mediator online nie rozstrzyga sporu i nie narzuca rozwiązania. Pomaga stronom rozmawiać i poszukiwać porozumienia.",
  },
];

export default function MediacjeOnlinePage() {
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
        name: "Mediacje online",
        item: `${baseUrl}/mediacje-online`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mediacje online",
    description:
      "Mediacje online w sprawach rodzinnych, gospodarczych, cywilnych i innych sporach możliwych do prowadzenia zdalnie.",
    url: `${baseUrl}/mediacje-online`,
    areaServed: ["Polska", "Kraków", "Małopolskie"],
    serviceType: [
      "mediacje online",
      "mediator online",
      "mediacje rodzinne online",
      "mediacje gospodarcze online",
      "mediacje cywilne online",
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
          <p className="family-eyebrow">Mediator online</p>

          <h1>Mediacje online: rozmowa z mediatorem bez wychodzenia z domu</h1>

          <p className="family-lead">
            Mediacje online pozwalają prowadzić rozmowę z mediatorem zdalnie,
            gdy strony mieszkają w różnych miejscach, mają ograniczony czas albo
            chcą szybciej rozpocząć próbę porozumienia.
          </p>

          <div className="family-actions">
            <Link href="/#kontakt" className="family-button family-button-primary">
              Umów mediację online
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
              <h2>Mediacje rodzinne online</h2>
              <p>
                Rozmowy dotyczące kontaktów z dzieckiem, alimentów, opieki,
                planu wychowawczego i innych spraw rodzinnych mogą odbywać się zdalnie.
              </p>
            </article>

            <article className="family-card">
              <h2>Mediacje gospodarcze online</h2>
              <p>
                Spory między firmami, kontrahentami i wspólnikami często można
                omówić bez osobistego spotkania, szczególnie przy dokumentach elektronicznych.
              </p>
            </article>

            <article className="family-card">
              <h2>Mediacje cywilne online</h2>
              <p>
                W wielu sprawach cywilnych zdalna mediacja pozwala szybciej
                ustalić stanowiska stron i sprawdzić możliwość ugody.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="family-section family-section-alt">
        <div className="family-container">
          <h2 className="family-section-title">
            Kiedy warto rozważyć mediację online?
          </h2>

          <div className="family-grid family-grid-2">
            <article className="family-card">
              <h3>Gdy strony są w różnych miejscach</h3>
              <p>
                Mediacja online ułatwia kontakt, gdy strony mieszkają w różnych
                miastach, za granicą albo mają trudność z osobistym spotkaniem.
              </p>
            </article>

            <article className="family-card">
              <h3>Gdy ważny jest szybki termin</h3>
              <p>
                Forma zdalna może ułatwić ustalenie terminu i rozpoczęcie rozmów
                bez konieczności organizowania dojazdu.
              </p>
            </article>

            <article className="family-card">
              <h3>Gdy dokumenty są elektroniczne</h3>
              <p>
                W sprawach gospodarczych i cywilnych dokumenty często można
                przesłać elektronicznie przed spotkaniem.
              </p>
            </article>

            <article className="family-card">
              <h3>Gdy strony chcą ograniczyć stres</h3>
              <p>
                Dla części osób rozmowa zdalna może być mniej obciążająca niż
                spotkanie w jednym pomieszczeniu.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="family-section">
        <div className="family-container">
          <h2 className="family-section-title">Jak przygotować się do mediacji online?</h2>

          <div className="family-grid family-grid-3">
            <article className="family-card">
              <span className="family-step">Krok 1</span>
              <h3>Opisz sprawę</h3>
              <p>
                Wskaż, czego dotyczy konflikt, kto jest stroną sprawy i czy
                druga strona wyraża gotowość do rozmowy.
              </p>
            </article>

            <article className="family-card">
              <span className="family-step">Krok 2</span>
              <h3>Przygotuj dokumenty</h3>
              <p>
                Przydatne mogą być umowy, pisma, korespondencja, rachunki,
                wcześniejsze ustalenia albo orzeczenia.
              </p>
            </article>

            <article className="family-card">
              <span className="family-step">Krok 3</span>
              <h3>Zapewnij spokojne warunki</h3>
              <p>
                Na czas mediacji warto wybrać ciche miejsce, stabilne połączenie
                internetowe i możliwość swobodnej rozmowy.
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

            <Link href="/mediacje-gospodarcze-krakow" className="family-link-card">
              Mediacje gospodarcze Kraków
            </Link>
          </div>
        </div>
      </section>

      <section className="family-cta">
        <div className="family-container">
          <h2>Chcesz omówić sprawę z mediatorem online?</h2>

          <p>
            Opisz krótko rodzaj sprawy, etap konfliktu i to, czy strony są gotowe
            do rozmowy zdalnej.
          </p>

          <div className="family-actions">
            <Link href="/#kontakt" className="family-button family-button-light">
              Przejdź do kontaktu
            </Link>

            <Link href="/blog" className="family-button family-button-outline-light">
              Zobacz poradniki
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

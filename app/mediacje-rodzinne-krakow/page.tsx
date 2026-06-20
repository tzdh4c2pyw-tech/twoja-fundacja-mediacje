import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mediacje rodzinne Kraków | Rozwód, alimenty, kontakty z dzieckiem",
  description:
    "Mediacje rodzinne w Krakowie i online: rozwód, alimenty, kontakty z dzieckiem, opieka, plan wychowawczy i ugoda rodzicielska. Sprawdź, jak przygotować się do mediacji.",
  alternates: {
    canonical: "/mediacje-rodzinne-krakow",
  },
};

const faq = [
  {
    question: "Czym są mediacje rodzinne?",
    answer:
      "Mediacje rodzinne to poufne i dobrowolne spotkania z mediatorem, których celem jest wypracowanie porozumienia w sprawach rodzinnych, takich jak rozwód, alimenty, kontakty z dzieckiem, opieka lub podział obowiązków rodzicielskich.",
  },
  {
    question: "Czy mediacje rodzinne w Krakowie mogą odbyć się online?",
    answer:
      "Tak. Mediacje rodzinne mogą odbywać się stacjonarnie w Krakowie albo online, jeżeli strony akceptują taką formę rozmowy i pozwala na to charakter sprawy.",
  },
  {
    question: "Czy mediator podejmuje decyzję za strony?",
    answer:
      "Nie. Mediator nie jest sędzią i nie narzuca rozstrzygnięcia. Pomaga stronom rozmawiać, porządkować sporne kwestie i poszukiwać rozwiązania możliwego do zaakceptowania przez obie strony.",
  },
  {
    question: "W jakich sprawach rodzinnych warto skorzystać z mediacji?",
    answer:
      "Mediacja może pomóc w sprawach o rozwód, separację, alimenty, kontakty z dzieckiem, wykonywanie władzy rodzicielskiej, plan wychowawczy, miejsce zamieszkania dziecka oraz bieżące zasady opieki.",
  },
];

export default function MediacjeRodzinneKrakowPage() {
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
        name: "Mediacje rodzinne Kraków",
        item: `${baseUrl}/mediacje-rodzinne-krakow`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mediacje rodzinne Kraków",
    description:
      "Mediacje rodzinne w Krakowie i online w sprawach rozwodowych, alimentacyjnych, dotyczących kontaktów z dzieckiem, opieki i ugody rodzicielskiej.",
    url: `${baseUrl}/mediacje-rodzinne-krakow`,
    areaServed: ["Kraków", "Małopolskie", "Polska"],
    serviceType: [
      "mediacje rodzinne",
      "mediacje rozwodowe",
      "mediacje alimentacyjne",
      "mediacje dotyczące kontaktów z dzieckiem",
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
          <p className="family-eyebrow">Mediator rodzinny Kraków i online</p>

          <h1>Mediacje rodzinne w Krakowie: rozwód, alimenty i kontakty z dzieckiem</h1>

          <p className="family-lead">
            Mediacje rodzinne pomagają uporządkować sporne kwestie bez eskalacji
            konfliktu. Mogą dotyczyć rozwodu, separacji, alimentów, kontaktów z
            dzieckiem, planu wychowawczego, opieki oraz bieżących zasad
            współpracy rodzicielskiej.
          </p>

          <div className="family-actions">
            <Link href="/#kontakt" className="family-button family-button-primary">
              Umów mediację
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
              <h2>Rozwód i separacja</h2>
              <p>
                Mediacja może pomóc ustalić praktyczne warunki rozstania,
                ograniczyć konflikt i przygotować porozumienie możliwe do
                przedstawienia w postępowaniu sądowym.
              </p>
            </article>

            <article className="family-card">
              <h2>Alimenty i koszty utrzymania</h2>
              <p>
                Strony mogą rozmawiać o wysokości alimentów, sposobie płatności,
                kosztach szkoły, leczenia, zajęć dodatkowych oraz innych
                wydatkach dziecka.
              </p>
            </article>

            <article className="family-card">
              <h2>Kontakty z dzieckiem</h2>
              <p>
                Mediacja pomaga ustalić harmonogram kontaktów, wakacje, święta,
                ferie, odbiór dziecka, komunikację rodziców i zasady reagowania
                na sytuacje nagłe.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="family-section family-section-alt">
        <div className="family-container">
          <h2 className="family-section-title">
            Kiedy mediacja rodzinna jest szczególnie przydatna?
          </h2>

          <div className="family-grid family-grid-2">
            <article className="family-card">
              <h3>Gdy strony chcą uniknąć eskalacji</h3>
              <p>
                Sprawy rodzinne często dotyczą silnych emocji. Mediacja pozwala
                rozmawiać w uporządkowany sposób i skupić się na rozwiązaniach,
                a nie na dalszym pogłębianiu sporu.
              </p>
            </article>

            <article className="family-card">
              <h3>Gdy w sprawie uczestniczą dzieci</h3>
              <p>
                Mediacja pomaga rodzicom oddzielić konflikt między dorosłymi od
                potrzeb dziecka i wypracować zasady opieki, kontaktów oraz
                komunikacji.
              </p>
            </article>

            <article className="family-card">
              <h3>Gdy potrzebna jest ugoda</h3>
              <p>
                Rezultatem mediacji może być ugoda rodzicielska, porozumienie
                alimentacyjne albo ustalenia dotyczące kontaktów i planu
                wychowawczego.
              </p>
            </article>

            <article className="family-card">
              <h3>Gdy sprawa jest już w sądzie</h3>
              <p>
                Mediacja może odbywać się zarówno przed sprawą sądową, jak i w
                toku postępowania, jeżeli strony chcą poszukać porozumienia.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="family-section">
        <div className="family-container">
          <h2 className="family-section-title">Jak przygotować się do mediacji rodzinnej?</h2>

          <div className="family-grid family-grid-3">
            <article className="family-card">
              <span className="family-step">Krok 1</span>
              <h3>Określ sporne kwestie</h3>
              <p>
                Wypisz, czego dotyczy konflikt: alimentów, kontaktów, opieki,
                wakacji, szkoły, kosztów albo komunikacji między rodzicami.
              </p>
            </article>

            <article className="family-card">
              <span className="family-step">Krok 2</span>
              <h3>Przygotuj propozycje</h3>
              <p>
                Warto przygotować realistyczne propozycje ugody, ale także
                wskazać, które kwestie są najważniejsze i gdzie możliwy jest
                kompromis.
              </p>
            </article>

            <article className="family-card">
              <span className="family-step">Krok 3</span>
              <h3>Zbierz dokumenty</h3>
              <p>
                Przydatne mogą być orzeczenia, pisma sądowe, zestawienia
                kosztów, harmonogramy opieki, dokumenty szkolne i wcześniejsze
                ustalenia.
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

            <Link href="/mediacje-karne-krakow" className="family-link-card">
              Mediacje karne Kraków
            </Link>

            <Link href="/blog" className="family-link-card">
              Poradniki o mediacjach
            </Link>
          </div>
        </div>
      </section>

      <section className="family-cta">
        <div className="family-container">
          <h2>Chcesz omówić sprawę rodzinną z mediatorem?</h2>

          <p>
            Opisz krótko, czego dotyczy sprawa: rozwodu, alimentów, kontaktów z
            dzieckiem, opieki, planu wychowawczego albo innego konfliktu rodzinnego.
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

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mediator Kraków | Mediator sądowy, rodzinny, karny i online",
  description:
    "Mediator w Krakowie: mediacje sądowe i pozasądowe, rodzinne, karne, cywilne, gospodarcze oraz online. Sprawdź, kiedy warto skorzystać z pomocy mediatora.",
  alternates: {
    canonical: "/mediator-krakow",
  },
};

const faq = [
  {
    question: "Kim jest mediator?",
    answer:
      "Mediator jest bezstronną osobą, która pomaga stronom prowadzić rozmowę, uporządkować sporne kwestie i poszukiwać rozwiązania możliwego do zaakceptowania przez obie strony.",
  },
  {
    question: "Czy mediator w Krakowie może prowadzić mediacje online?",
    answer:
      "Tak. Mediacje mogą odbywać się stacjonarnie w Krakowie albo online, jeżeli strony akceptują taką formę i pozwala na to charakter sprawy.",
  },
  {
    question: "Czy mediator podejmuje decyzję jak sąd?",
    answer:
      "Nie. Mediator nie rozstrzyga sporu, nie wydaje wyroku i nie narzuca rozwiązania. Decyzja o ewentualnym porozumieniu należy do stron.",
  },
  {
    question: "W jakich sprawach można skorzystać z mediatora?",
    answer:
      "Mediator może pomóc w sprawach rodzinnych, karnych, cywilnych, gospodarczych, sąsiedzkich, majątkowych oraz w sporach kierowanych do mediacji przez sąd.",
  },
];

export default function MediatorKrakowPage() {
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
        name: "Mediator Kraków",
        item: `${baseUrl}/mediator-krakow`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mediator Kraków",
    description:
      "Mediator w Krakowie prowadzący mediacje sądowe i pozasądowe, rodzinne, karne, cywilne, gospodarcze oraz online.",
    url: `${baseUrl}/mediator-krakow`,
    areaServed: ["Kraków", "Małopolskie", "Polska"],
    serviceType: [
      "mediacje sądowe",
      "mediacje pozasądowe",
      "mediacje rodzinne",
      "mediacje karne",
      "mediacje cywilne",
      "mediacje gospodarcze",
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
          <p className="family-eyebrow">Mediator sądowy Kraków i online</p>

          <h1>Mediator w Krakowie: mediacje sądowe, rodzinne, karne i online</h1>

          <p className="family-lead">
            Mediacja pomaga stronom rozmawiać o konflikcie w uporządkowany,
            poufny i bezpieczny sposób. Mediator wspiera strony w poszukiwaniu
            porozumienia, ale nie narzuca decyzji i nie zastępuje sądu.
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
              <h2>Mediacje sądowe</h2>
              <p>
                Mediacja może odbywać się po skierowaniu sprawy przez sąd.
                Pomaga stronom poszukać ugody bez dalszego przedłużania sporu.
              </p>
            </article>

            <article className="family-card">
              <h2>Mediacje pozasądowe</h2>
              <p>
                Strony mogą zgłosić się do mediatora jeszcze przed rozpoczęciem
                postępowania sądowego, aby spróbować rozwiązać konflikt szybciej.
              </p>
            </article>

            <article className="family-card">
              <h2>Mediacje online</h2>
              <p>
                W wielu sprawach możliwe są mediacje online, szczególnie gdy
                strony mieszkają w różnych miejscach albo zależy im na czasie.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="family-section family-section-alt">
        <div className="family-container">
          <h2 className="family-section-title">
            W jakich sprawach pomaga mediator w Krakowie?
          </h2>

          <div className="family-grid family-grid-2">
            <article className="family-card">
              <h3>Mediacje rodzinne</h3>
              <p>
                Sprawy o rozwód, alimenty, kontakty z dzieckiem, opiekę, plan
                wychowawczy, komunikację rodziców i inne konflikty rodzinne.
              </p>
            </article>

            <article className="family-card">
              <h3>Mediacje karne</h3>
              <p>
                Sprawy między pokrzywdzonym i sprawcą, dotyczące naprawienia
                szkody, przeprosin, zadośćuczynienia i możliwej ugody.
              </p>
            </article>

            <article className="family-card">
              <h3>Mediacje cywilne</h3>
              <p>
                Spory majątkowe, sąsiedzkie, umowne, odszkodowawcze oraz inne
                sprawy, w których strony chcą poszukać praktycznego rozwiązania.
              </p>
            </article>

            <article className="family-card">
              <h3>Mediacje gospodarcze</h3>
              <p>
                Spory między przedsiębiorcami, kontrahentami, wspólnikami albo
                stronami umów gospodarczych.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="family-section">
        <div className="family-container">
          <h2 className="family-section-title">Jak wygląda kontakt z mediatorem?</h2>

          <div className="family-grid family-grid-3">
            <article className="family-card">
              <span className="family-step">Krok 1</span>
              <h3>Krótko opisz sprawę</h3>
              <p>
                Wskaż, czego dotyczy konflikt, czy sprawa jest już w sądzie oraz
                czy druga strona wyraża gotowość do rozmowy.
              </p>
            </article>

            <article className="family-card">
              <span className="family-step">Krok 2</span>
              <h3>Ustal formę mediacji</h3>
              <p>
                Mediacja może odbywać się stacjonarnie w Krakowie albo online,
                zależnie od rodzaju sprawy i możliwości stron.
              </p>
            </article>

            <article className="family-card">
              <span className="family-step">Krok 3</span>
              <h3>Przygotuj dokumenty</h3>
              <p>
                Przydatne mogą być pisma sądowe, umowy, korespondencja, rachunki,
                wcześniejsze ustalenia albo inne dokumenty dotyczące sporu.
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
            <Link href="/mediacje-rodzinne-krakow" className="family-link-card">
              Mediacje rodzinne Kraków
            </Link>

            <Link href="/mediacje-karne-krakow" className="family-link-card">
              Mediacje karne Kraków
            </Link>

            <Link href="/cennik" className="family-link-card">
              Cennik mediacji
            </Link>
          </div>
        </div>
      </section>

      <section className="family-cta">
        <div className="family-container">
          <h2>Potrzebujesz mediatora w Krakowie?</h2>

          <p>
            Opisz krótko rodzaj sprawy, etap postępowania i preferowaną formę
            mediacji. To pozwoli szybciej ustalić możliwy tryb działania.
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

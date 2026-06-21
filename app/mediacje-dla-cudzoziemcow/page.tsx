import type { Metadata } from "next";
import { localBusinessJsonLd, siteUrl } from "@/lib/seo";

const phone = "883 040 483";
const phoneHref = "+48883040483";
const email = "mediacje@twojafundacja.pl";

export const metadata: Metadata = {
  title: "Mediacje dla cudzoziemców Kraków | PL EN UA",
  description:
    "Mediacje dla cudzoziemców w Krakowie i online. Kontakt po polsku, angielsku i ukraińsku. Mediacje rodzinne, cywilne, gospodarcze i karne.",
  alternates: {
    canonical: "/mediacje-dla-cudzoziemcow"
  },
  openGraph: {
    title: "Mediacje dla cudzoziemców Kraków | PL EN UA",
    description:
      "Mediator w Krakowie dla osób mówiących po polsku, angielsku i ukraińsku. Mediacje rodzinne, cywilne, gospodarcze, karne i online.",
    url: `${siteUrl}/mediacje-dla-cudzoziemcow`,
    type: "website",
    locale: "pl_PL"
  }
};

const situations = [
  {
    title: "Strony mieszkają w różnych państwach",
    text: "Mediacja online może pomóc, gdy jedna ze stron mieszka w Polsce, a druga za granicą albo strony nie mogą spotkać się stacjonarnie."
  },
  {
    title: "Potrzebny jest kontakt po ukraińsku",
    text: "Strona może opisać sytuację po ukraińsku, a dalsza komunikacja organizacyjna może uwzględniać barierę językową."
  },
  {
    title: "Potrzebny jest kontakt po angielsku",
    text: "Mediacja może być organizowana z udziałem osób, które wygodniej komunikują się po angielsku."
  },
  {
    title: "Sprawa rodzinna w Polsce",
    text: "Cudzoziemcy mogą potrzebować mediacji w sprawach kontaktów z dzieckiem, alimentów, opieki, rozstania albo organizacji życia rodzinnego."
  },
  {
    title: "Spór cywilny albo gospodarczy",
    text: "Mediacja może dotyczyć zapłaty, umów, rozliczeń, współpracy, usług, najmu albo sporu między kontrahentami."
  },
  {
    title: "Sprawa skierowana przez polski sąd",
    text: "Jeżeli sprawa została skierowana do mediacji przez sąd albo organ, warto przekazać sygnaturę, dokument skierowania i dane kontaktowe."
  }
];

const languages = [
  "polski",
  "angielski",
  "ukraiński",
  "kontakt online",
  "Kraków",
  "sprawy transgraniczne"
];

const process = [
  {
    title: "Opis sprawy",
    text: "Przekazujesz krótki opis sytuacji, język kontaktu, liczbę stron, kraj pobytu stron i etap postępowania."
  },
  {
    title: "Ustalenie języka i trybu",
    text: "Mediator ustala organizacyjnie, czy kontakt może odbywać się po polsku, angielsku, ukraińsku, stacjonarnie albo online."
  },
  {
    title: "Kontakt ze stronami",
    text: "Strony otrzymują informacje o dalszych krokach, terminie, trybie spotkania i podstawowych zasadach mediacji."
  },
  {
    title: "Mediacja i dokumenty",
    text: "Po mediacji sporządzany jest protokół. W razie porozumienia możliwe jest przygotowanie ugody mediacyjnej."
  }
];

const faq = [
  {
    question: "Czy mediacja może odbyć się po ukraińsku?",
    answer:
      "Kontakt organizacyjny może odbywać się po ukraińsku. Tryb i język mediacji zależą od rodzaju sprawy, stron i warunków organizacyjnych."
  },
  {
    question: "Czy mediacja może odbyć się po angielsku?",
    answer:
      "Tak, możliwy jest kontakt po angielsku, szczególnie w sprawach z udziałem cudzoziemców albo stron mieszkających za granicą."
  },
  {
    question: "Czy jedna ze stron może mieszkać za granicą?",
    answer:
      "Tak. W wielu sprawach możliwy jest kontakt online, jeżeli charakter sprawy i zgoda stron pozwalają na taki tryb."
  },
  {
    question: "Czy dokumenty muszą być po polsku?",
    answer:
      "To zależy od sprawy i procedury. Przy pierwszym kontakcie warto wskazać, w jakim języku są dokumenty i czy sprawa toczy się przed polskim sądem."
  }
];

export default function MediacjeDlaCudzoziemcowPage() {
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
                Mediacje dla cudzoziemców · PL / EN / UA
              </span>
            </span>
          </a>

          <div className="nav-links">
            <a href="/">Strona główna</a>
            <a href="/kontakt">Kontakt</a>
            <a href="/cennik">Cennik</a>
            <a href="/en">EN</a>
            <a href="/uk">UA</a>
          </div>
        </nav>
      </div>

      <section className="hero hero-premium">
        <div className="hero-main">
          <span className="eyebrow">Mediacje dla cudzoziemców · Kraków · online</span>

          <h1>
            Mediator w Krakowie dla cudzoziemców — kontakt po polsku,
            angielsku i ukraińsku.
          </h1>

          <p className="lead">
            Mediacje dla osób, które mieszkają w Polsce albo za granicą i
            potrzebują uporządkowanego kontaktu w sprawie rodzinnej, cywilnej,
            gospodarczej lub karnej. Możliwy kontakt w języku polskim,
            angielskim i ukraińskim oraz mediacje online.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="/kontakt">
              Opisz sprawę
            </a>
            <a className="button button-secondary" href="/en">
              English version
            </a>
            <a className="button button-secondary" href="/uk">
              Українська версія
            </a>
            <a className="button button-secondary" href={`tel:${phoneHref}`}>
              Zadzwoń
            </a>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>Języki</strong>
              <span>polski, angielski, ukraiński</span>
            </div>
            <div>
              <strong>Tryb</strong>
              <span>Kraków albo online</span>
            </div>
            <div>
              <strong>Sprawy</strong>
              <span>rodzinne, cywilne, gospodarcze, karne</span>
            </div>
          </div>
        </div>

        <aside className="hero-side">
          <div className="hero-badge">
            <strong>Nie mieszkasz w Polsce?</strong>
            <span>
              Opisz, gdzie mieszkają strony, jaki jest język kontaktu, czy
              sprawa toczy się w Polsce i czy możliwe jest spotkanie online.
            </span>
          </div>
        </aside>
      </section>

      <section className="trust">
        <div className="trust-inner">
          <div className="trust-item">
            <strong>PL / EN / UA</strong>
            kontakt wielojęzyczny
          </div>
          <div className="trust-item">
            <strong>Online</strong>
            dla stron z różnych państw
          </div>
          <div className="trust-item">
            <strong>Kraków</strong>
            ul. Kielecka 2/53
          </div>
          <div className="trust-item">
            <strong>Sąd</strong>
            stały mediator w Krakowie
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Sytuacje</p>
            <h2>Kiedy cudzoziemiec może potrzebować mediacji?</h2>
          </div>
          <p>
            Mediacja może być pomocna, gdy strony mają konflikt w Polsce, ale
            różnią się językiem, miejscem pobytu albo znajomością procedury.
          </p>
        </div>

        <div className="grid-3">
          {situations.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">PL / EN / UA</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section compact">
        <div className="feature green">
          <div>
            <p className="section-label">Języki i kontakt</p>
            <h2>Co podać w pierwszej wiadomości?</h2>
          </div>

          <div>
            <p>
              W pierwszym kontakcie warto podać język, w którym strony chcą się
              komunikować, miejsce pobytu stron, rodzaj sprawy, etap
              postępowania i informację, czy sprawa toczy się przed polskim
              sądem albo organem.
            </p>

            <div className="labels">
              {languages.map((item) => (
                <span className="label" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <a className="button button-secondary" href="/kontakt">
                Opisz sprawę
              </a>
              <a className="button button-secondary" href="/mediacje-online">
                Mediacje online
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Proces</p>
            <h2>Jak wygląda kontakt w sprawie wielojęzycznej?</h2>
          </div>
          <p>
            Najpierw ustalany jest język, tryb kontaktu, miejsce pobytu stron,
            rodzaj sprawy i podstawowe dokumenty organizacyjne.
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
            <h2>Najczęstsze pytania cudzoziemców.</h2>
          </div>
          <p>
            Krótko o języku mediacji, kontakcie online, stronach za granicą i
            dokumentach.
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
            <h2>Opisz sprawę w języku polskim, angielskim albo ukraińskim.</h2>
            <p>
              W wiadomości podaj język kontaktu, rodzaj sprawy, miejsce pobytu
              stron, etap postępowania i informację, czy sprawa toczy się przed
              polskim sądem albo organem.
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
              <a className="button button-secondary" href="/en">
                English
              </a>
              <a className="button button-secondary" href="/uk">
                Українською
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

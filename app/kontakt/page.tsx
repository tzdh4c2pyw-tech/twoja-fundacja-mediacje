import type { Metadata } from "next";
import ContactForm from "./ContactForm";

const phone = "883 040 483";
const phoneHref = "+48883040483";
const email = "mediacje@twojafundacja.pl";

const mailtoHref =
  "mailto:mediacje@twojafundacja.pl?subject=Opis%20sprawy%20do%20mediacji&body=Dzie%C5%84%20dobry,%0A%0AChcia%C5%82bym%2Fchcia%C5%82abym%20opisa%C4%87%20spraw%C4%99%20do%20mediacji.%0A%0ARodzaj%20sprawy:%20%0ALiczba%20stron:%20%0ACzy%20sprawa%20jest%20w%20s%C4%85dzie%2Fprokuraturze%2FPolicji:%20%0ACzy%20sprawa%20zosta%C5%82a%20skierowana%20do%20mediacji:%20%0APreferowany%20tryb%20kontaktu:%20%0AKr%C3%B3tki%20opis%20sprawy:%20%0A%0A";

const whatsappHref =
  "https://wa.me/48883040483?text=Dzie%C5%84%20dobry%2C%20chcia%C5%82bym%2Fchcia%C5%82abym%20opisa%C4%87%20spraw%C4%99%20do%20mediacji.";

export const metadata: Metadata = {
  title: "Kontakt | Mediator sądowy Kraków",
  description:
    "Kontakt z mediatorem sądowym w Krakowie. Mediacje rodzinne, karne, cywilne, gospodarcze i online. Fundacja Mediacji Sądowej i Pozasądowej, ul. Kielecka 2/53, Kraków.",
  alternates: {
    canonical: "/kontakt"
  }
};

export default function KontaktPage() {
  return (
    <main>
      <div className="topbar">
        <nav className="nav">
          <a className="brand" href="/" aria-label="Strona główna">
            <span className="brand-mark">FM</span>
            <span>
              <span className="brand-title">
                Fundacja Mediacji Sądowej i Pozasądowej
              </span>
              <span className="brand-subtitle">
                Kontakt · mediator sądowy · Kraków
              </span>
            </span>
          </a>

          <div className="nav-links">
            <a href="/">Strona główna</a>
            <a href="/cennik">Cennik</a>
            <a href="/blog">Blog</a>
            <a href="/#kwalifikacje">Kwalifikacje</a>
          </div>
        </nav>
      </div>

      <section className="hero hero-premium">
        <div className="hero-main">
          <span className="eyebrow">Kontakt · mediator sądowy Kraków</span>

          <h1>Opisz sprawę do mediacji.</h1>

          <p className="lead">
            Nie musisz znać przepisów ani właściwego rodzaju mediacji. Wystarczy
            krótki opis sytuacji, liczba stron, etap sprawy oraz informacja, czy
            sprawa została już skierowana do mediacji przez sąd, prokuraturę
            albo Policję.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${phoneHref}`}>
              Zadzwoń
            </a>
            <a className="button button-secondary" href={mailtoHref}>
              Wyślij opis sprawy
            </a>
            <a
              className="button button-secondary"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>Telefon</strong>
              <span>{phone}</span>
            </div>
            <div>
              <strong>E-mail</strong>
              <span>{email}</span>
            </div>
            <div>
              <strong>Adres</strong>
              <span>ul. Kielecka 2/53, 31-526 Kraków</span>
            </div>
          </div>
        </div>

        <aside className="hero-side">
          <div className="hero-badge">
            <strong>Co podać w wiadomości?</strong>
            <span>
              Rodzaj sprawy, liczbę stron, etap postępowania, informację o
              skierowaniu do mediacji oraz preferowany tryb kontaktu.
            </span>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="grid-3">
          <article className="card">
            <span className="tag">1</span>
            <h3>Rodzaj sprawy</h3>
            <p>
              Wskaż, czy sprawa jest rodzinna, karna, cywilna, gospodarcza,
              online albo napisz, że nie wiesz, jak ją zakwalifikować.
            </p>
          </article>

          <article className="card">
            <span className="tag">2</span>
            <h3>Etap postępowania</h3>
            <p>
              Napisz, czy sprawa jest przed sądem, w sądzie, w prokuraturze,
              na Policji albo została już skierowana do mediacji.
            </p>
          </article>

          <article className="card card-gold">
            <span className="tag">3</span>
            <h3>Preferowany kontakt</h3>
            <p>
              Podaj numer telefonu, adres e-mail oraz informację, czy wolisz
              kontakt telefoniczny, mailowy, online czy spotkanie stacjonarne.
            </p>
          </article>
        </div>
      </section>

      <ContactForm />

      <section className="section compact">
        <div className="feature green">
          <div>
            <p className="section-label">Adres</p>
            <h2>Mediacje w Krakowie i online.</h2>
          </div>

          <div>
            <p>
              Fundacja Mediacji Sądowej i Pozasądowej prowadzi mediacje w
              Krakowie przy ul. Kieleckiej 2/53, w rejonie Ronda Mogilskiego.
              W sprawach, w których jest to organizacyjnie możliwe, kontakt i
              mediacja mogą odbywać się także online.
            </p>

            <div className="labels">
              <span className="label">Kraków</span>
              <span className="label">ul. Kielecka 2/53</span>
              <span className="label">mediacje online</span>
              <span className="label">PL / EN / UA</span>
            </div>

            <div className="hero-actions">
              <a className="button button-secondary" href="/cennik">
                Sprawdź cennik
              </a>
              <a className="button button-secondary" href="/#kwalifikacje">
                Sprawdź kwalifikacje
              </a>
              <a className="button button-secondary" href="/">
                Wróć na stronę główną
              </a>
            </div>
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
            <a className="footer-link" href="/">
              Strona główna
            </a>
            <br />
            <a className="footer-link" href="/cennik">
              Cennik mediacji
            </a>
            <br />
            <a className="footer-link" href="/blog">
              Blog o mediacji
            </a>
            <br />
            <a className="footer-link" href="/kontakt">
              Kontakt
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/blog";

const phone = "883 040 483";
const phoneHref = "+48883040483";

export const metadata: Metadata = {
  title: "Blog o mediacji | Fundacja Mediacji Sądowej i Pozasądowej",
  description:
    "Blog o mediacji sądowej i pozasądowej: mediacje rodzinne, karne, cywilne, gospodarcze, online, koszty mediacji i praktyczne informacje dla stron.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Blog o mediacji | Fundacja Mediacji Sądowej i Pozasądowej",
    description:
      "Artykuły o mediacji w Krakowie, kosztach mediacji, mediacjach karnych, rodzinnych, cywilnych, gospodarczych i online.",
    url: "https://www.twojafundacja.pl/blog",
    type: "website"
  }
};

export default function BlogPage() {
  const posts = getBlogPosts("pl");

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
                Blog o mediacji · Kraków · mediacje online
              </span>
            </span>
          </a>

          <div className="nav-links">
            <a href="/">Strona główna</a>
            <a href="/cennik">Cennik</a>
            <a href="/kwalifikacje">Kwalifikacje</a>
            <a href="/blog">Blog</a>
            <a href="/#kontakt">Kontakt</a>
            <a className="nav-phone" href={`tel:${phoneHref}`}>
              {phone}
            </a>
          </div>
        </nav>
      </div>

      <section className="blog-hero">
        <div className="blog-hero-card">
          <span className="eyebrow">Blog · mediacje · Kraków</span>

          <h1>Blog o mediacji sądowej i pozasądowej.</h1>

          <p className="lead">
            Praktyczne artykuły o mediacjach rodzinnych, karnych, cywilnych,
            gospodarczych i online. Wyjaśniamy koszty mediacji, przebieg
            postępowania mediacyjnego oraz najczęstsze pytania stron.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="/cennik">
              Sprawdź cennik mediacji
            </a>
            <a className="button button-secondary" href="/#kontakt">
              Zapytaj o mediację
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Najnowsze wpisy</p>
            <h2>Artykuły i poradniki o mediacji.</h2>
          </div>
          <p>
            Wpisy mają charakter informacyjny. Nie stanowią indywidualnej porady
            prawnej ani zastępstwa konsultacji z mediatorem lub profesjonalnym
            pełnomocnikiem.
          </p>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <a href={`/blog/${post.slug}`} className="blog-card-link">
                <span className="tag">{post.category}</span>

                <h3>{post.title}</h3>

                <p>{post.description}</p>

                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span>{post.readingTime}</span>
                </div>

                <span className="blog-read-more">Czytaj wpis →</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="feature green">
          <div>
            <p className="section-label">Tematy bloga</p>
            <h2>SEO lokalne: mediacje Kraków, Polska, PL / EN / UA.</h2>
          </div>

          <div>
            <p>
              Blog będzie rozwijany jako centrum wiedzy o mediacji: koszty,
              mediacje karne, rodzinne, cywilne, gospodarcze, online oraz
              treści dla osób polskojęzycznych, ukraińskojęzycznych i
              anglojęzycznych.
            </p>

            <div className="labels">
              <span className="label">mediator Kraków</span>
              <span className="label">mediacje karne</span>
              <span className="label">mediacje rodzinne</span>
              <span className="label">koszty mediacji</span>
              <span className="label">online</span>
              <span className="label">PL / EN / UA</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="kontakt">
        <div className="contact-panel">
          <div>
            <p className="section-label">Kontakt</p>
            <h2>Masz pytanie o mediację?</h2>
            <p>
              Opisz krótko rodzaj sprawy, liczbę stron, etap postępowania i
              informację, czy sprawa dotyczy mediacji sądowej, pozasądowej,
              karnej, rodzinnej, cywilnej, gospodarczej lub online.
            </p>
          </div>

          <div className="contact-box">
            <span className="contact-line">
              <strong>Telefon:</strong>{" "}
              <a href={`tel:${phoneHref}`}>{phone}</a>
            </span>
            <span className="contact-line">
              <strong>E-mail:</strong>{" "}
              <a href="mailto:mediacje@twojafundacja.pl">
                mediacje@twojafundacja.pl
              </a>
            </span>
            <span className="contact-line">
              <strong>Adres:</strong> ul. Kielecka 2/53, 31-526 Kraków
            </span>

            <div className="hero-actions">
              <a className="button button-secondary" href={`tel:${phoneHref}`}>
                Zadzwoń
              </a>
              <a
                className="button button-secondary"
                href="mailto:mediacje@twojafundacja.pl"
              >
                Wyślij e-mail
              </a>
            </div>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .blog-hero {
              max-width: var(--max);
              margin: 0 auto;
              padding: 54px 22px 22px;
            }

            .blog-hero-card {
              border-radius: var(--radius-xl);
              border: 1px solid var(--line);
              background:
                linear-gradient(145deg, rgba(255, 250, 242, 0.96), rgba(248, 241, 230, 0.9)),
                radial-gradient(circle at 0% 0%, rgba(182, 138, 58, 0.13), transparent 38%);
              box-shadow: var(--shadow);
              padding: 58px 50px;
            }

            .blog-hero-card h1 {
              max-width: 980px;
            }

            .blog-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 18px;
            }

            .blog-card {
              min-height: 360px;
              border-radius: var(--radius-lg);
              border: 1px solid var(--line);
              background: rgba(255, 250, 242, 0.9);
              box-shadow: var(--shadow-soft);
              overflow: hidden;
              transition:
                transform 190ms ease,
                box-shadow 190ms ease,
                border-color 190ms ease;
            }

            .blog-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 26px 62px rgba(21, 17, 13, 0.14);
              border-color: rgba(182, 138, 58, 0.38);
            }

            .blog-card-link {
              min-height: 360px;
              display: flex;
              flex-direction: column;
              padding: 28px;
            }

            .blog-card h3 {
              margin: 0 0 14px;
              font-size: 31px;
              line-height: 1.02;
              letter-spacing: -0.052em;
            }

            .blog-card p {
              margin: 0;
              color: var(--muted);
              font-size: 16px;
              line-height: 1.58;
            }

            .blog-meta {
              margin-top: auto;
              padding-top: 24px;
              display: flex;
              gap: 10px;
              flex-wrap: wrap;
              color: var(--muted-2);
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 12px;
              font-weight: 850;
            }

            .blog-meta span {
              display: inline-flex;
              min-height: 32px;
              align-items: center;
              border-radius: 999px;
              background: rgba(18, 60, 49, 0.065);
              padding: 0 11px;
            }

            .blog-read-more {
              margin-top: 18px;
              display: inline-flex;
              color: var(--green);
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 13px;
              font-weight: 950;
            }

            @media (max-width: 980px) {
              .blog-grid {
                grid-template-columns: 1fr;
              }
            }

            @media (max-width: 620px) {
              .blog-hero {
                padding-left: 16px;
                padding-right: 16px;
              }

              .blog-hero-card {
                padding: 28px;
              }

              .blog-card-link {
                min-height: auto;
              }
            }
          `
        }}
      />
    </main>
  );
}
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getBlogPost,
  getBlogPosts,
  getRelatedBlogPosts
} from "@/lib/blog";

const phone = "883 040 483";
const phoneHref = "+48883040483";
const email = "mediacje@twojafundacja.pl";
const siteUrl = "https://www.twojafundacja.pl";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type CurrentBlogPost = NonNullable<ReturnType<typeof getBlogPost>>;

type EnhancedBlogPost = CurrentBlogPost & {
  referencesApa6?: string[];
  footnotes?: string[];
  doiReferences?: {
    label: string;
    doi?: string;
    url?: string;
  }[];
};

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Wpis nie istnieje | Blog o mediacji",
      description: "Nie znaleziono wpisu blogowego."
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt,
      siteName: "Fundacja Mediacji Sądowej i Pozasądowej",
      locale:
        post.language === "pl"
          ? "pl_PL"
          : post.language === "uk"
            ? "uk_UA"
            : "en_GB"
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const enhancedPost = post as EnhancedBlogPost;
  const relatedPosts = getRelatedBlogPosts(post.slug);

  const referencesApa6 = enhancedPost.referencesApa6 ?? [];
  const footnotes = enhancedPost.footnotes ?? [];
  const doiReferences = enhancedPost.doiReferences ?? [];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.updatedAt,
    inLanguage: post.language,
    keywords: post.keywords,
    author: {
      "@type": "Organization",
      name: "Fundacja Mediacji Sądowej i Pozasądowej",
      url: siteUrl
    },
    publisher: {
      "@type": "Organization",
      name: "Fundacja Mediacji Sądowej i Pozasądowej",
      url: siteUrl
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`
    },
    citation: [
      ...post.sources.map((source) => source.title),
      ...referencesApa6
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                Blog o mediacji · Kraków · mediacje online
              </span>
            </span>
          </a>

          <div className="nav-links">
            <a href="/">Strona główna</a>
            <a href="/blog">Blog</a>
            <a href="/cennik">Cennik</a>
            <a href="/kwalifikacje">Kwalifikacje</a>
            <a href="/#kontakt">Kontakt</a>
            <a className="nav-phone" href={`tel:${phoneHref}`}>
              {phone}
            </a>
          </div>
        </nav>
      </div>

      <article className="article-shell">
        <header className="article-hero">
          <div className="article-hero-card">
            <a className="article-back" href="/blog">
              ← Wróć do bloga
            </a>

            <span className="eyebrow">{post.heroLabel}</span>

            <h1>{post.title}</h1>

            <p className="lead">{post.description}</p>

            <div className="article-meta">
              <span>{post.category}</span>
              <span>{post.date}</span>
              <span>{post.readingTime}</span>
              <span>{post.language.toUpperCase()}</span>
            </div>
          </div>
        </header>

        <div className="article-layout">
          <aside className="article-sidebar">
            <div className="article-sidebar-box">
              <p className="section-label">W skrócie</p>

              <ul>
                <li>temat: {post.category}</li>
                <li>język: {post.language.toUpperCase()}</li>
                <li>czas czytania: {post.readingTime}</li>
                <li>aktualizacja: {post.updatedAt}</li>
              </ul>
            </div>

            <div className="article-sidebar-box">
              <p className="section-label">Frazy SEO</p>

              <div className="article-tags">
                {post.keywords.slice(0, 8).map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
            </div>

            <div className="article-sidebar-box">
              <p className="section-label">Linki</p>

              <div className="article-side-links">
                {post.internalLinks.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="article-sidebar-box">
              <p className="section-label">Kontakt</p>

              <p>
                Potrzebujesz mediatora w Krakowie? Opisz krótko sprawę i
                preferowany tryb kontaktu.
              </p>

              <div className="article-side-links">
                <a href={`tel:${phoneHref}`}>{phone}</a>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>
          </aside>

          <div className="article-content">
            <section className="article-intro">
              <p>{post.intro}</p>
            </section>

            {post.sections.map((section, sectionIndex) => (
              <section className="article-section" key={section.heading}>
                <h2>
                  <span>{String(sectionIndex + 1).padStart(2, "0")}</span>
                  {section.heading}
                </h2>

                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <section className="article-section">
              <h2>
                <span>FAQ</span>
                Najczęstsze pytania
              </h2>

              <div className="faq-list">
                {post.faq.map((item) => (
                  <details className="faq-item" key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="article-section">
              <h2>
                <span>Źródła</span>
                Źródła urzędowe i internetowe
              </h2>

              <div className="article-sources">
                {post.sources.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.title}
                  </a>
                ))}
              </div>
            </section>

            {referencesApa6.length > 0 && (
              <section className="article-section">
                <h2>
                  <span>APA 6</span>
                  Literatura
                </h2>

                <ol className="apa-list">
                  {referencesApa6.map((reference) => (
                    <li key={reference}>{reference}</li>
                  ))}
                </ol>
              </section>
            )}

            {doiReferences.length > 0 && (
              <section className="article-section">
                <h2>
                  <span>DOI</span>
                  Publikacje z DOI
                </h2>

                <div className="doi-list">
                  {doiReferences.map((item) => (
                    <div className="doi-item" key={item.label}>
                      <strong>{item.label}</strong>

                      {item.doi && (
                        <span>
                          DOI:{" "}
                          <a
                            href={`https://doi.org/${item.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.doi}
                          </a>
                        </span>
                      )}

                      {!item.doi && item.url && (
                        <span>
                          Link:{" "}
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            źródło
                          </a>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {footnotes.length > 0 && (
              <section className="article-section">
                <h2>
                  <span>Przypisy</span>
                  Przypisy i uwagi redakcyjne
                </h2>

                <ol className="footnote-list">
                  {footnotes.map((footnote) => (
                    <li key={footnote}>{footnote}</li>
                  ))}
                </ol>
              </section>
            )}

            <section className="article-cta">
              <div>
                <p className="section-label">Kontakt</p>
                <h2>Zapytaj o mediację w konkretnej sprawie.</h2>
                <p>
                  W wiadomości podaj rodzaj sprawy, liczbę stron, etap
                  postępowania oraz informację, czy istnieje skierowanie do
                  mediacji.
                </p>
              </div>

              <div className="hero-actions">
                <a className="button button-primary" href={`tel:${phoneHref}`}>
                  Zadzwoń
                </a>
                <a className="button button-secondary" href={`mailto:${email}`}>
                  Wyślij e-mail
                </a>
                <a className="button button-secondary" href="/cennik">
                  Cennik mediacji
                </a>
              </div>
            </section>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="section">
          <div className="section-heading">
            <div>
              <p className="section-label">Powiązane wpisy</p>
              <h2>Czytaj dalej.</h2>
            </div>
            <p>
              Artykuły powiązane tematycznie z tym wpisem oraz z mediacją w
              Krakowie.
            </p>
          </div>

          <div className="blog-grid">
            {relatedPosts.map((relatedPost) => (
              <article className="blog-card" key={relatedPost.slug}>
                <a href={`/blog/${relatedPost.slug}`} className="blog-card-link">
                  <span className="tag">{relatedPost.category}</span>
                  <h3>{relatedPost.title}</h3>
                  <p>{relatedPost.description}</p>

                  <div className="blog-meta">
                    <span>{relatedPost.date}</span>
                    <span>{relatedPost.readingTime}</span>
                  </div>

                  <span className="blog-read-more">Czytaj wpis →</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .article-shell {
              max-width: var(--max);
              margin: 0 auto;
              padding: 54px 22px 28px;
            }

            .article-hero {
              margin-bottom: 28px;
            }

            .article-hero-card {
              border-radius: var(--radius-xl);
              border: 1px solid var(--line);
              background:
                linear-gradient(145deg, rgba(255, 250, 242, 0.96), rgba(248, 241, 230, 0.9)),
                radial-gradient(circle at 0% 0%, rgba(182, 138, 58, 0.13), transparent 38%);
              box-shadow: var(--shadow);
              padding: 58px 50px;
            }

            .article-hero-card h1 {
              max-width: 980px;
              margin-bottom: 0;
            }

            .article-back {
              display: inline-flex;
              margin-bottom: 22px;
              color: var(--green);
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 13px;
              font-weight: 950;
            }

            .article-meta {
              margin-top: 28px;
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
            }

            .article-meta span {
              display: inline-flex;
              min-height: 34px;
              align-items: center;
              border-radius: 999px;
              border: 1px solid rgba(18, 60, 49, 0.12);
              background: rgba(18, 60, 49, 0.065);
              color: var(--green);
              padding: 0 12px;
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 12px;
              font-weight: 900;
            }

            .article-layout {
              display: grid;
              grid-template-columns: 320px 1fr;
              gap: 24px;
              align-items: start;
            }

            .article-sidebar {
              position: sticky;
              top: 96px;
              display: grid;
              gap: 14px;
            }

            .article-sidebar-box {
              border-radius: 24px;
              border: 1px solid var(--line);
              background: rgba(255, 250, 242, 0.9);
              box-shadow: var(--shadow-soft);
              padding: 22px;
            }

            .article-sidebar-box ul {
              margin: 0;
              padding-left: 18px;
              color: var(--muted);
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 13px;
              font-weight: 780;
              line-height: 1.65;
            }

            .article-sidebar-box p {
              margin: 0;
              color: var(--muted);
              font-size: 14px;
              line-height: 1.55;
            }

            .article-tags {
              display: flex;
              flex-wrap: wrap;
              gap: 8px;
            }

            .article-tags span {
              display: inline-flex;
              align-items: center;
              min-height: 30px;
              border-radius: 999px;
              background: rgba(18, 60, 49, 0.07);
              border: 1px solid rgba(18, 60, 49, 0.08);
              color: var(--green);
              padding: 0 10px;
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 11px;
              font-weight: 850;
            }

            .article-side-links {
              display: grid;
              gap: 9px;
            }

            .article-side-links a {
              border-radius: 999px;
              border: 1px solid rgba(18, 60, 49, 0.12);
              background: rgba(18, 60, 49, 0.06);
              color: var(--green);
              padding: 11px 13px;
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 13px;
              font-weight: 900;
              transition: background 160ms ease, transform 160ms ease;
            }

            .article-side-links a:hover {
              background: rgba(18, 60, 49, 0.1);
              transform: translateY(-2px);
            }

            .article-content {
              border-radius: var(--radius-xl);
              border: 1px solid var(--line);
              background: rgba(255, 250, 242, 0.94);
              box-shadow: var(--shadow-soft);
              padding: 48px;
            }

            .article-intro {
              border-radius: 24px;
              background:
                linear-gradient(150deg, var(--green), var(--green-dark));
              padding: 30px;
              margin-bottom: 36px;
              color: #fff;
            }

            .article-intro p {
              margin: 0;
              color: rgba(255, 255, 255, 0.84);
              font-size: 20px;
              line-height: 1.68;
            }

            .article-section {
              padding-top: 16px;
              margin-top: 18px;
            }

            .article-section h2 {
              display: grid;
              gap: 8px;
              margin: 0 0 18px;
              font-size: clamp(30px, 3.4vw, 46px);
              line-height: 1.02;
              letter-spacing: -0.055em;
            }

            .article-section h2 span {
              color: var(--green);
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 12px;
              font-weight: 950;
              letter-spacing: 0.14em;
              text-transform: uppercase;
            }

            .article-section p {
              margin: 0 0 18px;
              color: var(--muted);
              font-size: 18px;
              line-height: 1.78;
            }

            .article-sources {
              display: grid;
              gap: 12px;
            }

            .article-sources a {
              border-radius: 18px;
              border: 1px solid rgba(18, 60, 49, 0.12);
              background: rgba(18, 60, 49, 0.055);
              color: var(--green);
              padding: 16px;
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 13px;
              font-weight: 850;
              line-height: 1.5;
              transition: transform 160ms ease, background 160ms ease;
            }

            .article-sources a:hover {
              transform: translateY(-2px);
              background: rgba(18, 60, 49, 0.09);
            }

            .apa-list,
            .footnote-list {
              margin: 0;
              padding-left: 22px;
              color: var(--muted);
              font-size: 16px;
              line-height: 1.72;
            }

            .apa-list li,
            .footnote-list li {
              margin-bottom: 14px;
            }

            .doi-list {
              display: grid;
              gap: 12px;
            }

            .doi-item {
              display: grid;
              gap: 8px;
              border-radius: 18px;
              border: 1px solid rgba(18, 60, 49, 0.12);
              background: rgba(18, 60, 49, 0.055);
              padding: 16px;
              color: var(--muted);
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 14px;
              line-height: 1.55;
            }

            .doi-item strong {
              color: var(--ink);
            }

            .doi-item a {
              color: var(--green);
              font-weight: 850;
            }

            .article-cta {
              margin-top: 42px;
              border-radius: 28px;
              background:
                linear-gradient(150deg, rgba(239, 227, 200, 0.94), rgba(255, 250, 242, 0.96));
              border: 1px solid rgba(182, 138, 58, 0.24);
              padding: 30px;
            }

            .article-cta h2 {
              margin: 0;
              font-size: 38px;
              line-height: 1;
              letter-spacing: -0.05em;
            }

            .article-cta p {
              margin: 14px 0 0;
              color: var(--muted);
              font-size: 16px;
              line-height: 1.62;
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

            @media (max-width: 1040px) {
              .article-layout {
                grid-template-columns: 1fr;
              }

              .article-sidebar {
                position: static;
                grid-template-columns: 1fr;
              }

              .blog-grid {
                grid-template-columns: 1fr;
              }
            }

            @media (max-width: 620px) {
              .article-shell {
                padding-left: 16px;
                padding-right: 16px;
              }

              .article-hero-card,
              .article-content,
              .article-intro,
              .article-cta {
                padding: 28px;
              }

              .article-section p {
                font-size: 17px;
              }

              .article-cta h2 {
                font-size: 32px;
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
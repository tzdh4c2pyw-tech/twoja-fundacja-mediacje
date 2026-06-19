import type { Metadata } from "next";
import {
  localBusinessJsonLd,
  seoDescriptions,
  seoKeywords,
  seoTitles,
  siteUrl,
  websiteJsonLd
} from "@/lib/seo";

export const metadata: Metadata = {
  title: seoTitles.en,
  description: seoDescriptions.en,
  keywords: seoKeywords.en,
  alternates: {
    canonical: "/en",
    languages: {
      "pl-PL": "/",
      en: "/en",
      uk: "/uk",
      "x-default": "/"
    }
  },
  openGraph: {
    title: seoTitles.en,
    description: seoDescriptions.en,
    url: `${siteUrl}/en`,
    type: "website",
    siteName: "Foundation for Court and Out-of-Court Mediation",
    locale: "en_GB"
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitles.en,
    description: seoDescriptions.en
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
    title: "Family mediation",
    text: "Divorce, separation, child contact, maintenance, care arrangements, parental communication and family settlements.",
    href: "#family",
    className: "card card-petrol bento-large"
  },
  {
    title: "Criminal mediation",
    text: "A structured conversation between the injured party and the offender, including compensation, apology and settlement terms.",
    href: "#criminal",
    className: "card card-dark bento-large"
  },
  {
    title: "Civil mediation",
    text: "Private disputes, obligations, settlements, neighbour disputes, contracts and property-related conflicts.",
    href: "#civil",
    className: "card"
  },
  {
    title: "Business mediation",
    text: "Disputes between entrepreneurs, payments, contracts, liability, negotiations and settlement proposals.",
    href: "#business",
    className: "card"
  },
  {
    title: "Online mediation",
    text: "Initial consultation, case description, remote contact and online mediation where the nature of the matter allows it.",
    href: "#online",
    className: "card card-gold"
  }
];

const processSteps = [
  {
    title: "Case description",
    text: "You briefly describe the conflict, the number of parties, the stage of the matter and whether mediation is court-referred, out-of-court or online."
  },
  {
    title: "Procedure selection",
    text: "The mediator determines the appropriate organisational path: family, criminal, civil, business or online mediation."
  },
  {
    title: "Contact with parties",
    text: "The rules of contact, participation of the parties, meeting date and form of mediation are arranged."
  },
  {
    title: "Settlement or closure",
    text: "The parties work on a solution. If an agreement is reached, a mediation settlement may be prepared."
  }
];

const qualificationCards = [
  {
    title: "Permanent mediator",
    label: "Regional Court in Krakow",
    text: "Entry on the list of permanent mediators maintained by the President of the Regional Court in Krakow."
  },
  {
    title: "Criminal mediation",
    label: "Foundation entry",
    text: "The Foundation is listed among institutions authorised to conduct mediation proceedings in criminal cases."
  },
  {
    title: "Mediator profession",
    label: "Postgraduate studies",
    text: "Postgraduate studies in the mediator profession and preparation for conducting mediation."
  },
  {
    title: "Family mediation",
    label: "Postgraduate studies",
    text: "Postgraduate studies in family mediation and basic psychological support for families."
  }
];

const faqItems = [
  {
    question: "Is mediation confidential?",
    answer:
      "Yes. Mediation is confidential. Confidentiality helps the parties discuss the conflict calmly and look for a solution without further escalation."
  },
  {
    question: "Is online mediation possible?",
    answer:
      "Yes. In some matters, online mediation or an initial remote consultation is possible. This depends on the type of case, the parties’ consent and organisational conditions."
  },
  {
    question: "Does the Foundation conduct criminal mediation?",
    answer:
      "Yes. The Foundation is listed among institutions authorised to conduct mediation proceedings in criminal cases."
  },
  {
    question: "Is criminal mediation free of charge for the parties?",
    answer:
      "Yes. In criminal cases, mediation costs are not charged to the parties. The mediator’s remuneration and reimbursable expenses are covered by the State Treasury."
  },
  {
    question: "How should I prepare for the first contact?",
    answer:
      "It is useful to provide the type of case, the number of parties, the stage of proceedings, information on any court or authority referral and the preferred form of contact."
  },
  {
    question: "Can a mediation settlement end a dispute?",
    answer:
      "In many cases, a mediation settlement may organise the parties’ relationship and end the dispute. Its legal effect depends on the type of case and applicable procedure."
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
    <div className="language-switcher" aria-label="Language versions">
      {languageLinks.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </div>
  );
}

function DocumentCard({
  title,
  label,
  text
}: {
  title: string;
  label: string;
  text: string;
}) {
  return (
    <article className="card">
      <span className="tag">{label}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <a className="card-link" href="#contact">
        Request verification →
      </a>
    </article>
  );
}

export default function EnglishHomePage() {
  const localBusinessSchema = localBusinessJsonLd();
  const websiteSchema = websiteJsonLd();

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

      <div className="topbar">
        <nav className="nav">
          <a className="brand" href="/en" aria-label="Home page">
            <span className="brand-mark">FM</span>
            <span>
              <span className="brand-title">
                Foundation for Court and Out-of-Court Mediation
              </span>
              <span className="brand-subtitle">
                Court mediator · Krakow · online mediation
              </span>
            </span>
          </a>

          <div className="nav-links">
            <a href="#scope">Scope</a>
            <a href="#process">Process</a>
            <a href="#online">Online</a>
            <a href="#criminal">Criminal</a>
            <a href="#family">Family</a>
            <a href="#civil">Civil</a>
            <a href="#location">Location</a>
            <a href="#qualifications">Qualifications</a>
            <a href="#contact">Contact</a>
            <LanguageSwitcher />
          </div>
        </nav>
      </div>

      <section className="hero hero-premium">
        <div className="hero-main">
          <span className="eyebrow">
            Court mediator · Krakow · online mediation
          </span>

          <h1>Mediator in Krakow.</h1>

          <p className="lead">
            Family, criminal, civil, business and online mediation. A
            confidential and structured conversation led by an impartial
            mediator — with the aim of reaching a settlement and reducing the
            escalation of the dispute.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${phoneHref}`}>
              Book a consultation
            </a>
            <a className="button button-secondary" href={`mailto:${email}`}>
              Send case description
            </a>
            <a className="button button-secondary" href="#qualifications">
              Check qualifications
            </a>
            <a className="button button-secondary" href="/">
              Polish version
            </a>
            <a className="button button-secondary" href="/uk">
              Ukrainian version
            </a>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>Permanent mediator</strong>
              <span>Regional Court in Krakow</span>
            </div>
            <div>
              <strong>Criminal mediation</strong>
              <span>free of charge for the parties</span>
            </div>
            <div>
              <strong>Languages</strong>
              <span>Polish, English and Ukrainian</span>
            </div>
          </div>
        </div>

        <aside className="hero-side">
          <figure className="portrait">
            <img
              src="/foto/vadym%20rekel.jpg"
              alt="Vadym Rekel court mediator in Krakow"
            />
          </figure>

          <div className="hero-badge">
            <strong>Mediation centre</strong>
            <span>
              Court and out-of-court mediation · Krakow · Kielecka 2/53 ·
              online contact available.
            </span>
          </div>
        </aside>
      </section>

      <section className="trust">
        <div className="trust-inner">
          <div className="trust-item">
            <strong>Permanent mediator</strong>
            listed at the Regional Court in Krakow
          </div>
          <div className="trust-item">
            <strong>Criminal mediation</strong>
            Foundation listed among authorised institutions
          </div>
          <div className="trust-item">
            <strong>Krakow</strong>
            Kielecka 2/53, near Rondo Mogilskie
          </div>
          <div className="trust-item">
            <strong>Three languages</strong>
            Polish, English and Ukrainian
          </div>
        </div>
      </section>

      <section className="section" id="scope">
        <SectionHeading
          label="Scope of mediation"
          title="Choose the type of case."
          text="The main mediation areas are organised so that users can quickly identify the right contact path."
        />

        <div className="bento-grid">
          {mediationTypes.map((item) => (
            <article className={item.className} key={item.title}>
              <span className="tag">Mediation</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a className="card-link" href={item.href}>
                Read more →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="process">
        <SectionHeading
          label="How mediation works"
          title="A clear process and a calm structure for discussion."
          text="Mediation is presented as a simple procedure: first contact, procedure selection, meeting organisation and work towards a solution."
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

      <section className="section compact" id="online">
        <div className="feature green">
          <div>
            <p className="section-label">Online and case preparation</p>
            <h2>Online mediation and quick first contact.</h2>
          </div>

          <div>
            <p>
              You may send a short description of the conflict, organisational
              documents or questions about the mediation procedure. On that
              basis, it is possible to preliminarily determine the type of
              matter, required information and whether stationary or online
              mediation is appropriate.
            </p>

            <div className="labels">
              <span className="label">case description</span>
              <span className="label">online contact</span>
              <span className="label">remote mediation</span>
              <span className="label">initial assessment</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="criminal">
        <SectionHeading
          label="Criminal mediation"
          title="The Foundation is authorised to conduct criminal mediation."
          text="Criminal mediation requires particular care, neutrality and understanding of the function of criminal proceedings. In criminal cases, mediation is free of charge for the parties."
        />

        <div className="grid-3">
          <article className="card card-gold">
            <span className="tag">Criminal cases</span>
            <h3>Injured party and offender</h3>
            <p>
              Mediation may concern the consequences of the offence,
              responsibility, apology, compensation, redress and settlement
              conditions.
            </p>
          </article>

          <article className="card card-gold">
            <span className="tag">Costs</span>
            <h3>Free for the parties</h3>
            <p>
              In criminal cases, mediation costs are not charged to the parties.
              The mediator’s remuneration and reimbursable expenses are covered
              by the State Treasury.
            </p>
          </article>

          <article className="card card-dark">
            <span className="tag">Authorisation</span>
            <h3>Foundation entry</h3>
            <p>
              The Foundation is entered in the list of institutions authorised to
              conduct mediation proceedings in criminal cases.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="family">
        <SectionHeading
          label="Family mediation"
          title="Family matters require calm language and clear boundaries."
          text="Family mediation organises discussion where emotions, expectations and responsibility for the family’s future overlap."
        />

        <div className="grid-3">
          <article className="card">
            <span className="tag">Family</span>
            <h3>Child contact and care</h3>
            <p>
              Arrangements concerning child contact, care, parental
              communication and everyday family organisation.
            </p>
          </article>

          <article className="card">
            <span className="tag">Separation</span>
            <h3>Divorce and separation</h3>
            <p>
              Discussion of divorce-related, family, financial and organisational
              issues.
            </p>
          </article>

          <article className="card">
            <span className="tag">Preparation</span>
            <h3>Family mediation background</h3>
            <p>
              Preparation includes postgraduate studies in family mediation and
              basic psychological support for families.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="civil">
        <SectionHeading
          label="Civil and business mediation"
          title="Private, contractual and business disputes."
          text="In civil and business matters, mediation may help establish settlement terms, payments or the conditions for ending cooperation."
        />

        <div className="grid-3">
          <article className="card">
            <span className="tag">Civil</span>
            <h3>Private disputes</h3>
            <p>
              Obligations, claims, contracts, neighbour disputes, property
              matters and settlements.
            </p>
          </article>

          <article className="card" id="business">
            <span className="tag">Business</span>
            <h3>Disputes between entrepreneurs</h3>
            <p>
              Payments, liability, contracts, cooperation, ending a business
              relationship and mediation settlements.
            </p>
          </article>

          <article className="card">
            <span className="tag">Online</span>
            <h3>Remote first contact</h3>
            <p>
              For international or multilingual matters, the first contact may
              be arranged remotely, depending on the type of case.
            </p>
          </article>
        </div>
      </section>

      <section
        className="section"
        id="location"
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        <SectionHeading
          label="Location"
          title="Mediation in Krakow — Kielecka 2/53, near Rondo Mogilskie."
          text="Professional mediation in a convenient central Krakow location, close to the Regional Court, public institutions and public transport."
        />

        <div className="location-rich">
          <div className="location-copy">
            <p>
              <strong itemProp="name">
                Foundation for Court and Out-of-Court Mediation
              </strong>{" "}
              conducts <strong>mediation in Krakow</strong> at{" "}
              <strong>Kielecka 2/53, 31-526 Krakow</strong>, near{" "}
              <strong>Rondo Mogilskie</strong>.
            </p>

            <p>
              This is a convenient location for people looking for a{" "}
              <strong>mediator in Krakow</strong>, including{" "}
              <strong>family, civil, business and criminal matters</strong>. The
              office provides calm and neutral conditions for discussion,
              conflict organisation and reaching a settlement.
            </p>

            <p>
              The office is located approximately{" "}
              <strong>600 metres from the Regional Court in Krakow</strong> at
              Przy Rondzie 7, which is useful for parties and attorneys involved
              in court proceedings.
            </p>

            <div className="location-advantages">
              <div className="location-advantage">
                Central Krakow — Rondo Mogilskie
              </div>
              <div className="location-advantage">
                Around 600 m from the Regional Court
              </div>
              <div className="location-advantage">
                Easy access by public transport
              </div>
              <div className="location-advantage">
                Calm space for mediation
              </div>
            </div>
          </div>

          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10244.231941308924!2d19.9621993!3d50.0664757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b57a3e08b9d%3A0xf4ed3bbeb098c39!2sFundacja%20Mediacji%20Sądowej%20i%20Pozasądowej!5e0!3m2!1spl!2spl!4v1701936419454!5m2!1spl!2spl"
              loading="lazy"
              title="Mediator in Krakow — Foundation location"
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
              Directions to the mediator in Krakow
            </a>

            <a className="location-cta-phone" href={`tel:${phoneHref}`}>
              {phone}
            </a>

            <a className="location-cta-email" href={`mailto:${email}`}>
              Arrange mediation
            </a>
          </div>

          <meta itemProp="telephone" content="+48 883 040 483" />
          <meta itemProp="email" content="mediacje@twojafundacja.pl" />
          <meta itemProp="url" content={`${siteUrl}/en`} />
          <meta itemProp="areaServed" content="Krakow, Malopolska, Poland" />

          <div
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <meta itemProp="streetAddress" content="Kielecka 2/53" />
            <meta itemProp="postalCode" content="31-526" />
            <meta itemProp="addressLocality" content="Krakow" />
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

      <section className="section" id="qualifications">
        <SectionHeading
          label="Qualifications"
          title="Mediator documents and certificates."
          text="Selected documents confirm the mediator’s and the Foundation’s preparation for court, out-of-court, family and criminal mediation."
        />

        <div className="grid-4">
          {qualificationCards.map((item) => (
            <DocumentCard
              key={item.title}
              title={item.title}
              label={item.label}
              text={item.text}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="FAQ"
          title="Frequently asked questions before contacting a mediator."
          text="Brief answers on confidentiality, online mediation, criminal mediation, costs and case preparation."
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

      <section className="section" id="contact">
        <div className="contact-panel">
          <div>
            <p className="section-label">Contact</p>
            <h2>Describe the case and establish the possible mediation path.</h2>
            <p>
              In your message, provide the type of case, the number of parties,
              the stage of proceedings, information on any court or authority
              referral and the preferred form of mediation.
            </p>
          </div>

          <div className="contact-box">
            <span className="contact-line">
              <strong>Phone:</strong>{" "}
              <a href={`tel:${phoneHref}`}>{phone}</a>
            </span>
            <span className="contact-line">
              <strong>E-mail:</strong> <a href={`mailto:${email}`}>{email}</a>
            </span>
            <span className="contact-line">
              <strong>Address:</strong> Kielecka 2/53, 31-526 Krakow
            </span>

            <div className="hero-actions">
              <a className="button button-secondary" href={`tel:${phoneHref}`}>
                Call
              </a>
              <a className="button button-secondary" href={`mailto:${email}`}>
                Send e-mail
              </a>
              <a className="button button-secondary" href="/">
                Polish version
              </a>
              <a className="button button-secondary" href="/uk">
                Ukrainian version
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-title">
              Foundation for Court and Out-of-Court Mediation
            </span>
            <span className="footer-line">
              Court mediator · family, criminal, civil and business mediation
            </span>
            <span className="footer-line">Krakow · online mediation</span>
          </div>

          <div>
            <span className="footer-title">Contact</span>
            <span className="footer-line">
              Phone: <a href={`tel:${phoneHref}`}>{phone}</a>
            </span>
            <span className="footer-line">
              <a href={`mailto:${email}`}>{email}</a>
            </span>
            <span className="footer-line">Kielecka 2/53, 31-526 Krakow</span>
          </div>

          <div>
            <span className="footer-title">Navigation</span>
            <a className="footer-link" href="/">
              Polish version
            </a>
            <br />
            <a className="footer-link" href="/uk">
              Ukrainian version
            </a>
            <br />
            <a className="footer-link" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
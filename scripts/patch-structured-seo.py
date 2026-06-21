from pathlib import Path

seo_path = Path("lib/seo.ts")
home_path = Path("app/page.tsx")
contact_path = Path("app/kontakt/page.tsx")

seo = seo_path.read_text()

# Add /kontakt to corePages if missing
if 'url: "/kontakt"' not in seo:
    seo = seo.replace(
        '''  {
    url: "/cennik",
    priority: 0.85,
    changeFrequency: "monthly"
  },''',
        '''  {
    url: "/cennik",
    priority: 0.85,
    changeFrequency: "monthly"
  },
  {
    url: "/kontakt",
    priority: 0.9,
    changeFrequency: "monthly"
  },''',
        1
    )

# Add FAQPage JSON-LD helper if missing
if "export function faqPageJsonLd" not in seo:
    seo += '''

export function faqPageJsonLd(
  items: Array<{
    question: string;
    answer: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}/kontakt#contact`,
    url: `${siteUrl}/kontakt`,
    name: "Kontakt z mediatorem sądowym w Krakowie",
    description:
      "Kontakt z Fundacją Mediacji Sądowej i Pozasądowej w Krakowie. Mediacje rodzinne, karne, cywilne, gospodarcze i online.",
    inLanguage: "pl-PL",
    isPartOf: {
      "@id": `${siteUrl}/#website`
    },
    about: {
      "@id": `${siteUrl}/#organization`
    },
    mainEntity: {
      "@id": `${siteUrl}/#organization`
    }
  };
}
'''

seo_path.write_text(seo)

home = home_path.read_text()

# Import faqPageJsonLd
home = home.replace(
    '''  localBusinessJsonLd,
  seoDescriptions,''',
    '''  faqPageJsonLd,
  localBusinessJsonLd,
  seoDescriptions,''',
    1
)

# Add const faqSchema
home = home.replace(
    '''  const localBusinessSchema = localBusinessJsonLd();
  const websiteSchema = websiteJsonLd();''',
    '''  const localBusinessSchema = localBusinessJsonLd();
  const websiteSchema = websiteJsonLd();
  const faqSchema = faqPageJsonLd(faqItems);''',
    1
)

# Add FAQ JSON-LD script after website script if missing
if "JSON.stringify(faqSchema)" not in home:
    home = home.replace(
        '''      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />''',
        '''      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />''',
        1
    )

home_path.write_text(home)

contact = contact_path.read_text()

# Add import
if 'contactPageJsonLd' not in contact:
    contact = contact.replace(
        '''import type { Metadata } from "next";''',
        '''import type { Metadata } from "next";
import { contactPageJsonLd } from "@/lib/seo";''',
        1
    )

# Add schema const in component
contact = contact.replace(
    '''export default function KontaktPage() {
  return (''',
    '''export default function KontaktPage() {
  const contactSchema = contactPageJsonLd();

  return (''',
    1
)

# Add JSON-LD script after <main>
if "JSON.stringify(contactSchema)" not in contact:
    contact = contact.replace(
        '''    <main>''',
        '''    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema)
        }}
      />''',
        1
    )

contact_path.write_text(contact)

print("OK: structured SEO patch applied.")

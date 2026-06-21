export const siteUrl = "https://twoja-fundacja-mediacje.vercel.app";

export const organizationName = "Fundacja Mediacji Sądowej i Pozasądowej";

export const businessName = "Fundacja Mediacji Sądowej i Pozasądowej";

export const businessAddress = {
  streetAddress: "ul. Kielecka 2/53",
  postalCode: "31-526",
  addressLocality: "Kraków",
  addressRegion: "małopolskie",
  addressCountry: "PL"
};

export const businessContact = {
  phone: "883 040 483",
  phoneHref: "+48883040483",
  email: "mediacje@twojafundacja.pl"
};

export const availableLanguages = ["pl", "en", "uk"] as const;

export const serviceAreas = ["Kraków", "Małopolskie", "Polska", "online"];

export const mediationServices = [
  "mediacje rodzinne",
  "mediacje karne",
  "mediacje cywilne",
  "mediacje gospodarcze",
  "mediacje online",
  "mediacje sądowe",
  "mediacje pozasądowe"
];

export const seoTitles = {
  pl: "Mediator sądowy Kraków | Mediacje rodzinne, karne, cywilne i gospodarcze",
  en: "Court Mediator in Krakow | Family, Civil, Business and Criminal Mediation",
  uk: "Медіатор у Кракові | Сімейна, цивільна, господарська та кримінальна медіація"
};

export const seoDescriptions = {
  pl: "Mediator sądowy w Krakowie. Mediacje rodzinne, karne, cywilne, gospodarcze i online. Kontakt po polsku, angielsku i ukraińsku. Sprawdź cennik i opisz sprawę.",
  en: "Court and out-of-court mediation in Krakow. Family, criminal, civil, business and online mediation in Polish, English and Ukrainian.",
  uk: "Судова та позасудова медіація у Кракові. Сімейні, кримінальні, цивільні, господарські та онлайн-медіації польською, українською й англійською мовами."
};

export const seoKeywords = {
  pl: [
    "mediator Kraków",
    "mediator sądowy Kraków",
    "mediacje Kraków",
    "mediacje rodzinne Kraków",
    "mediacje karne Kraków",
    "mediacje cywilne Kraków",
    "mediacje gospodarcze Kraków",
    "mediacje online",
    "Fundacja Mediacji Sądowej i Pozasądowej"
  ],
  en: [
    "mediator in Krakow",
    "court mediator in Krakow",
    "family mediation Krakow",
    "business mediation Krakow",
    "civil mediation Poland",
    "criminal mediation Poland",
    "online mediation Poland",
    "English-speaking mediator Krakow"
  ],
  uk: [
    "медіатор у Кракові",
    "судовий медіатор у Кракові",
    "сімейна медіація у Кракові",
    "кримінальна медіація у Польщі",
    "цивільна медіація у Польщі",
    "господарська медіація у Польщі",
    "онлайн-медіація українською мовою",
    "медіатор польською та українською мовами"
  ]
};

export const corePages = [
  {
    url: "/",
    priority: 1,
    changeFrequency: "weekly"
  },
  {
    url: "/en",
    priority: 0.9,
    changeFrequency: "weekly"
  },
  {
    url: "/uk",
    priority: 0.9,
    changeFrequency: "weekly"
  },
  {
    url: "/cennik",
    priority: 0.85,
    changeFrequency: "monthly"
  },
  {
    url: "/mediacje-cywilne-krakow",
    priority: 0.88,
    changeFrequency: "monthly"
  },
  {
    url: "/kontakt",
    priority: 0.9,
    changeFrequency: "monthly"
  },
  {
    url: "/mediacje-dla-pelnomocnikow",
    priority: 0.86,
    changeFrequency: "monthly"
  },
  {
    url: "/mediacje-dla-cudzoziemcow",
    priority: 0.86,
    changeFrequency: "monthly"
  },
  {
    url: "/#kwalifikacje",
    priority: 0.8,
    changeFrequency: "monthly"
  },
  {
    url: "/blog",
    priority: 0.85,
    changeFrequency: "weekly"
  }
] as const;

export const plannedSeoLandingPages = [
  "/mediator-krakow",
  "/mediator-sadowy-krakow",
  "/mediacje-rodzinne-krakow",
  "/mediacje-karne-krakow",
  "/mediacje-cywilne-krakow",
  "/mediacje-gospodarcze-krakow",
  "/mediacje-online",
  "/en/mediator-krakow",
  "/en/court-mediator-krakow",
  "/en/family-mediation-krakow",
  "/en/civil-mediation-krakow",
  "/en/business-mediation-krakow",
  "/en/criminal-mediation-krakow",
  "/en/online-mediation-poland",
  "/uk/mediator-krakow",
  "/uk/simeina-mediatsiia-krakow",
  "/uk/kryminalna-mediatsiia-krakow",
  "/uk/tsyvilna-mediatsiia-krakow",
  "/uk/hospodarska-mediatsiia-krakow",
  "/uk/online-mediatsiia"
] as const;

export function absoluteUrl(path: string) {
  if (path === "/") {
    return siteUrl;
  }

  return `${siteUrl}${path}`;
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: businessName,
    legalName: organizationName,
    url: siteUrl,
    telephone: businessContact.phoneHref,
    email: businessContact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessAddress.streetAddress,
      postalCode: businessAddress.postalCode,
      addressLocality: businessAddress.addressLocality,
      addressRegion: businessAddress.addressRegion,
      addressCountry: businessAddress.addressCountry
    },
    areaServed: serviceAreas,
    availableLanguage: ["Polish", "Ukrainian", "English"],
    priceRange: "$$",
    serviceType: mediationServices,
    knowsAbout: [
      "mediacje rodzinne",
      "mediacje karne",
      "mediacje cywilne",
      "mediacje gospodarcze",
      "mediacje online",
      "court mediation",
      "family mediation",
      "business mediation",
      "медіація у Польщі",
      "сімейна медіація",
      "господарська медіація"
    ],
    sameAs: []
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: organizationName,
    url: siteUrl,
    inLanguage: ["pl-PL", "en", "uk"],
    publisher: {
      "@id": `${siteUrl}/#organization`
    }
  };
}

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

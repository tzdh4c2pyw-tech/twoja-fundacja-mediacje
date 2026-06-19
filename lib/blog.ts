export type BlogLanguage = "pl" | "en" | "uk";

export type BlogSource = {
  title: string;
  url: string;
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  language: BlogLanguage;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  date: string;
  updatedAt: string;
  category: string;
  readingTime: string;
  keywords: string[];
  heroLabel: string;
  intro: string;
  sections: BlogSection[];
  faq: BlogFaq[];
  sources: BlogSource[];
  referencesApa6?: string[];
  internalLinks: {
    label: string;
    href: string;
  }[];
};

const publishDate = "2026-06-19";

const sources = {
  mediationGov: {
    title: "Ministerstwo Sprawiedliwości — Mediacje",
    url: "https://www.gov.pl/web/sprawiedliwosc/mediacje"
  },
  criminalMediationGov: {
    title:
      "Ministerstwo Sprawiedliwości — postępowanie mediacyjne w sprawach karnych",
    url: "https://www.gov.pl/web/sprawiedliwosc/postepowanie-mediacyjne-w-sprawach-karnych"
  },
  civilMediationGov: {
    title:
      "Ministerstwo Sprawiedliwości — postępowanie mediacyjne w sprawach cywilnych",
    url: "https://www.gov.pl/web/sprawiedliwosc/postepowanie-mediacyjne-w-sprawach-cywilnych"
  },
  outOfCourtGov: {
    title: "Ministerstwo Sprawiedliwości — mediacja pozasądowa",
    url: "https://www.gov.pl/web/sprawiedliwosc/mediacja-pozasadowa"
  },
  civilCosts2026: {
    title:
      "Rozporządzenie Ministra Sprawiedliwości z dnia 12 lutego 2026 r. w sprawie wysokości wynagrodzenia i podlegających zwrotowi wydatków mediatora w postępowaniu cywilnym",
    url: "https://eli.gov.pl/eli/DU/2026/170/ogl/pol"
  },
  directive2008: {
    title:
      "Dyrektywa Parlamentu Europejskiego i Rady 2008/52/WE w sprawie niektórych aspektów mediacji w sprawach cywilnych i handlowych",
    url: "https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX%3A32008L0052"
  }
};

const literature = {
  methodology:
    "Arkuszewska, A. M., Kościółek, A., Łukasiewicz, J. M., Plis, J., & Serafin, T. (2014). Zarys metodyki pracy mediatora w sprawach cywilnych. Warszawa: Wolters Kluwer.",
  mediatorLaw:
    "Myślińska, M. (2018). Mediator w polskim porządku prawnym. Warszawa: C. H. Beck.",
  moore:
    "Moore, C. W. (2009). Mediacje. Praktyczne strategie rozwiązywania konfliktów. Warszawa: Wolters Kluwer.",
  theory:
    "Gmurzyńska, E., & Morek, R. (red.). (2009). Mediacje. Teoria i praktyka. Warszawa: Wolters Kluwer.",
  courtOutOfCourt:
    "Kalisz, A., & Zienkiewicz, A. (2009). Mediacja sądowa i pozasądowa. Zarys wykładu. Warszawa: Wolters Kluwer.",
  civil:
    "Morek, R. (2012). Mediacja w sprawach cywilnych. Warszawa: Wolters Kluwer.",
  business:
    "Bobrowicz, M. (2004). Mediacje gospodarcze — jak mediować i przekonywać? Warszawa: C. H. Beck.",
  negotiation:
    "Fisher, R., Ury, W., & Patton, B. (1997). Dochodząc do tak. Negocjowanie bez poddawania się. Warszawa: Polskie Wydawnictwo Ekonomiczne.",
  nvc:
    "Larsson, L. (2009). Porozumienie bez przemocy w mediacjach. Jak być trzecią stroną w konflikcie. Warszawa: Czarna Owca."
};

const commonInternalLinks = [
  {
    label: "Cennik mediacji",
    href: "/cennik"
  },
  {
    label: "Kwalifikacje mediatora",
    href: "/kwalifikacje"
  },
  {
    label: "Blog o mediacji",
    href: "/blog"
  },
  {
    label: "Kontakt z Fundacją",
    href: "/#kontakt"
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "czy-mediacja-karna-jest-bezplatna-dla-stron",
    language: "pl",
    title: "Czy mediacja karna jest bezpłatna dla stron?",
    metaTitle: "Czy mediacja karna jest bezpłatna dla stron?",
    metaDescription:
      "Kto płaci za mediację karną, kiedy strony nie ponoszą kosztów i jak wygląda mediacja między pokrzywdzonym a sprawcą.",
    description:
      "W sprawach karnych koszty mediacji nie obciążają stron. Wyjaśniamy, co to oznacza dla pokrzywdzonego i sprawcy.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Mediacje karne",
    readingTime: "7 min",
    keywords: [
      "mediacja karna bezpłatna",
      "koszty mediacji karnej",
      "mediacje karne Kraków",
      "mediator karny Kraków",
      "pokrzywdzony i sprawca mediacja",
      "postępowanie mediacyjne w sprawach karnych",
      "mediator sądowy Kraków",
      "Fundacja Mediacji Sądowej i Pozasądowej"
    ],
    heroLabel: "Mediacje karne · koszty · Kraków",
    intro:
      "Mediacja karna jest szczególnym rodzajem rozmowy między pokrzywdzonym a sprawcą, prowadzonym przy udziale bezstronnego mediatora. Dla stron najważniejsza jest często prosta informacja: w sprawach karnych koszt mediacji nie obciąża uczestników postępowania.",
    sections: [
      {
        heading: "Co oznacza bezpłatność mediacji karnej?",
        paragraphs: [
          "Bezpłatność mediacji karnej dla stron oznacza, że pokrzywdzony i sprawca nie płacą mediatorowi za udział w postępowaniu mediacyjnym. Nie chodzi więc o brak wynagrodzenia mediatora, lecz o to, kto ponosi ten koszt.",
          "Ta zasada ma znaczenie praktyczne. Strony mogą spokojniej rozważyć udział w rozmowie, ponieważ sama próba mediacji nie powinna generować po ich stronie dodatkowego kosztu."
        ]
      },
      {
        heading: "Po co prowadzi się mediację karną?",
        paragraphs: [
          "Mediacja karna nie zastępuje sądu i nie służy ustaleniu winy. Jej celem jest umożliwienie rozmowy o skutkach zdarzenia, naprawieniu szkody, przeprosinach, zadośćuczynieniu albo innych warunkach możliwego porozumienia.",
          "Dla pokrzywdzonego może być okazją do nazwania konsekwencji zdarzenia. Dla sprawcy może być przestrzenią do przyjęcia odpowiedzialności i ustalenia sposobu naprawienia szkody."
        ]
      },
      {
        heading: "Rola mediatora w sprawie karnej",
        paragraphs: [
          "Mediator nie jest sędzią, prokuratorem, obrońcą ani pełnomocnikiem jednej ze stron. Jego zadaniem jest prowadzenie rozmowy w sposób uporządkowany, bezpieczny i bezstronny.",
          "W sprawach karnych szczególne znaczenie mają neutralność, poufność i uważność na emocje uczestników. Mediacja może dotyczyć zdarzeń trudnych, dlatego wymaga spokojnego rytmu rozmowy i jasnych zasad."
        ]
      },
      {
        heading: "Mediacje karne w Krakowie",
        paragraphs: [
          "Osoby skierowane do mediacji karnej w Krakowie mogą skontaktować się z instytucją prowadzącą mediacje, aby ustalić termin, tryb kontaktu, liczbę uczestników i zakres dokumentów potrzebnych do rozpoczęcia sprawy.",
          "Fundacja Mediacji Sądowej i Pozasądowej w Krakowie prowadzi mediacje karne w ramach posiadanych uprawnień organizacyjnych. Kontakt jest możliwy telefonicznie, mailowo lub po wcześniejszym umówieniu spotkania."
        ]
      }
    ],
    faq: [
      {
        question: "Czy pokrzywdzony płaci za mediację karną?",
        answer:
          "Nie. Koszty mediacji w sprawach karnych ponosi Skarb Państwa."
      },
      {
        question: "Czy sprawca płaci za mediację karną?",
        answer:
          "Nie. Strony postępowania karnego nie ponoszą kosztów wynagrodzenia mediatora ani zwrotu wydatków związanych z mediacją."
      },
      {
        question: "Czy mediacja karna zawsze kończy się ugodą?",
        answer:
          "Nie. Może zakończyć się porozumieniem, częściowymi ustaleniami albo brakiem porozumienia."
      },
      {
        question: "Czy mediator decyduje o winie?",
        answer:
          "Nie. Mediator nie rozstrzyga o winie i nie wydaje decyzji procesowej."
      }
    ],
    sources: [sources.criminalMediationGov, sources.mediationGov],
    referencesApa6: [
      literature.mediatorLaw,
      literature.moore,
      literature.theory
    ],
    internalLinks: [
      {
        label: "Mediacje karne w Krakowie",
        href: "/#karne"
      },
      ...commonInternalLinks
    ]
  },
  {
    slug: "ile-kosztuje-mediacja-sadowa-w-sprawie-cywilnej",
    language: "pl",
    title: "Ile kosztuje mediacja sądowa w sprawie cywilnej?",
    metaTitle: "Ile kosztuje mediacja sądowa w sprawie cywilnej?",
    metaDescription:
      "Koszty mediacji sądowej w sprawach cywilnych: sprawy majątkowe, niemajątkowe, wydatki mediatora i VAT.",
    description:
      "Koszt mediacji sądowej zależy od rodzaju sprawy, wartości przedmiotu sporu, liczby posiedzeń oraz możliwych wydatków mediatora.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Koszty mediacji",
    readingTime: "8 min",
    keywords: [
      "ile kosztuje mediacja",
      "koszty mediacji sądowej",
      "mediacja cywilna koszt",
      "cennik mediacji Kraków",
      "mediator Kraków cennik",
      "mediacje gospodarcze koszt",
      "mediacje rodzinne koszt",
      "kalkulator kosztów mediacji"
    ],
    heroLabel: "Koszty mediacji · sprawy cywilne",
    intro:
      "Koszty mediacji sądowej w sprawach cywilnych są uregulowane przepisami. Inaczej oblicza się wynagrodzenie mediatora w sprawach majątkowych, inaczej w sprawach niemajątkowych i takich, w których wartości przedmiotu sporu nie da się ustalić.",
    sections: [
      {
        heading: "Sprawy majątkowe",
        paragraphs: [
          "W sprawach o prawa majątkowe podstawą obliczeń jest wartość przedmiotu sporu. Przy wartości do 200 000 zł wynagrodzenie mediatora wynosi 2% wartości sporu, nie mniej niż 300 zł i nie więcej niż 4000 zł.",
          "Przy wartości sporu powyżej 200 000 zł wynagrodzenie wynosi 4000 zł oraz 1% od nadwyżki ponad 200 000 zł, ale nie więcej niż 8000 zł za całość postępowania mediacyjnego."
        ]
      },
      {
        heading: "Sprawy niemajątkowe",
        paragraphs: [
          "W sprawach o prawa niemajątkowe oraz w sprawach, w których wartości przedmiotu sporu nie da się ustalić, wynagrodzenie mediatora zależy od liczby posiedzeń.",
          "Wynosi 300 zł za pierwsze posiedzenie i 200 zł za każde kolejne, łącznie nie więcej niż 900 zł za całe postępowanie. Jeżeli mediacja odbywa się bez posiedzenia, wynagrodzenie wynosi 300 zł."
        ]
      },
      {
        heading: "Wydatki mediatora",
        paragraphs: [
          "Do wynagrodzenia mogą dojść udokumentowane i niezbędne wydatki mediatora. Mogą to być między innymi koszty przejazdu, korespondencji lub najmu pomieszczenia.",
          "W praktyce część wydatków może nie wystąpić, zwłaszcza gdy mediacja odbywa się w siedzibie mediatora albo online. Dlatego kalkulator kosztów pokazuje wynik orientacyjny."
        ]
      },
      {
        heading: "Mediacja pozasądowa",
        paragraphs: [
          "W mediacji pozasądowej koszt nie wynika z tej samej tabeli. Wynagrodzenie ustala się na podstawie cennika ośrodka mediacyjnego albo bezpośredniego uzgodnienia stron z mediatorem.",
          "Przed rozpoczęciem mediacji warto ustalić, czy sprawa jest sądowa czy pozasądowa, ile stron bierze udział w rozmowie i czy potrzebne będą dodatkowe posiedzenia."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacja sądowa jest zawsze płatna?",
        answer:
          "W sprawach cywilnych koszty mediacji co do zasady obciążają strony, z uwzględnieniem szczegółowych zasad rozliczenia."
      },
      {
        question: "Ile wynosi minimum w sprawie majątkowej?",
        answer:
          "Przy sprawie majątkowej do 200 000 zł minimalne wynagrodzenie mediatora wynosi 300 zł."
      },
      {
        question: "Czy do kosztów mediacji dolicza się VAT?",
        answer:
          "Jeżeli mediator jest podatnikiem VAT, wynagrodzenie może zostać podwyższone o kwotę podatku."
      },
      {
        question: "Czy kalkulator kosztów pokazuje kwotę ostateczną?",
        answer:
          "Nie. Kalkulator pomaga oszacować koszt, ale wynik wymaga potwierdzenia w konkretnej sprawie."
      }
    ],
    sources: [
      sources.civilCosts2026,
      sources.civilMediationGov,
      sources.mediationGov
    ],
    referencesApa6: [
      literature.methodology,
      literature.civil,
      literature.courtOutOfCourt
    ],
    internalLinks: [
      {
        label: "Cennik i kalkulator kosztów",
        href: "/cennik"
      },
      {
        label: "Mediacje cywilne",
        href: "/#cywilne"
      },
      {
        label: "Mediacje gospodarcze",
        href: "/#gospodarcze"
      },
      {
        label: "Kontakt",
        href: "/#kontakt"
      }
    ]
  },
  {
    slug: "mediacje-rodzinne-w-krakowie-kiedy-warto",
    language: "pl",
    title: "Mediacje rodzinne w Krakowie — kiedy warto z nich skorzystać?",
    metaTitle: "Mediacje rodzinne w Krakowie — kiedy warto?",
    metaDescription:
      "Mediacje rodzinne w Krakowie: rozwód, separacja, kontakty z dzieckiem, alimenty i porozumienie rodzicielskie.",
    description:
      "Mediacje rodzinne pomagają uporządkować rozmowę o dzieciach, alimentach, kontaktach, opiece i sprawach organizacyjnych po rozstaniu.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Mediacje rodzinne",
    readingTime: "8 min",
    keywords: [
      "mediacje rodzinne Kraków",
      "mediator rodzinny Kraków",
      "mediacje rozwodowe Kraków",
      "kontakty z dzieckiem mediacja",
      "alimenty mediacja",
      "porozumienie rodzicielskie",
      "mediator sądowy Kraków",
      "mediacja rodzinna"
    ],
    heroLabel: "Mediacje rodzinne · Kraków",
    intro:
      "Sprawy rodzinne należą do najbardziej wymagających emocjonalnie. Mediacja może pomóc wtedy, gdy strony chcą rozmawiać o dzieciach, alimentach, kontaktach, zasadach opieki lub organizacji życia po rozstaniu, ale potrzebują spokojnej struktury rozmowy.",
    sections: [
      {
        heading: "Kiedy mediacja rodzinna ma sens?",
        paragraphs: [
          "Mediacja rodzinna może być użyteczna wtedy, gdy strony pozostają w konflikcie, ale nadal muszą podejmować wspólne decyzje. Najczęściej chodzi o dzieci, opiekę, kontakty, szkołę, wakacje, święta i koszty utrzymania.",
          "Nie jest to terapia ani ocena, kto był lepszym partnerem. To rozmowa nastawiona na przyszłość i na konkretne ustalenia, które strony będą mogły stosować w codziennym życiu."
        ]
      },
      {
        heading: "Rozwód i separacja",
        paragraphs: [
          "Przy rozwodzie i separacji konflikty często nakładają się na siebie. Obok emocji pojawiają się kwestie prawne, finansowe, rodzicielskie i organizacyjne.",
          "Mediacja pozwala rozdzielić tematy i omówić je w spokojniejszym rytmie. Dzięki temu strony mogą łatwiej zobaczyć, które kwestie są najważniejsze, a które można rozwiązać technicznie."
        ]
      },
      {
        heading: "Kontakty z dzieckiem",
        paragraphs: [
          "W sprawach dotyczących dzieci liczy się konkret. Dobre ustalenia powinny obejmować terminy kontaktów, sposób odbioru dziecka, wakacje, święta, chorobę, wyjazdy i komunikację między rodzicami.",
          "Im bardziej przewidywalne zasady, tym mniejsze ryzyko późniejszych nieporozumień. Mediacja może pomóc w opracowaniu porozumienia, które odpowiada rytmowi życia rodziny."
        ]
      },
      {
        heading: "Mediacje rodzinne lokalnie i online",
        paragraphs: [
          "Fundacja Mediacji Sądowej i Pozasądowej działa w Krakowie przy ul. Kieleckiej 2/53. Dla części spraw możliwy jest także kontakt online.",
          "Przed pierwszym kontaktem warto przygotować krótki opis sprawy, liczbę uczestników, etap postępowania oraz tematy, które mają zostać omówione."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacje rodzinne są tylko dla małżonków?",
        answer:
          "Nie. Mogą dotyczyć także rodziców, byłych partnerów, krewnych i innych osób pozostających w konflikcie rodzinnym."
      },
      {
        question: "Czy mediator decyduje o kontaktach z dzieckiem?",
        answer:
          "Nie. Mediator pomaga w rozmowie, ale nie wydaje decyzji i nie narzuca rozwiązania."
      },
      {
        question: "Czy mediacja rodzinna może odbyć się online?",
        answer:
          "Tak, jeżeli strony wyrażają zgodę i pozwalają na to warunki organizacyjne sprawy."
      },
      {
        question: "Co przygotować przed mediacją rodzinną?",
        answer:
          "Warto przygotować listę tematów, podstawowe daty, harmonogramy i informacje o najważniejszych potrzebach dzieci."
      }
    ],
    sources: [sources.mediationGov, sources.civilMediationGov],
    referencesApa6: [
      literature.methodology,
      literature.moore,
      literature.theory
    ],
    internalLinks: [
      {
        label: "Mediacje rodzinne",
        href: "/#rodzinne"
      },
      ...commonInternalLinks
    ]
  },
  {
    slug: "mediacja-sadowa-a-pozasadowa-roznice",
    language: "pl",
    title: "Mediacja sądowa a pozasądowa — najważniejsze różnice",
    metaTitle: "Mediacja sądowa a pozasądowa — różnice",
    metaDescription:
      "Czym różni się mediacja sądowa od pozasądowej? Wyjaśniamy podstawę rozpoczęcia, koszty, dokumenty i rolę sądu.",
    description:
      "Mediacja sądowa i pozasądowa mają wspólny cel, ale różnią się sposobem rozpoczęcia, kosztami i relacją z sądem.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Mediacja sądowa i pozasądowa",
    readingTime: "7 min",
    keywords: [
      "mediacja sądowa",
      "mediacja pozasądowa",
      "mediacja sądowa a pozasądowa",
      "mediator Kraków",
      "mediacje cywilne Kraków",
      "mediacje gospodarcze Kraków",
      "ugoda mediacyjna",
      "ADR"
    ],
    heroLabel: "Mediacja sądowa · mediacja pozasądowa",
    intro:
      "Mediacja sądowa i pozasądowa są często mylone, choć w praktyce różnią się punktem startu, kosztami, dokumentami i relacją z postępowaniem sądowym. Wybór właściwego trybu zależy od tego, na jakim etapie znajduje się spór.",
    sections: [
      {
        heading: "Mediacja sądowa",
        paragraphs: [
          "Mediacja sądowa jest związana ze sprawą, która już znajduje się w sądzie. Sąd może skierować strony do mediacji, a jej wynik może mieć znaczenie dla dalszego toku postępowania.",
          "Po zakończeniu mediacji sporządzany jest protokół. Jeżeli strony zawrą ugodę, może ona zostać przedstawiona sądowi do zatwierdzenia."
        ]
      },
      {
        heading: "Mediacja pozasądowa",
        paragraphs: [
          "Mediacja pozasądowa zaczyna się bez skierowania sądu. Strony same zgłaszają się do mediatora albo jedna ze stron prosi mediatora o kontakt z drugą stroną.",
          "Ten tryb bywa przydatny wtedy, gdy konflikt istnieje, ale strony chcą sprawdzić możliwość porozumienia przed wniesieniem sprawy do sądu."
        ]
      },
      {
        heading: "Różnice w kosztach",
        paragraphs: [
          "W mediacji sądowej w sprawach cywilnych wynagrodzenie mediatora i wydatki określają przepisy. W mediacji pozasądowej koszt wynika z cennika ośrodka lub uzgodnienia stron z mediatorem.",
          "Dlatego przed rozpoczęciem mediacji warto jasno ustalić, czy sprawa jest sądowa, czy pozasądowa. Od tego zależy sposób organizacji i rozliczenia."
        ]
      },
      {
        heading: "Który tryb wybrać?",
        paragraphs: [
          "Jeżeli sprawa jest już w sądzie, naturalnym rozwiązaniem może być mediacja sądowa. Jeżeli konflikt dopiero się rozwija, warto rozważyć mediację pozasądową.",
          "W obu trybach mediator nie rozstrzyga sporu. Pomaga stronom rozmawiać, porządkować kwestie sporne i szukać rozwiązania możliwego do przyjęcia."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacja pozasądowa wymaga sprawy w sądzie?",
        answer:
          "Nie. Może rozpocząć się przed wszczęciem postępowania sądowego."
      },
      {
        question: "Czy mediacja sądowa jest bardziej formalna?",
        answer:
          "Tak, ponieważ jest powiązana z postępowaniem sądowym i określonymi czynnościami procesowymi."
      },
      {
        question: "Czy w mediacji pozasądowej można zawrzeć ugodę?",
        answer:
          "Tak. Strony mogą zawrzeć porozumienie, a w odpowiednich sytuacjach podjąć dalsze kroki w celu nadania mu określonego skutku prawnego."
      },
      {
        question: "Czy mediator może doradzić, który tryb jest najlepszy?",
        answer:
          "Mediator może wyjaśnić różnice organizacyjne, ale nie zastępuje indywidualnej porady prawnej."
      }
    ],
    sources: [
      sources.mediationGov,
      sources.outOfCourtGov,
      sources.civilMediationGov
    ],
    referencesApa6: [
      literature.courtOutOfCourt,
      literature.methodology,
      literature.theory
    ],
    internalLinks: commonInternalLinks
  },
  {
    slug: "jak-przygotowac-sie-do-pierwszej-mediacji",
    language: "pl",
    title: "Jak przygotować się do pierwszej mediacji?",
    metaTitle: "Jak przygotować się do pierwszej mediacji?",
    metaDescription:
      "Praktyczna lista przygotowania do mediacji: opis sprawy, dokumenty, cele rozmowy, koszty i najważniejsze pytania.",
    description:
      "Dobre przygotowanie do mediacji pomaga uporządkować fakty, oczekiwania i dokumenty, ale nie wymaga gotowej strategii procesowej.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Przygotowanie do mediacji",
    readingTime: "7 min",
    keywords: [
      "jak przygotować się do mediacji",
      "pierwsza mediacja",
      "co zabrać na mediację",
      "mediator Kraków",
      "spotkanie mediacyjne",
      "opis sprawy mediacja",
      "mediacje online",
      "przygotowanie do mediacji"
    ],
    heroLabel: "Pierwsza mediacja · praktyczny poradnik",
    intro:
      "Pierwsza mediacja nie wymaga gotowego przemówienia ani pełnej dokumentacji procesowej. Warto jednak przygotować krótki opis sprawy, listę tematów do omówienia i własne oczekiwania wobec rozmowy.",
    sections: [
      {
        heading: "Krótki opis sprawy",
        paragraphs: [
          "Najlepszy opis sprawy mieści się w kilku zdaniach. Powinien wskazywać, czego dotyczy konflikt, ile osób bierze w nim udział, czy sprawa jest już w sądzie i co jest najważniejszym tematem rozmowy.",
          "Mediator nie musi na początku otrzymać całej historii sporu. Ważniejsze jest ustalenie, czy sprawa nadaje się do mediacji i jak zorganizować pierwszy kontakt."
        ]
      },
      {
        heading: "Dokumenty",
        paragraphs: [
          "Dokumenty mogą być pomocne, ale mediacja nie jest typowym postępowaniem dowodowym. Warto przygotować tylko te materiały, które ułatwiają zrozumienie sporu i możliwych warunków porozumienia.",
          "W sprawach majątkowych mogą to być umowy, faktury lub zestawienia kwot. W sprawach rodzinnych — harmonogramy, ustalenia dotyczące dzieci i najważniejsze daty."
        ]
      },
      {
        heading: "Cele rozmowy",
        paragraphs: [
          "Przed mediacją warto zastanowić się, co byłoby dobrym rezultatem. Nie musi to być pełna ugoda. Czasem celem jest częściowe porozumienie albo ustalenie, które kwestie naprawdę pozostają sporne.",
          "Mediacja jest bardziej użyteczna, gdy strony potrafią odróżnić stanowiska od interesów. Stanowisko mówi, czego ktoś żąda. Interes pokazuje, dlaczego dana sprawa jest dla niego ważna."
        ]
      },
      {
        heading: "Nastawienie do rozmowy",
        paragraphs: [
          "Mediacja wymaga gotowości do wysłuchania drugiej strony, ale nie wymaga zgody na każde rozwiązanie. Strona może bronić swoich interesów i jednocześnie uczestniczyć w konstruktywnej rozmowie.",
          "Warto przyjść z listą spraw do omówienia, a nie z listą zarzutów. Taka zmiana perspektywy często decyduje o jakości pierwszego spotkania."
        ]
      }
    ],
    faq: [
      {
        question: "Czy na mediację trzeba zabrać wszystkie dokumenty?",
        answer:
          "Nie. Na początek wystarczą najważniejsze dokumenty pomagające zrozumieć sprawę."
      },
      {
        question: "Czy trzeba mieć gotową propozycję ugody?",
        answer:
          "Nie, ale warto wiedzieć, jakie tematy są najważniejsze i jakie rozwiązania można rozważyć."
      },
      {
        question: "Czy mediator oceni, kto ma rację?",
        answer:
          "Nie. Mediator pomaga w rozmowie, ale nie rozstrzyga sporu."
      },
      {
        question: "Czy pierwsza mediacja może odbyć się online?",
        answer:
          "Tak, jeżeli strony się na to zgadzają i sprawa nadaje się do takiej organizacji."
      }
    ],
    sources: [sources.mediationGov, sources.outOfCourtGov],
    referencesApa6: [
      literature.methodology,
      literature.moore,
      literature.theory,
      literature.nvc
    ],
    internalLinks: commonInternalLinks
  },
  {
    slug: "poufnosc-mediacji-co-warto-wiedziec",
    language: "pl",
    title: "Poufność mediacji — co warto wiedzieć przed spotkaniem?",
    metaTitle: "Poufność mediacji — co warto wiedzieć?",
    metaDescription:
      "Poufność mediacji chroni swobodę rozmowy. Sprawdź, co oznacza w praktyce i dlaczego ma znaczenie dla stron.",
    description:
      "Poufność jest jedną z najważniejszych zasad mediacji. Pozwala stronom rozmawiać swobodniej i bez obawy, że każda wypowiedź stanie się elementem sporu.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Zasady mediacji",
    readingTime: "7 min",
    keywords: [
      "poufność mediacji",
      "zasady mediacji",
      "mediator Kraków",
      "mediacje Kraków",
      "tajemnica mediacji",
      "bezpieczna mediacja",
      "mediacje sądowe",
      "mediacje pozasądowe"
    ],
    heroLabel: "Poufność · bezpieczeństwo rozmowy",
    intro:
      "Poufność mediacji tworzy warunki do spokojniejszej rozmowy. Strony mogą mówić o interesach, potrzebach i możliwych rozwiązaniach bez poczucia, że każde zdanie natychmiast stanie się argumentem przeciwko nim.",
    sections: [
      {
        heading: "Dlaczego poufność jest ważna?",
        paragraphs: [
          "Konflikt często utrwala się dlatego, że strony mówią językiem obrony, zarzutów i pozycji procesowych. Poufność pozwala choć częściowo wyjść poza ten schemat.",
          "W bezpiecznej rozmowie łatwiej powiedzieć, co naprawdę blokuje porozumienie: brak zaufania, lęk przed stratą, potrzeba przeprosin, niepewność finansowa albo obawa przed przyszłym kontaktem."
        ]
      },
      {
        heading: "Poufność a szczerość rozmowy",
        paragraphs: [
          "Mediacja nie wymaga ujawniania wszystkiego. Każda strona sama decyduje, co chce powiedzieć i jakie propozycje chce przedstawić.",
          "Poufność sprzyja testowaniu rozwiązań. Strona może rozważać różne warianty bez natychmiastowego przyjmowania ostatecznego zobowiązania."
        ]
      },
      {
        heading: "Rola mediatora",
        paragraphs: [
          "Mediator powinien wyjaśnić stronom zasady poufności na początku procesu. To pomaga ustalić wspólne ramy i zmniejszyć napięcie przed rozmową.",
          "Poufność nie zwalnia mediatora z dbałości o prawidłowy przebieg spotkania. Przeciwnie — wzmacnia znaczenie jasnych zasad, spokojnego tonu i bezstronności."
        ]
      },
      {
        heading: "Poufność w praktyce",
        paragraphs: [
          "W praktyce strony często obawiają się, że propozycja ugodowa zostanie odebrana jako słabość. Mediacja pozwala sprawdzić możliwość porozumienia bez budowania całej rozmowy wokół wygranej i przegranej.",
          "Dlatego poufność jest ważna zarówno w sprawach rodzinnych, jak i gospodarczych, cywilnych czy pracowniczych."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacja jest poufna?",
        answer:
          "Tak, poufność jest jedną z podstawowych zasad mediacji i ma chronić swobodę rozmowy."
      },
      {
        question: "Czy mediator może opowiadać o przebiegu mediacji?",
        answer:
          "Mediator powinien zachować poufność zgodnie z zasadami prowadzenia mediacji."
      },
      {
        question: "Czy poufność pomaga zawrzeć ugodę?",
        answer:
          "Często tak, ponieważ strony mogą bezpieczniej rozważać różne warianty porozumienia."
      },
      {
        question: "Czy poufność oznacza brak zasad?",
        answer:
          "Nie. Mediacja nadal odbywa się w określonych ramach organizacyjnych i prawnych."
      }
    ],
    sources: [
      sources.mediationGov,
      sources.civilMediationGov,
      sources.directive2008
    ],
    referencesApa6: [
      literature.methodology,
      literature.moore,
      literature.theory
    ],
    internalLinks: commonInternalLinks
  },
  {
    slug: "dobrowolnosc-bezstronnosc-neutralnosc-mediatora",
    language: "pl",
    title: "Dobrowolność, bezstronność i neutralność mediatora",
    metaTitle: "Dobrowolność, bezstronność i neutralność mediatora",
    metaDescription:
      "Trzy zasady, które budują zaufanie do mediacji: dobrowolność stron, bezstronność mediatora i neutralność wobec sporu.",
    description:
      "Mediacja działa tylko wtedy, gdy strony mają wpływ na udział w rozmowie, a mediator zachowuje bezstronność i neutralność.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Zasady mediacji",
    readingTime: "8 min",
    keywords: [
      "dobrowolność mediacji",
      "bezstronność mediatora",
      "neutralność mediatora",
      "zasady mediacji",
      "mediator sądowy Kraków",
      "mediacje Kraków",
      "mediacja dobrowolna",
      "etyka mediatora"
    ],
    heroLabel: "Zasady mediacji · zaufanie · neutralność",
    intro:
      "Dobrowolność, bezstronność i neutralność są podstawą zaufania do mediacji. Bez nich rozmowa przestaje być rzeczywistą próbą porozumienia, a zaczyna przypominać nacisk, ocenę albo ukrytą formę rozstrzygania sporu.",
    sections: [
      {
        heading: "Dobrowolność",
        paragraphs: [
          "Dobrowolność oznacza, że strona nie powinna być zmuszana do porozumienia. Może uczestniczyć w mediacji, rozważać propozycje, zadawać pytania i zakończyć rozmowę, jeżeli nie widzi przestrzeni do dalszych ustaleń.",
          "W praktyce dobrowolność wzmacnia odpowiedzialność stron za wynik. Ugoda jest trwalsza, gdy strony rozumieją jej sens i same ją współtworzą."
        ]
      },
      {
        heading: "Bezstronność",
        paragraphs: [
          "Bezstronność oznacza, że mediator nie staje po żadnej stronie konfliktu. Nie buduje przewagi jednej osoby nad drugą i nie prowadzi rozmowy tak, aby doprowadzić do z góry wybranego wyniku.",
          "Dla uczestników mediacji bezstronność jest często ważniejsza niż sama procedura. Strony muszą czuć, że mają równą możliwość wypowiedzi i przedstawienia swoich potrzeb."
        ]
      },
      {
        heading: "Neutralność",
        paragraphs: [
          "Neutralność dotyczy stosunku mediatora do przedmiotu sporu. Mediator nie powinien forsować własnego rozwiązania ani narzucać stronom tego, co sam uważa za najlepsze.",
          "Może natomiast pomagać w porządkowaniu tematów, zadawać pytania, wyjaśniać strukturę rozmowy i wspierać strony w formułowaniu możliwych wariantów."
        ]
      },
      {
        heading: "Dlaczego te zasady są praktyczne?",
        paragraphs: [
          "Zasady mediacji nie są abstrakcją. W realnym konflikcie chronią strony przed presją, chaosem i poczuciem nierówności.",
          "Im bardziej konflikt jest emocjonalny, tym większe znaczenie ma spokojna procedura i wyraźna rola mediatora."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediator może powiedzieć, kto ma rację?",
        answer:
          "Nie. Mediator nie rozstrzyga sporu i nie przyznaje racji jednej ze stron."
      },
      {
        question: "Czy mediacja jest dobrowolna?",
        answer:
          "Tak. Strony powinny mieć realny wpływ na udział w mediacji i na treść ewentualnych ustaleń."
      },
      {
        question: "Czy mediator może proponować rozwiązania?",
        answer:
          "Mediator może pomagać w porządkowaniu wariantów, ale nie powinien narzucać stronom własnego rozwiązania."
      },
      {
        question: "Dlaczego bezstronność jest tak ważna?",
        answer:
          "Bezstronność pozwala stronom zaufać procedurze i rozmawiać bez poczucia, że mediator sprzyja jednej stronie."
      }
    ],
    sources: [sources.mediationGov, sources.civilMediationGov],
    referencesApa6: [
      literature.methodology,
      literature.mediatorLaw,
      literature.theory
    ],
    internalLinks: commonInternalLinks
  },
  {
    slug: "ugoda-mediacyjna-kiedy-moze-zostac-zatwierdzona-przez-sad",
    language: "pl",
    title: "Ugoda mediacyjna — kiedy może zostać zatwierdzona przez sąd?",
    metaTitle: "Ugoda mediacyjna — zatwierdzenie przez sąd",
    metaDescription:
      "Ugoda zawarta przed mediatorem może uzyskać moc ugody sądowej. Wyjaśniamy, kiedy sąd może ją zatwierdzić.",
    description:
      "Ugoda mediacyjna może mieć istotne skutki prawne, ale jej zatwierdzenie zależy od treści, formy i zgodności z prawem.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Ugoda mediacyjna",
    readingTime: "8 min",
    keywords: [
      "ugoda mediacyjna",
      "zatwierdzenie ugody przez sąd",
      "ugoda przed mediatorem",
      "mediacja cywilna",
      "mediator Kraków",
      "mediacje Kraków",
      "klauzula wykonalności ugoda mediacyjna",
      "postępowanie mediacyjne"
    ],
    heroLabel: "Ugoda mediacyjna · sąd · skutki prawne",
    intro:
      "Ugoda mediacyjna jest jednym z najważniejszych rezultatów mediacji. Jeżeli zostanie prawidłowo przygotowana i zatwierdzona przez sąd, może uzyskać moc prawną ugody zawartej przed sądem. W sprawach nadających się do egzekucji może również zostać zatwierdzona przez nadanie klauzuli wykonalności.",
    sections: [
      {
        heading: "Czym jest ugoda mediacyjna?",
        paragraphs: [
          "Ugoda mediacyjna to porozumienie stron zawarte przy udziale mediatora. Jej treść powinna być jasna, wykonalna i zgodna z prawem.",
          "Dobra ugoda nie ogranicza się do ogólnych deklaracji. Powinna precyzyjnie wskazywać, kto, co, kiedy i w jaki sposób ma zrobić."
        ]
      },
      {
        heading: "Zatwierdzenie przez sąd",
        paragraphs: [
          "W sprawach sądowych ugoda zawarta przed mediatorem może zostać przedstawiona sądowi do zatwierdzenia. Po zatwierdzeniu zyskuje moc ugody zawartej przed sądem.",
          "Jeżeli ugoda nadaje się do wykonania w drodze egzekucji, sąd może zatwierdzić ją przez nadanie klauzuli wykonalności."
        ]
      },
      {
        heading: "Kiedy sąd może odmówić?",
        paragraphs: [
          "Sąd nie zatwierdza każdej ugody automatycznie. Znaczenie ma zgodność z prawem, zasadami współżycia społecznego, brak obejścia prawa i dostateczna precyzja zapisów.",
          "Dlatego w sprawach bardziej złożonych warto zadbać o przejrzystość języka ugody i o realność jej wykonania."
        ]
      },
      {
        heading: "Ugoda jako narzędzie kończenia sporu",
        paragraphs: [
          "Wartością ugody jest nie tylko formalne zakończenie sporu. Często ważniejsze jest to, że strony same tworzą rozwiązanie dopasowane do swoich potrzeb.",
          "Mediacja pozwala uwzględnić elementy, których sąd nie zawsze może szczegółowo ułożyć w wyroku: terminy, sposób komunikacji, etapy płatności czy organizację współpracy."
        ]
      }
    ],
    faq: [
      {
        question: "Czy każda ugoda mediacyjna trafia do sądu?",
        answer:
          "Nie. Zależy to od trybu mediacji, rodzaju sprawy i decyzji stron."
      },
      {
        question: "Czy ugoda mediacyjna może być tytułem wykonawczym?",
        answer:
          "Tak, jeżeli spełnia wymagania i zostanie zatwierdzona przez nadanie klauzuli wykonalności."
      },
      {
        question: "Czy mediator pisze ugodę za strony?",
        answer:
          "Mediator może pomóc uporządkować ustalenia, ale treść porozumienia musi pochodzić od stron."
      },
      {
        question: "Czy sąd może odmówić zatwierdzenia ugody?",
        answer:
          "Tak, jeżeli treść ugody narusza wymagania przewidziane przez prawo."
      }
    ],
    sources: [sources.civilMediationGov, sources.mediationGov],
    referencesApa6: [
      literature.methodology,
      literature.civil,
      literature.courtOutOfCourt
    ],
    internalLinks: commonInternalLinks
  },
  {
    slug: "mediacje-gospodarcze-w-krakowie-alternatywa-dla-procesu",
    language: "pl",
    title: "Mediacje gospodarcze w Krakowie — alternatywa dla procesu",
    metaTitle: "Mediacje gospodarcze w Krakowie",
    metaDescription:
      "Mediacje gospodarcze pomagają firmom rozmawiać o płatnościach, umowach, współpracy i odpowiedzialności bez eskalacji sporu.",
    description:
      "W sporach między przedsiębiorcami mediacja może pomóc ograniczyć koszty, zachować relacje i szybciej uporządkować konflikt.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Mediacje gospodarcze",
    readingTime: "8 min",
    keywords: [
      "mediacje gospodarcze Kraków",
      "mediator gospodarczy Kraków",
      "spór między firmami mediacja",
      "mediacje dla przedsiębiorców",
      "ugoda gospodarcza",
      "mediacje cywilne Kraków",
      "ADR dla firm",
      "mediator Kraków"
    ],
    heroLabel: "Mediacje gospodarcze · firmy · Kraków",
    intro:
      "Spór gospodarczy nie zawsze musi prowadzić do długiego procesu. W wielu sprawach przedsiębiorcy potrzebują nie tyle publicznego rozstrzygnięcia, ile szybkiego i wykonalnego uporządkowania płatności, dostaw, odpowiedzialności lub zasad dalszej współpracy.",
    sections: [
      {
        heading: "Jakie sprawy mogą trafić do mediacji gospodarczej?",
        paragraphs: [
          "Mediacja gospodarcza może dotyczyć zapłaty, wykonania umowy, jakości usług, dostaw, rozliczeń, współpracy wspólników, najmu lokalu albo odpowiedzialności za opóźnienia.",
          "Największą zaletą mediacji jest możliwość rozmowy o rozwiązaniach praktycznych, a nie tylko o tym, kto formalnie wygra spór."
        ]
      },
      {
        heading: "Dlaczego firmy wybierają mediację?",
        paragraphs: [
          "Proces sądowy często trwa długo i angażuje zasoby przedsiębiorstwa. Mediacja może być szybsza, bardziej elastyczna i mniej obciążająca organizacyjnie.",
          "Dla firm ważna jest także poufność. Nie każdy spór gospodarczy powinien stawać się elementem publicznej historii konfliktu."
        ]
      },
      {
        heading: "Co można ustalić w ugodzie?",
        paragraphs: [
          "Strony mogą ustalić harmonogram płatności, warunki dalszej współpracy, sposób rozliczenia prac, wymianę dokumentów, odbiór towaru, korektę faktur albo zakończenie umowy.",
          "Ugoda gospodarcza powinna być konkretna. W biznesie znaczenie mają terminy, kwoty, osoby odpowiedzialne i sposób potwierdzania wykonania ustaleń."
        ]
      },
      {
        heading: "Mediacje gospodarcze w Krakowie",
        paragraphs: [
          "Kraków jest dużym rynkiem usług, technologii, nieruchomości i handlu. Spory gospodarcze często wynikają nie ze złej woli, lecz z opóźnień, niejasnych oczekiwań albo zmiany warunków współpracy.",
          "Mediacja daje przedsiębiorcom przestrzeń do rozmowy, która może zakończyć konflikt bez całkowitego zerwania relacji biznesowej."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacja gospodarcza nadaje się do spraw o zapłatę?",
        answer:
          "Tak. Sprawy o zapłatę często dobrze nadają się do mediacji, zwłaszcza gdy możliwe jest ustalenie harmonogramu płatności."
      },
      {
        question: "Czy mediacja gospodarcza jest poufna?",
        answer:
          "Poufność jest jedną z kluczowych zalet mediacji gospodarczej."
      },
      {
        question: "Czy w mediacji mogą uczestniczyć pełnomocnicy?",
        answer:
          "Tak, strony mogą korzystać ze wsparcia pełnomocników, jeżeli uznają to za potrzebne."
      },
      {
        question: "Czy mediacja może uratować współpracę biznesową?",
        answer:
          "Czasami tak. Mediacja pozwala rozmawiać nie tylko o przeszłym sporze, lecz także o zasadach dalszej współpracy."
      }
    ],
    sources: [
      sources.mediationGov,
      sources.civilMediationGov,
      sources.directive2008
    ],
    referencesApa6: [
      literature.business,
      literature.civil,
      literature.methodology,
      literature.negotiation
    ],
    internalLinks: [
      {
        label: "Mediacje gospodarcze",
        href: "/#gospodarcze"
      },
      ...commonInternalLinks
    ]
  },
  {
    slug: "rola-mediatora-czego-mediator-nie-robi-w-sporze",
    language: "pl",
    title: "Rola mediatora — czego mediator nie robi w sporze?",
    metaTitle: "Rola mediatora — czego mediator nie robi?",
    metaDescription:
      "Mediator pomaga stronom rozmawiać, ale nie jest sędzią, adwokatem ani psychologiem. Wyjaśniamy granice jego roli.",
    description:
      "Zrozumienie roli mediatora pomaga uniknąć rozczarowań i lepiej przygotować się do mediacji.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Rola mediatora",
    readingTime: "8 min",
    keywords: [
      "rola mediatora",
      "czego nie robi mediator",
      "mediator sądowy Kraków",
      "bezstronny mediator",
      "mediacje Kraków",
      "mediator a adwokat",
      "mediator a psycholog",
      "zadania mediatora"
    ],
    heroLabel: "Rola mediatora · granice · zaufanie",
    intro:
      "Mediator jest osobą trzecią, która wspiera strony w rozmowie, ale nie przejmuje za nie decyzji. Nie jest sędzią, adwokatem, radcą prawnym jednej ze stron ani terapeutą. Zrozumienie tej roli pomaga realistycznie wejść w mediację.",
    sections: [
      {
        heading: "Mediator nie rozstrzyga sporu",
        paragraphs: [
          "Mediator nie wydaje wyroku i nie decyduje, kto ma rację. Nie ustala zwycięzcy i przegranego. Jego zadaniem jest prowadzenie procesu rozmowy.",
          "To strony decydują, czy chcą zawrzeć porozumienie i jaka będzie jego treść. Autonomia stron jest jedną z największych różnic między mediacją a procesem sądowym."
        ]
      },
      {
        heading: "Mediator nie reprezentuje strony",
        paragraphs: [
          "Mediator nie jest pełnomocnikiem jednej ze stron. Nie przygotowuje argumentacji przeciwko drugiej osobie i nie buduje przewagi procesowej.",
          "Może wyjaśniać zasady spotkania, porządkować tematy i zadawać pytania, ale nie powinien udzielać jednej stronie porad przeciwko drugiej."
        ]
      },
      {
        heading: "Mediator nie prowadzi terapii",
        paragraphs: [
          "W mediacji pojawiają się emocje, zwłaszcza w sprawach rodzinnych. Nie oznacza to jednak, że mediacja jest terapią.",
          "Mediator może pomóc rozmawiać spokojniej, ale nie diagnozuje, nie leczy i nie zastępuje specjalisty zdrowia psychicznego."
        ]
      },
      {
        heading: "Co mediator robi?",
        paragraphs: [
          "Mediator tworzy ramy rozmowy. Pilnuje kolejności wypowiedzi, pomaga nazwać tematy, oddziela emocje od kwestii organizacyjnych i wspiera poszukiwanie wariantów porozumienia.",
          "Dobrze prowadzona mediacja daje stronom poczucie wpływu. Nawet jeśli nie kończy się ugodą, może uporządkować spór i zmniejszyć napięcie."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediator może powiedzieć, kto ma rację?",
        answer:
          "Nie. Mediator nie rozstrzyga sporu i nie wydaje oceny na korzyść jednej ze stron."
      },
      {
        question: "Czy mediator może napisać ugodę?",
        answer:
          "Mediator może pomóc uporządkować ustalenia, ale treść porozumienia musi pochodzić od stron."
      },
      {
        question: "Czy mediator jest prawnikiem strony?",
        answer:
          "Nie. Mediator nie reprezentuje żadnej ze stron."
      },
      {
        question: "Czy mediator może przerwać spotkanie?",
        answer:
          "Tak, jeżeli rozmowa traci bezpieczny lub konstruktywny charakter."
      }
    ],
    sources: [sources.mediationGov, sources.civilMediationGov],
    referencesApa6: [
      literature.mediatorLaw,
      literature.methodology,
      literature.theory
    ],
    internalLinks: [
      {
        label: "Kwalifikacje mediatora",
        href: "/kwalifikacje"
      },
      ...commonInternalLinks
    ]
  },
  {
    slug: "mediacje-online-kiedy-warto-wybrac-spotkanie-zdalne",
    language: "pl",
    title: "Mediacje online — kiedy warto wybrać spotkanie zdalne?",
    metaTitle: "Mediacje online — kiedy warto?",
    metaDescription:
      "Mediacje online mogą pomóc, gdy strony mieszkają w różnych miejscach albo potrzebują szybszej organizacji spotkania.",
    description:
      "Mediacja online może być praktycznym rozwiązaniem w sprawach cywilnych, rodzinnych i gospodarczych, jeżeli strony akceptują taki tryb rozmowy.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Mediacje online",
    readingTime: "7 min",
    keywords: [
      "mediacje online",
      "mediator online",
      "mediacje zdalne",
      "mediator Kraków online",
      "mediacje rodzinne online",
      "mediacje gospodarcze online",
      "spotkanie mediacyjne online",
      "mediacja przez internet"
    ],
    heroLabel: "Mediacje online · zdalnie · elastycznie",
    intro:
      "Mediacje online nie zastępują każdej rozmowy bezpośredniej, ale w wielu sprawach mogą być wygodnym i skutecznym rozwiązaniem. Szczególnie wtedy, gdy strony mieszkają w różnych miejscach, mają ograniczony czas albo chcą szybciej rozpocząć rozmowę.",
    sections: [
      {
        heading: "Kiedy mediacja online jest praktyczna?",
        paragraphs: [
          "Spotkanie zdalne bywa pomocne, gdy jedna ze stron mieszka poza Krakowem, przebywa za granicą albo nie może stawić się osobiście w tym samym terminie.",
          "Mediacja online może też ograniczyć koszty organizacyjne i przyspieszyć pierwszy kontakt."
        ]
      },
      {
        heading: "Jak przygotować się technicznie?",
        paragraphs: [
          "Najważniejsze są spokojne miejsce, stabilne połączenie internetowe i możliwość rozmowy bez osób postronnych. Poufność wymaga odpowiednich warunków po obu stronach ekranu.",
          "Warto wcześniej ustalić, kto będzie uczestniczył w spotkaniu, czy obecni będą pełnomocnicy i jak przekazywane będą dokumenty."
        ]
      },
      {
        heading: "Czy mediacja online jest mniej poważna?",
        paragraphs: [
          "Nie. Tryb zdalny nie zmienia podstawowych zasad mediacji: dobrowolności, poufności, bezstronności i szacunku wobec stron.",
          "Zmienia się forma kontaktu, ale cel pozostaje ten sam: uporządkowana rozmowa prowadząca do możliwego porozumienia."
        ]
      },
      {
        heading: "Kiedy lepsze jest spotkanie osobiste?",
        paragraphs: [
          "Spotkanie osobiste może być lepsze, gdy konflikt jest bardzo napięty, strony mają trudność z komunikacją albo potrzebna jest większa kontrola nad przebiegiem rozmowy.",
          "W praktyce wybór trybu warto ustalić z mediatorem po krótkim opisie sprawy."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacja online jest możliwa w sprawach rodzinnych?",
        answer:
          "Tak, jeżeli strony wyrażają zgodę i warunki sprawy pozwalają na rozmowę zdalną."
      },
      {
        question: "Czy mediacja online jest poufna?",
        answer:
          "Powinna być prowadzona w warunkach zapewniających poufność po stronie mediatora i uczestników."
      },
      {
        question: "Czy można połączyć mediację online i spotkanie osobiste?",
        answer:
          "Tak, w części spraw możliwy jest model mieszany."
      },
      {
        question: "Czy dokumenty można przesłać elektronicznie?",
        answer:
          "Co do zasady tak, po uzgodnieniu sposobu przekazania dokumentów z mediatorem."
      }
    ],
    sources: [
      sources.mediationGov,
      sources.outOfCourtGov,
      sources.directive2008
    ],
    referencesApa6: [
      literature.methodology,
      literature.moore,
      literature.theory
    ],
    internalLinks: [
      {
        label: "Mediacje online",
        href: "/#online"
      },
      ...commonInternalLinks
    ]
  },
  {
    slug: "dlaczego-mediacja-czasem-nie-konczy-sie-ugoda",
    language: "pl",
    title: "Dlaczego mediacja czasem nie kończy się ugodą?",
    metaTitle: "Dlaczego mediacja nie zawsze kończy się ugodą?",
    metaDescription:
      "Nie każda mediacja kończy się ugodą. Wyjaśniamy, dlaczego tak się dzieje i kiedy mediacja nadal ma wartość.",
    description:
      "Mediacja może uporządkować konflikt nawet wtedy, gdy strony nie zawrą ugody. Czasem jej wartością jest zawężenie sporu i lepsze zrozumienie różnic.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Praktyka mediacji",
    readingTime: "8 min",
    keywords: [
      "mediacja bez ugody",
      "dlaczego mediacja się nie udaje",
      "brak ugody w mediacji",
      "mediator Kraków",
      "impas w mediacji",
      "konflikt w mediacji",
      "mediacje sądowe",
      "mediacje pozasądowe"
    ],
    heroLabel: "Mediacja · impas · wartość rozmowy",
    intro:
      "Nie każda mediacja kończy się ugodą. Nie oznacza to automatycznie porażki. Czasem strony potrzebują rozmowy po to, aby zrozumieć granice sporu, nazwać przeszkody i ustalić, które kwestie mogą zostać rozwiązane później.",
    sections: [
      {
        heading: "Ugoda nie jest jedynym rezultatem",
        paragraphs: [
          "Najbardziej widocznym rezultatem mediacji jest ugoda, ale nie jest to jedyny możliwy efekt. Strony mogą osiągnąć częściowe porozumienie, zawęzić zakres konfliktu albo przygotować się do dalszych rozmów.",
          "W praktyce nawet nieudana ugoda może zmniejszyć napięcie i uporządkować oczekiwania."
        ]
      },
      {
        heading: "Skąd bierze się impas?",
        paragraphs: [
          "Impas może wynikać z braku zaufania, silnych emocji, rozbieżnych oczekiwań finansowych, presji czasu albo braku informacji potrzebnych do podjęcia decyzji.",
          "Czasem strony nie są jeszcze gotowe na porozumienie. Potrzebują czasu, dodatkowych dokumentów albo rozmowy z pełnomocnikiem."
        ]
      },
      {
        heading: "Rola mediatora przy impasie",
        paragraphs: [
          "Mediator może pomóc stronom zobaczyć, gdzie dokładnie znajduje się blokada. Nie usuwa jej za strony, ale może uporządkować rozmowę i zaproponować zmianę sposobu pracy.",
          "Może też pomóc oddzielić kwestie możliwe do rozwiązania od tych, które wymagają decyzji sądu albo dodatkowych ustaleń."
        ]
      },
      {
        heading: "Kiedy warto wrócić do rozmów?",
        paragraphs: [
          "Do mediacji można wrócić, gdy zmieniły się okoliczności, strony uzyskały nowe informacje albo emocje osłabły na tyle, że możliwa jest spokojniejsza rozmowa.",
          "W wielu konfliktach gotowość do porozumienia pojawia się nie na początku, lecz po pewnym czasie."
        ]
      }
    ],
    faq: [
      {
        question: "Czy brak ugody oznacza, że mediacja była bez sensu?",
        answer:
          "Nie. Mediacja może pomóc uporządkować konflikt i zawęzić sporne kwestie."
      },
      {
        question: "Czy można wrócić do mediacji po nieudanej próbie?",
        answer:
          "Tak, jeżeli strony są gotowe ponownie rozmawiać."
      },
      {
        question: "Czy mediator może przełamać impas?",
        answer:
          "Mediator może pomóc w analizie impasu, ale nie może zmusić stron do porozumienia."
      },
      {
        question: "Czy częściowe porozumienie ma wartość?",
        answer:
          "Tak. Częściowe ustalenia mogą ograniczyć zakres dalszego sporu."
      }
    ],
    sources: [sources.mediationGov, sources.civilMediationGov],
    referencesApa6: [
      literature.moore,
      literature.methodology,
      literature.theory
    ],
    internalLinks: [
      {
        label: "Jak przygotować się do mediacji",
        href: "/blog/jak-przygotowac-sie-do-pierwszej-mediacji"
      },
      ...commonInternalLinks
    ]
  }
];

export function getBlogPosts(language?: BlogLanguage) {
  if (!language) {
    return blogPosts;
  }

  return blogPosts.filter((post) => post.language === language);
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string, limit = 3) {
  const currentPost = getBlogPost(currentSlug);

  if (!currentPost) {
    return [];
  }

  return blogPosts
    .filter(
      (post) =>
        post.slug !== currentSlug &&
        (post.language === currentPost.language ||
          post.category === currentPost.category)
    )
    .slice(0, limit);
}
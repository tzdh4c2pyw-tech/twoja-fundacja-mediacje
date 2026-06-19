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

export type BlogDoiReference = {
  label: string;
  doi?: string;
  url?: string;
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
  footnotes?: string[];
  doiReferences?: BlogDoiReference[];
  internalLinks: {
    label: string;
    href: string;
  }[];
};

const commonApaReferences = [
  "Arkuszewska, A. M., Kościółek, A., Łukasiewicz, J. M., Plis, J., & Serafin, T. (2014). Zarys metodyki pracy mediatora w sprawach cywilnych. Warszawa: Wolters Kluwer. ISBN 978-83-264-3282-8; e-book ISBN 978-83-264-7366-1.",
  "Myślińska, M. (2018). Mediator w polskim porządku prawnym. Warszawa: C. H. Beck. ISBN 978-83-255-8973-8; e-book ISBN 978-83-255-8974-5.",
  "Moore, C. W. (2009). Mediacje. Praktyczne strategie rozwiązywania konfliktów. Warszawa: Wolters Kluwer.",
  "Gmurzyńska, E., & Morek, R. (red.). (2009). Mediacje. Teoria i praktyka. Warszawa: Wolters Kluwer.",
  "Kalisz, A., & Zienkiewicz, A. (2009). Mediacja sądowa i pozasądowa. Zarys wykładu. Warszawa: Wolters Kluwer."
];

const commonOfficialSources = [
  {
    title:
      "Ministerstwo Sprawiedliwości — Mediacje",
    url: "https://www.gov.pl/web/sprawiedliwosc/mediacje"
  },
  {
    title:
      "Ministerstwo Sprawiedliwości — Koszty mediacji",
    url: "https://www.gov.pl/web/sprawiedliwosc/koszty-mediacji"
  },
  {
    title:
      "Dyrektywa Parlamentu Europejskiego i Rady 2008/52/WE w sprawie niektórych aspektów mediacji w sprawach cywilnych i handlowych",
    url: "https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX%3A32008L0052"
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "czy-mediacja-karna-jest-bezplatna-dla-stron",
    language: "pl",
    title: "Czy mediacja karna jest bezpłatna dla stron?",
    metaTitle: "Czy mediacja karna jest bezpłatna dla stron?",
    metaDescription:
      "Wyjaśniamy, kto ponosi koszty mediacji karnej, kiedy strony nie płacą za mediację i jak wygląda mediacja w sprawach karnych.",
    description:
      "Koszty mediacji karnej nie obciążają stron postępowania. Wyjaśniamy, co to oznacza w praktyce i kiedy mediacja karna może mieć zastosowanie.",
    date: "2026-06-19",
    updatedAt: "2026-06-19",
    category: "Mediacje karne",
    readingTime: "7 min",
    keywords: [
      "mediacja karna bezpłatna",
      "czy mediacja karna jest bezpłatna",
      "koszty mediacji karnej",
      "mediacje karne Kraków",
      "mediator karny Kraków",
      "postępowanie mediacyjne w sprawach karnych",
      "mediacja pokrzywdzony sprawca",
      "Fundacja Mediacji Sądowej i Pozasądowej"
    ],
    heroLabel: "Mediacje karne · koszty · Kraków",
    intro:
      "W sprawach karnych koszty postępowania mediacyjnego nie obciążają stron. Oznacza to, że ani pokrzywdzony, ani sprawca nie ponoszą kosztów wynagrodzenia mediatora ani zwrotu wydatków związanych z przeprowadzeniem mediacji. Koszty te ponosi Skarb Państwa.",
    sections: [
      {
        heading: "Co oznacza bezpłatność mediacji karnej dla stron?",
        paragraphs: [
          "Bezpłatność mediacji karnej dla stron nie oznacza, że mediator pracuje bez wynagrodzenia. Oznacza, że wynagrodzenie mediatora i zwrot wydatków związanych z przeprowadzeniem mediacji nie są przerzucane na uczestników postępowania.",
          "Dla pokrzywdzonego i sprawcy ma to znaczenie praktyczne. Udział w mediacji nie powinien być blokowany obawą przed dodatkowymi kosztami. Strony mogą skoncentrować się na rozmowie o skutkach czynu, naprawieniu szkody, przeprosinach, zadośćuczynieniu lub innych możliwych ustaleniach.",
          "Mediacja karna pozostaje procedurą wymagającą szczególnej neutralności i ostrożności. Mediator nie zastępuje sądu, prokuratora ani obrońcy. Nie rozstrzyga o winie i nie ocenia stron."
        ]
      },
      {
        heading: "Kiedy sprawa karna może trafić do mediacji?",
        paragraphs: [
          "Do mediacji karnej może dojść wtedy, gdy sprawa zostaje skierowana do postępowania mediacyjnego przez właściwy organ. W zależności od etapu sprawy może to nastąpić w postępowaniu przygotowawczym albo sądowym.",
          "Mediacja karna opiera się na dobrowolności udziału stron. Celem jest stworzenie bezpiecznej przestrzeni do rozmowy o skutkach zdarzenia i możliwym sposobie naprawienia szkody lub ułożenia relacji między stronami.",
          "Z punktu widzenia SEO lokalnego istotne jest, że osoby szukające hasła „mediacje karne Kraków” często potrzebują jasnej informacji o kosztach, poufności i roli mediatora. Ten wpis odpowiada bezpośrednio na tę intencję."
        ]
      },
      {
        heading: "Rola mediatora w sprawie karnej",
        paragraphs: [
          "Mediator jest osobą trzecią, która porządkuje komunikację, pilnuje zasad rozmowy i wspiera strony w poszukiwaniu możliwego porozumienia. Nie reprezentuje żadnej ze stron.",
          "W literaturze podkreśla się, że rola mediatora wymaga bezstronności, neutralności, rzetelności i kompetencji. Dotyczy to szczególnie spraw, w których rozmowa wiąże się z silnym napięciem emocjonalnym.",
          "W praktyce mediator pomaga stronom mówić o potrzebach, konsekwencjach i warunkach ewentualnego porozumienia. Nie może jednak wymuszać ugody ani obiecywać określonego skutku procesowego."
        ]
      },
      {
        heading: "Mediacje karne w Krakowie",
        paragraphs: [
          "Osoba, która otrzymała informację o skierowaniu sprawy do mediacji karnej, może skontaktować się z mediatorem lub instytucją prowadzącą mediacje, aby ustalić kwestie organizacyjne.",
          "W pierwszej wiadomości warto podać etap sprawy, liczbę uczestników, informację o skierowaniu do mediacji i preferowany tryb kontaktu. Nie trzeba od razu przesyłać całej dokumentacji sprawy.",
          "Fundacja Mediacji Sądowej i Pozasądowej w Krakowie prowadzi mediacje w sprawach karnych w ramach posiadanych uprawnień organizacyjnych."
        ]
      }
    ],
    faq: [
      {
        question: "Czy pokrzywdzony płaci za mediację karną?",
        answer:
          "Nie. Koszty mediacji w sprawach karnych nie obciążają stron postępowania."
      },
      {
        question: "Czy sprawca płaci za mediację karną?",
        answer:
          "Nie. Wynagrodzenie mediatora i zwrot wydatków związanych z mediacją karną ponosi Skarb Państwa."
      },
      {
        question: "Czy mediacja karna zawsze kończy się ugodą?",
        answer:
          "Nie. Mediacja może zakończyć się porozumieniem, częściowym porozumieniem albo brakiem ugody."
      },
      {
        question: "Czy mediator decyduje o winie?",
        answer:
          "Nie. Mediator nie rozstrzyga o winie i nie zastępuje sądu ani organów procesowych."
      }
    ],
    sources: [
      {
        title:
          "Ministerstwo Sprawiedliwości — postępowanie mediacyjne w sprawach karnych",
        url: "https://www.gov.pl/web/sprawiedliwosc/postepowanie-mediacyjne-w-sprawach-karnych"
      },
      {
        title:
          "Ministerstwo Sprawiedliwości — Mediacje",
        url: "https://www.gov.pl/web/sprawiedliwosc/mediacje"
      },
      {
        title:
          "Rozporządzenie Ministra Sprawiedliwości w sprawie postępowania mediacyjnego w sprawach karnych — Dz.U. 2015 poz. 716",
        url: "https://www.gov.pl/web/sprawiedliwosc/rozporzadzenie-ministra-sprawiedliwosci-w-sprawie-postepowania-mediacyjnego-w-sprawach-karnych-dzu-z-2015-r-poz-716"
      }
    ],
    referencesApa6: [
      "Myślińska, M. (2018). Mediator w polskim porządku prawnym. Warszawa: C. H. Beck. ISBN 978-83-255-8973-8.",
      "Moore, C. W. (2009). Mediacje. Praktyczne strategie rozwiązywania konfliktów. Warszawa: Wolters Kluwer.",
      "Gmurzyńska, E., & Morek, R. (red.). (2009). Mediacje. Teoria i praktyka. Warszawa: Wolters Kluwer."
    ],
    footnotes: [
      "Informacja o kosztach mediacji karnej została oparta na publicznych materiałach Ministerstwa Sprawiedliwości.",
      "Wpis ma charakter informacyjny i nie stanowi porady prawnej w indywidualnej sprawie.",
      "DOI nie podano, ponieważ wykorzystane monografie i materiały urzędowe nie wskazują DOI."
    ],
    doiReferences: [],
    internalLinks: [
      {
        label: "Cennik mediacji i kalkulator kosztów",
        href: "/cennik"
      },
      {
        label: "Mediacje karne w Krakowie",
        href: "/#karne"
      },
      {
        label: "Kwalifikacje mediatora",
        href: "/kwalifikacje"
      },
      {
        label: "Kontakt z Fundacją",
        href: "/#kontakt"
      }
    ]
  },
  {
    slug: "ile-kosztuje-mediacja-sadowa-w-sprawie-cywilnej",
    language: "pl",
    title: "Ile kosztuje mediacja sądowa w sprawie cywilnej?",
    metaTitle: "Ile kosztuje mediacja sądowa w sprawie cywilnej?",
    metaDescription:
      "Koszty mediacji sądowej w sprawach cywilnych: sprawy majątkowe, niemajątkowe, wydatki mediatora, VAT i kalkulator.",
    description:
      "Koszt mediacji sądowej w sprawie cywilnej zależy od rodzaju sprawy, wartości przedmiotu sporu, liczby posiedzeń i wydatków mediatora.",
    date: "2026-06-19",
    updatedAt: "2026-06-19",
    category: "Koszty mediacji",
    readingTime: "8 min",
    keywords: [
      "ile kosztuje mediacja",
      "koszty mediacji sądowej",
      "mediacja cywilna koszt",
      "cennik mediacji Kraków",
      "mediator Kraków cennik",
      "mediacje rodzinne koszt",
      "mediacje gospodarcze koszt",
      "kalkulator mediacji"
    ],
    heroLabel: "Koszty mediacji · sprawy cywilne · Kraków",
    intro:
      "Koszt mediacji sądowej w sprawie cywilnej nie jest dowolny. Jeżeli mediacja została wszczęta na podstawie skierowania sądu, wysokość wynagrodzenia mediatora i podlegających zwrotowi wydatków wynika z rozporządzenia Ministra Sprawiedliwości.",
    sections: [
      {
        heading: "Sprawy majątkowe — kiedy liczy się wartość sporu",
        paragraphs: [
          "W sprawach o prawa majątkowe podstawą obliczeń jest wartość przedmiotu sporu. Aktualne rozporządzenie przewiduje stawkę procentową, minimum oraz maksimum wynagrodzenia mediatora.",
          "Przy wartości przedmiotu sporu do 200 000 zł wynagrodzenie mediatora wynosi 2% wartości sporu, nie mniej niż 300 zł i nie więcej niż 4000 zł za całość postępowania mediacyjnego.",
          "Przy wartości sporu powyżej 200 000 zł wynagrodzenie wynosi 4000 zł oraz 1% od nadwyżki ponad 200 000 zł, jednak nie więcej niż 8000 zł za całość postępowania mediacyjnego."
        ]
      },
      {
        heading: "Sprawy niemajątkowe i sprawy bez możliwej wyceny",
        paragraphs: [
          "W sprawach o prawa niemajątkowe oraz w sprawach majątkowych, w których wartości przedmiotu sporu nie da się ustalić, rozliczenie opiera się na liczbie posiedzeń.",
          "Wynagrodzenie mediatora wynosi 300 zł za pierwsze posiedzenie i 200 zł za każde kolejne, łącznie nie więcej niż 900 zł za całość postępowania mediacyjnego.",
          "Jeżeli mediacja zostanie przeprowadzona bez posiedzenia mediacyjnego, wynagrodzenie wynosi 300 zł za całość postępowania."
        ]
      },
      {
        heading: "Wydatki mediatora i VAT",
        paragraphs: [
          "Do wynagrodzenia mogą dojść udokumentowane i niezbędne wydatki mediatora, między innymi koszty przejazdu, najmu pomieszczenia i korespondencji.",
          "Rozporządzenie przewiduje limit najmu pomieszczenia do 110 zł za jedno posiedzenie oraz limit korespondencji do 50 zł.",
          "Jeżeli mediator jest podatnikiem VAT, wynagrodzenie określone w rozporządzeniu podwyższa się o kwotę podatku VAT."
        ]
      },
      {
        heading: "Mediacja pozasądowa a cennik mediatora",
        paragraphs: [
          "Mediacja pozasądowa nie jest prowadzona na podstawie skierowania sądu. W takim przypadku wynagrodzenie wynika z cennika ośrodka mediacyjnego albo z uzgodnienia stron z mediatorem.",
          "Dlatego użytkownik strony powinien rozróżniać trzy sytuacje: mediację sądową w sprawie cywilnej, mediację pozasądową oraz mediację karną.",
          "Kalkulator kosztów na stronie powinien jasno pokazywać, że wynik jest orientacyjny i wymaga potwierdzenia w konkretnej sprawie."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacja sądowa w sprawie cywilnej jest płatna?",
        answer:
          "Tak, co do zasady strony ponoszą koszty mediacji cywilnej, z zastrzeżeniem szczegółowych zasad rozliczenia w danej sprawie."
      },
      {
        question: "Ile wynosi minimum w sprawie majątkowej?",
        answer:
          "W sprawie majątkowej do 200 000 zł minimalne wynagrodzenie mediatora wynosi 300 zł."
      },
      {
        question: "Ile wynosi maksimum w sprawie majątkowej?",
        answer:
          "Maksymalne wynagrodzenie mediatora w sprawach majątkowych wynosi 8000 zł za całość postępowania mediacyjnego."
      },
      {
        question: "Czy kalkulator pokazuje ostateczny koszt?",
        answer:
          "Nie. Kalkulator pokazuje wynik orientacyjny. W konkretnej sprawie mogą wystąpić dodatkowe wydatki lub VAT."
      }
    ],
    sources: [
      {
        title:
          "Rozporządzenie Ministra Sprawiedliwości z dnia 12 lutego 2026 r. w sprawie wysokości wynagrodzenia i podlegających zwrotowi wydatków mediatora w postępowaniu cywilnym",
        url: "https://eli.gov.pl/eli/DU/2026/170/ogl/pol"
      },
      {
        title:
          "Ministerstwo Sprawiedliwości — Koszty mediacji",
        url: "https://www.gov.pl/web/sprawiedliwosc/koszty-mediacji"
      },
      {
        title:
          "Ministerstwo Sprawiedliwości — Mediacje",
        url: "https://www.gov.pl/web/sprawiedliwosc/mediacje"
      }
    ],
    referencesApa6: [
      "Arkuszewska, A. M., Kościółek, A., Łukasiewicz, J. M., Plis, J., & Serafin, T. (2014). Zarys metodyki pracy mediatora w sprawach cywilnych. Warszawa: Wolters Kluwer. ISBN 978-83-264-3282-8.",
      "Morek, R. (2012). Mediacja w sprawach cywilnych. Warszawa: Wolters Kluwer.",
      "Gmurzyńska, E., & Morek, R. (red.). (2009). Mediacje. Teoria i praktyka. Warszawa: Wolters Kluwer."
    ],
    footnotes: [
      "Stawki wskazane w artykule dotyczą mediacji cywilnej wszczętej na podstawie skierowania sądu.",
      "W mediacji pozasądowej wynagrodzenie może wynikać z cennika ośrodka mediacyjnego albo z umowy stron z mediatorem.",
      "DOI nie podano, ponieważ cytowane akty prawne i książki nie posiadają wskazanego DOI."
    ],
    doiReferences: [],
    internalLinks: [
      {
        label: "Cennik mediacji i kalkulator kosztów",
        href: "/cennik"
      },
      {
        label: "Mediacje cywilne i gospodarcze",
        href: "/#cywilne"
      },
      {
        label: "Kwalifikacje mediatora",
        href: "/kwalifikacje"
      },
      {
        label: "Kontakt z Fundacją",
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
      "Mediacje rodzinne w Krakowie: rozwód, separacja, kontakty z dzieckiem, opieka, alimenty i porozumienie rodzicielskie.",
    description:
      "Mediacje rodzinne pomagają uporządkować rozmowę w sprawach rozwodu, separacji, kontaktów z dzieckiem, opieki, alimentów i porozumień rodzinnych.",
    date: "2026-06-19",
    updatedAt: "2026-06-19",
    category: "Mediacje rodzinne",
    readingTime: "8 min",
    keywords: [
      "mediacje rodzinne Kraków",
      "mediator rodzinny Kraków",
      "mediacje rozwodowe Kraków",
      "kontakty z dzieckiem mediacja",
      "porozumienie rodzicielskie",
      "alimenty mediacja",
      "mediator sądowy Kraków",
      "mediacja rodzinna"
    ],
    heroLabel: "Mediacje rodzinne · Kraków · porozumienie",
    intro:
      "Mediacje rodzinne są przeznaczone dla osób, które chcą uporządkować trudną rozmowę dotyczącą spraw rodzinnych. Mogą dotyczyć rozwodu, separacji, kontaktów z dzieckiem, opieki, alimentów, komunikacji rodzicielskiej albo innych ustaleń ważnych dla rodziny.",
    sections: [
      {
        heading: "Kiedy mediacja rodzinna może być potrzebna?",
        paragraphs: [
          "Mediacja rodzinna może być pomocna wtedy, gdy strony pozostają w konflikcie, ale nadal muszą podejmować wspólne decyzje dotyczące dzieci, opieki lub spraw organizacyjnych.",
          "Najczęstsze tematy mediacji rodzinnych to kontakty z dzieckiem, harmonogram opieki, alimenty, wakacje, święta, zasady komunikacji i porozumienie rodzicielskie.",
          "Mediacja nie jest terapią rodzinną. Jest uporządkowaną rozmową prowadzoną przez bezstronnego mediatora, której celem jest poszukiwanie możliwych ustaleń."
        ]
      },
      {
        heading: "Rozwód, separacja i komunikacja rodzicielska",
        paragraphs: [
          "Rozwód i separacja często łączą konflikt emocjonalny, rodzicielski, organizacyjny i majątkowy. Mediacja pomaga oddzielić te obszary i rozmawiać o nich w sposób bardziej przejrzysty.",
          "W sprawach dotyczących dzieci istotne są konkretne ustalenia: terminy kontaktów, sposób przekazywania informacji, odbiór dziecka, wakacje, święta i sytuacje nagłe.",
          "Dobrze przygotowane porozumienie rodzinne powinno ograniczać pole przyszłych nieporozumień, a nie tylko ogólnie deklarować wolę współpracy."
        ]
      },
      {
        heading: "Mediacje rodzinne lokalnie i online",
        paragraphs: [
          "Osoby szukające mediatora rodzinnego w Krakowie zwykle potrzebują spokojnej przestrzeni do rozmowy i jasnych zasad spotkania.",
          "W części spraw możliwy jest także kontakt online lub mediacja zdalna, o ile zgadzają się na to strony i pozwalają na to warunki organizacyjne.",
          "Przed pierwszym kontaktem warto przygotować krótki opis sprawy, listę tematów do omówienia i informację, czy sprawa toczy się już przed sądem."
        ]
      },
      {
        heading: "Czy mediacja rodzinna zawsze kończy się ugodą?",
        paragraphs: [
          "Nie. Mediacja może zakończyć się pełną ugodą, częściowym porozumieniem albo brakiem porozumienia.",
          "Wartością mediacji może być samo uporządkowanie tematów, ograniczenie napięcia i ustalenie, które kwestie są realnie sporne.",
          "Mediator nie obiecuje wyniku i nie narzuca rozwiązań. Pomaga stronom prowadzić rozmowę w sposób możliwie konstruktywny."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacje rodzinne są tylko dla małżonków?",
        answer:
          "Nie. Mediacje rodzinne mogą dotyczyć rodziców, byłych partnerów, krewnych i innych osób pozostających w konflikcie rodzinnym."
      },
      {
        question: "Czy mediator rodzinny decyduje o kontaktach z dzieckiem?",
        answer:
          "Nie. Mediator nie wydaje decyzji. Pomaga stronom rozmawiać o możliwych ustaleniach."
      },
      {
        question: "Czy mediacja rodzinna może odbyć się online?",
        answer:
          "Tak, w części spraw możliwy jest kontakt online albo mediacja zdalna, jeżeli strony wyrażą zgodę."
      },
      {
        question: "Jak przygotować się do mediacji rodzinnej?",
        answer:
          "Warto przygotować listę tematów, podstawowe daty, harmonogramy oraz informacje o najważniejszych potrzebach dzieci."
      }
    ],
    sources: [
      {
        title:
          "Ministerstwo Sprawiedliwości — Mediacje",
        url: "https://www.gov.pl/web/sprawiedliwosc/mediacje"
      },
      {
        title:
          "Ministerstwo Sprawiedliwości — postępowanie mediacyjne w sprawach cywilnych",
        url: "https://www.gov.pl/web/sprawiedliwosc/postepowanie-mediacyjne-w-sprawach-cywilnych"
      },
      {
        title:
          "Dyrektywa 2008/52/WE w sprawie mediacji w sprawach cywilnych i handlowych",
        url: "https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX%3A32008L0052"
      }
    ],
    referencesApa6: [
      "Arkuszewska, A. M., Kościółek, A., Łukasiewicz, J. M., Plis, J., & Serafin, T. (2014). Zarys metodyki pracy mediatora w sprawach cywilnych. Warszawa: Wolters Kluwer. ISBN 978-83-264-3282-8.",
      "Gmurzyńska, E., & Morek, R. (red.). (2009). Mediacje. Teoria i praktyka. Warszawa: Wolters Kluwer.",
      "Moore, C. W. (2009). Mediacje. Praktyczne strategie rozwiązywania konfliktów. Warszawa: Wolters Kluwer."
    ],
    footnotes: [
      "Wpis ma charakter informacyjny i nie zastępuje porady prawnej, psychologicznej ani terapeutycznej.",
      "W sprawach rodzinnych szczególne znaczenie ma dobrowolność udziału, poufność i bezpieczeństwo komunikacji.",
      "DOI nie podano, ponieważ wykorzystane publikacje książkowe nie wskazują DOI."
    ],
    doiReferences: [],
    internalLinks: [
      {
        label: "Mediacje rodzinne na stronie głównej",
        href: "/#rodzinne"
      },
      {
        label: "Cennik mediacji",
        href: "/cennik"
      },
      {
        label: "Kwalifikacje mediatora",
        href: "/kwalifikacje"
      },
      {
        label: "Kontakt z Fundacją",
        href: "/#kontakt"
      }
    ]
  },
  {
    slug: "mediacja-sadowa-a-pozasadowa-roznice",
    language: "pl",
    title: "Mediacja sądowa a pozasądowa — najważniejsze różnice",
    metaTitle: "Mediacja sądowa a pozasądowa — różnice",
    metaDescription:
      "Czym różni się mediacja sądowa od pozasądowej? Wyjaśniamy podstawę rozpoczęcia, koszty, rolę sądu i praktyczne skutki.",
    description:
      "Mediacja sądowa i pozasądowa mają wspólny cel, ale różnią się podstawą rozpoczęcia, stopniem formalizacji, kosztami i sposobem organizacji.",
    date: "2026-06-19",
    updatedAt: "2026-06-19",
    category: "Mediacja sądowa i pozasądowa",
    readingTime: "8 min",
    keywords: [
      "mediacja sądowa",
      "mediacja pozasądowa",
      "mediacja sądowa a pozasądowa",
      "mediator Kraków",
      "mediacje cywilne Kraków",
      "mediacje gospodarcze Kraków",
      "ugoda mediacyjna",
      "różnice między mediacją sądową i pozasądową"
    ],
    heroLabel: "Mediacja sądowa · mediacja pozasądowa · ADR",
    intro:
      "Mediacja sądowa i pozasądowa mają wspólny cel: pomoc stronom w wypracowaniu porozumienia. Różnią się jednak podstawą rozpoczęcia, zakresem formalizacji, relacją z sądem oraz sposobem ustalania kosztów.",
    sections: [
      {
        heading: "Jak zaczyna się mediacja sądowa?",
        paragraphs: [
          "Mediacja sądowa zaczyna się wtedy, gdy sprawa jest już związana z postępowaniem sądowym i sąd kieruje strony do mediacji albo strony składają zgodny wniosek.",
          "W mediacji sądowej mediator działa w określonych ramach proceduralnych. Po zakończeniu mediacji sporządzany jest protokół, a ewentualna ugoda może trafić do sądu.",
          "Ten tryb bywa szczególnie istotny, gdy strony chcą ograniczyć zakres sporu sądowego albo zakończyć sprawę w sposób ugodowy."
        ]
      },
      {
        heading: "Jak zaczyna się mediacja pozasądowa?",
        paragraphs: [
          "Mediacja pozasądowa zaczyna się z inicjatywy stron albo jednej ze stron, która kontaktuje się z mediatorem i prosi o podjęcie próby organizacji rozmowy.",
          "Ten tryb jest mniej sformalizowany i może zostać zastosowany zanim sprawa trafi do sądu. Strony mogą dzięki temu sprawdzić, czy porozumienie jest możliwe bez wszczynania procesu.",
          "Koszt mediacji pozasądowej wynika z cennika ośrodka mediacyjnego albo z uzgodnienia stron z mediatorem."
        ]
      },
      {
        heading: "Różnice praktyczne dla stron",
        paragraphs: [
          "Najważniejsze różnice dotyczą podstawy rozpoczęcia, kosztów, dokumentów i relacji z sądem. Mediacja sądowa jest powiązana z toczącym się postępowaniem, a pozasądowa jest samodzielną próbą rozwiązania sporu.",
          "W obu trybach mediator pozostaje bezstronny i nie narzuca rozwiązania. Strony zachowują wpływ na treść ewentualnych ustaleń.",
          "Z perspektywy użytkownika strony internetowej ważne jest, aby już przed kontaktem wiedzieć, czy sprawa jest w sądzie, czy dopiero ma zostać zgłoszona do mediatora."
        ]
      },
      {
        heading: "Który tryb wybrać?",
        paragraphs: [
          "Jeżeli sprawa już toczy się przed sądem, naturalnym trybem może być mediacja sądowa. Jeżeli konflikt istnieje, ale proces nie został jeszcze rozpoczęty, warto rozważyć mediację pozasądową.",
          "W sprawach cywilnych, rodzinnych i gospodarczych wybór trybu zależy od etapu sporu, gotowości stron, dokumentów i celu rozmowy.",
          "Pierwszy kontakt z mediatorem powinien służyć ustaleniu, jaki tryb jest organizacyjnie i proceduralnie właściwy."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacja pozasądowa wymaga sprawy w sądzie?",
        answer:
          "Nie. Mediacja pozasądowa może rozpocząć się przed wniesieniem sprawy do sądu."
      },
      {
        question: "Czy mediacja sądowa jest bardziej formalna?",
        answer:
          "Tak, mediacja sądowa jest związana z postępowaniem sądowym i określonymi czynnościami proceduralnymi."
      },
      {
        question: "Czy w obu trybach mediator jest bezstronny?",
        answer:
          "Tak. Bezstronność mediatora jest jedną z podstawowych zasad mediacji."
      },
      {
        question: "Czy mediacja pozasądowa może zakończyć spór?",
        answer:
          "Tak, jeżeli strony osiągną porozumienie i właściwie uregulują jego treść."
      }
    ],
    sources: commonOfficialSources,
    referencesApa6: [
      "Kalisz, A., & Zienkiewicz, A. (2009). Mediacja sądowa i pozasądowa. Zarys wykładu. Warszawa: Wolters Kluwer.",
      "Arkuszewska, A. M., Kościółek, A., Łukasiewicz, J. M., Plis, J., & Serafin, T. (2014). Zarys metodyki pracy mediatora w sprawach cywilnych. Warszawa: Wolters Kluwer.",
      "Gmurzyńska, E., & Morek, R. (red.). (2009). Mediacje. Teoria i praktyka. Warszawa: Wolters Kluwer."
    ],
    footnotes: [
      "Podział na mediację sądową i pozasądową ma znaczenie praktyczne dla kosztów, dokumentów i relacji z sądem.",
      "Wpis ma charakter informacyjny i nie rozstrzyga, który tryb będzie właściwy w konkretnej sprawie.",
      "DOI nie podano, ponieważ wykorzystane monografie nie wskazują DOI."
    ],
    doiReferences: [],
    internalLinks: [
      {
        label: "Cennik mediacji",
        href: "/cennik"
      },
      {
        label: "Mediacje cywilne i gospodarcze",
        href: "/#cywilne"
      },
      {
        label: "Blog o mediacji",
        href: "/blog"
      },
      {
        label: "Kontakt z Fundacją",
        href: "/#kontakt"
      }
    ]
  },
  {
    slug: "jak-przygotowac-sie-do-pierwszej-mediacji",
    language: "pl",
    title: "Jak przygotować się do pierwszej mediacji?",
    metaTitle: "Jak przygotować się do pierwszej mediacji?",
    metaDescription:
      "Praktyczna lista przygotowania do pierwszej mediacji: opis sprawy, dokumenty, cele, koszty, oczekiwania i zasady rozmowy.",
    description:
      "Pierwsza mediacja wymaga spokojnego przygotowania: krótkiego opisu sprawy, określenia tematów, dokumentów i realistycznych oczekiwań.",
    date: "2026-06-19",
    updatedAt: "2026-06-19",
    category: "Przygotowanie do mediacji",
    readingTime: "8 min",
    keywords: [
      "jak przygotować się do mediacji",
      "pierwsza mediacja",
      "mediator Kraków",
      "mediacje Kraków",
      "co zabrać na mediację",
      "przygotowanie do mediacji",
      "opis sprawy mediacja",
      "spotkanie mediacyjne"
    ],
    heroLabel: "Pierwsza mediacja · przygotowanie · praktyka",
    intro:
      "Pierwsza mediacja nie wymaga przygotowania przemówienia ani kompletnej strategii procesowej. Warto jednak uporządkować fakty, dokumenty, tematy do rozmowy i własne oczekiwania. Dobre przygotowanie pomaga mediatorowi dobrać właściwy tryb pracy i ogranicza chaos komunikacyjny.",
    sections: [
      {
        heading: "Przygotuj krótki opis sprawy",
        paragraphs: [
          "Opis sprawy powinien być zwięzły. Wystarczy wskazać, czego dotyczy konflikt, ile osób bierze w nim udział, czy sprawa jest już w sądzie i jaki jest najważniejszy problem do omówienia.",
          "Nie trzeba przesyłać od razu całego materiału dowodowego. Na pierwszym etapie ważniejsze jest zrozumienie rodzaju sprawy i oczekiwań stron.",
          "W sprawach rodzinnych warto opisać tematy organizacyjne, w sprawach cywilnych warto wskazać wartość sporu, a w sprawach gospodarczych — podstawę relacji między stronami."
        ]
      },
      {
        heading: "Ustal, czego oczekujesz od mediacji",
        paragraphs: [
          "Przed spotkaniem warto odpowiedzieć sobie na pytanie, jaki jest minimalny cel rozmowy. Może to być ugoda, częściowe porozumienie, ustalenie harmonogramu albo uporządkowanie kwestii spornych.",
          "Mediacja nie polega na tym, że mediator przyznaje rację jednej stronie. Jej sens polega na stworzeniu warunków do rozmowy i sprawdzeniu, czy strony mogą same wypracować rozwiązanie.",
          "W literaturze metodycznej podkreśla się znaczenie etapów mediacji i przygotowania mediatora do właściwego prowadzenia rozmowy. Strony również powinny wejść w proces z możliwie uporządkowanymi informacjami."
        ]
      },
      {
        heading: "Przygotuj dokumenty, ale nie zasypuj nimi mediatora",
        paragraphs: [
          "Dokumenty są przydatne, ale mediacja nie jest klasycznym procesem dowodowym. Warto przygotować tylko te dokumenty, które pomagają zrozumieć spór i możliwe warunki porozumienia.",
          "W sprawach majątkowych przydatna może być umowa, faktura, wezwanie do zapłaty, korespondencja lub zestawienie kwot. W sprawach rodzinnych — harmonogram, dotychczasowe ustalenia i najważniejsze daty.",
          "W pierwszej wiadomości można zaznaczyć, że dokumenty są dostępne, a mediator wskaże, które z nich będą potrzebne organizacyjnie."
        ]
      },
      {
        heading: "Zadbaj o sposób komunikacji",
        paragraphs: [
          "Mediacja wymaga nie tylko faktów, ale też gotowości do wysłuchania drugiej strony. Nie oznacza to zgody na wszystko, lecz gotowość do rozmowy w określonych ramach.",
          "Mediator powinien dbać o spokojny, komfortowy i kulturalny przebieg procesu. Strony mogą pomóc, jeśli wcześniej ustalą, które tematy są kluczowe, a które drugorzędne.",
          "Warto unikać wiadomości pisanych pod wpływem emocji. Lepszy jest prosty opis: czego dotyczy sprawa, co trzeba omówić i jaki tryb kontaktu będzie możliwy."
        ]
      }
    ],
    faq: [
      {
        question: "Czy na pierwszą mediację trzeba mieć adwokata?",
        answer:
          "Nie zawsze. Udział pełnomocnika zależy od rodzaju sprawy i decyzji strony. Mediator nie zastępuje jednak porady prawnej."
      },
      {
        question: "Czy trzeba zabrać wszystkie dokumenty?",
        answer:
          "Nie. Warto przygotować najważniejsze dokumenty, które pomagają zrozumieć spór i możliwe warunki porozumienia."
      },
      {
        question: "Czy trzeba mieć gotową propozycję ugody?",
        answer:
          "Nie, ale warto wiedzieć, jakie tematy są najważniejsze i jakie rozwiązania byłyby możliwe do rozważenia."
      },
      {
        question: "Czy mediacja może odbyć się online?",
        answer:
          "Tak, w części spraw możliwy jest kontakt online albo mediacja zdalna, jeżeli strony wyrażą zgodę i pozwalają na to warunki sprawy."
      }
    ],
    sources: [
      {
        title:
          "Ministerstwo Sprawiedliwości — Mediacje",
        url: "https://www.gov.pl/web/sprawiedliwosc/mediacje"
      },
      {
        title:
          "Ministerstwo Sprawiedliwości — mediacja pozasądowa",
        url: "https://www.gov.pl/web/sprawiedliwosc/mediacja-pozasadowa"
      },
      {
        title:
          "Dyrektywa 2008/52/WE w sprawie mediacji w sprawach cywilnych i handlowych",
        url: "https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX%3A32008L0052"
      }
    ],
    referencesApa6: commonApaReferences,
    footnotes: [
      "Wpis opiera się na założeniu, że mediacja jest procedurą elastyczną, ale wymaga przygotowania organizacyjnego.",
      "W zależności od rodzaju sprawy mediator może poprosić o dodatkowe informacje lub dokumenty.",
      "DOI nie podano, ponieważ wykorzystane książki i materiały urzędowe nie wskazują DOI."
    ],
    doiReferences: [],
    internalLinks: [
      {
        label: "Kontakt z Fundacją",
        href: "/#kontakt"
      },
      {
        label: "Mediacje online",
        href: "/#online"
      },
      {
        label: "Cennik mediacji",
        href: "/cennik"
      },
      {
        label: "Kwalifikacje mediatora",
        href: "/kwalifikacje"
      }
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
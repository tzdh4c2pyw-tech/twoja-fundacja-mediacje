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
  internalLinks: {
    label: string;
    href: string;
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "czy-mediacja-karna-jest-bezplatna-dla-stron",
    language: "pl",
    title: "Czy mediacja karna jest bezpłatna dla stron?",
    metaTitle: "Czy mediacja karna jest bezpłatna dla stron?",
    metaDescription:
      "Wyjaśniamy, kto ponosi koszty mediacji karnej, kiedy strony nie płacą za mediację i jak wygląda postępowanie mediacyjne w sprawach karnych.",
    description:
      "Koszty mediacji karnej nie obciążają stron postępowania. Wyjaśniamy, co to oznacza w praktyce i kiedy mediacja karna może być zastosowana.",
    date: "2026-06-19",
    updatedAt: "2026-06-19",
    category: "Mediacje karne",
    readingTime: "6 min",
    keywords: [
      "mediacja karna bezpłatna",
      "czy mediacja karna jest bezpłatna",
      "koszty mediacji karnej",
      "mediacje karne Kraków",
      "mediator karny Kraków",
      "postępowanie mediacyjne w sprawach karnych",
      "mediacja pokrzywdzony sprawca"
    ],
    heroLabel: "Mediacje karne · koszty · Kraków",
    intro:
      "W sprawach karnych koszty postępowania mediacyjnego nie obciążają stron. Oznacza to, że ani pokrzywdzony, ani sprawca nie ponoszą kosztów wynagrodzenia mediatora ani zwrotu wydatków związanych z przeprowadzeniem mediacji. Koszty te ponosi Skarb Państwa. W praktyce jest to jedna z najważniejszych informacji dla osób, które rozważają udział w mediacji karnej albo zostały do niej skierowane przez właściwy organ.",
    sections: [
      {
        heading: "Mediacja karna — co oznacza „bezpłatna dla stron”?",
        paragraphs: [
          "Określenie, że mediacja karna jest bezpłatna dla stron, należy rozumieć precyzyjnie. Nie chodzi o to, że mediator pracuje bez wynagrodzenia. Chodzi o to, że koszty mediacji w sprawie karnej nie są przerzucane na strony postępowania. Wynagrodzenie mediatora oraz zwrot wydatków związanych z przeprowadzeniem mediacji ponosi Skarb Państwa.",
          "Dla osoby pokrzywdzonej oznacza to, że udział w mediacji karnej nie powinien wiązać się z obowiązkiem zapłaty mediatorowi za przeprowadzenie postępowania mediacyjnego. Dla sprawcy oznacza to samo — udział w mediacji karnej nie jest uzależniony od wniesienia opłaty za pracę mediatora.",
          "Jest to szczególnie istotne, ponieważ mediacja karna często dotyczy spraw, w których strony są już obciążone emocjonalnie, organizacyjnie i procesowo. Brak kosztu po stronie uczestników może ułatwiać realne rozważenie rozmowy, naprawienia szkody, przeprosin albo innego sposobu zakończenia konfliktu."
        ]
      },
      {
        heading: "Kiedy może dojść do mediacji karnej?",
        paragraphs: [
          "Mediacja karna może być zastosowana wtedy, gdy sprawa ma charakter karny, a właściwy organ skieruje ją do postępowania mediacyjnego. W zależności od etapu sprawy może to nastąpić w toku postępowania przygotowawczego albo sądowego.",
          "Celem mediacji karnej nie jest zastąpienie sądu ani wydanie rozstrzygnięcia o winie. Mediator nie ocenia, kto ma rację, nie wydaje wyroku i nie reprezentuje żadnej ze stron. Jego zadaniem jest stworzenie warunków do bezpiecznej, uporządkowanej i poufnej rozmowy między stronami.",
          "W mediacji karnej strony mogą rozmawiać między innymi o skutkach czynu, sposobie naprawienia szkody, zadośćuczynieniu, przeprosinach, zasadach dalszego kontaktu albo innych warunkach porozumienia, jeżeli charakter sprawy na to pozwala."
        ]
      },
      {
        heading: "Kto uczestniczy w mediacji karnej?",
        paragraphs: [
          "W mediacji karnej najczęściej uczestniczy osoba pokrzywdzona oraz sprawca. W zależności od sprawy, wieku uczestników, ich sytuacji procesowej albo decyzji organu prowadzącego postępowanie, udział mogą mieć także inne osoby, jeżeli jest to dopuszczalne i potrzebne.",
          "Mediacja jest dobrowolna. Oznacza to, że strony nie powinny być zmuszane do rozmowy ani do zawarcia porozumienia. Samo skierowanie sprawy do mediacji nie oznacza jeszcze, że ugoda zostanie zawarta. Mediacja tworzy możliwość rozmowy, ale jej wynik zależy od decyzji stron.",
          "Mediator powinien zachować bezstronność i neutralność. Nie jest pełnomocnikiem pokrzywdzonego ani sprawcy. Nie doradza jednej stronie przeciwko drugiej. Pilnuje procedury, zasad komunikacji i warunków, w których strony mogą pracować nad możliwym rozwiązaniem."
        ]
      },
      {
        heading: "Czy mediacja karna zawsze kończy się ugodą?",
        paragraphs: [
          "Nie. Mediacja karna może zakończyć się porozumieniem, ale nie musi. Strony mogą dojść do ugody, częściowego uzgodnienia albo nie osiągnąć porozumienia. Brak ugody nie oznacza automatycznie, że udział w mediacji był błędem.",
          "W wielu sprawach sama możliwość wysłuchania drugiej strony, nazwania skutków zdarzenia albo uporządkowania oczekiwań ma znaczenie praktyczne. W innych sprawach strony mogą ustalić konkretne świadczenia, przeprosiny, sposób naprawienia szkody albo inne warunki, które następnie są przekazywane właściwemu organowi.",
          "Mediator dokumentuje wynik mediacji zgodnie z zasadami właściwej procedury. Nie ujawnia jednak szczegółów rozmów w sposób sprzeczny z zasadą poufności."
        ]
      },
      {
        heading: "Czym mediacja karna różni się od mediacji cywilnej?",
        paragraphs: [
          "Najważniejsza różnica dotyczy charakteru sprawy i zasad kosztowych. W mediacji karnej koszty postępowania mediacyjnego nie obciążają stron. W sprawach cywilnych, rodzinnych i gospodarczych prowadzonych na podstawie skierowania sądu wynagrodzenie mediatora i zwrot wydatków są określane według odrębnych zasad.",
          "W postępowaniu cywilnym aktualne stawki wynikają z rozporządzenia Ministra Sprawiedliwości dotyczącego wynagrodzenia i podlegających zwrotowi wydatków mediatora w postępowaniu cywilnym. Dlatego dla spraw cywilnych, rodzinnych i gospodarczych warto korzystać z osobnego kalkulatora kosztów mediacji.",
          "W sprawach pozasądowych koszt mediacji wynika natomiast z cennika ośrodka mediacyjnego albo z ustaleń stron z mediatorem przed rozpoczęciem mediacji."
        ]
      },
      {
        heading: "Mediacje karne w Krakowie — kiedy warto zapytać mediatora?",
        paragraphs: [
          "Jeżeli sprawa została skierowana do mediacji karnej albo jedna ze stron chce zrozumieć, jak wygląda taka procedura, warto skontaktować się z mediatorem lub instytucją prowadzącą mediacje. W pierwszej wiadomości dobrze podać, na jakim etapie jest sprawa, czy istnieje skierowanie do mediacji oraz ilu uczestników może brać udział w rozmowie.",
          "Fundacja Mediacji Sądowej i Pozasądowej w Krakowie prowadzi mediacje sądowe i pozasądowe, w tym mediacje karne w ramach posiadanych uprawnień organizacyjnych. Siedziba znajduje się przy ul. Kieleckiej 2/53 w Krakowie, w okolicy Ronda Mogilskiego.",
          "W przypadku pytań o koszty warto pamiętać o podstawowej zasadzie: w sprawach karnych koszty mediacji ponosi Skarb Państwa, natomiast inne rodzaje mediacji mogą podlegać odrębnym zasadom rozliczenia."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacja karna jest bezpłatna dla pokrzywdzonego?",
        answer:
          "Tak. Koszty mediacji w sprawie karnej nie obciążają stron postępowania. Dotyczy to także osoby pokrzywdzonej."
      },
      {
        question: "Czy sprawca płaci za mediację karną?",
        answer:
          "Nie. W sprawach karnych wynagrodzenie mediatora i zwrot wydatków związanych z mediacją ponosi Skarb Państwa."
      },
      {
        question: "Czy mediator w sprawie karnej pracuje za darmo?",
        answer:
          "Nie. Mediatorowi przysługuje wynagrodzenie, ale koszt ten nie jest ponoszony przez strony postępowania karnego."
      },
      {
        question: "Czy mediacja karna zawsze kończy sprawę?",
        answer:
          "Nie zawsze. Mediacja może zakończyć się porozumieniem, ale jej wynik zależy od stron oraz od charakteru konkretnej sprawy."
      },
      {
        question: "Czy mediacja karna jest obowiązkowa?",
        answer:
          "Mediacja opiera się na dobrowolności. Strony nie powinny być zmuszane do zawarcia porozumienia."
      },
      {
        question: "Czy można zapytać o mediację karną w Krakowie?",
        answer:
          "Tak. Można skontaktować się z Fundacją Mediacji Sądowej i Pozasądowej w Krakowie, podając krótki opis sprawy i informację, czy istnieje skierowanie do mediacji."
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
          "Ministerstwo Sprawiedliwości — mediacje, koszty mediacji w sprawach karnych",
        url: "https://www.gov.pl/web/sprawiedliwosc/mediacje"
      },
      {
        title:
          "Rozporządzenie Ministra Sprawiedliwości z dnia 12 lutego 2026 r. w sprawie wynagrodzenia mediatora w postępowaniu cywilnym — Dz.U. 2026 poz. 170",
        url: "https://eli.gov.pl/eli/DU/2026/170/ogl/pol"
      }
    ],
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
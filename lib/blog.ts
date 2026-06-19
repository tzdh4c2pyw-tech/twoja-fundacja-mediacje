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
      "Wyjaśniamy, kto ponosi koszty mediacji karnej, kiedy strony nie płacą za mediację i jak wygląda mediacja w sprawach karnych.",
    description:
      "Koszty mediacji karnej nie obciążają stron postępowania. Wyjaśniamy, co to oznacza w praktyce i kiedy mediacja karna może mieć zastosowanie.",
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
      "mediacja pokrzywdzony sprawca",
      "Fundacja Mediacji Sądowej i Pozasądowej"
    ],
    heroLabel: "Mediacje karne · koszty · Kraków",
    intro:
      "W sprawach karnych koszty postępowania mediacyjnego nie obciążają stron. Oznacza to, że ani pokrzywdzony, ani sprawca nie ponoszą kosztów wynagrodzenia mediatora ani zwrotu wydatków związanych z przeprowadzeniem mediacji. Koszty te ponosi Skarb Państwa. Dla wielu osób jest to jedna z najważniejszych informacji przed wyrażeniem zgody na udział w mediacji karnej.",
    sections: [
      {
        heading: "Co oznacza, że mediacja karna jest bezpłatna dla stron?",
        paragraphs: [
          "Sformułowanie „bezpłatna dla stron” trzeba rozumieć precyzyjnie. Nie oznacza ono, że mediator nie otrzymuje wynagrodzenia. Oznacza, że koszt wynagrodzenia mediatora i zwrot wydatków związanych z przeprowadzeniem mediacji nie są przerzucane na strony postępowania karnego.",
          "Dla pokrzywdzonego oznacza to, że udział w mediacji karnej nie powinien wiązać się z obowiązkiem zapłaty mediatorowi. Dla sprawcy oznacza to samo: udział w mediacji karnej nie jest uzależniony od uiszczenia opłaty na rzecz mediatora.",
          "Ta zasada ma istotne znaczenie praktyczne. Mediacja karna często dotyczy sytuacji obciążających emocjonalnie i organizacyjnie. Brak kosztu po stronie uczestników może ułatwiać spokojne rozważenie rozmowy, naprawienia szkody, przeprosin lub innego sposobu zakończenia konfliktu."
        ]
      },
      {
        heading: "Kiedy może dojść do mediacji karnej?",
        paragraphs: [
          "Mediacja karna może mieć miejsce wtedy, gdy sprawa ma charakter karny, a właściwy organ skieruje ją do postępowania mediacyjnego. W zależności od etapu sprawy może to nastąpić w toku postępowania przygotowawczego albo sądowego.",
          "Mediator nie zastępuje sądu i nie rozstrzyga o winie. Nie reprezentuje pokrzywdzonego ani sprawcy. Jego zadaniem jest stworzenie warunków do bezpiecznej, uporządkowanej i poufnej rozmowy między stronami.",
          "W mediacji karnej strony mogą rozmawiać między innymi o skutkach czynu, naprawieniu szkody, zadośćuczynieniu, przeprosinach, zasadach dalszego kontaktu lub innych warunkach porozumienia, jeżeli charakter sprawy na to pozwala."
        ]
      },
      {
        heading: "Kto uczestniczy w mediacji karnej?",
        paragraphs: [
          "W mediacji karnej najczęściej uczestniczy osoba pokrzywdzona oraz sprawca. W niektórych sytuacjach, zależnie od charakteru sprawy, wieku uczestników, etapu postępowania lub decyzji właściwego organu, udział mogą mieć także inne osoby.",
          "Mediacja opiera się na dobrowolności. Samo skierowanie sprawy do mediacji nie oznacza, że strony muszą zawrzeć porozumienie. Strony powinny mieć możliwość świadomego udziału w rozmowie i podjęcia decyzji co do ewentualnych ustaleń.",
          "Bezstronność mediatora jest kluczowa. Mediator pilnuje procedury i komunikacji, ale nie doradza jednej stronie przeciwko drugiej i nie wywiera presji na zawarcie ugody."
        ]
      },
      {
        heading: "Czy mediacja karna zawsze kończy się ugodą?",
        paragraphs: [
          "Nie. Mediacja karna może zakończyć się porozumieniem, ale nie musi. Strony mogą osiągnąć pełne ustalenia, częściowe porozumienie albo zakończyć mediację bez ugody.",
          "Brak porozumienia nie oznacza automatycznie, że mediacja była bezcelowa. W niektórych sprawach sama możliwość wysłuchania drugiej strony, nazwania skutków zdarzenia i uporządkowania oczekiwań może mieć znaczenie praktyczne.",
          "Jeżeli strony osiągną porozumienie, mediator dokumentuje wynik mediacji zgodnie z właściwymi zasadami. Nie ujawnia jednak szczegółów rozmów w sposób sprzeczny z zasadą poufności."
        ]
      },
      {
        heading: "Mediacje karne w Krakowie — kiedy warto zapytać mediatora?",
        paragraphs: [
          "Jeżeli sprawa została skierowana do mediacji karnej albo jedna ze stron chce zrozumieć, jak wygląda taka procedura, warto skontaktować się z mediatorem lub instytucją prowadzącą mediacje. W pierwszej wiadomości dobrze podać, czy istnieje skierowanie do mediacji, na jakim etapie jest sprawa i ilu uczestników może brać udział w rozmowie.",
          "Fundacja Mediacji Sądowej i Pozasądowej w Krakowie prowadzi mediacje sądowe i pozasądowe, w tym mediacje karne w ramach posiadanych uprawnień organizacyjnych. Siedziba znajduje się przy ul. Kieleckiej 2/53 w Krakowie, w okolicy Ronda Mogilskiego.",
          "Podstawowa zasada kosztowa jest prosta: w sprawach karnych koszty mediacji ponosi Skarb Państwa. Inne rodzaje mediacji, na przykład cywilne, rodzinne, gospodarcze lub pozasądowe, mogą podlegać odrębnym zasadom rozliczenia."
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
          "Rozporządzenie Ministra Sprawiedliwości w sprawie postępowania mediacyjnego w sprawach karnych — Dz.U. 2015 poz. 716",
        url: "https://www.gov.pl/web/sprawiedliwosc/rozporzadzenie-ministra-sprawiedliwosci-w-sprawie-postepowania-mediacyjnego-w-sprawach-karnych-dzu-z-2015-r-poz-716"
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
  },
  {
    slug: "ile-kosztuje-mediacja-sadowa-w-sprawie-cywilnej",
    language: "pl",
    title: "Ile kosztuje mediacja sądowa w sprawie cywilnej?",
    metaTitle: "Ile kosztuje mediacja sądowa w sprawie cywilnej?",
    metaDescription:
      "Sprawdź, jak ustalane są koszty mediacji sądowej w sprawach cywilnych, rodzinnych i gospodarczych oraz kiedy warto użyć kalkulatora.",
    description:
      "Koszt mediacji sądowej w sprawie cywilnej zależy od rodzaju sprawy, wartości przedmiotu sporu, liczby posiedzeń i możliwych wydatków mediatora.",
    date: "2026-06-19",
    updatedAt: "2026-06-19",
    category: "Koszty mediacji",
    readingTime: "7 min",
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
      "Koszt mediacji sądowej w sprawie cywilnej nie jest dowolny. W przypadku mediacji prowadzonej na podstawie skierowania sądu wysokość wynagrodzenia mediatora i podlegających zwrotowi wydatków wynika z przepisów. Inaczej wygląda mediacja pozasądowa, w której koszt wynika z cennika ośrodka mediacyjnego albo z ustaleń stron z mediatorem przed rozpoczęciem mediacji.",
    sections: [
      {
        heading: "Od czego zależy koszt mediacji sądowej?",
        paragraphs: [
          "W sprawach cywilnych, rodzinnych i gospodarczych koszt mediacji zależy przede wszystkim od tego, czy sprawa ma charakter majątkowy, czy niemajątkowy. Jeżeli można określić wartość przedmiotu sporu, stosuje się inny sposób obliczania wynagrodzenia mediatora niż w sprawach, których wartości nie da się ustalić.",
          "Znaczenie może mieć również liczba posiedzeń mediacyjnych, wydatki poniesione przez mediatora oraz ewentualny podatek VAT, jeżeli mediator jest podatnikiem zobowiązanym do jego rozliczenia.",
          "Dlatego przed rozpoczęciem mediacji warto ustalić podstawowe informacje: rodzaj sprawy, wartość przedmiotu sporu, liczbę stron, etap postępowania oraz to, czy mediacja odbywa się na podstawie skierowania sądu."
        ]
      },
      {
        heading: "Sprawy majątkowe — jak liczy się wynagrodzenie mediatora?",
        paragraphs: [
          "W sprawach o prawa majątkowe wynagrodzenie mediatora zależy od wartości przedmiotu sporu. Zgodnie z aktualnym rozporządzeniem, przy wartości przedmiotu sporu do 200 000 zł wynagrodzenie wynosi 2% wartości sporu, jednak nie mniej niż 300 zł i nie więcej niż 4000 zł za całość postępowania mediacyjnego.",
          "Jeżeli wartość przedmiotu sporu przekracza 200 000 zł, wynagrodzenie mediatora wynosi 4000 zł oraz 1% od nadwyżki ponad 200 000 zł. Maksymalnie wynagrodzenie nie może przekroczyć 8000 zł za całość postępowania mediacyjnego.",
          "Przykładowo, przy sporze o zapłatę, rozliczeniu umowy lub konflikcie gospodarczym pierwszym krokiem jest ustalenie wartości przedmiotu sporu. Następnie można orientacyjnie obliczyć koszt przy pomocy kalkulatora mediacji."
        ]
      },
      {
        heading: "Sprawy niemajątkowe i sprawy bez możliwej wyceny",
        paragraphs: [
          "Inaczej wygląda obliczanie wynagrodzenia w sprawach o prawa niemajątkowe oraz w sprawach o prawa majątkowe, w których wartości przedmiotu sporu nie da się ustalić. W takim przypadku wynagrodzenie mediatora wynosi 300 zł za pierwsze posiedzenie mediacyjne i 200 zł za każde kolejne.",
          "Łączna wysokość wynagrodzenia w takich sprawach nie powinna przekroczyć 900 zł za całość postępowania mediacyjnego. Jeżeli postępowanie mediacyjne jest prowadzone bez posiedzenia mediacyjnego, wynagrodzenie wynosi 300 zł.",
          "Takie zasady mogą mieć znaczenie w części spraw rodzinnych lub organizacyjnych, w których nie chodzi przede wszystkim o określoną kwotę pieniędzy, lecz o sposób ułożenia relacji lub określenia zasad współdziałania stron."
        ]
      },
      {
        heading: "Jakie wydatki mogą dojść do wynagrodzenia mediatora?",
        paragraphs: [
          "Oprócz wynagrodzenia mediatorowi mogą przysługiwać udokumentowane i niezbędne wydatki związane z przeprowadzeniem mediacji. Przepisy przewidują między innymi zwrot kosztów przejazdów, najmu pomieszczenia oraz korespondencji.",
          "Najem pomieszczenia potrzebnego do przeprowadzenia posiedzenia mediacyjnego może być rozliczony do wysokości nieprzekraczającej 110 zł za jedno posiedzenie. Korespondencja może być rozliczona do wysokości nieprzekraczającej 50 zł.",
          "W praktyce konkretna wysokość kosztów zależy od organizacji sprawy. Jeżeli mediacja odbywa się w siedzibie mediatora lub online, część wydatków może nie wystąpić. Dlatego wynik kalkulatora należy traktować jako orientacyjny."
        ]
      },
      {
        heading: "Mediacja pozasądowa — inne zasady ustalania kosztów",
        paragraphs: [
          "Mediacja pozasądowa nie odbywa się na podstawie postanowienia sądu. W takim przypadku strony same zgłaszają się do mediatora albo jedna ze stron prosi mediatora o kontakt z drugą stroną.",
          "Koszt mediacji pozasądowej nie wynika z jednej tabeli ustawowej dla każdej sytuacji. Wysokość wynagrodzenia i zwrot wydatków wynikają z cennika ośrodka mediacyjnego albo z uzgodnienia stron z mediatorem przed rozpoczęciem mediacji.",
          "Właśnie dlatego na stronie warto korzystać z kalkulatora rozdzielającego mediację sądową, mediację pozasądową i mediację karną. Każdy z tych trybów ma inne zasady kosztowe."
        ]
      },
      {
        heading: "Kiedy warto użyć kalkulatora kosztów mediacji?",
        paragraphs: [
          "Kalkulator kosztów mediacji jest szczególnie przydatny wtedy, gdy sprawa ma wartość majątkową albo gdy użytkownik chce wstępnie ocenić różnicę między mediacją sądową i pozasądową.",
          "W sprawach majątkowych wystarczy podać wartość przedmiotu sporu. W sprawach niemajątkowych ważna jest liczba posiedzeń. W mediacji pozasądowej można wpisać ustaloną cenę spotkania i liczbę stron dzielących koszt.",
          "Wynik kalkulatora nie zastępuje indywidualnego ustalenia kosztów, ale pomaga przygotować się do pierwszego kontaktu z mediatorem i szybciej zrozumieć podstawowe zasady rozliczenia."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacja sądowa w sprawie cywilnej jest zawsze płatna?",
        answer:
          "Co do zasady koszty mediacji w sprawach cywilnych obciążają strony, chyba że przepisy lub konkretna sytuacja procesowa prowadzą do innego rozliczenia."
      },
      {
        question: "Ile wynosi minimum w sprawie majątkowej?",
        answer:
          "W sprawach majątkowych do 200 000 zł wynagrodzenie mediatora wynosi 2% wartości sporu, ale nie mniej niż 300 zł."
      },
      {
        question: "Ile wynosi maksimum w sprawie majątkowej?",
        answer:
          "W sprawach majątkowych maksymalne wynagrodzenie mediatora wynosi 8000 zł za całość postępowania mediacyjnego."
      },
      {
        question: "Czy do kosztów mediacji dolicza się VAT?",
        answer:
          "Jeżeli mediator jest podatnikiem zobowiązanym do rozliczenia podatku VAT, wynagrodzenie określone w przepisach podwyższa się o kwotę tego podatku."
      },
      {
        question: "Czy kalkulator pokazuje ostateczny koszt?",
        answer:
          "Nie. Kalkulator pokazuje wynik orientacyjny. W konkretnej sprawie mogą wystąpić dodatkowe udokumentowane wydatki albo indywidualne ustalenia."
      }
    ],
    sources: [
      {
        title:
          "Rozporządzenie Ministra Sprawiedliwości z dnia 12 lutego 2026 r. — Dz.U. 2026 poz. 170",
        url: "https://eli.gov.pl/eli/DU/2026/170/ogl/pol"
      },
      {
        title:
          "Ministerstwo Sprawiedliwości — mediacje i koszty mediacji",
        url: "https://www.gov.pl/web/sprawiedliwosc/mediacje"
      },
      {
        title:
          "Ministerstwo Sprawiedliwości — mediacja pozasądowa",
        url: "https://www.gov.pl/web/sprawiedliwosc/mediacja-pozasadowa"
      }
    ],
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
    readingTime: "7 min",
    keywords: [
      "mediacje rodzinne Kraków",
      "mediator rodzinny Kraków",
      "mediacje rozwodowe Kraków",
      "kontakty z dzieckiem mediacja",
      "porozumienie rodzicielskie",
      "mediacja rodzinna",
      "alimenty mediacja",
      "mediator sądowy Kraków"
    ],
    heroLabel: "Mediacje rodzinne · Kraków · porozumienie",
    intro:
      "Mediacje rodzinne są przeznaczone dla osób, które chcą uporządkować trudną rozmowę dotyczącą spraw rodzinnych. Mogą dotyczyć rozwodu, separacji, kontaktów z dzieckiem, opieki, alimentów, komunikacji rodzicielskiej albo innych ustaleń ważnych dla rodziny. Ich celem nie jest narzucenie rozwiązania, lecz stworzenie warunków do spokojnej, bezpiecznej i poufnej rozmowy.",
    sections: [
      {
        heading: "Kiedy mediacja rodzinna może być potrzebna?",
        paragraphs: [
          "Mediacja rodzinna może być pomocna wtedy, gdy strony pozostają w konflikcie, ale chcą uniknąć dalszej eskalacji. Dotyczy to szczególnie sytuacji, w których mimo sporu strony nadal muszą podejmować wspólne decyzje dotyczące dzieci, opieki lub spraw organizacyjnych.",
          "Najczęstsze tematy mediacji rodzinnych to kontakty z dzieckiem, opieka, alimenty, komunikacja rodzicielska, plan wychowawczy, zasady odbioru dziecka, wakacje, święta i bieżące ustalenia po rozstaniu.",
          "Mediacja nie jest terapią rodzinną i nie zastępuje pomocy psychologicznej. Może jednak pomóc uporządkować rozmowę i skoncentrować się na konkretnych ustaleniach, które strony są w stanie realnie wykonać."
        ]
      },
      {
        heading: "Mediacja przy rozwodzie i separacji",
        paragraphs: [
          "Rozwód i separacja często łączą kilka poziomów konfliktu: emocjonalny, rodzicielski, organizacyjny i majątkowy. Mediacja może pomóc oddzielić te obszary i omówić je w sposób bardziej uporządkowany.",
          "W praktyce strony mogą rozmawiać o tym, jak będzie wyglądać opieka nad dziećmi, jak ustalić kontakty, jak komunikować się w sprawach szkoły, zdrowia i wyjazdów oraz jak ograniczyć sytuacje powodujące napięcie.",
          "Mediator nie podejmuje decyzji za strony i nie wskazuje, kto ma rację. Pomaga prowadzić rozmowę tak, aby strony mogły nazwać potrzeby, ryzyka i możliwe rozwiązania."
        ]
      },
      {
        heading: "Kontakty z dzieckiem i komunikacja rodzicielska",
        paragraphs: [
          "Jednym z najważniejszych tematów mediacji rodzinnej są kontakty z dzieckiem. Spór o kontakty często dotyczy nie tylko terminów, ale również sposobu przekazywania informacji, punktualności, odbioru dziecka, wakacji, świąt i nagłych zmian planu.",
          "Mediacja może pomóc ustalić zasady bardziej szczegółowe niż ogólne deklaracje. Im bardziej konkretne ustalenia, tym mniejsze ryzyko późniejszych nieporozumień.",
          "W sprawach rodzinnych szczególnie ważny jest język rozmowy. Mediator dba o to, aby rozmowa nie zamieniła się w ocenianie lub wzajemne oskarżenia, ale koncentrowała się na możliwych ustaleniach na przyszłość."
        ]
      },
      {
        heading: "Alimenty i sprawy organizacyjne",
        paragraphs: [
          "Mediacje rodzinne mogą dotyczyć również alimentów i kosztów utrzymania dziecka. Strony mogą rozmawiać o zakresie potrzeb, regularnych wydatkach, kosztach dodatkowych, sposobie płatności i zasadach dokumentowania wydatków.",
          "Nie każda rozmowa o alimentach musi ograniczać się do samej kwoty. Często równie ważne są terminy płatności, zasady udziału w kosztach nadzwyczajnych oraz sposób komunikacji przy zmianie sytuacji życiowej lub finansowej.",
          "W mediacji można także omawiać kwestie organizacyjne, które nie zawsze są centralnym tematem postępowania sądowego, ale w praktyce wpływają na codzienne funkcjonowanie rodziny."
        ]
      },
      {
        heading: "Mediacje rodzinne w Krakowie — lokalnie i online",
        paragraphs: [
          "Osoby szukające mediatora rodzinnego w Krakowie zwykle potrzebują nie tylko wiedzy proceduralnej, lecz także spokojnej przestrzeni do rozmowy. Lokalizacja Fundacji przy ul. Kieleckiej 2/53, w okolicy Ronda Mogilskiego, ułatwia kontakt osobom z Krakowa i Małopolski.",
          "W części spraw możliwy jest także kontakt online lub mediacja zdalna, jeżeli charakter sprawy, zgoda stron i warunki organizacyjne na to pozwalają. Rozwiązanie zdalne może być szczególnie przydatne, gdy strony mieszkają w różnych miejscach lub mają trudności z jednoczesnym stawiennictwem.",
          "Przed pierwszym kontaktem warto przygotować krótki opis sprawy, liczbę uczestników, informację o ewentualnym postępowaniu sądowym oraz najważniejsze tematy, które mają zostać omówione."
        ]
      },
      {
        heading: "Czy mediacja rodzinna zawsze prowadzi do ugody?",
        paragraphs: [
          "Nie. Mediacja rodzinna może zakończyć się ugodą, częściowym porozumieniem albo bez porozumienia. Nie należy traktować jej jako gwarancji konkretnego wyniku.",
          "Jej wartość polega na tym, że strony otrzymują strukturę rozmowy, możliwość uporządkowania tematów i przestrzeń do wypracowania rozwiązań. Czasem wystarczy częściowe porozumienie, które ogranicza zakres dalszego sporu.",
          "W sprawach rodzinnych nawet niewielkie ustalenia organizacyjne mogą mieć duże znaczenie praktyczne, zwłaszcza gdy pomagają zmniejszyć napięcie i poprawić przewidywalność codziennych kontaktów."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacje rodzinne są tylko dla małżonków?",
        answer:
          "Nie. Mediacje rodzinne mogą dotyczyć różnych relacji rodzinnych, w tym rodziców, byłych partnerów, spraw dotyczących dzieci i innych ustaleń rodzinnych."
      },
      {
        question: "Czy mediacja rodzinna zastępuje sąd?",
        answer:
          "Nie. Mediacja nie zastępuje sądu. Może jednak pomóc stronom wypracować ustalenia, które w odpowiednich sytuacjach mogą zostać wykorzystane w dalszym postępowaniu."
      },
      {
        question: "Czy mediator rodzinny decyduje, kto ma rację?",
        answer:
          "Nie. Mediator jest bezstronny i nie rozstrzyga sporu. Pomaga stronom prowadzić rozmowę i porządkować możliwe rozwiązania."
      },
      {
        question: "Czy mediacja rodzinna może odbyć się online?",
        answer:
          "Tak, w części spraw możliwy jest kontakt online albo mediacja zdalna, jeżeli strony wyrażą zgodę i warunki organizacyjne na to pozwalają."
      },
      {
        question: "Jak przygotować się do mediacji rodzinnej?",
        answer:
          "Warto przygotować krótki opis sprawy, listę tematów do omówienia, informacje o dzieciach, harmonogramach i najważniejszych spornych kwestiach."
      }
    ],
    sources: [
      {
        title:
          "Ministerstwo Sprawiedliwości — mediacje, informacje ogólne",
        url: "https://www.gov.pl/web/sprawiedliwosc/mediacje"
      },
      {
        title:
          "Ministerstwo Sprawiedliwości — postępowanie mediacyjne w sprawach cywilnych",
        url: "https://www.gov.pl/web/sprawiedliwosc/postepowanie-mediacyjne-w-sprawach-cywilnych"
      },
      {
        title:
          "Ministerstwo Sprawiedliwości — mediacja pozasądowa",
        url: "https://www.gov.pl/web/sprawiedliwosc/mediacja-pozasadowa"
      }
    ],
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
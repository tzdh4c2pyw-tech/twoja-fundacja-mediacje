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
      "Kto płaci za mediację karną, kiedy strony nie ponoszą kosztów i jak wygląda rozmowa między pokrzywdzonym a sprawcą.",
    description:
      "Mediacja karna jest dla stron bezpłatna. Wyjaśniamy, co to oznacza w praktyce, kto ponosi koszty i kiedy taka mediacja może pomóc.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Mediacje karne",
    readingTime: "15 min",
    keywords: [
      "mediacja karna bezpłatna",
      "czy mediacja karna jest bezpłatna",
      "koszty mediacji karnej",
      "mediacje karne Kraków",
      "mediator karny Kraków",
      "pokrzywdzony i sprawca mediacja",
      "postępowanie mediacyjne w sprawach karnych",
      "mediator sądowy Kraków"
    ],
    heroLabel: "Mediacje karne · koszty · Kraków",
    intro:
      "Mediacja karna jest jednym z najbardziej praktycznych, a jednocześnie najmniej rozumianych sposobów rozmowy między pokrzywdzonym a sprawcą. Dla wielu osób najważniejsza informacja brzmi prosto: mediacja karna jest bezpłatna dla stron. Nie oznacza to, że mediator działa bez wynagrodzenia. Oznacza to, że koszt postępowania mediacyjnego w sprawie karnej nie obciąża uczestników mediacji.",
    sections: [
      {
        heading: "Co oznacza, że mediacja karna jest bezpłatna?",
        paragraphs: [
          "W sprawach karnych koszty mediacji ponosi Skarb Państwa. Dla pokrzywdzonego oznacza to, że udział w rozmowie z mediatorem nie wiąże się z obowiązkiem zapłaty mediatorowi. Dla sprawcy oznacza to samo: samo uczestnictwo w mediacji karnej nie wymaga uiszczenia wynagrodzenia mediatora ani zwrotu jego wydatków.",
          "To ważne, ponieważ osoby uwikłane w sprawę karną często są już obciążone stresem, kosztami dojazdów, konsultacjami prawnymi, czasem także skutkami samego zdarzenia. Gdyby mediacja karna była dodatkowym kosztem po stronie uczestników, wiele osób mogłoby rezygnować z niej wyłącznie z powodów finansowych.",
          "Bezpłatność nie oznacza jednak, że mediacja jest mniej formalna albo mniej poważna. To nadal postępowanie prowadzone przez mediatora, który powinien zachować bezstronność, neutralność, poufność i dbałość o bezpieczeństwo rozmowy."
        ]
      },
      {
        heading: "Po co prowadzi się mediację w sprawie karnej?",
        paragraphs: [
          "Sprawa karna zwykle kojarzy się z sądem, prokuratorem, obrońcą, pokrzywdzonym, oskarżonym i rozstrzygnięciem o odpowiedzialności. Mediacja działa inaczej. Nie zastępuje sądu i nie odbiera organom procesowym ich kompetencji. Tworzy natomiast przestrzeń, w której strony mogą porozmawiać o skutkach czynu, naprawieniu szkody, przeprosinach, zadośćuczynieniu albo innych ustaleniach ważnych dla obu stron.",
          "Dla pokrzywdzonego mediacja może mieć wymiar praktyczny i emocjonalny. Może pozwolić zapytać o motywy działania, nazwać skutki zdarzenia, przedstawić oczekiwania albo uzyskać realną propozycję naprawienia szkody. Dla sprawcy może być możliwością wzięcia odpowiedzialności za zachowanie, zrozumienia skutków czynu i przedstawienia sposobu naprawienia wyrządzonej szkody.",
          "W dobrze prowadzonej mediacji karnej nie chodzi o wymuszone pojednanie. Nie chodzi też o sztuczne pogodzenie stron. Chodzi o sprawdzenie, czy w danej sprawie możliwe jest porozumienie, które będzie miało realne znaczenie dla uczestników i może zostać uwzględnione w dalszym toku postępowania."
        ]
      },
      {
        heading: "Mediacja karna a emocje stron",
        paragraphs: [
          "Sprawy karne często niosą duże napięcie. Pokrzywdzony może odczuwać lęk, złość, poczucie krzywdy, brak zaufania albo potrzebę usłyszenia wyjaśnień. Sprawca może odczuwać wstyd, opór, obawę przed konsekwencjami albo niepewność co do tego, jak rozmawiać z osobą pokrzywdzoną.",
          "Mediator nie ignoruje emocji, ale też nie prowadzi terapii. Jego zadaniem jest takie uporządkowanie rozmowy, aby emocje nie zniszczyły możliwości komunikacji. W praktyce oznacza to jasne zasady wypowiedzi, spokojne tempo, pilnowanie wzajemnego szacunku i reagowanie, gdy rozmowa zaczyna przeradzać się w atak.",
          "W niektórych sprawach uczestnicy potrzebują rozmowy bezpośredniej. W innych konieczne jest ostrożniejsze podejście, etapowe budowanie gotowości albo rozmowy pośrednie. Mediacja nie jest jednym sztywnym scenariuszem. Jej przebieg powinien odpowiadać realiom sprawy."
        ]
      },
      {
        heading: "Czy mediacja karna oznacza, że sprawca uniknie odpowiedzialności?",
        paragraphs: [
          "To jedno z częstych pytań pokrzywdzonych. Mediacja karna nie jest automatycznym sposobem uniknięcia odpowiedzialności. Mediator nie decyduje o winie, karze ani dalszym toku sprawy. Wynik mediacji może być natomiast jedną z okoliczności istotnych dla organu prowadzącego postępowanie.",
          "Jeżeli strony osiągną porozumienie, jego znaczenie zależy od rodzaju sprawy, etapu postępowania i decyzji właściwego organu. Dlatego mediator nie powinien obiecywać skutku procesowego. Może wyjaśnić ramy mediacji, ale nie powinien przedstawiać jej jako gwarancji określonego rozstrzygnięcia.",
          "Z perspektywy stron najważniejsze jest to, że mediacja pozwala poruszyć kwestie, których proces karny często nie rozwiązuje wprost: sposób naprawienia szkody, przeprosiny, uznanie konsekwencji czynu, ustalenia dotyczące dalszego kontaktu albo oczekiwania pokrzywdzonego."
        ]
      },
      {
        heading: "Jak wygląda pierwsze spotkanie z mediatorem?",
        paragraphs: [
          "Pierwszy kontakt z mediatorem ma charakter organizacyjny i wyjaśniający. Mediator powinien poinformować strony o zasadach mediacji, dobrowolności, poufności, swojej bezstronności oraz o tym, że nie rozstrzyga sporu. Strony powinny wiedzieć, jaki jest cel spotkania i czego mogą się spodziewać.",
          "W sprawach karnych szczególnie ważne jest zbudowanie minimum bezpieczeństwa komunikacyjnego. Nie każda osoba jest gotowa na rozmowę bezpośrednią od razu. Czasem potrzebne jest najpierw wysłuchanie każdej strony osobno, wyjaśnienie obaw i ustalenie, czy wspólne spotkanie ma sens.",
          "Warto przygotować krótką informację o sprawie, ale nie trzeba od razu przedstawiać całej historii życia ani wszystkich dokumentów. Wystarczy wskazać, na jakim etapie jest sprawa, kto uczestniczy w mediacji i jakie kwestie są najważniejsze do omówienia."
        ]
      },
      {
        heading: "Co może zawierać porozumienie w mediacji karnej?",
        paragraphs: [
          "Porozumienie w mediacji karnej może dotyczyć różnych kwestii, zależnie od charakteru sprawy. Często są to przeprosiny, naprawienie szkody, zwrot pieniędzy, wykonanie określonych działań, zadośćuczynienie albo uzgodnienie zasad dalszego kontaktu.",
          "Dobre porozumienie powinno być konkretne. Jeżeli dotyczy zapłaty, powinno wskazywać kwotę, termin i sposób płatności. Jeżeli dotyczy zachowania, powinno jasno określać, czego strony od siebie oczekują. Jeżeli dotyczy przeprosin, warto ustalić ich formę i termin.",
          "Mediator pomaga uporządkować ustalenia, ale nie narzuca ich treści. To strony decydują, czy propozycje są dla nich możliwe do przyjęcia. Ugoda nie powinna być wynikiem presji, lecz świadomej decyzji uczestników."
        ]
      },
      {
        heading: "Kiedy mediacja karna może nie być dobrym rozwiązaniem?",
        paragraphs: [
          "Mediacja nie jest odpowiednia w każdej sytuacji. Jeżeli jedna ze stron nie chce rozmawiać, czuje się zagrożona albo nie jest gotowa do udziału w procesie, mediacja może nie spełnić swojej funkcji. Dobrowolność jest warunkiem sensownej rozmowy.",
          "Mediacja może być trudna także wtedy, gdy strony oczekują od mediatora rozstrzygnięcia, osądzenia drugiej osoby albo wymuszenia określonych przeprosin. Mediator nie pełni takiej roli. Nie powinien zastępować sądu, prokuratora, obrońcy ani pełnomocnika.",
          "Czasem rozmowa staje się możliwa dopiero po pewnym czasie. Emocje muszą opaść, strony potrzebują informacji albo konsultacji. W takich przypadkach mediacja nie musi być wykluczona, ale wymaga właściwego momentu i spokojnego przygotowania."
        ]
      },
      {
        heading: "Mediacje karne w Krakowie — jak zgłosić sprawę?",
        paragraphs: [
          "Osoby zainteresowane mediacją karną w Krakowie mogą skontaktować się z Fundacją Mediacji Sądowej i Pozasądowej telefonicznie lub mailowo. W pierwszej wiadomości warto wskazać, czy sprawa została już skierowana do mediacji, kto jest uczestnikiem, na jakim etapie znajduje się postępowanie i jaki tryb kontaktu będzie najwygodniejszy.",
          "Nie trzeba pisać długiego uzasadnienia. Wystarczy rzeczowy opis. Mediator lub osoba organizująca mediację może następnie wskazać, jakie informacje są potrzebne do ustalenia terminu i formy spotkania.",
          "Dla osób z Krakowa i Małopolski możliwe jest spotkanie stacjonarne. W odpowiednich sprawach można również rozważyć kontakt zdalny, jeżeli jest zgodny z charakterem sprawy i zapewnia warunki spokojnej, poufnej rozmowy."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacja karna jest bezpłatna dla pokrzywdzonego?",
        answer:
          "Tak. W sprawach karnych koszty mediacji ponosi Skarb Państwa, dlatego pokrzywdzony nie płaci mediatorowi za udział w mediacji."
      },
      {
        question: "Czy sprawca płaci za mediację karną?",
        answer:
          "Nie. Koszty mediacji karnej nie obciążają stron postępowania."
      },
      {
        question: "Czy mediacja karna zawsze kończy się porozumieniem?",
        answer:
          "Nie. Mediacja może zakończyć się ugodą, częściowymi ustaleniami albo brakiem porozumienia."
      },
      {
        question: "Czy mediator decyduje o winie?",
        answer:
          "Nie. Mediator nie rozstrzyga o winie, nie wymierza kary i nie zastępuje organów procesowych."
      },
      {
        question: "Czy pokrzywdzony musi spotkać się ze sprawcą osobiście?",
        answer:
          "Forma mediacji zależy od sprawy, zgody stron i warunków organizacyjnych. W niektórych sytuacjach możliwe jest etapowe lub pośrednie prowadzenie rozmowy."
      },
      {
        question: "Czy mediacja karna jest poufna?",
        answer:
          "Mediacja opiera się na poufności, której zakres i zasady powinny zostać wyjaśnione stronom przed rozpoczęciem rozmowy."
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
    slug: "ile-kosztuje-mediacja-sadowa-w-sprawie-cywilnej",
    language: "pl",
    title: "Ile kosztuje mediacja sądowa w sprawie cywilnej?",
    metaTitle: "Ile kosztuje mediacja sądowa w sprawie cywilnej?",
    metaDescription:
      "Koszty mediacji sądowej w sprawach cywilnych: sprawy majątkowe, niemajątkowe, wydatki mediatora, VAT i praktyczne przykłady.",
    description:
      "Koszt mediacji sądowej zależy od rodzaju sprawy, wartości przedmiotu sporu, liczby posiedzeń oraz możliwych wydatków mediatora.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Koszty mediacji",
    readingTime: "15 min",
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
      "Koszt mediacji sądowej w sprawie cywilnej nie jest przypadkowy. Zależy przede wszystkim od tego, czy sprawa ma charakter majątkowy, jaka jest wartość przedmiotu sporu, ile odbędzie się posiedzeń i czy pojawią się dodatkowe wydatki mediatora. W praktyce oznacza to, że przed rozpoczęciem mediacji warto odróżnić mediację sądową od pozasądowej oraz sprawę majątkową od niemajątkowej.",
    sections: [
      {
        heading: "Dlaczego pytanie o koszt mediacji jest tak częste?",
        paragraphs: [
          "Osoby rozważające mediację zwykle chcą wiedzieć dwie rzeczy: czy mediacja ma sens oraz ile będzie kosztować. To naturalne, bo konflikt sam w sobie generuje koszty: czas, stres, korespondencję, konsultacje, dojazdy, opłaty sądowe i ryzyko dalszej eskalacji.",
          "Mediacja bywa postrzegana jako tańsza alternatywa dla procesu, ale nie należy jej przedstawiać w sposób uproszczony. W niektórych sprawach rzeczywiście może ograniczyć koszty. W innych jej wartość polega bardziej na szybkości, poufności i możliwości wypracowania rozwiązania dopasowanego do stron.",
          "Dlatego uczciwe wyjaśnienie kosztów jest bardzo ważne. Klient nie powinien dowiadywać się o zasadach rozliczenia dopiero po rozpoczęciu rozmowy. Przejrzysty cennik i kalkulator pomagają zbudować zaufanie jeszcze przed pierwszym kontaktem."
        ]
      },
      {
        heading: "Mediacja sądowa a pozasądowa — pierwsza różnica kosztowa",
        paragraphs: [
          "Najpierw trzeba ustalić, czy mówimy o mediacji sądowej czy pozasądowej. Mediacja sądowa jest związana ze sprawą, która znajduje się już w sądzie. W takim przypadku wynagrodzenie mediatora i zwrot wydatków w sprawach cywilnych są określone przez przepisy.",
          "Mediacja pozasądowa wygląda inaczej. Strony same zgłaszają się do mediatora lub ośrodka mediacyjnego, zanim sprawa trafi do sądu albo niezależnie od postępowania sądowego. W takim trybie koszt wynika z cennika ośrodka albo z uzgodnienia stron z mediatorem.",
          "Ta różnica jest praktyczna. Ta sama sprawa o zapłatę może być rozliczana inaczej, jeżeli jest prowadzona jako mediacja sądowa po skierowaniu przez sąd, a inaczej, jeżeli strony kontaktują się z mediatorem prywatnie przed wniesieniem pozwu."
        ]
      },
      {
        heading: "Sprawy majątkowe — gdy można określić wartość sporu",
        paragraphs: [
          "W sprawach o prawa majątkowe podstawą obliczenia wynagrodzenia mediatora jest wartość przedmiotu sporu. Chodzi o sytuacje, w których konflikt można wyrazić kwotą pieniężną. Przykładem może być spór o zapłatę, rozliczenie umowy, fakturę, odszkodowanie albo określone świadczenie majątkowe.",
          "Przy wartości przedmiotu sporu do 200 000 zł wynagrodzenie mediatora wynosi 2% wartości sporu, ale nie mniej niż 300 zł i nie więcej niż 4000 zł za całość postępowania mediacyjnego. Oznacza to, że przy bardzo niskiej wartości sporu działa minimalna stawka, a przy wyższej wartości działa górny limit.",
          "Przy wartości sporu powyżej 200 000 zł wynagrodzenie wynosi 4000 zł oraz 1% od nadwyżki ponad 200 000 zł. Jednocześnie obowiązuje maksymalny pułap wynagrodzenia za całość postępowania mediacyjnego. Dzięki temu strony mogą wstępnie oszacować koszt jeszcze przed rozpoczęciem mediacji."
        ]
      },
      {
        heading: "Sprawy niemajątkowe i sprawy trudne do wyceny",
        paragraphs: [
          "Nie każdy spór da się łatwo przeliczyć na pieniądze. W wielu sprawach rodzinnych, osobistych, organizacyjnych albo dotyczących sposobu wykonywania obowiązków najważniejsze nie jest roszczenie pieniężne, lecz ustalenie zasad działania na przyszłość.",
          "W sprawach o prawa niemajątkowe oraz w sprawach majątkowych, w których wartości przedmiotu sporu nie da się ustalić, wynagrodzenie mediatora jest liczone według liczby posiedzeń. Wynosi 300 zł za pierwsze posiedzenie i 200 zł za każde kolejne, przy określonym limicie za całość postępowania.",
          "Dla stron jest to rozwiązanie bardziej przewidywalne. Jeżeli sprawa wymaga jednego spotkania, koszt będzie inny niż przy kilku posiedzeniach. Dlatego już na początku warto ustalić, czy sprawa może wymagać więcej niż jednej rozmowy."
        ]
      },
      {
        heading: "Jakie wydatki mogą pojawić się dodatkowo?",
        paragraphs: [
          "Wynagrodzenie mediatora to nie zawsze jedyny element kosztów. W postępowaniu mediacyjnym mogą pojawić się także udokumentowane i niezbędne wydatki. Mogą dotyczyć między innymi przejazdu, korespondencji albo najmu pomieszczenia potrzebnego do przeprowadzenia spotkania.",
          "Nie każdy wydatek wystąpi w każdej sprawie. Jeżeli mediacja odbywa się w siedzibie mediatora albo zdalnie, część kosztów organizacyjnych może nie być potrzebna. Jeżeli strony mieszkają daleko od siebie, trzeba rozważyć, czy spotkanie online nie będzie rozsądniejsze.",
          "Przy szacowaniu kosztu warto więc nie ograniczać się do samej stawki wynagrodzenia. Trzeba zapytać także o możliwe wydatki dodatkowe, VAT oraz sposób podziału kosztu między strony."
        ]
      },
      {
        heading: "VAT i podział kosztów między strony",
        paragraphs: [
          "Jeżeli mediator jest podatnikiem VAT, wynagrodzenie może zostać podwyższone o kwotę podatku. Dla klientów oznacza to, że sama stawka z rozporządzenia nie zawsze jest końcową kwotą do zapłaty.",
          "W praktyce strony często pytają także, kto płaci za mediację. W sprawach cywilnych koszt mediacji co do zasady obciąża strony. Sposób podziału może zależeć od ustaleń, decyzji sądu lub wyniku sprawy. Dlatego przy pierwszym kontakcie warto ustalić, czy strony chcą dzielić koszt po połowie, czy sprawa wymaga innego rozwiązania.",
          "Dobrą praktyką jest przedstawienie klientom kosztu w sposób prosty: wynagrodzenie mediatora, możliwe wydatki, VAT oraz orientacyjny udział każdej strony. Taki układ jest czytelny i pozwala uniknąć nieporozumień."
        ]
      },
      {
        heading: "Przykład praktyczny: spór o zapłatę",
        paragraphs: [
          "Wyobraźmy sobie spór między przedsiębiorcą a kontrahentem o niezapłaconą fakturę. Jeżeli wartość sporu wynosi 50 000 zł i sprawa została skierowana do mediacji przez sąd, wynagrodzenie mediatora będzie liczone według zasad dla spraw majątkowych.",
          "Dla stron najważniejsze nie jest jednak samo obliczenie procentu. Ważniejsze może być pytanie, czy mediacja pozwoli ustalić harmonogram płatności, częściowe rozliczenie, kompensatę albo warunki dalszej współpracy. W takim przypadku mediacja może mieć wartość biznesową wykraczającą poza sam koszt postępowania.",
          "W sporach gospodarczych czas często ma większe znaczenie niż formalne zwycięstwo po kilku latach. Dlatego koszt mediacji warto porównywać nie tylko z opłatami sądowymi, ale także z czasem zarządu, energią organizacyjną i ryzykiem utraty relacji biznesowej."
        ]
      },
      {
        heading: "Przykład praktyczny: sprawa rodzinna",
        paragraphs: [
          "W sprawach rodzinnych koszt nie zawsze jest związany z wartością pieniężną. Jeżeli strony chcą ustalić kontakty z dzieckiem, sposób komunikacji, harmonogram opieki albo zasady wakacji, sprawa może mieć charakter niemajątkowy.",
          "W takiej sytuacji koszt będzie zależał przede wszystkim od liczby posiedzeń. Jedno spotkanie może wystarczyć do uporządkowania prostszej kwestii. Bardziej złożony konflikt rodzinny może wymagać kilku rozmów i stopniowego dochodzenia do porozumienia.",
          "Dla rodziców ważne jest, aby koszt nie był jedynym kryterium wyboru mediacji. Czasem większą wartość ma stabilne porozumienie, które ograniczy powtarzające się konflikty i poprawi przewidywalność codziennych ustaleń."
        ]
      },
      {
        heading: "Jak korzystać z kalkulatora kosztów mediacji?",
        paragraphs: [
          "Kalkulator kosztów mediacji powinien być traktowany jako narzędzie orientacyjne. Pomaga zrozumieć, od czego zależy koszt i jak zmienia się wynik przy różnych wartościach sporu lub liczbie posiedzeń.",
          "Najpierw należy wybrać rodzaj mediacji: sądowa cywilna, pozasądowa albo karna. Następnie trzeba wskazać, czy sprawa jest majątkowa, jaka jest wartość przedmiotu sporu i czy mogą pojawić się dodatkowe koszty organizacyjne.",
          "Wynik kalkulatora nie zastępuje indywidualnego ustalenia z mediatorem. Pozwala jednak lepiej przygotować się do pierwszego kontaktu i szybciej zadać właściwe pytania."
        ]
      },
      {
        heading: "Kiedy koszt mediacji jest dobrze wydanymi pieniędzmi?",
        paragraphs: [
          "Koszt mediacji ma sens wtedy, gdy daje stronie realną szansę na ograniczenie sporu, przyspieszenie rozmowy albo wypracowanie rozwiązania, którego sąd nie mógłby ułożyć tak elastycznie. Nie każda sprawa zakończy się ugodą, ale wiele sporów można przynajmniej uporządkować.",
          "Mediacja jest szczególnie wartościowa, gdy strony będą miały ze sobą kontakt w przyszłości: jako rodzice, sąsiedzi, wspólnicy, kontrahenci albo członkowie rodziny. W takich relacjach samo rozstrzygnięcie prawne nie zawsze kończy problem komunikacyjny.",
          "Dlatego pytanie „ile kosztuje mediacja?” warto rozszerzyć o drugie pytanie: „ile kosztuje dalszy konflikt?”. Czas, stres, niepewność i utrata relacji również mają swoją cenę."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacja sądowa w sprawie cywilnej jest płatna?",
        answer:
          "Tak. W sprawach cywilnych koszty mediacji co do zasady obciążają strony, z uwzględnieniem szczegółowych zasad rozliczenia."
      },
      {
        question: "Jak oblicza się koszt mediacji w sprawie majątkowej?",
        answer:
          "Podstawą jest wartość przedmiotu sporu. Dla określonych progów stosuje się stawkę procentową, minimum i maksimum wynagrodzenia mediatora."
      },
      {
        question: "Czy mediacja pozasądowa kosztuje tyle samo co sądowa?",
        answer:
          "Nie zawsze. W mediacji pozasądowej koszt wynika z cennika ośrodka lub uzgodnienia stron z mediatorem."
      },
      {
        question: "Czy do wynagrodzenia mediatora dolicza się VAT?",
        answer:
          "Jeżeli mediator jest podatnikiem VAT, wynagrodzenie może zostać powiększone o kwotę podatku."
      },
      {
        question: "Czy kalkulator kosztów pokazuje kwotę ostateczną?",
        answer:
          "Nie. Kalkulator pokazuje orientacyjny wynik, który warto potwierdzić przy kontakcie z mediatorem."
      },
      {
        question: "Czy mediacja karna jest płatna dla stron?",
        answer:
          "Nie. W sprawach karnych koszty mediacji ponosi Skarb Państwa."
      }
    ],
    sources: [
      sources.civilCosts2026,
      sources.civilMediationGov,
      sources.mediationGov,
      sources.outOfCourtGov
    ],
    referencesApa6: [
      literature.methodology,
      literature.civil,
      literature.courtOutOfCourt,
      literature.theory
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
      "Mediacje rodzinne w Krakowie: rozwód, separacja, kontakty z dzieckiem, alimenty, opieka i porozumienie rodzicielskie.",
    description:
      "Mediacje rodzinne pomagają uporządkować rozmowę o dzieciach, alimentach, kontaktach, opiece i sprawach organizacyjnych po rozstaniu.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Mediacje rodzinne",
    readingTime: "15 min",
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
      "Mediacje rodzinne są jedną z najbardziej potrzebnych, ale też najbardziej delikatnych form mediacji. Dotyczą spraw, w których obok faktów i dokumentów pojawiają się silne emocje, historia relacji, dobro dzieci, poczucie krzywdy i obawa przed przyszłością. Dobrze prowadzona mediacja rodzinna nie obiecuje prostych rozwiązań, ale pomaga uporządkować rozmowę tam, gdzie zwykła komunikacja przestała działać.",
    sections: [
      {
        heading: "Czym są mediacje rodzinne?",
        paragraphs: [
          "Mediacje rodzinne to rozmowy prowadzone przy udziale bezstronnego mediatora, których celem jest wypracowanie ustaleń dotyczących spraw rodzinnych. Mogą obejmować rozwód, separację, kontakty z dzieckiem, opiekę, alimenty, koszty utrzymania, wakacje, święta, komunikację rodziców albo sprawy majątkowe związane z rozstaniem.",
          "Nie są terapią i nie służą analizowaniu całej historii związku. Mogą oczywiście dotykać emocji, ale ich celem jest przede wszystkim znalezienie praktycznych ustaleń na przyszłość. Mediacja rodzinna nie pyta tylko: kto ma rację? Pyta raczej: jak strony mogą dalej funkcjonować mimo konfliktu?",
          "W sprawach rodzinnych to podejście ma szczególne znaczenie. Jeżeli strony mają wspólne dzieci, ich relacja nie kończy się wraz z rozstaniem. Zmienia się jej charakter. Mediacja może pomóc ułożyć zasady tej nowej relacji w sposób bardziej przewidywalny."
        ]
      },
      {
        heading: "Kiedy warto rozważyć mediację rodzinną?",
        paragraphs: [
          "Mediacja rodzinna ma sens wtedy, gdy strony nie potrafią już spokojnie rozmawiać, ale nadal muszą podejmować wspólne decyzje. Dotyczy to zwłaszcza rodziców, którzy po rozstaniu muszą ustalić kontakty z dzieckiem, harmonogram opieki, zasady odbioru, wakacje, święta, koszty dodatkowe i sposób komunikacji.",
          "Warto rozważyć mediację także wtedy, gdy konflikt jest jeszcze na wczesnym etapie. Im wcześniej strony uporządkują zasady, tym mniejsze ryzyko, że spór stanie się długotrwały i obciążający dla dzieci.",
          "Mediacja może być pomocna również po wydaniu orzeczenia sądu. Życie rodzinne zmienia się szybciej niż dokumenty. Dzieci rosną, zmieniają szkołę, pojawiają się nowe obowiązki, przeprowadzki, wyjazdy, nowe relacje i potrzeby. Wtedy strony mogą potrzebować aktualizacji wcześniejszych ustaleń."
        ]
      },
      {
        heading: "Mediacja przy rozwodzie i separacji",
        paragraphs: [
          "Rozwód i separacja często łączą kilka konfliktów w jednym: emocjonalny, rodzicielski, finansowy i organizacyjny. W sądzie te kwestie są ujmowane w określone ramy prawne. W mediacji można natomiast porozmawiać o nich bardziej praktycznie, krok po kroku.",
          "Strony mogą ustalić, jak będą wymieniać informacje o dziecku, kto odpowiada za szkołę, zdrowie, zajęcia dodatkowe, wyjazdy i nagłe sytuacje. Mogą także omówić alimenty, koszty dodatkowe, sposób płatności i zasady dokumentowania większych wydatków.",
          "Dla wielu osób największą zaletą mediacji rozwodowej jest to, że pozwala wyjść poza logikę zwycięstwa i porażki. W sprawach rodzinnych wygrana jednej strony często nie rozwiązuje problemu, jeżeli druga strona pozostaje w trwałym oporze. Porozumienie bywa trudniejsze, ale może być bardziej stabilne."
        ]
      },
      {
        heading: "Kontakty z dzieckiem — dlaczego konkret jest ważny?",
        paragraphs: [
          "W sprawach dotyczących kontaktów z dzieckiem ogólne ustalenia często nie wystarczają. Zdanie „rodzice będą współpracować” brzmi dobrze, ale nie rozwiązuje pytania, kto odbiera dziecko w piątek, o której godzinie, gdzie następuje przekazanie, co dzieje się w razie choroby i jak planowane są wakacje.",
          "Dobre porozumienie rodzicielskie powinno być konkretne. Powinno obejmować rytm tygodnia, weekendy, święta, ferie, wakacje, urodziny, dni wolne od szkoły, kontakt telefoniczny, zmianę planu i sposób komunikacji między rodzicami.",
          "Konkrety nie są oznaką braku zaufania. W konfliktach rodzinnych są często sposobem ochrony przed kolejnymi nieporozumieniami. Im mniej miejsca na dowolną interpretację, tym mniejsze ryzyko powracającego sporu."
        ]
      },
      {
        heading: "Alimenty i koszty utrzymania dziecka",
        paragraphs: [
          "Alimenty są jednym z najczęstszych tematów spornych. Strony różnią się w ocenie potrzeb dziecka, możliwości finansowych rodziców, kosztów dodatkowych i sposobu rozliczania wydatków. Mediacja może pomóc uporządkować te kwestie bez przerzucania się ogólnymi zarzutami.",
          "W rozmowie można rozdzielić koszty stałe od nadzwyczajnych. Stałe to na przykład mieszkanie, jedzenie, szkoła, opłaty, leki, zajęcia cykliczne. Nadzwyczajne mogą dotyczyć leczenia, wyjazdów, sprzętu, większych wydatków edukacyjnych lub nagłych potrzeb.",
          "Mediacja nie zastępuje oceny prawnej, ale może pomóc stronom zobaczyć realny budżet dziecka. Często dopiero wspólne zestawienie wydatków pokazuje, które koszty są bezsporne, a które wymagają rozmowy."
        ]
      },
      {
        heading: "Komunikacja między rodzicami",
        paragraphs: [
          "Wiele konfliktów rodzinnych nie wynika wyłącznie z treści sporu, ale ze sposobu komunikacji. Wiadomości pisane pod wpływem emocji, ironia, zarzuty, brak odpowiedzi albo odpowiadanie po kilku dniach potrafią zniszczyć nawet rozsądne ustalenia.",
          "W mediacji można ustalić nie tylko harmonogram kontaktów, ale także zasady komunikacji: w jakich sprawach rodzice piszą do siebie, jakim kanałem, w jakim czasie odpowiadają, które decyzje wymagają uzgodnienia, a które są bieżące.",
          "Takie ustalenia bywają bardzo praktyczne. Rodzice nie muszą lubić się po rozstaniu, ale jeżeli mają wspólne dziecko, potrzebują minimalnego systemu wymiany informacji. Mediacja może pomóc stworzyć taki system."
        ]
      },
      {
        heading: "Mediacja rodzinna a dziecko",
        paragraphs: [
          "W mediacji rodzinnej dziecko nie powinno być narzędziem konfliktu. Dorośli często koncentrują się na swoich racjach, ale skutki sporu najmocniej odczuwa dziecko, które potrzebuje przewidywalności, bezpieczeństwa i możliwie spokojnych relacji z rodzicami.",
          "Mediator nie zastępuje psychologa dziecięcego i nie diagnozuje dziecka. Może jednak pomagać rodzicom zadawać właściwe pytania: co dziecko musi wiedzieć, jak ograniczyć napięcie przy przekazywaniu, jak nie obciążać go konfliktem dorosłych, jak nie używać kontaktów jako kary albo nagrody.",
          "Dobre porozumienie rodzicielskie powinno być wykonalne nie tylko formalnie, ale także życiowo. Jeżeli plan jest zbyt skomplikowany, nierealny albo ignoruje rytm dziecka, szybko stanie się źródłem kolejnych sporów."
        ]
      },
      {
        heading: "Kiedy mediacja rodzinna może być trudna?",
        paragraphs: [
          "Mediacja rodzinna nie jest właściwa w każdej sytuacji i nie zawsze powinna być prowadzona w taki sam sposób. Jeżeli jedna ze stron obawia się drugiej, czuje silną presję albo nie ma przestrzeni do swobodnego wypowiadania się, mediator powinien zachować szczególną ostrożność.",
          "Trudnością może być także oczekiwanie, że mediator „przekona” drugą stronę albo powie, kto jest lepszym rodzicem. Mediator nie pełni takiej roli. Nie jest sędzią, psychologiem ani pełnomocnikiem jednej ze stron.",
          "Czasem mediacja wymaga kilku etapów. Najpierw trzeba ustalić zasady rozmowy, potem zebrać tematy, a dopiero później przejść do konkretnych propozycji. Zbyt szybkie naciskanie na ugodę może przynieść odwrotny skutek."
        ]
      },
      {
        heading: "Mediacje rodzinne w Krakowie i online",
        paragraphs: [
          "Fundacja Mediacji Sądowej i Pozasądowej prowadzi mediacje rodzinne w Krakowie, przy ul. Kieleckiej 2/53. Lokalizacja w centrum miasta jest wygodna dla osób z Krakowa i okolic, ale część spraw może być również omawiana zdalnie.",
          "Mediacja online może być dobrym rozwiązaniem, gdy strony mieszkają w różnych miejscach, jedna z osób przebywa za granicą albo szybkie spotkanie stacjonarne jest trudne organizacyjnie. Warunkiem jest zapewnienie poufności i spokojnych warunków rozmowy.",
          "Przy pierwszym kontakcie warto krótko opisać sprawę, wskazać liczbę uczestników, etap postępowania i główne tematy. W sprawach rodzinnych nie trzeba opisywać całego konfliktu. Wystarczy wskazać, co wymaga uporządkowania."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacje rodzinne są tylko dla małżonków?",
        answer:
          "Nie. Mogą dotyczyć rodziców, byłych partnerów, krewnych i innych osób pozostających w konflikcie rodzinnym."
      },
      {
        question: "Czy mediator rodzinny decyduje o kontaktach z dzieckiem?",
        answer:
          "Nie. Mediator nie wydaje decyzji. Pomaga stronom rozmawiać i porządkować możliwe ustalenia."
      },
      {
        question: "Czy mediacja rodzinna może dotyczyć alimentów?",
        answer:
          "Tak. Strony mogą rozmawiać o wysokości alimentów, kosztach dodatkowych, terminach płatności i sposobie rozliczeń."
      },
      {
        question: "Czy dziecko uczestniczy w mediacji?",
        answer:
          "To zależy od charakteru sprawy, wieku dziecka i decyzji co do sposobu prowadzenia mediacji. W wielu przypadkach rozmowa odbywa się między dorosłymi."
      },
      {
        question: "Czy mediacja rodzinna może odbyć się online?",
        answer:
          "Tak, jeżeli strony wyrażają zgodę i warunki organizacyjne pozwalają zapewnić spokojną oraz poufną rozmowę."
      },
      {
        question: "Co przygotować przed mediacją rodzinną?",
        answer:
          "Warto przygotować listę tematów, podstawowe daty, harmonogramy, informacje o kosztach i najważniejsze potrzeby dziecka."
      }
    ],
    sources: [sources.mediationGov, sources.civilMediationGov],
    referencesApa6: [
      literature.methodology,
      literature.moore,
      literature.theory,
      literature.nvc
    ],
    internalLinks: [
      {
        label: "Mediacje rodzinne",
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
    "Arkuszewska, A. M., Kościółek, A., Łukasiewicz, J. M., Plis, J., & Serafin, T. Zarys metodyki pracy mediatora w sprawach cywilnych. Wolters Kluwer.",
  mediatorLaw:
    "Myślińska, M. Mediator w polskim porządku prawnym. C. H. Beck.",
  moore:
    "Moore, C. W. Mediacje. Praktyczne strategie rozwiązywania konfliktów. Wolters Kluwer.",
  theory:
    "Gmurzyńska, E., & Morek, R. Mediacje. Teoria i praktyka. Wolters Kluwer.",
  courtOutOfCourt:
    "Kalisz, A., & Zienkiewicz, A. Mediacja sądowa i pozasądowa. Zarys wykładu. Wolters Kluwer.",
  civil:
    "Morek, R. Mediacja w sprawach cywilnych. Wolters Kluwer.",
  negotiation:
    "Fisher, R., Ury, W., & Patton, B. Dochodząc do tak. Negocjowanie bez poddawania się. Polskie Wydawnictwo Ekonomiczne.",
  nvc:
    "Larsson, L. Porozumienie bez przemocy w mediacjach. Jak być trzecią stroną w konflikcie. Czarna Owca.",
  business:
    "Bobrowicz, M. Mediacje gospodarcze — jak mediować i przekonywać? C. H. Beck."
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
      "Kto płaci za mediację karną, kiedy strony nie ponoszą kosztów i jak wygląda rozmowa między pokrzywdzonym a sprawcą.",
    description:
      "Mediacja karna jest dla stron bezpłatna. Wyjaśniamy, co to oznacza w praktyce, kto ponosi koszty i kiedy taka mediacja może pomóc.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Mediacje karne",
    readingTime: "15 min",
    keywords: [
      "mediacja karna bezpłatna",
      "czy mediacja karna jest bezpłatna",
      "koszty mediacji karnej",
      "mediacje karne Kraków",
      "mediator karny Kraków",
      "pokrzywdzony i sprawca mediacja",
      "postępowanie mediacyjne w sprawach karnych",
      "mediator sądowy Kraków"
    ],
    heroLabel: "Mediacje karne · koszty · Kraków",
    intro:
      "Mediacja karna jest jednym z najbardziej praktycznych, a jednocześnie najmniej rozumianych sposobów rozmowy między pokrzywdzonym a sprawcą. Dla wielu osób najważniejsza informacja brzmi prosto: mediacja karna jest bezpłatna dla stron. Nie oznacza to, że mediator działa bez wynagrodzenia. Oznacza to, że koszt postępowania mediacyjnego w sprawie karnej nie obciąża uczestników mediacji.",
    sections: [
      {
        heading: "Co oznacza, że mediacja karna jest bezpłatna?",
        paragraphs: [
          "W sprawach karnych koszty mediacji ponosi Skarb Państwa. Dla pokrzywdzonego oznacza to, że udział w rozmowie z mediatorem nie wiąże się z obowiązkiem zapłaty mediatorowi. Dla sprawcy oznacza to samo: samo uczestnictwo w mediacji karnej nie wymaga uiszczenia wynagrodzenia mediatora ani zwrotu jego wydatków.",
          "To ważne, ponieważ osoby uwikłane w sprawę karną często są już obciążone stresem, kosztami dojazdów, konsultacjami prawnymi, czasem także skutkami samego zdarzenia. Gdyby mediacja karna była dodatkowym kosztem po stronie uczestników, wiele osób mogłoby rezygnować z niej wyłącznie z powodów finansowych.",
          "Bezpłatność nie oznacza jednak, że mediacja jest mniej formalna albo mniej poważna. To nadal postępowanie prowadzone przez mediatora, który powinien zachować bezstronność, neutralność, poufność i dbałość o bezpieczeństwo rozmowy."
        ]
      },
      {
        heading: "Po co prowadzi się mediację w sprawie karnej?",
        paragraphs: [
          "Sprawa karna zwykle kojarzy się z sądem, prokuratorem, obrońcą, pokrzywdzonym, oskarżonym i rozstrzygnięciem o odpowiedzialności. Mediacja działa inaczej. Nie zastępuje sądu i nie odbiera organom procesowym ich kompetencji. Tworzy natomiast przestrzeń, w której strony mogą porozmawiać o skutkach czynu, naprawieniu szkody, przeprosinach, zadośćuczynieniu albo innych ustaleniach ważnych dla obu stron.",
          "Dla pokrzywdzonego mediacja może mieć wymiar praktyczny i emocjonalny. Może pozwolić zapytać o motywy działania, nazwać skutki zdarzenia, przedstawić oczekiwania albo uzyskać realną propozycję naprawienia szkody. Dla sprawcy może być możliwością wzięcia odpowiedzialności za zachowanie, zrozumienia skutków czynu i przedstawienia sposobu naprawienia wyrządzonej szkody.",
          "W dobrze prowadzonej mediacji karnej nie chodzi o wymuszone pojednanie. Nie chodzi też o sztuczne pogodzenie stron. Chodzi o sprawdzenie, czy w danej sprawie możliwe jest porozumienie, które będzie miało realne znaczenie dla uczestników i może zostać uwzględnione w dalszym toku postępowania."
        ]
      },
      {
        heading: "Mediacja karna a emocje stron",
        paragraphs: [
          "Sprawy karne często niosą duże napięcie. Pokrzywdzony może odczuwać lęk, złość, poczucie krzywdy, brak zaufania albo potrzebę usłyszenia wyjaśnień. Sprawca może odczuwać wstyd, opór, obawę przed konsekwencjami albo niepewność co do tego, jak rozmawiać z osobą pokrzywdzoną.",
          "Mediator nie ignoruje emocji, ale też nie prowadzi terapii. Jego zadaniem jest takie uporządkowanie rozmowy, aby emocje nie zniszczyły możliwości komunikacji. W praktyce oznacza to jasne zasady wypowiedzi, spokojne tempo, pilnowanie wzajemnego szacunku i reagowanie, gdy rozmowa zaczyna przeradzać się w atak.",
          "W niektórych sprawach uczestnicy potrzebują rozmowy bezpośredniej. W innych konieczne jest ostrożniejsze podejście, etapowe budowanie gotowości albo rozmowy pośrednie. Mediacja nie jest jednym sztywnym scenariuszem. Jej przebieg powinien odpowiadać realiom sprawy."
        ]
      },
      {
        heading: "Czy mediacja karna oznacza, że sprawca uniknie odpowiedzialności?",
        paragraphs: [
          "To jedno z częstych pytań pokrzywdzonych. Mediacja karna nie jest automatycznym sposobem uniknięcia odpowiedzialności. Mediator nie decyduje o winie, karze ani dalszym toku sprawy. Wynik mediacji może być natomiast jedną z okoliczności istotnych dla organu prowadzącego postępowanie.",
          "Jeżeli strony osiągną porozumienie, jego znaczenie zależy od rodzaju sprawy, etapu postępowania i decyzji właściwego organu. Dlatego mediator nie powinien obiecywać skutku procesowego. Może wyjaśnić ramy mediacji, ale nie powinien przedstawiać jej jako gwarancji określonego rozstrzygnięcia.",
          "Z perspektywy stron najważniejsze jest to, że mediacja pozwala poruszyć kwestie, których proces karny często nie rozwiązuje wprost: sposób naprawienia szkody, przeprosiny, uznanie konsekwencji czynu, ustalenia dotyczące dalszego kontaktu albo oczekiwania pokrzywdzonego."
        ]
      },
      {
        heading: "Jak wygląda pierwsze spotkanie z mediatorem?",
        paragraphs: [
          "Pierwszy kontakt z mediatorem ma charakter organizacyjny i wyjaśniający. Mediator powinien poinformować strony o zasadach mediacji, dobrowolności, poufności, swojej bezstronności oraz o tym, że nie rozstrzyga sporu. Strony powinny wiedzieć, jaki jest cel spotkania i czego mogą się spodziewać.",
          "W sprawach karnych szczególnie ważne jest zbudowanie minimum bezpieczeństwa komunikacyjnego. Nie każda osoba jest gotowa na rozmowę bezpośrednią od razu. Czasem potrzebne jest najpierw wysłuchanie każdej strony osobno, wyjaśnienie obaw i ustalenie, czy wspólne spotkanie ma sens.",
          "Warto przygotować krótką informację o sprawie, ale nie trzeba od razu przedstawiać całej historii życia ani wszystkich dokumentów. Wystarczy wskazać, na jakim etapie jest sprawa, kto uczestniczy w mediacji i jakie kwestie są najważniejsze do omówienia."
        ]
      },
      {
        heading: "Co może zawierać porozumienie w mediacji karnej?",
        paragraphs: [
          "Porozumienie w mediacji karnej może dotyczyć różnych kwestii, zależnie od charakteru sprawy. Często są to przeprosiny, naprawienie szkody, zwrot pieniędzy, wykonanie określonych działań, zadośćuczynienie albo uzgodnienie zasad dalszego kontaktu.",
          "Dobre porozumienie powinno być konkretne. Jeżeli dotyczy zapłaty, powinno wskazywać kwotę, termin i sposób płatności. Jeżeli dotyczy zachowania, powinno jasno określać, czego strony od siebie oczekują. Jeżeli dotyczy przeprosin, warto ustalić ich formę i termin.",
          "Mediator pomaga uporządkować ustalenia, ale nie narzuca ich treści. To strony decydują, czy propozycje są dla nich możliwe do przyjęcia. Ugoda nie powinna być wynikiem presji, lecz świadomej decyzji uczestników."
        ]
      },
      {
        heading: "Kiedy mediacja karna może nie być dobrym rozwiązaniem?",
        paragraphs: [
          "Mediacja nie jest odpowiednia w każdej sytuacji. Jeżeli jedna ze stron nie chce rozmawiać, czuje się zagrożona albo nie jest gotowa do udziału w procesie, mediacja może nie spełnić swojej funkcji. Dobrowolność jest warunkiem sensownej rozmowy.",
          "Mediacja może być trudna także wtedy, gdy strony oczekują od mediatora rozstrzygnięcia, osądzenia drugiej osoby albo wymuszenia określonych przeprosin. Mediator nie pełni takiej roli. Nie powinien zastępować sądu, prokuratora, obrońcy ani pełnomocnika.",
          "Czasem rozmowa staje się możliwa dopiero po pewnym czasie. Emocje muszą opaść, strony potrzebują informacji albo konsultacji. W takich przypadkach mediacja nie musi być wykluczona, ale wymaga właściwego momentu i spokojnego przygotowania."
        ]
      },
      {
        heading: "Mediacje karne w Krakowie — jak zgłosić sprawę?",
        paragraphs: [
          "Osoby zainteresowane mediacją karną w Krakowie mogą skontaktować się z Fundacją Mediacji Sądowej i Pozasądowej telefonicznie lub mailowo. W pierwszej wiadomości warto wskazać, czy sprawa została już skierowana do mediacji, kto jest uczestnikiem, na jakim etapie znajduje się postępowanie i jaki tryb kontaktu będzie najwygodniejszy.",
          "Nie trzeba pisać długiego uzasadnienia. Wystarczy rzeczowy opis. Mediator lub osoba organizująca mediację może następnie wskazać, jakie informacje są potrzebne do ustalenia terminu i formy spotkania.",
          "Dla osób z Krakowa i Małopolski możliwe jest spotkanie stacjonarne. W odpowiednich sprawach można również rozważyć kontakt zdalny, jeżeli jest zgodny z charakterem sprawy i zapewnia warunki spokojnej, poufnej rozmowy."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacja karna jest bezpłatna dla pokrzywdzonego?",
        answer:
          "Tak. W sprawach karnych koszty mediacji ponosi Skarb Państwa, dlatego pokrzywdzony nie płaci mediatorowi za udział w mediacji."
      },
      {
        question: "Czy sprawca płaci za mediację karną?",
        answer:
          "Nie. Koszty mediacji karnej nie obciążają stron postępowania."
      },
      {
        question: "Czy mediacja karna zawsze kończy się porozumieniem?",
        answer:
          "Nie. Mediacja może zakończyć się ugodą, częściowymi ustaleniami albo brakiem porozumienia."
      },
      {
        question: "Czy mediator decyduje o winie?",
        answer:
          "Nie. Mediator nie rozstrzyga o winie, nie wymierza kary i nie zastępuje organów procesowych."
      },
      {
        question: "Czy pokrzywdzony musi spotkać się ze sprawcą osobiście?",
        answer:
          "Forma mediacji zależy od sprawy, zgody stron i warunków organizacyjnych. W niektórych sytuacjach możliwe jest etapowe lub pośrednie prowadzenie rozmowy."
      },
      {
        question: "Czy mediacja karna jest poufna?",
        answer:
          "Mediacja opiera się na poufności, której zakres i zasady powinny zostać wyjaśnione stronom przed rozpoczęciem rozmowy."
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
      "Koszty mediacji sądowej w sprawach cywilnych: sprawy majątkowe, niemajątkowe, wydatki mediatora, VAT i praktyczne przykłady.",
    description:
      "Koszt mediacji sądowej zależy od rodzaju sprawy, wartości przedmiotu sporu, liczby posiedzeń oraz możliwych wydatków mediatora.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Koszty mediacji",
    readingTime: "15 min",
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
      "Koszt mediacji sądowej w sprawie cywilnej nie jest przypadkowy. Zależy przede wszystkim od tego, czy sprawa ma charakter majątkowy, jaka jest wartość przedmiotu sporu, ile odbędzie się posiedzeń i czy pojawią się dodatkowe wydatki mediatora. W praktyce oznacza to, że przed rozpoczęciem mediacji warto odróżnić mediację sądową od pozasądowej oraz sprawę majątkową od niemajątkowej.",
    sections: [
      {
        heading: "Dlaczego pytanie o koszt mediacji jest tak częste?",
        paragraphs: [
          "Osoby rozważające mediację zwykle chcą wiedzieć dwie rzeczy: czy mediacja ma sens oraz ile będzie kosztować. To naturalne, bo konflikt sam w sobie generuje koszty: czas, stres, korespondencję, konsultacje, dojazdy, opłaty sądowe i ryzyko dalszej eskalacji.",
          "Mediacja bywa postrzegana jako tańsza alternatywa dla procesu, ale nie należy jej przedstawiać w sposób uproszczony. W niektórych sprawach rzeczywiście może ograniczyć koszty. W innych jej wartość polega bardziej na szybkości, poufności i możliwości wypracowania rozwiązania dopasowanego do stron.",
          "Dlatego uczciwe wyjaśnienie kosztów jest bardzo ważne. Klient nie powinien dowiadywać się o zasadach rozliczenia dopiero po rozpoczęciu rozmowy. Przejrzysty cennik i kalkulator pomagają zbudować zaufanie jeszcze przed pierwszym kontaktem."
        ]
      },
      {
        heading: "Mediacja sądowa a pozasądowa — pierwsza różnica kosztowa",
        paragraphs: [
          "Najpierw trzeba ustalić, czy mówimy o mediacji sądowej czy pozasądowej. Mediacja sądowa jest związana ze sprawą, która znajduje się już w sądzie. W takim przypadku wynagrodzenie mediatora i zwrot wydatków w sprawach cywilnych są określone przez przepisy.",
          "Mediacja pozasądowa wygląda inaczej. Strony same zgłaszają się do mediatora lub ośrodka mediacyjnego, zanim sprawa trafi do sądu albo niezależnie od postępowania sądowego. W takim trybie koszt wynika z cennika ośrodka albo z uzgodnienia stron z mediatorem.",
          "Ta różnica jest praktyczna. Ta sama sprawa o zapłatę może być rozliczana inaczej, jeżeli jest prowadzona jako mediacja sądowa po skierowaniu przez sąd, a inaczej, jeżeli strony kontaktują się z mediatorem prywatnie przed wniesieniem pozwu."
        ]
      },
      {
        heading: "Sprawy majątkowe — gdy można określić wartość sporu",
        paragraphs: [
          "W sprawach o prawa majątkowe podstawą obliczenia wynagrodzenia mediatora jest wartość przedmiotu sporu. Chodzi o sytuacje, w których konflikt można wyrazić kwotą pieniężną. Przykładem może być spór o zapłatę, rozliczenie umowy, fakturę, odszkodowanie albo określone świadczenie majątkowe.",
          "Przy wartości przedmiotu sporu do 200 000 zł wynagrodzenie mediatora wynosi 2% wartości sporu, ale nie mniej niż 300 zł i nie więcej niż 4000 zł za całość postępowania mediacyjnego. Oznacza to, że przy bardzo niskiej wartości sporu działa minimalna stawka, a przy wyższej wartości działa górny limit.",
          "Przy wartości sporu powyżej 200 000 zł wynagrodzenie wynosi 4000 zł oraz 1% od nadwyżki ponad 200 000 zł. Jednocześnie obowiązuje maksymalny pułap wynagrodzenia za całość postępowania mediacyjnego. Dzięki temu strony mogą wstępnie oszacować koszt jeszcze przed rozpoczęciem mediacji."
        ]
      },
      {
        heading: "Sprawy niemajątkowe i sprawy trudne do wyceny",
        paragraphs: [
          "Nie każdy spór da się łatwo przeliczyć na pieniądze. W wielu sprawach rodzinnych, osobistych, organizacyjnych albo dotyczących sposobu wykonywania obowiązków najważniejsze nie jest roszczenie pieniężne, lecz ustalenie zasad działania na przyszłość.",
          "W sprawach o prawa niemajątkowe oraz w sprawach majątkowych, w których wartości przedmiotu sporu nie da się ustalić, wynagrodzenie mediatora jest liczone według liczby posiedzeń. Wynosi 300 zł za pierwsze posiedzenie i 200 zł za każde kolejne, przy określonym limicie za całość postępowania.",
          "Dla stron jest to rozwiązanie bardziej przewidywalne. Jeżeli sprawa wymaga jednego spotkania, koszt będzie inny niż przy kilku posiedzeniach. Dlatego już na początku warto ustalić, czy sprawa może wymagać więcej niż jednej rozmowy."
        ]
      },
      {
        heading: "Jakie wydatki mogą pojawić się dodatkowo?",
        paragraphs: [
          "Wynagrodzenie mediatora to nie zawsze jedyny element kosztów. W postępowaniu mediacyjnym mogą pojawić się także udokumentowane i niezbędne wydatki. Mogą dotyczyć między innymi przejazdu, korespondencji albo najmu pomieszczenia potrzebnego do przeprowadzenia spotkania.",
          "Nie każdy wydatek wystąpi w każdej sprawie. Jeżeli mediacja odbywa się w siedzibie mediatora albo zdalnie, część kosztów organizacyjnych może nie być potrzebna. Jeżeli strony mieszkają daleko od siebie, trzeba rozważyć, czy spotkanie online nie będzie rozsądniejsze.",
          "Przy szacowaniu kosztu warto więc nie ograniczać się do samej stawki wynagrodzenia. Trzeba zapytać także o możliwe wydatki dodatkowe, VAT oraz sposób podziału kosztu między strony."
        ]
      },
      {
        heading: "VAT i podział kosztów między strony",
        paragraphs: [
          "Jeżeli mediator jest podatnikiem VAT, wynagrodzenie może zostać podwyższone o kwotę podatku. Dla klientów oznacza to, że sama stawka z rozporządzenia nie zawsze jest końcową kwotą do zapłaty.",
          "W praktyce strony często pytają także, kto płaci za mediację. W sprawach cywilnych koszt mediacji co do zasady obciąża strony. Sposób podziału może zależeć od ustaleń, decyzji sądu lub wyniku sprawy. Dlatego przy pierwszym kontakcie warto ustalić, czy strony chcą dzielić koszt po połowie, czy sprawa wymaga innego rozwiązania.",
          "Dobrą praktyką jest przedstawienie klientom kosztu w sposób prosty: wynagrodzenie mediatora, możliwe wydatki, VAT oraz orientacyjny udział każdej strony. Taki układ jest czytelny i pozwala uniknąć nieporozumień."
        ]
      },
      {
        heading: "Przykład praktyczny: spór o zapłatę",
        paragraphs: [
          "Wyobraźmy sobie spór między przedsiębiorcą a kontrahentem o niezapłaconą fakturę. Jeżeli wartość sporu wynosi 50 000 zł i sprawa została skierowana do mediacji przez sąd, wynagrodzenie mediatora będzie liczone według zasad dla spraw majątkowych.",
          "Dla stron najważniejsze nie jest jednak samo obliczenie procentu. Ważniejsze może być pytanie, czy mediacja pozwoli ustalić harmonogram płatności, częściowe rozliczenie, kompensatę albo warunki dalszej współpracy. W takim przypadku mediacja może mieć wartość biznesową wykraczającą poza sam koszt postępowania.",
          "W sporach gospodarczych czas często ma większe znaczenie niż formalne zwycięstwo po kilku latach. Dlatego koszt mediacji warto porównywać nie tylko z opłatami sądowymi, ale także z czasem zarządu, energią organizacyjną i ryzykiem utraty relacji biznesowej."
        ]
      },
      {
        heading: "Przykład praktyczny: sprawa rodzinna",
        paragraphs: [
          "W sprawach rodzinnych koszt nie zawsze jest związany z wartością pieniężną. Jeżeli strony chcą ustalić kontakty z dzieckiem, sposób komunikacji, harmonogram opieki albo zasady wakacji, sprawa może mieć charakter niemajątkowy.",
          "W takiej sytuacji koszt będzie zależał przede wszystkim od liczby posiedzeń. Jedno spotkanie może wystarczyć do uporządkowania prostszej kwestii. Bardziej złożony konflikt rodzinny może wymagać kilku rozmów i stopniowego dochodzenia do porozumienia.",
          "Dla rodziców ważne jest, aby koszt nie był jedynym kryterium wyboru mediacji. Czasem większą wartość ma stabilne porozumienie, które ograniczy powtarzające się konflikty i poprawi przewidywalność codziennych ustaleń."
        ]
      },
      {
        heading: "Jak korzystać z kalkulatora kosztów mediacji?",
        paragraphs: [
          "Kalkulator kosztów mediacji powinien być traktowany jako narzędzie orientacyjne. Pomaga zrozumieć, od czego zależy koszt i jak zmienia się wynik przy różnych wartościach sporu lub liczbie posiedzeń.",
          "Najpierw należy wybrać rodzaj mediacji: sądowa cywilna, pozasądowa albo karna. Następnie trzeba wskazać, czy sprawa jest majątkowa, jaka jest wartość przedmiotu sporu i czy mogą pojawić się dodatkowe koszty organizacyjne.",
          "Wynik kalkulatora nie zastępuje indywidualnego ustalenia z mediatorem. Pozwala jednak lepiej przygotować się do pierwszego kontaktu i szybciej zadać właściwe pytania."
        ]
      },
      {
        heading: "Kiedy koszt mediacji jest dobrze wydanymi pieniędzmi?",
        paragraphs: [
          "Koszt mediacji ma sens wtedy, gdy daje stronie realną szansę na ograniczenie sporu, przyspieszenie rozmowy albo wypracowanie rozwiązania, którego sąd nie mógłby ułożyć tak elastycznie. Nie każda sprawa zakończy się ugodą, ale wiele sporów można przynajmniej uporządkować.",
          "Mediacja jest szczególnie wartościowa, gdy strony będą miały ze sobą kontakt w przyszłości: jako rodzice, sąsiedzi, wspólnicy, kontrahenci albo członkowie rodziny. W takich relacjach samo rozstrzygnięcie prawne nie zawsze kończy problem komunikacyjny.",
          "Dlatego pytanie „ile kosztuje mediacja?” warto rozszerzyć o drugie pytanie: „ile kosztuje dalszy konflikt?”. Czas, stres, niepewność i utrata relacji również mają swoją cenę."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacja sądowa w sprawie cywilnej jest płatna?",
        answer:
          "Tak. W sprawach cywilnych koszty mediacji co do zasady obciążają strony, z uwzględnieniem szczegółowych zasad rozliczenia."
      },
      {
        question: "Jak oblicza się koszt mediacji w sprawie majątkowej?",
        answer:
          "Podstawą jest wartość przedmiotu sporu. Dla określonych progów stosuje się stawkę procentową, minimum i maksimum wynagrodzenia mediatora."
      },
      {
        question: "Czy mediacja pozasądowa kosztuje tyle samo co sądowa?",
        answer:
          "Nie zawsze. W mediacji pozasądowej koszt wynika z cennika ośrodka lub uzgodnienia stron z mediatorem."
      },
      {
        question: "Czy do wynagrodzenia mediatora dolicza się VAT?",
        answer:
          "Jeżeli mediator jest podatnikiem VAT, wynagrodzenie może zostać powiększone o kwotę podatku."
      },
      {
        question: "Czy kalkulator kosztów pokazuje kwotę ostateczną?",
        answer:
          "Nie. Kalkulator pokazuje orientacyjny wynik, który warto potwierdzić przy kontakcie z mediatorem."
      },
      {
        question: "Czy mediacja karna jest płatna dla stron?",
        answer:
          "Nie. W sprawach karnych koszty mediacji ponosi Skarb Państwa."
      }
    ],
    sources: [
      sources.civilCosts2026,
      sources.civilMediationGov,
      sources.mediationGov,
      sources.outOfCourtGov
    ],
    referencesApa6: [
      literature.methodology,
      literature.civil,
      literature.courtOutOfCourt,
      literature.theory
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
      "Mediacje rodzinne w Krakowie: rozwód, separacja, kontakty z dzieckiem, alimenty, opieka i porozumienie rodzicielskie.",
    description:
      "Mediacje rodzinne pomagają uporządkować rozmowę o dzieciach, alimentach, kontaktach, opiece i sprawach organizacyjnych po rozstaniu.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Mediacje rodzinne",
    readingTime: "15 min",
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
      "Mediacje rodzinne są jedną z najbardziej potrzebnych, ale też najbardziej delikatnych form mediacji. Dotyczą spraw, w których obok faktów i dokumentów pojawiają się silne emocje, historia relacji, dobro dzieci, poczucie krzywdy i obawa przed przyszłością. Dobrze prowadzona mediacja rodzinna nie obiecuje prostych rozwiązań, ale pomaga uporządkować rozmowę tam, gdzie zwykła komunikacja przestała działać.",
    sections: [
      {
        heading: "Czym są mediacje rodzinne?",
        paragraphs: [
          "Mediacje rodzinne to rozmowy prowadzone przy udziale bezstronnego mediatora, których celem jest wypracowanie ustaleń dotyczących spraw rodzinnych. Mogą obejmować rozwód, separację, kontakty z dzieckiem, opiekę, alimenty, koszty utrzymania, wakacje, święta, komunikację rodziców albo sprawy majątkowe związane z rozstaniem.",
          "Nie są terapią i nie służą analizowaniu całej historii związku. Mogą oczywiście dotykać emocji, ale ich celem jest przede wszystkim znalezienie praktycznych ustaleń na przyszłość. Mediacja rodzinna nie pyta tylko: kto ma rację? Pyta raczej: jak strony mogą dalej funkcjonować mimo konfliktu?",
          "W sprawach rodzinnych to podejście ma szczególne znaczenie. Jeżeli strony mają wspólne dzieci, ich relacja nie kończy się wraz z rozstaniem. Zmienia się jej charakter. Mediacja może pomóc ułożyć zasady tej nowej relacji w sposób bardziej przewidywalny."
        ]
      },
      {
        heading: "Kiedy warto rozważyć mediację rodzinną?",
        paragraphs: [
          "Mediacja rodzinna ma sens wtedy, gdy strony nie potrafią już spokojnie rozmawiać, ale nadal muszą podejmować wspólne decyzje. Dotyczy to zwłaszcza rodziców, którzy po rozstaniu muszą ustalić kontakty z dzieckiem, harmonogram opieki, zasady odbioru, wakacje, święta, koszty dodatkowe i sposób komunikacji.",
          "Warto rozważyć mediację także wtedy, gdy konflikt jest jeszcze na wczesnym etapie. Im wcześniej strony uporządkują zasady, tym mniejsze ryzyko, że spór stanie się długotrwały i obciążający dla dzieci.",
          "Mediacja może być pomocna również po wydaniu orzeczenia sądu. Życie rodzinne zmienia się szybciej niż dokumenty. Dzieci rosną, zmieniają szkołę, pojawiają się nowe obowiązki, przeprowadzki, nowe relacje i potrzeby. Wtedy strony mogą potrzebować aktualizacji wcześniejszych ustaleń."
        ]
      },
      {
        heading: "Mediacja przy rozwodzie i separacji",
        paragraphs: [
          "Rozwód i separacja często łączą kilka konfliktów w jednym: emocjonalny, rodzicielski, finansowy i organizacyjny. W sądzie te kwestie są ujmowane w określone ramy prawne. W mediacji można natomiast porozmawiać o nich bardziej praktycznie, krok po kroku.",
          "Strony mogą ustalić, jak będą wymieniać informacje o dziecku, kto odpowiada za szkołę, zdrowie, zajęcia dodatkowe, wyjazdy i nagłe sytuacje. Mogą także omówić alimenty, koszty dodatkowe, sposób płatności i zasady dokumentowania większych wydatków.",
          "Dla wielu osób największą zaletą mediacji rozwodowej jest to, że pozwala wyjść poza logikę zwycięstwa i porażki. W sprawach rodzinnych wygrana jednej strony często nie rozwiązuje problemu, jeżeli druga strona pozostaje w trwałym oporze. Porozumienie bywa trudniejsze, ale może być bardziej stabilne."
        ]
      },
      {
        heading: "Kontakty z dzieckiem — dlaczego konkret jest ważny?",
        paragraphs: [
          "W sprawach dotyczących kontaktów z dzieckiem ogólne ustalenia często nie wystarczają. Zdanie „rodzice będą współpracować” brzmi dobrze, ale nie rozwiązuje pytania, kto odbiera dziecko w piątek, o której godzinie, gdzie następuje przekazanie, co dzieje się w razie choroby i jak planowane są wakacje.",
          "Dobre porozumienie rodzicielskie powinno być konkretne. Powinno obejmować rytm tygodnia, weekendy, święta, ferie, wakacje, urodziny, dni wolne od szkoły, kontakt telefoniczny, zmianę planu i sposób komunikacji między rodzicami.",
          "Konkrety nie są oznaką braku zaufania. W konfliktach rodzinnych są często sposobem ochrony przed kolejnymi nieporozumieniami. Im mniej miejsca na dowolną interpretację, tym mniejsze ryzyko powracającego sporu."
        ]
      },
      {
        heading: "Alimenty i koszty utrzymania dziecka",
        paragraphs: [
          "Alimenty są jednym z najczęstszych tematów spornych. Strony różnią się w ocenie potrzeb dziecka, możliwości finansowych rodziców, kosztów dodatkowych i sposobu rozliczania wydatków. Mediacja może pomóc uporządkować te kwestie bez przerzucania się ogólnymi zarzutami.",
          "W rozmowie można rozdzielić koszty stałe od nadzwyczajnych. Stałe to na przykład mieszkanie, jedzenie, szkoła, opłaty, leki, zajęcia cykliczne. Nadzwyczajne mogą dotyczyć leczenia, wyjazdów, sprzętu, większych wydatków edukacyjnych lub nagłych potrzeb.",
          "Mediacja nie zastępuje oceny prawnej, ale może pomóc stronom zobaczyć realny budżet dziecka. Często dopiero wspólne zestawienie wydatków pokazuje, które koszty są bezsporne, a które wymagają rozmowy."
        ]
      },
      {
        heading: "Komunikacja między rodzicami",
        paragraphs: [
          "Wiele konfliktów rodzinnych nie wynika wyłącznie z treści sporu, ale ze sposobu komunikacji. Wiadomości pisane pod wpływem emocji, ironia, zarzuty, brak odpowiedzi albo odpowiadanie po kilku dniach potrafią zniszczyć nawet rozsądne ustalenia.",
          "W mediacji można ustalić nie tylko harmonogram kontaktów, ale także zasady komunikacji: w jakich sprawach rodzice piszą do siebie, jakim kanałem, w jakim czasie odpowiadają, które decyzje wymagają uzgodnienia, a które są bieżące.",
          "Takie ustalenia bywają bardzo praktyczne. Rodzice nie muszą lubić się po rozstaniu, ale jeżeli mają wspólne dziecko, potrzebują minimalnego systemu wymiany informacji. Mediacja może pomóc stworzyć taki system."
        ]
      },
      {
        heading: "Mediacja rodzinna a dziecko",
        paragraphs: [
          "W mediacji rodzinnej dziecko nie powinno być narzędziem konfliktu. Dorośli często koncentrują się na swoich racjach, ale skutki sporu najmocniej odczuwa dziecko, które potrzebuje przewidywalności, bezpieczeństwa i możliwie spokojnych relacji z rodzicami.",
          "Mediator nie zastępuje psychologa dziecięcego i nie diagnozuje dziecka. Może jednak pomagać rodzicom zadawać właściwe pytania: co dziecko musi wiedzieć, jak ograniczyć napięcie przy przekazywaniu, jak nie obciążać go konfliktem dorosłych, jak nie używać kontaktów jako kary albo nagrody.",
          "Dobre porozumienie rodzicielskie powinno być wykonalne nie tylko formalnie, ale także życiowo. Jeżeli plan jest zbyt skomplikowany, nierealny albo ignoruje rytm dziecka, szybko stanie się źródłem kolejnych sporów."
        ]
      },
      {
        heading: "Kiedy mediacja rodzinna może być trudna?",
        paragraphs: [
          "Mediacja rodzinna nie jest właściwa w każdej sytuacji i nie zawsze powinna być prowadzona w taki sam sposób. Jeżeli jedna ze stron obawia się drugiej, czuje silną presję albo nie ma przestrzeni do swobodnego wypowiadania się, mediator powinien zachować szczególną ostrożność.",
          "Trudnością może być także oczekiwanie, że mediator „przekona” drugą stronę albo powie, kto jest lepszym rodzicem. Mediator nie pełni takiej roli. Nie jest sędzią, psychologiem ani pełnomocnikiem jednej ze stron.",
          "Czasem mediacja wymaga kilku etapów. Najpierw trzeba ustalić zasady rozmowy, potem zebrać tematy, a dopiero później przejść do konkretnych propozycji. Zbyt szybkie naciskanie na ugodę może przynieść odwrotny skutek."
        ]
      },
      {
        heading: "Mediacje rodzinne w Krakowie i online",
        paragraphs: [
          "Fundacja Mediacji Sądowej i Pozasądowej prowadzi mediacje rodzinne w Krakowie, przy ul. Kieleckiej 2/53. Lokalizacja w centrum miasta jest wygodna dla osób z Krakowa i okolic, ale część spraw może być również omawiana zdalnie.",
          "Mediacja online może być dobrym rozwiązaniem, gdy strony mieszkają w różnych miejscach, jedna z osób przebywa za granicą albo szybkie spotkanie stacjonarne jest trudne organizacyjnie. Warunkiem jest zapewnienie poufności i spokojnych warunków rozmowy.",
          "Przy pierwszym kontakcie warto krótko opisać sprawę, wskazać liczbę uczestników, etap postępowania i główne tematy. W sprawach rodzinnych nie trzeba opisywać całego konfliktu. Wystarczy wskazać, co wymaga uporządkowania."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacje rodzinne są tylko dla małżonków?",
        answer:
          "Nie. Mogą dotyczyć rodziców, byłych partnerów, krewnych i innych osób pozostających w konflikcie rodzinnym."
      },
      {
        question: "Czy mediator rodzinny decyduje o kontaktach z dzieckiem?",
        answer:
          "Nie. Mediator nie wydaje decyzji. Pomaga stronom rozmawiać i porządkować możliwe ustalenia."
      },
      {
        question: "Czy mediacja rodzinna może dotyczyć alimentów?",
        answer:
          "Tak. Strony mogą rozmawiać o wysokości alimentów, kosztach dodatkowych, terminach płatności i sposobie rozliczeń."
      },
      {
        question: "Czy dziecko uczestniczy w mediacji?",
        answer:
          "To zależy od charakteru sprawy, wieku dziecka i decyzji co do sposobu prowadzenia mediacji. W wielu przypadkach rozmowa odbywa się między dorosłymi."
      },
      {
        question: "Czy mediacja rodzinna może odbyć się online?",
        answer:
          "Tak, jeżeli strony wyrażają zgodę i warunki organizacyjne pozwalają zapewnić spokojną oraz poufną rozmowę."
      },
      {
        question: "Co przygotować przed mediacją rodzinną?",
        answer:
          "Warto przygotować listę tematów, podstawowe daty, harmonogramy, informacje o kosztach i najważniejsze potrzeby dziecka."
      }
    ],
    sources: [sources.mediationGov, sources.civilMediationGov],
    referencesApa6: [
      literature.methodology,
      literature.moore,
      literature.theory,
      literature.nvc
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
      "Czym różni się mediacja sądowa od pozasądowej? Wyjaśniamy koszty, dokumenty, rolę sądu i praktyczne znaczenie wyboru trybu.",
    description:
      "Mediacja sądowa i pozasądowa mają wspólny cel, ale różnią się punktem startu, kosztami, dokumentami i relacją z postępowaniem sądowym.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Mediacja sądowa i pozasądowa",
    readingTime: "15 min",
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
      "Mediacja sądowa i pozasądowa często są wrzucane do jednego worka, choć w praktyce oznaczają dwa różne sposoby organizowania rozmowy. Mają wspólny cel: pomóc stronom dojść do porozumienia. Różnią się jednak momentem rozpoczęcia, relacją z sądem, kosztami, dokumentami i sposobem wykorzystania ewentualnej ugody.",
    sections: [
      {
        heading: "Dlaczego warto odróżnić mediację sądową od pozasądowej?",
        paragraphs: [
          "Dla osoby, która pierwszy raz szuka mediatora, nazwy „sądowa” i „pozasądowa” mogą brzmieć technicznie. W praktyce ta różnica wpływa na to, jak rozpoczyna się mediacja, kto ją organizuje, jakie dokumenty są potrzebne, jak liczy się koszty i co dzieje się po zakończeniu rozmowy.",
          "Mediacja sądowa jest związana ze sprawą, która już znajduje się w sądzie. Mediacja pozasądowa zaczyna się z inicjatywy stron lub jednej ze stron, zanim sprawa trafi do sądu albo niezależnie od postępowania sądowego.",
          "Oba tryby mogą być wartościowe. Wybór zależy od etapu sporu, gotowości stron, rodzaju sprawy i tego, czy potrzebna jest późniejsza formalna kontrola sądu nad ugodą."
        ]
      },
      {
        heading: "Mediacja sądowa — kiedy sprawa jest już w sądzie",
        paragraphs: [
          "Mediacja sądowa pojawia się wtedy, gdy między stronami toczy się już postępowanie. Sąd może skierować strony do mediacji albo strony mogą same zawnioskować o taką próbę rozwiązania sporu.",
          "Ten tryb ma wyraźniejszy związek z procedurą sądową. Po mediacji sporządzany jest protokół, a jeżeli strony zawrą ugodę, może ona zostać przedstawiona sądowi. W odpowiednich przypadkach sąd może ją zatwierdzić.",
          "Dla stron oznacza to, że mediacja sądowa nie jest rozmową oderwaną od sprawy. Jej wynik może mieć znaczenie dla dalszego przebiegu postępowania i zakresu sporu, który pozostanie do rozstrzygnięcia."
        ]
      },
      {
        heading: "Mediacja pozasądowa — zanim konflikt trafi do sądu",
        paragraphs: [
          "Mediacja pozasądowa zaczyna się bez skierowania sądu. Strony same kontaktują się z mediatorem albo jedna ze stron prosi mediatora o zaproszenie drugiej strony do rozmowy.",
          "Ten tryb jest szczególnie użyteczny, gdy konflikt jeszcze nie przerodził się w proces albo gdy strony chcą sprawdzić możliwość porozumienia bez składania pozwu. Może dotyczyć spraw rodzinnych, cywilnych, gospodarczych, sąsiedzkich, organizacyjnych albo umownych.",
          "Mediacja pozasądowa jest elastyczna. Strony mogą szybciej ustalić termin, zakres rozmowy i sposób prowadzenia spotkań. Jednocześnie nadal obowiązują podstawowe zasady mediacji: dobrowolność, poufność, bezstronność i neutralność mediatora."
        ]
      },
      {
        heading: "Różnice w kosztach",
        paragraphs: [
          "Jedną z najważniejszych różnic są koszty. W mediacji sądowej w sprawach cywilnych wynagrodzenie mediatora i zwrot wydatków są określone przepisami. W mediacji pozasądowej koszt wynika z cennika ośrodka mediacyjnego albo z uzgodnienia stron z mediatorem.",
          "Dla klienta oznacza to, że nie wystarczy zapytać: „ile kosztuje mediacja?”. Trzeba najpierw zapytać: „czy to mediacja sądowa czy pozasądowa?”. Dopiero wtedy można poprawnie oszacować koszt.",
          "W sprawach karnych sytuacja jest jeszcze inna, ponieważ koszty mediacji nie obciążają stron. Dlatego dobry cennik powinien jasno oddzielać mediację cywilną sądową, pozasądową i karną."
        ]
      },
      {
        heading: "Różnice w dokumentach",
        paragraphs: [
          "W mediacji sądowej istnieje już sprawa sądowa, więc mediator może działać w ramach informacji związanych z postępowaniem. Strony często mają już pisma, załączniki, stanowiska i określone żądania.",
          "W mediacji pozasądowej dokumenty mogą być prostsze. Czasem wystarczy umowa, korespondencja, faktura, opis sprawy albo lista tematów do omówienia. Nie trzeba od razu budować pełnej dokumentacji procesowej.",
          "W obu trybach warto unikać przesyłania nadmiaru materiałów na samym początku. Pierwszy kontakt powinien przede wszystkim pozwolić ustalić charakter sprawy, liczbę stron, główne tematy i gotowość do rozmowy."
        ]
      },
      {
        heading: "Ugoda w mediacji sądowej",
        paragraphs: [
          "Jeżeli strony zawrą ugodę w mediacji sądowej, może ona zostać przedstawiona sądowi. Po zatwierdzeniu przez sąd ugoda może uzyskać moc ugody zawartej przed sądem, a w odpowiednich przypadkach może nadawać się do wykonania.",
          "Dlatego w mediacji sądowej bardzo ważna jest precyzja zapisów. Ugoda powinna jasno określać obowiązki stron: kto, co, kiedy, komu i w jaki sposób ma wykonać.",
          "Mediator może pomóc uporządkować ustalenia, ale strony powinny rozumieć skutki tego, na co się zgadzają. W sprawach bardziej złożonych warto korzystać ze wsparcia profesjonalnego pełnomocnika."
        ]
      },
      {
        heading: "Ugoda w mediacji pozasądowej",
        paragraphs: [
          "W mediacji pozasądowej strony również mogą zawrzeć ugodę. Jej dalsze wykorzystanie zależy od rodzaju sprawy, treści porozumienia i decyzji stron co do ewentualnych dalszych kroków.",
          "Taka ugoda może mieć duże znaczenie praktyczne nawet wtedy, gdy nie jest od razu elementem sprawy sądowej. Może regulować płatność, zasady kontaktu, sposób współpracy, harmonogram działań albo zakończenie sporu.",
          "W praktyce mediacja pozasądowa często bywa sposobem uniknięcia procesu. Jeżeli strony osiągną realne i wykonalne porozumienie, spór może nie wymagać wniesienia sprawy do sądu."
        ]
      },
      {
        heading: "Który tryb wybrać?",
        paragraphs: [
          "Jeżeli sprawa już jest w sądzie, naturalnym punktem wyjścia może być mediacja sądowa. Jeżeli konflikt istnieje, ale strony nie rozpoczęły postępowania, warto rozważyć mediację pozasądową.",
          "Wybór zależy również od celu. Jeżeli stronom zależy na szybkim sprawdzeniu możliwości porozumienia, tryb pozasądowy może być bardziej elastyczny. Jeżeli sprawa jest już sformalizowana, tryb sądowy może pomóc zakończyć lub ograniczyć postępowanie.",
          "Najlepszym rozwiązaniem jest krótki kontakt z mediatorem i opisanie sytuacji. W wielu przypadkach już kilka informacji pozwala ustalić, który tryb będzie właściwy organizacyjnie."
        ]
      },
      {
        heading: "Mediacja sądowa i pozasądowa w Krakowie",
        paragraphs: [
          "W Krakowie mediacja sądowa i pozasądowa może dotyczyć spraw rodzinnych, cywilnych, gospodarczych i karnych. Duże miasto oznacza dużą liczbę relacji: rodzinnych, biznesowych, sąsiedzkich, zawodowych i lokalowych.",
          "Dla klientów ważna jest nie tylko sama dostępność mediatora, ale też jasne wyjaśnienie procesu. Osoba, która nie zna procedury, powinna szybko zrozumieć, czego może oczekiwać po pierwszym kontakcie.",
          "Fundacja Mediacji Sądowej i Pozasądowej w Krakowie może pomóc w uporządkowaniu pierwszych informacji: rodzaju sprawy, etapu sporu, liczby stron i możliwego trybu rozmowy."
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
          "Tak, ponieważ jest powiązana z toczącym się postępowaniem sądowym."
      },
      {
        question: "Czy w mediacji pozasądowej można zawrzeć ugodę?",
        answer:
          "Tak. Strony mogą zawrzeć porozumienie również poza sądem."
      },
      {
        question: "Czy koszty mediacji sądowej i pozasądowej są takie same?",
        answer:
          "Nie zawsze. W mediacji sądowej cywilnej koszty wynikają z przepisów, a w pozasądowej z cennika lub uzgodnienia stron z mediatorem."
      },
      {
        question: "Czy mediator wybiera tryb mediacji za strony?",
        answer:
          "Mediator może wyjaśnić różnice i pomóc organizacyjnie, ale decyzje procesowe powinny należeć do stron."
      },
      {
        question: "Czy mediacja pozasądowa może zapobiec procesowi?",
        answer:
          "Tak, jeżeli strony osiągną porozumienie i nie będzie potrzeby kierowania sprawy do sądu."
      }
    ],
    sources: [
      sources.mediationGov,
      sources.outOfCourtGov,
      sources.civilMediationGov,
      sources.directive2008
    ],
    referencesApa6: [
      literature.courtOutOfCourt,
      literature.methodology,
      literature.theory,
      literature.civil
    ],
    internalLinks: [
      {
        label: "Cennik mediacji",
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
      "Praktyczny poradnik: co przygotować przed mediacją, jakie dokumenty zabrać, jak opisać sprawę i jak ustalić cele rozmowy.",
    description:
      "Dobre przygotowanie do mediacji pomaga uporządkować fakty, oczekiwania i dokumenty, ale nie wymaga gotowej strategii procesowej.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Przygotowanie do mediacji",
    readingTime: "15 min",
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
      "Pierwsza mediacja dla wielu osób jest sytuacją nową i niepewną. Nie wiadomo, czy trzeba przygotować dokumenty, czy należy mieć gotową propozycję ugody, czy można przyjść z pełnomocnikiem i czy mediator będzie oceniał racje stron. Dobre przygotowanie nie polega na stworzeniu perfekcyjnej strategii. Polega na uporządkowaniu najważniejszych informacji i wejściu w rozmowę z jasnym obrazem własnych potrzeb.",
    sections: [
      {
        heading: "Zacznij od krótkiego opisu sprawy",
        paragraphs: [
          "Najlepszy opis sprawy nie musi być długi. Wystarczy kilka konkretnych informacji: czego dotyczy konflikt, ile osób bierze w nim udział, czy sprawa jest już w sądzie, czy istnieją dokumenty i jakie kwestie strony chcą omówić.",
          "Wiele osób zaczyna od bardzo szczegółowej historii. To zrozumiałe, ponieważ konflikt zwykle narasta przez dłuższy czas. Na pierwszym etapie ważniejszy jest jednak porządek niż szczegółowość. Mediator musi najpierw zrozumieć rodzaj sprawy i ustalić, czy mediacja jest możliwa organizacyjnie.",
          "Dobry opis sprawy można ułożyć według prostego schematu: kto uczestniczy w konflikcie, czego dotyczy spór, co dotychczas się wydarzyło, jaki jest obecny etap i czego strona oczekuje od rozmowy."
        ]
      },
      {
        heading: "Oddziel fakty od ocen",
        paragraphs: [
          "W konflikcie łatwo mieszać fakty z ocenami. Fakt brzmi: „faktura nie została zapłacona od trzech miesięcy”. Ocena brzmi: „druga strona celowo mnie oszukuje”. W mediacji obie warstwy mogą mieć znaczenie, ale warto je rozdzielić.",
          "Fakty pomagają zrozumieć sytuację. Oceny pokazują emocje, interpretacje i poziom napięcia. Jeżeli wszystko zostanie przedstawione wyłącznie jako zarzut, rozmowa może szybko utknąć w sporze o winę.",
          "Przed spotkaniem warto przygotować listę faktów: daty, kwoty, dokumenty, zdarzenia, decyzje, wiadomości. Obok można zapisać, co dana sytuacja oznacza dla strony i dlaczego jest ważna. Taki podział pomaga mówić konkretnie bez rezygnacji z własnej perspektywy."
        ]
      },
      {
        heading: "Przygotuj dokumenty, ale wybierz najważniejsze",
        paragraphs: [
          "Dokumenty mogą być potrzebne, ale mediacja nie jest zwykłym procesem dowodowym. Nie chodzi o to, aby zasypać mediatora aktami, lecz aby pokazać, co jest istotne dla zrozumienia sporu.",
          "W sprawie o zapłatę przydatne mogą być faktury, umowa, korespondencja, wezwanie do zapłaty i zestawienie kwot. W sprawie rodzinnej — harmonogramy, dotychczasowe ustalenia, informacje o kosztach dziecka, plan opieki albo lista spornych terminów.",
          "Dokumenty warto uporządkować chronologicznie albo tematycznie. Jeżeli sprawa jest obszerna, lepiej przygotować krótkie zestawienie niż przesyłać kilkadziesiąt plików bez komentarza."
        ]
      },
      {
        heading: "Ustal, czego naprawdę oczekujesz",
        paragraphs: [
          "Przed mediacją warto zadać sobie pytanie: jaki wynik byłby dla mnie rozsądny? Nie chodzi tylko o maksimum oczekiwań, ale też o rozwiązanie, które można realnie wykonać.",
          "W sprawach majątkowych oczekiwaniem może być zapłata całej kwoty, rozłożenie płatności na raty, częściowa kompensata albo zwrot rzeczy. W sprawach rodzinnych może to być stabilny harmonogram kontaktów, jasne zasady komunikacji albo porozumienie dotyczące kosztów.",
          "Warto odróżnić stanowisko od interesu. Stanowisko to żądanie: „chcę tej kwoty” albo „chcę takiego harmonogramu”. Interes to przyczyna: potrzeba bezpieczeństwa, przewidywalności, czasu, uznania szkody albo zakończenia sporu."
        ]
      },
      {
        heading: "Przygotuj warianty, nie tylko jedno żądanie",
        paragraphs: [
          "Mediacja działa lepiej, gdy strony mają więcej niż jedną możliwą propozycję. Jedno sztywne żądanie często prowadzi do impasu. Kilka wariantów pozwala sprawdzić, czy porozumienie jest możliwe inną drogą.",
          "W sprawie o zapłatę wariantami mogą być: jednorazowa płatność niższej kwoty, raty, zabezpieczenie spłaty, termin odroczony albo świadczenie częściowe. W sprawie rodzinnej: różne układy weekendów, wakacji, odbiorów i kontaktów telefonicznych.",
          "Przygotowanie wariantów nie oznacza słabości. Oznacza gotowość do racjonalnej rozmowy. Strona nadal może pilnować swoich interesów, ale nie zamyka całego procesu jednym warunkiem."
        ]
      },
      {
        heading: "Zastanów się, czego nie chcesz",
        paragraphs: [
          "Dobre przygotowanie obejmuje nie tylko cele, ale także granice. Strona powinna wiedzieć, jakie rozwiązania są dla niej nieakceptowalne i dlaczego.",
          "Granice mogą dotyczyć pieniędzy, terminów, bezpieczeństwa, kontaktu, odpowiedzialności, poufności albo sposobu komunikacji. Jeżeli strona zna swoje granice, łatwiej jej spokojnie uczestniczyć w rozmowie.",
          "Warto jednak odróżnić granice od reakcji emocjonalnych. Czasem zdanie „nigdy się na to nie zgodzę” oznacza faktyczną granicę, a czasem jest pierwszą reakcją na propozycję, którą można zmodyfikować."
        ]
      },
      {
        heading: "Jak przygotować się emocjonalnie?",
        paragraphs: [
          "Mediacja bywa stresująca, ponieważ wymaga rozmowy o sprawach ważnych. Nie trzeba ukrywać emocji, ale warto zadbać o sposób ich wyrażania. Krzyk, ironia, oskarżenia i przerywanie zwykle oddalają strony od porozumienia.",
          "Przed spotkaniem można zapisać trzy najważniejsze rzeczy, które chce się powiedzieć. To pomaga nie zgubić sensu wypowiedzi pod wpływem napięcia.",
          "Warto też przygotować się na słuchanie. Słuchanie nie oznacza zgody. Oznacza zrozumienie, co druga strona uważa za ważne. Bez tego trudno zbudować porozumienie, które będzie działało po zakończeniu spotkania."
        ]
      },
      {
        heading: "Czy warto przyjść z pełnomocnikiem?",
        paragraphs: [
          "W wielu sprawach udział pełnomocnika może być pomocny. Dotyczy to zwłaszcza spraw złożonych prawnie, gospodarczych, majątkowych albo takich, w których ugoda może mieć istotne skutki na przyszłość.",
          "Pełnomocnik może pomóc stronie ocenić ryzyka, zrozumieć skutki prawne propozycji i zadbać o precyzję ugody. Jednocześnie mediacja różni się od rozprawy sądowej. Nie powinna zamienić się w pojedynek argumentów procesowych.",
          "Najlepszy udział pełnomocnika w mediacji polega na ochronie interesu klienta przy jednoczesnym wspieraniu konstruktywnej rozmowy. To inny styl pracy niż klasyczny spór sądowy."
        ]
      },
      {
        heading: "Co zabrać na pierwsze spotkanie?",
        paragraphs: [
          "Na pierwsze spotkanie warto zabrać dokument tożsamości, najważniejsze dokumenty sprawy, krótką listę tematów, własne propozycje i notatki dotyczące pytań. W mediacji online warto wcześniej przygotować pliki w uporządkowany sposób.",
          "Nie trzeba przygotowywać długiego wystąpienia. Lepsza jest jasna lista punktów. Mediator pomoże nadać rozmowie strukturę.",
          "W sprawach rodzinnych warto mieć kalendarz, informacje o planie dnia dziecka, kosztach i terminach. W sprawach gospodarczych — zestawienie kwot, umów, terminów i osób decyzyjnych."
        ]
      },
      {
        heading: "Jak zgłosić się do mediatora?",
        paragraphs: [
          "Pierwsza wiadomość do mediatora powinna być krótka i konkretna. Warto podać rodzaj sprawy, liczbę stron, etap sporu, preferowany tryb kontaktu i informację, czy sprawa jest już w sądzie.",
          "Nie trzeba od razu wysyłać wszystkich dokumentów. Jeżeli mediator będzie ich potrzebował, wskaże zakres. Dobrą praktyką jest najpierw ustalenie, czy druga strona jest gotowa do udziału w mediacji.",
          "W Fundacji Mediacji Sądowej i Pozasądowej można zgłosić sprawę telefonicznie lub mailowo. Przy sprawach z Krakowa możliwe jest spotkanie stacjonarne, a w odpowiednich sytuacjach również kontakt online."
        ]
      }
    ],
    faq: [
      {
        question: "Czy trzeba mieć gotową ugodę przed mediacją?",
        answer:
          "Nie. Warto mieć propozycje i cele, ale ugoda może powstać dopiero w toku rozmowy."
      },
      {
        question: "Czy trzeba zabrać wszystkie dokumenty?",
        answer:
          "Nie. Najlepiej przygotować najważniejsze dokumenty, które pomagają zrozumieć spór."
      },
      {
        question: "Czy mediator będzie oceniał, kto ma rację?",
        answer:
          "Nie. Mediator nie jest sędzią i nie rozstrzyga sporu."
      },
      {
        question: "Czy można przyjść z adwokatem lub radcą prawnym?",
        answer:
          "Tak, w wielu sprawach udział pełnomocnika jest możliwy i pomocny."
      },
      {
        question: "Czy mediacja może odbyć się online?",
        answer:
          "Tak, jeżeli strony się zgadzają i sprawa nadaje się do rozmowy zdalnej."
      },
      {
        question: "Jak krótko opisać sprawę mediatorowi?",
        answer:
          "Wystarczy wskazać rodzaj sprawy, liczbę stron, etap sporu i najważniejsze tematy do omówienia."
      }
    ],
    sources: [sources.mediationGov, sources.outOfCourtGov],
    referencesApa6: [
      literature.methodology,
      literature.moore,
      literature.theory,
      literature.negotiation,
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
      "Poufność mediacji chroni swobodę rozmowy. Wyjaśniamy, co oznacza w praktyce, dlaczego buduje zaufanie i kiedy ma znaczenie.",
    description:
      "Poufność jest jedną z najważniejszych zasad mediacji. Pomaga stronom rozmawiać swobodniej, spokojniej i bardziej rzeczowo.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Zasady mediacji",
    readingTime: "15 min",
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
      "Poufność mediacji jest jedną z tych zasad, które klienci często rozumieją intuicyjnie, ale nie zawsze wiedzą, jak działa w praktyce. Jej sens jest prosty: strony powinny mieć przestrzeń do spokojnej rozmowy bez obawy, że każda propozycja, wątpliwość albo ustępstwo zostanie natychmiast wykorzystane przeciwko nim. Dzięki temu mediacja może stać się miejscem realnej rozmowy, a nie tylko kolejną odsłoną sporu.",
    sections: [
      {
        heading: "Dlaczego poufność jest tak ważna?",
        paragraphs: [
          "Konflikt zmienia sposób komunikacji. Strony zaczynają mówić ostrożniej, defensywnie i często bardziej po to, aby zabezpieczyć swoją pozycję, niż po to, aby rozwiązać problem. W takim stanie trudno o szczerość, a bez szczerości trudno ustalić, co naprawdę blokuje porozumienie.",
          "Poufność mediacji ma zmniejszyć ten lęk. Jeżeli strona wie, że rozmowa nie jest zwykłym przesłuchaniem ani publiczną debatą, łatwiej jej powiedzieć, czego naprawdę potrzebuje, czego się obawia i jakie rozwiązania mogłaby rozważyć.",
          "W praktyce poufność pozwala rozmawiać nie tylko o roszczeniach, ale też o interesach. Roszczenie brzmi: „żądam zapłaty”. Interes może brzmieć: „potrzebuję płynności finansowej”, „chcę zakończyć współpracę bez dalszych strat” albo „potrzebuję jasnego harmonogramu”."
        ]
      },
      {
        heading: "Poufność a propozycje ugodowe",
        paragraphs: [
          "Jedną z największych obaw stron jest to, że sama propozycja ustępstwa zostanie odebrana jako słabość. W procesie sądowym strony często wolą trzymać się maksymalnych żądań, ponieważ boją się utraty pozycji negocjacyjnej.",
          "Mediacja działa inaczej. Strony mogą sprawdzać różne warianty porozumienia, niekoniecznie przyjmując je od razu jako ostateczne zobowiązanie. Mogą testować rozwiązania: raty, terminy, częściowe ustalenia, przeprosiny, zmianę harmonogramu albo zasady dalszego kontaktu.",
          "Poufność sprzyja takiej pracy. Dzięki niej łatwiej powiedzieć: „mogę rozważyć to rozwiązanie, ale pod warunkiem...” albo „ta propozycja jest za daleko idąca, ale widzę możliwość innego wariantu”."
        ]
      },
      {
        heading: "Poufność nie oznacza chaosu",
        paragraphs: [
          "Poufność nie oznacza, że mediacja odbywa się bez zasad. Wręcz przeciwnie: aby poufność działała, zasady muszą być jasne. Strony powinny wiedzieć, kto uczestniczy w spotkaniu, jak dokumentuje się przebieg mediacji, co trafia do protokołu i jak traktowane są informacje przekazywane mediatorowi.",
          "Mediator powinien wyjaśnić te kwestie na początku. Dzięki temu uczestnicy nie muszą domyślać się, czy dana wypowiedź będzie gdzieś zapisana albo komu zostanie przekazana.",
          "Jasne zasady poufności są szczególnie ważne w sprawach rodzinnych i gospodarczych. W rodzinnych chronią prywatność i emocjonalne bezpieczeństwo. W gospodarczych chronią informacje biznesowe, relacje handlowe i negocjacje finansowe."
        ]
      },
      {
        heading: "Poufność a zaufanie do mediatora",
        paragraphs: [
          "Mediator jest gospodarzem procesu rozmowy. Jeżeli strony nie ufają mediatorowi, trudno oczekiwać, że będą mówiły otwarcie. Poufność jest jednym z fundamentów tego zaufania.",
          "Zaufanie nie wynika z samego tytułu mediatora. Buduje się przez sposób prowadzenia spotkania: spokojne wyjaśnienie zasad, równe traktowanie stron, brak faworyzowania, brak nacisku i konsekwentne pilnowanie granic rozmowy.",
          "Mediator nie powinien wykorzystywać informacji przekazanej przez jedną stronę w sposób, który naruszałby zaufanie procesowe. Jeżeli prowadzone są rozmowy oddzielne, szczególnie ważne jest ustalenie, które informacje mogą zostać przekazane drugiej stronie, a które pozostają wyłącznie w rozmowie z mediatorem."
        ]
      },
      {
        heading: "Poufność w mediacji rodzinnej",
        paragraphs: [
          "W sprawach rodzinnych poufność ma wymiar bardzo osobisty. Strony często mówią o dzieciach, rozstaniu, emocjach, finansach, nowym życiu po rozstaniu i trudnych doświadczeniach z przeszłości.",
          "Bez poczucia poufności rozmowa łatwo zmienia się w wystąpienie pod publiczność. Każda strona chce dobrze wypaść, bronić się i pokazać drugą osobę w złym świetle. Taki sposób komunikacji rzadko pomaga dziecku.",
          "Poufność pozwala przesunąć rozmowę z poziomu oskarżeń na poziom praktycznych ustaleń: jak odbierać dziecko, kto informuje szkołę, jak planować wakacje, co robić w razie choroby i jak ograniczyć kontakt dziecka z konfliktem dorosłych."
        ]
      },
      {
        heading: "Poufność w mediacji gospodarczej",
        paragraphs: [
          "W sprawach gospodarczych poufność bywa jedną z największych zalet mediacji. Przedsiębiorcy nie zawsze chcą, aby spór z kontrahentem, problemy z płatnościami, jakość usługi albo warunki umowy były szeroko znane.",
          "Mediacja daje możliwość rozmowy o sprawach wrażliwych: kondycji finansowej, opóźnieniach, problemach organizacyjnych, cenach, rabatach, reklamacjach albo planach zakończenia współpracy.",
          "W procesie sądowym spór zostaje wpisany w formalne ramy. W mediacji strony mogą szukać rozwiązania bez natychmiastowej eskalacji i bez publicznego pogłębiania konfliktu."
        ]
      },
      {
        heading: "Poufność w mediacji online",
        paragraphs: [
          "Mediacja online wymaga szczególnej dbałości o poufność. Nie wystarczy bezpieczna platforma techniczna. Ważne jest także to, gdzie znajdują się uczestnicy i czy osoby trzecie nie słyszą rozmowy.",
          "Strony powinny uczestniczyć w mediacji z miejsca, które pozwala mówić swobodnie. Rozmowa z samochodu, kawiarni, biura pełnego pracowników albo mieszkania, w którym przebywają osoby postronne, może naruszać komfort i poufność.",
          "Przed spotkaniem online warto ustalić, kto bierze udział w rozmowie, czy ktoś jest obecny poza kamerą, jak będą przekazywane dokumenty i co zrobić w razie przerwania połączenia."
        ]
      },
      {
        heading: "Granice poufności",
        paragraphs: [
          "Poufność jest bardzo ważna, ale nie powinna być rozumiana jako dowolność. Mediacja nadal odbywa się w określonych ramach prawnych i organizacyjnych. Zakres poufności powinien być wyjaśniony przez mediatora w odniesieniu do rodzaju sprawy.",
          "Strony powinny odróżniać sam przebieg rozmów od dokumentów, które mogą powstać w mediacji, takich jak protokół albo ugoda. Jeżeli ugoda ma zostać zatwierdzona przez sąd, jej treść nie pozostaje wyłącznie prywatną rozmową.",
          "Dlatego przed podpisaniem ugody warto upewnić się, że strony rozumieją jej treść, skutki i sposób dalszego wykorzystania."
        ]
      },
      {
        heading: "Jak rozmawiać poufnie i rzeczowo?",
        paragraphs: [
          "Poufność nie wystarczy, jeżeli strony nie wiedzą, jak z niej korzystać. Warto mówić konkretnie, unikać obrażania drugiej strony i koncentrować się na tym, co można ustalić.",
          "Dobre zdania w mediacji brzmią często prosto: „potrzebuję przewidywalnego terminu”, „nie mogę przyjąć tej kwoty jednorazowo”, „ważne jest dla mnie, aby dziecko nie było świadkiem kłótni”, „chcę zakończyć współpracę bez dalszych roszczeń”.",
          "Taki język nie zawsze przychodzi naturalnie. Konflikt skłania do obrony i ataku. Rola mediatora polega między innymi na tym, aby pomóc stronom wrócić do rozmowy o potrzebach, możliwościach i konkretnych rozwiązaniach."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacja jest poufna?",
        answer:
          "Tak, poufność jest jedną z podstawowych zasad mediacji i służy ochronie swobody rozmowy."
      },
      {
        question: "Czy mediator może opowiadać o przebiegu mediacji?",
        answer:
          "Mediator powinien zachować poufność zgodnie z zasadami prowadzenia mediacji."
      },
      {
        question: "Czy poufność dotyczy także mediacji online?",
        answer:
          "Tak, ale wymaga zapewnienia odpowiednich warunków technicznych i organizacyjnych po stronie wszystkich uczestników."
      },
      {
        question: "Czy ugoda mediacyjna jest objęta poufnością?",
        answer:
          "Ugoda może zostać wykorzystana w odpowiedniej procedurze, jeżeli strony dążą do jej zatwierdzenia albo wykonania."
      },
      {
        question: "Czy można ujawniać propozycje składane w mediacji?",
        answer:
          "Zasadą mediacji jest ochrona swobody rozmowy. Szczegółowy zakres poufności powinien zostać wyjaśniony stronom przed spotkaniem."
      },
      {
        question: "Dlaczego poufność pomaga w rozmowie?",
        answer:
          "Ponieważ zmniejsza obawę, że każda propozycja zostanie wykorzystana jako słabość w dalszym sporze."
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
      literature.theory,
      literature.nvc
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
    readingTime: "15 min",
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
      "Dobrowolność, bezstronność i neutralność to nie są hasła z regulaminu. To praktyczne warunki, bez których mediacja traci sens. Jeżeli strona czuje się zmuszana, nie ufa mediatorowi albo ma wrażenie, że wynik jest z góry ustalony, rozmowa przestaje być realną próbą porozumienia. Dobra mediacja zaczyna się od jasnych zasad.",
    sections: [
      {
        heading: "Dlaczego zasady mediacji są tak ważne?",
        paragraphs: [
          "Mediacja różni się od procesu sądowego. W sądzie strony przedstawiają stanowiska, dowody i argumenty, a decyzję podejmuje sąd. W mediacji to strony mają największy wpływ na wynik rozmowy.",
          "Aby taki model był uczciwy, potrzebne są zasady. Dobrowolność chroni przed przymusem. Bezstronność chroni przed faworyzowaniem jednej strony. Neutralność chroni przed narzucaniem rozwiązania przez mediatora.",
          "Te zasady nie są ozdobą. W praktyce decydują o tym, czy strony odważą się mówić otwarcie, czy będą tylko powtarzać swoje stanowiska jak na sali sądowej."
        ]
      },
      {
        heading: "Dobrowolność — zgoda na udział i na wynik",
        paragraphs: [
          "Dobrowolność oznacza, że strony powinny mieć realny wpływ na udział w mediacji i na treść ewentualnego porozumienia. Nie wystarczy, że ktoś formalnie pojawi się na spotkaniu. Ważne jest, aby rozumiał, w czym uczestniczy.",
          "Zgoda na mediację nie oznacza zgody na ugodę. Strona może przyjść, wysłuchać, przedstawić swoje stanowisko, rozważyć propozycje i ostatecznie nie podpisać porozumienia.",
          "To bardzo ważne w sprawach rodzinnych, karnych i gospodarczych. Ugoda podpisana pod presją rzadko jest trwała. Nawet jeżeli formalnie kończy spór, może generować kolejne napięcia."
        ]
      },
      {
        heading: "Dobrowolność a skierowanie przez sąd",
        paragraphs: [
          "Część osób myli skierowanie do mediacji z obowiązkiem zawarcia ugody. To nie to samo. Sąd może skierować sprawę do mediacji, ale strony nadal zachowują wpływ na to, czy dojdzie do porozumienia.",
          "Mediacja sądowa może być bardzo użyteczna, bo pozwala stronom wyjść poza pisma procesowe i porozmawiać o rozwiązaniach. Nie oznacza jednak, że mediator ma zmusić strony do zakończenia sprawy.",
          "Dobrowolność chroni także jakość ugody. Porozumienie ma sens wtedy, gdy strony rozumieją jego skutki i uważają je za możliwe do wykonania."
        ]
      },
      {
        heading: "Bezstronność mediatora",
        paragraphs: [
          "Bezstronność oznacza, że mediator nie staje po żadnej stronie. Nie wspiera jednej osoby przeciwko drugiej, nie wzmacnia przewagi silniejszej strony i nie prowadzi rozmowy tak, aby potwierdzić własne przekonania.",
          "W praktyce bezstronność widać w szczegółach: mediator daje obu stronom czas na wypowiedź, reaguje na przerywanie, wyjaśnia zasady w równy sposób i nie używa języka sugerującego ocenę moralną jednej osoby.",
          "Dla uczestników mediacji bezstronność jest warunkiem zaufania. Jeżeli jedna ze stron ma poczucie, że mediator sprzyja drugiej, proces szybko traci wiarygodność."
        ]
      },
      {
        heading: "Neutralność mediatora",
        paragraphs: [
          "Neutralność dotyczy stosunku mediatora do rozwiązania sporu. Mediator nie powinien narzucać stronom własnej wizji ugody. Może pomagać w porządkowaniu wariantów, ale nie powinien mówić: „to będzie najlepsze, proszę to podpisać”.",
          "Neutralność nie oznacza bierności. Mediator może zadawać pytania, podsumowywać, sprawdzać realność propozycji i pomagać stronom doprecyzować ustalenia. Nie powinien jednak odbierać stronom decyzyjności.",
          "W mediacji to strony są autorami porozumienia. Dzięki temu ugoda może być bardziej dopasowana do ich realnego życia niż rozstrzygnięcie narzucone z zewnątrz."
        ]
      },
      {
        heading: "Czy mediator może mieć wiedzę prawniczą?",
        paragraphs: [
          "Mediator może mieć wykształcenie prawnicze i doświadczenie w pracy z dokumentami, ale podczas mediacji nie powinien pełnić roli pełnomocnika jednej ze stron. To rozróżnienie jest bardzo ważne.",
          "Wiedza prawnicza może pomagać w rozumieniu procedury, języka ugody i granic porozumienia. Nie może jednak prowadzić do tego, że mediator zaczyna doradzać jednej stronie przeciwko drugiej.",
          "Jeżeli uczestnik mediacji potrzebuje indywidualnej porady prawnej, powinien skonsultować się z adwokatem lub radcą prawnym. Mediator może wyjaśniać proces, ale nie powinien zastępować pełnomocnika."
        ]
      },
      {
        heading: "Zasady mediacji w sprawach rodzinnych",
        paragraphs: [
          "W sprawach rodzinnych zasady mediacji mają szczególne znaczenie. Konflikt często jest silnie emocjonalny, a strony mogą mieć poczucie krzywdy, lęku albo nierówności.",
          "Dobrowolność chroni przed wymuszonym porozumieniem. Bezstronność zapewnia, że mediator nie wybiera „lepszego rodzica”. Neutralność pomaga skupić się na rozwiązaniach, a nie na ocenianiu całej historii związku.",
          "Dzięki tym zasadom rozmowa może przesunąć się z poziomu oskarżeń na poziom konkretnych ustaleń dotyczących dzieci, kontaktów, kosztów i komunikacji."
        ]
      },
      {
        heading: "Zasady mediacji w sprawach gospodarczych",
        paragraphs: [
          "W mediacji gospodarczej strony często są skupione na wyniku: zapłacie, terminie, wykonaniu umowy, karach, fakturach albo dalszej współpracy. Zasady mediacji nadal pozostają kluczowe.",
          "Przedsiębiorca musi mieć poczucie, że mediator nie sprzyja drugiej firmie i nie naciska na rozwiązanie niekorzystne biznesowo. Zaufanie do procesu wpływa na gotowość do rozmowy o realnych możliwościach.",
          "Neutralność mediatora pozwala stronom samodzielnie ocenić, czy lepsze jest szybkie porozumienie, częściowe ustępstwo, harmonogram spłaty czy dalszy proces."
        ]
      },
      {
        heading: "Co zrobić, gdy strona ma wątpliwości?",
        paragraphs: [
          "Jeżeli uczestnik mediacji ma poczucie, że zasady nie są jasne, powinien o to zapytać. Dobry mediator powinien umieć wyjaśnić swoją rolę, zasady poufności, sposób prowadzenia rozmowy i granice własnego działania.",
          "Wątpliwości lepiej wyjaśnić na początku niż pozwolić, aby narastały. Niepewność co do roli mediatora może utrudnić całą rozmowę.",
          "Mediacja opiera się na zaufaniu, ale zaufanie nie musi być ślepe. Powinno wynikać z jasnych zasad i konsekwentnego sposobu prowadzenia spotkania."
        ]
      }
    ],
    faq: [
      {
        question: "Czy mediacja jest dobrowolna?",
        answer:
          "Tak. Strony powinny mieć realny wpływ na udział w mediacji i na treść ewentualnego porozumienia."
      },
      {
        question: "Czy mediator może powiedzieć, kto ma rację?",
        answer:
          "Nie. Mediator nie jest sędzią i nie rozstrzyga sporu."
      },
      {
        question: "Co oznacza bezstronność mediatora?",
        answer:
          "Oznacza, że mediator nie faworyzuje żadnej ze stron i dba o równowagę rozmowy."
      },
      {
        question: "Co oznacza neutralność mediatora?",
        answer:
          "Oznacza, że mediator nie narzuca stronom własnego rozwiązania sporu."
      },
      {
        question: "Czy mediator może być prawnikiem?",
        answer:
          "Tak, ale podczas mediacji powinien jasno oddzielać rolę mediatora od roli doradcy jednej strony."
      },
      {
        question: "Czy można przerwać mediację?",
        answer:
          "Tak, jeżeli strona nie chce kontynuować rozmowy albo mediacja traci sens organizacyjny."
      }
    ],
    sources: [sources.mediationGov, sources.civilMediationGov],
    referencesApa6: [
      literature.methodology,
      literature.mediatorLaw,
      literature.theory,
      literature.moore
    ],
    internalLinks: commonInternalLinks
  },
  {
    slug: "ugoda-mediacyjna-kiedy-moze-zostac-zatwierdzona-przez-sad",
    language: "pl",
    title: "Ugoda mediacyjna — kiedy może zostać zatwierdzona przez sąd?",
    metaTitle: "Ugoda mediacyjna — zatwierdzenie przez sąd",
    metaDescription:
      "Ugoda zawarta przed mediatorem może mieć poważne skutki prawne. Wyjaśniamy, kiedy sąd może ją zatwierdzić.",
    description:
      "Ugoda mediacyjna może zakończyć spór, ale jej skuteczność zależy od treści, zgodności z prawem i właściwego przygotowania.",
    date: publishDate,
    updatedAt: publishDate,
    category: "Ugoda mediacyjna",
    readingTime: "15 min",
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
      "Ugoda mediacyjna jest jednym z najważniejszych możliwych rezultatów mediacji. Dla stron może oznaczać koniec sporu, oszczędność czasu, większą przewidywalność i rozwiązanie dopasowane do realnych potrzeb. Jednocześnie ugoda nie jest zwykłą notatką ze spotkania. Jeżeli ma być skuteczna, musi być jasna, zgodna z prawem i możliwa do wykonania.",
    sections: [
      {
        heading: "Czym jest ugoda mediacyjna?",
        paragraphs: [
          "Ugoda mediacyjna to porozumienie zawarte przez strony przy udziale mediatora. Mediator nie narzuca jej treści, nie wydaje wyroku i nie wskazuje zwycięzcy. Strony same decydują, czy chcą zakończyć spór i na jakich warunkach.",
          "W tym sensie ugoda mediacyjna różni się od rozstrzygnięcia sądu. Sąd decyduje na podstawie prawa i materiału sprawy. Ugoda jest wynikiem porozumienia stron. Może obejmować elementy bardziej elastyczne niż typowe rozstrzygnięcie.",
          "W sprawach rodzinnych ugoda może dotyczyć kontaktów, opieki, alimentów, wakacji albo komunikacji. W sprawach gospodarczych może regulować zapłatę, raty, wykonanie umowy, odbiór prac albo zakończenie współpracy."
        ]
      },
      {
        heading: "Dlaczego precyzja ugody jest tak ważna?",
        paragraphs: [
          "Najczęstszy problem z ugodami polega na tym, że brzmią dobrze, ale są zbyt ogólne. Strony wpisują, że będą współpracować, rozliczą się albo będą utrzymywać kontakt, ale nie wskazują dokładnie, jak to ma wyglądać.",
          "Dobra ugoda powinna odpowiadać na pytania: kto, co, komu, kiedy, gdzie, w jaki sposób i z jakim skutkiem. Jeżeli chodzi o płatność, trzeba wskazać kwotę, termin i numer rachunku. Jeżeli chodzi o kontakty z dzieckiem, trzeba wskazać dni, godziny, miejsce odbioru i zasady zmian.",
          "Precyzja nie jest nadmiernym formalizmem. Jest zabezpieczeniem przed kolejnym konfliktem. Im mniej miejsca na różne interpretacje, tym większa szansa, że ugoda będzie rzeczywiście wykonana."
        ]
      },
      {
        heading: "Ugoda w mediacji sądowej",
        paragraphs: [
          "Jeżeli mediacja odbywa się w związku ze sprawą sądową, ugoda może zostać przedstawiona sądowi. Sąd może ją zatwierdzić, jeżeli spełnia wymagania przewidziane dla takiego porozumienia.",
          "Zatwierdzenie ugody przez sąd wzmacnia jej skutki. W odpowiednich sprawach ugoda może uzyskać moc ugody zawartej przed sądem. Jeżeli nadaje się do wykonania w drodze egzekucji, może zostać zatwierdzona przez nadanie klauzuli wykonalności.",
          "Dla stron oznacza to, że mediacja może prowadzić nie tylko do rozmowy, ale także do formalnego zakończenia sporu w sposób uznany przez sąd."
        ]
      },
      {
        heading: "Kiedy sąd może odmówić zatwierdzenia ugody?",
        paragraphs: [
          "Sąd nie zatwierdza ugody automatycznie. Sprawdza, czy ugoda nie jest sprzeczna z prawem, zasadami współżycia społecznego, nie zmierza do obejścia prawa i czy jest zrozumiała oraz możliwa do wykonania.",
          "Problem może pojawić się wtedy, gdy ugoda zawiera zapisy niejasne, nierealne, naruszające prawa osób trzecich albo sprzeczne z obowiązującymi przepisami. W takich sytuacjach sąd może odmówić zatwierdzenia całości lub części ugody.",
          "Dlatego w sprawach bardziej złożonych warto, aby strony skonsultowały treść ugody z pełnomocnikami. Mediator pomaga prowadzić proces i porządkować ustalenia, ale nie zastępuje indywidualnej porady prawnej."
        ]
      },
      {
        heading: "Ugoda w sprawach rodzinnych",
        paragraphs: [
          "W sprawach rodzinnych ugoda powinna być szczególnie konkretna i życiowa. Nie wystarczy napisać, że rodzice będą współdziałać dla dobra dziecka. Trzeba ustalić, jak to współdziałanie będzie wyglądało w codziennym życiu.",
          "Ustalenia mogą dotyczyć kontaktów, wakacji, ferii, świąt, odbioru dziecka, alimentów, kosztów dodatkowych, sposobu informowania o chorobie, wyjazdach i sprawach szkolnych.",
          "Dobra ugoda rodzinna powinna minimalizować liczbę przyszłych sporów. Jeżeli pozostawia zbyt wiele niejasności, może stać się tylko kolejnym dokumentem, wokół którego strony będą się kłócić."
        ]
      },
      {
        heading: "Ugoda w sprawach gospodarczych",
        paragraphs: [
          "W sprawach gospodarczych ugoda często dotyczy pieniędzy, terminów i sposobu zakończenia współpracy. Strony mogą ustalić raty, częściowe umorzenie, kompensatę, wykonanie zaległej usługi albo zwrot towaru.",
          "W biznesie szczególnie ważne są daty, kwoty, osoby odpowiedzialne i dokumenty potwierdzające wykonanie. Jeżeli ugoda ma kończyć spór między przedsiębiorcami, powinna być tak napisana, aby dział księgowości lub zarząd wiedzieli dokładnie, co robić.",
          "Mediacja gospodarcza pozwala czasem wypracować rozwiązanie bardziej praktyczne niż wyrok. Sąd może zasądzić kwotę, ale to strony mogą najlepiej ustalić harmonogram, sposób rozliczeń i warunki dalszej współpracy."
        ]
      },
      {
        heading: "Ugoda częściowa",
        paragraphs: [
          "Nie każda mediacja musi zakończyć się pełnym porozumieniem. Czasem strony są w stanie uzgodnić tylko część spraw. Taka ugoda częściowa również może mieć wartość.",
          "Jeżeli strony rozwiążą trzy z pięciu problemów, zakres dalszego sporu się zmniejsza. Sąd, pełnomocnicy i same strony mogą skoncentrować się na tym, co rzeczywiście pozostaje sporne.",
          "Ugoda częściowa bywa szczególnie przydatna w sprawach rodzinnych i gospodarczych, gdzie konflikt składa się z wielu warstw. Nie trzeba rozwiązać wszystkiego naraz, aby mediacja miała sens."
        ]
      },
      {
        heading: "Najczęstsze błędy przy ugodzie",
        paragraphs: [
          "Pierwszy błąd to zbyt ogólne sformułowania. Drugi to wpisanie obowiązków, których nie da się realnie wykonać. Trzeci to brak terminów. Czwarty to brak ustalenia, co stanie się w razie opóźnienia lub zmiany okoliczności.",
          "W sprawach rodzinnych błędem jest pomijanie praktyki dnia codziennego. W sprawach gospodarczych — pomijanie danych płatności, dokumentów rozliczeniowych i osób odpowiedzialnych.",
          "Ugoda powinna być napisana językiem zrozumiałym. Zbyt skomplikowany dokument może utrudniać wykonanie. Zbyt prosty może być nieprecyzyjny. Dobrze przygotowana ugoda łączy jasność i konkret."
        ]
      },
      {
        heading: "Jak przygotować się do rozmowy o ugodzie?",
        paragraphs: [
          "Przed mediacją warto przygotować listę spraw, które muszą zostać uregulowane. Warto też zaznaczyć, które kwestie są najważniejsze, a które mogą być przedmiotem kompromisu.",
          "Dobrym sposobem jest przygotowanie kilku wariantów. W sprawie o zapłatę może to być płatność jednorazowa, raty albo częściowe rozliczenie. W sprawie rodzinnej różne wersje harmonogramu kontaktów.",
          "Mediacja jest bardziej skuteczna, gdy strony myślą nie tylko o tym, czego żądają, ale także o tym, co będzie wykonalne za miesiąc, pół roku i rok."
        ]
      }
    ],
    faq: [
      {
        question: "Czy każda mediacja kończy się ugodą?",
        answer:
          "Nie. Mediacja może zakończyć się ugodą, częściowym porozumieniem albo brakiem porozumienia."
      },
      {
        question: "Czy ugoda mediacyjna może zostać zatwierdzona przez sąd?",
        answer:
          "Tak, jeżeli spełnia wymagania przewidziane dla takiego zatwierdzenia."
      },
      {
        question: "Czy mediator pisze ugodę za strony?",
        answer:
          "Mediator może pomóc uporządkować ustalenia, ale treść porozumienia pochodzi od stron."
      },
      {
        question: "Czy sąd może odmówić zatwierdzenia ugody?",
        answer:
          "Tak, jeżeli ugoda jest sprzeczna z prawem, zasadami współżycia społecznego, zmierza do obejścia prawa albo jest niezrozumiała."
      },
      {
        question: "Czy można zawrzeć ugodę częściową?",
        answer:
          "Tak. Strony mogą porozumieć się tylko w części spraw."
      },
      {
        question: "Czy przy ugodzie warto mieć pełnomocnika?",
        answer:
          "W sprawach bardziej złożonych udział pełnomocnika może pomóc ocenić skutki prawne porozumienia."
      }
    ],
    sources: [sources.civilMediationGov, sources.mediationGov],
    referencesApa6: [
      literature.methodology,
      literature.civil,
      literature.courtOutOfCourt,
      literature.theory
    ],
    internalLinks: commonInternalLinks
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
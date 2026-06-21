from pathlib import Path

path = Path("app/page.tsx")
text = path.read_text()

def replace_once(old: str, new: str, label: str) -> None:
    global text
    if old not in text:
        raise SystemExit(f"Nie znaleziono fragmentu: {label}")
    text = text.replace(old, new, 1)

old_process = '''const processSteps = [
  {
    title: "Opis sprawy",
    text: "Przekazujesz krótki opis konfliktu, liczbę stron, etap sprawy i informację, czy mediacja ma być sądowa, pozasądowa albo online."
  },
  {
    title: "Ustalenie trybu",
    text: "Mediator ustala organizacyjnie, czy sprawa dotyczy mediacji rodzinnej, karnej, cywilnej, gospodarczej lub zdalnej."
  },
  {
    title: "Kontakt ze stronami",
    text: "Ustalane są zasady kontaktu, możliwość udziału stron, termin spotkania i forma prowadzenia mediacji."
  },
  {
    title: "Ugoda albo zakończenie",
    text: "Strony pracują nad rozwiązaniem. Jeżeli dojdzie do porozumienia, możliwe jest przygotowanie ugody mediacyjnej."
  }
];'''

new_process = '''const processSteps = [
  {
    title: "Wysyłasz opis sprawy",
    text: "Podajesz rodzaj konfliktu, liczbę stron, etap postępowania oraz informację, czy sprawa została już skierowana do mediacji."
  },
  {
    title: "Mediator sprawdza informacje",
    text: "Na podstawie wiadomości ustalane są podstawowe kwestie organizacyjne i możliwy tryb dalszego kontaktu."
  },
  {
    title: "Ustalany jest tryb mediacji",
    text: "Mediacja może odbyć się stacjonarnie w Krakowie albo online, jeżeli charakter sprawy i zgoda stron na to pozwalają."
  },
  {
    title: "Strony otrzymują dalsze kroki",
    text: "W zależności od sprawy ustalany jest termin, forma spotkania, zakres potrzebnych danych i dokumentów."
  },
  {
    title: "Protokół albo ugoda",
    text: "Po mediacji sporządzany jest protokół. Jeżeli strony osiągną porozumienie, możliwe jest przygotowanie ugody mediacyjnej."
  }
];'''

replace_once(old_process, new_process, "processSteps")

old_faq = '''const faqItems = [
  {
    question: "Czy mediacja jest poufna?",
    answer:
      "Tak. Mediacja jest postępowaniem poufnym. Poufność pomaga stronom spokojnie rozmawiać o konflikcie i szukać rozwiązania bez dalszej eskalacji."
  },
  {
    question: "Czy możliwa jest mediacja online?",
    answer:
      "Tak, w części spraw możliwa jest mediacja online albo wstępna konsultacja zdalna. Zależy to od rodzaju sprawy, zgody stron i warunków organizacyjnych."
  },
  {
    question: "Czy Fundacja prowadzi mediacje karne?",
    answer:
      "Tak. Fundacja posiada wpis do wykazu instytucji uprawnionych do prowadzenia postępowania mediacyjnego w sprawach karnych."
  },
  {
    question: "Czy mediacja karna jest bezpłatna dla stron?",
    answer:
      "Tak. W sprawach karnych koszty mediacji nie obciążają stron postępowania. Wynagrodzenie mediatora i zwrot wydatków ponosi Skarb Państwa."
  },
  {
    question: "Jak przygotować się do pierwszego kontaktu?",
    answer:
      "Warto podać rodzaj sprawy, liczbę stron, etap postępowania, informację o ewentualnym skierowaniu z sądu lub organu oraz preferowany tryb kontaktu."
  },
  {
    question: "Czy ugoda mediacyjna może zakończyć spór?",
    answer:
      "W wielu sprawach ugoda mediacyjna może uporządkować relacje stron i zakończyć spór. Skutek prawny zależy od rodzaju sprawy oraz właściwej procedury."
  }
];'''

new_faq = '''const faqItems = [
  {
    question: "Czy mediator decyduje, kto ma rację?",
    answer:
      "Nie. Mediator nie wydaje rozstrzygnięcia, nie zastępuje sądu i nie reprezentuje żadnej ze stron. Jego rolą jest prowadzenie rozmowy w sposób bezstronny, poufny i uporządkowany."
  },
  {
    question: "Czy mediacja jest poufna?",
    answer:
      "Tak. Co do zasady mediacja jest poufna. Informacje ujawnione w mediacji nie powinny być wykorzystywane poza jej przebiegiem, z zastrzeżeniem wyjątków wynikających z przepisów prawa."
  },
  {
    question: "Czy mogę skorzystać z mediacji, jeżeli sprawa jest już w sądzie?",
    answer:
      "Tak. Mediacja może odbywać się przed wszczęciem postępowania albo w toku sprawy sądowej, jeżeli pozwalają na to okoliczności danej sprawy."
  },
  {
    question: "Czy możliwa jest mediacja online?",
    answer:
      "Tak. Mediacja może odbywać się online, zwłaszcza gdy strony mieszkają w różnych miejscowościach albo za granicą."
  },
  {
    question: "Czy mediacja karna jest bezpłatna dla stron?",
    answer:
      "Tak. W sprawach karnych koszty mediacji nie obciążają stron postępowania. Wynagrodzenie mediatora i zwrot wydatków ponosi Skarb Państwa."
  },
  {
    question: "Czy muszę wiedzieć, czy moja sprawa jest rodzinna, cywilna, karna czy gospodarcza?",
    answer:
      "Nie. Wystarczy krótko opisać sytuację. Mediator wskaże, jakie informacje są potrzebne organizacyjnie do dalszego kontaktu."
  }
];'''

replace_once(old_faq, new_faq, "faqItems")

old_hero = '''          <h1>Mediator sądowy w Krakowie.</h1>

          <p className="lead">
            Mediacje rodzinne, karne, cywilne, gospodarcze i online. Poufna,
            uporządkowana rozmowa prowadzona przez bezstronnego mediatora — z
            możliwością wypracowania ugody i ograniczenia eskalacji sporu.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${phoneHref}`}>
              Umów konsultację
            </a>
            <a className="button button-secondary" href={`mailto:${email}`}>
              Wyślij opis sprawy
            </a>
            <a className="button button-secondary" href="/cennik">
              Sprawdź cennik
            </a>
            <a className="button button-secondary" href="/blog">
              Czytaj blog
            </a>
            <a className="button button-secondary" href="#kwalifikacje">
              Sprawdź kwalifikacje
            </a>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>Stały mediator</strong>
              <span>Sąd Okręgowy w Krakowie</span>
            </div>
            <div>
              <strong>Mediacje karne</strong>
              <span>0 zł dla stron postępowania</span>
            </div>
            <div>
              <strong>Blog SEO</strong>
              <span>wiedza o mediacji, kosztach i procedurach</span>
            </div>
          </div>'''

new_hero = '''          <h1>
            Mediator sądowy w Krakowie — mediacje rodzinne, karne, cywilne i
            gospodarcze.
          </h1>

          <p className="lead">
            Pomagam stronom uporządkować konflikt, przygotować rozmowę i — jeżeli
            to możliwe — wypracować ugodę bez eskalacji sporu. Prowadzę mediacje
            stacjonarne w Krakowie oraz online, także w języku polskim,
            angielskim i ukraińskim.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#kontakt">
              Umów mediację
            </a>
            <a className="button button-secondary" href={`mailto:${email}`}>
              Wyślij opis sprawy
            </a>
            <a className="button button-secondary" href="/cennik">
              Sprawdź koszt mediacji
            </a>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>Stały mediator</strong>
              <span>Sąd Okręgowy w Krakowie</span>
            </div>
            <div>
              <strong>Mediacje karne</strong>
              <span>0 zł dla stron postępowania</span>
            </div>
            <div>
              <strong>PL / EN / UA</strong>
              <span>kontakt po polsku, angielsku i ukraińsku</span>
            </div>
          </div>'''

replace_once(old_hero, new_hero, "hero")

insert_after_trust = '''      <section className="trust">
        <div className="trust-inner">
          <div className="trust-item">
            <strong>Stały mediator</strong>
            wpis przy Sądzie Okręgowym w Krakowie
          </div>
          <div className="trust-item">
            <strong>Mediacje karne</strong>
            koszt mediacji ponosi Skarb Państwa
          </div>
          <div className="trust-item">
            <strong>Kraków</strong>
            ul. Kielecka 2/53, okolice Ronda Mogilskiego
          </div>
          <div className="trust-item">
            <strong>Trzy języki</strong>
            wersja polska, angielska i ukraińska
          </div>
        </div>
      </section>'''

new_after_trust = insert_after_trust + '''

      <section className="section compact">
        <div className="feature green">
          <div>
            <p className="section-label">Pierwszy kontakt</p>
            <h2>Nie wiesz, jaki rodzaj mediacji wybrać?</h2>
          </div>

          <div>
            <p>
              Nie musisz samodzielnie kwalifikować swojej sprawy. W wiadomości
              opisz krótko sytuację, etap postępowania, liczbę stron oraz
              informację, czy sprawa została już skierowana do mediacji przez
              sąd, prokuraturę albo Policję.
            </p>
            <p>
              Na tej podstawie mediator wskaże, jakie informacje są potrzebne
              organizacyjnie do dalszego kontaktu i jaki tryb mediacji może być
              właściwy: rodzinny, karny, cywilny, gospodarczy albo online.
            </p>

            <div className="labels">
              <span className="label">rodzinna</span>
              <span className="label">karna</span>
              <span className="label">cywilna</span>
              <span className="label">gospodarcza</span>
              <span className="label">online</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Rola mediatora"
          title="Mediator nie jest sędzią."
          text="Mediator nie rozstrzyga sporu, nie reprezentuje żadnej ze stron i nie narzuca rozwiązania. Jego zadaniem jest prowadzenie rozmowy w sposób bezstronny, poufny i uporządkowany."
        />

        <div className="grid-3">
          <article className="card">
            <span className="tag">Bezstronność</span>
            <h3>Neutralne prowadzenie rozmowy</h3>
            <p>
              Mediator dba o strukturę spotkania i warunki rozmowy, ale nie
              wskazuje, która strona ma rację.
            </p>
          </article>

          <article className="card">
            <span className="tag">Poufność</span>
            <h3>Bezpieczna przestrzeń rozmowy</h3>
            <p>
              Mediacja pozwala omówić konflikt w sposób spokojny i ograniczyć
              dalszą eskalację sporu.
            </p>
          </article>

          <article className="card card-gold">
            <span className="tag">Ugoda</span>
            <h3>Możliwe porozumienie stron</h3>
            <p>
              Jeżeli strony osiągną porozumienie, możliwe jest przygotowanie
              ugody mediacyjnej odpowiadającej ustaleniom stron.
            </p>
          </article>
        </div>
      </section>'''

replace_once(insert_after_trust, new_after_trust, "sekcje po trust")

old_process_section = '''      <section className="section" id="proces">
        <SectionHeading
          label="Jak działa mediacja"
          title="Prosty proces, spokojna struktura rozmowy."
          text="Mediacja jest pokazana jako czytelna procedura: pierwszy kontakt, ustalenie trybu, organizacja spotkania i praca nad rozwiązaniem."
        />

        <div className="grid-4 process">
          {processSteps.map((item) => (
            <article className="card process-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>'''

new_process_section = '''      <section className="section" id="proces">
        <SectionHeading
          label="Jak wygląda kontakt z mediatorem"
          title="Prosty proces, spokojna struktura rozmowy."
          text="Od pierwszej wiadomości do ustalenia trybu mediacji użytkownik powinien wiedzieć, co stanie się dalej i jakie informacje będą potrzebne."
        />

        <div className="grid-4 process">
          {processSteps.map((item) => (
            <article className="card process-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>'''

replace_once(old_process_section, new_process_section, "sekcja proces")

old_contact = '''      <section className="section" id="kontakt">
        <div className="contact-panel">
          <div>
            <p className="section-label">Kontakt</p>
            <h2>Opisz sprawę i ustal możliwy tryb mediacji.</h2>
            <p>
              W wiadomości podaj rodzaj sprawy, liczbę stron, etap postępowania,
              informację o ewentualnym skierowaniu z sądu albo organu oraz
              preferowany tryb mediacji. W sprawach kosztów możesz skorzystać
              także z kalkulatora mediacji.
            </p>
          </div>

          <div className="contact-box">
            <span className="contact-line">
              <strong>Telefon:</strong>{" "}
              <a href={`tel:${phoneHref}`}>{phone}</a>
            </span>
            <span className="contact-line">
              <strong>E-mail:</strong> <a href={`mailto:${email}`}>{email}</a>
            </span>
            <span className="contact-line">
              <strong>Adres:</strong> ul. Kielecka 2/53, 31-526 Kraków
            </span>

            <div className="hero-actions">
              <a className="button button-secondary" href={`tel:${phoneHref}`}>
                Zadzwoń
              </a>
              <a className="button button-secondary" href={`mailto:${email}`}>
                Wyślij e-mail
              </a>
              <a className="button button-secondary" href="/cennik">
                Cennik mediacji
              </a>
              <a className="button button-secondary" href="/blog">
                Blog
              </a>
            </div>
          </div>
        </div>
      </section>'''

new_contact = '''      <section className="section" id="kontakt">
        <div className="contact-panel">
          <div>
            <p className="section-label">Kontakt</p>
            <h2>Opisz sprawę do mediacji.</h2>
            <p>
              Nie musisz znać przepisów ani właściwego rodzaju mediacji. Wystarczy
              krótki opis sytuacji. Mediator odpowie, jakie informacje są
              potrzebne do dalszego kontaktu i czy sprawa może zostać wstępnie
              zakwalifikowana do mediacji.
            </p>

            <div className="labels">
              <span className="label">rodzaj sprawy</span>
              <span className="label">liczba stron</span>
              <span className="label">etap postępowania</span>
              <span className="label">tryb kontaktu</span>
            </div>
          </div>

          <div className="contact-box">
            <span className="contact-line">
              <strong>Telefon:</strong>{" "}
              <a href={`tel:${phoneHref}`}>{phone}</a>
            </span>
            <span className="contact-line">
              <strong>E-mail:</strong> <a href={`mailto:${email}`}>{email}</a>
            </span>
            <span className="contact-line">
              <strong>Adres:</strong> ul. Kielecka 2/53, 31-526 Kraków
            </span>

            <div className="grid-3">
              <article className="card">
                <span className="tag">1</span>
                <h3>Rodzaj sprawy</h3>
                <p>Rodzinna, karna, cywilna, gospodarcza, online albo „nie wiem”.</p>
              </article>

              <article className="card">
                <span className="tag">2</span>
                <h3>Etap sprawy</h3>
                <p>Czy sprawa jest już w sądzie, prokuraturze albo Policji?</p>
              </article>

              <article className="card">
                <span className="tag">3</span>
                <h3>Kontakt</h3>
                <p>Podaj telefon, e-mail oraz preferowany sposób kontaktu.</p>
              </article>
            </div>

            <p>
              Przy pierwszej wiadomości warto podać: rodzaj sprawy, liczbę stron,
              etap postępowania, informację o skierowaniu do mediacji oraz
              preferowany tryb spotkania.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href={`tel:${phoneHref}`}>
                Zadzwoń
              </a>
              <a
                className="button button-secondary"
                href={`mailto:${email}?subject=Opis%20sprawy%20do%20mediacji&body=Dzie%C5%84%20dobry,%0A%0AChcia%C5%82bym%2Fchcia%C5%82abym%20opisa%C4%87%20spraw%C4%99%20do%20mediacji.%0A%0ARodzaj%20sprawy:%20%0ALiczba%20stron:%20%0ACzy%20sprawa%20jest%20w%20s%C4%85dzie%2Fprokuraturze%2FPolicji:%20%0ACzy%20sprawa%20zosta%C5%82a%20skierowana%20do%20mediacji:%20%0APreferowany%20tryb%20kontaktu:%20%0AKr%C3%B3tki%20opis%20sprawy:%20%0A%0A`}
              >
                Wyślij opis sprawy
              </a>
              <a className="button button-secondary" href="/cennik">
                Sprawdź cennik
              </a>
            </div>

            <p>
              Przesłanie wiadomości nie oznacza zawarcia umowy ani rozpoczęcia
              mediacji. Dane są wykorzystywane w celu odpowiedzi na zapytanie.
            </p>
          </div>
        </div>
      </section>'''

replace_once(old_contact, new_contact, "kontakt")

path.write_text(text)
print("OK: app/page.tsx zostal zaktualizowany.")

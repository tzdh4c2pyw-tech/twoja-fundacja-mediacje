from pathlib import Path

path = Path("app/page.tsx")
text = path.read_text()

insert_after = '''      <section className="trust">
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

new_section = insert_after + '''

      <section className="section" id="sytuacje">
        <SectionHeading
          label="Wybierz swoją sytuację"
          title="Nie musisz znać rodzaju mediacji. Wybierz problem, od którego chcesz zacząć."
          text="Poniższe ścieżki pomagają szybciej przejść od problemu do właściwego kontaktu: rodzinnego, karnego, cywilnego, gospodarczego, online albo wielojęzycznego."
        />

        <div className="grid-3">
          <article className="card">
            <span className="tag">Rodzina</span>
            <h3>Kontakty z dzieckiem, alimenty albo rozwód</h3>
            <p>
              Sprawy rodzinne wymagają spokojnego uporządkowania rozmowy:
              opieka, kontakty, alimenty, plan wychowawczy, rozstanie albo
              podział obowiązków.
            </p>
            <a className="card-link" href="/mediacje-rodzinne-krakow">
              Mediacje rodzinne →
            </a>
          </article>

          <article className="card card-gold">
            <span className="tag">Karne</span>
            <h3>Sprawa karna, szkoda, przeprosiny albo zadośćuczynienie</h3>
            <p>
              W sprawach karnych mediacja może dotyczyć skutków czynu,
              naprawienia szkody, przeprosin, zadośćuczynienia i warunków
              porozumienia.
            </p>
            <a className="card-link" href="/mediacje-karne-krakow">
              Mediacje karne →
            </a>
          </article>

          <article className="card">
            <span className="tag">Cywilne</span>
            <h3>Spór o zapłatę, umowę, sąsiada albo rozliczenia</h3>
            <p>
              Mediacja cywilna może pomóc w sprawach prywatnych, majątkowych,
              sąsiedzkich, umownych i rozliczeniowych.
            </p>
            <a className="card-link" href="#cywilne">
              Spory cywilne →
            </a>
          </article>

          <article className="card">
            <span className="tag">Biznes</span>
            <h3>Kontrahent, faktura, wspólnicy albo spór firmowy</h3>
            <p>
              Mediacje gospodarcze są dla przedsiębiorców, którzy chcą omówić
              rozliczenia, umowy, odpowiedzialność albo warunki zakończenia
              sporu.
            </p>
            <a className="card-link" href="/mediacje-gospodarcze-krakow">
              Mediacje gospodarcze →
            </a>
          </article>

          <article className="card card-dark">
            <span className="tag">Online</span>
            <h3>Strony są w różnych miastach albo państwach</h3>
            <p>
              Mediacja online może być właściwa, gdy strony mieszkają daleko,
              potrzebują szybkiego kontaktu albo nie mogą spotkać się w
              Krakowie.
            </p>
            <a className="card-link" href="/mediacje-online">
              Mediacje online →
            </a>
          </article>

          <article className="card">
            <span className="tag">Nie wiem</span>
            <h3>Nie wiem, czy moja sprawa nadaje się do mediacji</h3>
            <p>
              Nie musisz samodzielnie kwalifikować sprawy. Opisz sytuację,
              liczbę stron, etap postępowania i preferowany sposób kontaktu.
            </p>
            <a className="card-link" href="/kontakt">
              Opisz sprawę →
            </a>
          </article>
        </div>
      </section>'''

if insert_after not in text:
    raise SystemExit("Nie znaleziono sekcji trust. Patch przerwany.")

text = text.replace(insert_after, new_section, 1)

# Add navigation link to section if it is not already present.
text = text.replace(
    '''            <a href="#zakres">Zakres</a>
            <a href="#proces">Jak działa</a>''',
    '''            <a href="#sytuacje">Sytuacje</a>
            <a href="#zakres">Zakres</a>
            <a href="#proces">Jak działa</a>''',
    1
)

# Strengthen selected CTAs from mailto to dedicated contact page.
text = text.replace(
    '''            <a className="button button-secondary" href={`mailto:${email}`}>
              Wyślij opis sprawy
            </a>''',
    '''            <a className="button button-secondary" href="/kontakt">
              Wyślij opis sprawy
            </a>''',
    1
)

text = text.replace(
    '''            <a className="button button-primary" href="#kontakt">
              Umów mediację
            </a>''',
    '''            <a className="button button-primary" href="/kontakt">
              Umów mediację
            </a>''',
    1
)

path.write_text(text)
print("OK: added situation paths section and strengthened CTAs.")

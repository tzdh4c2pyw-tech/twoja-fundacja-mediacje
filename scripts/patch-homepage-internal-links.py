from pathlib import Path

path = Path("app/page.tsx")
text = path.read_text()

section = '''
      <section className="section compact" id="mapa-uslug">
        <div className="feature green">
          <div>
            <p className="section-label">Mapa usług</p>
            <h2>Szybkie przejście do właściwej mediacji.</h2>
          </div>

          <div>
            <p>
              Wybierz rodzaj sprawy albo sytuację procesową. Strony usługowe
              zawierają bardziej szczegółowe informacje o zakresie mediacji,
              kosztach, procesie i pierwszym kontakcie.
            </p>

            <div className="service-link-grid">
              <a href="/mediator-sadowy-krakow">
                <strong>Mediator sądowy Kraków</strong>
                <span>Mediacje sądowe, pozasądowe i online</span>
              </a>

              <a href="/mediacje-rodzinne-krakow">
                <strong>Mediacje rodzinne</strong>
                <span>kontakty, alimenty, rozwód, opieka</span>
              </a>

              <a href="/mediacje-karne-krakow">
                <strong>Mediacje karne</strong>
                <span>pokrzywdzony, sprawca, szkoda, przeprosiny</span>
              </a>

              <a href="/mediacje-cywilne-krakow">
                <strong>Mediacje cywilne</strong>
                <span>zapłata, umowy, rozliczenia, sprawy prywatne</span>
              </a>

              <a href="/mediacje-gospodarcze-krakow">
                <strong>Mediacje gospodarcze</strong>
                <span>kontrahenci, wspólnicy, faktury, umowy</span>
              </a>

              <a href="/mediacje-online">
                <strong>Mediacje online</strong>
                <span>kontakt zdalny w Polsce i za granicą</span>
              </a>

              <a href="/mediacje-dla-pelnomocnikow">
                <strong>Dla pełnomocników</strong>
                <span>kontakt dla adwokatów i radców prawnych</span>
              </a>

              <a href="/mediacje-dla-cudzoziemcow">
                <strong>Dla cudzoziemców</strong>
                <span>kontakt PL / EN / UA</span>
              </a>
            </div>

            <div className="hero-actions">
              <a className="button button-secondary" href="/kontakt">
                Nie wiem, którą mediację wybrać
              </a>
              <a className="button button-secondary" href="/cennik">
                Sprawdź cennik
              </a>
            </div>
          </div>
        </div>
      </section>
'''

insert_before = '''      <section className="section" id="kontakt">'''

if 'id="mapa-uslug"' not in text:
    if insert_before not in text:
        raise SystemExit("Nie znaleziono sekcji kontaktu jako punktu wstawienia.")
    text = text.replace(insert_before, section + "\n" + insert_before, 1)

path.write_text(text)
print("OK: homepage internal service links added.")

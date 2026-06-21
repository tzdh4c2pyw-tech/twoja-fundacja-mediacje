from pathlib import Path

path = Path("app/page.tsx")
text = path.read_text()

old_footer = '''      <footer className="footer">
        <p>© {new Date().getFullYear()} Fundacja Mediacji Sądowej i Pozasądowej</p>
        <p>Kraków · mediacje sądowe i pozasądowe</p>
      </footer>'''

new_footer = '''      <footer className="footer footer-expanded">
        <div className="footer-grid">
          <div>
            <p className="footer-kicker">Fundacja Mediacji Sądowej i Pozasądowej</p>
            <h2>Mediator sądowy w Krakowie</h2>
            <p>
              Mediacje rodzinne, karne, cywilne, gospodarcze i online.
              Kontakt w języku polskim, angielskim i ukraińskim.
            </p>
          </div>

          <div>
            <h3>Usługi</h3>
            <a href="/mediator-sadowy-krakow">Mediator sądowy Kraków</a>
            <a href="/mediacje-rodzinne-krakow">Mediacje rodzinne</a>
            <a href="/mediacje-karne-krakow">Mediacje karne</a>
            <a href="/mediacje-cywilne-krakow">Mediacje cywilne</a>
            <a href="/mediacje-gospodarcze-krakow">Mediacje gospodarcze</a>
            <a href="/mediacje-online">Mediacje online</a>
          </div>

          <div>
            <h3>Dla kogo</h3>
            <a href="/mediacje-dla-pelnomocnikow">Dla pełnomocników</a>
            <a href="/mediacje-dla-cudzoziemcow">Dla cudzoziemców</a>
            <a href="/en">English version</a>
            <a href="/uk">Українська версія</a>
            <a href="/cennik">Cennik mediacji</a>
            <a href="/kontakt">Kontakt</a>
          </div>

          <div>
            <h3>Kontakt</h3>
            <p>ul. Kielecka 2/53, 31-526 Kraków</p>
            <a href="tel:+48883040483">883 040 483</a>
            <a href="mailto:mediacje@twojafundacja.pl">mediacje@twojafundacja.pl</a>
            <a href="/kontakt">Opisz sprawę do mediacji</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Fundacja Mediacji Sądowej i Pozasądowej</span>
          <span>Kraków · mediacje sądowe i pozasądowe</span>
        </div>
      </footer>'''

if old_footer not in text:
    raise SystemExit("Nie znaleziono starego footera. Sprawdź app/page.tsx.")

text = text.replace(old_footer, new_footer, 1)

path.write_text(text)
print("OK: expanded homepage footer added.")

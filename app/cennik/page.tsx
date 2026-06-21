"use client";

import { useMemo, useState } from "react";

const phone = "883 040 483";
const phoneHref = "+48883040483";
const email = "mediacje@twojafundacja.pl";

type MediationMode = "property" | "nonProperty" | "criminal" | "private";

function formatMoney(value: number) {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    maximumFractionDigits: 0
  }).format(value);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function calculatePropertyMediation(disputeValue: number) {
  if (!disputeValue || disputeValue <= 0) {
    return 300;
  }

  if (disputeValue <= 200000) {
    return Math.ceil(clamp(disputeValue * 0.02, 300, 4000));
  }

  return Math.ceil(clamp(4000 + (disputeValue - 200000) * 0.01, 4000, 8000));
}

function calculateNonPropertyMediation(meetings: number, noMeeting: boolean) {
  if (noMeeting) {
    return 300;
  }

  const safeMeetings = Math.max(1, meetings || 1);
  return Math.min(300 + Math.max(0, safeMeetings - 1) * 200, 900);
}

function calculatePrivateMediation(
  sessionPrice: number,
  sessions: number,
  parties: number
) {
  const safeSessionPrice = Math.max(0, sessionPrice || 0);
  const safeSessions = Math.max(1, sessions || 1);
  const safeParties = Math.max(1, parties || 1);

  const total = safeSessionPrice * safeSessions;

  return {
    total,
    perParty: total / safeParties
  };
}

export default function PricingPage() {
  const [mode, setMode] = useState<MediationMode>("property");

  const [disputeValue, setDisputeValue] = useState(50000);
  const [nonPropertyMeetings, setNonPropertyMeetings] = useState(1);
  const [noMeeting, setNoMeeting] = useState(false);

  const [roomCost, setRoomCost] = useState(0);
  const [correspondenceCost, setCorrespondenceCost] = useState(0);
  const [vat, setVat] = useState(false);

  const [privateSessionPrice, setPrivateSessionPrice] = useState(300);
  const [privateSessions, setPrivateSessions] = useState(1);
  const [privateParties, setPrivateParties] = useState(2);

  const statutoryCivilBase = useMemo(() => {
    if (mode === "property") {
      return calculatePropertyMediation(disputeValue);
    }

    if (mode === "nonProperty") {
      return calculateNonPropertyMediation(nonPropertyMeetings, noMeeting);
    }

    return 0;
  }, [mode, disputeValue, nonPropertyMeetings, noMeeting]);

  const allowedRoomCost = Math.min(Math.max(roomCost || 0, 0), 110);
  const allowedCorrespondenceCost = Math.min(
    Math.max(correspondenceCost || 0, 0),
    50
  );

  const civilSubtotal =
    statutoryCivilBase + allowedRoomCost + allowedCorrespondenceCost;

  const civilTotal = vat ? Math.ceil(civilSubtotal * 1.23) : civilSubtotal;

  const privateResult = calculatePrivateMediation(
    privateSessionPrice,
    privateSessions,
    privateParties
  );

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cennik mediacji i kalkulator kosztów mediacji",
    provider: {
      "@type": "LocalBusiness",
      name: "Fundacja Mediacji Sądowej i Pozasądowej",
      telephone: "+48883040483",
      email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Kielecka 2/53",
        postalCode: "31-526",
        addressLocality: "Kraków",
        addressCountry: "PL"
      }
    },
    areaServed: {
      "@type": "City",
      name: "Kraków"
    },
    serviceType: [
      "mediacje sądowe",
      "mediacje rodzinne",
      "mediacje karne",
      "mediacje cywilne",
      "mediacje gospodarcze",
      "mediacje online",
      "mediacje pozasądowe"
    ],
    url: "https://www.twojafundacja.pl/cennik"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      <div className="topbar">
        <nav className="nav">
          <a className="brand" href="/" aria-label="Strona główna">
            <span className="brand-mark">FM</span>
            <span>
              <span className="brand-title">
                Fundacja Mediacji Sądowej i Pozasądowej
              </span>
              <span className="brand-subtitle">
                Cennik mediacji · kalkulator kosztów · Kraków
              </span>
            </span>
          </a>

          <div className="nav-links">
            <a href="/">Strona główna</a>
            <a href="/#kwalifikacje">Kwalifikacje</a>
            <a href="#kalkulator">Kalkulator</a>
            <a href="#podstawa-prawna">Podstawa prawna</a>
            <a href="#faq">FAQ</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </nav>
      </div>

      <section className="pricing-hero">
        <div className="pricing-hero-card">
          <span className="eyebrow">Cennik mediacji · Kraków · online</span>

          <h1>Cennik mediacji i kalkulator kosztów.</h1>

          <p className="lead">
            Sprawdź orientacyjny koszt mediacji sądowej w sprawach cywilnych,
            rodzinnych i gospodarczych według stawek wynikających z
            rozporządzenia Ministra Sprawiedliwości. W sprawach karnych koszty
            mediacji nie obciążają stron — ponosi je Skarb Państwa.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#kalkulator">
              Oblicz koszt mediacji
            </a>
            <a className="button button-secondary" href="#karne">
              Mediacja karna — 0 zł
            </a>
            <a className="button button-secondary" href={`mailto:${email}`}>
              Zapytaj o mediację
            </a>
          </div>

          <div className="pricing-stats">
            <div>
              <strong>300 zł</strong>
              <span>minimum w sprawach majątkowych</span>
            </div>
            <div>
              <strong>8000 zł</strong>
              <span>maksimum w sprawach majątkowych</span>
            </div>
            <div>
              <strong>900 zł</strong>
              <span>maksimum w sprawach niemajątkowych</span>
            </div>
            <div>
              <strong>0 zł</strong>
              <span>dla stron w sprawach karnych</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="kalkulator">
        <div className="section-heading">
          <div>
            <p className="section-label">Kalkulator</p>
            <h2>Oblicz orientacyjny koszt mediacji.</h2>
          </div>
          <p>
            Kalkulator rozdziela mediacje sądowe w sprawach majątkowych,
            niemajątkowych, mediacje karne oraz mediacje pozasądowe. Wynik ma
            charakter informacyjny i nie zastępuje indywidualnego ustalenia
            kosztów w konkretnej sprawie.
          </p>
        </div>

        <div className="calculator-shell">
          <div className="calculator-tabs" role="tablist">
            <button
              className={mode === "property" ? "active" : ""}
              onClick={() => setMode("property")}
              type="button"
            >
              Sprawa majątkowa
            </button>

            <button
              className={mode === "nonProperty" ? "active" : ""}
              onClick={() => setMode("nonProperty")}
              type="button"
            >
              Sprawa niemajątkowa
            </button>

            <button
              className={mode === "criminal" ? "active" : ""}
              onClick={() => setMode("criminal")}
              type="button"
            >
              Sprawa karna
            </button>

            <button
              className={mode === "private" ? "active" : ""}
              onClick={() => setMode("private")}
              type="button"
            >
              Mediacja pozasądowa
            </button>
          </div>

          <div className="calculator-grid">
            <div className="calculator-panel">
              {mode === "property" && (
                <>
                  <h3>Sprawa o prawa majątkowe</h3>
                  <p>
                    Dotyczy spraw, w których można określić wartość przedmiotu
                    sporu, np. zapłata, rozliczenia, zobowiązania, roszczenia,
                    umowy albo spory gospodarcze.
                  </p>

                  <label className="field">
                    <span>Wartość przedmiotu sporu</span>
                    <input
                      type="number"
                      min="0"
                      step="1000"
                      value={disputeValue}
                      onChange={(event) =>
                        setDisputeValue(Number(event.target.value))
                      }
                    />
                  </label>

                  <div className="quick-values">
                    {[10000, 50000, 100000, 200000, 500000, 1000000].map(
                      (value) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setDisputeValue(value)}
                        >
                          {formatMoney(value)}
                        </button>
                      )
                    )}
                  </div>

                  <div className="legal-note">
                    Do 200 000 zł: 2% wartości przedmiotu sporu, nie mniej niż
                    300 zł i nie więcej niż 4000 zł. Powyżej 200 000 zł: 4000 zł
                    oraz 1% od nadwyżki ponad 200 000 zł, nie więcej niż 8000 zł.
                  </div>
                </>
              )}

              {mode === "nonProperty" && (
                <>
                  <h3>Sprawa niemajątkowa albo bez możliwej wyceny</h3>
                  <p>
                    Dotyczy spraw, w których wartości przedmiotu sporu nie da
                    się ustalić, oraz spraw o prawa niemajątkowe. W praktyce
                    może dotyczyć części spraw rodzinnych i organizacyjnych.
                  </p>

                  <label className="checkbox-field">
                    <input
                      type="checkbox"
                      checked={noMeeting}
                      onChange={(event) => setNoMeeting(event.target.checked)}
                    />
                    <span>Mediacja bez posiedzenia mediacyjnego</span>
                  </label>

                  {!noMeeting && (
                    <label className="field">
                      <span>Liczba posiedzeń mediacyjnych</span>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        step="1"
                        value={nonPropertyMeetings}
                        onChange={(event) =>
                          setNonPropertyMeetings(Number(event.target.value))
                        }
                      />
                    </label>
                  )}

                  <div className="legal-note">
                    Pierwsze posiedzenie: 300 zł. Każde kolejne: 200 zł.
                    Łącznie nie więcej niż 900 zł. Bez posiedzenia
                    mediacyjnego: 300 zł.
                  </div>
                </>
              )}

              {mode === "criminal" && (
                <>
                  <h3>Mediacja w sprawie karnej</h3>
                  <p>
                    W sprawach karnych koszty postępowania mediacyjnego nie
                    obciążają stron. Wynagrodzenie mediatora i zwrot wydatków
                    związanych z przeprowadzeniem mediacji ponosi Skarb Państwa.
                  </p>

                  <div className="criminal-box" id="karne">
                    <span>Koszt mediacji karnej dla stron</span>
                    <strong>0 zł</strong>
                    <p>
                      Dotyczy mediacji prowadzonej w trybie sprawy karnej, na
                      podstawie skierowania właściwego organu.
                    </p>
                  </div>

                  <div className="legal-note">
                    Informacja dotyczy kosztów mediacji w postępowaniu karnym.
                    Strony nie ponoszą kosztów wynagrodzenia mediatora ani
                    zwrotu wydatków związanych z przeprowadzeniem mediacji.
                  </div>
                </>
              )}

              {mode === "private" && (
                <>
                  <h3>Mediacja pozasądowa</h3>
                  <p>
                    Przy mediacji pozasądowej wysokość wynagrodzenia wynika z
                    cennika ośrodka mediacyjnego albo z ustaleń stron z
                    mediatorem przed rozpoczęciem mediacji.
                  </p>

                  <label className="field">
                    <span>Ustalona cena jednego spotkania</span>
                    <input
                      type="number"
                      min="0"
                      step="50"
                      value={privateSessionPrice}
                      onChange={(event) =>
                        setPrivateSessionPrice(Number(event.target.value))
                      }
                    />
                  </label>

                  <label className="field">
                    <span>Liczba spotkań</span>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      value={privateSessions}
                      onChange={(event) =>
                        setPrivateSessions(Number(event.target.value))
                      }
                    />
                  </label>

                  <label className="field">
                    <span>Liczba stron dzielących koszt</span>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      value={privateParties}
                      onChange={(event) =>
                        setPrivateParties(Number(event.target.value))
                      }
                    />
                  </label>

                  <div className="legal-note">
                    Ten moduł nie pokazuje stawki ustawowej. Służy do
                    orientacyjnego obliczenia kosztu mediacji pozasądowej według
                    indywidualnie ustalonej ceny spotkania.
                  </div>
                </>
              )}

              {(mode === "property" || mode === "nonProperty") && (
                <div className="expenses-grid">
                  <label className="field">
                    <span>Najem pomieszczenia — maks. 110 zł</span>
                    <input
                      type="number"
                      min="0"
                      max="110"
                      step="10"
                      value={roomCost}
                      onChange={(event) =>
                        setRoomCost(Number(event.target.value))
                      }
                    />
                  </label>

                  <label className="field">
                    <span>Korespondencja — maks. 50 zł</span>
                    <input
                      type="number"
                      min="0"
                      max="50"
                      step="10"
                      value={correspondenceCost}
                      onChange={(event) =>
                        setCorrespondenceCost(Number(event.target.value))
                      }
                    />
                  </label>

                  <label className="checkbox-field">
                    <input
                      type="checkbox"
                      checked={vat}
                      onChange={(event) => setVat(event.target.checked)}
                    />
                    <span>Dolicz VAT 23%, jeżeli ma zastosowanie</span>
                  </label>
                </div>
              )}
            </div>

            <aside className="calculator-result">
              <p className="section-label">Wynik</p>

              {mode === "property" || mode === "nonProperty" ? (
                <>
                  <div className="result-main">
                    <span>Szacowany koszt mediacji</span>
                    <strong>{formatMoney(civilTotal)}</strong>
                  </div>

                  <div className="result-lines">
                    <div>
                      <span>Wynagrodzenie mediatora</span>
                      <strong>{formatMoney(statutoryCivilBase)}</strong>
                    </div>

                    <div>
                      <span>Najem pomieszczenia</span>
                      <strong>{formatMoney(allowedRoomCost)}</strong>
                    </div>

                    <div>
                      <span>Korespondencja</span>
                      <strong>{formatMoney(allowedCorrespondenceCost)}</strong>
                    </div>

                    {vat && (
                      <div>
                        <span>VAT</span>
                        <strong>
                          {formatMoney(civilTotal - civilSubtotal)}
                        </strong>
                      </div>
                    )}
                  </div>

                  <p className="result-disclaimer">
                    Wynik dotyczy mediacji w postępowaniu cywilnym wszczętym na
                    podstawie skierowania sądu. Przejazdy i inne udokumentowane
                    wydatki, jeżeli wystąpią, mogą wymagać odrębnego rozliczenia.
                  </p>
                </>
              ) : null}

              {mode === "criminal" ? (
                <>
                  <div className="result-main">
                    <span>Koszt mediacji karnej dla stron</span>
                    <strong>0 zł</strong>
                  </div>

                  <p className="result-disclaimer">
                    W sprawach karnych koszty mediacji nie obciążają stron
                    postępowania. Ponosi je Skarb Państwa.
                  </p>
                </>
              ) : null}

              {mode === "private" ? (
                <>
                  <div className="result-main">
                    <span>Szacowany koszt łączny</span>
                    <strong>{formatMoney(privateResult.total)}</strong>
                  </div>

                  <div className="result-lines">
                    <div>
                      <span>Orientacyjnie na jedną stronę</span>
                      <strong>{formatMoney(privateResult.perParty)}</strong>
                    </div>

                    <div>
                      <span>Liczba spotkań</span>
                      <strong>{privateSessions}</strong>
                    </div>

                    <div>
                      <span>Liczba stron</span>
                      <strong>{privateParties}</strong>
                    </div>
                  </div>

                  <p className="result-disclaimer">
                    W mediacji pozasądowej koszt powinien być uzgodniony ze
                    stronami przed rozpoczęciem mediacji.
                  </p>
                </>
              ) : null}

              <div className="hero-actions">
                <a className="button button-primary" href={`tel:${phoneHref}`}>
                  Zadzwoń
                </a>
                <a className="button button-secondary" href={`mailto:${email}`}>
                  Zapytaj o koszt
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section" id="podstawa-prawna">
        <div className="section-heading">
          <div>
            <p className="section-label">Podstawa prawna</p>
            <h2>Jak ustalane są koszty mediacji?</h2>
          </div>
          <p>
            Cennik rozróżnia mediacje sądowe w sprawach cywilnych, rodzinnych i
            gospodarczych, mediacje karne oraz mediacje pozasądowe. Dla każdego
            trybu obowiązują inne zasady.
          </p>
        </div>

        <div className="grid-3">
          <article className="card card-gold">
            <span className="tag">Cywilne</span>
            <h3>Sprawy majątkowe</h3>
            <p>
              Do 200 000 zł wynagrodzenie mediatora wynosi 2% wartości
              przedmiotu sporu, minimum 300 zł i maksimum 4000 zł. Powyżej
              200 000 zł stosuje się 4000 zł oraz 1% od nadwyżki, maksymalnie
              8000 zł.
            </p>
          </article>

          <article className="card">
            <span className="tag">Rodzinne</span>
            <h3>Sprawy niemajątkowe</h3>
            <p>
              W sprawach niemajątkowych albo bez możliwej wyceny wynagrodzenie
              wynosi 300 zł za pierwsze posiedzenie i 200 zł za każde kolejne,
              ale łącznie nie więcej niż 900 zł.
            </p>
          </article>

          <article className="card card-dark">
            <span className="tag">Karne</span>
            <h3>0 zł dla stron</h3>
            <p>
              W sprawach karnych koszty mediacji nie obciążają stron
              postępowania. Wynagrodzenie mediatora i zwrot wydatków ponosi
              Skarb Państwa.
            </p>
          </article>
        </div>

        <div className="legal-sources">
          <h3>Źródła urzędowe</h3>

          <a
            href="https://eli.gov.pl/eli/DU/2026/170/ogl/pol"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rozporządzenie Ministra Sprawiedliwości z dnia 12 lutego 2026 r. w
            sprawie wysokości wynagrodzenia i podlegających zwrotowi wydatków
            mediatora w postępowaniu cywilnym — Dz.U. 2026 poz. 170
          </a>

          <a
            href="https://www.gov.pl/web/sprawiedliwosc/postepowanie-mediacyjne-w-sprawach-karnych"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ministerstwo Sprawiedliwości — postępowanie mediacyjne w sprawach
            karnych: koszty mediacji ponosi Skarb Państwa
          </a>

          <a
            href="https://www.gov.pl/web/sprawiedliwosc/mediacje"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ministerstwo Sprawiedliwości — mediacje: informacje o kosztach
            mediacji karnych i pozasądowych
          </a>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="section-heading">
          <div>
            <p className="section-label">FAQ</p>
            <h2>Najczęstsze pytania o koszty mediacji.</h2>
          </div>
          <p>
            Krótkie odpowiedzi dotyczące mediacji sądowej, karnej, pozasądowej i
            rozliczenia kosztów między stronami.
          </p>
        </div>

        <div className="faq-list">
          <details className="faq-item">
            <summary>Czy mediacja karna jest bezpłatna dla stron?</summary>
            <p>
              Tak. W sprawach karnych koszty postępowania mediacyjnego nie
              obciążają stron. Wynagrodzenie mediatora oraz zwrot wydatków
              ponosi Skarb Państwa.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              Czy kalkulator dotyczy każdej mediacji rodzinnej?
            </summary>
            <p>
              Nie zawsze. Kalkulator pokazuje stawki dla mediacji w postępowaniu
              cywilnym wszczętym na podstawie skierowania sądu. W mediacji
              pozasądowej koszt jest ustalany przed rozpoczęciem mediacji.
            </p>
          </details>

          <details className="faq-item">
            <summary>Czy do wynagrodzenia mediatora dolicza się VAT?</summary>
            <p>
              Jeżeli mediator jest podatnikiem zobowiązanym do rozliczenia VAT,
              wynagrodzenie określone w rozporządzeniu podwyższa się o kwotę
              podatku od towarów i usług.
            </p>
          </details>

          <details className="faq-item">
            <summary>Kto płaci za mediację pozasądową?</summary>
            <p>
              W mediacji pozasądowej koszt wynika z cennika ośrodka
              mediacyjnego albo z ustaleń stron z mediatorem. Zasady płatności
              powinny być ustalone przed rozpoczęciem mediacji.
            </p>
          </details>

          <details className="faq-item">
            <summary>Czy wynik kalkulatora jest ostatecznym rachunkiem?</summary>
            <p>
              Nie. Wynik ma charakter orientacyjny. W konkretnej sprawie mogą
              pojawić się dodatkowe udokumentowane wydatki albo indywidualne
              okoliczności organizacyjne.
            </p>
          </details>
        </div>
      </section>

      <section className="section" id="kontakt">
        <div className="contact-panel">
          <div>
            <p className="section-label">Kontakt</p>
            <h2>Zapytaj o koszt mediacji w konkretnej sprawie.</h2>
            <p>
              W wiadomości podaj rodzaj sprawy, informację czy jest skierowanie
              z sądu albo organu, wartość przedmiotu sporu, liczbę stron i
              preferowany tryb mediacji.
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
            </div>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .pricing-hero {
              max-width: var(--max);
              margin: 0 auto;
              padding: 54px 22px 22px;
            }

            .pricing-hero-card {
              border-radius: var(--radius-xl);
              border: 1px solid var(--line);
              background:
                linear-gradient(145deg, rgba(255, 250, 242, 0.96), rgba(248, 241, 230, 0.9)),
                radial-gradient(circle at 0% 0%, rgba(182, 138, 58, 0.13), transparent 38%);
              box-shadow: var(--shadow);
              padding: 58px 50px;
            }

            .pricing-hero-card h1 {
              max-width: 980px;
            }

            .pricing-stats {
              margin-top: 34px;
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 12px;
            }

            .pricing-stats div {
              border-radius: 20px;
              border: 1px solid rgba(18, 60, 49, 0.13);
              background: rgba(255, 255, 255, 0.64);
              padding: 18px;
              box-shadow: 0 10px 22px rgba(21, 17, 13, 0.04);
            }

            .pricing-stats strong {
              display: block;
              color: var(--green);
              font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
              font-size: 34px;
              line-height: 1;
              letter-spacing: -0.05em;
            }

            .pricing-stats span {
              display: block;
              margin-top: 8px;
              color: var(--muted);
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 12px;
              font-weight: 850;
              line-height: 1.4;
            }

            .calculator-shell {
              border-radius: var(--radius-xl);
              border: 1px solid var(--line);
              background: rgba(255, 250, 242, 0.88);
              box-shadow: var(--shadow-soft);
              overflow: hidden;
            }

            .calculator-tabs {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 0;
              border-bottom: 1px solid var(--line);
              background: rgba(18, 60, 49, 0.06);
            }

            .calculator-tabs button {
              min-height: 64px;
              border: 0;
              border-right: 1px solid var(--line);
              background: transparent;
              color: var(--muted);
              cursor: pointer;
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 13px;
              font-weight: 950;
              transition: background 160ms ease, color 160ms ease;
            }

            .calculator-tabs button:last-child {
              border-right: 0;
            }

            .calculator-tabs button.active {
              background: var(--green);
              color: #fff;
            }

            .calculator-grid {
              display: grid;
              grid-template-columns: 1.2fr 0.8fr;
              gap: 0;
            }

            .calculator-panel {
              padding: 34px;
              border-right: 1px solid var(--line);
            }

            .calculator-panel h3 {
              margin: 0 0 12px;
              font-size: 34px;
              line-height: 1;
              letter-spacing: -0.05em;
            }

            .calculator-panel p {
              margin: 0 0 22px;
              color: var(--muted);
              font-size: 16px;
              line-height: 1.58;
            }

            .field {
              display: grid;
              gap: 8px;
              margin-top: 18px;
            }

            .field span,
            .checkbox-field span {
              color: var(--ink);
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 13px;
              font-weight: 900;
            }

            .field input {
              width: 100%;
              min-height: 54px;
              border-radius: 16px;
              border: 1px solid var(--line);
              background: #fff;
              padding: 0 16px;
              color: var(--ink);
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 18px;
              font-weight: 850;
              outline: none;
            }

            .field input:focus {
              border-color: rgba(18, 60, 49, 0.48);
              box-shadow: 0 0 0 4px rgba(18, 60, 49, 0.08);
            }

            .checkbox-field {
              display: flex;
              align-items: center;
              gap: 10px;
              margin-top: 18px;
              padding: 14px;
              border-radius: 16px;
              border: 1px solid var(--line);
              background: rgba(255, 255, 255, 0.62);
            }

            .checkbox-field input {
              width: 20px;
              height: 20px;
              accent-color: var(--green);
            }

            .quick-values {
              margin-top: 14px;
              display: flex;
              flex-wrap: wrap;
              gap: 8px;
            }

            .quick-values button {
              min-height: 38px;
              border: 1px solid rgba(18, 60, 49, 0.16);
              border-radius: 999px;
              background: rgba(18, 60, 49, 0.07);
              color: var(--green);
              padding: 0 12px;
              cursor: pointer;
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 12px;
              font-weight: 900;
            }

            .quick-values button:hover {
              background: var(--green);
              color: #fff;
            }

            .legal-note {
              margin-top: 20px;
              border-radius: 18px;
              border: 1px solid rgba(182, 138, 58, 0.26);
              background: rgba(239, 227, 200, 0.44);
              color: var(--gold-dark);
              padding: 16px;
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 13px;
              font-weight: 780;
              line-height: 1.55;
            }

            .expenses-grid {
              margin-top: 24px;
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 14px;
            }

            .expenses-grid .checkbox-field {
              grid-column: 1 / -1;
            }

            .calculator-result {
              padding: 34px;
              background:
                linear-gradient(150deg, var(--green), var(--green-dark)),
                radial-gradient(circle at 0 0, rgba(255, 255, 255, 0.18), transparent 40%);
              color: #fff;
            }

            .calculator-result .section-label {
              color: rgba(255, 255, 255, 0.68);
            }

            .result-main {
              border-bottom: 1px solid rgba(255, 255, 255, 0.14);
              padding-bottom: 24px;
              margin-bottom: 22px;
            }

            .result-main span {
              display: block;
              color: rgba(255, 255, 255, 0.72);
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 14px;
              font-weight: 850;
            }

            .result-main strong {
              display: block;
              margin-top: 10px;
              font-size: clamp(42px, 5vw, 66px);
              line-height: 0.95;
              letter-spacing: -0.06em;
            }

            .result-lines {
              display: grid;
              gap: 10px;
            }

            .result-lines div {
              display: flex;
              justify-content: space-between;
              gap: 16px;
              padding: 12px 0;
              border-bottom: 1px solid rgba(255, 255, 255, 0.11);
              color: rgba(255, 255, 255, 0.76);
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 13px;
              font-weight: 800;
            }

            .result-lines strong {
              color: #fff;
              white-space: nowrap;
            }

            .result-disclaimer {
              margin: 20px 0 0;
              color: rgba(255, 255, 255, 0.68);
              font-size: 14px;
              line-height: 1.56;
            }

            .criminal-box {
              border-radius: 22px;
              background:
                linear-gradient(150deg, var(--green), var(--green-dark));
              color: #fff;
              padding: 24px;
              box-shadow: 0 18px 38px rgba(18, 60, 49, 0.18);
            }

            .criminal-box span {
              display: block;
              color: rgba(255, 255, 255, 0.72);
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 13px;
              font-weight: 850;
            }

            .criminal-box strong {
              display: block;
              margin-top: 8px;
              font-size: 64px;
              line-height: 1;
              letter-spacing: -0.065em;
            }

            .criminal-box p {
              margin: 12px 0 0;
              color: rgba(255, 255, 255, 0.74);
            }

            .legal-sources {
              margin-top: 24px;
              border-radius: var(--radius-lg);
              border: 1px solid var(--line);
              background: rgba(255, 250, 242, 0.9);
              box-shadow: var(--shadow-soft);
              padding: 28px;
            }

            .legal-sources h3 {
              margin: 0 0 16px;
              font-size: 30px;
              line-height: 1;
              letter-spacing: -0.045em;
            }

            .legal-sources a {
              display: block;
              margin-top: 12px;
              border-radius: 16px;
              border: 1px solid rgba(18, 60, 49, 0.12);
              background: rgba(18, 60, 49, 0.055);
              color: var(--green);
              padding: 16px;
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 13px;
              font-weight: 850;
              line-height: 1.5;
              transition: transform 160ms ease, background 160ms ease;
            }

            .legal-sources a:hover {
              transform: translateY(-2px);
              background: rgba(18, 60, 49, 0.09);
            }

            @media (max-width: 980px) {
              .calculator-tabs,
              .calculator-grid,
              .pricing-stats {
                grid-template-columns: 1fr;
              }

              .calculator-tabs button {
                border-right: 0;
                border-bottom: 1px solid var(--line);
              }

              .calculator-panel {
                border-right: 0;
                border-bottom: 1px solid var(--line);
              }

              .expenses-grid {
                grid-template-columns: 1fr;
              }
            }

            @media (max-width: 620px) {
              .pricing-hero {
                padding-left: 16px;
                padding-right: 16px;
              }

              .pricing-hero-card,
              .calculator-panel,
              .calculator-result,
              .legal-sources {
                padding: 28px;
              }

              .calculator-panel h3 {
                font-size: 30px;
              }

              .criminal-box strong {
                font-size: 54px;
              }
            }
          `
        }}
      />
    </main>
  );
}
"use client";

import { useMemo, useState } from "react";

const email = "mediacje@twojafundacja.pl";
const whatsappNumber = "48883040483";

type FormState = {
  name: string;
  phone: string;
  emailAddress: string;
  caseType: string;
  stage: string;
  referred: string;
  parties: string;
  contactMode: string;
  description: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  phone: "",
  emailAddress: "",
  caseType: "Nie wiem",
  stage: "Nie wiem",
  referred: "Nie wiem",
  parties: "2",
  contactMode: "Telefon",
  description: "",
  consent: false
};

function buildMessage(form: FormState) {
  return `Dzień dobry,

chciałbym/chciałabym opisać sprawę do mediacji.

Imię i nazwisko: ${form.name}
Telefon: ${form.phone}
E-mail: ${form.emailAddress}

Rodzaj sprawy: ${form.caseType}
Etap sprawy: ${form.stage}
Czy sprawa została skierowana do mediacji: ${form.referred}
Liczba stron: ${form.parties}
Preferowany tryb kontaktu: ${form.contactMode}

Krótki opis sprawy:
${form.description}

Przyjmuję do wiadomości, że przesłanie wiadomości nie oznacza zawarcia umowy ani rozpoczęcia mediacji.

Z poważaniem,
${form.name}`;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [copied, setCopied] = useState(false);

  const message = useMemo(() => buildMessage(form), [form]);

  const subject = encodeURIComponent("Opis sprawy do mediacji");
  const encodedMessage = encodeURIComponent(message);

  const mailtoHref = `mailto:${email}?subject=${subject}&body=${encodedMessage}`;
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({
      ...current,
      [key]: value
    }));
    setCopied(false);
  }

  async function copyMessage() {
    await navigator.clipboard.writeText(message);
    setCopied(true);
  }

  const canSend =
    form.name.trim().length > 1 &&
    (form.phone.trim().length > 4 || form.emailAddress.trim().length > 4) &&
    form.description.trim().length > 10 &&
    form.consent;

  return (
    <section className="section" id="formularz">
      <div className="contact-panel contact-form-panel">
        <div>
          <p className="section-label">Formularz</p>
          <h2>Opisz sprawę krok po kroku.</h2>
          <p>
            Wypełnij pola, a strona przygotuje uporządkowaną wiadomość do
            mediatora. Możesz ją wysłać e-mailem, przez WhatsApp albo skopiować.
          </p>

          <div className="labels">
            <span className="label">rodzaj sprawy</span>
            <span className="label">etap postępowania</span>
            <span className="label">liczba stron</span>
            <span className="label">opis sytuacji</span>
          </div>
        </div>

        <div className="contact-box form-card">
          <div className="form-grid">
            <label>
              <span>Imię i nazwisko</span>
              <input
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="np. Jan Kowalski"
              />
            </label>

            <label>
              <span>Telefon</span>
              <input
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="np. 883 040 483"
              />
            </label>

            <label>
              <span>E-mail</span>
              <input
                type="email"
                value={form.emailAddress}
                onChange={(event) =>
                  updateField("emailAddress", event.target.value)
                }
                placeholder="adres e-mail"
              />
            </label>

            <label>
              <span>Rodzaj sprawy</span>
              <select
                value={form.caseType}
                onChange={(event) => updateField("caseType", event.target.value)}
              >
                <option>Rodzinna</option>
                <option>Karna</option>
                <option>Cywilna</option>
                <option>Gospodarcza</option>
                <option>Online</option>
                <option>Nie wiem</option>
              </select>
            </label>

            <label>
              <span>Etap sprawy</span>
              <select
                value={form.stage}
                onChange={(event) => updateField("stage", event.target.value)}
              >
                <option>Przed sądem</option>
                <option>W sądzie</option>
                <option>Prokuratura</option>
                <option>Policja</option>
                <option>Po skierowaniu do mediacji</option>
                <option>Nie wiem</option>
              </select>
            </label>

            <label>
              <span>Czy jest skierowanie do mediacji?</span>
              <select
                value={form.referred}
                onChange={(event) => updateField("referred", event.target.value)}
              >
                <option>Tak</option>
                <option>Nie</option>
                <option>Nie wiem</option>
              </select>
            </label>

            <label>
              <span>Liczba stron</span>
              <select
                value={form.parties}
                onChange={(event) => updateField("parties", event.target.value)}
              >
                <option>2</option>
                <option>3</option>
                <option>Więcej niż 3</option>
                <option>Nie wiem</option>
              </select>
            </label>

            <label>
              <span>Preferowany tryb kontaktu</span>
              <select
                value={form.contactMode}
                onChange={(event) =>
                  updateField("contactMode", event.target.value)
                }
              >
                <option>Telefon</option>
                <option>E-mail</option>
                <option>WhatsApp</option>
                <option>Spotkanie online</option>
                <option>Spotkanie stacjonarne w Krakowie</option>
              </select>
            </label>
          </div>

          <label className="form-full">
            <span>Krótki opis sprawy</span>
            <textarea
              value={form.description}
              onChange={(event) =>
                updateField("description", event.target.value)
              }
              placeholder="Opisz krótko sytuację, czego dotyczy konflikt, na jakim etapie jest sprawa i czego oczekujesz od mediacji."
              rows={7}
            />
          </label>

          <label className="consent-row">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(event) => updateField("consent", event.target.checked)}
            />
            <span>
              Przyjmuję do wiadomości, że przesłanie wiadomości nie oznacza
              zawarcia umowy ani rozpoczęcia mediacji. Dane zostaną użyte w celu
              odpowiedzi na zapytanie.
            </span>
          </label>

          <div className="generated-message">
            <span>Podgląd wiadomości</span>
            <pre>{message}</pre>
          </div>

          <div className="hero-actions">
            <a
              className={`button button-primary ${!canSend ? "is-disabled" : ""}`}
              href={canSend ? mailtoHref : undefined}
              aria-disabled={!canSend}
            >
              Wyślij e-mail
            </a>

            <a
              className={`button button-secondary ${
                !canSend ? "is-disabled" : ""
              }`}
              href={canSend ? whatsappHref : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!canSend}
            >
              WhatsApp
            </a>

            <button
              className="button button-secondary"
              type="button"
              onClick={copyMessage}
            >
              {copied ? "Skopiowano" : "Kopiuj treść"}
            </button>
          </div>

          {!canSend ? (
            <p className="form-note">
              Aby aktywować wysyłkę, wpisz imię i nazwisko, telefon albo e-mail,
              krótki opis sprawy oraz zaznacz zgodę.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

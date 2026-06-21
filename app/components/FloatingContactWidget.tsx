"use client";

import { useEffect, useState } from "react";

const phone = "883 040 483";
const phoneHref = "+48883040483";

const slides = [
  {
    eyebrow: "Szybki kontakt",
    title: "Potrzebujesz mediatora?",
    text: "Zadzwoń i krótko opisz sprawę. Ustalimy możliwy tryb mediacji.",
    primaryLabel: "Zadzwoń",
    primaryHref: `tel:${phoneHref}`,
    secondaryLabel: "Wyślij e-mail",
    secondaryHref: "mailto:mediacje@twojafundacja.pl"
  },
  {
    eyebrow: "Centrum wiedzy",
    title: "Nie wiesz, od czego zacząć?",
    text: "Przeczytaj artykuły o kosztach mediacji, ugodzie, mediacji karnej i rodzinnej.",
    primaryLabel: "Czytaj blog",
    primaryHref: "/blog",
    secondaryLabel: "Cennik",
    secondaryHref: "/cennik"
  }
];

export default function FloatingContactWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const isClosed = window.localStorage.getItem("fm-floating-widget-closed");

    if (!isClosed) {
      const timer = window.setTimeout(() => {
        setIsVisible(true);
      }, 900);

      return () => window.clearTimeout(timer);
    }

    return undefined;
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current === 0 ? 1 : 0));
    }, 6500);

    return () => window.clearInterval(timer);
  }, [isVisible]);

  function closeWidget() {
    window.localStorage.setItem("fm-floating-widget-closed", "true");
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  const slide = slides[activeSlide];

  return (
    <aside
      className="floating-contact-widget"
      aria-label="Szybki kontakt z mediatorem"
    >
      <button
        className="floating-contact-close"
        type="button"
        aria-label="Zamknij okno kontaktu"
        onClick={closeWidget}
      >
        ×
      </button>

      <div className="floating-contact-mark">FM</div>

      <div className="floating-contact-content">
        <span className="floating-contact-eyebrow">{slide.eyebrow}</span>

        <h2>{slide.title}</h2>

        <p>{slide.text}</p>

        <div className="floating-contact-phone">
          <span>Telefon</span>
          <a href={`tel:${phoneHref}`}>{phone}</a>
        </div>

        <div className="floating-contact-actions">
          <a className="floating-contact-primary" href={slide.primaryHref}>
            {slide.primaryLabel}
          </a>

          <a className="floating-contact-secondary" href={slide.secondaryHref}>
            {slide.secondaryLabel}
          </a>
        </div>

        <div className="floating-contact-dots" aria-hidden="true">
          {slides.map((_, index) => (
            <span
              key={index}
              className={index === activeSlide ? "is-active" : ""}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

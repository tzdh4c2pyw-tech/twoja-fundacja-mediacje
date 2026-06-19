const phone = "883 040 483";
const phoneHref = "+48883040483";
const email = "mediacje@twojafundacja.pl";

const languageLinks = [
  { label: "PL", href: "/" },
  { label: "EN", href: "/en" },
  { label: "UA", href: "/uk" }
];

const mediationTypes = [
  {
    title: "Сімейна медіація",
    text: "Розлучення, сепарація, контакти з дитиною, аліменти, опіка, батьківська комунікація та сімейні домовленості.",
    href: "#family",
    className: "card card-petrol bento-large"
  },
  {
    title: "Кримінальна медіація",
    text: "Структурована розмова між потерпілим і правопорушником, відшкодування шкоди, вибачення та умови порозуміння.",
    href: "#criminal",
    className: "card card-dark bento-large"
  },
  {
    title: "Цивільна медіація",
    text: "Приватні спори, зобов’язання, розрахунки, сусідські конфлікти, договори та майнові питання.",
    href: "#civil",
    className: "card"
  },
  {
    title: "Господарська медіація",
    text: "Спори між підприємцями, платежі, договори, відповідальність, переговори та пропозиції мирового врегулювання.",
    href: "#business",
    className: "card"
  },
  {
    title: "Онлайн-медіація",
    text: "Попередня консультація, опис справи, дистанційний контакт і онлайн-медіація, якщо характер справи це дозволяє.",
    href: "#online",
    className: "card card-gold"
  }
];

const processSteps = [
  {
    title: "Опис справи",
    text: "Ви коротко описуєте конфлікт, кількість сторін, етап справи та зазначаєте, чи медіація має бути судовою, позасудовою або онлайн."
  },
  {
    title: "Вибір процедури",
    text: "Медіатор організаційно визначає відповідний напрям: сімейна, кримінальна, цивільна, господарська або дистанційна медіація."
  },
  {
    title: "Контакт зі сторонами",
    text: "Узгоджуються правила контакту, участь сторін, дата зустрічі та форма проведення медіації."
  },
  {
    title: "Угода або завершення",
    text: "Сторони працюють над рішенням. Якщо досягнуто порозуміння, може бути підготовлена медіаційна угода."
  }
];

const qualificationCards = [
  {
    title: "Постійний медіатор",
    label: "Окружний суд у Кракові",
    text: "Внесення до списку постійних медіаторів, який веде Голова Окружного суду в Кракові.",
    href: "#contact"
  },
  {
    title: "Кримінальна медіація",
    label: "Внесення Фундації до переліку",
    text: "Фундація внесена до переліку установ, уповноважених проводити медіаційні провадження у кримінальних справах.",
    href: "#contact"
  },
  {
    title: "Професія медіатора",
    label: "Післядипломна освіта",
    text: "Післядипломне навчання у сфері професії медіатора та підготовки до проведення медіації.",
    href: "#contact"
  },
  {
    title: "Сімейна медіація",
    label: "Післядипломна освіта",
    text: "Післядипломне навчання у сфері сімейної медіації та основ психологічної допомоги родині.",
    href: "#contact"
  }
];

const faqItems = [
  {
    question: "Чи є медіація конфіденційною?",
    answer:
      "Так. Медіація є конфіденційною процедурою. Конфіденційність допомагає сторонам спокійно говорити про конфлікт і шукати рішення без подальшої ескалації."
  },
  {
    question: "Чи можлива онлайн-медіація?",
    answer:
      "Так. У частині справ можлива онлайн-медіація або попередня дистанційна консультація. Це залежить від типу справи, згоди сторін та організаційних умов."
  },
  {
    question: "Чи Фундація проводить кримінальну медіацію?",
    answer:
      "Так. Фундація внесена до переліку установ, уповноважених проводити медіаційні провадження у кримінальних справах."
  },
  {
    question: "Як підготуватися до першого контакту?",
    answer:
      "Варто зазначити тип справи, кількість сторін, етап провадження, інформацію про можливе направлення судом або органом, а також бажану форму контакту."
  },
  {
    question: "Чи може медіаційна угода завершити спір?",
    answer:
      "У багатьох справах медіаційна угода може впорядкувати відносини сторін і завершити спір. Її правовий ефект залежить від типу справи та відповідної процедури."
  }
];

function SectionHeading({
  label,
  title,
  text
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
}

function LanguageSwitcher() {
  return (
    <div className="language-switcher" aria-label="Мовні версії">
      {languageLinks.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </div>
  );
}

function DocumentCard({
  title,
  label,
  text,
  href
}: {
  title: string;
  label: string;
  text: string;
  href: string;
}) {
  return (
    <article className="card">
      <span className="tag">{label}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <a className="card-link" href={href}>
        Запитати про підтвердження →
      </a>
    </article>
  );
}

export default function UkrainianHomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Фундація судової та позасудової медіації",
    url: "https://www.twojafundacja.pl/uk",
    telephone: phoneHref,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kielecka 2/53",
      addressLocality: "Kraków",
      postalCode: "31-526",
      addressCountry: "PL"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.0664757,
      longitude: 19.9621993
    },
    areaServed: [
      {
        "@type": "City",
        name: "Kraków"
      },
      {
        "@type": "Country",
        name: "Polska"
      }
    ],
    serviceType: [
      "сімейна медіація",
      "кримінальна медіація",
      "цивільна медіація",
      "господарська медіація",
      "онлайн-медіація",
      "судова медіація",
      "позасудова медіація"
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="topbar">
        <nav className="nav">
          <a className="brand" href="/uk" aria-label="Головна сторінка">
            <span className="brand-mark">FM</span>
            <span>
              <span className="brand-title">
                Фундація судової та позасудової медіації
              </span>
              <span className="brand-subtitle">
                Судовий медіатор · Краків · онлайн-медіація
              </span>
            </span>
          </a>

          <div className="nav-links">
            <a href="#scope">Напрями</a>
            <a href="#process">Як це працює</a>
            <a href="#online">Онлайн</a>
            <a href="#location">Локація</a>
            <a href="#qualifications">Кваліфікації</a>
            <a href="#contact">Контакт</a>
            <LanguageSwitcher />
            <a className="nav-phone" href={`tel:${phoneHref}`}>
              {phone}
            </a>
          </div>
        </nav>
      </div>

      <section className="hero hero-premium">
        <div className="hero-main">
          <span className="eyebrow">
            Судовий медіатор · Краків · онлайн-медіація
          </span>

          <h1>Медіатор у Кракові.</h1>

          <p className="lead">
            Сімейна, кримінальна, цивільна, господарська та онлайн-медіація.
            Конфіденційна й упорядкована розмова, яку проводить безсторонній
            медіатор, — з метою досягнення порозуміння та обмеження ескалації
            конфлікту.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${phoneHref}`}>
              Домовитися про консультацію
            </a>
            <a className="button button-secondary" href={`mailto:${email}`}>
              Надіслати опис справи
            </a>
            <a className="button button-secondary" href="#qualifications">
              Перевірити кваліфікації
            </a>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>Постійний медіатор</strong>
              <span>Окружний суд у Кракові</span>
            </div>
            <div>
              <strong>Кримінальна медіація</strong>
              <span>Фундація внесена до переліку</span>
            </div>
            <div>
              <strong>Онлайн</strong>
              <span>попередня дистанційна консультація</span>
            </div>
          </div>
        </div>

        <aside className="hero-side">
          <figure className="portrait">
            <img
              src="/foto/vadym%20rekel.jpg"
              alt="Vadym Rekel медіатор у Кракові"
            />
          </figure>

          <div className="hero-badge">
            <strong>Центр медіації</strong>
            <span>
              Судова та позасудова медіація · Краків · Kielecka 2/53 · можливий
              онлайн-контакт.
            </span>
          </div>
        </aside>
      </section>

      <section className="trust">
        <div className="trust-inner">
          <div className="trust-item">
            <strong>Постійний медіатор</strong>
            внесення при Окружному суді в Кракові
          </div>
          <div className="trust-item">
            <strong>Кримінальна медіація</strong>
            Фундація внесена до переліку установ
          </div>
          <div className="trust-item">
            <strong>Краків</strong>
            Kielecka 2/53, поруч із Rondo Mogilskie
          </div>
          <div className="trust-item">
            <strong>Три мови</strong>
            польська, англійська та українська версії
          </div>
        </div>
      </section>

      <section className="section" id="scope">
        <SectionHeading
          label="Напрями медіації"
          title="Оберіть тип справи."
          text="Основні напрями медіації поділено так, щоб користувач швидко міг визначити правильний шлях контакту."
        />

        <div className="bento-grid">
          {mediationTypes.map((item) => (
            <article className={item.className} key={item.title}>
              <span className="tag">Медіація</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a className="card-link" href={item.href}>
                Читати більше →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="process">
        <SectionHeading
          label="Як працює медіація"
          title="Проста процедура і спокійна структура розмови."
          text="Медіація подана як зрозуміла процедура: перший контакт, вибір порядку дій, організація зустрічі та робота над рішенням."
        />

        <div className="grid-4 process">
          {processSteps.map((item) => (
            <article className="card process-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section compact" id="online">
        <div className="feature green">
          <div>
            <p className="section-label">Онлайн і підготовка справи</p>
            <h2>Онлайн-медіація та швидкий перший контакт.</h2>
          </div>

          <div>
            <p>
              Ви можете надіслати короткий опис конфлікту, організаційні
              документи або запитання щодо процедури медіації. На цій підставі
              можна попередньо визначити тип справи, потрібну інформацію та
              те, чи доречною буде стаціонарна або онлайн-медіація.
            </p>

            <div className="labels">
              <span className="label">опис справи</span>
              <span className="label">онлайн-контакт</span>
              <span className="label">дистанційна медіація</span>
              <span className="label">попередня оцінка</span>
              <span className="label">AI-форма пізніше</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="criminal">
        <SectionHeading
          label="Кримінальна медіація"
          title="Фундація внесена до переліку кримінальної медіації."
          text="Кримінальна медіація потребує особливої обережності, нейтральності та розуміння функції провадження."
        />

        <div className="grid-3">
          <article className="card card-gold">
            <span className="tag">Кримінальні справи</span>
            <h3>Потерпілий і правопорушник</h3>
            <p>
              Медіація може стосуватися наслідків діяння, відповідальності,
              вибачення, відшкодування шкоди, компенсації та умов порозуміння.
            </p>
          </article>

          <article className="card card-gold">
            <span className="tag">Процедура</span>
            <h3>На підставі направлення</h3>
            <p>
              У кримінальних справах медіація проводиться у визначеному порядку,
              із дотриманням конфіденційності, нейтральності медіатора та
              належної документації.
            </p>
          </article>

          <article className="card card-dark">
            <span className="tag">Документ</span>
            <h3>Внесення до переліку</h3>
            <p>
              Фундація має рішення, що підтверджує внесення до переліку установ,
              уповноважених проводити медіацію у кримінальних справах.
            </p>
            <a className="card-link" href="#contact">
              Запитати про підтвердження →
            </a>
          </article>
        </div>
      </section>

      <section className="section" id="family">
        <SectionHeading
          label="Сімейна медіація"
          title="Сімейні справи потребують спокою, мови і меж."
          text="У сімейних справах медіація впорядковує розмову там, де емоції, очікування та відповідальність за майбутнє родини накладаються одне на одне."
        />

        <div className="grid-3">
          <article className="card">
            <span className="tag">Родина</span>
            <h3>Контакти та опіка</h3>
            <p>
              Домовленості щодо контактів із дитиною, опіки, батьківської
              комунікації та організації щоденних сімейних справ.
            </p>
          </article>

          <article className="card">
            <span className="tag">Розставання</span>
            <h3>Розлучення і сепарація</h3>
            <p>
              Розмова про справи, пов’язані з розлученням, сімейними,
              майновими та організаційними питаннями.
            </p>
          </article>

          <article className="card">
            <span className="tag">Підготовка</span>
            <h3>Сімейна медіація</h3>
            <p>
              Підготовка охоплює післядипломне навчання з сімейної медіації та
              основ психологічної допомоги родині.
            </p>
            <a className="card-link" href="#contact">
              Запитати про підтвердження →
            </a>
          </article>
        </div>
      </section>

      <section className="section" id="civil">
        <SectionHeading
          label="Цивільна та господарська медіація"
          title="Приватні, договірні та бізнесові спори."
          text="У цивільних і господарських справах медіація може допомогти швидше визначити умови порозуміння, розрахунків або завершення співпраці."
        />

        <div className="grid-3">
          <article className="card">
            <span className="tag">Цивільні</span>
            <h3>Приватні спори</h3>
            <p>
              Зобов’язання, претензії, договори, сусідські спори, майнові
              питання та розрахунки.
            </p>
          </article>

          <article className="card" id="business">
            <span className="tag">Господарські</span>
            <h3>Підприємці</h3>
            <p>
              Платежі, відповідальність, договори, співпраця, завершення
              бізнесових відносин і мирові домовленості.
            </p>
          </article>

          <article className="card">
            <span className="tag">Документ</span>
            <h3>Спеціалізоване навчання</h3>
            <p>
              Підготовка охоплює спеціалізоване навчання у сфері цивільної та
              господарської медіації.
            </p>
            <a className="card-link" href="#contact">
              Запитати про підтвердження →
            </a>
          </article>
        </div>
      </section>

      <section
        className="section"
        id="location"
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        <SectionHeading
          label="Локація"
          title="Медіація у Кракові — Kielecka 2/53, поруч із Rondo Mogilskie."
          text="Професійна медіація у зручній локації в центрі Кракова, неподалік суду, державних установ і громадського транспорту."
        />

        <div className="location-rich">
          <div className="location-copy">
            <p>
              <strong itemProp="name">
                Фундація судової та позасудової медіації
              </strong>{" "}
              проводить <strong>медіацію у Кракові</strong> за адресою{" "}
              <strong>ul. Kielecka 2/53, 31-526 Kraków</strong>, поруч із{" "}
              <strong>Rondo Mogilskie</strong>.
            </p>

            <p>
              Це зручна локація для осіб, які шукають{" "}
              <strong>медіатора у Кракові</strong> у сімейних, цивільних,
              господарських або кримінальних справах. Офіс забезпечує спокійні
              та нейтральні умови для розмови, впорядкування конфлікту і пошуку
              порозуміння.
            </p>

            <p>
              Офіс розташований приблизно{" "}
              <strong>600 метрів від Окружного суду в Кракові</strong> на вул.
              Przy Rondzie 7, що є зручним для сторін, адвокатів і осіб, які
              беруть участь у судових або досудових справах.
            </p>

            <div className="location-advantages">
              <div className="location-advantage">
                Центр Кракова — Rondo Mogilskie
              </div>
              <div className="location-advantage">
                Близько 600 м від Окружного суду
              </div>
              <div className="location-advantage">
                Зручний доїзд громадським транспортом
              </div>
              <div className="location-advantage">
                Спокійний простір для медіації
              </div>
            </div>
          </div>

          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10244.231941308924!2d19.9621993!3d50.0664757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b57a3e08b9d%3A0xf4ed3bbeb098c39!2sFundacja%20Mediacji%20Sądowej%20i%20Pozasądowej!5e0!3m2!1suk!2spl!4v1701936419454!5m2!1suk!2spl"
              loading="lazy"
              title="Медіатор у Кракові — Фундація судової та позасудової медіації локація"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="location-cta">
            <a
              className="location-cta-map"
              href="https://www.google.com/maps/dir/?api=1&destination=Fundacja+Mediacji+Sądowej+i+Pozasądowej,+Kielecka+2%2F53,+31-526+Kraków"
              target="_blank"
              rel="noopener noreferrer"
            >
              Маршрут до медіатора у Кракові
            </a>

            <a className="location-cta-phone" href={`tel:${phoneHref}`}>
              +48 {phone}
            </a>

            <a className="location-cta-email" href={`mailto:${email}`}>
              Записатися на медіацію
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="qualifications">
        <SectionHeading
          label="Кваліфікації"
          title="Документи, що підтверджують підготовку медіатора."
          text="Публічна сторінка показує вибрану інформацію про кваліфікації. Повні документи можуть бути пред’явлені для перевірки після обґрунтованого контакту з офісом."
        />

        <div className="grid-4">
          {qualificationCards.map((item) => (
            <DocumentCard
              key={item.title}
              title={item.title}
              label={item.label}
              text={item.text}
              href={item.href}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="FAQ"
          title="Найчастіші питання перед контактом із медіатором."
          text="Коротко про конфіденційність, онлайн-медіацію, кримінальну медіацію та підготовку справи."
        />

        <div className="faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <div className="contact-panel">
          <div>
            <p className="section-label">Контакт</p>
            <h2>Опишіть справу та визначте можливий шлях медіації.</h2>
            <p>
              У повідомленні зазначте тип справи, кількість сторін, етап
              провадження та інформацію, чи медіація має бути судовою,
              позасудовою, стаціонарною або онлайн.
            </p>
          </div>

          <div className="contact-box">
            <span className="contact-line">
              <strong>Телефон:</strong>{" "}
              <a href={`tel:${phoneHref}`}>+48 {phone}</a>
            </span>
            <span className="contact-line">
              <strong>E-mail:</strong> <a href={`mailto:${email}`}>{email}</a>
            </span>
            <span className="contact-line">
              <strong>Адреса:</strong> Kielecka 2/53, 31-526 Kraków
            </span>

            <div className="hero-actions">
              <a className="button button-secondary" href={`tel:${phoneHref}`}>
                Зателефонувати
              </a>
              <a className="button button-secondary" href={`mailto:${email}`}>
                Надіслати e-mail
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-title">
              Фундація судової та позасудової медіації
            </span>
            <span className="footer-line">
              Судовий медіатор · сімейна, кримінальна, цивільна та господарська
              медіація
            </span>
            <span className="footer-line">Краків · онлайн-медіація</span>
          </div>

          <div>
            <span className="footer-title">Контакт</span>
            <span className="footer-line">
              Телефон: <a href={`tel:${phoneHref}`}>+48 {phone}</a>
            </span>
            <span className="footer-line">
              <a href={`mailto:${email}`}>{email}</a>
            </span>
            <span className="footer-line">Kielecka 2/53, 31-526 Kraków</span>
          </div>

          <div>
            <span className="footer-title">Мовні версії</span>
            <a className="footer-link" href="/">
              Польська версія
            </a>
            <br />
            <a className="footer-link" href="/en">
              English version
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
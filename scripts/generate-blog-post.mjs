import fs from "node:fs/promises";
import path from "node:path";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-5.2";

const BLOG_FILE_PATH = path.join(process.cwd(), "lib", "blog.ts");

if (!OPENAI_API_KEY) {
  console.error("Missing OPENAI_API_KEY environment variable.");
  process.exit(1);
}

const BLOG_TOPICS = [
  {
    language: "pl",
    category: "Koszty mediacji",
    topic: "Ile kosztuje mediacja sądowa w sprawie cywilnej?",
    slugSuggestion: "ile-kosztuje-mediacja-sadowa-w-sprawie-cywilnej"
  },
  {
    language: "pl",
    category: "Mediacje rodzinne",
    topic: "Mediacje rodzinne w Krakowie — kiedy warto z nich skorzystać?",
    slugSuggestion: "mediacje-rodzinne-w-krakowie-kiedy-warto"
  },
  {
    language: "pl",
    category: "Mediator sądowy",
    topic: "Mediator sądowy w Krakowie — czym się zajmuje?",
    slugSuggestion: "mediator-sadowy-w-krakowie-czym-sie-zajmuje"
  },
  {
    language: "pl",
    category: "Mediacje online",
    topic: "Mediacja online — kiedy może być dobrym rozwiązaniem?",
    slugSuggestion: "mediacja-online-kiedy-moze-byc-dobrym-rozwiazaniem"
  },
  {
    language: "pl",
    category: "Mediacje cywilne",
    topic: "Mediacja sądowa a pozasądowa — najważniejsze różnice",
    slugSuggestion: "mediacja-sadowa-a-pozasadowa-roznice"
  },
  {
    language: "uk",
    category: "Медіація у Кракові",
    topic: "Медіатор у Кракові — коли варто звернутися?",
    slugSuggestion: "mediator-u-krakovi-koly-varto-zvernutysia"
  },
  {
    language: "uk",
    category: "Сімейна медіація",
    topic: "Сімейна медіація в Польщі для українців",
    slugSuggestion: "simeina-mediatsiia-v-polshchi-dlia-ukraintsiv"
  },
  {
    language: "en",
    category: "Mediation in Krakow",
    topic: "Mediation in Krakow — what foreign clients should know",
    slugSuggestion: "mediation-in-krakow-what-foreign-clients-should-know"
  },
  {
    language: "en",
    category: "Online mediation",
    topic: "Online mediation in Poland — when it may be useful",
    slugSuggestion: "online-mediation-in-poland-when-it-may-be-useful"
  }
];

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function extractExistingSlugs(fileContent) {
  const matches = [...fileContent.matchAll(/slug:\s*"([^"]+)"/g)];
  return matches.map((match) => match[1]);
}

function chooseTopic(existingSlugs) {
  const unusedTopic = BLOG_TOPICS.find(
    (topic) => !existingSlugs.includes(topic.slugSuggestion)
  );

  return unusedTopic || BLOG_TOPICS[0];
}

function extractOutputText(responseJson) {
  if (typeof responseJson.output_text === "string") {
    return responseJson.output_text;
  }

  if (!Array.isArray(responseJson.output)) {
    return "";
  }

  const textParts = [];

  for (const item of responseJson.output) {
    if (!Array.isArray(item.content)) {
      continue;
    }

    for (const contentItem of item.content) {
      if (
        contentItem.type === "output_text" &&
        typeof contentItem.text === "string"
      ) {
        textParts.push(contentItem.text);
      }
    }
  }

  return textParts.join("\n").trim();
}

function makeSchema() {
  return {
    type: "object",
    additionalProperties: false,
    required: [
      "slug",
      "language",
      "title",
      "metaTitle",
      "metaDescription",
      "description",
      "date",
      "updatedAt",
      "category",
      "readingTime",
      "keywords",
      "heroLabel",
      "intro",
      "sections",
      "faq",
      "sources",
      "internalLinks"
    ],
    properties: {
      slug: {
        type: "string"
      },
      language: {
        type: "string",
        enum: ["pl", "en", "uk"]
      },
      title: {
        type: "string"
      },
      metaTitle: {
        type: "string"
      },
      metaDescription: {
        type: "string"
      },
      description: {
        type: "string"
      },
      date: {
        type: "string"
      },
      updatedAt: {
        type: "string"
      },
      category: {
        type: "string"
      },
      readingTime: {
        type: "string"
      },
      keywords: {
        type: "array",
        minItems: 6,
        maxItems: 14,
        items: {
          type: "string"
        }
      },
      heroLabel: {
        type: "string"
      },
      intro: {
        type: "string"
      },
      sections: {
        type: "array",
        minItems: 5,
        maxItems: 8,
        items: {
          type: "object",
          additionalProperties: false,
          required: ["heading", "paragraphs"],
          properties: {
            heading: {
              type: "string"
            },
            paragraphs: {
              type: "array",
              minItems: 2,
              maxItems: 4,
              items: {
                type: "string"
              }
            }
          }
        }
      },
      faq: {
        type: "array",
        minItems: 4,
        maxItems: 6,
        items: {
          type: "object",
          additionalProperties: false,
          required: ["question", "answer"],
          properties: {
            question: {
              type: "string"
            },
            answer: {
              type: "string"
            }
          }
        }
      },
      sources: {
        type: "array",
        minItems: 1,
        maxItems: 6,
        items: {
          type: "object",
          additionalProperties: false,
          required: ["title", "url"],
          properties: {
            title: {
              type: "string"
            },
            url: {
              type: "string"
            }
          }
        }
      },
      internalLinks: {
        type: "array",
        minItems: 4,
        maxItems: 8,
        items: {
          type: "object",
          additionalProperties: false,
          required: ["label", "href"],
          properties: {
            label: {
              type: "string"
            },
            href: {
              type: "string"
            }
          }
        }
      }
    }
  };
}

async function generateBlogPost(topic, existingSlugs) {
  const date = todayIsoDate();

  const systemPrompt = `
Jesteś redaktorem SEO bloga Fundacji Mediacji Sądowej i Pozasądowej w Krakowie.

Tworzysz wpisy informacyjne o mediacji. Nie udzielasz indywidualnej porady prawnej. Nie tworzysz porad "co zrobić w konkretnej sprawie". Piszesz spokojnie, profesjonalnie, zrozumiale i lokalnie pod SEO Kraków / Polska.

Zasady:
- Wpis musi mieć charakter informacyjny.
- Nie wymyślaj przepisów, stawek, rozporządzeń ani zasad postępowania.
- Jeżeli temat dotyczy kosztów, procedur sądowych, mediacji karnej, postępowania cywilnego albo aktualnego prawa, użyj web search i opieraj się wyłącznie na źródłach urzędowych: gov.pl, isap.sejm.gov.pl, eli.gov.pl, sejm.gov.pl albo sądy.gov.pl.
- Jeżeli temat nie wymaga podstaw prawnych, możesz użyć mniej źródeł, ale nadal unikaj twierdzeń kategorycznych bez podstawy.
- Nie obiecuj wyniku mediacji.
- Nie sugeruj, że mediator zastępuje sąd, adwokata, radcę prawnego albo psychologa.
- Meta title ma mieć maksymalnie około 60 znaków.
- Meta description ma mieć maksymalnie około 155 znaków.
- Artykuł ma mieć około 900-1400 słów.
- Zwróć wyłącznie JSON zgodny ze schematem.
`.trim();

  const userPrompt = `
Przygotuj nowy wpis blogowy.

Temat: ${topic.topic}
Sugerowany slug: ${topic.slugSuggestion}
Język: ${topic.language}
Kategoria: ${topic.category}
Data publikacji: ${date}

Istniejące slugi, których nie wolno powtórzyć:
${existingSlugs.map((slug) => `- ${slug}`).join("\n")}

Linki wewnętrzne, które warto wykorzystać:
- / — strona główna
- /cennik — cennik mediacji i kalkulator kosztów
- /kwalifikacje — kwalifikacje mediatora
- /blog — blog o mediacji
- /#karne — mediacje karne
- /#rodzinne — mediacje rodzinne
- /#kontakt — kontakt

Wygeneruj kompletny obiekt BlogPost do dopisania do lib/blog.ts.
`.trim();

  const requestBody = {
    model: OPENAI_MODEL,
    input: [
      {
        role: "system",
        content: systemPrompt
      },
      {
        role: "user",
        content: userPrompt
      }
    ],
    tools: [
      {
        type: "web_search_preview"
      }
    ],
    text: {
      format: {
        type: "json_schema",
        name: "blog_post",
        strict: true,
        schema: makeSchema()
      }
    }
  };

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI API error ${response.status}: ${errorText}`);
  }

  const responseJson = await response.json();
  const outputText = extractOutputText(responseJson);

  if (!outputText) {
    throw new Error("OpenAI response did not contain output text.");
  }

  const parsed = JSON.parse(outputText);

  parsed.date = date;
  parsed.updatedAt = date;

  if (existingSlugs.includes(parsed.slug)) {
    parsed.slug = `${parsed.slug}-${date}`;
  }

  if (!["pl", "en", "uk"].includes(parsed.language)) {
    throw new Error(`Invalid language: ${parsed.language}`);
  }

  if (!Array.isArray(parsed.sections) || parsed.sections.length < 5) {
    throw new Error("Generated post has too few sections.");
  }

  if (!Array.isArray(parsed.faq) || parsed.faq.length < 4) {
    throw new Error("Generated post has too few FAQ items.");
  }

  if (!Array.isArray(parsed.sources) || parsed.sources.length < 1) {
    throw new Error("Generated post has no sources.");
  }

  for (const source of parsed.sources) {
    if (!source.url || !source.url.startsWith("https://")) {
      throw new Error(`Invalid source URL: ${source.url}`);
    }
  }

  return parsed;
}

function serializeAsTsObject(post) {
  return JSON.stringify(post, null, 2)
    .split("\n")
    .map((line, index) => (index === 0 ? `  ${line}` : `  ${line}`))
    .join("\n");
}

async function insertPostIntoBlogFile(post) {
  const fileContent = await fs.readFile(BLOG_FILE_PATH, "utf8");

  const marker = "\n];\n\nexport function getBlogPosts";

  if (!fileContent.includes(marker)) {
    throw new Error(
      "Could not find insertion marker in lib/blog.ts. Expected blogPosts array followed by getBlogPosts function."
    );
  }

  const serializedPost = serializeAsTsObject(post);

  const updatedContent = fileContent.replace(
    marker,
    `,\n${serializedPost}\n];\n\nexport function getBlogPosts`
  );

  await fs.writeFile(BLOG_FILE_PATH, updatedContent, "utf8");
}

async function main() {
  console.log("Reading blog file:", BLOG_FILE_PATH);

  const fileContent = await fs.readFile(BLOG_FILE_PATH, "utf8");
  const existingSlugs = extractExistingSlugs(fileContent);
  const topic = chooseTopic(existingSlugs);

  console.log("Existing slugs:", existingSlugs.join(", ") || "none");
  console.log("Chosen topic:", topic.topic);

  const post = await generateBlogPost(topic, existingSlugs);

  console.log("Generated slug:", post.slug);
  console.log("Generated title:", post.title);

  await insertPostIntoBlogFile(post);

  console.log("Blog post inserted into lib/blog.ts");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
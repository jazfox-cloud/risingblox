import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { games, getGame } from "@/content/games";

const baseUrl = "https://risingblox.com";

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const game = getGame(params.slug);
  if (!game) return {};
  const description = game.guideIntro
    ? `${game.guideIntro} Verified beginner steps, FAQ, and codes status links for ${game.name}.`
    : `Beginner guide, early strategy, FAQ, and verified codes status for ${game.name} on Roblox.`;

  return {
    title: `${game.name} Roblox Beginner Guide`,
    description,
    alternates: {
      canonical: `${baseUrl}/guides/${game.slug}/`
    },
    openGraph: {
      title: `${game.name} Roblox Beginner Guide`,
      description,
      url: `${baseUrl}/guides/${game.slug}/`
    }
  };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const game = getGame(params.slug);
  if (!game) notFound();
  const faqItems =
    game.guideFaq ?? [
      {
        question: `Is this ${game.name} guide final?`,
        answer:
          "No. This MVP guide is intentionally short and should be expanded after search data shows which questions players ask."
      }
    ];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <p className="text-sm font-black uppercase text-coral">Beginner Guide</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight">
        {game.name} Beginner Guide
      </h1>
      <p className="mt-4 text-lg leading-8 text-gray-700">
        {game.guideIntro ??
          "Start with the highest-impact basics before spending currency or boosts."}
      </p>
      <p className="mt-3 text-sm text-gray-600">Last updated: {game.lastUpdated}</p>
      <div className="mt-5 flex flex-wrap gap-3 text-sm font-black">
        <Link className="rounded-md bg-mint px-4 py-2 text-ink" href={`/games/${game.slug}`}>
          Game profile
        </Link>
        <Link className="rounded-md bg-coral px-4 py-2 text-white" href={`/codes/${game.slug}`}>
          Codes status
        </Link>
      </div>
      {game.externalGuide ? (
        <p className="mt-5 rounded-md border border-black/10 bg-white p-4 text-sm leading-6 text-gray-600 shadow-sm">
          For the dedicated Iron Soul guide stack, including codes, forge,
          runes, race tier-list, weapons, and source notes, use{" "}
          <a className="font-black text-coral" href={game.externalGuide.url}>
            {game.externalGuide.label}
          </a>
          .
        </p>
      ) : null}

      <section className="content-prose mt-8 rounded-lg border border-black/10 bg-white p-6 shadow-sm">
        <h2>Best Early Strategy</h2>
        <ul>
          {game.beginnerTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>

        {game.guideSections?.map((section) => (
          <div key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
            <ul>
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}

        <h2>FAQ</h2>
        {faqItems.map((item) => (
          <div key={item.question}>
            <h3 className="mt-5 font-black text-ink">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>
    </article>
  );
}

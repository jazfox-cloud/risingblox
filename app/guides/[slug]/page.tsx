import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { games, getGame, hasIndexableCodes } from "@/content/games";
import { baseUrl, contentOpenGraph, defaultTwitterMetadata } from "@/app/metadata";

function toSectionId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return {};
  const description = game.guideDescription ?? (game.guideIntro
    ? `${game.guideIntro} Verified beginner steps, FAQ, and codes status links for ${game.name}.`
    : `Beginner guide, early strategy, FAQ, and verified codes status for ${game.name} on Roblox.`);

  return {
    title: game.slug === "iron-soul-dungeon" && game.guideTitle
      ? { absolute: game.guideTitle }
      : game.guideTitle ?? `${game.name} Roblox Beginner Guide`,
    description,
    alternates: {
      canonical: `${baseUrl}/guides/${game.slug}/`
    },
    openGraph: contentOpenGraph(
      game.guideTitle ?? `${game.name} Roblox Beginner Guide`,
      description,
      `${baseUrl}/guides/${game.slug}/`
    ),
    twitter: defaultTwitterMetadata()
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGame(slug);
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
        {game.guideTitle ?? `${game.name} Beginner Guide`}
      </h1>
      <p className="mt-4 text-lg leading-8 text-gray-700">
        {game.guideIntro ??
          "Start with the highest-impact basics before spending currency or boosts."}
      </p>
      <p className="mt-3 text-sm text-gray-600">Last updated: {game.lastUpdated}</p>
      {game.guideLastVerified ? (
        <aside className="mt-5 rounded-md border border-black/10 bg-white p-4 text-sm leading-6 text-gray-600 shadow-sm">
          <p className="font-black text-ink">Last verified: {game.guideLastVerified}</p>
          <p className="mt-1">
            Source:{" "}
            {game.guideSourceUrl ? (
              <a href={game.guideSourceUrl}>{game.guideSourceLabel ?? "Official Roblox page"}</a>
            ) : (
              game.guideSourceLabel ?? "Project source record"
            )}
            .
          </p>
          {game.guideSourceNote ? <p className="mt-1">{game.guideSourceNote}</p> : null}
        </aside>
      ) : null}
      <div className="mt-5 flex flex-wrap gap-3 text-sm font-black">
        <Link className="rounded-md bg-mint px-4 py-2 text-ink" href={`/games/${game.slug}/`}>
          Game profile
        </Link>
        {game.hasCodesPage !== false && hasIndexableCodes(game) ? (
          <Link className="rounded-md bg-coral px-4 py-2 text-white" href={`/codes/${game.slug}/`}>
            {game.activeCodes.length > 0 ? "Verified codes" : "Codes status"}
          </Link>
        ) : null}
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
      {game.slug === "iron-soul-dungeon" ? (
        <p className="mt-4 rounded-md border border-black/10 bg-white p-4 text-sm leading-6 text-gray-600 shadow-sm">
          For a focused rune priority breakdown, open the{" "}
          <Link className="font-black text-coral" href="/guides/iron-soul-dungeon-best-runes/">
            Iron Soul Dungeon best runes guide
          </Link>
          .
        </p>
      ) : null}
      {game.guideSections?.length ? (
        <nav className="mt-6 rounded-lg border border-black/10 bg-white p-5 shadow-sm" aria-label="Guide sections">
          <p className="text-sm font-black uppercase tracking-wide text-coral">In This Guide</p>
          <ul className="mt-3 grid gap-2 text-sm font-semibold text-ink sm:grid-cols-2">
            {game.guideSections.map((section) => (
              <li key={section.title}>
                <a className="hover:text-coral" href={`#${toSectionId(section.title)}`}>
                  {section.title}
                </a>
              </li>
            ))}
            <li>
              <a className="hover:text-coral" href="#faq">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
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
            <h2 id={toSectionId(section.title)}>{section.title}</h2>
            <p>{section.body}</p>
            <ul>
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}

        <h2 id="faq">FAQ</h2>
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

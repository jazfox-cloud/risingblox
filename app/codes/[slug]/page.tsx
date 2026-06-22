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
  const description = game.codesSummary
    ? `${game.codesSummary} Includes redemption steps, FAQ, and the latest checked status.`
    : `Checked ${game.name} Roblox codes, active code status, expired codes, and redemption steps.`;

  return {
    title: `${game.name} Roblox Codes`,
    description,
    alternates: {
      canonical: `${baseUrl}/codes/${game.slug}/`
    },
    openGraph: {
      title: `${game.name} Roblox Codes`,
      description,
      url: `${baseUrl}/codes/${game.slug}/`
    }
  };
}

export default function CodesPage({ params }: { params: { slug: string } }) {
  const game = getGame(params.slug);
  if (!game) notFound();
  const faqItems =
    game.codeFaq ?? [
      {
        question: `Are there any active ${game.name} codes?`,
        answer:
          game.activeCodes.length > 0
            ? `Yes. This page lists the currently tracked ${game.name} codes above.`
            : `There are no verified active ${game.name} codes listed right now.`
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
      <p className="text-sm font-black uppercase text-coral">Roblox Codes</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight">{game.name} Codes</h1>
      <p className="mt-4 text-gray-600">Last checked: {game.lastUpdated}</p>
      <div className="mt-5 flex flex-wrap gap-3 text-sm font-black">
        <Link className="rounded-md bg-mint px-4 py-2 text-ink" href={`/games/${game.slug}`}>
          Game profile
        </Link>
        <Link className="rounded-md bg-coral px-4 py-2 text-white" href={`/guides/${game.slug}`}>
          Beginner guide
        </Link>
      </div>
      {game.externalGuide ? (
        <p className="mt-4 rounded-md border border-black/10 bg-white p-4 text-sm leading-6 text-gray-600 shadow-sm">
          Need deeper data? Visit{" "}
          <a className="font-black text-coral" href={`${game.externalGuide.url}codes/`}>
            {game.externalGuide.label} codes log
          </a>{" "}
          for Iron Soul-specific source notes and update checks.
        </p>
      ) : null}

      <section className="mt-8 rounded-lg border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black">Active Codes</h2>
        <div className="mt-5 grid gap-3">
          {game.activeCodes.length > 0 ? (
            game.activeCodes.map((item) => (
              <div key={item.code} className="flex flex-col gap-2 rounded-md bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                <code className="text-lg font-black">{item.code}</code>
                <span className="text-sm text-gray-600">{item.reward}</span>
              </div>
            ))
          ) : (
            <div className="rounded-md border border-dashed border-gray-300 bg-gray-50 p-5">
              <p className="font-black">No verified active codes right now.</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {game.codesSummary ??
                  `We do not have any verified active ${game.name} codes listed at this time.`}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="content-prose mt-10">
        <h2>How We Check Codes</h2>
        <ul>
          {(game.codeCheckMethod ?? [
            "Review official game and developer channels when available.",
            "Avoid listing codes that cannot be verified.",
            "Update active and expired lists when a code status changes."
          ]).map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>

        <h2>How to Redeem</h2>
        <ol>
          <li>Open {game.name} on Roblox.</li>
          <li>Find the codes, settings, or rewards button inside the game.</li>
          <li>Enter the code exactly as shown and claim the reward.</li>
        </ol>

        <h2>Expired Codes</h2>
        {game.expiredCodes.length > 0 ? (
          <ul>
            {game.expiredCodes.map((code) => (
              <li key={code}>{code}</li>
            ))}
          </ul>
        ) : (
          <p>No verified expired codes are listed yet.</p>
        )}

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

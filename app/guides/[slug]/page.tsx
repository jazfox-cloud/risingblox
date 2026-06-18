import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { games, getGame } from "@/content/games";

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const game = getGame(params.slug);
  if (!game) return {};

  return {
    title: `${game.name} Roblox Beginner Guide`,
    description: `Beginner guide, starter strategy, tips, and FAQ for ${game.name} on Roblox.`
  };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const game = getGame(params.slug);
  if (!game) notFound();

  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-sm font-black uppercase text-coral">Beginner Guide</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight">
        {game.name} Beginner Guide
      </h1>
      <p className="mt-4 text-lg leading-8 text-gray-700">
        Start with the highest-impact basics before spending currency or boosts.
      </p>

      <section className="content-prose mt-8 rounded-lg border border-black/10 bg-white p-6 shadow-sm">
        <h2>Best Early Strategy</h2>
        <ul>
          {game.beginnerTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>

        <h2>FAQ</h2>
        <p>
          Is this guide final? No. This MVP guide is intentionally short and
          should be expanded after search data shows which questions players ask.
        </p>
      </section>
    </article>
  );
}

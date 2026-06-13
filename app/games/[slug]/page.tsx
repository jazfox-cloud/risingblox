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
    title: `${game.name} Profile`,
    description: `${game.name} Roblox profile with gameplay summary, trend stats, opportunity score, and update date.`
  };
}

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = getGame(params.slug);
  if (!game) notFound();

  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-sm font-black uppercase text-coral">{game.genre}</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight">{game.name}</h1>
      <p className="mt-4 text-lg leading-8 text-gray-700">{game.summary}</p>

      <dl className="mt-8 grid gap-4 rounded-lg border border-black/10 bg-white p-6 shadow-sm sm:grid-cols-4">
        <div>
          <dt className="text-sm text-gray-500">Online players</dt>
          <dd className="mt-1 text-2xl font-black">{game.onlinePlayers.toLocaleString()}</dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500">Like rate</dt>
          <dd className="mt-1 text-2xl font-black">{game.likeRate}%</dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500">Opportunity</dt>
          <dd className="mt-1 text-2xl font-black">{game.opportunityScore}</dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500">Last updated</dt>
          <dd className="mt-1 text-2xl font-black">{game.lastUpdated}</dd>
        </div>
      </dl>

      <section className="content-prose mt-10">
        <h2>Gameplay</h2>
        <p>
          {game.name} is tracked as a {game.genre.toLowerCase()} game with early
          demand signals. The first RisingBlox version keeps this profile concise
          so updates can happen quickly as player interest changes.
        </p>
        <h2>Tags</h2>
        <ul>
          {game.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}

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
    title: `${game.name} Codes`,
    description: `Active and expired ${game.name} Roblox codes, last checked date, and basic redemption steps.`
  };
}

export default function CodesPage({ params }: { params: { slug: string } }) {
  const game = getGame(params.slug);
  if (!game) notFound();

  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-sm font-black uppercase text-coral">Roblox Codes</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight">{game.name} Codes</h1>
      <p className="mt-4 text-gray-600">Last checked: {game.lastUpdated}</p>

      <section className="mt-8 rounded-lg border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black">Active Codes</h2>
        <div className="mt-5 grid gap-3">
          {game.activeCodes.map((item) => (
            <div key={item.code} className="flex flex-col gap-2 rounded-md bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between">
              <code className="text-lg font-black">{item.code}</code>
              <span className="text-sm text-gray-600">{item.reward}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="content-prose mt-10">
        <h2>How to Redeem</h2>
        <ol>
          <li>Open {game.name} on Roblox.</li>
          <li>Find the codes, settings, or rewards button inside the game.</li>
          <li>Enter the code exactly as shown and claim the reward.</li>
        </ol>

        <h2>Expired Codes</h2>
        <ul>
          {game.expiredCodes.map((code) => (
            <li key={code}>{code}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}

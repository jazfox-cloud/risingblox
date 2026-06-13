import Link from "next/link";
import { GameCard } from "@/components/GameCard";
import { games } from "@/content/games";

export default function Home() {
  const featured = games[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase text-coral">
            Rising Roblox Games
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
            Find the Roblox games starting to move before everyone talks about them.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-700">
            RisingBlox tracks emerging Roblox titles, beginner-friendly guides,
            active codes, and simple opportunity scores for creators and players.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="rounded-md bg-ink px-5 py-3 font-bold text-white" href="/trending">
              View Trending Games
            </Link>
            <Link className="rounded-md bg-white px-5 py-3 font-bold shadow-sm" href={`/codes/${featured.slug}`}>
              Today's Codes
            </Link>
          </div>
        </div>
        <aside className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
          <p className="text-sm font-black uppercase text-coral">Today's Pick</p>
          <h2 className="mt-2 text-3xl font-black">{featured.name}</h2>
          <p className="mt-3 text-gray-600">{featured.summary}</p>
          <dl className="mt-6 grid grid-cols-3 gap-3 text-sm">
            <div>
              <dt className="text-gray-500">Score</dt>
              <dd className="text-xl font-black">{featured.opportunityScore}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Likes</dt>
              <dd className="text-xl font-black">{featured.likeRate}%</dd>
            </div>
            <div>
              <dt className="text-gray-500">Online</dt>
              <dd className="text-xl font-black">
                {Math.round(featured.onlinePlayers / 1000)}k
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black">Latest Game Profiles</h2>
            <p className="mt-2 text-gray-600">Three seed games for the SEO MVP.</p>
          </div>
          <Link className="text-sm font-black text-coral" href="/trending">
            Full list
          </Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
}

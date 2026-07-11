import type { Metadata } from "next";
import Link from "next/link";
import { GameCard } from "@/components/GameCard";
import { games } from "@/content/games";
import { getDisplayStats } from "@/content/stats";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://risingblox.com/"
  }
};

export default function Home() {
  const featured = games[0];
  const featuredStats = getDisplayStats(featured);
  const latestCodesGame = games.find((game) => game.hasCodesPage !== false) ?? featured;
  const trendingNow = games.filter((game) =>
    ["drain-the-lake", "scale-slimy-fish", "anime-squadron"].includes(game.slug)
  );
  const standalonePages = [
    {
      title: "Animal Hospital (Anomaly)",
      summary:
        "A verified Roblox survival trend with a dedicated profile, beginner guide, and codes status page.",
      links: [
        { href: "/games/animal-hospital-anomaly/", label: "Profile" },
        { href: "/guides/animal-hospital-anomaly/", label: "Guide" },
        { href: "/codes/animal-hospital-anomaly/", label: "Codes" }
      ]
    }
  ];

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
            active codes, and manually reviewed watchlist signals for creators and players.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="rounded-md bg-ink px-5 py-3 font-bold text-white" href="/trending/">
              View Trending Games
            </Link>
            <Link className="rounded-md bg-white px-5 py-3 font-bold shadow-sm" href={`/codes/${latestCodesGame.slug}/`}>
              Latest Verified Codes
            </Link>
          </div>
        </div>
        <aside className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
          <p className="text-sm font-black uppercase text-coral">Today's Pick</p>
          <h2 className="mt-2 text-3xl font-black">{featured.name}</h2>
          <p className="mt-3 text-gray-600">{featured.summary}</p>
          <dl className="mt-6 grid grid-cols-3 gap-3 text-sm">
            <div>
              <dt className="text-gray-500">Status</dt>
              <dd className="text-xl font-black">{featuredStats.opportunity}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Likes</dt>
              <dd className="text-xl font-black">{featuredStats.likeRate}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Online</dt>
              <dd className="text-xl font-black">{featuredStats.onlinePlayers}</dd>
            </div>
          </dl>
          <p className="mt-5 text-xs leading-5 text-gray-500">
            Stats are shown only after manual verification against public Roblox
            signals. Early watchlist entries use status labels instead of
            placeholder numbers.
          </p>
        </aside>
      </section>

      <section className="mt-14 rounded-xl border border-black/10 bg-ink p-6 text-white shadow-sm sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-limepop">
              New this week
            </p>
            <h2 className="mt-2 text-3xl font-black">Trending Now</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
              Fresh Roblox opportunities verified against public game data before
              they are promoted on RisingBlox.
            </p>
          </div>
          <Link className="text-sm font-black text-limepop" href="/trending/">
            See the full watchlist
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {trendingNow.map((game) => {
            const stats = getDisplayStats(game);
            return (
              <article className="rounded-lg bg-white/10 p-5" key={game.slug}>
                <p className="text-xs font-bold uppercase text-limepop">{stats.opportunity}</p>
                <h3 className="mt-2 text-xl font-black">{game.name}</h3>
                <p className="mt-2 text-sm text-white/70">
                  {stats.onlinePlayers} online · {stats.likeRate} likes
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-sm font-bold">
                  <Link className="rounded-md bg-white px-3 py-2 text-ink" href={`/games/${game.slug}/`}>
                    Profile
                  </Link>
                  <Link className="rounded-md bg-white/10 px-3 py-2" href={`/guides/${game.slug}/`}>
                    Guide
                  </Link>
                  {game.hasCodesPage !== false ? (
                    <Link className="rounded-md bg-coral px-3 py-2" href={`/codes/${game.slug}/`}>
                      Codes
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black">Latest Game Profiles</h2>
            <p className="mt-2 text-gray-600">
              Verified Roblox game pages with profiles, guides, and code checks.
            </p>
          </div>
          <Link className="text-sm font-black text-coral" href="/trending/">
            Full list
          </Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-black">Recently Verified Standalone Pages</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {standalonePages.map((item) => (
            <article
              className="rounded-lg border border-black/10 bg-white p-5 shadow-sm"
              key={item.title}
            >
              <p className="text-xs font-bold uppercase text-coral">
                Roblox trend watch
              </p>
              <h3 className="mt-2 text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {item.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm font-bold">
                {item.links.map((link) => (
                  <Link
                    className="rounded-md bg-gray-100 px-3 py-2 first:bg-ink first:text-white"
                    href={link.href}
                    key={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

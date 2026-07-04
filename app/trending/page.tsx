import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/content/games";
import { getDisplayStats } from "@/content/stats";

export const metadata: Metadata = {
  title: "Trending Roblox Games",
  description:
    "A manually maintained watchlist of rising Roblox games with verification status, review notes, and update dates.",
  alternates: {
    canonical: "https://risingblox.com/trending/"
  }
};

export default function TrendingPage() {
  const standaloneWatchlist = [
    {
      name: "Animal Hospital (Anomaly)",
      genre: "Survival / Anomaly",
      status: "Verified Roblox source",
      updated: "2026-07-03",
      href: "/games/animal-hospital-anomaly/",
      guideHref: "/guides/animal-hospital-anomaly/",
      codesHref: "/codes/animal-hospital-anomaly/"
    }
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-4xl font-black tracking-tight">Trending Roblox Games</h1>
      <p className="mt-4 max-w-3xl text-gray-600">
        A small, focused watchlist for new and rising Roblox games. RisingBlox
        uses status labels until public Roblox signals can be manually verified.
      </p>
      <section className="mt-6 rounded-lg border border-black/10 bg-white p-5 text-sm leading-6 text-gray-600 shadow-sm">
        <h2 className="text-base font-black text-ink">Data Methodology</h2>
        <p className="mt-2">
          Online players, like rate, launch timing, and opportunity labels are
          reviewed manually. We do not publish exact numbers unless they can be
          checked against public Roblox pages, developer channels, or a recorded
          review snapshot.
        </p>
      </section>
      <div className="mt-8 overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3">Game</th>
              <th className="px-4 py-3">Online</th>
              <th className="px-4 py-3">Like Rate</th>
              <th className="px-4 py-3">Launch</th>
              <th className="px-4 py-3">Opportunity</th>
              <th className="px-4 py-3">Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/10">
            {games.map((game) => {
              const stats = getDisplayStats(game);

              return (
                <tr key={game.slug}>
                  <td className="px-4 py-4">
                    <Link className="font-black hover:text-coral" href={`/games/${game.slug}`}>
                      {game.name}
                    </Link>
                    <p className="text-gray-500">{game.genre}</p>
                  </td>
                  <td className="px-4 py-4">{stats.onlinePlayers}</td>
                  <td className="px-4 py-4">{stats.likeRate}</td>
                  <td className="px-4 py-4">{stats.launchWindow}</td>
                  <td className="px-4 py-4 font-black">{stats.opportunity}</td>
                  <td className="px-4 py-4">{stats.lastChecked}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <section className="mt-10 rounded-lg border border-black/10 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-black">Standalone Trend Checks</h2>
        <div className="mt-5 grid gap-4">
          {standaloneWatchlist.map((item) => (
            <article
              className="flex flex-col gap-3 border-t border-black/10 pt-4 first:border-t-0 first:pt-0 sm:flex-row sm:items-center sm:justify-between"
              key={item.name}
            >
              <div>
                <Link className="font-black hover:text-coral" href={item.href}>
                  {item.name}
                </Link>
                <p className="mt-1 text-sm text-gray-500">
                  {item.genre} - {item.status} - Updated {item.updated}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-sm font-bold">
                <Link className="rounded-md bg-ink px-3 py-2 text-white" href={item.href}>
                  Profile
                </Link>
                <Link className="rounded-md bg-gray-100 px-3 py-2" href={item.guideHref}>
                  Guide
                </Link>
                <Link className="rounded-md bg-gray-100 px-3 py-2" href={item.codesHref}>
                  Codes
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

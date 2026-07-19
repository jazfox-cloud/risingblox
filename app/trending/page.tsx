import Link from "next/link";
import { games, hasIndexableCodes } from "@/content/games";
import { getDisplayStats } from "@/content/stats";
import { staticPageMetadata } from "@/app/static-page-metadata";

export const metadata = staticPageMetadata(
  "trending",
  "Trending Roblox Games",
  "A manually maintained watchlist of rising Roblox games with verification status, review notes, and update dates."
);

export default function TrendingPage() {
  const newThisWeek = games.filter((game) =>
    ["drain-the-lake", "scale-slimy-fish"].includes(game.slug)
  );
  const recentlyUpdated = games.filter((game) =>
    ["anime-squadron", "mini-war", "iron-soul-dungeon"].includes(game.slug)
  );
  const standaloneWatchlist = [
    {
      name: "Animal Hospital (Anomaly)",
      genre: "Survival / Anomaly",
      status: "Verified Roblox source",
      updated: "2026-07-03",
      href: "/games/animal-hospital-anomaly/",
      guideHref: "/guides/animal-hospital-anomaly/"
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
      <section className="mt-8">
        <div>
          <p className="text-xs font-black uppercase text-coral">Verified 2026-07-10</p>
          <h2 className="mt-2 text-2xl font-black">New This Week</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
            These games passed a source check and received a deliberately small
            first page set. Search Console signals will decide whether they expand.
          </p>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {newThisWeek.map((game) => {
            const stats = getDisplayStats(game);
            return (
              <article className="rounded-lg border border-black/10 bg-white p-5 shadow-sm" key={game.slug}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase text-coral">{game.genre}</p>
                    <h3 className="mt-2 text-xl font-black">{game.name}</h3>
                  </div>
                  <span className="rounded-full bg-limepop/30 px-3 py-1 text-sm font-black">
                    {stats.opportunity}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">{game.summary}</p>
                <p className="mt-4 text-sm font-bold text-gray-700">
                  {stats.onlinePlayers} online · {stats.likeRate} likes
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-sm font-bold">
                  <Link className="rounded-md bg-ink px-3 py-2 text-white" href={`/games/${game.slug}/`}>
                    Profile
                  </Link>
                  <Link className="rounded-md bg-gray-100 px-3 py-2" href={`/guides/${game.slug}/`}>
                    Guide
                  </Link>
                  {game.hasCodesPage !== false && hasIndexableCodes(game) ? (
                    <Link className="rounded-md bg-coral px-3 py-2 text-white" href={`/codes/${game.slug}/`}>
                      Codes
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-black/10 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-black">Recently Updated</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {recentlyUpdated.map((game) => (
            <Link
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-bold hover:bg-mint"
              href={`/games/${game.slug}/`}
              key={game.slug}
            >
              {game.name} · {game.lastUpdated}
            </Link>
          ))}
        </div>
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
                    <Link className="font-black hover:text-coral" href={`/games/${game.slug}/`}>
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
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

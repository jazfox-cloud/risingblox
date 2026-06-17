import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/content/games";

export const metadata: Metadata = {
  title: "Trending Roblox Games",
  description:
    "A manually maintained watchlist of rising Roblox games with verification status, review notes, and update dates."
};

export default function TrendingPage() {
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
            {games.map((game) => (
              <tr key={game.slug}>
                <td className="px-4 py-4">
                  <Link className="font-black hover:text-coral" href={`/games/${game.slug}`}>
                    {game.name}
                  </Link>
                  <p className="text-gray-500">{game.genre}</p>
                </td>
                <td className="px-4 py-4">{game.onlinePlayersStatus}</td>
                <td className="px-4 py-4">{game.likeRateStatus}</td>
                <td className="px-4 py-4">{game.launchWindow}</td>
                <td className="px-4 py-4 font-black">{game.opportunityStatus}</td>
                <td className="px-4 py-4">{game.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

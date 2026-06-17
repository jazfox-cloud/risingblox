import Link from "next/link";
import type { Game } from "@/content/games";

export function GameCard({ game }: { game: Game }) {
  return (
    <article className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase text-coral">{game.genre}</p>
          <h3 className="mt-2 text-xl font-black">{game.name}</h3>
        </div>
        <span className="rounded-full bg-limepop/30 px-3 py-1 text-sm font-black">
          {game.opportunityStatus}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-gray-600">{game.summary}</p>
      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="font-black">{game.onlinePlayersStatus}</p>
          <p className="text-gray-500">Online players</p>
        </div>
        <div>
          <p className="font-black">{game.likeRateStatus}</p>
          <p className="text-gray-500">Like rate</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2 text-sm font-bold">
        <Link className="rounded-md bg-ink px-3 py-2 text-white" href={`/games/${game.slug}`}>
          Profile
        </Link>
        <Link className="rounded-md bg-gray-100 px-3 py-2" href={`/codes/${game.slug}`}>
          Codes
        </Link>
        <Link className="rounded-md bg-gray-100 px-3 py-2" href={`/guides/${game.slug}`}>
          Guide
        </Link>
      </div>
    </article>
  );
}

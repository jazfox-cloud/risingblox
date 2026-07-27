import { hasIndexableCodes, type Game } from "@/content/games";
import { getDisplayStats } from "@/content/stats";
import { TrackedContentLink } from "@/components/TrackedContentLink";

export function GameCard({ game }: { game: Game }) {
  const stats = getDisplayStats(game);

  return (
    <article className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase text-coral">{game.genre}</p>
          <h3 className="mt-2 text-xl font-black">{game.name}</h3>
        </div>
        <span className="rounded-full bg-limepop/30 px-3 py-1 text-sm font-black">
          {stats.opportunity}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-gray-600">{game.summary}</p>
      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="font-black">{stats.onlinePlayers}</p>
          <p className="text-gray-500">Online players</p>
        </div>
        <div>
          <p className="font-black">{stats.likeRate}</p>
          <p className="text-gray-500">Like rate</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2 text-sm font-bold">
        <TrackedContentLink className="rounded-md bg-ink px-3 py-2 text-white" contentSlug={game.slug} contentType="game" href={`/games/${game.slug}/`} placement="game_card">
          Profile
        </TrackedContentLink>
        {stats.sourceUrl ? (
          <TrackedContentLink
            className="rounded-md bg-coral px-3 py-2 text-white"
            contentSlug={game.slug}
            contentType="game"
            href={stats.sourceUrl}
            placement="game_card"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Play
          </TrackedContentLink>
        ) : null}
        {game.hasCodesPage !== false && hasIndexableCodes(game) ? (
          <TrackedContentLink className="rounded-md bg-gray-100 px-3 py-2" contentSlug={game.slug} contentType="codes" href={`/codes/${game.slug}/`} placement="game_card">
            Codes
          </TrackedContentLink>
        ) : null}
        <TrackedContentLink className="rounded-md bg-gray-100 px-3 py-2" contentSlug={game.slug} contentType="guide" href={`/guides/${game.slug}/`} placement="game_card">
          Guide
        </TrackedContentLink>
        {game.externalGuide ? (
          <TrackedContentLink
            className="rounded-md bg-limepop px-3 py-2 text-ink"
            contentSlug={game.slug}
            contentType="external"
            href={game.externalGuide.url}
            placement="game_card"
            rel="noopener noreferrer"
            target="_blank"
          >
            {game.externalGuide.label}
          </TrackedContentLink>
        ) : null}
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { games, getGame } from "@/content/games";
import { getDisplayStats } from "@/content/stats";

const baseUrl = "https://risingblox.com";

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return {};
  const title = game.profileTitle ?? `${game.name} Roblox Game Profile`;
  const description =
    game.profileDescription ??
    `${game.name} Roblox profile with gameplay overview, official play link, beginner guidance, and verified codes status.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/games/${game.slug}/`
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/games/${game.slug}/`
    }
  };
}

export default async function GamePage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();
  const stats = getDisplayStats(game);
  const guideLinkLabel = ["iron-soul-dungeon", "noob-incremental"].includes(game.slug)
    ? `${game.name} progression guide`
    : `${game.name} beginner guide`;

  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-sm font-black uppercase text-coral">{game.genre}</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight">{game.name}</h1>
      <p className="mt-4 text-lg leading-8 text-gray-700">{game.summary}</p>
      {stats.sourceUrl ? (
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="rounded-md bg-ink px-5 py-3 font-bold text-white"
            href={stats.sourceUrl}
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Play on Roblox
          </a>
          {game.slug === "iron-soul-dungeon" ? (
            <Link
              className="rounded-md bg-mint px-5 py-3 font-bold text-ink shadow-sm"
              href={`/guides/${game.slug}/`}
            >
              Progression guide
            </Link>
          ) : null}
          {game.hasCodesPage !== false ? (
            <a
              className="rounded-md bg-white px-5 py-3 font-bold shadow-sm"
              href={`/codes/${game.slug}/`}
            >
              Codes status
            </a>
          ) : null}
          {game.externalGuide ? (
            <a
              className="rounded-md bg-coral px-5 py-3 font-bold text-white shadow-sm"
              href={game.externalGuide.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {game.externalGuide.label}
            </a>
          ) : null}
        </div>
      ) : (
        <div className="mt-6 rounded-md border border-dashed border-gray-300 bg-gray-50 p-4 text-sm text-gray-600">
          Roblox play link is pending source verification.
        </div>
      )}

      <dl className="mt-8 grid gap-4 rounded-lg border border-black/10 bg-white p-6 shadow-sm sm:grid-cols-4">
        <div>
          <dt className="text-sm text-gray-500">Online players</dt>
          <dd className="mt-1 text-2xl font-black">{stats.onlinePlayers}</dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500">Like rate</dt>
          <dd className="mt-1 text-2xl font-black">{stats.likeRate}</dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500">Opportunity</dt>
          <dd className="mt-1 text-2xl font-black">{stats.opportunity}</dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500">Last updated</dt>
          <dd className="mt-1 text-2xl font-black">{stats.lastChecked}</dd>
        </div>
      </dl>

      <section className="content-prose mt-10">
        <h2>Gameplay</h2>
        <p>
          {game.profileIntro ??
            `${game.name} is tracked as a ${game.genre.toLowerCase()} game with early watchlist signals. The first RisingBlox version keeps this profile concise so updates can happen quickly when public data can be checked.`}
        </p>
        {game.profileSections?.map((section) => (
          <div key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
            <ul>
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
        <h2>Next Steps</h2>
        <p>
          Continue with the{" "}
          <Link href={`/guides/${game.slug}/`}>{guideLinkLabel}</Link>
          {game.hasCodesPage !== false ? (
            <>
              , or check the{" "}
              <Link href={`/codes/${game.slug}/`}>{game.name} codes status</Link>
            </>
          ) : null}
          .
        </p>
        <h2>Data Notes</h2>
        <p>
          RisingBlox does not treat placeholder numbers as verified stats. Online
          player counts, like rates, launch timing, and opportunity labels are
          updated after manual review against public Roblox signals or a recorded
          source snapshot.
        </p>
        <p>
          Current data source: {stats.sourceUrl ? (
            <a href={stats.sourceUrl}>{stats.sourceLabel}</a>
          ) : (
            stats.sourceLabel
          )}.
        </p>
        {game.externalGuide ? (
          <>
            <h2>Dedicated Deep-Dive</h2>
            <p>
              RisingBlox keeps this as a compact trend profile. For source-first
              Iron Soul guide pages, codes, forge notes, rune research,
              race-tier-list checks, weapon planning, and source logs, visit{" "}
              <a href={game.externalGuide.url}>{game.externalGuide.label}</a>.
            </p>
          </>
        ) : null}
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

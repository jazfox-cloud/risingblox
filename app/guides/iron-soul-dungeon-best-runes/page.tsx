import type { Metadata } from "next";
import Link from "next/link";
import { baseUrl, contentOpenGraph, defaultTwitterMetadata } from "@/app/metadata";

const lastUpdated = "2026-07-16";
const officialRobloxUrl =
  "https://www.roblox.com/games/117533937949084/Iron-Soul-Dungeon";

const faqItems = [
  {
    question: "What are the best runes in Iron Soul: Dungeon?",
    answer:
      "The current official Roblox description does not publish rune names, effects, drop rates, or a ranked best setup. Verify the exact in-game rune text and test one change against the progression blocker you are trying to solve."
  },
  {
    question: "Does RisingBlox have a verified Iron Soul rune tier list?",
    answer:
      "No. A tier list would require current rune names, effects, version context, and repeatable evidence. Those inputs are not present in the official source used for this update."
  },
  {
    question: "How should I compare two runes?",
    answer:
      "Record the current in-game text, change one rune at a time, and repeat the same familiar route. Compare the blocker you can observe instead of relying on an unsupported rarity label."
  },
  {
    question: "Where should I start before testing runes?",
    answer:
      "Start with the Iron Soul Dungeon progression guide to identify whether the current problem is clear speed, forge progress, or survival, then test only a rune whose current text relates to that problem."
  }
];

export const metadata: Metadata = {
  title: "Iron Soul Dungeon Runes Guide",
  description:
    "A conservative Iron Soul Dungeon runes guide explaining what to verify in game, how to compare rune changes, and why RisingBlox does not publish unsupported rune rankings or drop rates.",
  alternates: {
    canonical: `${baseUrl}/guides/iron-soul-dungeon-best-runes/`
  },
  openGraph: contentOpenGraph(
    "Iron Soul Dungeon Runes Guide",
    "Verify current rune text, compare one change at a time, and avoid unsupported Iron Soul rune rankings or drop-rate claims.",
    `${baseUrl}/guides/iron-soul-dungeon-best-runes/`
  ),
  twitter: defaultTwitterMetadata()
};

export default function IronSoulDungeonBestRunesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <p className="text-sm font-black uppercase text-coral">Iron Soul Guide</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight">
        Iron Soul Dungeon Runes: What to Verify Before You Build
      </h1>
      <p className="mt-4 text-lg leading-8 text-gray-700">
        The official Iron Soul: Dungeon Roblox description checked on 2026-07-16
        explains combat, ore, rare materials, forges, weapons, skill-tree paths,
        and dungeons. It does not document rune names, effects, odds, drop rates,
        or a best setup. This page therefore provides a verification and testing
        process instead of presenting an unsupported rune tier list.
      </p>
      <p className="mt-3 text-sm text-gray-600">Last verified: {lastUpdated}</p>

      <div className="mt-5 flex flex-wrap gap-3 text-sm font-black">
        <Link
          className="rounded-md bg-mint px-4 py-2 text-ink"
          href="/guides/iron-soul-dungeon/"
        >
          Iron Soul progression guide
        </Link>
        <Link
          className="rounded-md bg-coral px-4 py-2 text-white"
          href="/games/iron-soul-dungeon/"
        >
          Game profile
        </Link>
        <a
          className="rounded-md bg-ink px-4 py-2 text-white"
          href={officialRobloxUrl}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Official Roblox page
        </a>
      </div>

      <section className="content-prose mt-8 rounded-lg border border-black/10 bg-white p-6 shadow-sm">
        <h2>Start With the Progression Blocker</h2>
        <p>
          Before comparing runes, identify the problem visible in a repeatable
          route. The progression guide uses three broad checks supported by the
          official game framework: monster clear speed, forge progression, and
          surviving a harder dungeon attempt. A rune claim is useful only after
          its current in-game text can be connected to one of those observed
          problems.
        </p>

        <h2>Rune Verification Checklist</h2>
        <ol>
          <li>Record the exact rune name and effect shown in the current game.</li>
          <li>Record the Roblox update or game version being tested.</li>
          <li>Change one rune or related choice at a time.</li>
          <li>Repeat the same familiar route so the result is comparable.</li>
          <li>Keep the change only when it improves the blocker you identified.</li>
        </ol>

        <h2>What Not to Assume</h2>
        <ul>
          <li>Rarity alone does not prove that a rune is best for every route.</li>
          <li>An old screenshot does not prove the current effect or value.</li>
          <li>A copied tier list does not verify rune names, odds, or drop rates.</li>
          <li>Skill-tree labels from the official description are not rune data.</li>
        </ul>

        <h2>Source Boundary</h2>
        <p>
          This update used the official Roblox game page and Roblox Games API.
          Those sources verify the public Iron Soul progression framework, but
          they do not expose a rune table. Exact rune claims remain excluded
          until supported by official text, a developer-linked source, or logged
          in-game verification.
        </p>

        <h2>FAQ</h2>
        {faqItems.map((item) => (
          <div key={item.question}>
            <h3 className="mt-5 font-black text-ink">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>
    </article>
  );
}

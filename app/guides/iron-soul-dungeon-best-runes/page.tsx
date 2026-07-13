import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://risingblox.com";
const lastUpdated = "2026-07-13";

const robloxSnapshot = {
  checked: "2026-07-13",
  source: "Roblox public game data and the official Iron Soul: Dungeon Roblox page",
  onlinePlayers: "13,820",
  visits: "124,506,505",
  updatedAt: "2026-07-10T12:35:59Z",
  officialUrl: "https://www.roblox.com/games/117533937949084/Iron-Soul-Dungeon"
};

const faqItems = [
  {
    question: "What are the best runes in Iron Soul: Dungeon?",
    answer:
      "For most beginners, the best rune setup is the one that fixes the current blocker: damage when monsters take too long, survival when boss waves end runs early, or farming consistency when materials and ore are the bottleneck."
  },
  {
    question: "Should I copy a single rune tier list?",
    answer:
      "Use tier lists as a starting point, not as a rule. RisingBlox avoids exact rune rankings unless the claim can be tied to official, in-game, or reliable logged evidence."
  },
  {
    question: "Which rune type should I choose for boss waves?",
    answer:
      "Prioritize survival and reliable damage for boss waves. A setup that keeps the run alive usually beats a high-risk farming setup when the boss is the wall."
  },
  {
    question: "Are rune drop rates verified?",
    answer:
      "No verified rune drop-rate table is listed here. This page focuses on practical priority logic until source-backed rune data is available."
  }
];

export const metadata: Metadata = {
  title: "Iron Soul Dungeon Best Runes Guide - Rune Priority by Playstyle",
  description:
    "A conservative Iron Soul Dungeon best runes guide for Roblox players, covering damage, survival, boss waves, farming, and beginner rune priority without unverified drop-rate claims.",
  alternates: {
    canonical: `${baseUrl}/guides/iron-soul-dungeon-best-runes/`
  },
  openGraph: {
    title: "Iron Soul Dungeon Best Runes Guide",
    description:
      "Choose Iron Soul Dungeon runes by playstyle: damage, survival, boss waves, and farming priority based on your current progression blocker.",
    url: `${baseUrl}/guides/iron-soul-dungeon-best-runes/`
  }
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
        Iron Soul Dungeon Best Runes Guide
      </h1>
      <p className="mt-4 text-lg leading-8 text-gray-700">
        The best Iron Soul: Dungeon rune choice depends on the wall in front of
        you. Use damage when normal enemies slow the run, survival when boss
        waves end attempts, and farming consistency when ore or materials are
        blocking the next forge step.
      </p>
      <p className="mt-3 text-sm text-gray-600">Last updated: {lastUpdated}</p>

      <div className="mt-5 flex flex-wrap gap-3 text-sm font-black">
        <Link className="rounded-md bg-mint px-4 py-2 text-ink" href="/guides/iron-soul-dungeon/">
          Beginner guide
        </Link>
        <Link className="rounded-md bg-coral px-4 py-2 text-white" href="/games/iron-soul-dungeon/">
          Game profile
        </Link>
        <a
          className="rounded-md bg-ink px-4 py-2 text-white"
          href={robloxSnapshot.officialUrl}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Official Roblox page
        </a>
      </div>

      <section className="content-prose mt-8 rounded-lg border border-black/10 bg-white p-6 shadow-sm">
        <h2>Quick Rune Priority</h2>
        <p>
          Do not choose runes only by rarity or a copied tier label. Start with
          the problem that is stopping progress, then pick the rune direction
          that makes the next run more consistent.
        </p>
        <ul>
          <li>Damage priority: use when regular enemies take too long to clear.</li>
          <li>Survival priority: use when boss waves or dungeon pressure end runs early.</li>
          <li>Farming priority: use when ore, materials, or forge progress are the bottleneck.</li>
          <li>Balanced priority: use when you are testing a new dungeon route for the first time.</li>
        </ul>

        <h2>Early Game Rune Setup</h2>
        <p>
          Early Iron Soul runs should favor consistent clears over risky
          optimization. If a rune choice helps you finish more rooms, return to
          the forge faster, or reduce failed attempts, it is usually stronger
          than a narrow damage choice that only works in ideal fights.
        </p>
        <ul>
          <li>Pick reliable damage if normal monsters are the slowest part.</li>
          <li>Pick survival if you reach rewards but fail before banking progress.</li>
          <li>Do not spend rare resources chasing every rune claim before testing the route.</li>
        </ul>

        <h2>Boss Wave Strategy</h2>
        <p>
          Boss waves reward stability. A farming setup can be useful before the
          boss, but if the boss is ending the run, the rune priority should move
          toward survival plus steady damage.
        </p>
        <ul>
          <li>Use survival when the boss removes too much health too quickly.</li>
          <li>Use damage when you survive but the fight takes too long.</li>
          <li>Use balanced choices when learning attack timing or a new dungeon area.</li>
        </ul>

        <h2>Farming and Forge Runs</h2>
        <p>
          If your main goal is ore or material farming, judge runes by repeat
          speed and failure rate. The best farming rune setup is the one that
          lets you repeat the same route with fewer interruptions.
        </p>
        <ul>
          <li>Favor runes that shorten the route you already farm consistently.</li>
          <li>Return to forge upgrades when farming starts to slow down.</li>
          <li>Switch away from pure farming when the next dungeon boss becomes the wall.</li>
        </ul>

        <h2>Verified Source Snapshot</h2>
        <p>
          RisingBlox checked Iron Soul: Dungeon against {robloxSnapshot.source} on{" "}
          {robloxSnapshot.checked}. Counts can change quickly after Roblox
          updates, so treat this as a freshness signal.
        </p>
        <ul>
          <li>Online players at check: {robloxSnapshot.onlinePlayers}</li>
          <li>Visits at check: {robloxSnapshot.visits}</li>
          <li>Latest Roblox update timestamp seen: {robloxSnapshot.updatedAt}</li>
        </ul>

        <h2>What We Are Not Claiming Yet</h2>
        <p>
          This page does not publish exact rune drop rates, hidden mechanics, or
          a hard ranked tier list. Those claims need official text, in-game
          evidence, or reliable logged testing before they belong on RisingBlox.
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

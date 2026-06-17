export type Game = {
  slug: string;
  name: string;
  genre: string;
  summary: string;
  launchWindow: string;
  onlinePlayers: number;
  likeRate: number;
  opportunityScore: number;
  lastUpdated: string;
  tags: string[];
  beginnerTips: string[];
  activeCodes: { code: string; reward: string }[];
  expiredCodes: string[];
  codesSummary?: string;
  codeCheckMethod?: string[];
  codeFaq?: { question: string; answer: string }[];
};

export const games: Game[] = [
  {
    slug: "grow-a-garden-2",
    name: "Grow a Garden 2",
    genre: "Simulator / Farming",
    summary:
      "A cozy Roblox farming experience built around planting, upgrading, and compounding harvest gains over repeated sessions.",
    launchWindow: "2026",
    onlinePlayers: 18400,
    likeRate: 91,
    opportunityScore: 86,
    lastUpdated: "2026-06-17",
    tags: ["farming", "simulator", "casual"],
    beginnerTips: [
      "Prioritize seed upgrades before cosmetic purchases.",
      "Reinvest early harvest rewards to unlock faster growth loops.",
      "Check code pages before long sessions to avoid missing boosts."
    ],
    activeCodes: [],
    expiredCodes: [],
    codesSummary:
      "No verified active Grow a Garden 2 codes are available right now. We only list a code as active after it can be checked against reliable public sources or an in-game redemption flow.",
    codeCheckMethod: [
      "Check the Roblox game page and developer-linked channels for official code announcements.",
      "Compare new code claims against multiple recent sources before adding them.",
      "Move any unconfirmed or expired claim out of the active codes list."
    ],
    codeFaq: [
      {
        question: "Are there any active Grow a Garden 2 codes right now?",
        answer:
          "We do not have any verified active Grow a Garden 2 codes listed at this time."
      },
      {
        question: "Why are there no codes listed?",
        answer:
          "RisingBlox avoids publishing placeholder or unverified Roblox codes. A code is added only when it can be checked with enough confidence."
      },
      {
        question: "How often is this page checked?",
        answer:
          "This page is reviewed during RisingBlox content checks and updated when a credible new code appears."
      }
    ]
  },
  {
    slug: "mini-war",
    name: "Mini War",
    genre: "Strategy / Battle",
    summary:
      "A fast round-based Roblox strategy game where small squads, upgrades, and timing decide each match.",
    launchWindow: "2026",
    onlinePlayers: 9200,
    likeRate: 88,
    opportunityScore: 78,
    lastUpdated: "2026-06-13",
    tags: ["strategy", "combat", "rounds"],
    beginnerTips: [
      "Learn one unit path before spreading currency across every upgrade.",
      "Watch enemy timing and save burst abilities for crowded pushes.",
      "Join low-pressure rooms first to understand map pacing."
    ],
    activeCodes: [
      { code: "MINIRISE", reward: "Coins" },
      { code: "TACTICS", reward: "Starter boost" }
    ],
    expiredCodes: ["LAUNCHMINI"]
  },
  {
    slug: "noob-incremental",
    name: "Noob Incremental",
    genre: "Incremental / Idle",
    summary:
      "An incremental Roblox game focused on layered upgrades, rebirth paths, and steady account progression.",
    launchWindow: "2026",
    onlinePlayers: 6100,
    likeRate: 93,
    opportunityScore: 82,
    lastUpdated: "2026-06-13",
    tags: ["incremental", "idle", "rebirth"],
    beginnerTips: [
      "Buy income upgrades first, then chase multipliers.",
      "Rebirth when the next run will clearly outpace the current one.",
      "Use boosts during active play instead of leaving them idle."
    ],
    activeCodes: [
      { code: "NOOBSTART", reward: "Early coins" },
      { code: "INCREMENT", reward: "Temporary multiplier" }
    ],
    expiredCodes: ["BETAUP"]
  }
];

export function getGame(slug: string) {
  return games.find((game) => game.slug === slug);
}

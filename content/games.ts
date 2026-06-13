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
    lastUpdated: "2026-06-13",
    tags: ["farming", "simulator", "casual"],
    beginnerTips: [
      "Prioritize seed upgrades before cosmetic purchases.",
      "Reinvest early harvest rewards to unlock faster growth loops.",
      "Check code pages before long sessions to avoid missing boosts."
    ],
    activeCodes: [
      { code: "GARDENRISE", reward: "Starter coins and seed boost" },
      { code: "BLOOMSOON", reward: "Short growth speed boost" }
    ],
    expiredCodes: ["FIRSTPLANT"]
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

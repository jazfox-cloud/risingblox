export type Game = {
  slug: string;
  name: string;
  genre: string;
  summary: string;
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
    lastUpdated: "2026-06-18",
    tags: ["strategy", "combat", "rounds"],
    beginnerTips: [
      "Learn one unit path before spreading currency across every upgrade.",
      "Watch enemy timing and save burst abilities for crowded pushes.",
      "Join low-pressure rooms first to understand map pacing."
    ],
    activeCodes: [],
    expiredCodes: [],
    codesSummary:
      "No verified active Mini War codes are available right now. RisingBlox only lists a code after it can be checked against official Roblox game information, developer-linked channels, or a reliable in-game redemption flow.",
    codeCheckMethod: [
      "Check the official Mini War Roblox page and developer-linked community channels.",
      "Look for code announcements tied to updates, milestones, or events.",
      "Do not list copied code claims unless they can be verified from a credible source."
    ],
    codeFaq: [
      {
        question: "Are there any active Mini War codes right now?",
        answer:
          "We do not have any verified active Mini War codes listed at this time."
      },
      {
        question: "Why is a Mini War code not listed here?",
        answer:
          "RisingBlox avoids publishing unverified Roblox codes. If a code cannot be checked with enough confidence, it is not added to the active list."
      },
      {
        question: "When are new Mini War codes usually released?",
        answer:
          "Roblox games often release codes around updates, like milestones, events, or community announcements. We review those sources before listing a code."
      }
    ]
  },
  {
    slug: "noob-incremental",
    name: "Noob Incremental",
    genre: "Incremental / Idle",
    summary:
      "An incremental Roblox game focused on layered upgrades, rebirth paths, and steady account progression.",
    lastUpdated: "2026-06-18",
    tags: ["incremental", "idle", "rebirth"],
    beginnerTips: [
      "Buy income upgrades first, then chase multipliers.",
      "Rebirth when the next run will clearly outpace the current one.",
      "Use boosts during active play instead of leaving them idle."
    ],
    activeCodes: [],
    expiredCodes: [],
    codesSummary:
      "No verified active Noob Incremental codes are available right now. We keep this page conservative until a code can be confirmed through a credible Roblox or developer source.",
    codeCheckMethod: [
      "Check the official Noob Incremental Roblox page and developer-linked community channels.",
      "Review recent update notes and community announcements for code claims.",
      "Move codes into active or expired lists only after the claim can be checked."
    ],
    codeFaq: [
      {
        question: "Are there any active Noob Incremental codes right now?",
        answer:
          "We do not have any verified active Noob Incremental codes listed at this time."
      },
      {
        question: "Why are there no Noob Incremental codes listed?",
        answer:
          "RisingBlox does not publish placeholder codes. A code is added only when it can be checked against a credible source or redemption flow."
      },
      {
        question: "How often is this Noob Incremental codes page checked?",
        answer:
          "This page is reviewed during RisingBlox content checks and updated when a credible new code appears."
      }
    ]
  }
];

export function getGame(slug: string) {
  return games.find((game) => game.slug === slug);
}

export type Game = {
  slug: string;
  name: string;
  genre: string;
  summary: string;
  profileIntro?: string;
  profileSections?: { title: string; body: string; bullets: string[] }[];
  lastUpdated: string;
  tags: string[];
  beginnerTips: string[];
  activeCodes: { code: string; reward: string }[];
  expiredCodes: string[];
  codesSummary?: string;
  codeCheckMethod?: string[];
  codeFaq?: { question: string; answer: string }[];
  guideIntro?: string;
  guideSections?: { title: string; body: string; bullets: string[] }[];
  guideFaq?: { question: string; answer: string }[];
  externalGuide?: {
    label: string;
    url: string;
  };
};

export const games: Game[] = [
  {
    slug: "iron-soul-dungeon",
    name: "Iron Soul: Dungeon",
    genre: "RPG / Action RPG",
    summary:
      "A fast-rising Roblox dungeon RPG from the verified Iron Soul group, built around ore farming, ancient forges, weapon crafting, skill-tree paths, and dungeon clearing.",
    lastUpdated: "2026-06-19",
    tags: ["rpg", "action-rpg", "dungeon", "forge", "weapons", "roblox-codes"],
    beginnerTips: [
      "Treat the forge as the main progression loop: farm materials first, then choose upgrades around your next dungeon goal.",
      "Plan your skill-tree path before spending rerolls or chasing every weapon claim you see in videos.",
      "Use the dedicated BloxDungeon database for deeper Iron Soul forge, runes, race tier-list, and code checks."
    ],
    activeCodes: [],
    expiredCodes: [],
    codesSummary:
      "No verified active Iron Soul: Dungeon codes are listed on RisingBlox right now. For the daily check log and deeper source notes, use the dedicated BloxDungeon codes page.",
    codeCheckMethod: [
      "Check the official Iron Soul: Dungeon Roblox page from the verified Iron Soul group.",
      "Review BloxDungeon's source-first codes log before adding any active or expired code.",
      "Do not list copied code claims unless the exact code and reward can be traced to a credible source or in-game redemption evidence."
    ],
    codeFaq: [
      {
        question: "Are there any active Iron Soul: Dungeon codes right now?",
        answer:
          "RisingBlox does not have any verified active Iron Soul: Dungeon codes listed at this time."
      },
      {
        question: "Where should I check deeper Iron Soul data?",
        answer:
          "Use BloxDungeon for the dedicated Iron Soul: Dungeon guide, code checks, forge notes, runes, weapons, and race tier-list research."
      },
      {
        question: "Why is Iron Soul listed on RisingBlox and BloxDungeon?",
        answer:
          "RisingBlox keeps the broader Roblox trend profile, while BloxDungeon handles the dedicated deep-dive database."
      }
    ],
    externalGuide: {
      label: "Iron Soul Database",
      url: "https://bloxdungeon.com/"
    }
  },
  {
    slug: "grow-a-garden-2",
    name: "Grow a Garden 2",
    genre: "Simulator / Farming",
    summary:
      "Grow a Garden 2 is a Roblox farming tycoon about buying restocked seeds, growing crops, selling harvests, joining guild reward races, and protecting progress when night stealing begins.",
    profileIntro:
      "Grow a Garden 2 is built around a simple farming loop from the official Roblox page: buy seeds when the shop restocks, plant them, harvest crops for sheckles, and use guild rewards plus offline growth to keep progress moving between sessions.",
    profileSections: [
      {
        title: "Official Gameplay Loop",
        body:
          "The verified Roblox description frames Grow a Garden 2 as a farm progression game. Your first goal is to turn seed purchases into harvest income, then use that income to keep the garden compounding.",
        bullets: [
          "Buy seeds from the shop when they restock.",
          "Plant seeds in your farm and wait for crops to grow.",
          "Harvest crops and sell them for sheckles."
        ]
      },
      {
        title: "Seed Restock Priority",
        body:
          "Because the shop restocks, early progress depends on checking seed availability before spending on lower-impact upgrades or cosmetics.",
        bullets: [
          "Check the shop before long farming sessions.",
          "Prioritize seeds that keep your next harvest cycle moving.",
          "Avoid spending all currency before a useful restock appears."
        ]
      },
      {
        title: "Guild Weekly Rewards",
        body:
          "The official page mentions guilds that compete for exclusive weekly rewards. That makes guild participation a real progression angle, not just a social extra.",
        bullets: [
          "Join or create a guild once your basic farm loop is stable.",
          "Use weekly reward timing as a reason to check back before resets.",
          "Treat guild rewards as a bonus layer on top of normal crop income."
        ]
      },
      {
        title: "Night Stealing Warning",
        body:
          "The official description warns that stealing starts at night, so beginners should not assume farming is purely passive.",
        bullets: [
          "Plan important harvests before night if the session allows it.",
          "Do not leave valuable progress exposed without understanding the night cycle.",
          "Use the first few nights to learn how stealing affects your farm."
        ]
      },
      {
        title: "Offline Growth",
        body:
          "Grow a Garden 2 says your garden grows while you are offline, which makes it useful for short check-ins rather than only long active sessions.",
        bullets: [
          "Plant before logging off so offline time contributes to progress.",
          "Return after breaks to harvest and reinvest.",
          "Use offline growth with seed restocks to keep the farm loop efficient."
        ]
      }
    ],
    lastUpdated: "2026-06-23",
    tags: ["farming", "simulator", "tycoon", "seed-restock", "guilds"],
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
      "Mini War is a Roblox tycoon strategy game about building a country, growing the economy, training an army, unlocking advanced units, and capturing other players' lands.",
    profileIntro:
      "Mini War's official Roblox page frames the core loop around building a country, growing economic power, training soldiers, and choosing whether to play as a rich city builder, a military empire, or a balanced takeover strategy.",
    profileSections: [
      {
        title: "Official Gameplay Loop",
        body:
          "The verified Roblox description gives Mini War a clear tycoon-to-war loop: start with city growth, move into factories and industry, then use the economy to support army expansion.",
        bullets: [
          "Build your city and grow the economy.",
          "Upgrade into advanced factories and industry.",
          "Train soldiers and expand the army before attacking."
        ]
      },
      {
        title: "Economy vs Army Paths",
        body:
          "Mini War explicitly supports different playstyles. Beginners should pick one main direction first instead of splitting every resource evenly from the start.",
        bullets: [
          "Economy-first players should focus on a rich and powerful city.",
          "Army-first players should scale military production earlier.",
          "Balanced players need enough income to replace losses after attacks."
        ]
      },
      {
        title: "Advanced Units",
        body:
          "The official page lists stronger units such as tanks, planes, and helicopters. These should be treated as later pressure tools rather than the first thing a beginner chases.",
        bullets: [
          "Unlock stronger units after the city can fund them consistently.",
          "Use tanks, planes, and helicopters to pressure harder targets.",
          "Do not ignore basic soldier production while saving for advanced units."
        ]
      },
      {
        title: "Attack and Capture Lands",
        body:
          "Capturing other players' lands is part of the public gameplay description. That makes map control and timing central to the profile, not just side combat.",
        bullets: [
          "Scout nearby targets before committing your army.",
          "Attack when your economy can recover from losses.",
          "Use captured land to compound the next build-and-army cycle."
        ]
      },
      {
        title: "Update Notes: Super Workers and Codes",
        body:
          "The 2026-06-20 official update log mentions Super Workers, bigger plots, city saving, and a New CODE System. RisingBlox tracks the code system conservatively and only lists specific codes after verification.",
        bullets: [
          "Super Workers and bigger plots suggest the economy loop is still expanding.",
          "City saving matters for repeat sessions and longer-term progress.",
          "The New CODE System does not confirm any specific active code by itself."
        ]
      }
    ],
    lastUpdated: "2026-06-24",
    tags: ["strategy", "tycoon", "economy", "army", "roblox-codes"],
    beginnerTips: [
      "Learn one unit path before spreading currency across every upgrade.",
      "Watch enemy timing and save burst abilities for crowded pushes.",
      "Join low-pressure rooms first to understand map pacing."
    ],
    activeCodes: [],
    expiredCodes: [],
    codesSummary:
      "Mini War added a New CODE System in the official Roblox update log dated 2026-06-20, but RisingBlox has not verified any active Mini War codes yet. We will keep the active list empty until a specific code can be checked against an official source or reliable in-game redemption evidence.",
    codeCheckMethod: [
      "Check the official Mini War Roblox page from the verified M&M Community group.",
      "Track the 2026-06-20 official update log, which mentions a New CODE System but does not list a specific public code.",
      "Look for code announcements tied to updates, milestones, or events.",
      "Do not list copied code claims unless they can be verified from a credible source or in-game redemption evidence."
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
        question: "Does Mini War have a code system?",
        answer:
          "Yes. The official Roblox game description mentions a New CODE System in the 2026-06-20 update log, but that does not confirm any specific active code by itself."
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
    lastUpdated: "2026-06-22",
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
    ],
    guideIntro:
      "Noob Incremental is an incremental simulator from the verified Ghoulax Games group. The official Roblox page describes hundreds of upgrades, dozens of stats, multiple prestige layers, runes, and the core loop of buying Noobs to make Oof.",
    guideSections: [
      {
        title: "What Is Noob Incremental?",
        body:
          "The early game is about turning basic Oof income into stronger upgrades, then using prestige layers and runes to unlock better long-term scaling. Treat each run as a way to improve your next reset instead of trying to hold one slow run forever.",
        bullets: [
          "Buy Noobs to start producing Oof.",
          "Spend early currency on upgrades that make the next income step faster.",
          "Watch for unlocks that introduce new stats, runes, or prestige choices."
        ]
      },
      {
        title: "Early Upgrade Priority",
        body:
          "For beginners, the safest path is to buy income upgrades first, then add multipliers once the next upgrade tier starts to slow down. This keeps your account moving without wasting early currency on small side gains.",
        bullets: [
          "Prioritize upgrades that increase Oof gain or make Noobs more efficient.",
          "Do not spread currency evenly across every visible option if one path clearly speeds up income.",
          "Use short active sessions to test whether a new upgrade meaningfully changes your next minute of progress."
        ]
      },
      {
        title: "Runes Explained",
        body:
          "The official Roblox description says players can roll runes and level them up. That makes runes a likely mid-game scaling system, so beginners should avoid treating the first roll as permanent or perfect.",
        bullets: [
          "Roll runes after your basic income loop feels stable.",
          "Level runes that support your current progression goal instead of chasing every possible stat.",
          "If a rune improves income speed or reset value, test it before investing in narrower bonuses."
        ]
      },
      {
        title: "When to Prestige",
        body:
          "Prestige is listed as a way to unlock new content. In incremental games, the best reset timing is usually when the next run will clearly become faster than the current one.",
        bullets: [
          "Prestige when progress slows and the reset reward changes your next run noticeably.",
          "Avoid resetting only because the button is available.",
          "After each prestige, rebuild your income loop first before experimenting with runes or side stats."
        ]
      },
      {
        title: "Common Beginner Mistakes",
        body:
          "Most early mistakes come from spending too widely, resetting too early, or ignoring the systems that compound across runs.",
        bullets: [
          "Do not ignore core income upgrades while chasing advanced-looking systems.",
          "Do not prestige before the reward is large enough to make the next run faster.",
          "Do not assume copied code claims are real; check the codes page before planning around rewards."
        ]
      }
    ],
    guideFaq: [
      {
        question: "What should I do first in Noob Incremental?",
        answer:
          "Start by buying Noobs to make Oof, then use that income on upgrades that make your next income step faster."
      },
      {
        question: "When should I use runes in Noob Incremental?",
        answer:
          "Use runes after your basic income loop is stable. The official page says runes can be rolled and leveled, so treat them as a scaling system rather than a one-time choice."
      },
      {
        question: "When should I prestige in Noob Incremental?",
        answer:
          "Prestige when the reward will make your next run clearly faster or unlock useful content. Avoid resetting just because the option appears."
      },
      {
        question: "Are there Noob Incremental codes?",
        answer:
          "RisingBlox does not have verified active Noob Incremental codes listed right now. Check the dedicated codes page for the latest verified status."
      }
    ]
  },
  {
    slug: "anime-squadron",
    name: "Anime Squadron",
    genre: "Strategy / Tower Defense",
    summary:
      "Play Anime Squadron on Roblox for anime lane-defense battles, squad upgrades, boss waves, and early unit progression from Komplex Studio.",
    profileIntro:
      "Anime Squadron is a Roblox anime strategy game where the early win condition is simple: place a small core squad well, cover each lane cleanly, and upgrade around boss-wave timing instead of chasing rare units too early.",
    lastUpdated: "2026-06-18",
    tags: ["anime", "tower-defense", "strategy", "units", "roblox-codes"],
    beginnerTips: [
      "Start by learning how lanes, enemy waves, and boss timing work before chasing rare units.",
      "Upgrade a small core squad first so your early clears stay consistent.",
      "Check the official Roblox page and developer-linked channels before trusting copied code claims."
    ],
    activeCodes: [],
    expiredCodes: [],
    codesSummary:
      "No verified active Anime Squadron codes are available right now. RisingBlox checks the official Roblox game page, developer-linked sources, and credible recent code reports before listing a code as active.",
    codeCheckMethod: [
      "Check the official Anime Squadron Roblox page from Komplex Studio.",
      "Look for developer-linked social channels, update posts, or in-game redemption prompts.",
      "Avoid adding copied Anime Squadron code lists until a claim can be verified or marked expired."
    ],
    codeFaq: [
      {
        question: "Are there any active Anime Squadron codes right now?",
        answer:
          "We do not have any verified active Anime Squadron codes listed at this time."
      },
      {
        question: "Why does this Anime Squadron codes page say no verified codes?",
        answer:
          "RisingBlox avoids publishing unverified Roblox codes. A code is added only after it can be checked against a credible source or an in-game redemption flow."
      },
      {
        question: "What keywords does this Anime Squadron page track?",
        answer:
          "This page tracks Anime Squadron codes, Anime Squadron Roblox, Anime Squadron guide, and related beginner search questions."
      },
      {
        question: "How often should Anime Squadron codes be checked?",
        answer:
          "Roblox code pages should be checked around updates, like milestones, and developer announcements, then updated with the latest checked date."
      }
    ]
  }
];

export function getGame(slug: string) {
  return games.find((game) => game.slug === slug);
}

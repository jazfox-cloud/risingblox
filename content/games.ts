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
    lastUpdated: "2026-06-26",
    tags: ["rpg", "action-rpg", "dungeon", "forge", "weapons", "roblox-codes"],
    beginnerTips: [
      "Treat the forge as the main progression loop: farm materials first, then choose upgrades around your next dungeon goal.",
      "Plan your skill-tree path before spending rerolls or chasing every weapon claim you see in videos.",
      "Use the dedicated BloxDungeon database for deeper Iron Soul forge, runes, race tier-list, and code checks."
    ],
    guideIntro:
      "Iron Soul: Dungeon is a Roblox action RPG from the verified Iron Soul group. The official page centers the early loop on slaying monsters, collecting crystalized ore, using ancient forges, crafting weapons, choosing a skill-tree path, and clearing dungeons for better rewards.",
    guideSections: [
      {
        title: "What Is Iron Soul: Dungeon?",
        body:
          "Iron Soul: Dungeon is built around a forge-driven RPG loop. You fight creatures, collect rare materials, turn crystalized ore into stronger weapons, and use each dungeon clear to push the next upgrade cycle.",
        bullets: [
          "Fight monsters to collect crystalized ore and rare materials.",
          "Use ancient forges to craft and upgrade weapons.",
          "Clear harder dungeon areas once your weapon and skill setup can support it."
        ]
      },
      {
        title: "Ore and Forge Loop",
        body:
          "The official description makes the forge the center of progression. Beginners should treat ore farming as the resource base for stronger weapons instead of rushing into every dungeon immediately.",
        bullets: [
          "Farm enough ore before chasing a new dungeon goal.",
          "Bring materials back to the forge before progress slows too much.",
          "Use each new weapon as a test of whether your next dungeon route is ready."
        ]
      },
      {
        title: "Skill Tree Paths",
        body:
          "Iron Soul: Dungeon says players can choose abilities for different playstyles, including relentless attacker, forge master, or survivor. Pick a direction before spreading upgrades too widely.",
        bullets: [
          "Attacker paths should support faster monster clears.",
          "Forge-focused paths should support crafting and weapon progression.",
          "Survivor paths make sense when dungeon pressure is ending runs too early."
        ]
      },
      {
        title: "Weapon Crafting Priority",
        body:
          "The official page says every new weapon changes how you fight. That means beginners should evaluate weapons by how they affect clears, not only by rarity or appearance.",
        bullets: [
          "Craft weapons that help with the content you are currently failing.",
          "Do not spend every material on side upgrades before testing a weapon change.",
          "Use BloxDungeon for deeper weapon, forge, rune, and race tier-list notes."
        ]
      },
      {
        title: "Dungeon Progression",
        body:
          "Dungeons are described as lost lands with greater rewards, so the best timing is after your weapon, skill tree, and survival setup can handle the next difficulty step.",
        bullets: [
          "Enter new dungeons after a forge upgrade or meaningful skill-tree improvement.",
          "Track which enemy type or room ends your run.",
          "Return to farming when dungeon clears become too slow or inconsistent."
        ]
      }
    ],
    guideFaq: [
      {
        question: "What should beginners do first in Iron Soul: Dungeon?",
        answer:
          "Beginners should farm monsters for crystalized ore, use the forge to craft stronger weapons, and choose a clear skill-tree direction before pushing harder dungeons."
      },
      {
        question: "How important is the forge in Iron Soul: Dungeon?",
        answer:
          "The forge is central. The official Roblox page describes gathering ore, bringing it to ancient forges, and crafting weapons as the main progression loop."
      },
      {
        question: "Which skill tree path should I choose?",
        answer:
          "Choose based on your problem: attacker for faster clears, forge-focused for crafting progression, or survivor when dungeon pressure is ending runs too early."
      },
      {
        question: "Where can I find deeper Iron Soul data?",
        answer:
          "Use BloxDungeon for dedicated Iron Soul forge notes, runes, weapons, race tier-list research, codes, and source logs."
      }
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
    lastUpdated: "2026-06-25",
    tags: ["anime", "tower-defense", "strategy", "units", "roblox-codes"],
    beginnerTips: [
      "Start by learning how lanes, enemy waves, and boss timing work before chasing rare units.",
      "Upgrade a small core squad first so your early clears stay consistent.",
      "Check the official Roblox page and developer-linked channels before trusting copied code claims."
    ],
    guideIntro:
      "Anime Squadron is a Roblox anime lane battler from Komplex Studio. The official page highlights summoning and upgrading units, deploying anime heroes, leveling and evolving them, handling multiple game modes, and surviving boss waves.",
    guideSections: [
      {
        title: "What Is Anime Squadron?",
        body:
          "Anime Squadron is built around defending lanes with a squad of anime-style units. The beginner goal is to understand enemy pathing, keep lanes covered, and upgrade a small team before chasing every rare unit.",
        bullets: [
          "Treat it as a lane battler first, not only a unit collector.",
          "Learn how enemy waves move before spending heavily on upgrades.",
          "Use early runs to identify which lanes or boss waves cause failures."
        ]
      },
      {
        title: "Lane Basics",
        body:
          "The official description points to nonstop enemy waves and massive bosses, so lane coverage matters more than random placement. Beginners should focus on keeping each active lane stable.",
        bullets: [
          "Place units where they can cover the longest useful path.",
          "Do not over-stack one lane while another lane leaks enemies.",
          "Adjust placement after seeing where boss waves break through."
        ]
      },
      {
        title: "Unit Upgrade Priority",
        body:
          "Anime Squadron highlights summoning, upgrading, leveling, and evolving units. Early progress is usually more consistent when a small core squad gets upgraded before resources are spread too widely.",
        bullets: [
          "Upgrade a small core squad before chasing every new summon.",
          "Level units that help clear waves consistently.",
          "Save evolve decisions for units you actually use in repeated clears."
        ]
      },
      {
        title: "Boss Wave Timing",
        body:
          "Boss waves are called out directly in the official page, so beginners should plan upgrades around boss pressure rather than only normal waves.",
        bullets: [
          "Watch which wave introduces the first major boss threat.",
          "Upgrade damage before the boss wave instead of after it arrives.",
          "If a boss survives too long, review placement before blaming unit rarity."
        ]
      },
      {
        title: "Common Beginner Mistakes",
        body:
          "Most early mistakes come from chasing rare units too quickly, ignoring lane coverage, or upgrading after the dangerous wave has already started.",
        bullets: [
          "Do not spend everything on summons before your current squad can clear basic waves.",
          "Do not leave weak lanes open while over-upgrading one side.",
          "Do not trust copied code claims unless the codes page marks them verified."
        ]
      }
    ],
    guideFaq: [
      {
        question: "What should beginners focus on in Anime Squadron?",
        answer:
          "Beginners should learn lane coverage, upgrade a small core squad, and prepare before boss waves instead of chasing rare units immediately."
      },
      {
        question: "Are units important in Anime Squadron?",
        answer:
          "Yes. The official Roblox page highlights summoning, upgrading, leveling, and evolving units, so unit progression is central to the game."
      },
      {
        question: "How should I handle boss waves in Anime Squadron?",
        answer:
          "Watch when boss waves appear, upgrade damage before they arrive, and adjust placement if bosses survive too long."
      },
      {
        question: "Are there Anime Squadron codes?",
        answer:
          "RisingBlox does not have verified active Anime Squadron codes listed right now. Check the dedicated codes page for the current verified status."
      }
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

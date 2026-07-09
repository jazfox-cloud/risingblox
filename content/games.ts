export type Game = {
  slug: string;
  name: string;
  genre: string;
  summary: string;
  profileIntro?: string;
  profileSections?: { title: string; body: string; bullets: string[] }[];
  profileTitle?: string;
  profileDescription?: string;
  lastUpdated: string;
  tags: string[];
  beginnerTips: string[];
  activeCodes: { code: string; reward: string }[];
  expiredCodes: string[];
  codesLastChecked?: string;
  codesSummary?: string;
  codeCheckMethod?: string[];
  codeFaq?: { question: string; answer: string }[];
  guideTitle?: string;
  guideDescription?: string;
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
      "Iron Soul: Dungeon is a Roblox dungeon RPG focused on ore farming, ancient forges, weapon crafting, and dungeon clears. RisingBlox keeps this page as the quick-start overview and sends deeper Iron Soul research to BloxDungeon.",
    profileIntro:
      "Iron Soul: Dungeon is tracked from Roblox public game data and the official Roblox page from the verified Iron Soul group. RisingBlox keeps this profile as a quick source-backed overview, while BloxDungeon carries deeper Iron Soul research.",
    profileSections: [
      {
        title: "Official Data Refresh",
        body:
          "RisingBlox refreshed Iron Soul: Dungeon against Roblox public game data on 2026-07-08. The official Roblox API showed the game updated on 2026-07-08, with public stats available for online players, visits, votes, and the canonical Roblox play link.",
        bullets: [
          "Source: Roblox public game data and the official Iron Soul: Dungeon Roblox page.",
          "Latest Roblox update timestamp seen by RisingBlox: 2026-07-08.",
          "Use BloxDungeon for deeper forge, rune, weapon, and source-log research."
        ]
      }
    ],
    lastUpdated: "2026-07-08",
    tags: ["rpg", "action-rpg", "dungeon", "forge", "weapons", "roblox-codes"],
    beginnerTips: [
      "Treat the forge as the main progression loop: farm materials first, then choose upgrades around your next dungeon goal.",
      "Plan your skill-tree path before spending rerolls or chasing every weapon claim you see in videos.",
      "Use the dedicated BloxDungeon database for deeper Iron Soul forge, runes, race tier-list, weapons, and code checks."
    ],
    guideTitle: "Iron Soul Dungeon Level Up Fast Guide",
    guideDescription:
      "Iron Soul Dungeon guide for leveling up fast, beginner forge routes, best runes by playstyle, skill tree basics, starter weapon choices, and blueprint notes.",
    guideIntro:
      "Iron Soul: Dungeon is a Roblox action RPG from the verified Iron Soul group. RisingBlox keeps this guide focused on beginner progression, while BloxDungeon handles the deeper Iron Soul pages for forge routes, runes, weapons, race tier lists, and source logs.",
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
      },
      {
        title: "How to Level Up Fast",
        body:
          "The safest fast-leveling route is to keep the forge loop moving instead of forcing harder dungeons too early. Use each monster route to collect ore and materials, upgrade the weapon or skill path that fixes your current clear speed, then return to dungeons when the next run is clearly faster.",
        bullets: [
          "Farm monsters until you have enough ore for a meaningful forge or weapon step.",
          "Upgrade before pushing a dungeon that already feels slow or risky.",
          "Repeat the route that gives consistent materials rather than chasing one difficult clear."
        ]
      },
      {
        title: "Best Runes and Skill Path Basics",
        body:
          "RisingBlox does not rank exact Iron Soul runes without source-backed data. For beginners, the best rune or skill path is the one that solves the current blocker: faster monster clears, stronger forge progression, or better survival in dungeons.",
        bullets: [
          "Choose damage-focused options when normal monsters take too long.",
          "Choose forge or progression options when weapon upgrades are the bottleneck.",
          "Choose survival options when dungeon pressure ends runs before rewards are earned."
        ]
      },
      {
        title: "Best Starter Weapon Path",
        body:
          "The best starter weapon path is the one that makes early monster farming and dungeon attempts consistent. Do not judge a weapon only by rarity; judge whether it helps you clear faster, survive longer, or reach the next forge step.",
        bullets: [
          "Use the weapon that clears normal monsters reliably before chasing harder dungeon rewards.",
          "Switch weapons when a new craft noticeably improves clear speed or survival.",
          "Avoid spending rare materials on side upgrades before testing whether the new weapon solves your current wall."
        ]
      },
      {
        title: "Skill Tree Basics",
        body:
          "Iron Soul: Dungeon's official page says the skill tree supports different playstyles. A beginner path should stay focused: attacker when damage is low, forge master when progression is material-limited, or survivor when dungeon pressure ends runs early.",
        bullets: [
          "Pick one clear direction before spreading upgrades across every branch.",
          "Use attacker choices when farming speed is the main blocker.",
          "Use survivor choices when you can deal damage but cannot finish dungeon routes."
        ]
      },
      {
        title: "Blueprint and Forge Notes",
        body:
          "Blueprint-related searches are appearing in GSC, but RisingBlox will not invent exact blueprint drop tables without source-backed data. For now, treat blueprints as part of the broader forge progression loop and track where a confirmed source explains them.",
        bullets: [
          "Use blueprint claims carefully until the exact source is confirmed.",
          "Tie blueprint planning back to the weapon or forge upgrade you are trying to unlock.",
          "Use BloxDungeon for deeper Iron Soul source logs when more blueprint evidence is available."
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
        question: "How do I level up fast in Iron Soul: Dungeon?",
        answer:
          "Keep the forge loop moving: farm monsters for ore and materials, upgrade before harder dungeons, and repeat consistent routes instead of forcing slow clears."
      },
      {
        question: "What are the best runes in Iron Soul?",
        answer:
          "RisingBlox does not claim an exact best-rune ranking without source-backed data. Beginners should choose rune or skill options based on the current blocker: damage, forge progression, or survival."
      },
      {
        question: "What is the best starter weapon in Iron Soul: Dungeon?",
        answer:
          "Use the starter weapon path that clears early monsters consistently and helps you reach the next forge step. Do not spend rare materials until a weapon upgrade clearly fixes your current blocker."
      },
      {
        question: "How should I use the Iron Soul skill tree?",
        answer:
          "Choose one direction first: attacker for faster farming, forge-focused progression when materials and crafting are the bottleneck, or survivor when dungeons end runs too early."
      },
      {
        question: "How do blueprints work in Iron Soul: Dungeon?",
        answer:
          "RisingBlox does not list exact blueprint tables without source-backed data. Treat blueprint claims as unverified until they can be tied to official, in-game, or reliable logged evidence."
      },
      {
        question: "Where can I find deeper Iron Soul data?",
        answer:
          "Use BloxDungeon for dedicated Iron Soul forge notes, runes, weapons, race tier-list research, codes, progression tools, and source logs."
      }
    ],
    activeCodes: [],
    expiredCodes: [],
    codesLastChecked: "2026-07-09",
    codesSummary:
      "No verified active Iron Soul: Dungeon codes are listed on RisingBlox right now. For the daily check log, deeper source notes, and the dedicated Iron Soul codes tracker, use BloxDungeon.",
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
          "Use BloxDungeon for the dedicated Iron Soul: Dungeon guide, code checks, forge notes, runes, weapons, race tier-list research, and progression tools."
      },
      {
        question: "Why is Iron Soul listed on RisingBlox and BloxDungeon?",
        answer:
          "RisingBlox keeps the broader Roblox trend profile, while BloxDungeon handles the dedicated deep-dive database."
      }
    ],
    externalGuide: {
      label: "Open BloxDungeon",
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
    codesLastChecked: "2026-07-09",
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
      "Mini War's official Roblox page frames the core loop around building a country, growing economic power, training soldiers, and choosing whether to play as a rich city builder, a military empire, or a balanced takeover strategy. The 2026-07-04 update adds Special Invasion Weather, five new research buildings, advanced army and builder controls, and an auto-buy option.",
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
        title: "Update Notes: Special Invasion Weather",
        body:
          "The official 2026-07-04 update log lists a new Special Invasion Weather system. Beginners should treat weather as a timing signal: do not push every attack automatically, and keep enough economy to recover if an invasion shift changes the map pressure.",
        bullets: [
          "Watch for weather changes before sending a large army forward.",
          "Keep reserve income so a bad invasion window does not stall the city.",
          "Use safer attacks first while learning how the new weather affects pressure."
        ]
      },
      {
        title: "Research Buildings and Advanced Controls",
        body:
          "The same official update mentions five new buildings through research, advanced army controls, advanced builder controls, and an auto-buy option. These features make research timing more important than rushing combat alone.",
        bullets: [
          "Use research buildings to unlock better control options before overextending.",
          "Advanced army controls should help with cleaner attacks and fewer wasted units.",
          "Advanced builder controls and auto buy are best used after the economy loop is stable."
        ]
      },
      {
        title: "Code System Status",
        body:
          "Mini War previously added a code system, but RisingBlox still has no verified active Mini War code to list. The presence of a code system is not enough to publish a code without a source or in-game redemption check.",
        bullets: [
          "Check the codes page before long sessions, but expect an empty active list until verification improves.",
          "Do not trust copied code lists unless they show a credible source or redemption evidence.",
          "RisingBlox will keep active codes empty until a specific Mini War code can be verified."
        ]
      }
    ],
    lastUpdated: "2026-07-05",
    tags: ["strategy", "tycoon", "economy", "army", "roblox-codes"],
    beginnerTips: [
      "Stabilize the economy before relying on auto buy or advanced controls.",
      "Watch Special Invasion Weather before sending a full army push.",
      "Use research buildings to unlock better control options before chasing every combat upgrade."
    ],
    guideIntro:
      "Mini War is a Roblox tycoon strategy game where beginners need to build a stable economy, research stronger tools, train an army, and time attacks around map pressure. The 2026-07-04 update adds Special Invasion Weather, five research buildings, advanced controls, and auto buy, so new players should learn the economy loop before rushing every combat option.",
    guideSections: [
      {
        title: "Start With a Stable Economy",
        body:
          "Mini War rewards players who can keep production running while preparing attacks. Before chasing advanced units, make sure the city can replace soldiers and keep building after a bad fight.",
        bullets: [
          "Build enough income before spending everything on the army.",
          "Upgrade into factories and industry when the next economy step is affordable.",
          "Keep some currency available so recovery is possible after a failed push."
        ]
      },
      {
        title: "Use Research Buildings Carefully",
        body:
          "The official 2026-07-04 update mentions five new buildings through research. That makes research a key part of progression, especially for players who want better control tools instead of only raw army size.",
        bullets: [
          "Research buildings should support your current bottleneck: economy, control, or army pressure.",
          "Do not unlock everything randomly before your city can pay for the upgrades.",
          "Use new buildings to support a clear plan rather than reacting to every fight."
        ]
      },
      {
        title: "Special Invasion Weather Tips",
        body:
          "Special Invasion Weather is a new official update feature. Until players learn the exact pressure changes, the safest beginner approach is to avoid sending every unit during uncertain weather windows.",
        bullets: [
          "Watch the map before committing a full army push.",
          "Use smaller attacks first to learn how weather changes pressure.",
          "Keep production running so the city can recover if the invasion timing goes badly."
        ]
      },
      {
        title: "Advanced Controls and Auto Buy",
        body:
          "Advanced army controls, advanced builder controls, and auto buy can reduce busywork, but they work best after the basic city loop is stable.",
        bullets: [
          "Use advanced army controls to avoid wasting units in messy attacks.",
          "Use builder controls to keep the city improving while you manage the map.",
          "Turn auto buy into a support tool, not a replacement for choosing the right upgrade path."
        ]
      },
      {
        title: "Codes Status",
        body:
          "Mini War has a code system, but RisingBlox does not list any active Mini War code unless a specific code can be verified against an official source or reliable in-game redemption evidence.",
        bullets: [
          "Check the Mini War codes page before long sessions.",
          "Treat copied code lists as unverified until they show source evidence.",
          "Use update logs as a reason to check codes, not as proof that a public code exists."
        ]
      }
    ],
    guideFaq: [
      {
        question: "What should beginners do first in Mini War?",
        answer:
          "Beginners should build a stable economy, then train enough soldiers to defend and attack without stopping city growth."
      },
      {
        question: "What changed in the Mini War 2026-07-04 update?",
        answer:
          "The official update log mentions Special Invasion Weather, five new research buildings, advanced army and builder controls, auto buy, and additional changes."
      },
      {
        question: "Are there active Mini War codes?",
        answer:
          "RisingBlox does not have verified active Mini War codes listed right now. The code system exists, but a specific code still needs source or redemption evidence before being added."
      }
    ],
    activeCodes: [],
    expiredCodes: [],
    codesLastChecked: "2026-07-09",
    codesSummary:
      "Mini War has a code system, and the official Roblox page is actively updating, but RisingBlox has not verified any active Mini War codes yet. We will keep the active list empty until a specific code can be checked against an official source or reliable in-game redemption evidence.",
    codeCheckMethod: [
      "Check the official Mini War Roblox page from the verified M&M Community group.",
      "Track the 2026-07-04 official update log, which adds Special Invasion Weather, new research buildings, advanced controls, and auto buy but does not list a specific public code.",
      "Track the earlier official update log that introduced the code system without confirming a specific active code.",
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
          "Yes. The official Roblox game description has mentioned a code system, but that does not confirm any specific active code by itself."
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
    codesLastChecked: "2026-07-09",
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
      "Anime Squadron Roblox is an anime lane-defense strategy game from Komplex Studio with UPD 1.0 signals, squad upgrades, boss waves, multiple game modes, and early unit progression.",
    profileIntro:
      "Anime Squadron on Roblox is a lane-defense strategy game where your early progress depends on stable lane coverage, a small upgraded core squad, and better boss-wave timing. The official Roblox page currently carries an UPD 1.0 signal and highlights summoning, upgrading units, multiple game modes, and massive boss waves.",
    profileTitle: "Anime Squadron Roblox UPD 1.0 Game Profile",
    profileDescription:
      "Anime Squadron Roblox profile for UPD 1.0, gameplay basics, unit upgrades, boss waves, game modes, beginner guide links, and verified code status.",
    lastUpdated: "2026-07-06",
    tags: ["anime", "tower-defense", "strategy", "units", "roblox-codes"],
    beginnerTips: [
      "Start by learning how lanes, enemy waves, and boss timing work before chasing rare units.",
      "Upgrade a small core squad first so your early clears stay consistent.",
      "Check the official Roblox page and developer-linked channels before trusting copied code claims."
    ],
    guideTitle: "Anime Squadron Roblox Beginner Guide",
    guideIntro:
      "Anime Squadron is a Roblox anime lane battler from Komplex Studio. The official Roblox page highlights summoning and upgrading units, deploying anime heroes, leveling and evolving them, handling multiple game modes, and surviving boss waves.",
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
          "The official Roblox page highlights summoning, upgrading, leveling, and evolving units. Early progress is usually more consistent when a small core squad gets upgraded before resources are spread too widely.",
        bullets: [
          "Upgrade a small core squad before chasing every new summon.",
          "Level units that help clear waves consistently.",
          "Save evolve decisions for units you actually use in repeated clears."
        ]
      },
      {
        title: "Boss Wave Strategy",
        body:
          "Boss waves are called out directly in the official page, so beginners should plan upgrades around boss pressure rather than only normal waves.",
        bullets: [
          "Watch which wave introduces the first major boss threat.",
          "Upgrade damage before the boss wave instead of after it arrives.",
          "If a boss survives too long, review placement before blaming unit rarity."
        ]
      },
      {
        title: "Game Modes Basics",
        body:
          "The official page says Anime Squadron has multiple game modes. Beginners should treat each mode as a test of lane coverage, upgrade timing, and squad consistency before pushing harder challenges.",
        bullets: [
          "Use easier modes to test unit placement and upgrade timing.",
          "Bring a balanced squad before trying modes with heavier boss pressure.",
          "Track which mode exposes your weakest lane or slowest damage window."
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
        question: "What does UPD 1.0 mean for Anime Squadron beginners?",
        answer:
          "RisingBlox treats UPD 1.0 as a freshness signal from the official Roblox game page, not a separate game mode. Beginners should still focus on the basics first: unit upgrades, lane coverage, multiple game modes, and boss-wave pressure."
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
    codesLastChecked: "2026-07-09",
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

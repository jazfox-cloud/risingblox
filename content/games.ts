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
  codeRedemptionSteps?: string[];
  codeSections?: { title: string; body: string; bullets: string[] }[];
  codeFaq?: { question: string; answer: string }[];
  guideTitle?: string;
  guideDescription?: string;
  guideIntro?: string;
  guideSections?: { title: string; body: string; bullets: string[] }[];
  guideFaq?: { question: string; answer: string }[];
  guideLastVerified?: string;
  guideSourceLabel?: string;
  guideSourceUrl?: string;
  guideSourceNote?: string;
  externalGuide?: {
    label: string;
    url: string;
  };
  hasCodesPage?: boolean;
};

export function hasIndexableCodes(game: Game) {
  return game.activeCodes.length > 0 || game.expiredCodes.length > 0;
}

function buildNoCodePolicy(
  gameName: string,
  extraFaq: { question: string; answer: string }[] = []
) {
  return {
    codesSummary: `RisingBlox only lists ${gameName} codes after official Roblox text, developer-linked announcements, or in-game redemption evidence confirm them.`,
    codeCheckMethod: [
      `Check the official ${gameName} Roblox page and any developer-linked announcements.`,
      "Keep only claims that can be checked against official text or in-game redemption evidence.",
      "Move any unconfirmed or expired claim out of the active codes list."
    ],
    codeFaq: [
      {
        question: `Are there any active ${gameName} codes right now?`,
        answer: `RisingBlox does not list ${gameName} codes unless official text, a developer-linked announcement, or in-game redemption evidence confirms them.`
      },
      {
        question: `Why are there no ${gameName} codes listed?`,
        answer:
          "RisingBlox avoids publishing placeholder or unverified Roblox codes. A code is added only when it can be checked with enough confidence."
      },
      {
        question: `How often is this ${gameName} codes page checked?`,
        answer:
          "This page is reviewed during RisingBlox content checks and updated when a credible new code appears."
      },
      ...extraFaq
    ]
  };
}

export const games: Game[] = [
  {
    slug: "drain-the-lake",
    name: "Drain the Lake",
    genre: "Simulation / Incremental",
    summary:
      "Drain the Lake is a fast-rising Roblox incremental game about filling a bucket, draining water for tokens, upgrading a skill tree, going deeper, and recovering a lost phone.",
    profileTitle: "Drain the Lake Roblox Game Profile and Beginner Route",
    profileDescription:
      "Drain the Lake Roblox profile with the official gameplay loop, current public stats, beginner route, skill tree priorities, and verified play link.",
    profileIntro:
      "The official Roblox page gives Drain the Lake a clear five-step loop: fill a bucket, drain it for tokens, upgrade the skill tree, reach deeper water, and recover the phone. RisingBlox keeps this page focused on the beginner route and verified public Roblox data snapshots.",
    profileSections: [
      {
        title: "Official Gameplay Loop",
        body:
          "Drain the Lake turns each bucket run into tokens for the next skill-tree step. The useful beginner question is not whether to grind, but which upgrade makes the next trip shorter or more productive.",
        bullets: [
          "Fill the bucket and return the water to the drain for tokens.",
          "Use tokens on the skill tree before pushing much deeper.",
          "Repeat the loop until the route to the phone becomes manageable."
        ]
      },
      {
        title: "Official Data Snapshot",
        body:
          "RisingBlox reviewed the latest saved Roblox public data for Drain the Lake on 2026-07-11. The tracked snapshot showed more than 80,000 players online, more than 37 million visits, and a Roblox update timestamp from 2026-07-10.",
        bullets: [
          "Source: Roblox public game data and the official Drain the Lake Roblox page.",
          "Latest saved Roblox update timestamp: 2026-07-10.",
          "Use the stats as a freshness signal, not as a guarantee that player counts stay fixed."
        ]
      },
      {
        title: "Verified Trend Snapshot",
        body:
          "Roblox public game data showed more than 80,000 players online and more than 37 million visits during the 2026-07-10 review. Those numbers are a current trend snapshot, not a promise that demand will remain at the same level.",
        bullets: [
          "Created on Roblox: 2026-06-03.",
          "Official genre: Simulation / Incremental Simulator.",
          "Latest public update timestamp checked by RisingBlox: 2026-07-10."
        ]
      }
    ],
    lastUpdated: "2026-07-11",
    tags: ["simulation", "incremental", "skill-tree", "bucket", "new-roblox-game"],
    beginnerTips: [
      "Complete the short bucket-and-drain loop first so you can see which part of the run is slowing progress.",
      "Buy the skill-tree upgrade that fixes the current bottleneck before spending across every branch.",
      "Push into deeper water only after the existing route feels consistent."
    ],
    guideTitle: "Drain the Lake Beginner Guide - Skill Tree and Fast Progress",
    guideDescription:
      "Drain the Lake beginner guide covering the bucket loop, token spending, skill tree decisions, deeper-water progression, and common early mistakes.",
    guideIntro:
      "The safest Drain the Lake beginner route is to keep the official bucket-to-token loop moving: complete a short run, identify the slowest part, buy one meaningful skill-tree improvement, and only then go deeper. Fast progress comes from shortening the next route, not from forcing the longest route immediately.",
    guideSections: [
      {
        title: "Start With the Short Loop",
        body:
          "Learn where to fill and drain the bucket before taking a longer route. Early consistency gives you a clearer view of whether filling, travel, or draining is the current bottleneck, which makes the first skill-tree choices easier.",
        bullets: [
          "Finish several short runs before pushing deeper.",
          "Watch which step takes most of the run time.",
          "Return for upgrades instead of forcing an inefficient route."
        ]
      },
      {
        title: "Spend Tokens With a Purpose",
        body:
          "The official page confirms that tokens feed the skill tree. RisingBlox does not invent exact upgrade values; use each purchase to solve the part of the loop that currently feels slowest and then test whether the next run improves.",
        bullets: [
          "Improve the bucket side when collection is the main delay.",
          "Choose movement or route support when travel dominates the run.",
          "Avoid spreading early tokens across upgrades that do not change the next run."
        ]
      },
      {
        title: "Fast Progress Route",
        body:
          "A practical fast-progress route is short loop, targeted upgrade, deeper test, then reset back to the shorter loop if the new path is inefficient. This keeps tokens moving while still testing progress toward the phone.",
        bullets: [
          "Use short loops to build the first upgrade base.",
          "Try deeper water after a noticeable skill-tree improvement.",
          "Return to the reliable route if the deeper attempt takes too long for the reward."
        ]
      },
      {
        title: "When to Go Deeper",
        body:
          "Going deeper is part of the official objective, but a deeper route is useful only when the current upgrades can support it without making every trip inefficient.",
        bullets: [
          "Test the next depth after a meaningful skill-tree improvement.",
          "Step back to the shorter route if progress slows sharply.",
          "Treat the phone as the long-term goal, not the first-run target."
        ]
      },
      {
        title: "Common Beginner Mistakes",
        body:
          "Most avoidable mistakes come from going deep too early, buying upgrades without a clear bottleneck, or trusting unsupported code claims.",
        bullets: [
          "Do not turn every run into the longest possible route.",
          "Do not assume an upgrade is best without checking what it improves.",
          "The official description currently shows no public code redemption system."
        ]
      }
    ],
    guideFaq: [
      {
        question: "What is the goal in Drain the Lake?",
        answer:
          "The official Roblox description says to drain the lake, go deeper, and recover the phone that fell into the water."
      },
      {
        question: "What should I upgrade first in Drain the Lake?",
        answer:
          "Choose the skill-tree upgrade that fixes your current bottleneck, such as a slow bucket loop or an inefficient trip, rather than spreading tokens across every branch."
      },
      {
        question: "Does Drain the Lake have codes?",
        answer:
          "The official Roblox description does not currently show a public code or redemption system, so RisingBlox is not publishing a codes page for this game."
      }
    ],
    activeCodes: [],
    expiredCodes: [],
    hasCodesPage: false
  },
  {
    slug: "scale-slimy-fish",
    name: "Scale Slimy Fish",
    genre: "Simulation / Tycoon",
    summary:
      "Scale Slimy Fish is a Roblox fishing tycoon where players catch fish, scrape their scales, feed hungry animals, earn cash, and upgrade rods and knives.",
    profileTitle: "Scale Slimy Fish Roblox Profile, Codes, and Progression",
    profileDescription:
      "Scale Slimy Fish Roblox profile with the official fishing loop, tool upgrades, current public stats, verified codes, and beginner guide links.",
    profileIntro:
      "The official Roblox page describes a compact progression loop: catch slimy fish, scrape their scales, feed hungry animals, earn cash, and improve fishing rods and knives. RisingBlox verified the source and current public data on 2026-07-10.",
    profileSections: [
      {
        title: "Official Catch-to-Cash Loop",
        body:
          "Progress comes from improving both sides of the workflow: better rods help catch bigger fish, while sharper knives help process them faster before the next cash upgrade.",
        bullets: [
          "Catch fish with the best rod you can currently support.",
          "Scrape scales and feed the processed fish to hungry animals.",
          "Reinvest cash into the tool that is slowing the loop."
        ]
      },
      {
        title: "Turtle Arrival Update",
        body:
          "The official title carried a Turtle Arrival update signal during the 2026-07-10 review. The page also directly listed three current code strings, which are tracked on the RisingBlox codes page.",
        bullets: [
          "Official genre: Simulation / Tycoon.",
          "Created on Roblox: 2026-06-10.",
          "Latest public update timestamp checked by RisingBlox: 2026-07-10."
        ]
      }
    ],
    lastUpdated: "2026-07-10",
    tags: ["fishing", "tycoon", "tools", "codes", "turtle-update"],
    beginnerTips: [
      "Run the full catch, scale, feed, and cash loop before deciding which tool is slowing progress.",
      "Upgrade the rod when catching is the bottleneck and the knife when processing takes too long.",
      "Redeem only the codes shown by the official Roblox description, and verify rewards in game."
    ],
    guideTitle: "Scale Slimy Fish Beginner Guide - Rod and Knife Upgrades",
    guideDescription:
      "Scale Slimy Fish beginner guide for the catch-to-cash loop, rod and knife upgrade choices, official codes, and early progression mistakes.",
    guideIntro:
      "Scale Slimy Fish beginners should balance the two official tool paths: rods control what they can catch, while knives control how quickly they can scrape scales and return to earning cash.",
    guideSections: [
      {
        title: "Learn the Full Loop First",
        body:
          "Complete the catch, scrape, feed, and cash sequence before spending heavily. That first loop shows whether catching or processing is limiting progress.",
        bullets: [
          "Catch a manageable fish with the starter rod.",
          "Scrape its scales before trying to expand too quickly.",
          "Feed the animal and use the cash to improve the slower tool."
        ]
      },
      {
        title: "Rod or Knife First?",
        body:
          "The official description connects better rods with bigger fish and sharper knives with faster scaling. The right first upgrade depends on which step blocks the next profitable loop.",
        bullets: [
          "Choose the rod when catches are too limited.",
          "Choose the knife when scaling time holds up every sale.",
          "Alternate upgrades when neither side can keep up with the other."
        ]
      },
      {
        title: "Use Official Codes Carefully",
        body:
          "The official Roblox description listed 10kccu, weather, and turtle during the 2026-07-10 check. Rewards can change, so the codes page records the source without inventing an exact reward.",
        bullets: [
          "Enter the code exactly as written.",
          "Check the official page again after major updates.",
          "Treat a failed redemption as a status change that needs rechecking."
        ]
      }
    ],
    guideFaq: [
      {
        question: "Should I upgrade the rod or knife first?",
        answer:
          "Upgrade the rod if catching is limiting progress, or the knife if scraping scales is slowing every cash cycle."
      },
      {
        question: "What are the official Scale Slimy Fish codes?",
        answer:
          "The official Roblox description listed 10kccu, weather, and turtle during the 2026-07-23 check. See the codes page for the latest status."
      }
    ],
    activeCodes: [
      { code: "10kccu", reward: "Officially listed; verify the current reward in game" },
      { code: "weather", reward: "Officially listed; verify the current reward in game" },
      { code: "turtle", reward: "Officially listed; verify the current reward in game" }
    ],
    expiredCodes: [],
    codesLastChecked: "2026-07-23",
    ...buildNoCodePolicy("Scale Slimy Fish", [
      {
        question: "Why does RisingBlox not list exact rewards?",
        answer:
          "Exact rewards stay blank until they can be verified through official text, a developer-linked announcement, or in-game redemption evidence."
      },
      {
        question: "Where do I redeem Scale Slimy Fish codes?",
        answer:
          "Open the game and check its settings or codes interface. Enter each code exactly as shown and confirm the reward in game."
      }
    ]),
    codesSummary:
      "Scale Slimy Fish codes are listed only when the official Roblox description, a developer-linked source, or current in-game redemption evidence supports them. RisingBlox last checked the official source on 2026-07-23 and keeps exact rewards unclaimed until they are verified.",
    codeCheckMethod: [
      "Check the official Scale Slimy Fish Roblox page for public code strings and update text.",
      "Keep 10kccu, weather, and turtle active only while the official source or current redemption evidence supports them.",
      "Do not copy third-party code lists unless each code can be matched to official text, developer-linked evidence, or an in-game redemption result.",
      "Leave exact rewards as verification notes until the reward output is confirmed in the current game."
    ],
    codeRedemptionSteps: [
      "Open Scale Slimy Fish on Roblox.",
      "Find the current in-game codes, rewards, or settings interface.",
      "Enter one verified code exactly as shown: 10kccu, weather, or turtle.",
      "Confirm the in-game result before treating a reward claim as verified."
    ],
    codeSections: [
      {
        title: "How We Verify Scale Slimy Fish Codes",
        body:
          "This page is kept indexable because Scale Slimy Fish has official code strings recorded in the RisingBlox source record. The goal is to preserve a clean code status page without padding it with unverified rewards or copied lists.",
        bullets: [
          "Primary source: the official Roblox game page and public game data checked on 2026-07-23.",
          "Current tracked code strings: 10kccu, weather, and turtle.",
          "Reward details remain cautious until current in-game redemption confirms the exact output."
        ]
      },
      {
        title: "What to Check Before Claiming a Code Works",
        body:
          "A code should stay active only when the current game or a credible official source still supports it. If a redemption fails, the page should be rechecked instead of silently leaving the code active.",
        bullets: [
          "Check spelling and capitalization before marking a code failed.",
          "Confirm whether the game has moved or renamed the code interface after an update.",
          "Move a code to expired only after current source or redemption evidence supports that status change."
        ]
      }
    ]
  },
  {
    slug: "iron-soul-dungeon",
    name: "Iron Soul: Dungeon",
    genre: "RPG / Action RPG",
    summary:
      "Iron Soul: Dungeon is a Roblox action RPG built around collecting crystalized ore and rare materials, forging weapons, choosing a skill-tree direction, and preparing for harder dungeons.",
    profileIntro:
      "Iron Soul: Dungeon is published by the verified Iron Soul Roblox group. The official game description presents a gather-forge-upgrade loop with dynamic combat, skill-tree choices, weapon crafting, and harder dungeon areas. This profile records the official source and current status; the progression guide handles the beginner route, while BloxDungeon remains the destination for deeper source logs and tools.",
    profileSections: [
      {
        title: "Official Game Status",
        body:
          "RisingBlox rechecked Iron Soul: Dungeon against the official Roblox Games API and game description on 2026-07-16. The source still describes crystalized ore, rare materials, ancient forges, weapon crafting, skill-tree paths, and dungeons as the public progression framework.",
        bullets: [
          "Source: Roblox public game data and the official Iron Soul: Dungeon Roblox page.",
          "Latest Roblox update timestamp seen during this check: 2026-07-15.",
          "Use BloxDungeon for deeper forge, rune, weapon, and source-log research."
        ]
      }
    ],
    lastUpdated: "2026-07-20",
    tags: ["rpg", "action-rpg", "dungeon", "forge", "weapons", "roblox-codes"],
    beginnerTips: [
      "Start with the verified gather-forge-upgrade loop before attempting harder dungeon areas.",
      "Choose a skill-tree direction around the blocker you can observe: clear speed, forge progression, or survival.",
      "Treat exact rune, relic, blueprint, and drop-rate claims as unverified unless an official or logged in-game source supports them."
    ],
    guideTitle: "Iron Soul Dungeon Guide: Level Up Fast, Best Runes, Forge, and Blueprints",
    guideDescription:
      "Iron Soul Dungeon guide for leveling up fast, forge progression, best rune decisions, starter weapon testing, blueprint caution, and source-backed beginner progression.",
    guideIntro:
      "Use this Iron Soul Dungeon guide to level up faster without guessing: repeat a reliable monster route, collect crystalized ore and rare materials, return to the forge, test one weapon or skill-tree change, then decide whether the next blocker is damage, survival, runes, or blueprint evidence. This page answers the current beginner searches around level up fast, best runes, starter weapons, forge progression, and blueprint caution without inventing drop rates or hidden tables.",
    guideLastVerified: "2026-07-16",
    guideSourceLabel: "Official Iron Soul: Dungeon Roblox page and Roblox Games API",
    guideSourceUrl: "https://www.roblox.com/games/117533937949084/Iron-Soul-Dungeon",
    guideSourceNote:
      "The official source verifies the ore, material, forge, weapon, skill-tree, and dungeon framework. It does not currently document exact XP, rune, relic, blueprint, or drop-rate tables.",
    guideSections: [
      {
        title: "Quick Answers",
        body:
          "Search Console now shows Iron Soul Dungeon searches around leveling fast, best runes, blueprints, and starter weapons. The short answer is to improve one verified part of the loop at a time instead of copying an unsupported build.",
        bullets: [
          "Level up fast: reduce failed runs by farming a reliable monster route, then upgrade before pushing harder dungeons.",
          "Best runes: choose rune effects from current in-game text that solve the visible blocker, such as damage, survival, or farming consistency.",
          "Blueprints: treat exact blueprint tables as unverified unless they come from current in-game evidence, official text, or logged source notes.",
          "Starter weapons: test a forged weapon on the same route before spending more materials."
        ]
      },
      {
        title: "First Steps",
        body:
          "Use the official progression framework before optimizing anything: fight creatures, collect crystalized ore and rare materials, return to a forge, and test the next weapon or skill-tree improvement on content you already understand.",
        bullets: [
          "Learn one repeatable monster route instead of rushing every unlocked area.",
          "Bank materials at an ancient forge and make one meaningful weapon test.",
          "Use the result of that test to decide whether to farm again or attempt a harder dungeon."
        ]
      },
      {
        title: "Early Farming Loop",
        body:
          "The official page confirms that defeated creatures drop crystalized ore and rare materials. Early farming should therefore favor a route you can repeat consistently, followed by a forge return and a controlled test of the resulting weapon change.",
        bullets: [
          "Repeat enemies you can defeat reliably enough to gather materials.",
          "Return to the forge instead of turning every run into an unsupported endurance challenge.",
          "Compare the same route after a weapon change so you can see whether progress actually improved."
        ]
      },
      {
        title: "Skill Tree Direction",
        body:
          "The official description names attacker, forge master, and survivor as example playstyle directions. It does not publish a universal best build, so choose the direction that addresses the problem visible in your current runs.",
        bullets: [
          "Attacker paths should support faster monster clears.",
          "Forge-focused paths should support crafting and weapon progression.",
          "Survivor paths make sense when dungeon pressure is ending runs too early."
        ]
      },
      {
        title: "Forge Progression",
        body:
          "The public description says the crafting loop is gather, forge, upgrade and that each new weapon changes combat. Treat forge progression as a sequence of observable tests rather than an unsupported rarity tier list.",
        bullets: [
          "Craft weapons that help with the content you are currently failing.",
          "Do not spend every material on side upgrades before testing a weapon change.",
          "Use BloxDungeon when you need source logs beyond this beginner progression loop."
        ]
      },
      {
        title: "When to Attempt Harder Areas",
        body:
          "The official page describes dungeons as lost lands with greater rewards, but it does not publish a recommended level threshold. Attempt a harder area after a forge or skill-tree change and use clear consistency—not an invented level requirement—as the readiness check.",
        bullets: [
          "Enter new dungeons after a forge upgrade or meaningful skill-tree improvement.",
          "Track which enemy type or room ends your run.",
          "Return to farming when dungeon clears become too slow or inconsistent."
        ]
      },
      {
        title: "How to Level Up Fast",
        body:
          "The official source does not document a numeric XP formula or a single fastest leveling route. The source-backed answer is to reduce failed or slow runs: repeat a reliable monster route, gather ore and materials, make one forge or skill-tree improvement, and retest before moving to harder dungeons.",
        bullets: [
          "Farm monsters until you have enough ore for a meaningful forge or weapon step.",
          "Upgrade before pushing a dungeon that already feels slow or risky.",
          "Repeat the route that gives consistent materials rather than chasing one difficult clear."
        ]
      },
      {
        title: "Common Progression Blockers",
        body:
          "Most safe troubleshooting begins by naming the visible blocker. A run can stall because normal enemies take too long, forge progress has stopped changing the result, or a dungeon ends the attempt before rewards are secured. The official source supports those broad systems, but not an exact fix for every build.",
        bullets: [
          "If normal enemies are slow, test attacker-oriented skill choices or a weapon change.",
          "If materials are not producing progress, return to the forge plan and avoid unrelated spending claims.",
          "If harder dungeons end runs early, strengthen consistency before chasing greater rewards."
        ]
      },
      {
        title: "Introductory Rune Decisions",
        body:
          "The current official Roblox description does not document rune names, effects, drop rates, or a best setup. Treat any rune choice as unverified until you can read its current in-game text, then compare it with the blocker you already identified. The focused runes page provides a verification checklist rather than a fabricated ranking.",
        bullets: [
          "Record the exact rune name and effect shown in the current game before relying on it.",
          "Test one change on the same route so the result is comparable.",
          "Do not copy an exact tier list unless its version and evidence can be verified."
        ]
      },
      {
        title: "Testing a Forge Upgrade",
        body:
          "The official page confirms that forged weapons change how you fight, but it does not name one universal best starter weapon. Test the weapon you can verify in the current forge against a familiar route before spending more materials.",
        bullets: [
          "Use the same enemy route before and after the forge change.",
          "Keep the change when it improves the blocker you were trying to solve.",
          "Avoid publishing or following exact costs unless the current forge screen or an official source verifies them."
        ]
      },
      {
        title: "What to Verify After an Update",
        body:
          "Roblox updates can change weapons, skills, areas, and interfaces without documenting every detail in the public description. Recheck the official page and current in-game text before treating an older route as current.",
        bullets: [
          "Confirm that the skill-tree labels still match the current interface.",
          "Confirm weapon effects and costs in the current forge.",
          "Treat exact rune, relic, blueprint, and drop-rate claims as unverified until rechecked."
        ]
      },
      {
        title: "Source Boundaries",
        body:
          "This page is intentionally a progression guide, not a complete Iron Soul wiki. The official Roblox description verifies the broad combat, material, forge, weapon, skill-tree, and dungeon systems; it does not verify an exhaustive database.",
        bullets: [
          "Do not infer exact mechanics from a search query alone.",
          "Use current in-game text or a developer source for precise claims.",
          "Use BloxDungeon for deeper Iron Soul source logs and specialized tools."
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
        question: "What should I do when Iron Soul progression stalls?",
        answer:
          "Identify whether the blocker is normal-enemy clear speed, forge progress, or dungeon survival. Make one verified weapon or skill-tree change, then retest the same route."
      },
      {
        question: "What are the best runes in Iron Soul?",
        answer:
          "The current official Roblox description does not document rune names, effects, or rankings. Use the focused runes page as a verification checklist and rely on current in-game text before choosing a build."
      },
      {
        question: "How should I test a forged weapon?",
        answer:
          "Test the forged weapon on a route you already know. Keep the change when it improves the specific clear-speed or survival blocker you were trying to solve."
      },
      {
        question: "What should I verify after an Iron Soul update?",
        answer:
          "Recheck skill-tree labels, weapon effects, forge costs, and any rune or drop claims against the current game or a developer source before following an older route."
      },
      {
        question: "Does this guide include exact drop rates or blueprint tables?",
        answer:
          "No. The official source used for this guide does not provide exact drop rates, rune tables, relic locations, or blueprint data, so those claims remain outside this page until verified."
      },
      {
        question: "Is this page a full Iron Soul Dungeon wiki?",
        answer:
          "No. This page is a source-backed quick-start guide for beginner intent like leveling, forge routes, relic thinking, and rune direction. Use BloxDungeon when you need deeper source logs or dedicated feature pages."
      },
      {
        question: "Where can I find deeper Iron Soul data?",
        answer:
          "Use BloxDungeon for dedicated Iron Soul forge notes, runes, weapons, race tier-list research, codes, progression tools, and source logs."
      }
    ],
    activeCodes: [],
    expiredCodes: [],
    codesLastChecked: "2026-07-21",
    codesSummary:
      "RisingBlox only lists Iron Soul: Dungeon codes after official Roblox text, developer-linked announcements, or in-game redemption evidence confirm them. For the daily check log and deeper source notes, use BloxDungeon.",
    codeCheckMethod: [
      "Check the official Iron Soul: Dungeon Roblox page and any developer-linked announcements.",
      "Review BloxDungeon's source-first codes log before adding any active or expired code.",
      "Keep only code claims that can be traced to official text, a developer-linked post, or in-game redemption evidence."
    ],
    codeFaq: [
      {
        question: "Are there any active Iron Soul: Dungeon codes right now?",
        answer:
          "RisingBlox does not list Iron Soul: Dungeon codes unless official text, a developer-linked announcement, or in-game redemption evidence confirms them."
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
    lastUpdated: "2026-07-21",
    tags: ["farming", "simulator", "tycoon", "seed-restock", "guilds"],
    beginnerTips: [
      "Check the restocking seed shop before planning the next planting cycle.",
      "Plant on the brown farm plots, wait for crops to finish growing, then harvest and sell for sheckles.",
      "Plant before leaving when you want offline growth, and learn the night-stealing risk before leaving valuable crops unattended."
    ],
    guideTitle: "Grow a Garden 2 Beginner Guide: Seeds, Harvests, Offline Growth, and Night Stealing",
    guideDescription:
      "Grow a Garden 2 beginner guide for seed restocks, planting, harvests, sheckles, offline growth, guild rewards, and night stealing risk without unverified crop values.",
    guideIntro:
      "Use this Grow a Garden 2 beginner guide to start with the verified farm loop: buy seeds when the shop restocks, plant them on brown farm plots, wait for crops to grow, harvest them, and sell the result for sheckles. The official Roblox page also verifies offline growth, guild weekly rewards, and a night-stealing risk window. This page keeps those beginner decisions practical without inventing crop values, seed rarities, growth timers, protection mechanics, or codes that the source does not publish.",
    guideLastVerified: "2026-07-19",
    guideSourceLabel: "Official Grow a Garden 2 Roblox page and Roblox Games API",
    guideSourceUrl: "https://www.roblox.com/games/97598239454123/Grow-a-Garden-2",
    guideSourceNote:
      "The official source verifies the seed-shop, planting, harvest, sheckles, guild, offline-growth, and night-stealing framework. Exact prices, timers, crop rankings, guild reward values, and protection rules require current in-game verification.",
    guideSections: [
      {
        title: "Quick Answers",
        body:
          "For beginners, the safest Grow a Garden 2 plan is to complete one verified seed-to-harvest cycle, then use the current shop and night behavior to decide the next step. Do not rely on a fixed crop ranking unless you can verify it in the current game.",
        bullets: [
          "Best first step: buy an available seed, plant it on a brown plot, harvest it, and sell for sheckles.",
          "Seed restocks: check the current shop before spending, because the official source verifies restocks but not a permanent public schedule.",
          "Offline growth: plant before leaving, then verify the crop state when you return instead of assuming an exact timer.",
          "Night stealing: harvest important crops before leaving if you have not confirmed the current protection rules."
        ]
      },
      {
        title: "Complete the Verified Farm Loop",
        body:
          "Start with the sequence shown by the official instructions instead of optimizing an unverified crop list. Visit the restocking shop, buy a seed, equip it, click a brown plot to plant it, wait for growth to finish, then harvest and sell before planning the next cycle.",
        bullets: [
          "Check which seeds are actually available in the current shop.",
          "Use the brown plots identified by the official planting instructions.",
          "Finish one complete harvest-and-sell cycle before changing the plan."
        ]
      },
      {
        title: "Plan Around Seed Restocks",
        body:
          "The official description confirms that the seed shop restocks, but it does not publish a permanent schedule or a best-seed ranking. Treat each restock as a current in-game decision and avoid relying on an old list of prices or availability.",
        bullets: [
          "Review the current shop before spending sheckles elsewhere.",
          "Do not assume a seed is available because an older guide mentions it.",
          "Record current prices and crop behavior in game before comparing value."
        ]
      },
      {
        title: "Use Offline Growth Deliberately",
        body:
          "Grow a Garden 2 states that gardens continue growing while the player is offline. A practical use is to plant before a break and return to check harvest readiness, without claiming an exact offline timer the official source does not provide.",
        bullets: [
          "Plant before leaving if you want the offline-growth system to work on the next crop cycle.",
          "Check the actual crop state after returning instead of assuming a fixed timer.",
          "Harvest and sell before reinvesting in the next verified shop offer."
        ]
      },
      {
        title: "Treat Night as a Risk Window",
        body:
          "The official page warns that stealing starts at night when a player leaves the garden. It does not document every protection rule, so beginners should observe the current night behavior before leaving valuable progress exposed.",
        bullets: [
          "Watch the first night cycle to learn what the current game permits.",
          "Harvest important crops before leaving when the risk is unclear.",
          "Do not publish or trust an exact protection method without current in-game evidence."
        ]
      },
      {
        title: "Add Guild Rewards After the Basic Loop",
        body:
          "The official description confirms that guilds compete for exclusive weekly rewards. Stabilize the seed-to-sheckles loop first, then use the current guild interface to understand contribution rules and reward timing.",
        bullets: [
          "Learn planting and selling before relying on guild rewards for progress.",
          "Read the current guild interface for contribution and weekly timing details.",
          "Treat exact reward values as unverified unless the game or developer publishes them."
        ]
      }
    ],
    guideFaq: [
      {
        question: "What should a Grow a Garden 2 beginner do first?",
        answer:
          "Buy an available seed from the restocking shop, equip it, plant it on a brown farm plot, wait for it to grow, then harvest and sell it for sheckles."
      },
      {
        question: "Does the garden grow while I am offline?",
        answer:
          "Yes. The official Roblox description says the garden grows while the player is offline, but it does not publish one exact timer for every crop."
      },
      {
        question: "What happens at night in Grow a Garden 2?",
        answer:
          "The official description warns that stealing starts at night if the player leaves the garden. Current protection details should be checked in game."
      },
      {
        question: "Are Grow a Garden 2 codes verified?",
        answer:
          "No active or expired Grow a Garden 2 code is currently verified in RisingBlox's source record, so the separate code-status page is excluded from search indexing until evidence changes."
      }
    ],
    activeCodes: [],
    expiredCodes: [],
    codesLastChecked: "2026-07-21",
    ...buildNoCodePolicy("Grow a Garden 2")
  },
  {
    slug: "mini-war",
    name: "Mini War",
    genre: "Strategy / Battle",
    summary:
      "Mini War is a Roblox tycoon strategy game about building a country, growing the economy, training an army, unlocking advanced units, and capturing other players' lands.",
    profileTitle: "Mini War Roblox Game Profile - Economy, Army, and Latest Update",
    profileDescription:
      "Mini War Roblox profile with the verified country-building loop, economy and army strategy, latest public Roblox snapshot, beginner guide links, and codes status.",
    profileIntro:
      "Mini War Roblox is a tycoon strategy game where the verified loop is to build a country, grow economic power, train soldiers, unlock advanced units, and capture other players' lands. RisingBlox keeps this profile focused on the official Roblox page, current public data snapshots, beginner guide links, and codes status instead of unverified code claims.",
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
      },
      {
        title: "Official Update Refresh",
        body:
          "RisingBlox refreshed Mini War against Roblox public game data on 2026-07-10. The official Roblox page still highlights Special Invasion Weather, five research buildings, advanced army and builder controls, auto buy, and the core country-building combat loop.",
        bullets: [
          "Source: Roblox public game data and the official Mini War Roblox page.",
          "Latest Roblox update timestamp seen by RisingBlox: 2026-07-10.",
          "No active Mini War code is listed unless a specific code can be verified."
        ]
      },
      {
        title: "Latest Verified Snapshot",
        body:
          "RisingBlox rechecked Mini War against saved Roblox public game data on 2026-07-18. The verified snapshot showed active player demand, more than 264 million visits, and a Roblox update timestamp from 2026-07-17.",
        bullets: [
          "Source: Roblox public game data and the official Mini War Roblox page.",
          "Online players at check: 23,775.",
          "Visits at check: 264,312,458.",
          "Latest Roblox update timestamp seen by RisingBlox: 2026-07-17T22:33:49Z."
        ]
      }
    ],
    lastUpdated: "2026-07-18",
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
    codesLastChecked: "2026-07-21",
    ...buildNoCodePolicy("Mini War"),
    codeFaq: [
      ...buildNoCodePolicy("Mini War").codeFaq,
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
      "Noob Incremental is a Roblox incremental simulator from Ghoulax Games where players buy Noobs to make Oof, purchase upgrades, roll and level runes, and use Prestige layers to unlock more content.",
    profileTitle: "Noob Incremental Roblox Game Profile and Progression Overview",
    profileDescription:
      "Noob Incremental Roblox profile with the official Oof loop, upgrades, runes, Prestige layers, current public data, and a source-backed progression guide.",
    profileIntro:
      "The official Noob Incremental Roblox page describes a game with hundreds of upgrades, dozens of stats, multiple Prestige layers, and runes. Its public progression order starts with buying Noobs to make Oof, spending on upgrades, rolling and leveling runes, then using Prestige to unlock more content. RisingBlox keeps the profile focused on those verified facts and sends step-by-step decisions to the progression guide.",
    profileSections: [
      {
        title: "Official Progression Loop",
        body:
          "The official Roblox description supplies a clear progression sequence without publishing an exact optimal build or reset threshold.",
        bullets: [
          "Buy Noobs to produce Oof.",
          "Use upgrades to become stronger.",
          "Roll and level runes as that feature becomes available.",
          "Use Prestige layers to unlock new content."
        ]
      },
      {
        title: "Current Official Status",
        body:
          "RisingBlox rechecked the official Roblox Games API and game description on 2026-07-16. The public title carried an UPD 2 signal, and the verified creator was Ghoulax Games.",
        bullets: [
          "Source: official Noob Incremental Roblox page and Roblox Games API.",
          "Creator shown by Roblox: Ghoulax Games.",
          "Exact upgrade effects, costs, and Prestige thresholds must be verified in the current game."
        ]
      }
    ],
    lastUpdated: "2026-07-16",
    tags: ["incremental", "idle", "prestige", "runes", "progression"],
    beginnerTips: [
      "Follow the verified opening loop: buy Noobs, make Oof, then compare the upgrades currently visible in game.",
      "Treat Prestige as an unlock decision, not a timed reset with an invented universal threshold.",
      "Record current rune text before investing because the official page confirms runes exist but does not publish their exact effects."
    ],
    activeCodes: [],
    expiredCodes: [],
    codesLastChecked: "2026-07-21",
    ...buildNoCodePolicy("Noob Incremental"),
    guideTitle: "Noob Incremental Progression Guide: Upgrades, Runes, and Prestige",
    guideDescription:
      "A source-backed Noob Incremental progression guide for the first Oof loop, early upgrade decisions, rune checks, Prestige timing, blockers, and update verification.",
    guideIntro:
      "Begin with the sequence stated on the official Noob Incremental Roblox page: buy Noobs to produce Oof, compare the upgrades currently available, roll and level runes when that feature opens, and use Prestige when it unlocks the next layer of content. The source confirms hundreds of upgrades, dozens of stats, multiple Prestige layers, and runes, but it does not publish one best upgrade order, an exact reset threshold, or permanent rune rankings. This guide therefore explains how to make the next visible progression decision without inventing costs or formulas. It uses the existing stable guide URL as the single Noob Incremental progression page; no duplicate wiki, tier list, or mechanic page is being added.",
    guideLastVerified: "2026-07-16",
    guideSourceLabel: "Official Noob Incremental Roblox page and Roblox Games API",
    guideSourceUrl: "https://www.roblox.com/games/76911729991355/Noob-Incremental",
    guideSourceNote:
      "The official source verifies the Oof, upgrade, rune, and Prestige framework. Exact upgrade effects, costs, unlock thresholds, and rune values require current in-game verification.",
    guideSections: [
      {
        title: "What to Do First",
        body:
          "The official how-to-play sequence begins with buying Noobs to make Oof. Use that first loop to learn what the current interface exposes before making claims about an optimal build.",
        bullets: [
          "Buy Noobs to start producing Oof.",
          "Open the current upgrade interface and read the exact effects available to your account.",
          "Make one upgrade change, then check whether the next Oof cycle actually improves."
        ]
      },
      {
        title: "Early Upgrade Priorities",
        body:
          "Roblox confirms that upgrades make the player stronger but does not publish a universal best order. Prioritize from the current in-game descriptions: first address the upgrade that directly improves the Oof loop or unlocks the next verified feature, then compare the result before spreading resources.",
        bullets: [
          "Read the exact effect shown in game instead of relying on an old cost table.",
          "Prefer one measurable progression goal over buying every visible option at once.",
          "Retest the same Oof cycle after the purchase so the effect is observable."
        ]
      },
      {
        title: "When Runes Become Relevant",
        body:
          "The official page confirms that players can roll runes and level them up. It does not publish rune names, odds, exact effects, or a best ranking, so rune decisions should begin with the current in-game text.",
        bullets: [
          "Record the rune name and effect displayed in the current version.",
          "Level a rune only after you can explain which visible blocker it addresses.",
          "Do not treat copied odds or tier labels as verified."
        ]
      },
      {
        title: "When Prestige Becomes Relevant",
        body:
          "The official description says Prestige unlocks new content. It does not provide one exact timing threshold, so the safe decision point is when the current interface shows the Prestige layer and explains what the reset will unlock or change.",
        bullets: [
          "Read the current Prestige confirmation and unlock description before resetting.",
          "Do not claim a universal Oof, time, or stat threshold without in-game evidence.",
          "After Prestige, re-establish the verified Noob-to-Oof loop before comparing later systems."
        ]
      },
      {
        title: "Common Progression Blockers",
        body:
          "A progression blocker should be described by what the current game shows, not by a generic idle-game formula. Check whether the next obstacle is the Oof loop, an upgrade requirement, a rune decision, or a Prestige unlock.",
        bullets: [
          "If Oof progress is slow, re-read visible upgrade effects and test one change.",
          "If a feature is locked, verify its current requirement rather than copying an old threshold.",
          "If Prestige is available, confirm the documented unlock before accepting the reset."
        ]
      },
      {
        title: "What to Verify After an Update",
        body:
          "The official page carried an UPD 2 signal during the 2026-07-16 check. Update labels are freshness signals, not proof that older costs, rune effects, or unlock requirements remain unchanged.",
        bullets: [
          "Recheck upgrade names, effects, and costs in the current interface.",
          "Recheck rune text and leveling requirements.",
          "Recheck what each Prestige layer says it unlocks."
        ]
      }
    ],
    guideFaq: [
      {
        question: "What should I do first in Noob Incremental?",
        answer:
          "Follow the official opening loop: buy Noobs to make Oof, read the upgrades currently available, make one change, and compare the next cycle."
      },
      {
        question: "When should I use runes in Noob Incremental?",
        answer:
          "Use rune decisions when the feature is available and you can read the current rune effect. The official page confirms rolling and leveling runes, but not exact rankings or odds."
      },
      {
        question: "When should I prestige in Noob Incremental?",
        answer:
          "Prestige becomes relevant when the current interface exposes the layer and explains the new content it unlocks. No universal reset threshold is verified here."
      },
      {
        question: "Does this guide include exact upgrade costs or rune odds?",
        answer:
          "No. The official source used here does not publish a complete current cost table or rune odds, so those details require in-game or developer verification."
      }
    ]
  },
  {
    slug: "anime-squadron",
    name: "Anime Squadron",
    genre: "Strategy / Tower Defense",
    summary:
      "Anime Squadron is a Roblox lane battler from Komplex Studio built around summoning and upgrading units, planning a lineup, playing multiple modes, and defending against bosses and nonstop enemy waves.",
    profileIntro:
      "Anime Squadron is an official Roblox lane battler published by Komplex Studio. The public game description confirms summoning, upgrading, leveling and evolving units, planning a lineup, multiple game modes, team play, ranked progression, bosses, and nonstop enemy waves. This profile records the game identity, developer, source, and current public status; practical opening decisions belong in the beginner guide.",
    profileTitle: "Anime Squadron Roblox Game Profile and Official Status",
    profileDescription:
      "Anime Squadron Roblox profile with the official lane-battler description, Komplex Studio creator information, current update status, public data, beginner guide, and codes status links.",
    profileSections: [
      {
        title: "Official Gameplay Scope",
        body:
          "The official Roblox description defines Anime Squadron as a strategic lane battler. It confirms units, lineup planning, multiple modes, bosses, and enemy waves without publishing a current best-unit ranking.",
        bullets: [
          "Summon, upgrade, level, and evolve units.",
          "Plan a lineup for multiple game modes.",
          "Defend against bosses and nonstop enemy waves."
        ]
      },
      {
        title: "Developer and Current Status",
        body:
          "RisingBlox rechecked the official Roblox Games API and game description on 2026-07-16. Roblox listed Komplex Studio as the creator and the public title carried an UPD 1.5 signal.",
        bullets: [
          "Source: official Anime Squadron Roblox page and Roblox Games API.",
          "Creator shown by Roblox: Komplex Studio.",
          "Exact unit rankings, costs, and mode-specific formulas are not claimed on this profile."
        ]
      }
    ],
    lastUpdated: "2026-07-16",
    tags: ["anime", "lane-battler", "tower-defense", "strategy", "units"],
    beginnerTips: [
      "Use early runs to observe lane coverage and the timing of nonstop enemy waves.",
      "Plan a lineup and test upgrades on units you are actually deploying.",
      "Prepare before boss pressure instead of assuming a rare unit alone solves the route."
    ],
    guideTitle: "Anime Squadron Beginner Guide: Lane Coverage and Boss Preparation",
    guideDescription:
      "A source-backed Anime Squadron beginner guide for the opening lineup, lane coverage, upgrade allocation, multiple modes, and boss-wave preparation without an unverified unit tier list.",
    guideIntro:
      "Start Anime Squadron by treating it as the strategic lane battler described on the official Roblox page: deploy a lineup, watch how nonstop enemy waves move through the lanes, and spend early upgrades on units you are actually testing before boss pressure arrives. The source confirms summoning, upgrading, leveling and evolving units, multiple modes, and massive bosses, but it does not publish a universal best-unit list, exact resource formula, or mode-specific build. This guide therefore focuses on observable opening decisions—coverage, upgrade concentration, and boss preparation—while the profile remains the source-and-status page and the codes URL remains a separate verification-only status page.",
    guideLastVerified: "2026-07-16",
    guideSourceLabel: "Official Anime Squadron Roblox page and Roblox Games API",
    guideSourceUrl: "https://www.roblox.com/games/71132543521245/Anime-Squadron",
    guideSourceNote:
      "The official source verifies units, lineup planning, multiple modes, bosses, and waves. It does not verify a current unit tier list, exact costs, or an optimal lineup.",
    guideSections: [
      {
        title: "What to Do First",
        body:
          "Use the first runs to learn how the current lineup and lanes behave. The official page confirms strategic lineup planning and nonstop waves, so the first useful decision is where coverage fails—not which unverified unit is supposedly best.",
        bullets: [
          "Deploy a lineup and observe which lane first allows enemies through.",
          "Hold enough resources to test an upgrade before spreading them across every unit.",
          "Record whether the next failure comes from normal waves or boss pressure."
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
        title: "Resource Allocation",
        body:
          "The official description confirms that units can be upgraded, leveled, and evolved, but it does not publish exact costs or one best allocation. Concentrate early resources on the deployed units whose effects you can observe, then compare the next wave before investing again.",
        bullets: [
          "Read the current upgrade text before spending.",
          "Test one meaningful upgrade on a unit already covering an active lane.",
          "Do not publish or follow exact cost tables unless the current game or developer source verifies them."
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
        title: "What to Recheck After an Update",
        body:
          "The official title carried an UPD 1.5 signal during the 2026-07-16 check. That is a freshness signal, not proof that older unit advice, costs, modes, or boss behavior stayed unchanged.",
        bullets: [
          "Recheck unit upgrade and evolve text in the current interface.",
          "Recheck which modes are currently available.",
          "Recheck where normal waves or bosses expose weak coverage."
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
        question: "How should I plan an early Anime Squadron lineup?",
        answer:
          "Deploy a lineup, observe which lane fails first, and spend the next upgrade on a unit whose contribution you can see. The official source does not provide one universal best lineup."
      },
      {
        question: "When should I upgrade an Anime Squadron unit?",
        answer:
          "Upgrade after reading the current effect and identifying the lane or boss problem the unit is meant to address. Exact best costs and rankings are not verified here."
      },
      {
        question: "How should I prepare for boss waves?",
        answer:
          "Identify when boss pressure begins, strengthen coverage before that point, and compare placement as well as upgrades when a boss survives too long."
      },
      {
        question: "What should I do if one lane keeps leaking enemies?",
        answer:
          "Move or strengthen coverage on the failing path, then retest the same wave. Avoid over-investing in a different lane that is already stable."
      },
      {
        question: "Does this guide rank Anime Squadron units?",
        answer:
          "No. The official source confirms units and upgrades but does not publish a current best-unit ranking, so this guide does not invent one."
      }
    ],
    activeCodes: [],
    expiredCodes: [],
    codesLastChecked: "2026-07-21",
    ...buildNoCodePolicy("Anime Squadron"),
    codeRedemptionSteps: [
      "No official Anime Squadron redemption interface or active code was verified in the sources checked for this page.",
      "If Komplex Studio publishes a code, verify the current in-game redemption path from that official announcement or in-game evidence before entering it.",
      "Do not use copied redemption instructions that cannot be matched to the current game."
    ],
    codeFaq: [
      {
        question: "Are there any verified active Anime Squadron codes?",
        answer:
          "No verified active Anime Squadron codes are listed. RisingBlox requires official Roblox text, a developer-linked announcement, or in-game redemption evidence before adding one."
      },
      {
        question: "Is the Anime Squadron redemption method verified?",
        answer:
          "Not from the current official sources. The page will not claim a button or menu path until an official announcement or in-game check verifies it."
      }
    ]
  }
];

export function getGame(slug: string) {
  return games.find((game) => game.slug === slug);
}

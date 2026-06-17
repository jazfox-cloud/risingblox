import statsData from "./roblox-stats.json";
import type { Game } from "./games";

type RawStats = {
  robloxUniverseId: number | null;
  robloxPlaceId: number | null;
  sourceLabel: string;
  sourceUrl: string | null;
  lastChecked: string;
  status: "verified" | "needs_source" | "error";
  onlinePlayers?: number;
  upVotes?: number | null;
  downVotes?: number | null;
  visits?: number;
  updatedAt?: string;
  fetchedAt?: string;
  error?: string;
};

export type DisplayStats = {
  onlinePlayers: string;
  likeRate: string;
  launchWindow: string;
  opportunity: string;
  lastChecked: string;
  sourceLabel: string;
  sourceUrl: string | null;
  isVerified: boolean;
};

const statsBySlug = statsData as Record<string, RawStats>;

function formatNumber(value: number) {
  return value.toLocaleString("en-US");
}

function getLikeRate(stats: RawStats) {
  const upVotes = stats.upVotes ?? 0;
  const downVotes = stats.downVotes ?? 0;
  const totalVotes = upVotes + downVotes;
  if (!totalVotes) return "Checking";

  return `${Math.round((upVotes / totalVotes) * 100)}%`;
}

function getOpportunityLabel(stats: RawStats) {
  if (stats.status !== "verified") return "Watchlist";
  const onlinePlayers = stats.onlinePlayers ?? 0;
  const upVotes = stats.upVotes ?? 0;
  const downVotes = stats.downVotes ?? 0;
  const totalVotes = upVotes + downVotes;
  const likeRate = totalVotes ? upVotes / totalVotes : 0;

  if (onlinePlayers >= 10000 && likeRate >= 0.85) return "High interest";
  if (onlinePlayers >= 2000 && likeRate >= 0.75) return "Rising";
  return "Watchlist";
}

export function getDisplayStats(game: Game): DisplayStats {
  const stats = statsBySlug[game.slug];
  if (!stats || stats.status !== "verified") {
    return {
      onlinePlayers: "Checking",
      likeRate: "Checking",
      launchWindow: "Unverified",
      opportunity: "Watchlist",
      lastChecked: game.lastUpdated,
      sourceLabel: stats?.sourceLabel ?? "Pending source",
      sourceUrl: stats?.sourceUrl ?? null,
      isVerified: false
    };
  }

  return {
    onlinePlayers:
      typeof stats.onlinePlayers === "number"
        ? formatNumber(stats.onlinePlayers)
        : "Checking",
    likeRate: getLikeRate(stats),
    launchWindow: stats.updatedAt ? "Verified update" : "Checking",
    opportunity: getOpportunityLabel(stats),
    lastChecked: stats.lastChecked,
    sourceLabel: stats.sourceLabel,
    sourceUrl: stats.sourceUrl,
    isVerified: true
  };
}

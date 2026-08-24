import { staticPageMetadata } from "@/app/static-page-metadata";
import EmailLink from "@/components/EmailLink";

export const metadata = staticPageMetadata(
  "sources",
  "Sources and Verification",
  "See how RisingBlox verifies Roblox game facts, code status, public data snapshots, page dates, uncertainty, and correction requests."
);

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-4xl font-black tracking-tight">Sources and Verification</h1>
      <div className="content-prose mt-6">
        <p><strong>Last updated:</strong> July 19, 2026.</p>
        <p>
          RisingBlox prioritizes official Roblox experience pages, Roblox public game
          data, developer-linked announcements, official update logs, and recorded
          in-game evidence. Third-party guide pages may be used to find a lead, but are
          not treated as the only proof of a game fact or code.
        </p>
        <h2>Code verification</h2>
        <p>
          A code is listed as active only when its string is supported by official text,
          a developer-linked announcement, or reliable redemption evidence. Rewards stay
          unclaimed when the source does not verify them. A code moves to expired only
          after its changed status can be supported.
        </p>
        <h2>Dates and snapshots</h2>
        <p>
          “Last checked” records the source review represented by the page. Roblox player
          and visit counts are point-in-time snapshots, not permanent values. A source
          check does not mean every mechanic was tested in game.
        </p>
        <h2>Uncertainty and corrections</h2>
        <p>
          When no primary source is available, RisingBlox should say so rather than fill
          the gap with a copied claim. To request a correction, email <EmailLink /> with
          the page URL and the relevant official or in-game evidence.
        </p>
      </div>
    </div>
  );
}

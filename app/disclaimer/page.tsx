import { staticPageMetadata } from "@/app/static-page-metadata";
import EmailLink from "@/components/EmailLink";

export const metadata = staticPageMetadata(
  "disclaimer",
  "Disclaimer",
  "RisingBlox editorial, verification, affiliation, and trademark disclaimer."
);

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-4xl font-black tracking-tight">Disclaimer</h1>
      <div className="content-prose mt-6">
        <p><strong>Last updated:</strong> July 19, 2026.</p>
        <p>
          RisingBlox provides independent editorial information about Roblox games.
          Games, interfaces, codes, rewards, player counts, and update details can change
          after a page is checked. Verify important details in the current game or an
          official developer source.
        </p>
        <h2>Independent and unofficial</h2>
        <p>
          RisingBlox is not affiliated with, endorsed by, or sponsored by Roblox
          Corporation or any game developer. Roblox and individual game names and marks
          belong to their respective owners. This disclaimer is not a license to use
          third-party copyright or trademarks.
        </p>
        <h2>Source boundaries</h2>
        <p>
          A page may distinguish official-source facts, public API snapshots, editorial
          guidance, and facts that still require in-game verification. Absence from a
          source is not proof that a feature can never exist. Empty code pages are not
          evidence of a code&apos;s validity.
        </p>
        <h2>Corrections</h2>
        <p>
          To report an outdated statement, send the page URL, the specific claim, and any
          official or in-game evidence to <EmailLink />.
        </p>
      </div>
    </div>
  );
}

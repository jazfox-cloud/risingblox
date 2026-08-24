import { staticPageMetadata } from "@/app/static-page-metadata";
import EmailLink from "@/components/EmailLink";

export const metadata = staticPageMetadata(
  "terms",
  "Terms of Use",
  "Read the RisingBlox terms for using independent Roblox guides, code checks, public game-data snapshots, external links, and source-bounded advice."
);

export default function TermsPage() {
  return <div className="mx-auto max-w-4xl px-4 py-10"><h1 className="text-4xl font-black tracking-tight">Terms of Use</h1><div className="content-prose mt-6"><p>Last updated July 11, 2026.</p><h2>Informational use</h2><p>RisingBlox provides independent editorial guides, code checks, and public game-data snapshots. Information may change after publication. Verify important in-game decisions against the current game and official developer channels.</p><h2>No affiliation or warranty</h2><p>Roblox and individual game names belong to their respective owners. RisingBlox is not affiliated with or endorsed by Roblox Corporation or any game developer. The site is provided as-is without a guarantee that every code, value, or strategy remains current.</p><h2>Acceptable use</h2><p>Do not misuse the site, interfere with its operation, scrape it in a way that degrades service, or present its editorial work as your own. External links are provided for reference and remain governed by their owners.</p><h2>Contact</h2><p>Questions about these terms can be sent to <EmailLink />.</p></div></div>;
}

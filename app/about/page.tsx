import { staticPageMetadata } from "@/app/static-page-metadata";

export const metadata = staticPageMetadata(
  "about",
  "About",
  "About RisingBlox and its independent Roblox trends coverage."
);

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-4xl font-black tracking-tight">About RisingBlox</h1>
      <div className="content-prose mt-6">
        <p>
          RisingBlox is an independent site for tracking emerging Roblox games,
          practical beginner guides, and frequently checked code pages.
        </p>
        <p>
          The site&apos;s value is source-bounded research: it compares public Roblox
          game descriptions and API snapshots with the current page, explains what a
          beginner can safely do from those facts, and leaves unsupported code, reward,
          drop-rate, tier-list, and timing claims unpublished.
        </p>
        <h2>How pages are reviewed</h2>
        <p>
          Game status and mechanics are checked against the official Roblox experience
          page, Roblox public data, developer-linked announcements, or recorded in-game
          evidence. Code strings are published as active only when a source or redemption
          check supports them. Page dates describe the recorded check; they are not meant
          to imply that every fact was tested inside the game.
        </p>
        <p>
          If a page becomes outdated or a source changes, readers can use the Contact
          page to report the URL and the statement that needs review. Corrections should
          preserve the evidence boundary instead of replacing it with an unsupported guess.
        </p>
        <p>
          RisingBlox is not affiliated with, endorsed by, or sponsored by Roblox
          Corporation or any game developer. Roblox and individual game names and marks
          belong to their respective owners. This statement describes independence; it
          is not a copyright or trademark license.
        </p>
      </div>
    </div>
  );
}

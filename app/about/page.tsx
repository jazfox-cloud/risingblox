import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About RisingBlox and its independent Roblox trends coverage."
};

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
          RisingBlox is not affiliated with, endorsed by, or sponsored by Roblox
          Corporation. Roblox and related marks belong to their respective owners.
        </p>
      </div>
    </div>
  );
}

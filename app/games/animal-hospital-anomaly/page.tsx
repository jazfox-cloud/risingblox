import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://risingblox.com";
const checkedDate = "2026-06-30";
const officialRobloxUrl = "https://www.roblox.com/games/78515283254292/Animal-Hospital";
const robloxSnapshot = {
  universeId: "10148749921",
  placeId: "78515283254292",
  creator: "Animal Anomaly",
  genre: "Survival",
  playing: "409,836",
  visits: "211,964,642",
  updated: "2026-06-28T14:53:41Z"
};

export const metadata: Metadata = {
  title: "Animal Hospital (Anomaly) Roblox Game Profile",
  description:
    "Animal Hospital (Anomaly) Roblox game profile with official source notes, gameplay loop, current Roblox snapshot, guide, and verified codes status.",
  alternates: {
    canonical: `${baseUrl}/games/animal-hospital-anomaly/`
  },
  openGraph: {
    title: "Animal Hospital (Anomaly) Roblox Game Profile",
    description:
      "Animal Hospital (Anomaly) Roblox game profile with official source notes, gameplay loop, current Roblox snapshot, guide, and verified codes status.",
    url: `${baseUrl}/games/animal-hospital-anomaly/`
  }
};

export default function AnimalHospitalAnomalyGameProfile() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-sm font-black uppercase text-coral">
        Roblox Survival / Anomaly
      </p>
      <h1 className="mt-3 text-4xl font-black tracking-tight">
        Animal Hospital (Anomaly)
      </h1>
      <p className="mt-4 text-lg leading-8 text-gray-700">
        Animal Hospital (Anomaly) is a Roblox night-shift survival game from
        Animal Anomaly. The official page says players are hired to treat
        patients at night while watching for patients who are acting weird.
      </p>
      <p className="mt-3 text-sm text-gray-600">Last checked: {checkedDate}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          className="rounded-md bg-ink px-5 py-3 font-bold text-white"
          href={officialRobloxUrl}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Play on Roblox
        </a>
        <Link
          className="rounded-md bg-mint px-5 py-3 font-bold text-ink"
          href="/guides/animal-hospital-anomaly/"
        >
          Beginner guide
        </Link>
        <Link
          className="rounded-md bg-coral px-5 py-3 font-bold text-white"
          href="/codes/animal-hospital-anomaly/"
        >
          Codes status
        </Link>
      </div>

      <dl className="mt-8 grid gap-4 rounded-lg border border-black/10 bg-white p-6 shadow-sm sm:grid-cols-4">
        <div>
          <dt className="text-sm text-gray-500">Online players</dt>
          <dd className="mt-1 text-2xl font-black">{robloxSnapshot.playing}</dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500">Visits</dt>
          <dd className="mt-1 text-2xl font-black">{robloxSnapshot.visits}</dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500">Genre</dt>
          <dd className="mt-1 text-2xl font-black">{robloxSnapshot.genre}</dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500">Last checked</dt>
          <dd className="mt-1 text-2xl font-black">{checkedDate}</dd>
        </div>
      </dl>

      <section className="content-prose mt-10">
        <h2>What Is Animal Hospital (Anomaly)?</h2>
        <p>
          Animal Hospital (Anomaly) fits the high-intent Roblox searches around
          anomaly games, hospital games, night-shift gameplay, and survival
          checklist routes. RisingBlox keeps this profile source-backed and does
          not claim a complete anomaly list without gameplay or developer
          verification.
        </p>

        <h2>Official Gameplay Loop</h2>
        <p>
          The official Roblox description supports a compact loop: take the
          night-shift role, treat patients, and identify suspicious patient
          behavior before acting too quickly.
        </p>
        <ul>
          <li>Work the night shift at Animal Hospital.</li>
          <li>Treat patients based on the case in front of you.</li>
          <li>Watch for patients who behave differently from normal cases.</li>
          <li>Use a repeatable observation order before taking risky actions.</li>
        </ul>

        <h2>Why It Is On RisingBlox</h2>
        <p>
          The game has strong current Roblox activity and a clear guide/code
          search pattern. The page cluster now covers the game profile,
          beginner checklist, and source-first codes status without publishing
          unverified mechanics or fake codes.
        </p>

        <h2>Official Roblox Snapshot</h2>
        <p>
          This snapshot comes from Roblox public game data checked on{" "}
          {checkedDate}. Counts can change quickly after updates.
        </p>
        <ul>
          <li>Universe ID: {robloxSnapshot.universeId}</li>
          <li>Place ID: {robloxSnapshot.placeId}</li>
          <li>Creator: {robloxSnapshot.creator}</li>
          <li>Playing at check: {robloxSnapshot.playing}</li>
          <li>Visits at check: {robloxSnapshot.visits}</li>
          <li>Roblox updated timestamp: {robloxSnapshot.updated}</li>
        </ul>

        <h2>Next Steps</h2>
        <p>
          For practical starter checks, use the{" "}
          <Link href="/guides/animal-hospital-anomaly/">beginner guide</Link>.
          For rewards research, use the{" "}
          <Link href="/codes/animal-hospital-anomaly/">codes status page</Link>.
        </p>

        <h2>Source Notes</h2>
        <ul>
          <li>
            Official Roblox game page:{" "}
            <a href={officialRobloxUrl}>Animal Hospital (Anomaly)</a>
          </li>
          <li>Checked date: {checkedDate}</li>
          <li>
            RisingBlox is independent and is not affiliated with Roblox or the
            game creator.
          </li>
        </ul>
      </section>
    </article>
  );
}

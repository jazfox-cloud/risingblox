import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://risingblox.com";
const checkedDate = "2026-06-29";
const officialRobloxUrl = "https://www.roblox.com/games/78515283254292/Animal-Hospital";
const robloxSnapshot = {
  universeId: "10148749921",
  placeId: "78515283254292",
  creator: "Animal Anomaly",
  playing: "377,402",
  visits: "177,622,798",
  updated: "2026-06-28T14:53:41Z"
};

const faqItems = [
  {
    question: "Are there any active Animal Hospital (Anomaly) codes?",
    answer:
      "No verified active Animal Hospital (Anomaly) codes are listed on RisingBlox right now."
  },
  {
    question: "Why are there no codes listed?",
    answer:
      "RisingBlox does not publish copied or placeholder Roblox codes. A code is added only after it can be checked against an official source, developer channel, or reliable in-game redemption evidence."
  },
  {
    question: "Where should I check first?",
    answer:
      "Start with the official Roblox game page and any channels linked by the developer. Avoid trusting code lists that do not show a source or a recent check date."
  },
  {
    question: "Does Animal Hospital (Anomaly) have expired codes?",
    answer:
      "No verified expired Animal Hospital (Anomaly) codes are listed on RisingBlox yet."
  }
];

export const metadata: Metadata = {
  title: "Animal Hospital (Anomaly) Codes - Roblox Code Status",
  description:
    "Checked Animal Hospital (Anomaly) Roblox codes, active code status, expired codes, source notes, and safe redemption steps. No verified active codes are listed right now.",
  alternates: {
    canonical: `${baseUrl}/codes/animal-hospital-anomaly/`
  },
  openGraph: {
    title: "Animal Hospital (Anomaly) Codes - Roblox Code Status",
    description:
      "Checked Animal Hospital (Anomaly) Roblox codes, active code status, expired codes, source notes, and safe redemption steps. No verified active codes are listed right now.",
    url: `${baseUrl}/codes/animal-hospital-anomaly/`
  }
};

export default function AnimalHospitalAnomalyCodesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <p className="text-sm font-black uppercase text-coral">Roblox Codes</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight">
        Animal Hospital (Anomaly) Codes
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-700">
        This page tracks Animal Hospital (Anomaly) Roblox code status with a
        source-first policy. We found no verified active codes during the latest
        check.
      </p>
      <p className="mt-3 text-sm text-gray-600">Last checked: {checkedDate}</p>

      <div className="mt-6 flex flex-wrap gap-3 text-sm font-black">
        <a
          className="rounded-md bg-ink px-4 py-3 text-white"
          href={officialRobloxUrl}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Official Roblox Page
        </a>
        <Link
          className="rounded-md bg-mint px-4 py-3 text-ink"
          href="/guides/animal-hospital-anomaly/"
        >
          Beginner guide
        </Link>
      </div>

      <section className="mt-8 rounded-lg border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black">Active Codes</h2>
        <div className="mt-5 rounded-md border border-dashed border-gray-300 bg-gray-50 p-5">
          <p className="font-black">No verified active codes right now.</p>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            We checked the official Roblox game page and public source signals
            for Animal Hospital (Anomaly). No reliable active code source was
            confirmed on {checkedDate}.
          </p>
        </div>
      </section>

      <section className="content-prose mt-10">
        <h2>How We Check Animal Hospital Codes</h2>
        <ul>
          <li>Check the official Roblox game page before adding any code.</li>
          <li>Look for developer-linked channels or in-game redemption evidence.</li>
          <li>Do not list copied code claims without a source and recent check date.</li>
          <li>Move a code to expired only after its status can be verified.</li>
        </ul>

        <h2>Expired Codes</h2>
        <p>No verified expired Animal Hospital (Anomaly) codes are listed yet.</p>

        <h2>How to Redeem</h2>
        <ol>
          <li>Open Animal Hospital (Anomaly) on Roblox.</li>
          <li>Look for a codes, rewards, shop, settings, or gifts button.</li>
          <li>If a code box exists, enter the code exactly as shown.</li>
          <li>If no code box exists, wait for an official update before trusting code claims.</li>
        </ol>

        <h2>Official Roblox Snapshot</h2>
        <p>
          This snapshot comes from the Roblox game API and is included to make
          the source trail clear. Counts can change quickly.
        </p>
        <ul>
          <li>Universe ID: {robloxSnapshot.universeId}</li>
          <li>Place ID: {robloxSnapshot.placeId}</li>
          <li>Creator: {robloxSnapshot.creator}</li>
          <li>Playing at check: {robloxSnapshot.playing}</li>
          <li>Visits at check: {robloxSnapshot.visits}</li>
          <li>Roblox updated timestamp: {robloxSnapshot.updated}</li>
        </ul>

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

        <h2>FAQ</h2>
        {faqItems.map((item) => (
          <div key={item.question}>
            <h3 className="mt-5 font-black text-ink">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>
    </article>
  );
}

import type { Metadata } from "next";
import ChecklistTools from "./ChecklistTools";

const baseUrl = "https://risingblox.com";
const checkedDate = "2026-06-27";
const robloxSnapshot = {
  universeId: "10148749921",
  placeId: "78515283254292",
  creator: "Animal Anomaly",
  playing: "350,196",
  visits: "120,672,935",
  updated: "2026-06-27T01:17:50Z"
};

const faqItems = [
  {
    question: "Is Animal Hospital (Anomaly) official?",
    answer:
      "No. RisingBlox is an independent guide site. The official Roblox game page is owned by Animal Anomaly."
  },
  {
    question: "Are there active Animal Hospital (Anomaly) codes?",
    answer:
      "No verified active Animal Hospital (Anomaly) codes are listed on RisingBlox right now."
  },
  {
    question: "What should beginners check first?",
    answer:
      "Beginners should check the patient, symptoms, room state, object changes, and behavior cues before choosing a risky action."
  },
  {
    question: "Does the checklist include every anomaly?",
    answer:
      "No. This first version is a safe observation checklist, not a complete anomaly database."
  },
  {
    question: "Why does this guide avoid exact anomaly claims?",
    answer:
      "Exact anomaly lists can become wrong after updates. RisingBlox adds specific claims only after official page checks, gameplay verification, developer channels, or trusted video evidence."
  }
];

export const metadata: Metadata = {
  title: "Animal Hospital (Anomaly) Roblox Guide - Night Shift Checklist",
  description:
    "Use this Animal Hospital (Anomaly) Roblox guide to handle night-shift patient checks, spot suspicious cases, and follow a safe anomaly checklist without guessing unverified codes or fake rules.",
  alternates: {
    canonical: `${baseUrl}/guides/animal-hospital-anomaly/`
  },
  openGraph: {
    title: "Animal Hospital (Anomaly) Roblox Guide - Night Shift Checklist",
    description:
      "Use this Animal Hospital (Anomaly) Roblox guide to handle night-shift patient checks, spot suspicious cases, and follow a safe anomaly checklist without guessing unverified codes or fake rules.",
    url: `${baseUrl}/guides/animal-hospital-anomaly/`
  }
};

export default function AnimalHospitalAnomalyGuide() {
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
    <article className="mx-auto max-w-5xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <p className="text-sm font-black uppercase text-coral">Roblox Guide</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight">
        Animal Hospital (Anomaly) Roblox Guide
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-700">
        Animal Hospital (Anomaly) is a Roblox night-shift hospital anomaly game.
        The official Roblox page says players are hired to work the night shift,
        treat patients, and deal with patients who are acting weird.
      </p>
      <p className="mt-3 text-sm text-gray-600">Last checked: {checkedDate}</p>

      <div className="mt-6 flex flex-wrap gap-3 text-sm font-black">
        <a
          className="rounded-md bg-ink px-4 py-3 text-white"
          href="https://www.roblox.com/games/78515283254292/Animal-Hospital"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Official Roblox Page
        </a>
        <a className="rounded-md bg-mint px-4 py-3 text-ink" href="#checklist">
          Open Checklist
        </a>
        <a
          className="rounded-md bg-coral px-4 py-3 text-white"
          href="/codes/animal-hospital-anomaly/"
        >
          Codes status
        </a>
      </div>

      <section className="content-prose mt-10 rounded-lg border border-black/10 bg-white p-6 shadow-sm">
        <h2>What Is Animal Hospital (Anomaly)?</h2>
        <p>
          Animal Hospital (Anomaly) fits a hospital, anomaly, night-shift, and
          checklist-style search intent. The official page supports the core
          premise: treat patients during a night shift while watching for weird
          patient behavior.
        </p>
        <ul>
          <li>Game type: hospital / anomaly / night shift / checklist-style.</li>
          <li>Confirmed loop: treat patients while watching for strange cases.</li>
          <li>RisingBlox is not the official game site.</li>
        </ul>

        <h2>Official Roblox Snapshot</h2>
        <p>
          This page uses the official Roblox game page and Roblox API snapshot
          checked on {checkedDate}. Counts can change quickly after updates.
        </p>
        <ul>
          <li>Universe ID: {robloxSnapshot.universeId}</li>
          <li>Place ID: {robloxSnapshot.placeId}</li>
          <li>Creator: {robloxSnapshot.creator}</li>
          <li>Playing at check: {robloxSnapshot.playing}</li>
          <li>Visits at check: {robloxSnapshot.visits}</li>
          <li>Roblox updated timestamp: {robloxSnapshot.updated}</li>
        </ul>

        <h2>Night Shift Starter Route</h2>
        <p>
          The safest beginner route is to build a repeatable check order before
          chasing speed. Use the same observation pass for every patient so a
          suspicious change is easier to notice.
        </p>
        <ul>
          <li>Enter the room and observe the patient before acting.</li>
          <li>Confirm the patient, symptoms, environment, and interactive objects.</li>
          <li>Do not treat speed as the only goal during your first night.</li>
          <li>After each patient, reset your attention before moving to the next case.</li>
        </ul>
      </section>

      <div id="checklist" className="mt-10 scroll-mt-6">
        <ChecklistTools />
      </div>

      <section className="content-prose mt-10 rounded-lg border border-black/10 bg-white p-6 shadow-sm">
        <h2>Common Beginner Mistakes</h2>
        <ul>
          <li>Treating patients too quickly without observing anomaly cues.</li>
          <li>Only watching the patient and missing room or object changes.</li>
          <li>Using unconfirmed community claims as fixed rules.</li>
          <li>Ignoring that updates can change mechanics after a guide is written.</li>
        </ul>

        <h2>Codes Status</h2>
        <p>
          No verified active Animal Hospital (Anomaly) codes are listed on
          RisingBlox right now. See the{" "}
          <a href="/codes/animal-hospital-anomaly/">codes status page</a> for
          the latest source notes.
        </p>

        <h2>Source Notes</h2>
        <ul>
          <li>
            Official Roblox game page:{" "}
            <a href="https://www.roblox.com/games/78515283254292/Animal-Hospital">
              Animal Hospital (Anomaly)
            </a>
          </li>
          <li>Checked date: {checkedDate}</li>
          <li>
            Data policy: specific anomaly lists are added only after official
            page checks, actual gameplay, developer channels, or credible video
            verification.
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

"use client";

import { useEffect, useState } from "react";

type GoogleFundingChoices = {
  callbackQueue?: Array<Record<string, () => void>>;
  showRevocationMessage?: () => void;
};

declare global {
  interface Window {
    googlefc?: GoogleFundingChoices;
  }
}

export default function PrivacyChoicesLink() {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    window.googlefc = window.googlefc ?? {};
    setAvailable(typeof window.googlefc.showRevocationMessage === "function");
    window.googlefc.callbackQueue = window.googlefc.callbackQueue ?? [];
    window.googlefc.callbackQueue.push({
      CONSENT_API_READY: () => {
        setAvailable(typeof window.googlefc?.showRevocationMessage === "function");
      }
    });
  }, []);

  if (!available) return null;

  return (
    <button
      className="rounded-md border border-black/20 bg-white px-4 py-2 font-bold text-ink"
      data-ad-exclusion-zone="privacy-choice-control"
      onClick={() => window.googlefc?.showRevocationMessage?.()}
      type="button"
    >
      Open privacy and cookie settings
    </button>
  );
}

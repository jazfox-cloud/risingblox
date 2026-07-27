"use client";

import { useEffect, useState } from "react";
import { useAnalytics } from "@/components/AnalyticsProvider";

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
  const { reopenChoices } = useAnalytics();

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

  return (
    <div className="flex flex-wrap gap-3" data-ad-exclusion-zone="privacy-choice-control">
      <button
        className="rounded-md border border-black/20 bg-white px-4 py-2 font-bold text-ink"
        onClick={reopenChoices}
        type="button"
      >
        Open analytics choices
      </button>
      {available ? (
        <button
          className="rounded-md border border-black/20 bg-white px-4 py-2 font-bold text-ink"
          onClick={() => window.googlefc?.showRevocationMessage?.()}
          type="button"
        >
          Open advertising choices
        </button>
      ) : null}
    </div>
  );
}

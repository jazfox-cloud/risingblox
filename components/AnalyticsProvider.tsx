"use client";

import Script from "next/script";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const measurementId = "G-BTYFTBCGLV";
const canonicalHost = "risingblox.com";
const consentStorageKey = "risingblox_analytics_consent";

type ConsentChoice = "granted" | "denied" | null;

type ConsentContextValue = {
  choice: ConsentChoice;
  isProductionHost: boolean;
  grantAnalytics: () => void;
  denyAnalytics: () => void;
  reopenChoices: () => void;
  trackEvent: (eventName: string, parameters: Record<string, string>) => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

declare global {
  interface Window {
    dataLayer?: IArguments[];
    gtag?: (...args: unknown[]) => void;
    risingBloxOpenPrivacyChoices?: () => void;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer ?? [];
  // Google tag command queues require the function arguments object.
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

function ensureGtag() {
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = gtag;
}

function updateConsent(analyticsStorage: "granted" | "denied") {
  ensureGtag();
  gtag("consent", "update", {
    analytics_storage: analyticsStorage,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });
}

function configureAnalytics() {
  ensureGtag();
  gtag("js", new Date());
  gtag("config", measurementId, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [scriptEnabled, setScriptEnabled] = useState(false);
  const [isProductionHost, setIsProductionHost] = useState(false);

  useEffect(() => {
    ensureGtag();
    const productionHost = window.location.hostname === canonicalHost;
    setIsProductionHost(productionHost);

    const storedChoice = window.localStorage.getItem(consentStorageKey);
    const nextChoice: ConsentChoice = storedChoice === "granted" || storedChoice === "denied"
      ? storedChoice
      : null;
    setChoice(nextChoice);
    setShowPanel(nextChoice === null);

    if (!productionHost) return;
    if (nextChoice === "granted") {
      updateConsent("granted");
      configureAnalytics();
      setScriptEnabled(true);
    } else {
      updateConsent("denied");
    }
  }, []);

  const grantAnalytics = useCallback(() => {
    window.localStorage.setItem(consentStorageKey, "granted");
    setChoice("granted");
    setShowPanel(false);
    if (!isProductionHost) return;
    updateConsent("granted");
    configureAnalytics();
    setScriptEnabled(true);
  }, [isProductionHost]);

  const denyAnalytics = useCallback(() => {
    window.localStorage.setItem(consentStorageKey, "denied");
    setChoice("denied");
    setShowPanel(false);
    if (!isProductionHost) return;
    updateConsent("denied");
  }, [isProductionHost]);

  const reopenChoices = useCallback(() => setShowPanel(true), []);

  useEffect(() => {
    window.risingBloxOpenPrivacyChoices = reopenChoices;
    return () => {
      if (window.risingBloxOpenPrivacyChoices === reopenChoices) {
        delete window.risingBloxOpenPrivacyChoices;
      }
    };
  }, [reopenChoices]);

  const trackEvent = useCallback(
    (eventName: string, parameters: Record<string, string>) => {
      if (!isProductionHost || choice !== "granted") return;
      ensureGtag();
      gtag("event", eventName, {
        ...parameters,
        transport_type: "beacon"
      });
    },
    [choice, isProductionHost]
  );

  const value = useMemo(
    () => ({ choice, isProductionHost, grantAnalytics, denyAnalytics, reopenChoices, trackEvent }),
    [choice, denyAnalytics, grantAnalytics, isProductionHost, reopenChoices, trackEvent]
  );

  return (
    <ConsentContext.Provider value={value}>
      {children}
      {scriptEnabled ? (
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          strategy="afterInteractive"
        />
      ) : null}
      {showPanel ? (
        <div
          aria-label="Analytics privacy choices"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white shadow-2xl"
          data-ad-exclusion-zone="privacy-choice-control"
          role="dialog"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-3xl text-sm leading-6 text-gray-700">
              <p className="font-black text-ink">Analytics privacy choices</p>
              <p>
                RisingBlox can use Google Analytics 4 to measure page visits and content usage
                after you choose analytics. Advertising consent stays off here.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                className="rounded-md border border-black/20 bg-white px-4 py-2 font-bold text-ink"
                onClick={denyAnalytics}
                type="button"
              >
                Reject analytics
              </button>
              <button
                className="rounded-md bg-ink px-4 py-2 font-bold text-white"
                onClick={grantAnalytics}
                type="button"
              >
                Accept analytics
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </ConsentContext.Provider>
  );
}

export function useAnalytics() {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useAnalytics must be used inside AnalyticsProvider");
  }
  return context;
}

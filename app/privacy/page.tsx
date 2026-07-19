import { staticPageMetadata } from "@/app/static-page-metadata";
import EmailLink from "@/components/EmailLink";
import PrivacyChoicesLink from "@/components/PrivacyChoicesLink";

export const metadata = staticPageMetadata(
  "privacy",
  "Privacy Policy",
  "RisingBlox privacy policy describing current hosting and contact processing and the separate disclosures that will apply if advertising is enabled."
);

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-4xl font-black tracking-tight">Privacy Policy</h1>
      <div className="content-prose mt-6">
        <p>
          RisingBlox is a static-first content site. We do not require user accounts,
          payments, or comments to read our guides.
        </p>
        <p><strong>Effective date and last updated:</strong> July 19, 2026.</p>
        <h2>Current data practices</h2>
        <p>
          RisingBlox does not currently load Google Analytics, Google AdSense, another
          advertising network, or a non-essential analytics cookie. The published site
          does not intentionally use localStorage for tracking or advertising.
        </p>
        <p>
          Cloudflare hosts and protects the site and may process network and security
          information such as IP address, request headers, device or browser signals,
          requested URLs, timestamps, and threat indicators. Cloudflare or the hosting
          service may retain operational and security logs under their own practices.
        </p>
        <p>
          The contact address uses Cloudflare Email Routing. When you email RisingBlox,
          the message, sender address, routing metadata, and any information you include
          are processed to deliver and answer the message. The site does not publish or
          request the private destination mailbox address.
        </p>
        <p>
          External links, including Roblox and Google pages, are operated by their own
          providers. Their privacy practices apply after you leave RisingBlox.
        </p>
        <h2>Future Google advertising</h2>
        <p>
          RisingBlox may add Google AdSense only after account-backed technical setup.
          It is not active now. If enabled, Google and other third-party vendors may use
          cookies, IP addresses, device identifiers, or similar technologies to deliver
          and measure personalized or non-personalized ads and to prevent fraud and abuse.
        </p>
        <p>
          Before serving ads where consent is required, RisingBlox plans to use Google&apos;s
          CMP or another Google-certified CMP with consent, do-not-consent, manage-options,
          and later privacy-choice controls. No custom banner on this site should be
          interpreted as a certified CMP.
        </p>
        <p>
          Google explains how it uses information from partner sites in its
          <a href="https://policies.google.com/technologies/partner-sites"> partner-sites notice</a>.
          If advertising is enabled, visitors can also review personalized-ad controls in
          <a href="https://adssettings.google.com/"> Google Ads Settings</a>.
        </p>
        <h2 id="privacy-choices">Privacy choices</h2>
        <div data-ad-exclusion-zone="privacy-choice-control">
          <p>
            No advertising CMP is configured because RisingBlox does not currently load
            advertising or non-essential analytics. When a compatible certified CMP is
            active, its official control will appear below so visitors can reopen their
            choices. Until then, no inactive or simulated consent control is shown.
          </p>
          <PrivacyChoicesLink />
        </div>
        <h2>Your requests</h2>
        <p>
          You may ask about information submitted through email, request correction or
          deletion where applicable, or raise a privacy concern by contacting RisingBlox.
          Legal rights can vary by location.
        </p>
        <h2>Contact</h2>
        <p>For privacy questions, email <EmailLink />.</p>
      </div>
    </div>
  );
}

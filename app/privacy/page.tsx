import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "RisingBlox privacy policy for analytics, advertising, and future email products."
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-4xl font-black tracking-tight">Privacy Policy</h1>
      <div className="content-prose mt-6">
        <p>
          RisingBlox is currently a static content site. We do not require user
          accounts, payments, or comments in the first MVP.
        </p>
        <p>
          Future analytics, advertising, or email subscription tools may collect
          limited technical data such as page views, device type, referral source,
          or email address when voluntarily submitted. This page should be updated
          before those tools are enabled.
        </p>
      </div>
    </div>
  );
}

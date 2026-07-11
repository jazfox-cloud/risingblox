import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "RisingBlox privacy policy for analytics, advertising, and future email products.",
  alternates: {
    canonical: "https://risingblox.com/privacy/"
  }
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-4xl font-black tracking-tight">Privacy Policy</h1>
      <div className="content-prose mt-6">
        <p>
          RisingBlox is a static-first content site. We do not require user accounts,
          payments, or comments to read our guides.
        </p>
        <p>
          Our hosting, analytics, and security providers may process limited technical
          data such as IP address, browser and device type, pages viewed, timestamps,
          and referral source to operate, protect, and improve the site.
        </p>
        <h2>Advertising cookies</h2>
        <p>RisingBlox may use third-party advertising services, including Google AdSense. Third-party vendors, including Google, may use cookies to serve and measure ads based on a visitor&apos;s prior visits to this or other websites.</p>
        <p>You can control or opt out of personalized Google advertising through <a href="https://adssettings.google.com/">Google Ads Settings</a>. Additional industry opt-out choices are available at <a href="https://www.aboutads.info/choices/">aboutads.info</a>.</p>
        <h2>Contact</h2>
        <p>For privacy questions, email <a href="mailto:hello@risingblox.com">hello@risingblox.com</a>.</p>
      </div>
    </div>
  );
}

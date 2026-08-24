import { staticPageMetadata } from "@/app/static-page-metadata";
import EmailLink from "@/components/EmailLink";

export const metadata = staticPageMetadata(
  "contact",
  "Contact",
  "Contact RisingBlox for page corrections, source suggestions, privacy requests, accessibility issues, and feedback about Roblox guide coverage."
);

export default function ContactPage() {
  return <div className="mx-auto max-w-4xl px-4 py-10"><h1 className="text-4xl font-black tracking-tight">Contact RisingBlox</h1><div className="content-prose mt-6"><p>Send corrections, source suggestions, accessibility reports, privacy requests, or general feedback to <EmailLink />.</p><p>For a content correction, include the page URL, the statement or value that needs review, and a reliable source when available. We do not provide Roblox account support, code redemption support, or access to game developers.</p><p>RisingBlox is an independent fan-run guide site and is not affiliated with Roblox Corporation or the developers of the games covered.</p></div></div>;
}

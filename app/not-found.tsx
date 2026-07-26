import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested RisingBlox page does not exist.",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
  openGraph: null,
  twitter: null
};

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <p className="text-sm font-black uppercase text-coral">404</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight">That page is not available.</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-700">
        The URL may be outdated or mistyped. This error page and its recovery controls
        are excluded from future advertising.
      </p>
      <div
        className="mt-8 flex flex-wrap gap-3 text-sm font-black"
        data-ad-exclusion-zone="error-recovery-actions"
      >
        <Link className="rounded-md bg-ink px-4 py-3 text-white" href="/">Return home</Link>
        <Link className="rounded-md bg-mint px-4 py-3 text-ink" href="/trending/">Browse trending games</Link>
        <Link className="rounded-md bg-white px-4 py-3 text-ink shadow-sm" href="/contact/">Report a broken link</Link>
      </div>
    </div>
  );
}

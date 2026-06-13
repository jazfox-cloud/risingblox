import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://risingblox.com"),
  title: {
    default: "RisingBlox - Rising Roblox Games, Codes, and Guides",
    template: "%s | RisingBlox"
  },
  description:
    "Track rising Roblox games, beginner guides, opportunity scores, and fresh code pages for fast-moving Roblox trends.",
  openGraph: {
    title: "RisingBlox",
    description: "Rising Roblox games, codes, and practical beginner guides.",
    url: "https://risingblox.com",
    siteName: "RisingBlox",
    type: "website"
  }
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/trending", label: "Trending" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" }
];

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-black/10 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="text-xl font-black tracking-tight">
              RisingBlox
            </Link>
            <nav className="flex flex-wrap gap-2 text-sm font-semibold text-gray-700">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-black/10 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
            RisingBlox is an independent Roblox trends and guides site. It is
            not affiliated with, endorsed by, or sponsored by Roblox Corporation.
          </div>
        </footer>
      </body>
    </html>
  );
}

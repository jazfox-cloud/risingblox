"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { useAnalytics } from "@/components/AnalyticsProvider";

type TrackedContentLinkProps = {
  children: ReactNode;
  className?: string;
  contentSlug: string;
  contentType: "game" | "guide" | "codes" | "trending" | "external";
  href: string;
  placement: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">;

function getTargetDomain(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export function TrackedContentLink({
  children,
  className,
  contentSlug,
  contentType,
  href,
  placement,
  ...anchorProps
}: TrackedContentLinkProps) {
  const { trackEvent } = useAnalytics();
  const isExternal = /^https?:\/\//.test(href);

  const handleClick = () => {
    trackEvent("select_content", {
      content_type: contentType,
      content_slug: contentSlug,
      placement
    });

    if (isExternal) {
      const targetDomain = getTargetDomain(href);
      if (targetDomain) {
        trackEvent("outbound_click", {
          target_type: contentType === "external" ? "official_source" : "roblox_game",
          target_domain: targetDomain,
          placement
        });
      }
    }
  };

  if (isExternal) {
    return (
      <a className={className} href={href} onClick={handleClick} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href} onClick={handleClick} {...anchorProps}>
      {children}
    </Link>
  );
}


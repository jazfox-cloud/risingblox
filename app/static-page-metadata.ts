import type { Metadata } from "next";
import { baseUrl, defaultTwitterMetadata, websiteOpenGraph } from "@/app/metadata";

export function staticPageMetadata(
  path: string,
  title: string,
  description: string
): Metadata {
  const url = `${baseUrl}/${path}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: websiteOpenGraph(`${title} | RisingBlox`, description, url),
    twitter: defaultTwitterMetadata()
  };
}

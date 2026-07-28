import type { Metadata } from "next";

export const baseUrl = "https://risingblox.com";

export const DEFAULT_OG_IMAGE = {
  url: `${baseUrl}/og/risingblox-og.png`,
  width: 1200,
  height: 630,
  alt: "RisingBlox independent game guides and progression brand image",
  type: "image/png"
} as const;

export function defaultOpenGraphImages() {
  return [DEFAULT_OG_IMAGE];
}

export function defaultTwitterMetadata(): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE.url]
  };
}

export function contentOpenGraph(
  title: string,
  description: string,
  url: string
): Metadata["openGraph"] {
  return {
    title,
    description,
    url,
    type: "article",
    images: defaultOpenGraphImages()
  };
}

export function websiteOpenGraph(
  title: string,
  description: string,
  url: string
): Metadata["openGraph"] {
  return {
    title,
    description,
    url,
    type: "website",
    images: defaultOpenGraphImages()
  };
}

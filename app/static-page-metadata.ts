import type { Metadata } from "next";

const baseUrl = "https://risingblox.com";

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
    openGraph: { url }
  };
}

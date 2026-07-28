import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outputDir = path.join(root, "out");
const baseUrl = "https://risingblox.com";
const defaultOgImage = `${baseUrl}/og/risingblox-og.png`;
const defaultOgImagePath = path.join(root, "public/og/risingblox-og.png");
const expectedNoindexCodes = new Set([
  "/codes/iron-soul-dungeon/",
  "/codes/grow-a-garden-2/",
  "/codes/mini-war/",
  "/codes/noob-incremental/",
  "/codes/anime-squadron/",
  "/codes/animal-hospital-anomaly/"
]);
const protectedIndexablePages = new Set([
  "/codes/scale-slimy-fish/",
  "/guides/grow-a-garden-2/"
]);

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

function decodeHtml(value = "") {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&nbsp;", " ");
}

function textContent(value = "") {
  return decodeHtml(
    value
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
  )
    .replace(/\s+/g, " ")
    .trim();
}

function attributes(tag) {
  const result = {};
  for (const match of tag.matchAll(/([:\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) {
    result[match[1].toLowerCase()] = decodeHtml(match[2] ?? match[3] ?? "");
  }
  return result;
}

function tagValues(html, tagName) {
  return [...html.matchAll(new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "gi"))]
    .map((match) => textContent(match[1]));
}

function metaMap(html) {
  const result = {};
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    const attrs = attributes(match[0]);
    const key = (attrs.name ?? attrs.property ?? "").toLowerCase();
    if (key) result[key] = attrs.content ?? "";
  }
  return result;
}

function linkValue(html, rel) {
  for (const match of html.matchAll(/<link\b[^>]*>/gi)) {
    const attrs = attributes(match[0]);
    if ((attrs.rel ?? "").toLowerCase().split(/\s+/).includes(rel)) return attrs.href ?? "";
  }
  return "";
}

function pngSize(file) {
  const buffer = fs.readFileSync(file);
  if (
    buffer.length < 24 ||
    buffer.toString("ascii", 1, 4) !== "PNG" ||
    buffer.toString("ascii", 12, 16) !== "IHDR"
  ) {
    return null;
  }
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20)
  };
}

function routeForFile(file) {
  const relative = path.relative(outputDir, file).split(path.sep).join("/");
  if (relative === "index.html") return "/";
  return `/${relative.replace(/index\.html$/, "")}`;
}

function normalizeInternalHref(href, sourceUrl) {
  if (!href || /^(?:#|mailto:|tel:|javascript:)/i.test(href)) return null;
  try {
    const url = new URL(href, `${baseUrl}${sourceUrl}`);
    if (url.origin !== baseUrl) return null;
    url.hash = "";
    url.search = "";
    if (!path.extname(url.pathname) && !url.pathname.endsWith("/")) url.pathname += "/";
    return url.pathname;
  } catch {
    return null;
  }
}

const htmlFiles = walk(outputDir)
  .filter((file) => file.endsWith(`${path.sep}index.html`))
  .sort();
const sitemap = fs.readFileSync(path.join(outputDir, "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const sitemapPaths = new Set(sitemapUrls.map((url) => new URL(url).pathname));

const pages = htmlFiles.map((file) => {
  const html = fs.readFileSync(file, "utf8");
  const url = routeForFile(file);
  const metas = metaMap(html);
  const robots = (metas.robots || "index, follow").toLowerCase();
  const h1 = tagValues(html, "h1");
  const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html;
  const links = [...html.matchAll(/<a\b[^>]*>/gi)].map((match) => {
    const attrs = attributes(match[0]);
    return {
      href: normalizeInternalHref(attrs.href, url),
      nofollow: (attrs.rel ?? "").toLowerCase().split(/\s+/).includes("nofollow")
    };
  });
  const jsonLdBlocks = [...html.matchAll(
    /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  )].map((match) => decodeHtml(match[1]));
  const jsonLdErrors = jsonLdBlocks.flatMap((block) => {
    try {
      JSON.parse(block);
      return [];
    } catch (error) {
      return [error.message];
    }
  });
  const title = tagValues(html, "title")[0] ?? "";
  const description = metas.description ?? "";

  return {
    url,
    file: path.relative(root, file),
    inSitemap: sitemapPaths.has(url),
    indexable: !/(?:^|,\s*)noindex(?:,|$)/.test(robots),
    follow: !/(?:^|,\s*)nofollow(?:,|$)/.test(robots),
    robots,
    canonical: linkValue(html, "canonical"),
    title,
    titleLength: [...title].length,
    description,
    descriptionLength: [...description].length,
    h1,
    wordCount: textContent(body).split(/\s+/).filter(Boolean).length,
    og: {
      title: metas["og:title"] ?? "",
      description: metas["og:description"] ?? "",
      url: metas["og:url"] ?? "",
      type: metas["og:type"] ?? "",
      image: metas["og:image"] ?? "",
      imageWidth: metas["og:image:width"] ?? "",
      imageHeight: metas["og:image:height"] ?? "",
      imageAlt: metas["og:image:alt"] ?? ""
    },
    twitter: {
      card: metas["twitter:card"] ?? "",
      title: metas["twitter:title"] ?? "",
      description: metas["twitter:description"] ?? "",
      image: metas["twitter:image"] ?? "",
      imageAlt: metas["twitter:image:alt"] ?? ""
    },
    jsonLdBlocks: jsonLdBlocks.length,
    jsonLdErrors,
    links
  };
});

const pagePaths = new Set(pages.map((page) => page.url));
for (const page of pages) {
  page.inbound = pages.flatMap((source) =>
    source.links
      .filter((link) => link.href === page.url && !link.nofollow)
      .map(() => source.url)
  );
  page.inbound = [...new Set(page.inbound)].sort();
  page.inboundCount = page.inbound.length;
  page.brokenInternalLinks = [...new Set(
    page.links
      .map((link) => link.href)
      .filter((href) => href && !pagePaths.has(href) && !/\.[a-z0-9]+\/?$/i.test(href))
  )].sort();
}

function expectedOgType(page) {
  if (page.url === "/" || !/^\/(?:games|guides|codes)\//.test(page.url)) {
    return "website";
  }
  return "article";
}

function canonicalPath(page) {
  try {
    return new URL(page.canonical).pathname;
  } catch {
    return "";
  }
}

const formalPages = pages.filter((page) => page.url !== "/404/");
const sitemapPages = pages.filter((page) => page.inSitemap);
const unexpectedNoindex = formalPages.filter(
  (page) => !page.indexable && !expectedNoindexCodes.has(page.url)
);
const ogMetadataIssues = sitemapPages.flatMap((page) => {
  const issues = [];
  if (page.og.image !== defaultOgImage) issues.push("og:image");
  if (page.og.imageWidth !== "1200") issues.push("og:image:width");
  if (page.og.imageHeight !== "630") issues.push("og:image:height");
  if (!page.og.imageAlt) issues.push("og:image:alt");
  if (page.twitter.image !== defaultOgImage) issues.push("twitter:image");
  if (page.twitter.card !== "summary_large_image") issues.push("twitter:card");
  if (page.og.type !== expectedOgType(page)) issues.push("og:type");
  return issues.length ? [{ url: page.url, issues }] : [];
});
const canonicalMismatches = formalPages.filter(
  (page) => page.canonical && canonicalPath(page) !== page.url
);
const noindexProtectionIssues = [...expectedNoindexCodes].flatMap((url) => {
  const page = pages.find((item) => item.url === url);
  const issues = [];
  if (!page) issues.push("missing");
  if (page && page.indexable) issues.push("indexable");
  if (page && !page.follow) issues.push("nofollow");
  if (page && page.canonical !== `${baseUrl}${url}`) issues.push("canonical");
  if (page && page.inSitemap) issues.push("sitemap");
  return issues.length ? [{ url, issues }] : [];
});
const protectedIndexableIssues = [...protectedIndexablePages].flatMap((url) => {
  const page = pages.find((item) => item.url === url);
  const issues = [];
  if (!page) issues.push("missing");
  if (page && !page.indexable) issues.push("noindex");
  if (page && page.canonical !== `${baseUrl}${url}`) issues.push("canonical");
  if (page && !page.inSitemap) issues.push("sitemap");
  return issues.length ? [{ url, issues }] : [];
});
for (const page of pages) {
  delete page.links;
}

function duplicates(field) {
  const values = new Map();
  for (const page of pages.filter((item) => item.indexable)) {
    const value = page[field];
    if (!value) continue;
    values.set(value, [...(values.get(value) ?? []), page.url]);
  }
  return [...values.entries()]
    .filter(([, urls]) => urls.length > 1)
    .map(([value, urls]) => ({ value, urls }));
}

const report = {
  generatedAt: new Date().toISOString(),
  pageCount: pages.length,
  formalPageCount: formalPages.length,
  indexableCount: formalPages.filter((page) => page.indexable).length,
  noindexCount: formalPages.filter((page) => !page.indexable).length,
  sitemapCount: sitemapUrls.length,
  sitemapUrls,
  defaultOgImage: {
    path: path.relative(root, defaultOgImagePath),
    url: defaultOgImage,
    size: pngSize(defaultOgImagePath)
  },
  ogMetadataIssues,
  ogImageUrls: [...new Set(sitemapPages.map((page) => page.og.image))],
  canonicalMismatches: canonicalMismatches.map((page) => ({
    url: page.url,
    canonical: page.canonical
  })),
  unexpectedNoindex: unexpectedNoindex.map((page) => page.url),
  noindexProtectionIssues,
  protectedIndexableIssues,
  titleTooLong: pages.filter((page) => page.titleLength > 60).map((page) => page.url),
  descriptionTooLong: pages.filter((page) => page.descriptionLength > 155).map((page) => page.url),
  weakInbound: pages.filter((page) => page.inboundCount === 1).map((page) => page.url),
  orphanIndexable: pages
    .filter((page) => page.indexable && page.url !== "/" && page.url !== "/404/" && page.inboundCount === 0)
    .map((page) => page.url),
  sitemapNoindexConflicts: pages
    .filter((page) => page.inSitemap && !page.indexable)
    .map((page) => page.url),
  indexableMissingFromSitemap: pages
    .filter((page) => page.indexable && page.url !== "/404/" && !page.inSitemap)
    .map((page) => page.url),
  duplicateTitles: duplicates("title"),
  duplicateDescriptions: duplicates("description"),
  pages
};

process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);

const failures = [
  sitemapUrls.length === 26 ? null : `Expected 26 sitemap URLs, found ${sitemapUrls.length}`,
  report.defaultOgImage.size?.width === 1200 && report.defaultOgImage.size?.height === 630
    ? null
    : "Default OG image is not 1200x630",
  ogMetadataIssues.length === 0 ? null : "Sitemap pages have incomplete OG/Twitter metadata",
  report.ogImageUrls.length === 1 && report.ogImageUrls[0] === defaultOgImage
    ? null
    : "Sitemap pages do not share the expected default OG image URL",
  canonicalMismatches.length === 0 ? null : "Canonical mismatch detected",
  unexpectedNoindex.length === 0 ? null : "Unexpected noindex page detected",
  noindexProtectionIssues.length === 0 ? null : "Expected noindex codes protection changed",
  protectedIndexableIssues.length === 0 ? null : "Protected indexable page changed"
].filter(Boolean);

if (failures.length) {
  process.stderr.write(`SEO audit failed:\n${failures.map((item) => `- ${item}`).join("\n")}\n`);
  process.exitCode = 1;
}

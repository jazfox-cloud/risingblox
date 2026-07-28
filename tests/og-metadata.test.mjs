import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const ogImagePath = path.join(root, "public/og/risingblox-og.png");

function pngSize(file) {
  const buffer = fs.readFileSync(file);
  assert.equal(buffer.toString("ascii", 1, 4), "PNG");
  assert.equal(buffer.toString("ascii", 12, 16), "IHDR");
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20)
  };
}

test("default Open Graph image exists with the expected PNG dimensions", () => {
  assert.equal(fs.existsSync(ogImagePath), true);
  assert.deepEqual(pngSize(ogImagePath), { width: 1200, height: 630 });
});

test("metadata helper uses the production default Open Graph image", () => {
  const source = fs.readFileSync(path.join(root, "app/metadata.ts"), "utf8");
  assert.equal(source.includes("https://risingblox.com"), true);
  assert.equal(source.includes("/og/risingblox-og.png"), true);
  assert.match(source, /width:\s*1200/);
  assert.match(source, /height:\s*630/);
  assert.equal(source.includes('type: "image/png"'), true);
  assert.match(source, /summary_large_image/);
  assert.match(source, /independent game guides and progression brand image/);
});

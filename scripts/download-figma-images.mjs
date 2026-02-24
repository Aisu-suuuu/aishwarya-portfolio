#!/usr/bin/env node
/**
 * Download Austere Beauty screenshots from Figma at high resolution (3x).
 *
 * Usage:
 *   1. Go to https://www.figma.com/developers/api#access-tokens
 *   2. Generate a personal access token (needs file_content:read scope)
 *   3. Run: node scripts/download-figma-images.mjs YOUR_FIGMA_TOKEN
 */

import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "..", "public", "images", "projects");

const FILE_KEY = "x3lHaIZ7y02tYVZV9DPUPy";
const NODES = [
  { id: "46:41", filename: "austere-beauty-home.png" },
  { id: "46:463", filename: "austere-beauty-men.png" },
  { id: "46:764", filename: "austere-beauty-kids.png" },
  { id: "46:1137", filename: "austere-beauty-women.png" },
  { id: "46:1513", filename: "austere-beauty-trending.png" },
  { id: "46:1677", filename: "austere-beauty-product.png" },
];

const token = process.argv[2];
if (!token) {
  console.error("Usage: node scripts/download-figma-images.mjs <FIGMA_TOKEN>");
  console.error(
    "\nGet a token at: https://www.figma.com/developers/api#access-tokens"
  );
  process.exit(1);
}

async function main() {
  const ids = NODES.map((n) => n.id).join(",");
  const url = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${ids}&format=png&scale=3`;

  console.log("Fetching image URLs from Figma API (scale=3)...");
  const res = await fetch(url, {
    headers: { "X-Figma-Token": token },
  });

  if (!res.ok) {
    console.error(`Figma API error: ${res.status} ${res.statusText}`);
    const body = await res.text();
    console.error(body);
    process.exit(1);
  }

  const data = await res.json();

  if (data.err) {
    console.error("Figma API returned an error:", data.err);
    process.exit(1);
  }

  for (const node of NODES) {
    const imageUrl = data.images[node.id];
    if (!imageUrl) {
      console.warn(`No image URL for node ${node.id} (${node.filename})`);
      continue;
    }

    console.log(`Downloading ${node.filename}...`);
    const imgRes = await fetch(imageUrl);
    const buffer = Buffer.from(await imgRes.arrayBuffer());
    const outPath = join(OUTPUT_DIR, node.filename);
    writeFileSync(outPath, buffer);
    console.log(`  Saved to ${outPath}`);
  }

  console.log("\nDone! All Austere Beauty images downloaded at 3x resolution.");
  console.log("Images are at 1236px wide — perfect for retina displays.");
}

main().catch(console.error);

/**
 * Download product images from desire-comfort.com store CDN into public/images/.
 * Run from project root: pnpm run download-store-images  (or node scripts/download-store-images.js)
 * Must be run on your machine (network access to desire-comfort.com required).
 */

import https from "https";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "images");

// Store CDN image URLs (from desire-comfort.com product page gallery)
const STORE_IMAGE_URLS = [
  "https://desire-comfort.com/cdn/shop/files/Sc45e2b0d9e0748da88eb9de2576609bc8_1024x1024@2x.webp?v=1768838119",
  "https://desire-comfort.com/cdn/shop/files/Scc16c69ad7f441339ac713968a459f6dZ_1024x1024@2x.webp?v=1768838119",
  "https://desire-comfort.com/cdn/shop/files/S361f888c6526496bb23ad9312eff9e6eQ_1024x1024@2x.webp?v=1768838119",
  "https://desire-comfort.com/cdn/shop/files/S2193a2ba5b374a46a2bd7358f0cb5c3eZ_1024x1024@2x.webp?v=1768838119",
  "https://desire-comfort.com/cdn/shop/files/Sa11f5e5c2a024233825bd740c0f14565B_1024x1024@2x.webp?v=1768838119",
  "https://desire-comfort.com/cdn/shop/files/Sb4fc17797c0149cabf40739acd10427cH_1024x1024@2x.webp?v=1768838119",
  "https://desire-comfort.com/cdn/shop/files/S99ac53e3b0da46daaeea19b13b9a29be4_1024x1024@2x.webp?v=1768838119",
  "https://desire-comfort.com/cdn/shop/files/Sb8f7f85ba13140758fb7f805614f6168b_1024x1024@2x.webp?v=1768838119",
  "https://desire-comfort.com/cdn/shop/files/Sf2596676fa334ed0b8368c21c56b172a0_1024x1024@2x.png?v=1768838119",
  "https://desire-comfort.com/cdn/shop/files/S98fb8f554e2d44bc85b8dc94f9ec8c9dJ_1024x1024@2x.png?v=1768838119",
];

const agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0";

function download(url) {
  return new Promise((resolve, reject) => {
    const ext = url.includes(".png") ? "png" : "webp";
    const fileIndex = STORE_IMAGE_URLS.indexOf(url) + 1;
    const filename = `store-${fileIndex}.${ext}`;
    const filepath = path.join(OUT_DIR, filename);
    const file = fs.createWriteStream(filepath);
    const opts = { headers: { "User-Agent": agent } };
    const get = url.startsWith("https") ? https.get : http.get;
    const request = get(url, opts, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        download(res.headers.location).then(resolve).catch(reject);
        return;
      }
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve(filepath);
      });
    });
    request.on("error", (err) => {
      try { fs.unlinkSync(filepath); } catch (_) {}
      reject(err);
    });
  });
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  console.log("Downloading store images from desire-comfort.com to public/images/ ...");
  for (let i = 0; i < STORE_IMAGE_URLS.length; i++) {
    try {
      await download(STORE_IMAGE_URLS[i]);
    } catch (e) {
      console.error(`Failed to download image ${i + 1}:`, e.message);
    }
  }
  // Copy store-1..4 to color names so app can use either naming
  const colorFiles = ["blush-pink.webp", "dusty-rose.webp", "cream.webp", "black.webp"];
  for (let i = 0; i < 4; i++) {
    const src = path.join(OUT_DIR, `store-${i + 1}.webp`);
    const dest = path.join(OUT_DIR, colorFiles[i]);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`Copied to ${colorFiles[i]}`);
    }
  }
  console.log("Done. App uses /images/store-1.webp..store-8 and /images/blush-pink.webp..black.webp.");
}

main();

/**
 * Download product/lifestyle images from everdries.com (Replo CDN) into public/images/.
 * Run: pnpm run download-everdries-images
 * Requires network access to assets.replocdn.com.
 */

import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "images");
const BASE = "https://assets.replocdn.com/projects/89add38c-6a78-40e3-8d5c-dcc59880e183";

// Everdries image IDs from everdries.com (product/lifestyle shots)
const IMAGES = [
  { id: "02f1217b-71da-4f54-827f-34b0ac703499", file: "everdries-hero.jpg" },
  { id: "a910368a-baad-41eb-9c00-965c7014f60c", file: "everdries-black-person.jpg" },
  { id: "7ff15429-fc09-47b7-85f9-d2e3896bdd68", file: "black.jpg" },
  { id: "a0ebf320-4bbc-491e-bc9c-b4d039d4bc1b", file: "cream.jpg" },
  { id: "5b2aeddf-f29e-44c6-95ab-5161ce2cf2d3", file: "everdries-blue.jpg" },
  { id: "48fd325e-ace7-46b3-8761-439ddb835271", file: "blush-pink.jpg" },
  { id: "6f5abd83-c123-4c6d-bb35-dd070290ea12", file: "everdries-white.jpg" },
  { id: "35cecdf3-bdbd-478b-a0f6-266802a4151c", file: "dusty-rose.jpg" },
  { id: "4709cb20-347e-4da4-9ecc-0ce073b9c128", file: "everdries-pink-stack.jpg" },
  { id: "7be06939-6fa7-4dd0-ab0a-ba00bf64f778", file: "everdries-cream-briefs.jpg" },
  { id: "dc2b7b70-044e-474c-805b-6483ef9e8199", file: "everdries-black-briefs.jpg" },
  { id: "86339780-666f-4c4f-b465-2c3a6f2406d0", file: "everdries-gallery-1.jpg" },
  { id: "06fb6481-ebca-411f-9dea-0f438d8cfb00", file: "everdries-gallery-2.jpg" },
  { id: "10d52271-688c-44b3-b804-c4169b11226c", file: "everdries-gallery-3.jpg" },
  { id: "54fe1996-5ddf-48d2-b510-31b7869796ec", file: "everdries-gallery-4.jpg" },
];

function download(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    const request = https.get(
      url,
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0" } },
      (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          fs.unlink(filepath, () => {});
          download(res.headers.location, filepath).then(resolve).catch(reject);
          return;
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log(`Downloaded ${path.basename(filepath)}`);
          resolve(filepath);
        });
      }
    );
    request.on("error", (err) => {
      try { fs.unlinkSync(filepath); } catch (_) {}
      reject(err);
    });
  });
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  console.log("Downloading Everdries images to public/images/ ...");
  for (const { id, file } of IMAGES) {
    const url = `${BASE}/${id}`;
    const filepath = path.join(OUT_DIR, file);
    try {
      await download(url, filepath);
    } catch (e) {
      console.error(`Failed ${file}:`, e.message);
    }
  }
  console.log("Done. App uses everdries-* and blush-pink/cream/black/dusty-rose for homepage & product.");
}

main();

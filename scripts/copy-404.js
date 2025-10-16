/* Copy dist/index.html to dist/404.html so GitHub Pages serves SPA routes. */
import { cp } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dist = resolve(__dirname, "..", "dist");
const src = resolve(dist, "index.html");
const dest = resolve(dist, "404.html");

try {
  await cp(src, dest);
  console.log(`Copied ${src} -> ${dest}`);
} catch (err) {
  console.error("Failed to create 404.html:", err);
  process.exitCode = 1;
}


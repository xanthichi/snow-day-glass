import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = fs.readFileSync(path.join(root, "extensions", "liquid-glass.css"), "utf8");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "dreamskin-package", "manifest.json"), "utf8"));
const version = manifest.version;
const compact = source.replaceAll("__SNOW_VERSION__", version)
  .replaceAll('[data-codexthemes-theme="snow-day-glass"], ', "")
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\s+/g, " ")
  .replace(/\s*([{};,])\s*/g, "$1")
  .trim();
const runtime = fs.readFileSync(path.join(root, "extensions", "liquid-runtime.js"), "utf8");
if (!version || !/^\d+\.\d+\.\d+$/.test(version)) {
  throw new Error(`Invalid companion version: ${version}`);
}
const output = `// Snow Day Glass ${version}. Generated companion.\n` +
  runtime.replace("__SNOW_VERSION__", version).replace("__SNOW_CSS__", () => JSON.stringify(compact));
const target = path.join(root, "extensions", "snow-day-liquid-glass.js");
fs.writeFileSync(target, output);
console.log(`Built ${path.relative(root, target)} (${Buffer.byteLength(output)} bytes).`);

const nativePath = path.join(root, "codex-theme", "theme.css");
const nativeSource = fs.readFileSync(nativePath, "utf8");
const nativeMarker = "/* Snow Day Glass shared liquid layer. */";
const nativeStart = nativeSource.indexOf(nativeMarker);
if (nativeStart < 0) throw new Error("Native theme shared material marker is missing.");
fs.writeFileSync(nativePath, nativeSource.slice(0, nativeStart) +
  nativeMarker + "\n" + source.replaceAll("__SNOW_VERSION__", version));

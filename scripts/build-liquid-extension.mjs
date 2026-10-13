import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = fs.readFileSync(path.join(root, "extensions", "liquid-glass.css"), "utf8");
const compact = source.replaceAll('[data-codexthemes-theme="snow-day-glass"], ', "")
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\s+/g, " ")
  .replace(/\s*([{};,])\s*/g, "$1")
  .trim();
const output = `// Snow Day Glass 0.6.0. Generated from extensions/liquid-glass.css.
// Codex++ user extension API v1; no network, mouse tracking or timers.
(() => {
  "use strict";
  const api = window.codexPlus;
  if (!api || api.apiVersion !== 1 || typeof api.onCleanup !== "function") {
    throw new Error("Snow Day Glass requires Codex++ extension API v1.");
  }
  const root = document.documentElement;
  const id = "codex-plus-ext-snow-day-liquid-glass";
  const attribute = "data-snow-day-liquid-glass";
  const version = "0.6.0";
  const previous = document.getElementById(id);
  if (previous && typeof previous.snowDayDispose === "function") previous.snowDayDispose();
  else previous?.remove();
  const style = document.createElement("style");
  style.id = id;
  style.setAttribute(api.constants?.extensionAttribute || "data-codex-plus-ext",
    api.script?.key || "user:snow-day-liquid-glass.js");
  style.textContent = ${JSON.stringify(compact)};
  let disposed = false;
  const syncScope = () => {
    if (disposed) return;
    const themeId = window.__CODEX_PLUS_DREAM_SKIN_THEME__?.id ||
      window.__CODEX_DREAM_SKIN_STATE__?.themeId;
    const enabled = themeId === "snow-day-glass" &&
      root.getAttribute("data-dream-skin") === "active" &&
      !root.hasAttribute("data-codexthemes-theme");
    if (enabled && root.getAttribute(attribute) !== version) root.setAttribute(attribute, version);
    else if (!enabled && root.getAttribute(attribute) === version) root.removeAttribute(attribute);
  };
  // Observe only the root's three attributes, never the tree or pointer events.
  const observer = new MutationObserver(syncScope);
  const dispose = () => {
    if (disposed) return;
    disposed = true;
    observer.disconnect();
    style.remove();
    if (root.getAttribute(attribute) === version) root.removeAttribute(attribute);
  };
  style.snowDayDispose = dispose;
  api.onCleanup(dispose);
  document.head.appendChild(style);
  observer.observe(root, {
    attributes: true,
    attributeFilter: ["style", "data-dream-skin", "data-codexthemes-theme"]
  });
  syncScope();
})();
`;
const target = path.join(root, "extensions", "snow-day-liquid-glass.js");
fs.writeFileSync(target, output);
console.log(`Built ${path.relative(root, target)} (${Buffer.byteLength(output)} bytes).`);

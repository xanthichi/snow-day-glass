// The generated user script includes this runtime with the readable CSS above.
// SDF displacement method adapted from Shu Ding, MIT, Copyright (c) 2025 Shu Ding.
(() => {
  "use strict";
  const api = window.codexPlus;
  if (!api || api.apiVersion !== 1 || typeof api.onCleanup !== "function") {
    throw new Error("Snow Day Glass requires Codex++ extension API v1.");
  }
  const root = document.documentElement;
  const id = "codex-plus-ext-snow-day-liquid-glass";
  const marker = "data-snow-day-liquid-glass";
  const version = "__SNOW_VERSION__";
  document.getElementById(id)?.snowDayDispose?.();
  document.getElementById(id)?.remove();
  const owned = new Set();
  const create = (tag, svg = false) => {
    const element = svg
      ? document.createElementNS("http://www.w3.org/2000/svg", tag)
      : document.createElement(tag);
    return element;
  };
  const mark = node => node.setAttribute(api.constants?.extensionAttribute || "data-codex-plus-ext",
    api.script?.key || "user:snow-day-liquid-glass.js");
  const style = create("style");
  style.id = id;
  mark(style);
  style.textContent = __SNOW_CSS__;
  // The companion stylesheet owns native scroll clipping. Keep a layer-only
  // sheet here for the per-size SDF filter rules generated below.
  const filterStyle = create("style");
  filterStyle.id = id + "-filters";
  mark(filterStyle);
  filterStyle.textContent = "@layer dreamskin-community {}";
  const svg = create("svg", true);
  svg.id = id + "-maps";
  svg.setAttribute("width", "0");
  svg.setAttribute("height", "0");
  svg.setAttribute("aria-hidden", "true");
  svg.style.cssText = "position:fixed;width:0;height:0;pointer-events:none;";
  mark(svg);
  const defs = create("defs", true);
  svg.append(defs);
  const cache = new Map();
  let mapCounter = 0;
  let enabled = false;
  let disposed = false;
  let composer = null;
  let hovered = null;
  let focused = null;
  let composerSize = "";
  const choiceSelector = '[data-app-action-sidebar-thread-id],[data-sidebar-destination],[data-codex-plus-page-nav],.codex-plus-page-nav-item,[role="option"],[role="menuitem"],[role="menuitemradio"],[role="menuitemcheckbox"],.codex-plus-dropdown-option,.codex-session-more-menu-item,[data-ds-part="project-list"],.group\\/project-selector,.group\\/home-suggestions button';
  const composerSelector = '[data-ds-part="composer"],[data-composer-surface-variant][data-composer-radius-variant]';
  const supports = CSS.supports("backdrop-filter", 'url("#sg-test")');
  const reducedTransparency = matchMedia("(prefers-reduced-transparency: reduce)");
  const setRefraction = (node, value) => {
    if (!node || node.getAttribute("data-snow-refraction") === value) return;
    node.setAttribute("data-snow-refraction", value);
    owned.add(node);
  };
  const clearRefraction = node => {
    if (node && owned.has(node)) {
      node.removeAttribute("data-snow-refraction");
      owned.delete(node);
    }
  };
  const distance = (x, y, w, h, radius) => {
    const qx = Math.abs(x) - (w / 2 - radius);
    const qy = Math.abs(y) - (h / 2 - radius);
    return Math.min(Math.max(qx, qy), 0) + Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) - radius;
  };
  const makeFilter = (width, height, large) => {
    const w = Math.max(8, Math.round(width));
    const h = Math.max(8, Math.round(height));
    const key = `${w}:${h}:${large}`;
    if (cache.has(key)) {
      const cached = cache.get(key);
      cache.delete(key);
      cache.set(key, cached);
      return cached.value;
    }
    const radius = Math.min(large ? 22 : 8, h / 2);
    const band = Math.min(large ? 18 : 9, h / 2);
    const strength = large ? 7 : 3.5;
    const ratio = Math.min(1, 256 / w, 128 / h);
    const cw = Math.max(8, Math.round(w * ratio));
    const ch = Math.max(8, Math.round(h * ratio));
    const canvas = create("canvas");
    canvas.width = cw;
    canvas.height = ch;
    const context = canvas.getContext("2d");
    const image = context.createImageData(cw, ch);
    for (let y = 0; y < ch; y++) {
      for (let x = 0; x < cw; x++) {
        const px = (x + 0.5) / cw * w - w / 2;
        const py = (y + 0.5) / ch * h - h / 2;
        const depth = -distance(px, py, w, h, radius);
        const t = Math.max(0, Math.min(1, depth / band));
        const edge = depth > 0 ? 4 * t * (1 - t) : 0;
        const gx = distance(px + 0.5, py, w, h, radius) - distance(px - 0.5, py, w, h, radius);
        const gy = distance(px, py + 0.5, w, h, radius) - distance(px, py - 0.5, w, h, radius);
        const norm = Math.hypot(gx, gy) || 1;
        const index = (y * cw + x) * 4;
        image.data[index] = 255 * (0.5 - gx / norm * edge / 2);
        image.data[index + 1] = 255 * (0.5 - gy / norm * edge / 2);
        image.data[index + 2] = 128;
        image.data[index + 3] = 255;
      }
    }
    context.putImageData(image, 0, 0);
    const filter = create("filter", true);
    const filterId = `${id}-refraction-${++mapCounter}`;
    for (const [name, value] of Object.entries({
      id: filterId, filterUnits: "userSpaceOnUse", x: "0", y: "0",
      width: String(w), height: String(h), "color-interpolation-filters": "sRGB",
    })) filter.setAttribute(name, value);
    const map = create("feImage", true);
    map.setAttribute("href", canvas.toDataURL("image/png"));
    map.setAttribute("width", String(w));
    map.setAttribute("height", String(h));
    map.setAttribute("preserveAspectRatio", "none");
    map.setAttribute("result", "sg-map");
    const displacement = create("feDisplacementMap", true);
    for (const [name, value] of Object.entries({
      in: "SourceGraphic", in2: "sg-map", scale: String(2 * strength),
      xChannelSelector: "R", yChannelSelector: "G",
    })) displacement.setAttribute(name, value);
    filter.append(map, displacement);
    defs.append(filter);
    const value = filterId;
    const layer = filterStyle.sheet.cssRules[0];
    const index = layer.insertRule(':root[data-snow-day-liquid-glass="' + version +
      '"] [data-snow-refraction="' + value + '"] { --sg-refraction:url("#' +
      filterId + '") saturate(1.04); }', layer.cssRules.length);
    const rule = layer.cssRules[index];
    cache.set(key, { filter, value, rule });
    if (cache.size > 16) {
      const pinned = new Set([...owned].map(node => node.getAttribute("data-snow-refraction")));
      const oldest = [...cache.keys()].find(candidate => !pinned.has(cache.get(candidate).value));
      const removed = cache.get(oldest);
      const ruleIndex = Array.from(layer.cssRules).indexOf(removed.rule);
      if (ruleIndex >= 0) layer.deleteRule(ruleIndex);
      removed.filter.remove();
      cache.delete(oldest);
    }
    return value;
  };
  const prepare = (node, large = false) => {
    if (!enabled || !supports || reducedTransparency.matches || !node?.isConnected) return;
    const box = node.getBoundingClientRect();
    if (box.width < 8 || box.height < 8) return;
    setRefraction(node, makeFilter(box.width, box.height, large));
  };
  const resize = new ResizeObserver(() => {
    if (!enabled || !composer?.isConnected) return;
    const box = composer.getBoundingClientRect();
    const size = `${Math.round(box.width)}:${Math.round(box.height)}`;
    if (size !== composerSize) {
      composerSize = size;
      prepare(composer, true);
    }
  });
  const bindComposer = node => {
    if (node?.matches('[data-composer-utility-bar-variant="home"]')) {
      node = node.querySelector("[data-composer-body]") || node;
    }
    if (composer === node) return;
    resize.disconnect();
    clearRefraction(composer);
    composer = node || null;
    composerSize = "";
    if (enabled && node?.isConnected) {
      resize.observe(node);
      prepare(node, true);
    }
  };
  const syncScope = () => {
    if (disposed) return;
    const theme = window.__CODEX_PLUS_DREAM_SKIN_THEME__?.id || window.__CODEX_DREAM_SKIN_STATE__?.themeId;
    const next = theme === "snow-day-glass" && root.getAttribute("data-dream-skin") === "active" &&
      !root.hasAttribute("data-codexthemes-theme");
    if (next === enabled) return;
    enabled = next;
    if (enabled) {
      root.setAttribute(marker, version);
      bindComposer(document.querySelector(composerSelector));
      if (composer) { resize.observe(composer); prepare(composer, true); }
    } else {
      root.removeAttribute(marker);
      hovered = null;
      focused = null;
      bindComposer(null);
      for (const node of [...owned]) clearRefraction(node);
    }
  };
  const scopeObserver = new MutationObserver(syncScope);
  // The engine's part marker is the only observed subtree attribute; streamed text is ignored.
  const partObserver = new MutationObserver(records => {
    if (!enabled) return;
    for (const record of records) {
      if (record.type === "childList") {
        const removedComposer = composer && Array.from(record.removedNodes)
          .some(node => node === composer || node.contains?.(composer));
        if (removedComposer) {
          bindComposer(document.querySelector(composerSelector));
        }
        continue;
      }
      const part = record.target.getAttribute("data-ds-part");
      if (part === "composer") bindComposer(record.target);
      else if (record.target === composer || part === "thread" || (part === "message" && !composer?.isConnected)) {
        bindComposer(document.querySelector(composerSelector));
      }
    }
  });
  const activateChoice = event => {
    if (!enabled || !(event.target instanceof Element)) return;
    const node = event.target.closest(choiceSelector);
    if (!node || node.matches(':disabled,[aria-disabled="true"],[data-disabled]')) return;
    if (event.type === "focusin") {
      if (node === focused) return;
      if (focused !== hovered && focused !== composer) clearRefraction(focused);
      focused = node;
    } else {
      if (node === hovered) return;
      if (hovered !== focused && hovered !== composer) clearRefraction(hovered);
      hovered = node;
    }
    prepare(node);
  };
  const leaveChoice = event => {
    const node = event.type === "focusout" ? focused : hovered;
    if (!node || (event.relatedTarget instanceof Node && node.contains(event.relatedTarget))) return;
    if (event.type === "focusout") {
      focused = null;
      if (node !== hovered && node !== composer) clearRefraction(node);
    } else {
      hovered = null;
      if (node !== focused && node !== composer) clearRefraction(node);
    }
  };
  const dispose = () => {
    if (disposed) return;
    disposed = true;
    enabled = false;
    resize.disconnect();
    scopeObserver.disconnect();
    partObserver.disconnect();
    document.removeEventListener("pointerover", activateChoice);
    document.removeEventListener("focusin", activateChoice);
    document.removeEventListener("pointerout", leaveChoice);
    document.removeEventListener("focusout", leaveChoice);
    for (const node of [...owned]) clearRefraction(node);
    style.remove();
    filterStyle.remove();
    svg.remove();
    cache.clear();
    if (root.getAttribute(marker) === version) root.removeAttribute(marker);
  };
  style.snowDayDispose = dispose;
  style.snowDayDiagnostics = () => ({ maps: cache.size, generated: mapCounter, owners: owned.size });
  api.onCleanup(dispose);
  document.head.append(style, filterStyle, svg);
  scopeObserver.observe(root, { attributes: true, attributeFilter: ["style", "data-dream-skin", "data-codexthemes-theme"] });
  partObserver.observe(document.body, {
    attributes: true, childList: true, subtree: true, attributeFilter: ["data-ds-part"],
  });
  document.addEventListener("pointerover", activateChoice, { passive: true });
  document.addEventListener("focusin", activateChoice, { passive: true });
  document.addEventListener("pointerout", leaveChoice, { passive: true });
  document.addEventListener("focusout", leaveChoice, { passive: true });
  syncScope();
})();

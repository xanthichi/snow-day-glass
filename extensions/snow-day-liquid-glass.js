// Snow Day Glass 0.6.0. Generated from extensions/liquid-glass.css.
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
  style.textContent = "@layer dreamskin-community{:root:is([data-snow-day-liquid-glass=\"0.6.0\"]){--sg-ink: #243b4a;--sg-tint: rgba(255,255,255,0.42);--sg-selected: rgba(239,249,255,0.66);--sg-gloss: linear-gradient(118deg,rgba(255,255,255,0.78),rgba(255,255,255,0.12) 42%,rgba(214,238,251,0.36) 72%,rgba(255,255,255,0.72));--sg-edge: inset 0 1px 0 rgba(255,255,255,0.98),inset 0 0 0 1px rgba(255,255,255,0.72),inset 0 -1px 0 rgba(107,153,180,0.22);--sg-lift: 0 3px 10px rgba(43,58,73,0.12);--sg-focus: #337d48;}:root:is([data-snow-day-liquid-glass=\"0.6.0\"]) :is([data-ds-part=\"main\"],[data-ds-part=\"home\"],[data-ds-part=\"thread\"],main.main-surface,.thread-scroll-container){background: transparent !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;filter: none !important;box-shadow: none !important;}:root:is([data-snow-day-liquid-glass=\"0.6.0\"]) :is([data-ds-part=\"sidebar\"],aside.app-shell-left-panel){-webkit-backdrop-filter: none !important;backdrop-filter: none !important;box-shadow: none !important;transition: none !important;}:root:is([data-snow-day-liquid-glass=\"0.6.0\"]) main :is(article,div.bg-token-main-surface-primary.border-l){-webkit-backdrop-filter: none !important;backdrop-filter: none !important;filter: none !important;}:root:is([data-snow-day-liquid-glass=\"0.6.0\"]) :is([data-ds-part=\"message\"],[data-message-author-role],[data-response-annotation-conversation][data-response-annotation-target],[data-local-conversation-item-target-ids]){background: rgba(255,255,255,0.68) !important;color: var(--sg-ink) !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;filter: none !important;box-shadow: none !important;}:root:is([data-snow-day-liquid-glass=\"0.6.0\"]) main :is([data-sticky],.sticky)::before{-webkit-backdrop-filter: none !important;backdrop-filter: none !important;}:root:is([data-snow-day-liquid-glass=\"0.6.0\"]) :is([role=\"menu\"],[role=\"listbox\"],[data-slot=\"popover-content\"],[role=\"dialog\"]){background: rgba(246,251,255,0.9) !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;box-shadow: 0 6px 18px rgba(43,58,73,0.13),var(--sg-edge) !important;}:root:is([data-snow-day-liquid-glass=\"0.6.0\"]) :is([data-ds-part=\"composer\"],.composer-surface-chrome,[class*=\"_ComposerLayoutRoot_\"],[data-composer-surface-variant][data-composer-radius-variant]){color: var(--sg-ink) !important;background: linear-gradient(180deg,rgba(255,255,255,0.94),rgba(245,251,255,0.82)) !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;filter: none !important;box-shadow: 0 3px 12px rgba(43,58,73,0.09),var(--sg-edge) !important;}:root:is([data-snow-day-liquid-glass=\"0.6.0\"]) :is([data-ds-part=\"composer-toolbar\"],[data-composer-footer-responsive],[class*=\"_ComposerLayoutFooter_\"],[class*=\"_ComposerLayoutBody_\"],[data-composer-home-utility-bar-position=\"above\"],[class*=\"_homeUtilityBar_\"],[class*=\"_ComposerHomeUtilityBar_\"]){background: transparent !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;box-shadow: none !important;}:root:is([data-snow-day-liquid-glass=\"0.6.0\"]) :is([data-app-action-sidebar-thread-id],[data-sidebar-destination],[data-codex-plus-page-nav],.codex-plus-page-nav-item,[role=\"option\"],[role=\"menuitem\"],[role=\"menuitemradio\"],[role=\"menuitemcheckbox\"],.codex-plus-dropdown-option,.codex-session-more-menu-item,[data-ds-part=\"project-list\"],.group\\/project-selector,.group\\/home-suggestions button){-webkit-backdrop-filter: none !important;backdrop-filter: none !important;transition: background-color 110ms ease-out,color 110ms ease-out !important;}:root:is([data-snow-day-liquid-glass=\"0.6.0\"]) :is([data-app-action-sidebar-thread-id],[data-sidebar-destination],[data-codex-plus-page-nav],.codex-plus-page-nav-item)[aria-current=\"page\"]{background-color: var(--sg-selected) !important;background-image: none !important;box-shadow: var(--sg-edge) !important;}:root:is([data-snow-day-liquid-glass=\"0.6.0\"]) .group\\/home-suggestions button{transform: none !important;}:root:is([data-snow-day-liquid-glass=\"0.6.0\"]) :is([data-app-action-sidebar-thread-id],[data-sidebar-destination],[data-codex-plus-page-nav],.codex-plus-page-nav-item,[role=\"option\"],[role=\"menuitem\"],[role=\"menuitemradio\"],[role=\"menuitemcheckbox\"],.codex-plus-dropdown-option,.codex-session-more-menu-item,[data-ds-part=\"project-list\"],.group\\/project-selector,.group\\/home-suggestions button):not(:disabled):not([aria-disabled=\"true\"]):not([data-disabled]):is(:hover,:focus-visible,[data-highlighted]:not([data-highlighted=\"false\"])){color: var(--sg-ink) !important;background-color: var(--sg-tint) !important;background-image: var(--sg-gloss) !important;border-radius: 8px;-webkit-backdrop-filter: blur(7px) saturate(1.18) !important;backdrop-filter: blur(7px) saturate(1.18) !important;box-shadow: var(--sg-lift),var(--sg-edge) !important;}:root:is([data-snow-day-liquid-glass=\"0.6.0\"]) :is([data-app-action-sidebar-thread-id],[data-sidebar-destination],[data-codex-plus-page-nav],[role=\"option\"],[role=\"menuitem\"],[role=\"menuitemradio\"],[role=\"menuitemcheckbox\"],.codex-plus-dropdown-option,.codex-session-more-menu-item,[data-ds-part=\"project-list\"]):focus-visible{outline: 2px solid var(--sg-focus) !important;outline-offset: 1px;}@media (prefers-reduced-motion: reduce){:root:is([data-snow-day-liquid-glass=\"0.6.0\"]) :is([data-app-action-sidebar-thread-id],[data-sidebar-destination],[data-codex-plus-page-nav],.codex-plus-page-nav-item,[role=\"option\"],[role=\"menuitem\"],[role=\"menuitemradio\"],[role=\"menuitemcheckbox\"],.codex-plus-dropdown-option,.codex-session-more-menu-item,[data-ds-part=\"project-list\"],.group\\/project-selector,.group\\/home-suggestions button){transition: none !important;}}@media (prefers-reduced-transparency: reduce){:root:is([data-snow-day-liquid-glass=\"0.6.0\"]){--sg-tint: #f5faff;--sg-gloss: none;}:root:is([data-snow-day-liquid-glass=\"0.6.0\"]) :is([data-app-action-sidebar-thread-id],[data-sidebar-destination],[data-codex-plus-page-nav],.codex-plus-page-nav-item,[role=\"option\"],[role=\"menuitem\"],[role=\"menuitemradio\"],[role=\"menuitemcheckbox\"],.codex-plus-dropdown-option,.codex-session-more-menu-item,[data-ds-part=\"project-list\"],.group\\/project-selector,.group\\/home-suggestions button){-webkit-backdrop-filter: none !important;backdrop-filter: none !important;}}@supports not (backdrop-filter: blur(1px)){:root:is([data-snow-day-liquid-glass=\"0.6.0\"]){--sg-tint: #f5faff;}}@media (forced-colors: active){:root:is([data-snow-day-liquid-glass=\"0.6.0\"]) :is([data-app-action-sidebar-thread-id],[data-sidebar-destination],[data-codex-plus-page-nav],.codex-plus-page-nav-item,[role=\"option\"],[role=\"menuitem\"],[role=\"menuitemradio\"],[role=\"menuitemcheckbox\"],.codex-plus-dropdown-option,.codex-session-more-menu-item,[data-ds-part=\"project-list\"],.group\\/project-selector,.group\\/home-suggestions button){color: CanvasText !important;background: Canvas !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;box-shadow: none !important;}}}";
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

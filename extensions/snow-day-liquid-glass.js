// Snow Day Glass 0.14.0. Generated companion.
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
  const version = "0.14.0";
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
  style.textContent = "@layer dreamskin-community{:root:is([data-snow-day-liquid-glass=\"0.14.0\"]){--sg-ink: #141a20;--sg-tint: rgba(255,255,255,0.22);--sg-selected: rgba(239,249,255,0.66);--sg-gloss: linear-gradient(118deg,rgba(255,255,255,0.78),rgba(255,255,255,0.12) 42%,rgba(214,238,251,0.36) 72%,rgba(255,255,255,0.72));--sg-edge: inset 0 1px 0 rgba(255,255,255,0.98),inset 0 0 0 1px rgba(255,255,255,0.72),inset 0 -1px 0 rgba(107,153,180,0.22);--sg-lift: 0 3px 10px rgba(43,58,73,0.12);--sg-focus: #337d48;--ds-text: #141a20 !important;--ds-muted: #2b3946 !important;--ds-text-rgb: 20 26 32 !important;--ds-muted-rgb: 43 57 70 !important;--color-icon-primary: #202d38 !important;--color-icon-secondary: #2b3946 !important;--color-icon-tertiary: #344754 !important;--color-text-foreground: #141a20 !important;--color-text-foreground-secondary: #2b3946 !important;--color-token-text-primary: #141a20 !important;--color-token-text-secondary: #2b3946 !important;--color-token-text-tertiary: #344754 !important;--sg-surface-fill: rgba(255,255,255,0.50);--sg-titlebar-fill: rgba(255,255,255,0.20);--sg-surface-78: rgba(255,255,255,0.78);--sg-surface-70: rgba(255,255,255,0.70);--sg-action: #2f6fed;--color-token-description-foreground: #2b3946 !important;--color-token-icon-foreground: #2b3946 !important;--color-codex-description: #2b3946 !important;--color-text-tertiary: #344754 !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-ds-part=\"home-hero\"],[data-ds-part=\"project-list\"]){background: var(--sg-surface-fill) !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-ds-part=\"main\"],[data-ds-part=\"home\"],[data-ds-part=\"thread\"],main.main-surface,.thread-scroll-container){background: transparent !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;filter: none !important;box-shadow: none !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-ds-part=\"sidebar\"],aside.app-shell-left-panel){background: transparent !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;box-shadow: none !important;transition: none !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-app-shell-page-surface][data-app-shell-application-menu-bar]{padding-inline-end: 0 !important;padding-block-end: 0 !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) header[data-app-shell-titlebar][data-app-shell-header-layout]{background: var(--sg-titlebar-fill) !important;background-image: none !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-app-shell-focus-area] [data-sticky]:not(:has([data-codex-composer-root]))::before{background: var(--sg-surface-fill) !important;background-image: none !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-app-shell-focus-area=\"main\"] > .bg-surface:has([data-app-shell-inline-page-header]),:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-app-shell-focus-area=\"main\"] [class~=\"@container/skills-grid\"]:has([data-app-shell-inline-page-header]){background: var(--sg-surface-fill) !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-app-shell-focus-area=\"main\"] > .bg-surface:has([data-app-shell-inline-page-header]) [data-sticky]::before,:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-app-shell-focus-area=\"main\"] [class~=\"@container/skills-grid\"]:has([data-app-shell-inline-page-header]) [data-sticky]::before,:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) .group\\/settings h3[class~=\"sticky\"][class~=\"bg-surface\"]{background-color: var(--ct-canvas,var(--ds-bg,#eef5fb)) !important;background-image: linear-gradient(var(--sg-surface-fill),var(--sg-surface-fill)),var(--ct-art,var(--dream-skin-art,none)) !important;background-position: center,var(--ds-art-position,center) !important;background-size: 100% 100%,var(--ct-art-size,cover) !important;background-repeat: no-repeat !important;background-attachment: fixed !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-codex-history-swipe-page] > [class~=\"electron:bg-surface\"]{--color-surface: transparent !important;--color-background-primary-soft: transparent !important;background: var(--sg-surface-fill) !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) .group\\/settings{--color-background-panel: transparent !important;--color-background-primary-soft-alpha: transparent !important;--color-background-page-search: transparent !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) .group\\/settings button[data-state]:is([class~=\"bg-surface\"],[class~=\"bg-primary-soft-alpha\"]){--color-surface: transparent !important;--color-background-primary-soft-alpha: transparent !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"])[data-codex-plus-page-open]:has(> body > .codex-plus-page-overlay) :is([data-app-shell-main-surface],[data-app-shell-titlebar],aside[data-app-shell-focus-area=\"right-panel\"],aside.app-shell-left-panel [data-slate-sidebar-content]){visibility: hidden !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) .codex-plus-page-overlay{--codex-plus-bg-primary: transparent !important;--codex-plus-bg-secondary: transparent !important;--codex-plus-settings-card-bg: transparent !important;--codex-plus-nav-bg: transparent !important;--codex-plus-settings-page-bg: #ffffff !important;--codex-plus-bg-elevated: var(--sg-surface-fill) !important;background: var(--sg-surface-fill) !important;background-image: none !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) .codex-plus-page-overlay > .codex-plus-modal-content{background: transparent !important;background-image: none !important;box-shadow: none !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) .codex-plus-page-overlay .codex-plus-page-search-input:focus{background: transparent !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) aside.app-shell-left-panel [data-slate-sidebar-content]{--sg-ink: #000000;--ds-text: #000000 !important;--ds-muted: #000000 !important;--ds-text-rgb: 0 0 0 !important;--ds-muted-rgb: 0 0 0 !important;--color-text: #000000 !important;--color-text-secondary: #000000 !important;--color-text-tertiary: #000000 !important;--color-codex-description: #000000 !important;--color-text-foreground: #000000 !important;--color-token-text-primary: #000000 !important;--color-token-text-secondary: #000000 !important;--color-token-text-tertiary: #000000 !important;color: #000000 !important;background: var(--sg-surface-fill) !important;background-image: none !important;border-radius: 16px !important;box-shadow: var(--sg-edge) !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [class*=\"_ApplicationMenuTopBar_\"] [role=\"menubar\"] > [role=\"menuitem\"]:not(:disabled):not([aria-disabled=\"true\"]){color: var(--sg-ink) !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) main [class~=\"heading-xl\"] button{color: var(--sg-ink) !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [class*=\"_cadencedShimmer_\"]{--shimmer-contrast: var(--sg-ink) !important;--shimmer-text-secondary: #37434f !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-sidebar-destination],[data-app-action-sidebar-thread-id],[data-app-action-sidebar-project-row],[data-ds-part=\"composer-toolbar\"]){color: var(--sg-ink) !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) main :is(article,div.bg-token-main-surface-primary.border-l){-webkit-backdrop-filter: none !important;backdrop-filter: none !important;filter: none !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-ds-part=\"message\"],[data-message-author-role],[data-response-annotation-conversation][data-response-annotation-target],[data-local-conversation-item-target-ids]){background: var(--sg-surface-78) !important;color: var(--sg-ink) !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;filter: none !important;box-shadow: none !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) .thread-scroll-container :is([class~=\"sticky\"][class~=\"bottom-0\"],[data-thread-scroll-footer]) > [aria-hidden=\"true\"][class~=\"pointer-events-none\"][class~=\"absolute\"][class~=\"inset-x-0\"][class~=\"-top-8\"][class~=\"z-0\"],:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-thread-scroll-footer] > [aria-hidden=\"true\"].pointer-events-none.absolute.inset-x-0[class~=\"-top-8\"][class~=\"z-0\"]{background: transparent !important;background-image: none !important;box-shadow: none !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-app-action-timeline-scroll]:has(> [data-thread-scroll-footer]){height: calc(100% - var(--thread-scroll-padding-bottom,0px) + var(--spacing) * 4) !important;min-height: 0 !important;scroll-padding-bottom: 0 !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-app-action-timeline-scroll] > :has(> [data-thread-user-message-navigation-content]) > [aria-hidden=\"true\"][class~=\"sticky\"][class~=\"bottom-0\"]{height: 0 !important;min-height: 0 !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-thread-scroll-footer] > [class~=\"pointer-events-none\"][class~=\"absolute\"][class~=\"bg-surface\"],:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-thread-scroll-footer] > [class~=\"pointer-events-none\"][class~=\"absolute\"][class~=\"bg-gradient-to-t\"][class~=\"from-surface\"]{background: transparent !important;background-image: none !important;box-shadow: none !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-user-message-bubble][data-ds-part=\"message\"],[data-user-message-bubble]:not([data-ds-part=\"message\"])){background: var(--sg-surface-78) !important;background-image: none !important;box-shadow: none !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;border-color: rgba(43,57,70,0.18) !important;border-radius: 18px !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-composer-rail][class*=\"_attached_\"]{--composer-rail-tuck: calc(var(--spacing) * -2) !important;--composer-rail-overlap: 0px !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-composer-rail-item]{background: var(--sg-surface-fill) !important;background-image: none !important;border-radius: 14px !important;border-color: transparent !important;box-shadow: none !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) aside.app-shell-left-panel :is(button,a,[role=\"button\"]){color: #000000 !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([role=\"menu\"],[role=\"listbox\"],[data-slot=\"popover-content\"],[role=\"dialog\"],.codex-session-action-tooltip,.codex-delete-toast,[data-composer-overlay-floating-ui] > [class*=\"_suggestionMenu_\"]):not(#codex-relay-balance-panel):not(.codex-plus-page-overlay > .codex-plus-modal-content){background: var(--sg-surface-fill) !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;box-shadow: 0 6px 18px rgba(43,58,73,0.13),var(--sg-edge) !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) button[class~=\"group/scroll-to-bottom\"]{background: var(--sg-surface-fill) !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) #codex-relay-balance-panel[role=\"dialog\"]{background: rgba(24,28,35,0.98) !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-summary-panel-variant=\"summary\"]{background: var(--sg-surface-fill) !important;background-image: none !important;color: #141a20 !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-summary-panel-variant=\"summary\"] > header,:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-summary-panel-variant=\"summary\"] > header::before,:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-summary-panel-variant=\"summary\"] header[class~=\"bg-surface-elevated-secondary\"],:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-summary-panel-variant=\"summary\"] header[class~=\"bg-surface-elevated-secondary\"]::before{background: transparent !important;background-image: none !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-app-shell-tabs] > [data-app-shell-compact-page-gutter]{--app-shell-panel-background: var(--sg-surface-fill) !important;background: var(--sg-surface-fill) !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-app-shell-tab-controller] [data-tab-id] > [class*=\"_SelectedSurface_\"]{background: var(--sg-surface-fill) !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-app-shell-tab-panel-controller] diffs-container{--diffs-bg: transparent !important;--color-surface: transparent !important;background: transparent !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-ds-part=\"composer\"],.composer-surface-chrome,[class*=\"_ComposerLayoutRoot_\"],[data-composer-surface-variant][data-composer-radius-variant]):not([data-composer-utility-bar-variant=\"home\"]),:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-composer-utility-bar-variant=\"home\"] [data-composer-body]{color: var(--sg-ink) !important;background: var(--sg-surface-fill) !important;background-image: none !important;--composer-layout-surface-background: var(--sg-surface-fill) !important;--color-background-composer-surface: var(--sg-surface-fill) !important;--composer-background-color: var(--sg-surface-fill) !important;--color-background-panel: var(--sg-surface-fill) !important;--color-token-input-background: var(--sg-surface-fill) !important;-webkit-backdrop-filter: var(--sg-refraction,saturate(1.04)) !important;backdrop-filter: var(--sg-refraction,saturate(1.04)) !important;filter: none !important;box-shadow: 0 3px 12px rgba(43,58,73,0.09),var(--sg-edge) !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-composer-utility-bar-variant=\"home\"][data-composer-surface-variant]{background: transparent !important;background-image: none !important;box-shadow: none !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;margin-block-end: calc(var(--spacing) * 12) !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-response-annotation-conversation][data-response-annotation-target],[data-local-conversation-final-assistant]){background: var(--sg-surface-78) !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-ds-part=\"message\"],[data-local-conversation-final-assistant]) [data-response-annotation-conversation][data-response-annotation-target]:not([data-local-conversation-item-target-ids]):not([data-codexthemes-surface]){background: transparent !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-local-conversation-item-target-ids],[data-codexthemes-surface=\"output\"],[data-codexthemes-surface=\"diff\"]):not([data-user-message-bubble]){background: var(--sg-surface-70) !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-ds-part=\"composer\"] button.bg-composer-primary,[data-ds-part=\"composer\"] button[aria-label=\"发送\"],[data-ds-part=\"composer\"] button[aria-label=\"停止\"],[data-composer-rail-item] button:is([aria-label=\"暂停目标\"],[aria-label=\"继续目标\"],[aria-label=\"中止目标\"],[aria-label=\"清除目标\"]),[data-thread-scroll-footer] button:is([aria-label=\"暂停\"],[aria-label=\"继续\"],[aria-label=\"中止\"],[aria-label=\"停止\"])){background: var(--sg-action) !important;color: #ffffff !important;--ds-green: var(--sg-action) !important;--ds-accent: var(--sg-action) !important;--ds-on-accent: #ffffff !important;--color-background-composer-primary: var(--sg-action) !important;--color-text-composer-primary: #ffffff !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-ds-part=\"composer\"] button.bg-composer-primary,[data-ds-part=\"composer\"] button[aria-label=\"发送\"],[data-ds-part=\"composer\"] button[aria-label=\"停止\"],[data-composer-rail-item] button:is([aria-label=\"暂停目标\"],[aria-label=\"继续目标\"],[aria-label=\"中止目标\"],[aria-label=\"清除目标\"]),[data-thread-scroll-footer] button:is([aria-label=\"暂停\"],[aria-label=\"继续\"],[aria-label=\"中止\"],[aria-label=\"停止\"])) :is(svg,svg path,svg circle,svg rect,svg line,svg polyline,svg polygon,svg use){color: #ffffff !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-ds-part=\"composer-toolbar\"],[data-composer-footer-responsive],[class*=\"_ComposerLayoutFooter_\"],[class*=\"_ComposerLayoutBody_\"],[data-composer-home-utility-bar-position=\"above\"],[class*=\"_homeUtilityBar_\"],[class*=\"_ComposerHomeUtilityBar_\"]):not([data-composer-body]){background: transparent !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;box-shadow: none !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) [data-composer-surface-variant]:not([data-composer-utility-bar-variant=\"home\"]) [data-composer-body]{background: transparent !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;box-shadow: none !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-app-action-sidebar-thread-id],[data-sidebar-destination],[data-codex-plus-page-nav],.codex-plus-page-nav-item,[role=\"option\"],[role=\"menuitem\"],[role=\"menuitemradio\"],[role=\"menuitemcheckbox\"],.codex-plus-dropdown-option,.codex-session-more-menu-item,[data-ds-part=\"project-list\"],.group\\/project-selector,.group\\/home-suggestions button){-webkit-backdrop-filter: none !important;backdrop-filter: none !important;transition: background-color 110ms ease-out,color 110ms ease-out !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-app-action-sidebar-thread-id],[data-sidebar-destination],[data-codex-plus-page-nav],.codex-plus-page-nav-item):is([aria-current=\"page\"],[data-app-action-sidebar-thread-selected=\"true\"]){background-color: var(--sg-selected) !important;background-image: none !important;box-shadow: var(--sg-edge) !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) .group\\/home-suggestions button{transform: none !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-app-action-sidebar-thread-id],[data-sidebar-destination],[data-codex-plus-page-nav],.codex-plus-page-nav-item,[role=\"option\"],[role=\"menuitem\"],[role=\"menuitemradio\"],[role=\"menuitemcheckbox\"],.codex-plus-dropdown-option,.codex-session-more-menu-item,[data-ds-part=\"project-list\"],.group\\/project-selector,.group\\/home-suggestions button):not(:disabled):not([aria-disabled=\"true\"]):not([data-disabled]):is(:hover,:focus-visible,[data-highlighted]:not([data-highlighted=\"false\"])){color: var(--sg-ink) !important;background-color: var(--sg-tint) !important;background-image: var(--sg-gloss) !important;border-radius: 8px;-webkit-backdrop-filter: var(--sg-refraction,saturate(1.12)) !important;backdrop-filter: var(--sg-refraction,saturate(1.12)) !important;box-shadow: var(--sg-lift),var(--sg-edge) !important;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-app-action-sidebar-thread-id],[data-sidebar-destination],[data-codex-plus-page-nav],[role=\"option\"],[role=\"menuitem\"],[role=\"menuitemradio\"],[role=\"menuitemcheckbox\"],.codex-plus-dropdown-option,.codex-session-more-menu-item,[data-ds-part=\"project-list\"]):focus-visible{outline: 2px solid var(--sg-focus) !important;outline-offset: 1px;}@media (prefers-reduced-motion: reduce){:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-app-action-sidebar-thread-id],[data-sidebar-destination],[data-codex-plus-page-nav],.codex-plus-page-nav-item,[role=\"option\"],[role=\"menuitem\"],[role=\"menuitemradio\"],[role=\"menuitemcheckbox\"],.codex-plus-dropdown-option,.codex-session-more-menu-item,[data-ds-part=\"project-list\"],.group\\/project-selector,.group\\/home-suggestions button){transition: none !important;}}@media (prefers-reduced-transparency: reduce){:root:is([data-snow-day-liquid-glass=\"0.14.0\"]){--sg-tint: #f5faff;--sg-gloss: none;}:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-app-action-sidebar-thread-id],[data-sidebar-destination],[data-codex-plus-page-nav],.codex-plus-page-nav-item,[role=\"option\"],[role=\"menuitem\"],[role=\"menuitemradio\"],[role=\"menuitemcheckbox\"],.codex-plus-dropdown-option,.codex-session-more-menu-item,[data-ds-part=\"project-list\"],.group\\/project-selector,.group\\/home-suggestions button){-webkit-backdrop-filter: none !important;backdrop-filter: none !important;}}@supports not (backdrop-filter: blur(1px)){:root:is([data-snow-day-liquid-glass=\"0.14.0\"]){--sg-tint: #f5faff;}}@media (forced-colors: active){:root:is([data-snow-day-liquid-glass=\"0.14.0\"]) :is([data-app-action-sidebar-thread-id],[data-sidebar-destination],[data-codex-plus-page-nav],.codex-plus-page-nav-item,[role=\"option\"],[role=\"menuitem\"],[role=\"menuitemradio\"],[role=\"menuitemcheckbox\"],.codex-plus-dropdown-option,.codex-session-more-menu-item,[data-ds-part=\"project-list\"],.group\\/project-selector,.group\\/home-suggestions button){color: CanvasText !important;background: Canvas !important;-webkit-backdrop-filter: none !important;backdrop-filter: none !important;box-shadow: none !important;}}}";
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
        const index = (y * cw + x) * 4;
        // Flat pixels have zero displacement; only the edge needs a gradient.
        if (edge === 0) {
          image.data[index] = 128;
          image.data[index + 1] = 128;
          image.data[index + 2] = 128;
          image.data[index + 3] = 255;
          continue;
        }
        const gx = distance(px + 0.5, py, w, h, radius) - distance(px - 0.5, py, w, h, radius);
        const gy = distance(px, py + 0.5, w, h, radius) - distance(px, py - 0.5, w, h, radius);
        const norm = Math.hypot(gx, gy) || 1;
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
  const prepare = (node, large = false, measuredBox = null) => {
    if (!enabled || !supports || reducedTransparency.matches || !node?.isConnected) return;
    const box = measuredBox || node.getBoundingClientRect();
    if (box.width < 8 || box.height < 8) return;
    if (large) composerSize = `${Math.round(box.width)}:${Math.round(box.height)}`;
    setRefraction(node, makeFilter(box.width, box.height, large));
  };
  const resize = new ResizeObserver(() => {
    if (!enabled || !composer?.isConnected) return;
    const box = composer.getBoundingClientRect();
    const size = `${Math.round(box.width)}:${Math.round(box.height)}`;
    if (size !== composerSize) {
      prepare(composer, true, box);
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

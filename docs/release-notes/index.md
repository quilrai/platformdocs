---
title: Release Notes
slug: /release-notes
sidebar_custom_props:
  icon: Newspaper
hide_copy_dropdown: true
---

# Release Notes

## June 11, 2026

- [Settings and Administration](/platform-areas/settings-admin): Admins with Admin or Super Admin
  roles can now configure LLM Gateway app access when creating or editing a user with the AI Gateway
  Admin role. A new App Access selector lets admins allow all LLM Gateway apps or restrict the user
  to a specific subset. The selector appears in the users table and in the user details panel.
- [LLM Gateway](/platform-areas/llm-gateway): Security Guardrails now includes a
  **Set everything to default** button next to the Default Action selector. The button activates when
  any data, EDM, custom, or adversarial category action differs from the current default, and
  clicking it resets all categories to inherit that default. The selector label was also renamed from
  "Default Risk Action" to "Default Action".
- [LLM Gateway](/platform-areas/llm-gateway): Adversarial Risks in Security Guardrails now includes
  an **Enable all / Disable all** bulk toggle that flips all adversarial risk categories on or off at
  once while preserving each category's action and sensitivity settings.
- [LLM Gateway](/platform-areas/llm-gateway): Adversarial risk sensitivity is now shown as a direct
  label (High, Medium, or Low) matching the single configured level rather than a cumulative
  threshold. Adversarial category actions that inherit from the Default Action are now visually
  indicated with a green dot and an "Inherited from default risk action" label.

## June 10, 2026

- [Settings and Administration](/platform-areas/settings-admin): The timezone display preference
  is now saved to the database and loaded on sign-in, so the setting persists across browsers and
  devices. Admins can select any timezone from a searchable dropdown—the preference is no longer
  limited to UTC or local browser time. A Save button appears when the selection changes, and a
  toast notification confirms the update.
- [Users, Applications, and Accounts](/platform-areas/users-accounts-applications): Fixed the AI
  category filter on the Applications page so it correctly targets the primary app category. The
  "AI" lens, Generative AI category chip, and AI KPI shortcut now consistently match apps
  classified as Generative AI. When navigating to Applications from an insight drilldown that
  applies a business-category filter, the Category chip now shows "Business" instead of a
  conflicting separate chip.
- [Users, Applications, and Accounts](/platform-areas/users-accounts-applications): The
  Applications page now defaults to a 7-day time range instead of 30 days.
- [Users, Applications, and Accounts](/platform-areas/users-accounts-applications): Fixed a bug
  where clicking the conversation count icon in an application table row opened the app intelligence
  panel instead of the app detail drawer.
- [MCP Gateway](/platform-areas/mcp-gateway): MCP server creation dates on gateway server cards
  now follow the tenant timezone preference and show the alternate time on hover, consistent with
  other timestamps across the platform.
- [LLM Gateway](/platform-areas/llm-gateway): LLM Gateway API key creation dates on key cards now
  follow the tenant timezone preference and show the alternate time on hover, consistent with other
  timestamps across the platform.
- [Users, Applications, and Accounts](/platform-areas/users-accounts-applications): Inline
  editable fields in the application table now show a "Saving…" label and spinner while a change
  is being applied, giving clearer feedback during edits.
- [Users, Applications, and Accounts](/platform-areas/users-accounts-applications): Fixed app
  owner names occasionally displaying incorrect values in the application table row tooltip.
- Fixed a bug where typing in a search or input field inside an open detail drawer could cause the
  drawer to flicker or close unexpectedly. This affected drawers across multiple platform areas,
  including [AI Inventory](/platform-areas/ai-inventory),
  [LLM Gateway](/platform-areas/llm-gateway), and [MCP Gateway](/platform-areas/mcp-gateway).

## June 9, 2026

- [AI Inventory](/platform-areas/ai-inventory): Added OpenAI Compliance inventory views for
  ChatGPT conversations, Codex sessions, and workspace agents, including product counts, search and
  filters, pagination, refresh, and detail timelines or runs.
- [AI Gateway](/platform-areas/ai-gateway): Fixed AI Gateway settings access so admins with
  [LLM Gateway](/platform-areas/llm-gateway) or [MCP Gateway](/platform-areas/mcp-gateway)
  permissions can reach the relevant AI Gateway pages.

## June 8, 2026

- [AI Inventory](/platform-areas/ai-inventory): Combined Browser Extension, Endpoint Agent, LLM
  Gateway, MCP Gateway, and Compliance API coverage into one inventory view with source switching,
  source-specific counts and metrics, search, filtering, pagination, and source-aware detail
  drawers.
- [Endpoint Agent](/platform-areas/endpoint-agent): Added richer inventory drilldowns for endpoint
  applications, including overview, tool usage, interactions, guardrails, and related agents,
  skills, MCP servers, models, hooks, permissions, plugins, and repositories.
- [LLM Gateway](/platform-areas/llm-gateway): Added an LLM Gateway inventory source with request,
  blocked, anonymized, model, posture, expiry, and status metrics, plus embedded configuration and
  recent-log drilldowns.
- [MCP Gateway](/platform-areas/mcp-gateway): Added an MCP Gateway inventory source with tools,
  scopes, requests, blocked requests, latency, posture, OAuth state, and embedded logs and settings
  drilldowns.
- [Browser Extension](/platform-areas/browser-extension): Added a Browser Extension inventory
  source with application search, filters, bulk actions, app details, and interaction drilldowns.
- [Settings and Administration](/platform-areas/settings-admin): Added a timezone display
  preference so admins can show timestamps in UTC or local browser time. Timestamps across findings,
  audit logs, exports, apps, users, settings, and gateway logs now follow that preference and show
  the alternate time on hover.
- [LLM Gateway](/platform-areas/llm-gateway): Added quick time-range presets to the logs dashboard,
  provider-label analytics, provider-label details in log drilldowns, and per-model overrides for
  response timeout, concurrency, request rate, and token limits.
- [MCP Gateway](/platform-areas/mcp-gateway): Added MCP Logs & Analytics with MCP server filters,
  preset or custom time ranges, request distribution, DLP outcomes, tool usage, top users, and
  sortable or filterable log entries with detail drawers.
- [Settings and Administration](/platform-areas/settings-admin): Added permission-aware inline user
  management controls for editing a user's name and role from Manage Users.

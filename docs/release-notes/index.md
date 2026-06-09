---
title: Release Notes
slug: /release-notes
sidebar_custom_props:
  icon: Newspaper
hide_copy_dropdown: true
---

# Release Notes

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

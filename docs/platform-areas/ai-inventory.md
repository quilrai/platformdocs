---
sidebar_position: 4
sidebar_custom_props:
  icon: Boxes
---

# AI Inventory

AI Inventory helps teams maintain visibility into AI assets and AI activity sources across Browser
Extension, Endpoint Agent, LLM Gateway, MCP Gateway, and compliance API coverage. It shows where AI
usage is happening, what assets or applications are involved, what guardrails apply, and where
additional review may be needed.

## When To Use It

Use AI Inventory when you need to:

- Review AI assets and applications discovered across the organization.
- Compare browser, endpoint, gateway, MCP, and compliance API sources.
- Inspect asset metadata, guardrails, tags, status, source, and integration points.
- Investigate endpoint coding inventory such as agents, skills, MCP servers, models, hooks,
  permissions, plugins, and repositories when endpoint telemetry provides it.
- Review all applications discovered on endpoints through asset inventory, inspect OS type,
  privilege, approval status, and execution policy, and update execution policy inline.
- Review LLM Gateway API keys and MCP Gateway servers from an inventory perspective.
- Track adoption, request volume, blocked activity, sensitive activity, and source-specific trends.

## Key Capabilities

- Switch between Browser Extension, Endpoint Agent, LLM Gateway, MCP Gateway, and Compliance APIs
  source views.
- Review source-specific counts and table metrics.
- Search and filter inventory rows within the active source.
- Open a source-aware details drawer for overview, interaction, and configuration context.
- Review Browser Extension applications with the same app-management controls used by the
  Applications page, scoped to browser-discovered apps.
- Review Endpoint Agent application groups with request, sensitive, detection, blocked, and user
  metrics.
- Review endpoint coding inventory where available, including agents, skills, MCP servers, models,
  hooks, permissions, plugins, and repositories.
- Review endpoint-discovered applications with the Discovery sub-view: filter by name, user email,
  category, source, OS type, approval status, and criticality, and update execution policy inline.
- Review LLM Gateway API keys with request, blocked, anonymized, model, last-used, and posture
  context.
- Review MCP Gateway servers with tools, scopes, DLP action, status, and activity metrics.
- Review the Compliance APIs source through **Overview**, **Assets**, **Usage**, **Governance**, and
  **Security** tabs to monitor organization-wide metrics, browse ChatGPT conversations, Codex
  sessions, workspace agents, and apps, analyze user adoption and model-usage rankings, track token
  consumption and sharing risk, and investigate security and audit events.

## Inventory Sources

### Browser Extension

The Browser Extension source focuses on applications observed through browser activity. It uses the
same app intelligence and app-management experience as the Applications page while keeping the
inventory view scoped to browser-discovered apps.

### Endpoint Agent

The Endpoint Agent source focuses on endpoint-observed applications. It summarizes requests,
sensitive activity, detections, blocked activity, and users. Where coding inventory is available,
the detail view can also show related agents, skills, MCP servers, models, hooks, permissions,
plugins, and repositories for the selected application group.

A **Discovery** sub-view within the Endpoint Agent source lists all applications observed on
endpoints through asset inventory, including applications that have not generated AI-specific
activity. Discovery rows show application name, associated users, device count, OS type, privilege,
category, source, and execution policy. Admins can filter by name, user email, category, source, OS
type (macOS, Windows, Linux), approval status (Needs Review, Approved, Blocked), and criticality
(Critical, Not Critical), and toggle off OS system processes. Execution policy (Allowed or Blocked)
can be updated inline for each row.

### LLM Gateway

The LLM Gateway source lists protected LLM application keys. It shows gateway-native metrics such as
requests, blocked requests, anonymized requests, configured models, last use, DLP action, Guardian
Agent status, and key status. The drawer provides logs-backed overview and interaction context plus
embedded gateway configuration sections.

### MCP Gateway

The MCP Gateway source lists gateway-managed MCP servers. It shows server identity, transport,
auth mode, tools, scopes, DLP action, status, and activity metrics. The drawer provides MCP logs,
analytics, interaction details, and embedded General, Guardrails, and Tools configuration sections.

### Compliance APIs

The Compliance APIs source provides provider-specific inventory for compliance integrations. The
OpenAI Compliance view is organized into five tabs:

- **Overview**: Shows organization-level metrics for the selected time range — observed users,
  events, ChatGPT conversations and messages, files, Codex sessions, agent runs, connector calls,
  and total tokens — plus snapshot cards for ChatGPT inventory totals, Codex activity, and user
  adoption highlights, and a data-freshness and source-status panel.
- **Assets**: Lists inventory rows for each supported product with search, filters, sort,
  pagination, refresh, and source-aware detail drawers. Products and their asset tabs:
  - *ChatGPT*: Conversations, Projects, GPT Usage, GPT Inventory, Knowledge Files, Conversation
    Files, and Users. GPT Inventory lists stateful GPTs with visibility, sharing, capabilities,
    knowledge files, and external actions; the detail drawer shows full configuration sections and
    top-user lists. Knowledge Files lists files linked to GPTs with link count, GPT count, and
    owners. Conversation Files lists files shared in conversations. Users shows per-user activity
    with a 360 detail view.
  - *Codex*: Sessions, Tasks, and Environments.
  - *Spreadsheets*: Sessions — Microsoft Excel add-in sessions with event counts, content events,
    model usage, and token totals.
  - *Agents*: Agents, Connectors, and Skills. Skills shows the workspace skill catalog with
    creator, file count, and agent cross-references; skill name chips in conversation and agent
    run views link directly to the Skills tab. The agent detail drawer is organized into three
    tabs. **Runs** (the default) shows the agent run list with Status, Events, and Failures
    columns, a user filter to narrow runs to a specific user, and a run drill-down view with a
    structured Run Summary (metric cards, identifying fields, invoker prompt) and a color-coded
    event timeline. **Configuration** shows the most recent agent config snapshot in labeled
    cards — Status and edit metadata, Agent profile, Model, Prompt and instructions, Tools and
    connectors, and Skills/starters/triggers — plus History and Changes tabs for reviewing earlier
    snapshots and field-level diffs. **Agent Prompts** shows the agent tagline, description,
    system prompt, and starter prompts.
  - *Apps*: Apps — OpenAI app activity, auth events, returned resources, and per-app user reach.
- **Usage**: Provides **Users**, **Sources**, and **Rankings** sub-tabs with ChatGPT top-user lists
  sorted by conversations, Codex top-user and model rankings, source adoption breakdowns, source
  overlaps, and cross-source transition flows.
- **Governance**: Organizes compliance risk data across three sub-tabs. **Token Governance** shows
  total token consumption, input/output/cached composition, cache-efficiency ratio, token field
  coverage, a daily consumption trend, and consumption rankings by user, model, source, and client.
  **Sharing Blast Radius** surfaces ChatGPT sharing activity — conversation shares, GPT access
  grants, and scope-change signals — with risk highlights and a paginated event log. **Egress**
  shows network egress data for the selected period.
- **Security**: Organizes OpenAI admin-layer security events across seven sub-tabs: **Audit Log**,
  **Logins**, **Denied** (blocked and failed events), **Sessions**, **Admin Access**, **Anomalies**,
  and **Egress**. Each event sub-tab includes a posture header with key stats, an action or outcome
  composition bar, a filterable event table with per-row user and geographic context, and a
  country-based signal callout.

The default time range for the Compliance APIs view is 7 days. Claude Compliance is represented as
a provider option when available but may be disabled until configured for the tenant.

## Main Workflows

1. Open AI Inventory and choose the relevant source.
2. Review source counts, table metrics, and posture signals.
3. Search or filter the active source table.
4. Open an inventory row to review overview, interactions, and source-specific details.
5. Use embedded configuration sections or related platform areas when an item requires action.

## Related Platform Areas

- [Applications](./users-accounts-applications.md)
- [Findings](./findings.md)
- [Controls](./controls.md)
- [AI Gateway](./ai-gateway.md)
- [Endpoint Agent](./endpoint-agent.md)
- [Settings And Administration](./settings-admin.md)

## Access Requirements

AI Inventory requires AI asset access. Source visibility depends on tenant configuration and
permissions for the underlying source, such as Endpoint Agent, AI Gateway, MCP Gateway, or
Compliance. Endpoint Agent inventory appears only when endpoint coverage is enabled for the tenant.

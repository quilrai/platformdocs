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
- Review applications, packages, and dependencies discovered on endpoints through asset
  inventory, including their origin (Windows, macOS, or WSL distribution), resolved path,
  code-signing status, and approval or vulnerability posture.
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
- Review endpoint-discovered applications, packages, and dependencies with the Discovery
  sub-view: filter by name, asset type, associated app, user email, origin, ecosystem, source,
  approval status, criticality, vulnerability status, and severity; toggle **Needs Attention**
  (shows a live count) and **Hide System** rows. Open any row for a details drawer with hash,
  path, code-signing chain, and per-device/user observation history.
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

A **Discovery** sub-view within the Endpoint Agent source lists applications, packages, and
dependencies observed on endpoints through asset inventory, including items that have not
generated AI-specific activity. It opens filtered to the Application type by default. Discovery
rows show:

- **Name**, with the resolved install path shown underneath (copy-to-clipboard, or a "path not
  resolved" flag when the agent could not resolve it).
- **Type** (Application, Package, or Dependency), associated app, version, and users.
- **Observed In** — a device or repository count.
- **Origin** — Windows, macOS, or the specific WSL Linux distribution a binary was seen on. When
  a group spans more than one origin, the cell shows the primary origin plus a count, with the
  full breakdown on hover.
- **Signing** — a code-signing indicator (Signed, OS component, Ad-hoc, Unsigned, Not evaluated,
  or Not applicable for WSL/Linux binaries and script-based packages), with the publisher, issuer,
  root authority, signing ID, and certificate validity window on hover. An "identity unresolved"
  marker appears instead when the enumerated and resolved paths disagree, since the two paths may
  describe different applications; in that case, publisher, version, and signing details are
  withheld rather than misattributed.
- **Posture** — approval status and criticality for applications and packages, or vulnerability
  status and severity (with an open-vulnerability count) for dependencies.
- **Last Observed** date.

Admins can filter by name, asset type, associated app, user email, origin, ecosystem, source,
approval status (Needs Review, Approved, Blocked), criticality (Critical, Not Critical),
vulnerability status (Clean, Vulnerable, Lookup Failed, Unscanned), and severity (Critical, High,
Moderate, Low). A **Needs Attention** toggle shows a live count of matching rows, and **Hide
System** removes OS system processes from the list.

Selecting a row opens a details drawer with the SHA-256 hash, full enumerated and resolved paths,
the code-signing chain and certificate validity window, and a table of individual observations —
device, user, origin, signing state, publisher, path, command line, parent process, privilege,
PIDs, source, and last-synced time — capped at the 200 most recent observations per group.

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
    run views link directly to the Skills tab.
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

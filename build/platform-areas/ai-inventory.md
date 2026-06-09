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
- Review LLM Gateway API keys with request, blocked, anonymized, model, last-used, and posture
  context.
- Review MCP Gateway servers with tools, scopes, DLP action, status, and activity metrics.
- Review Compliance APIs inventory for supported provider data such as ChatGPT conversations, Codex
  sessions, and workspace agents.

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
current OpenAI Compliance view includes product-level tabs for ChatGPT conversations, Codex sessions,
and workspace agents. Claude Compliance is represented as a provider option when available but may
be disabled until configured for the tenant.

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
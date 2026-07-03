---
sidebar_position: 9
sidebar_custom_props:
  icon: Plug
---

# MCP Gateway

MCP Gateway helps teams govern Model Context Protocol servers and tools. It provides a managed way
to add MCP backends, control access, configure tools, apply guardrails, and inspect MCP activity.

For detailed setup and reference documentation, see the
[MCP Gateway docs](https://docs.quilrai.dev/category/mcp-gateway).

## When To Use It

Use MCP Gateway when you need to:

- Register a custom MCP backend.
- Install or request an MCP from the library.
- Govern which agents can use which MCPs.
- Configure OAuth, OAuth passthrough, API key, or no-auth MCP connections.
- Enable or disable tools exposed by an MCP.
- Apply guardrails to MCP traffic.
- Review MCP logs, analytics, and workflow graph views.

## Key Capabilities

- View MCP backends and enable or disable them.
- Add a custom MCP with automatic auth probing, OAuth passthrough, or upstream API key injection.
- Install MCPs from the MCP Library.
- Request MCP installs when install permission is not available.
- Configure MCP general settings, guardrails, and tools.
- Create and revoke MCP access tokens for non-OAuth MCPs.
- Configure access control for agent clients, smart groups, and individual users.
- Map agent clients to MCP backends.
- Set per-smart-group and per-user rules that override tool availability and guardrail actions for a
  specific MCP server.
- Review MCP logs with multi-select filters for tool, MCP, agent, user, call path (individual or
  Quilr OneMCP), and findings outcome, plus time range and duration sorting.
- Use graph view to understand aggregate MCP workflows.
- Configure web-search policy for system web-search MCPs where available.
- Review MCP servers from AI Inventory with tools, scopes, DLP action, status, and activity context.

## Auth Modes

- **OAuth:** Gateway-managed OAuth connection.
- **OAuth passthrough:** The client bearer token is forwarded directly to the backend. This mode is
  intended for direct-backend use and does not expose API token management.
- **Upstream API key:** The gateway stores an admin-owned API key and injects it when calling the
  upstream server. Three credential-placement options are available: Bearer token (sent as an
  `Authorization: Bearer` header), Custom header (a named HTTP request header), and Query parameter
  (appended to the upstream URL). An optional value-prefix field is available for custom schemes.
  This mode is selected explicitly or applied automatically when auth probing finds a server that
  requires credentials without OAuth support.
- **No auth:** Used when the MCP does not require credentials.

## Access Control

Each MCP server has an **Access Control** section in its general settings with three layers of
access rules that are evaluated in order:

- **Agent Clients:** Toggle predefined agent clients on or off. Requests from disabled clients are
  blocked before they reach the MCP server.
- **Smart Group Access:** Set each smart group to **Allow** (explicitly permit), **Deny** (block),
  or **Default** (inherit the server-level behavior). A searchable list shows all available smart
  groups with their current mode.
- **Allowed Users / Denied Users:** Add individual user email addresses to an allow list or a deny
  list. An allowed user can override a denied smart group. A denied user is blocked regardless of
  smart group membership and is the highest-priority access rule.

## Group & User Rules

The **Group & User Rules** tab in MCP server settings lets admins create partial setting overrides
scoped to a specific smart group or individual user. Rules are partial: any field not set in the
rule inherits from the MCP's default settings.

- **Scope types:** Smart group or individual user (by email).
- **Tool overrides:** Enable or disable specific tools for the selected scope. Tools not overridden
  inherit the MCP-level tool configuration.
- **Guardrail overrides:** Set data risk and adversarial risk category actions (Monitor, Redact, or
  Block) for the selected scope. Categories not overridden inherit the MCP-level guardrail settings.
- **Rule evaluation order:** Smart-group rules for all groups the user belongs to are applied first.
  The user-level rule, if one exists, is applied last and takes final priority.
- **Enable/disable:** Each rule can be individually enabled or disabled without deleting it.
- **Effective Settings preview:** Enter a user email to resolve the full merged configuration that
  user would receive, including all matched smart-group rules and the user-level rule.

The Group & User Rules tab is available from the MCP Settings drawer and from AI Inventory MCP
Gateway detail drawers. A **Group & User Rules** shortcut button is also shown on each MCP server
card.

## Main Workflows

1. Add or install an MCP backend.
2. Complete auth setup if required.
3. Review available tools and disable tools that should not be exposed.
4. Configure access control for agent clients, smart groups, and individual users.
5. Apply guardrails where needed.
6. Create Group & User Rules to apply targeted tool or guardrail overrides for specific groups or
   users.
7. Use logs and graph view to monitor activity and troubleshoot outcomes.

## Related Platform Areas

- [AI Gateway](./ai-gateway.md)
- [Findings](./findings.md)
- [Integrations](./integrations/index.md)
- [Settings And Administration](./settings-admin.md)

## Access Requirements

MCP Gateway requires MCP Gateway permissions. Library installs, custom MCP creation, backend
updates, deletes, tool configuration, and agent configuration are controlled by separate scopes.

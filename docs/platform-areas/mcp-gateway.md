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
- Add a custom MCP with automatic auth probing or OAuth passthrough.
- Install MCPs from the MCP Library.
- Request MCP installs when install permission is not available.
- Configure MCP general settings, guardrails, and tools.
- Create and revoke MCP access tokens for non-OAuth MCPs.
- Configure access control for predefined and custom agents.
- Map agent clients to MCP backends.
- Review MCP logs with filters for time range, MCP, tool, agent, user domain, and DLP outcome.
- Use graph view to understand aggregate MCP workflows.
- Configure web-search policy for system web-search MCPs where available.
- Review MCP servers from AI Inventory with tools, scopes, DLP action, status, and activity context.

## Auth Modes

- **OAuth:** Gateway-managed OAuth connection.
- **OAuth passthrough:** The client bearer token is forwarded directly to the backend. This mode is
  intended for direct-backend use and does not expose API token management.
- **API key or token:** Token-based access for MCPs that do not use OAuth.
- **No auth:** Used when the MCP does not require credentials.

## Main Workflows

1. Add or install an MCP backend.
2. Complete auth setup if required.
3. Review available tools and disable tools that should not be exposed.
4. Configure access control for agents.
5. Apply guardrails where needed.
6. Use logs and graph view to monitor activity and troubleshoot outcomes.

## Related Platform Areas

- [AI Gateway](./ai-gateway.md)
- [Findings](./findings.md)
- [Integrations](./integrations.md)
- [Settings And Administration](./settings-admin.md)

## Access Requirements

MCP Gateway requires MCP Gateway permissions. Library installs, custom MCP creation, backend
updates, deletes, tool configuration, and agent configuration are controlled by separate scopes.

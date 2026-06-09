---
sidebar_position: 7
sidebar_custom_props:
  icon: Network
---

# AI Gateway

AI Gateway is the platform area for protecting and governing AI traffic. It includes both LLM Gateway
and MCP Gateway, giving teams a central place to configure providers, guardrails, routing, tools,
access, logs, and testing.

## When To Use It

Use AI Gateway when your organization wants to:

- Protect LLM traffic with QuilrAI guardrails.
- Manage model providers and API-key based apps.
- Monitor and investigate AI gateway traffic.
- Run red team tests against configured LLM apps.
- Register, govern, and observe MCP servers and tools.
- Control which agents and clients can use gateway-managed resources.

## Gateway Areas

- **LLM Gateway:** Provider configuration, API keys, guardrails, routing, rate limits, token saving,
  identity-aware controls, prompt-store enforcement, logs, and red teaming.
- **MCP Gateway:** MCP server inventory, custom MCP creation, MCP library installs, OAuth and
  passthrough auth, tools, access tokens, access control, guardrails, logs, graph view, and agent
  configuration.

## Main Workflows

1. Choose LLM Gateway or MCP Gateway.
2. Create or select an app, provider, MCP, or server.
3. Configure guardrails, routing, access, and operational settings.
4. Use logs and analytics to understand traffic and outcomes.
5. Use Findings and red teaming to identify risk and validate controls.

## Related Platform Areas

- [LLM Gateway](./llm-gateway.md)
- [MCP Gateway](./mcp-gateway.md)
- [Findings](./findings.md)
- [Detection Models](./detection-models.md)
- [Controls](./controls.md)

## Access Requirements

AI Gateway requires AI Gateway access. LLM Gateway and MCP Gateway actions have additional scoped
permissions for creation, updates, logs, tools, libraries, and agent configuration.

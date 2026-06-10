---
sidebar_custom_props:
  icon: Plug
---

# Integrations

Integrations connect QuilrAI to the systems that provide identity, device, SaaS, cloud, and AI
signals. They are the setup and lifecycle surface for connectors and connector instances.

## When To Use It

Use Integrations when you need to:

- Connect QuilrAI to an external system.
- Review existing connected integrations.
- Browse available integrations.
- Configure or update an integration instance.
- Follow setup guidance for supported connectors.
- Manage integration-specific OAuth or configuration flows.

## Key Capabilities

- Connected integrations view.
- Available integrations catalog.
- Search and filter connectors.
- Configure new instances.
- Edit existing instances when permitted.
- Connector-specific setup documentation for Okta, Jamf, ChatGPT, and AWS.
- Separate advanced routes for OAuth, token flow, MCP clients, MCP servers, and tool policies where
  enabled.

## Main Workflows

1. Open Integrations.
2. Review Connected integrations or browse Available integrations.
3. Search or filter by connector category.
4. Select a connector.
5. Follow configuration guidance and complete required scopes or credentials.
6. Complete the OAuth redirect when prompted. Your scope selections are preserved through the
   redirect and displayed accurately when you return to the connected instance.
7. Return to Connected integrations to monitor or update the instance.

## Advanced Integration Areas

Some integration routes are specialized operational areas and may not be visible to every customer:

- OAuth integration configuration.
- Token flow configuration.
- MCP clients and MCP servers.
- Tool policies for MCP or AI tool governance.
- OAuth and token-flow routes that support connector authorization and callback workflows.

## Related Platform Areas

- [Browser Extension](../browser-extension.md)
- [Endpoint Agent](../endpoint-agent.md)
- [MCP Gateway](../mcp-gateway.md)
- [Settings And Administration](../settings-admin.md)

## Access Requirements

Integrations require Integration permissions. Editing existing integrations requires update access.
Some MCP-related integration routes require MCP Gateway permissions.

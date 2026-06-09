---
sidebar_position: 2
sidebar_custom_props:
  icon: ClipboardList
---

# Findings

Findings centralizes investigation work across QuilrAI. It brings together findings from browser,
endpoint, gateway, compliance, identity, and all-source views so teams can triage risk without
switching tools.

## When To Use It

Use Findings to investigate security, privacy, compliance, or operational issues detected by the
platform. It is the main place to move from summary signals into detailed evidence.

## Finding Views

- **Finding Insights:** Summary view for high-level investigation trends.
- **All Findings:** Cross-source finding stream.
- **Browser Extension Findings:** Findings from browser extension activity.
- **Endpoint Agent Findings:** Findings from endpoint agent telemetry, when endpoint is enabled.
- **LLM Gateway Findings:** Findings from protected LLM Gateway traffic.
- **MCP Gateway Findings:** Findings from protected MCP Gateway traffic.
- **Compliance Findings:** Findings and no-risk interactions from compliance integrations such as
  Claude Compliance and OpenAI Compliance, when configured.
- **Identity Findings:** Status and identity-related findings.

## Key Capabilities

- Filter findings by application, user, finding type, source, category, and other dimensions.
- Drill into finding details and supporting context.
- Navigate from app, user, and account pages into filtered finding views.
- Review LLM Gateway findings from a logs-backed V2 view when enabled.
- Review Compliance Findings by provider, detection scope, user, category, and subcategory.
- Open related conversations or interaction details from finding rows where available.

## Main Workflows

1. Start in Finding Insights to understand current risk themes.
2. Move to All Findings or a source-specific finding tab.
3. Filter by app, user, category, or finding type.
4. Open details to review evidence.
5. Decide whether to update controls, detection models, gateway settings, or user coaching.

## Gateway And Compliance Findings

LLM Gateway Findings can use a logs-backed V2 view for gateway traffic. The V2 view supports app,
user, start-date, action, category, and subcategory filters, with a details drawer for request and
response evidence.

Compliance Findings provides a provider switcher for supported compliance sources. Claude and
OpenAI views share the same investigation pattern: select provider scope, choose findings-only,
no-risk, or all-interaction coverage, filter by user and DLP category, and open the details drawer
to inspect the source and content evidence.

## Related Platform Areas

- [LLM Gateway](./llm-gateway.md)
- [MCP Gateway](./mcp-gateway.md)
- [Browser Extension](./browser-extension.md)
- [Endpoint Agent](./endpoint-agent.md)
- [Controls](./controls.md)
- [Settings And Administration](./settings-admin.md)

## Access Requirements

Findings require access to the Findings resource. Endpoint-specific tabs are shown only when the
endpoint agent capability is enabled for the tenant. Compliance findings depend on configured
compliance integrations and the related Compliance permissions.

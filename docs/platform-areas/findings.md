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
- Open related Quilly coaching conversations from finding cards where a **Quilly** badge is shown.
  See [Quilly](./quilly.md) for details on reviewing engagement history.
- Review masked evidence snippets for data-risk findings and reveal them with the **Mask/Unmask**
  toggle when permitted.

## Masked Evidence Snippets

Data-risk evidence — including copy/paste content and snippets from uploaded or downloaded files —
is masked by default when reviewed from a finding. Each masked value is shown as a labeled pill (for
example, a sensitive-data category name) instead of the underlying value, whether you are viewing a
single snippet or the **All Snippets** view.

Admins with AI Usage Conversation read access can use the **Mask/Unmask** toggle on a snippet view to
reveal the original values:

- Unmasking applies to every snippet shown in that view in one action, rather than one request per
  snippet.
- Each unmask action is recorded against the finding under review, so audit history reflects one
  entry per action instead of one entry per snippet.

## Finding Insights Time Ranges

Finding Insights supports preset and custom time ranges. Preset behavior:

- **24h** – rolling window ending at the current time.
- **3 days / 7 days / 30 days** – range ends at the close of today; the start is aligned to the
  opening of the appropriate number of calendar days in the past, so the window covers complete
  days.
- **3 months / 6 months / 1 year** – range ends at the close of today; the start is aligned to the
  first day of the month the appropriate number of calendar months in the past.

When clicking a data point on a Finding Insights chart to drill into a specific period, the platform
selects a time window based on the active preset's granularity:

- Within-day views: one hour from the selected point.
- Ranges up to 30 days: the full calendar day of the selected point.
- Ranges longer than 30 days: the full calendar month of the selected point.

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
- [Quilly](./quilly.md)
- [Settings And Administration](./settings-admin.md)

## Access Requirements

Findings require access to the Findings resource. Endpoint-specific tabs are shown only when the
endpoint agent capability is enabled for the tenant. Compliance findings depend on configured
compliance integrations and the related Compliance permissions. Revealing unmasked values in
data-risk evidence snippets requires AI Usage Conversation read access.

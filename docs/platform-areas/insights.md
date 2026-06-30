---
sidebar_position: 1
sidebar_custom_props:
  icon: Activity
---

# Insights

Insights is the starting point for understanding how AI is being adopted across the organization.
It gives security, governance, and IT teams a high-level view of usage patterns, risky behavior,
and sensitive-data exposure.

## When To Use It

Use Insights when you need to answer questions such as:

- Which AI applications are being used most often?
- Which users, departments, or categories are driving adoption?
- Where are sensitive prompts or risky interactions increasing?
- How much token volume is flowing through LLM Gateway, and which models are most used?
- How many requests are reaching MCP servers, and which servers see the most traffic?
- Which parts of the organization need coaching, review, or controls?

## Key Capabilities

- Select a time range — choose a preset (for example, 7 days or 30 days) or a custom date range.
  All charts on the page update to reflect the selected period.
- Track AI adoption trends over time: unique users and applications per period.
- Review the **Top 10 AI Apps** by Prompts and Users. Each app row has two separate click
  targets: clicking the Prompts count opens Applications filtered to that app; clicking the Users
  count opens Users filtered to that app.
- Review top AI categories and top users by volume. Donut chart legends for **AI Apps by
  Approval**, **Top AI Categories**, and **LLM Gateway** model distribution show the absolute
  count alongside the percentage for each slice.
- Understand the distribution of sensitive data detected in prompts. The chart links to All
  Findings for a filterable finding stream.
- Review department-level AI usage in the **Department AI Usage** stacked bar chart (view-only).
- Monitor AI applications by approval status.
- View LLM Gateway token volume (request and response tokens) and model distribution for the
  selected period.
- View MCP Gateway request volume, blocked request counts, and a ranked list of top MCP servers
  by traffic.
- Click chart data points to navigate to Applications, Users, or Findings with the selected time
  range applied. When two or more series share a position on a multi-line chart, a selection
  popover lists each overlapping series and its value so the correct drilldown can be chosen.

## Main Workflows

1. Open Insights and select a time range using the duration selector at the top of the page.
2. Review AI adoption trends and identify increases or decreases in users and application usage.
3. Identify the highest-volume applications, categories, users, or departments.
4. Check LLM Gateway and MCP Usage charts to understand gateway activity and model mix.
5. Click a chart data point to drill into Applications, Users, or Findings for details.
6. Use Controls or Detection Models when the trend indicates that policy or detection coverage
   should change.

## Related Platform Areas

- [Findings](./findings.md)
- [Users, Applications, And Accounts](./users-accounts-applications.md)
- [LLM Gateway](./llm-gateway.md)
- [MCP Gateway](./mcp-gateway.md)
- [Controls](./controls.md)
- [Detection Models](./detection-models.md)

## Access Requirements

Insights availability depends on tenant configuration and assigned permissions. If AI Axis is not
enabled for the tenant, the platform routes users to Findings instead of the AI usage dashboard.

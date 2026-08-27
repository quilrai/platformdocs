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
- Review top AI applications, top categories, and top users by volume.
- Understand the distribution of sensitive data detected in prompts.
- Review department-level AI usage.
- Monitor AI applications by approval status.
- View LLM Gateway token volume (request and response tokens) and model distribution for the
  selected period.
- View MCP Gateway request volume, blocked request counts, and a ranked list of top MCP servers
  by traffic.
- Click any chart data point to navigate to the related platform area — Applications, Users, or
  Findings — with the selected time range carried over automatically.
- Open the **Governance Reports** tab to review AI usage-policy bypass activity for a selected
  time range: justification and no-justification outcomes, blocked events, sensitive-data category
  breakdowns, and a searchable incident-level log.

## Governance Reports

Governance Reports is a tab within Insights that gives governance, security, and compliance teams a
dedicated view of activity where users bypassed an AI usage-policy warning — for example, by
submitting a justification, providing no justification, or being blocked outright. A duration
selector at the top of the tab applies the selected time range to every view.

The tab is organized into three views:

- **Summary Dashboard**: Trend charts for justification outcomes and total bypass events (hourly,
  daily, or monthly granularity based on the selected range), key metrics — total events with
  percent justified, justified and unjustified event counts, blocked event count, unique users, and
  distinct AI domains accessed — a sensitive-data category breakdown (PII/Identity,
  Financial/Payment, PHI/Health, Auth/Secrets, Code/IP, and Adversarial Attacks), the top AI domains
  involved in bypass activity, a breakdown of how users responded to policy warnings, and the top
  justification text users submitted.
- **Incident Table**: A paginated, searchable log of individual bypass events. Search by email or
  finding ID. Each row shows the AI domain, user name and email, event time, activity type, the
  user's justification text, risk level, sensitive-data categories detected, and the related
  finding ID.
- **Executive Summary**: A narrative summary of the reporting period plus grouped findings —
  Critical Findings, Risk Indicators, Positive Signals, and Immediate Next Steps — for sharing with
  leadership or compliance stakeholders.

Governance Reports availability follows the same tenant configuration as the rest of Insights. The
content shown in User Interaction Hub under
[Settings and Administration](./settings-admin.md#user-interaction-hub) determines what end users
see when they are prompted to justify or are blocked from an action; Governance Reports shows the
resulting activity.

## Main Workflows

1. Open Insights and select a time range using the duration selector at the top of the page.
2. Review AI adoption trends and identify increases or decreases in users and application usage.
3. Identify the highest-volume applications, categories, users, or departments.
4. Check LLM Gateway and MCP Usage charts to understand gateway activity and model mix.
5. Click a chart data point to drill into Applications, Users, or Findings for details.
6. Use Controls or Detection Models when the trend indicates that policy or detection coverage
   should change.
7. Open the Governance Reports tab to review policy-bypass activity: start with the Summary
   Dashboard for trends and key metrics, use the Incident Table to investigate individual events,
   and use the Executive Summary to share findings with stakeholders.

## Related Platform Areas

- [Findings](./findings.md)
- [Users, Applications, And Accounts](./users-accounts-applications.md)
- [LLM Gateway](./llm-gateway.md)
- [MCP Gateway](./mcp-gateway.md)
- [Controls](./controls.md)
- [Detection Models](./detection-models.md)
- [Settings And Administration](./settings-admin.md)

## Access Requirements

Insights availability depends on tenant configuration and assigned permissions. If AI Axis is not
enabled for the tenant, the platform routes users to Findings instead of the AI usage dashboard.

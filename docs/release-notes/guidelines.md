---
sidebar_position: 1
draft: true
sidebar_custom_props:
  icon: Newspaper
---

# Release Notes Guidelines

These guidelines define how QuilrAI should generate customer-facing release notes from product
changes. The platform docs are the baseline context: release notes should explain what changed
relative to the feature behavior described in these pages.

## Audience

Write release notes for customer admins, security teams, governance teams, IT teams, and field teams.
The default audience is a customer-facing administrator who understands the product area but does
not need internal engineering details.

## Voice

- Use customer-facing language.
- Lead with the outcome or user-visible behavior.
- Use product area names from these docs.
- Avoid internal component names, file paths, API routes, or implementation details unless the
  release note is explicitly for a developer or API audience.
- Keep wording specific enough for field teams to explain the change.
- Do not mention changes that are purely internal unless they affect behavior, reliability,
  performance, security, compliance, or usability.

## Product Area Classification

Classify each release-note item into one primary platform area:

- Insights
- Findings
- Users, Applications, and Accounts
- Smart Groups
- AI Inventory
- Controls
- Detection Models
- AI Gateway
- LLM Gateway
- MCP Gateway
- Browser Extension
- Endpoint Agent
- Integrations
- Settings and Administration
- Audit Log and Exports

If a change affects multiple areas, choose the area where the customer experiences the change first
and mention related areas in the note.

## Suggested Release Note Sections

Use these sections when they fit the release:

- **New:** New workflows, pages, capabilities, integrations, or configuration options.
- **Improved:** Better usability, clearer state, faster workflows, richer filters, stronger
  visibility, expanded coverage, or more complete settings.
- **Fixed:** Customer-visible bugs, incorrect states, broken navigation, missing data, unreliable
  actions, or confusing output.
- **Security And Compliance:** Guardrail behavior, data-risk detection, access control, audit,
  compliance setup, policy enforcement, or sensitive-data handling.
- **Admin And Configuration:** Tenant setup, deployment settings, connector setup, permissions,
  gateway settings, endpoint/browser settings, or templates.
- **Developer And API:** API contracts, gateway integration behavior, access tokens, provider
  support, SDK-facing behavior, or technical setup that customers use directly.
- **Known Limitations:** Customer-visible limitations, rollout caveats, prerequisites, or disabled
  functionality.

## What To Include

Include a change when it affects at least one of these:

- A customer-facing workflow.
- A visible screen, table, drawer, filter, setting, tab, or action.
- Detection, guardrail, finding, control, or enforcement behavior.
- Supported integrations, providers, models, MCPs, or deployment methods.
- Permissions, access, authentication, or identity-aware behavior.
- Reliability, speed, accuracy, data freshness, exports, logs, or reporting.
- User-facing copy or communication templates.

## What To Exclude

Do not include:

- Internal-only refactors.
- File organization changes.
- Test-only changes.
- Styling churn that has no meaningful customer impact.
- API implementation details that do not change behavior.
- Debug-only tooling.

If a change is ambiguous, include it only when a customer, admin, or field team would need to know.

## Drafting Pattern

Use this pattern for each item:

1. Product area.
2. Customer-visible change.
3. Why it matters.
4. Any setup, permission, or availability note.

Example:

```text
LLM Gateway: Added temporal knowledge results to red team summaries, helping admins understand
whether a selected model is up to date for time-sensitive prompts. Results appear for runs that
include the Temporal Knowledge suite.
```

## Baseline Scope

The first baseline covers the primary customer-facing areas in Platform Areas. These routable
secondary areas exist in the app but need product confirmation before they become first-class
release-note categories:

- Data Models
- Playground
- Engagement Center
- Decision Engine
- Things to Review

Changes in these areas can still appear in release notes when they are customer-visible. Until they
are confirmed, classify them under the closest primary area or under Admin And Configuration.

## Future Automation Workflow

On merge to `main`, the release-note workflow should:

1. Collect the merged PR description, commit messages, changed files, and issue metadata when
   available.
2. Classify changes by platform area.
3. Compare customer-visible behavior against these baseline docs.
4. Draft release notes using the sections above.
5. Mark uncertain items for review instead of publishing them automatically.
6. Save or publish the draft through the chosen release channel.

Recommended default: generate a reviewable draft first, then publish after human approval.

## API Key Handling

If Codex or another OpenAI-powered workflow generates release notes in CI, store API keys as CI
secrets. Do not commit API keys or generated local credentials. The workflow should read the key from
the CI environment and fail closed when the key is missing.

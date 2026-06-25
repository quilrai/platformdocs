---
sidebar_position: 8
sidebar_custom_props:
  icon: KeyRound
---

# LLM Gateway

LLM Gateway lets teams route LLM application traffic through QuilrAI so they can apply guardrails,
monitor behavior, manage providers, and validate applications before broad deployment.

For detailed setup and reference documentation, see the
[LLM Gateway docs](https://docs.quilrai.dev/category/llm-gateway).

## When To Use It

Use LLM Gateway when you need to:

- Create a protected LLM application endpoint.
- Connect one or more model providers.
- Use QuilrAI as a guardrails-only service when model credentials are managed elsewhere.
- Configure guardrails for sensitive data and adversarial risks.
- Apply rate limits, token controls, routing, and provider settings.
- Review request and response logs with analytics and detection details.
- Investigate LLM Gateway findings.
- Run red team tests against an app and provider model.

## Key Capabilities

- Create LLM Gateway apps through a three-step flow: create app, add guardrails, and integrate. Each
  app card shows the name of the admin who created it (**Created by**) alongside the creation
  timestamp (**Created at**) and expiry date. Apps created before creator tracking was introduced
  show **N/A** for the creator field.
- Filter the app list by **Provider**, **Model**, **Tag**, or **Created By**. Active filters appear
  as removable pills; all filters can be cleared at once with **Clear all filters**.
- Configure provider credentials, selected models, manual model entries, and additional provider
  instances.
- Use provider families for chat completions, Anthropic Messages, Bedrock Runtime, OpenAI
  Responses, OpenAI Assistants, OpenAI Realtime, Vertex AI, embeddings, rerank, and guardrails-only
  integrations such as Quilr SDK and Microsoft Copilot Studio.
- Configure default risk actions and enabled guardrail categories.
- Configure additional data guardrails for specialized EDM pattern groups, including device and
  network, telecom, and employee or HR data types.
- Create and manage custom detections for precision categories and custom intents.
- Manage provider instances and model selections.
- Configure routing groups, token-based routing, and custom routing.
- Configure rate limits, per-model rate limits, concurrency, response timeouts, allowed source IPs,
  key expiry, and token limits.
- Enable token saving controls where available.
- Configure identity-aware and JWT-based access settings.
- Enforce prompt store settings.
- Configure Guardian Agent behavior for coding helpers and task adherence.
- View app-specific or global LLM Gateway logs with time range, user, category, subcategory, action,
  and request or response side filters.
- Run V2 red team tests and review run history, summaries, and cases.
- Configure per-user LLM Gateway app access for users with the AI Gateway Admin role, allowing all
  apps or restricting access to a specific subset.
- Configure self-service access per app: choose a credential mode (shared app key or named user
  API keys) and set who can view the app, submit settings change requests, see credential values,
  and view all-user logs.
- Review saved configuration versions for any app, compare field-level diffs, and roll back to any
  prior version with a confirmation step.
- Manage settings change requests submitted by self-service users — approve, reject, or review
  request history from a filterable change request queue.
- Review LLM Gateway keys from AI Inventory with request, blocked, anonymized, model, last-used,
  DLP action, Guardian Agent, and key-status context.

## Provider And App Setup

The create flow starts with app details, provider selection, provider credentials, and model
selection. Model-based providers can fetch available models or accept manual model entries. LLM
Gateway also supports guardrails-only providers for workflows such as LiteLLM callbacks, direct SDK
usage, Copilot Studio tool execution checks, and custom LLM workflows where upstream model
credentials are not stored in QuilrAI.

Provider settings can include a primary provider and additional provider instances. Additional
instances use unique labels so routing rules can target the intended provider instance. Some
provider families, such as embeddings, rerank, Bedrock Runtime, and OpenAI Assistants providers,
are available for gateway use but are not used as routing targets.

## Settings Areas

Each LLM Gateway app has a settings drawer with focused areas for:

- **LLM Providers:** Primary provider, additional providers, credentials, endpoints, and selected
  models.
- **Security Guardrails:** Default action (with a **Set everything to default** shortcut that
  resets all category actions to inherit the default), data risks, adversarial risks (including a
  bulk **Enable all / Disable all** toggle), scopes, actions, and risk sensitivity.
- **Additional Guardrails:** Specialized EDM patterns and per-pattern risk levels.
- **Guardian Agent:** Coding helper checks and task-adherence behavior.
- **Custom Detections:** Custom precision categories and custom intents.
- **Rate Limits:** Key expiry, timeout, request limits, allowed source IPs, token limits, and
  per-model limits.
- **Token Saving:** JSON, HTML, Markdown, and text compression controls.
- **Routing Configurations:** Available providers, routing groups, token-based routing groups, and
  custom routing.
- **Self-Service:** Credential mode (Shared Parent Key or Named User API Keys) and per-role access
  control for viewer access, settings request access, API key visibility, and all-logs visibility —
  each independently scoped to all users, specific email addresses, or smart groups.
- **Audit Log:** Configuration version history with field-level diffs and immediate admin rollback
  (with confirmation); a change request queue filtered by status (Pending, Approved, Rejected,
  Failed, Stale) where admins approve or reject self-service settings requests. Requires update
  access. A global Audit Log button on the app list provides a cross-app view.
- **Identity Aware:** Header identity, JWT identity, identity enforcement, and allowed domains.
- **Prompt Store:** Prompt creation, prompt management, required system prompts, and usage
  guidance.
- **API Integration:** API key and client integration instructions.

## Logs And Investigation

The current LLM Gateway logs view uses V2 logs. It supports app-specific and global analysis, quick
time range review, top users, token usage by model, action counts, category distribution, and recent
log rows. Recent logs can be narrowed by user, category, subcategory, action, and request or
response side so filtered totals match the visible log set.

Log details show request and response content alongside detected entities and detection outcomes.
When available, the details view includes both triggered detections and all enabled detections so an
admin can see what was active even when a category did not trigger an action.

## Red Teaming

LLM Gateway red teaming helps teams test an app and provider model against suites such as prompt
attacks, grounded answering, hallucination, instruction following, knowledge, temporal knowledge,
and logic or reasoning. Runs are named, scoped to an app and provider, and include summaries plus
case-level results.

## Self-Service Dashboard

Admins can grant end users controlled, non-admin access to LLM Gateway apps through a dedicated
self-service surface. Users who sign in via OAuth with a self-service access mode are routed there
automatically and cannot reach admin pages.

The dashboard lists the LLM Gateway apps that self-service is enabled for, with search and
refresh. Selecting an app opens three tabs:

- **Settings** — visible when the user has request access. The full settings panel is displayed in
  read-only/request mode: changes are submitted as approval requests rather than applied
  immediately. The panel covers provider settings, tags, guardrails, custom detections, rate limits,
  token saving, routing, identity settings, prompt store, and API integration. Users can review
  their own submitted requests from an Audit Log view within the panel.
- **Logs** — LLM Gateway request logs scoped to the signed-in user. When the admin grants All Logs
  Access for the app, all app traffic is visible.
- **Findings** — findings associated with the app, scoped the same way as logs.

Credential access depends on the credential mode the admin configured for the app:
- **Shared Parent Key** mode — users with API Key Access permission can copy the shared app key.
- **Named User API Keys** mode — users can create named personal keys and revoke them.

Platform admins can open the self-service surface from the **Self-service dashboard** link in the
admin sidebar.

### Configuring Self-Service Access

Use the **Self-Service** tab in an app's settings drawer to enable self-service for that app.

**Credential Mode** selects the type of key self-service users receive:
- **Shared Parent Key** — users receive the existing app key.
- **Named User API Keys** — users create and revoke their own personal keys.

**Access** controls which users get each capability. Four roles are configured independently, each
scoped to all users, specific email addresses, or smart groups:
- **Viewer Access** — who can see and interact with the app in self-service.
- **Request Access** — who can submit settings change requests for admin approval.
- **API Key Access** — who can view credential values.
- **All Logs Access** — who can view logs and findings for all users, not just their own.

### Reviewing Change Requests And Config History

Use the **Audit Log** tab in an app's settings drawer to review change requests and version
history.

**Config History** lists all saved configuration versions with actor and timestamp. Expanding a
version shows a field-level diff. Admins can roll back to any prior version immediately with a
confirmation step.

**Change Requests** lists settings change requests submitted by self-service users. Status filters
(Pending, Approved, Rejected, Failed, Stale) narrow the list. Admins can approve or reject pending
requests from this panel.

A global **Audit Log** button on the LLM Gateway app list opens a cross-app view of config changes
and change requests, with a drill-through link into each app's per-key Audit Log tab.

## Main Workflows

1. Create an app and select provider settings.
2. Add guardrails and default actions.
3. Complete integration instructions.
4. Return to settings to tune providers, guardrails, routing, identity, token, and prompt settings.
5. Use logs and Findings to review live behavior.
6. Run red team tests before or after changing app settings.
7. Optionally configure the Self-Service tab to grant end users controlled access to the app.

## Related Platform Areas

- [AI Gateway](./ai-gateway.md)
- [Findings](./findings.md)
- [Detection Models](./detection-models.md)
- [Applications](./users-accounts-applications.md)
- [AI Inventory](./ai-inventory.md)

## Per-User App Access

Admins with Admin or Super Admin roles can configure which LLM Gateway apps a user with the
AI Gateway Admin role is allowed to access. This setting is available when creating a new user or
editing an existing one. Options are:

- **All apps** — the user can access all current and future LLM Gateway apps (default).
- **Specific apps** — the user can only access the explicitly selected LLM Gateway apps.

The control appears in the users table (as a compact popover) and in the user details panel (as an
inline selector). Changes are saved alongside the role assignment.

## Access Requirements

LLM Gateway requires AI Gateway or LLM Gateway permissions depending on the action. Create, update,
logs, and red teaming access are controlled by assigned scopes. Configuring per-user LLM Gateway app
access requires Admin or Super Admin role. The Audit Log tab — including change request approval,
rejection, and config rollback — requires update access on the LLM Gateway resource.

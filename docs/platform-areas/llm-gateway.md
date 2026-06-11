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

- Create LLM Gateway apps through a three-step flow: create app, add guardrails, and integrate.
- Configure provider credentials, selected models, manual model entries, and additional provider
  instances.
- Use provider families for chat completions, Anthropic Messages, Bedrock Runtime, OpenAI
  Responses, OpenAI Realtime, Vertex AI, embeddings, rerank, and guardrails-only integrations such
  as Quilr SDK and Microsoft Copilot Studio.
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
provider families, such as embeddings, rerank, and Bedrock Runtime providers, are available for
gateway use but are not used as routing targets.

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

## Main Workflows

1. Create an app and select provider settings.
2. Add guardrails and default actions.
3. Complete integration instructions.
4. Return to settings to tune providers, guardrails, routing, identity, token, and prompt settings.
5. Use logs and Findings to review live behavior.
6. Run red team tests before or after changing app settings.

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
access requires Admin or Super Admin role.

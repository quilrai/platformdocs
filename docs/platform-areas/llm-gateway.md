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
- Configure guardrails for sensitive data and adversarial risks.
- Apply rate limits, token controls, routing, and provider settings.
- Review request and response logs.
- Investigate LLM Gateway findings.
- Run red team tests against an app and provider model.

## Key Capabilities

- Create LLM Gateway apps with provider credentials and selected models.
- Configure default risk actions and enabled guardrail categories.
- Configure additional data guardrails for specialized data types.
- Manage provider instances and model selections.
- Configure routing groups, token-based routing, and custom routing.
- Configure rate limits, concurrency, timeouts, and token limits.
- Enable token saving controls where available.
- Configure identity-aware and JWT-based access settings.
- Enforce prompt store settings.
- Configure Guardian Agent behavior for coding helpers and task adherence.
- View app-specific or global LLM Gateway logs.
- Run V2 red team tests and review run history, summaries, and cases.
- Review LLM Gateway keys from AI Inventory with request, blocked, anonymized, model, last-used,
  DLP action, Guardian Agent, and key-status context.

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

## Access Requirements

LLM Gateway requires AI Gateway or LLM Gateway permissions depending on the action. Create, update,
logs, and red teaming access are controlled by assigned scopes.

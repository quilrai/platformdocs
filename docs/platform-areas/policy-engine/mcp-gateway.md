---
sidebar_position: 2
sidebar_label: MCP Gateway
sidebar_custom_props:
  icon: Plug
---

# Policy Engine — MCP Gateway

The Policy Engine lets an admin write rules that say **"when traffic looks like this, do that."** For
MCP, "traffic" means an agent or client connecting to an MCP server, discovering what tools,
resources, and prompts it exposes, invoking one, and getting a result back. A rule can watch any of
those four steps and apply an effect: allow, deny, require approval, redact, throttle, and more.

Policies are authored, tested, and published from **Policy Studio**. Once published, they are
enforced live, on every matching MCP call, by the MCP Gateway itself — not by the console.

:::note
This page is the MCP counterpart to
[Policy Engine — LLM Gateway](./llm-gateway.md). The two surfaces share the same authoring model,
lifecycle, and enforcement architecture. Read the LLM Gateway guide first; this page concentrates on
what is different for MCP.
:::

## When To Use It

Use MCP Gateway policies when you need to:

- Decide which agents or users may connect to which MCP servers.
- Hide a tool, resource, or prompt from discovery, or allow it to be seen but not called.
- Require a person to approve a high-risk or destructive tool call before it runs.
- Detect or redact sensitive data in tool arguments and tool results.
- Cap how often a tool, user, agent, or server can be called.
- Limit how many calls may run at once.
- Control the identity and managed credentials a session receives.
- Set the caching and isolation boundary for capability metadata.
- Constrain where web search can go and which result domains are trusted.

## Key Capabilities

- Author policies with the same guided condition-and-effect builder used for LLM Gateway, or directly
  as QuilrQL source.
- Check traffic at four points in the MCP call lifecycle, not two.
- Scope any policy to users, Smart Groups, MCP servers, agents, or routes.
- Resolve overlapping policies with an explicit priority number.
- Validate, try against real recent MCP traffic, then publish immutable numbered revisions.
- Roll back to any earlier revision.

## How A Policy Is Structured

The sentence shape is the same as LLM Gateway:

```
WHEN <condition>     →  is this MCP call a match?
THEN <effect>        →  what happens if it is?
```

### Conditions

- **Who** — user email or ID, department, identity groups, Smart Group membership, or the calling
  **agent**, matched by name or keyword and by whether it is classified `known` or `unknown`.
- **What** — the MCP server, by ID, name, slug, type, or auth type; the tool, resource, or prompt
  being touched; and the exact protocol method, such as a tool call, a resource read, or a prompt
  fetch.
- **Content** — whether a tool's arguments or result contain a matching data type, or whether a
  response came back from an unexpected domain. See
  [Where Data Types Come From](#where-data-types-come-from).
- **Context** — client network IP, and the **route** the call took: direct, OneMCP, or workflow.

The three editor building blocks — **+ condition**, **+ any-of group**, and **+ data condition** —
work identically to LLM Gateway. See
[Conditions](./llm-gateway.md#conditions) for the exact mechanics.

### Effects

What is available depends on the card. An **MCP Server Access** policy's effect is allow or deny; a
**Human Approval** policy's effect is none or required; a **Usage Quotas** policy's effect is a
numeric ceiling.

### Scope And Priority

Same concept as LLM Gateway: a policy can apply everywhere, or be narrowed to specific users, Smart
Groups, MCP servers, agents, or routes. Priority resolves overlaps, and the higher number wins.

### Stage

This is the biggest structural difference from LLM Gateway. MCP traffic is checked at **four** points,
and every policy declares which one it watches:

| Stage | When it fires | What can act here |
|---|---|---|
| **Session** | When a client first connects to an MCP server | Server access, identity and managed auth, cache isolation, OneMCP features, web-search configuration |
| **Discovery** | When the client lists available tools, resources, and prompts | Capability visibility |
| **Request** | When a tool, resource, or prompt is actually invoked | Capability access, human approval, data-risk scanning, usage quotas and concurrency |
| **Response** | When the result comes back from the server | Capability access again, data-risk scanning on output, token savings, web-search result-domain enforcement |

Several effects are legal at more than one stage — capability access checks can run at discovery,
request, *and* response. The editor knows which stages each card's fields support, so you cannot
accidentally configure a check at a stage where it could never fire.

## What You Can Configure

| Card | Controls | Outcome |
|---|---|---|
| **MCP Server Access** | Who may connect to which MCP servers | Allow or deny a session at connect time |
| **Tools, Resources & Prompts** | Visibility and invocation of MCP capabilities | Allow or deny during discovery, invocation, or on the result |
| **Human Approval** | Confirmation requirement before a tool runs | Require a person to approve selected tool invocations |
| **Data & Adversarial Risks** | PII, PHI, financial data, secrets, prompt attacks, custom detections | Detect selected data, set a risk level, and monitor, redact, or block |
| **Usage Quotas & Concurrency** | Minute, hour, day, and rolling-window ceilings, simultaneous-call limits | Limit usage by tenant, user, agent, MCP server, tool, or group |
| **OneMCP Features** | Dynamic tool discovery, OneMCP memory | Control availability per session |
| **Identity & Managed Authentication** | Forwarded identity claims, managed auth, credential, and token references | Choose the identity context and centrally managed credentials a session receives |
| **Capability Cache & Isolation** | Shared, tenant, private, or disabled caching | Set the isolation boundary for cached capability metadata |
| **Token Savings** | JSON, HTML, Markdown, and text compression | Shrinks tool **results** before they return to the calling agent |
| **Web Search Security** | Timeout, excluded domains, URL overrides, result-domain enforcement | Constrain where web search can go and which result domains are trusted |

## What Each Card Does To Traffic

### MCP Server Access

Runs on **session** only. Options are allow or deny.

This is the earliest possible gate. A deny here stops the connection before the client ever sees a
tool, resource, or prompt list, so nothing downstream — discovery, request, or response — gets a
chance to run for that session at all.

### Tools, Resources & Prompts

Three independent effects, one each for tools, resources, and prompts, all allow or deny, and all
legal at **discovery, request, and response**.

You can deny a capability from ever being *listed* at discovery, deny it from being *invoked* at
request, or deny it based on something only knowable from the *result* at response. That is three
different points to catch the same capability, each independently configurable. Denying at discovery
hides it from the client entirely; denying at request lets it be seen but not called.

### Human Approval

Runs on **request** only. Options are none or required.

When required, that tool call pauses for a person to approve before it executes. This is the only
card that inserts a human step into the call rather than deciding allow, deny, or redact
automatically. Pair it with a condition on a tool's destructive-hint annotation or its risk level so
that you gate only the calls that actually matter.

### Data & Adversarial Risks

Runs on **request and response**. Options are monitor, partial redact, redact, and block.

Alongside it, **risk level** is purely informational. Setting a risk level never blocks or alters
anything by itself; it only labels traffic for reporting.

:::caution
Unlike LLM Gateway's
[per-category sensitive data profile](./llm-gateway.md#setting-actions-per-sensitive-data-category),
MCP exposes a **single flat data-risk action** — one action for whatever data type the condition
matched, with no category-by-category override list. If you need different actions for different
categories on MCP, write separate configurations, one condition-and-action pair per category.
:::

### Usage Quotas & Concurrency

Runs on **request** only.

Quota options are per-minute, per-hour, and per-day ceilings, a fixed or rolling window, a timezone,
the **dimensions** the quota is counted against (any of tenant, user, agent, MCP server, tool, or
group), and a shared quota ID so several configurations can draw down the same bucket.

Concurrency options are a simultaneous-call limit, a lease duration controlling how long a reserved
slot is held, and its own set of dimensions.

Once a quota or concurrency ceiling is hit, matching calls are rejected until the window resets or a
slot frees up. Choosing the right dimensions matters: a tool quota caps one tool tenant-wide, while a
user quota caps each person independently.

### OneMCP Features

Two independent **session**-stage switches: dynamic tool discovery, and OneMCP memory.

Both control whether a session may use OneMCP's dynamic tool discovery and its cross-session memory.
They are decided once at connect time and are not re-evaluated per call.

### Identity & Managed Authentication

Runs on **session**. A claims-forwarding toggle decides whether the user's identity claims are passed
to the MCP server. Separate auth, credential, and token-profile settings each select a **reference**
to a centrally managed credential.

This is how a session authenticates to the downstream MCP server without the raw credential passing
through the policy document. You are choosing *which* managed credential a session uses, not typing
one in.

:::info
The policy stores only a pointer to a managed secret, never the secret's value.
:::

### Capability Cache & Isolation

Runs on **session**. Options are shared, tenant, private, or none.

This controls how aggressively capability metadata — tool, resource, and prompt lists — can be cached
and reused across sessions. Shared is the most reusable and cheapest, private never shares a cache
entry with another session, and none disables caching for matching sessions entirely.

### Token Savings

Four independent compression toggles: smart JSON compression, HTML to text, Markdown to text, and
prose compression.

:::caution
On MCP this card runs on the **response** stage, not the request stage as it does on LLM Gateway. It
compresses the tool's **result** on its way back to the calling agent, not the outgoing call, because
on MCP the large payload worth shrinking is typically what a tool returns — a document, a search
result set, an API response — not what the client sent.
:::

### Web Search Security

A mixed-stage card. The search timeout, excluded domains, and URL overrides are configurable at
**session or response**. The result-domain action, allow or deny, exists only at **response**.

Session-stage settings shape search behavior for the whole session: timeout, blocked domains, and URL
rewriting. The response-stage result-domain action is the actual enforcement point, and it can reject
a specific search result once its domain is known.

## Building A Configuration Step By Step

The overall flow is the same as LLM Gateway — add configuration, set stage and priority, pick a scope
shortcut, build the `WHEN` chain, set the effect, review before publishing. See
[Building A Configuration Step By Step](./llm-gateway.md#building-a-configuration-step-by-step) for
the full walkthrough.

Two things differ on MCP.

**The stage token offers four options** — `on session`, `on discovery`, `on request`, and
`on response` — instead of just request and response.

**There are five scope shortcuts**, each with its own default priority:

| Button | Adds a condition on | Priority it sets |
|---|---|---|
| **User** | a specific person's email or ID | 900 |
| **Smart group** | the user's Smart Group | 700 |
| **MCP server** | the specific MCP server | 650 |
| **Agent** | the calling agent's name or keyword | 600 |
| **Route** | the route the call took (direct, OneMCP, or workflow) | 550 |

A worked example, mirroring the layout the editor shows:

```
runs on request · priority 900 · higher priority wins conflicts
Scope shortcut:  [User] [Smart group] [MCP server] [Agent] [Route]

When  User email  is any of   test@quilr.ai
and   MCP name    is any of   finance-reporting-mcp
and   Tool name   is any of   export_ledger
and   Tool risk   is any of   high
      + condition   + any-of group
```

That reads as: *for test@quilr.ai, on the finance-reporting-mcp server, calling the export_ledger
tool, which is tagged high risk — then apply the effect below.* A natural `THEN` for this shape is
Human Approval set to required, so a high-risk export cannot run unattended.

## Setting The Data-Risk Action

MCP's Data & Adversarial Risks card is simpler than LLM Gateway's. It has one flat action that applies
to whatever the condition matched. There is currently no per-category override list on MCP the way
LLM Gateway's sensitive data profile has.

The four actions mean the same thing they do on LLM Gateway:

| Action | Effect on the tool call |
|---|---|
| **Monitor** | Lets the call or result through unchanged. The match is logged; nothing is altered or stopped. |
| **Partial redact** | Lets it through, with part of the matched value obscured. |
| **Redact** | Lets it through, with the entire matched value replaced by a placeholder. |
| **Block** | Stops that call or result entirely once matched. |

If you need different actions for different data categories, write one configuration per category
rather than expecting a single effect to branch internally.

## Where Data Types Come From

MCP policies draw on the same [Detection Models](../detection-models.md) catalog as LLM Gateway: PII,
secrets, financial identifiers, prompt-attack patterns, and custom detectors you build with AI
assistance. Once a detector is installed for your tenant, it becomes selectable inside an MCP
policy's data condition exactly as it does for LLM Gateway.

See [Where Data Types Come From](./llm-gateway.md#where-data-types-come-from) for the full explanation
of how detectors are built and installed. The mechanism is identical. The only difference is *where*
the scanning happens: tool arguments and tool results, instead of chat messages.

## The Advanced Workspace

The mechanics are identical to
[The Advanced Workspace](./llm-gateway.md#the-advanced-workspace) on LLM Gateway — the status strip,
draft controls, the visual builder beside the QuilrQL source, suggested policies, and Insert from
catalog. It is the same draft, validate, and publish pipeline.

Two MCP-specific differences are worth knowing:

- **Insert from catalog offers more catalog kinds.** Alongside the shared ones — users, departments,
  identity groups, Smart Groups, data types, applications, tools, models, and network CIDRs — MCP adds
  MCP servers, resources, prompts, agents, tool tags, auth references, credential references, and
  token profiles. The extra kinds exist because MCP conditions and effects can reference things an
  LLM Gateway policy never needs, such as a specific MCP server, a specific resource or prompt, or a
  managed credential reference.
- **Tool, resource, and prompt searches are scoped to the selected server.** If you have already
  picked an MCP server in the same configuration, searching for a tool name returns only that
  server's tools rather than every tool across every connected server.

## The Authoring Lifecycle

The pipeline is the same five steps as LLM Gateway — draft, validate, try, publish, roll back. See
[The Authoring Lifecycle](./llm-gateway.md#the-authoring-lifecycle) for the full description.

Two MCP differences:

- The replay-against-real-traffic step is simply called **Try** on MCP, where LLM Gateway calls the
  same idea **Historical try**. The behavior is the same: your draft runs against a slice of real
  recent MCP traffic without changing anything live.
- MCP drafts support renaming directly, and MCP's publish flow does not require the publish-reason
  attestation that some other targets do. Check the on-screen publish dialog for what is required at
  the moment you publish, since this can change independently of this page.

**Preset policies** work identically — ready-made starters such as "block sensitive information" or
"require approval before a destructive tool call" that you can insert as-is or customize before
publishing.

## How Enforcement Works

The architectural split is exactly the same as LLM Gateway:

> **The console authors and publishes policies. The console does not enforce them.** Enforcement
> happens inside the MCP Gateway service itself, on the live call path, in real time.

```
Live traffic (this is enforcement):
Client/Agent → MCP Gateway → [ policy check ] → MCP server
                                   ↓
            allow / deny / redact / require approval
                                   ↓
Client/Agent ← MCP Gateway ← [ policy check on response ] ←

Authoring and observability (this is the console):
Admin → Policy Studio → draft / validate / try / publish → MCP Gateway
Admin ← Policy Studio ← Activity and Insights ← gateway's own logs
```

Every MCP call is checked against the published policy inline — at session, discovery, request, and
response as applicable — before it proceeds. The gateway logs its decision, including whether the call
was allowed, denied, or redacted, which rule matched, and what quota was consumed. Policy Studio
reads those logs back for **Activity** and to power the **Try** replay.

Publishing takes effect for new sessions and calls immediately. Nothing about the console needs to be
running for an already-published policy to keep protecting live MCP traffic.

## Policy Engine And Browser Extension Controls

The same caveat applies as on LLM Gateway. There is an older, separate rule system for the browser
extension, sometimes still called [Controls](../controls.md), which predates the unified Policy Engine
and is not the same thing as an MCP Gateway policy. If someone refers to a "policy" in a
browser-extension context, confirm which system they mean.

## Worked Examples

**Require approval before a destructive tool runs**

> WHEN tool annotation "destructive" is true
> THEN require human approval before the tool call executes

**Deny an unknown agent from connecting to a sensitive server**

> WHEN MCP server is `finance-reporting-mcp`
> and agent classification is `unknown`
> THEN deny the session

**Cap how often a tool can be called per user**

> WHEN tool name is `export_ledger`
> THEN limit to 5 calls per hour, counted per user

**Nested logic with an any-of group**

> WHEN Smart Group is "Contractors"
> and (any of: tool risk is high, tool risk is critical)
> THEN block the tool call

## Glossary

| Term | Meaning |
|---|---|
| **Policy** | One rule, or small set of rules: a condition plus an effect. |
| **Condition** | The "when" — what has to be true about the MCP call for the policy to apply. |
| **Effect** | The "then" — the action taken when the condition is true. |
| **Stage** | Which point in the MCP call lifecycle the policy watches: session, discovery, request, or response. |
| **Session** | The point at which a client first connects to an MCP server. |
| **Discovery** | The point at which a client lists a server's available tools, resources, and prompts. |
| **Surface / Card** | A grouping of related effects, such as MCP Server Access. |
| **Capability** | A tool, resource, or prompt exposed by an MCP server. |
| **Route** | How a call reached its server: direct, OneMCP, or workflow. |
| **Agent classification** | Whether the calling agent is recognized (known) or not (unknown). |
| **Data type / Detection** | A named pattern — PII, secret, custom, and so on — that a condition can check for in tool arguments or results. |
| **Data-risk action** | MCP's single data-risk effect: monitor, partial redact, redact, or block. |
| **Risk level** | An informational label only. It does not enforce anything by itself. |
| **Quota dimensions** | The axis a usage quota is counted against: tenant, user, agent, MCP server, tool, or group. |
| **Concurrency lease** | A temporarily reserved in-flight call slot, held for a set number of seconds. |
| **Managed reference** | A pointer to a centrally managed credential or token, never the secret's own value. |
| **Cache mode** | The isolation boundary for cached capability metadata: shared, tenant, private, or none. |
| **Priority** | A number from 0 to 1,000,000 that decides which configuration wins when two could both match and disagree. Higher wins. |
| **Scope shortcut** | A one-click button (User, Smart group, MCP server, Agent, Route) that inserts the matching condition and priority for you. |
| **Monitor** | Log the match; let the content through unchanged. |
| **Partial redact** | Let the content through, with part of the matched value obscured. |
| **Redact** | Let the content through, with the entire matched value replaced by a placeholder. |
| **Block** | Stop the call or result entirely. |
| **Draft** | An unpublished, in-progress edit to a policy. |
| **Revision** | An immutable, numbered, published version of a policy. |
| **Validate** | A compile-time check for errors, before testing or publishing. |
| **Try** | Test a draft against a slice of real recent MCP traffic without affecting it. This is MCP's name for LLM Gateway's Historical try. |
| **Rollback** | Republish an earlier revision as the new current one. |
| **Preset** | A ready-made starter policy you can enable or customize. |

## Related Platform Areas

- [Policy Engine — LLM Gateway](./llm-gateway.md)
- [MCP Gateway](../mcp-gateway.md)
- [Detection Models](../detection-models.md)
- [AI Gateway](../ai-gateway.md)
- [Controls](../controls.md)
- [Insights](../insights.md)
- [Findings](../findings.md)

## Access Requirements

- Viewing and editing policies requires the appropriate admin permission — by default the Admin and
  Super Admin roles, or the equivalent granular permission under the newer role model.
- Every publish requires passing validation first.
- All prior revisions remain visible in history. Nothing is silently overwritten, and every publish is
  attributable to the admin who made it.

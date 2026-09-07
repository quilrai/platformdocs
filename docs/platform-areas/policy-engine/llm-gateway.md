---
sidebar_position: 1
sidebar_label: LLM Gateway
sidebar_custom_props:
  icon: Route
---

# Policy Engine — LLM Gateway

The Policy Engine lets an admin write rules that say **"when traffic looks like this, do that."** A
rule watches for a condition — who is asking, what they are asking for, what kind of data is in the
request, which model or tool is being used — and applies an effect when that condition is true:
allow, block, redact, throttle, route to a different model, and more.

This page covers the **LLM Gateway** surface: the chat and completions traffic your applications send
to model providers.

Policies are authored, tested, and published from **Policy Studio**. Once published, they are
enforced live, on every matching request, by the LLM Gateway itself — not by the console. The console
is where you write the rulebook. The gateway is what reads and applies it in real time.

## When To Use It

Use the Policy Engine when you need to:

- Stop sensitive data from leaving through AI traffic, or redact it in flight.
- Decide who or what may call the gateway at all.
- Restrict which models an application, user, or group may use.
- Allow or deny specific tool calls.
- Set rate, token, concurrency, or timeout ceilings.
- Route traffic across models, or define provider fallback chains.
- Require an approved system prompt for an application.
- Measure exposure before enforcing, by monitoring first and tightening later.

## Key Capabilities

- Author policies with a guided condition-and-effect builder, or directly as QuilrQL source.
- Scope any policy to everyone, or to specific applications, users, or Smart Groups.
- Resolve overlapping policies with an explicit priority number.
- Check traffic on the request stage, the response stage, or both.
- Validate a draft, simulate it against sample requests, and replay it against real recent traffic
  before publishing.
- Publish immutable numbered revisions and roll back to any earlier one.
- Start from Quilr's preset and suggested policies instead of a blank builder.

## How A Policy Is Structured

Every policy is one sentence, or a small set of sentences, shaped like this:

```
WHEN <condition>     →  is this request a match?
THEN <effect>        →  what happens if it is?
```

### Conditions

A condition tests one or more fields of the request:

- **Who** — user email, Smart Group membership, application.
- **What** — the model requested, the tool being called.
- **Content** — whether the payload contains a matching data type. See
  [Where Data Types Come From](#where-data-types-come-from).
- **Context** — network or source IP, whether identity could be established, whether a conversation
  ID is present, and more.

Conditions can be combined three ways in the editor:

| Building block | What it means | Example |
|---|---|---|
| **+ condition** | Adds one more test to the current chain. All conditions in a chain share one join word (**and** / **or**) — click the join word to flip it for the whole chain. | `WHEN user is in Finance and model is gpt-4o` |
| **+ any-of group** | Adds a nested sub-group with its own join word, shown as a boxed sub-list. Defaults to "any of the following" (OR), and can be switched to "all of the following" (AND) or "none of the following" (negated OR). | `WHEN user is in Finance and (any of: tool is send_email, tool is create_ticket)` |
| **+ data condition** | A specialized row that matches on detected data types in the payload rather than on a structural field. | `WHEN detections include category "secrets" occurring more than 2 times` |

A top-level policy is a flat chain of conditions and groups joined by one shared word. A nested group
is how you express "this part uses different logic" without writing raw query syntax.

### Effects

An effect is the action taken once a condition matches. What is available depends on which surface
the policy belongs to. A **Data & Adversarial Risks** policy's effect is monitor, redact, or block; a
**Gateway Access** policy's effect is allow or deny; a **Rate, Token & Timeout Limits** policy's
effect is a quota ceiling.

### Scope And Priority

Every policy can apply everywhere, or be narrowed to specific applications, individual users, or
Quilr Smart Groups.

When more than one policy could apply to the same request, **priority** resolves the overlap. Priority
is a number from 0 to 1,000,000, and the higher number wins when two configurations disagree on a
plain yes/no setting.

### Stage

LLM Gateway traffic is checked at two points, and a policy declares which one it watches:

| Stage | When it fires | Typical use |
|---|---|---|
| **Request** | Before the request reaches the model provider | Gateway access, identity and network trust, tool controls, allowed models, routing, limits, token savings, prompt store enforcement |
| **Response** | After the provider's answer comes back, before it reaches the caller | Data-risk scanning on the response, hallucination protection |

Some surfaces, such as Data & Adversarial Risks, run on **both** stages, scanning the outgoing
request and the incoming response independently.

## What You Can Configure

Policy Studio groups every effect into non-overlapping cards. You never hand-write which effect you
are setting — you pick a card, and the card exposes only the fields relevant to it.

| Card | Controls | Outcome |
|---|---|---|
| **Data & Adversarial Risks** | PII, PHI, financial data, secrets, prompt-injection attempts, and custom detections | Detect selected data types, set an occurrence threshold, and monitor, redact, or block |
| **Guardian Agent** | Coding-assistant checks: dependency security, outdated-version suggestions, task adherence | Runs these checks automatically on matching requests |
| **Hallucination Protection** | Response-quality confidence checks | Monitor or block responses once hallucination confidence crosses your threshold |
| **Gateway Access** | Who or what may send a request at all | Allow or deny by application, person, group, model, or metadata |
| **Identity & Network Trust** | Required identity and conversation context, trusted source IP ranges | Require identity or conversation IDs; restrict to approved networks |
| **Tool Controls** | Tool-call access by name, type, tags, risk, annotations | Allow or deny specific tool calls, independent of data-risk handling |
| **Allowed Models** | Which models matching traffic may use | Restrict the model list per app, user, or group |
| **Routing Groups & Fallbacks** | Weighted routing groups, ordered provider fallback chains | Route matching traffic through a group or fallback chain |
| **Rate, Token & Timeout Limits** | Concurrency, rate, token pricing, timeout ceilings | Set quotas and limits per app or model |
| **Token Savings** | JSON, HTML, Markdown, and text compression | Shrinks request bodies before they reach the provider |
| **Prompt Store Enforcement** | Approved system-prompt requirement | Requires matching requests to use a system prompt from Prompt Store |

## What Each Card Does To Traffic

The table above is the quick reference. This section is the detail: what stage each card runs at,
what the options mean, and the sharp edges worth knowing before you turn one on.

### Data & Adversarial Risks

Runs on **request and response**. Options are monitor, partial redact, redact, and block.

This is a detection-triggered action, not a blanket block — it only ever fires when the configured
data type is actually found in that specific request or response. **Monitor** changes nothing about
the traffic and only logs. **Partial redact** and **redact** rewrite the payload in flight before it
continues. **Block** stops that request or response outright once a match occurs, with no partial
delivery.

See [Setting Actions Per Sensitive-Data Category](#setting-actions-per-sensitive-data-category) for
the category-level override mechanic.

### Guardian Agent

Runs on **request**. A master switch plus three independent sub-checks: dependency-security scanning
and latest-version suggestions for coding assistants, and a separate task-adherence check with its
own sensitivity (low, medium, high) and its own action (nudge or block).

With the master switch off, none of the sub-checks run regardless of their own settings. The
dependency and version checks are informational — they annotate, they do not block. Task adherence is
the only part of this card that can stop a request, and only when its own action is set to block.
Nudge surfaces guidance but lets the request through.

### Hallucination Protection

Runs on **response** only, because it needs the model's answer in order to evaluate it. Options are a
numeric confidence threshold, a risk-level label (low, medium, high), and an action of monitor or
block.

Because this runs response-side, the model has already been called — and billed for — by the time it
fires. A block here withholds the response from the caller; it does not prevent the underlying model
call. Raising the threshold makes the check fire less often. Lowering it makes it stricter.

### Gateway Access

Runs on **request**. Options are allow or deny for the entire request.

This is the broadest and most consequential card: a deny match stops the request before it reaches
the provider and before any other card runs.

:::caution
An **allow** here does not bypass any other independent control — identity, source IP, model, tool,
or otherwise. It only means this specific access rule did not reject the request. Two Gateway Access
configurations can also disagree; whichever has the higher priority wins for that request.
:::

### Identity & Network Trust

Runs on **request**. Three independent toggles: require a resolvable user identity, require a
conversation ID to be present, and restrict traffic to an allow-listed set of source IP or CIDR
ranges.

Each is a hard requirement, not a soft warning. If "require identity" is on and a request cannot be
attributed to a user, it is rejected — the same applies to a missing conversation ID or a client IP
outside the allowed ranges. This card is useful as a floor underneath rules that key off user email
or Smart Group, since those rules cannot meaningfully target unattributed traffic.

### Tool Controls

Runs on **request and response**. Options are allow or deny for a matching tool call.

This card is deliberately independent of Data & Adversarial Risks. A tool can be denied purely by
name, type, tags, risk, or annotations — for example, deny anything flagged destructive — with no
data scanning involved. A data-risk block on the same call is a separate, additive check. Both can
apply to the same tool call for different reasons.

### Allowed Models

Runs on **request**. The option is an allow-list of models.

Traffic matching the condition may only reach the listed models. A request naming any other model is
rejected before it is sent to a provider. This is an allow-list, not a deny-list — models left off
the list are implicitly blocked for matching traffic.

### Routing Groups & Fallbacks

Runs on **request**. Options are a weighted routing group, where traffic is split by percentage
across models and the weights must sum to 100, or an ordered list of provider and model fallback
targets.

This card changes *where* a request goes, not whether it is allowed, which makes it useful for cost
and performance routing or for provider failover. A routing group and a fallback chain are two
different shapes; each configuration uses one or the other.

### Rate, Token & Timeout Limits

Runs on **request**. Options are a per-app concurrency ceiling, a rate limit over a time window,
input, output, and total token ceilings, a request timeout, and separate per-model limit overrides.

Once a limit is exceeded, matching requests are rejected, or queued in the case of concurrency, until
the limit resets. This is the throttle and quota surface, not a content check. Per-model limits let
you set a stricter ceiling for an expensive model without changing the app-wide limit.

### Token Savings

Runs on **request**. Four independent compression toggles: smart JSON compression, HTML to text,
Markdown to text, and prose text compression.

This rewrites the outgoing request body to use fewer tokens *before* it is sent to the provider, which
changes what the model actually receives — a cleaned or compressed version of the original. That is
why it applies only to supported request shapes rather than blindly to everything.

### Prompt Store Enforcement

Runs on **request**. The option is a single requirement toggle.

When on, matching requests must use a system prompt sourced from Prompt Store. A request supplying
its own arbitrary system prompt is rejected. This is how you guarantee that a given application
cannot drift from an approved, centrally managed system prompt.

## Building A Configuration Step By Step

Each card can hold several independent **configurations** — one card, many rules, each with its own
scope and priority. This is the flow to add one, following the layout the editor shows on screen.

### 1. Open the card and add a configuration

Click **Add configuration**. A new, empty configuration appears, named after the effect. You can
rename it later.

### 2. Set where it runs

The identity line at the top reads:

```
runs  on request  ·  priority 900  ·  higher priority wins conflicts
```

- **Stage** (`on request` / `on response`) — click the token to change which point in the traffic
  lifecycle this configuration checks.
- **Priority** — click the token to pick a common value (900, 800, 700, 500, 300) or type any number
  from 0 to 1,000,000. When two configurations could both match the same request and disagree on a
  plain yes/no setting, the higher priority number wins. Leave this alone unless you specifically
  need to override a broader rule for a narrower case.

### 3. Pick a scope shortcut

Optional, but usually the fastest start. Three quick-fill buttons sit under the identity line:

| Button | Adds a condition on | Priority it sets |
|---|---|---|
| **User** | a specific person's email | 900 |
| **Smart group** | the user's Smart Group | 700 |
| **Application** | the calling application | 600 |

Clicking one inserts the matching condition as the *first* row of the `WHEN` chain and raises priority
to at least that shortcut's value, so a per-user rule naturally outranks a per-application rule,
which outranks a Smart Group rule. You can add more conditions by hand afterward.

:::info
Leaving the condition list empty means the configuration applies to **everyone**.
:::

### 4. Build the rest of the WHEN clause

This is the same condition builder described in [Conditions](#conditions):

- **+ condition** — add another test to the chain, joined by the chain's shared and/or word.
- **+ any-of group** — add a nested, independently joined sub-group (any of / all of / none of), for
  logic that needs its own and/or word inside a larger chain.
- **+ data condition** — match on a detected data type instead of a structural field. This is how a
  Data & Adversarial Risks configuration usually starts, for example `data found is any of "Aadhaar
  Number"`, optionally with an occurrence threshold such as 10 or more occurrences.

A worked example, read top to bottom exactly as the editor shows it:

```
runs on request · priority 900 · higher priority wins conflicts
Scope shortcut:  [User]  [Smart group]  [Application]

When  User email         is any of   manideep@quilr.ai
and   Active Smart Group is any of   CSM
and   Application        is any of   gurmukh-test
and   data found         is any of   Aadhaar Number   >= 10 occurrences
      + condition   + any-of group
```

That reads as: *for manideep@quilr.ai, in the CSM Smart Group, using the gurmukh-test application,
when 10 or more Aadhaar Numbers are found in the request — then apply the effect below.*

### 5. Set the effects under THEN

Use **+ effect** to add one or more actions this configuration applies once every condition above
matches. See
[Setting Actions Per Sensitive-Data Category](#setting-actions-per-sensitive-data-category) for how
sensitive-data actions work.

### 6. Review before publishing

The bottom bar always tells you how much is waiting, for example *"10 pending changes across 2
surfaces — nothing changes in the gateway until you publish."* Use **Review changes** to see a plain
diff of everything queued, then validate and try it before you publish.

## Setting Actions Per Sensitive-Data Category

The Data & Adversarial Risks effect, called the **sensitive data profile**, is the richest effect in
the engine, because "detect this data" is rarely one flat answer. You usually want a different action
for a low-sensitivity category than for a high-sensitivity one, inside the same configuration.

### Data risk action

A single dropdown that sets the **fallback action** applied to any detected data type this
configuration is watching, unless a category below overrides it.

### Category actions

A list you build one entry at a time:

1. Click **Add** under Category actions.
2. **Property** — pick the data category this override applies to, for example a cybersecurity
   frameworks mention category or a fraudulent-activity content category. These come from the same
   detection-model catalog described in
   [Where Data Types Come From](#where-data-types-come-from).
3. **Value** — pick the action for that specific category: Monitor, Partial redact, Redact, or Block.

A category action always overrides the top-level Data risk action for that one category. Everything
else detected still falls back to the default.

### What each action does

| Action | Effect on the request or response |
|---|---|
| **Monitor** | Lets the content through unchanged. The match is logged and appears in Activity and Insights, but nothing is altered or stopped. Use this to measure exposure before tightening enforcement. |
| **Partial redact** | Lets the content through, but obscures part of the matched value — for example, masking all but the last few characters — so the data type is still recognizable without exposing the full value. |
| **Redact** | Lets the content through, but replaces the entire matched value with a placeholder. The surrounding message still goes through; the sensitive value does not. |
| **Block** | Stops the request or response entirely once this category matches. The caller receives a policy-blocked response instead of a completed one. |

### Fine-tuning knobs

The same sensitive data profile also carries:

- A **scope**, covering who or what the whole profile applies to, layered on top of the
  configuration's own `WHEN` scope.
- A **subcategory sensitivity** setting, which fine-tunes how aggressively a category's subcategories
  are matched.
- An **EDM pattern sensitivity** setting, which tunes matching for Exact Data Match patterns — the
  kind of detector built from an uploaded list of exact known values, such as a customer list, rather
  than from a general pattern.

Treat these as fine-tuning on top of the category actions, not as a separate decision to make for
every policy.

## Where Data Types Come From

Several cards, Data & Adversarial Risks in particular, let a policy say "when this kind of data is
present." That data-type catalog — PII, secrets, financial identifiers, prompt-attack patterns, and
anything custom — comes from [Detection Models](../detection-models.md), a separate but connected
part of the product:

- A library of ready-made detectors ships out of the box, covering credential and API-key patterns,
  PII identifiers, financial data formats, region-specific identifiers, and more.
- Admins can also build **custom detectors** with AI assistance: describe what you want caught, and
  the system proposes a technique — a precise pattern match, or a broader intent match — generates
  realistic test examples, validates it, and lets you save it.
- Once a detector is installed for your tenant, it becomes selectable inside a policy's data
  condition, for example "match when detections include category `secrets`."

The Policy Engine only ever *references* a data type by name. The actual scanning of prompt and
response content against that pattern happens in the detection and classification service at request
time, not inside the policy document.

## The Advanced Workspace

Everything above describes the **guided** editor: cards, dropdowns, and sentence builders. There is
also an **Advanced** workspace for the same LLM Gateway policy document, which trades the cards for
direct, whole-document editing. It is the same draft and the same validate-and-publish pipeline, just
a different view of it — nothing you do here is a separate system from the guided editor.

### The status strip

At the top of the workspace, always visible:

- **Authoritative** — a status pill confirming that the published QuilrQL document is the one
  actually being enforced. It changes to a degraded tone if the gateway reports a problem applying
  it.
- **Revision number and checksum** — which published revision is currently live, and a truncated
  content fingerprint.
- **Disable Policy Engine** — reverts the surface to the pre-QuilrQL legacy configuration snapshot.

:::warning
**Disable Policy Engine** is a real behavioral change, not a UI toggle. Traffic is evaluated by the
old system again the moment it is confirmed.
:::

### Draft controls

A row of explicit, named actions. Nothing here saves silently.

| Control | What it does |
|---|---|
| **Draft** (dropdown) | Switches between your open drafts, shown as name and version. |
| **New draft from active revision** | Clones the current live revision into a fresh, editable draft. This is the normal way to start a change. |
| **Save draft** | Persists your edits explicitly, and is enabled only once something has actually changed. If someone else changed the draft since you loaded it, you get a conflict banner offering **Load latest version** or **Overwrite with my version** rather than a silent overwrite. |
| **Validate** | Compiles the *saved* source and reports errors and warnings. Publishing is only possible after the saved source validates clean. |
| **Publish revision** | Turns the validated draft into the new live, numbered revision. Enabled only once validation has passed. |

### Visual builder and QuilrQL source

The workspace splits into two panes that stay in sync automatically:

- **Visual builder** (left) — the same card and sentence editing described above, embedded here
  instead of on its own page. A policy count badge shows how many distinct policies the whole
  document currently holds.
- **QuilrQL** (right), tagged **Source of truth** — the complete, lossless document as text. Any
  change on the visual side appears here immediately, and you can type directly into this pane for
  anything the visual builder does not yet have a card for.

There is a hard UTF-8 byte ceiling on the whole document, shown in the footer. Drafts save only when
you explicitly click Save, and only a saved source can be validated or published.

### Suggested policies

A list of ready-made starter documents from Quilr's catalog, each a complete, standalone policy
block — for example "Block sensitive information," "Monitor selected data types," "Detect
high-volume identifiers," "Block prompt attacks," and "Assign a risk level." Clicking **Insert**
drops that policy's full text into your draft.

A suggestion can be ready to use as-is, tagged **Customize** when it is expected to need editing —
for example, when it ships with placeholder scope you should narrow — or greyed out as
**Unavailable**, with a stated reason, when it does not apply to your setup.

### Insert from catalog

A search tool for finding the exact, correctly escaped QuilrQL literal for something you want to
reference, instead of typing it by hand and risking a typo.

Pick a catalog — users, Smart Groups, data types, applications, tools, models, network CIDRs,
providers, routing groups, provider labels, application tags, or method types — type a search term,
and click **Insert** on the result you want. It pastes the ready-to-use value into the source at your
cursor. This is the same catalog the guided editor's pickers use; the Advanced workspace just exposes
it directly.

## The Authoring Lifecycle

Every change goes through the same safety pipeline, whether you use the guided cards or the raw text
editor.

1. **Draft** — edit freely. Nothing is live yet. A draft tracks the revision it was based on, and
   saving on top of a stale draft is rejected, so two people cannot silently clobber each other.
2. **Validate** — compiles the draft and reports any errors or warnings, with the exact line and
   column, before you test it against traffic.
3. **Try it** — check impact before publishing, two ways:
   - **Simulate** — run the draft against sample or synthetic requests you construct.
   - **Historical try** — replay the draft against a slice of your own recent real traffic to see how
     many requests would have been affected, without changing anything live.
4. **Publish** — turns the draft into a new, permanent, numbered revision. This is the moment the
   rule goes live.
5. **Rollback** — every past revision is kept. If a new revision misbehaves, roll back to the
   previous one, which republishes it as a fresh revision.

**Preset policies** are ready-made starting points, such as "block secrets in prompts" or "require
approval before destructive tool calls." You can turn one on as-is or fine-tune it before publishing
— a faster path than starting from a blank condition builder.

## How Enforcement Works

This is the most important point to get right about this feature:

> **The console authors and publishes policies. The console does not enforce them.** Enforcement
> happens inside the LLM Gateway service itself, on the live request path, in real time.

Concretely:

- When you publish a policy, the console hands the finished document to the LLM Gateway.
- From that point on, every request to the LLM Gateway is checked against the current published
  policy inline, before the request reaches the model provider, and again on the way back for
  response-side checks. This happens synchronously as part of handling the request. There is no delay
  or batch processing for enforcement itself.
- The gateway logs its decision — blocked, redacted, allowed, tokens saved, and which rule matched —
  as part of its normal request logging.
- Policy Studio then reads those logs back to show **Activity**: how many requests were governed,
  blocked, or had tokens saved by each policy. The same recorded traffic powers Historical try.

```
Live traffic (this is enforcement):
Client → LLM Gateway → [ policy check ] → model provider
                             ↓
                allow / block / redact
                             ↓
Client ← LLM Gateway ← [ policy check on response ] ←

Authoring and observability (this is the console):
Admin → Policy Studio → draft / validate / simulate / publish → LLM Gateway
Admin ← Policy Studio ← Activity and Insights ← gateway's own logs
```

Because enforcement lives in the gateway, publishing a policy takes effect for new traffic
immediately. You do not need to restart or redeploy anything, and nothing about the console needs to
be running for an already-published policy to keep protecting live traffic.

## Policy Engine And Browser Extension Controls

There is an older, separate rule system in the product for the browser extension, sometimes still
called [Controls](../controls.md). It predates the unified Policy Engine described on this page, uses
its own condition and action format, and is not the same thing as an LLM Gateway policy.

If someone refers to a "policy" in the context of the browser extension specifically, confirm which
system they mean before assuming it is the Policy Engine covered here.

## Worked Examples

**Block secrets from leaving via LLM Gateway**

> WHEN detections include category "secrets" occurring more than 0 times
> THEN block the request

**Deny a destructive tool call**

> WHEN tool name is any of `delete_record`, `drop_table`
> THEN deny the tool call

**Restrict a sensitive app to an approved model list**

> WHEN application is `finance-copilot`
> THEN allow only models `gpt-4o`, `claude-sonnet`

**Nested logic with an any-of group**

> WHEN user is in Finance
> and (any of: tool is `send_email`, tool is `create_ticket`)
> THEN block the tool call

## Glossary

| Term | Meaning |
|---|---|
| **Policy** | One rule, or small set of rules: a condition plus an effect. |
| **Condition** | The "when" — what has to be true about the request for the policy to apply. |
| **Effect** | The "then" — the action taken when the condition is true. |
| **Stage** | Which point in the request lifecycle the policy watches: request, before the provider, or response, after it. |
| **Surface / Card** | A grouping of related effects, such as Gateway Access. |
| **Data type / Detection** | A named pattern — PII, secret, custom, and so on — that a condition can check for in content. |
| **Priority** | A number from 0 to 1,000,000 that decides which configuration wins when two could both match the same request and disagree. Higher wins. |
| **Scope shortcut** | A one-click button (User, Smart group, Application) that inserts the matching condition and priority for you. |
| **Data risk action** | The default action for a Data & Adversarial Risks configuration, applied to any detected category without its own override. |
| **Category action** | A per-category override of the default action — for example, treat secrets as Block while everything else is only monitored. |
| **Monitor** | Log the match; let the content through unchanged. |
| **Partial redact** | Let the content through, with part of the matched value obscured. |
| **Redact** | Let the content through, with the entire matched value replaced by a placeholder. |
| **Block** | Stop the request or response entirely. |
| **Draft** | An unpublished, in-progress edit to a policy. |
| **Revision** | An immutable, numbered, published version of a policy. |
| **Validate** | A compile-time check for errors, before testing or publishing. |
| **Simulate** | Test a draft against sample or synthetic requests. |
| **Historical try** | Test a draft against a slice of real recent traffic, without affecting it. |
| **Rollback** | Republish an earlier revision as the new current one. |
| **Preset** | A ready-made starter policy you can enable or customize. |
| **QuilrQL** | The text format that is the source of truth for a policy document. |

## Related Platform Areas

- [Policy Engine — MCP Gateway](./mcp-gateway.md)
- [Detection Models](../detection-models.md)
- [LLM Gateway](../llm-gateway.md)
- [AI Gateway](../ai-gateway.md)
- [Controls](../controls.md)
- [Insights](../insights.md)
- [Findings](../findings.md)
- [Audit Log And Exports](../audit-log-and-exports.md)

## Access Requirements

- Viewing and editing policies requires the appropriate admin permission — by default the Admin and
  Super Admin roles, or the equivalent granular permission under the newer role model.
- Every publish requires passing validation first. Some targets also require you to have run a try or
  impact check before the publish button is enabled, so a policy cannot go live blind.
- All prior revisions remain visible in history. Nothing is silently overwritten, and every publish is
  attributable to the admin who made it.

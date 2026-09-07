---
sidebar_position: 15
sidebar_custom_props:
  icon: Archive
---

# Data Retention

Data Retention controls **how long each kind of LLM and MCP data stays visible in the console** —
nothing more.

:::danger
This is **not a delete feature**. Raw data in the underlying analytics store is never removed,
altered, or given a time-to-live by Data Retention. Once a class of data falls outside its configured
window, the console stops *showing* it — in tables, exports, dashboards, and conversation detail
views — while the underlying record keeps existing untouched. The product reports its own enforcement
mode as console-visibility enforcement, with physical deletion explicitly not enabled.
:::

The policy is **tenant-wide**. There is one policy for the whole tenant, not one per application or
per API key, because some traffic — MCP events in particular — has no clean subscriber dimension to
scope by.

## When To Use It

Use Data Retention when you need to:

- Limit how long prompt and response content remains readable in the console.
- Keep the record that an event happened while hiding its content.
- Hold finding evidence for a shorter window than the finding itself.
- Apply a shorter window to one Smart Group, application, or agent than to everything else.
- Estimate how much existing data a proposed window would hide, before committing to it.
- Show auditors a documented, tenant-wide visibility policy.

## Key Capabilities

- An ordered list of rules, each with its own condition and its own per-class windows.
- Eight independently configurable data classes.
- Presets that fill all eight classes from a single duration, plus a Custom mode when they need to
  disagree.
- Conditions written over 35 fields spanning both gateways.
- Validation that enforces two structural invariants and warns about unreachable rules.
- A read-only impact preview that estimates how many events and characters a saved draft would hide.
- Read-only revision history of every published policy.

## How A Policy Is Structured

A retention policy is an ordered list of **rules**, each pairing a condition with a set of visibility
windows, plus one mandatory **default rule** that catches everything else.

```
RULE 1   WHEN <condition>   KEEPS VISIBLE <periods per class>
RULE 2   WHEN <condition>   KEEPS VISIBLE <periods per class>
  ...
DEFAULT                     KEEPS VISIBLE <periods per class>
```

**Order matters, and matching is exclusive.** An event takes the *first* rule that definitively
matches it, top to bottom.

If a rule's condition cannot be evaluated for a given event — for example, it keys off a person but
the event has no attributable identity — that rule is skipped as **unknown**. It is not treated as a
match or as a non-match, and evaluation falls through to the next rule. Whatever no rule catches falls
to the default.

## The Eight Data Classes

Every rule, and the default, sets an independent visibility window for each class:

| Class | Roughly speaking |
|---|---|
| **Activity metadata** | That the event happened at all — timestamps, gateway, application, model or tool, status |
| **Identity** | Which person or agent the event is attributed to |
| **Request content** | The actual prompt, or the tool call arguments |
| **Response content** | The actual model response, or the tool result |
| **Finding summary** | That a DLP or security finding occurred, and its category |
| **Finding evidence** | The specific matched text behind that finding |
| **Diagnostics** | Error details, rejection reasons, low-level troubleshooting fields |
| **Derived insights** | Anything computed from the above, such as aggregates and trends |

### Two invariants

Both are enforced on every save, for every rule and for the default:

1. **No class may outlive Activity metadata.** You cannot keep Request content visible for 90 days if
   Activity metadata is only kept for 30. Metadata is the floor everything else is measured against.
2. **Finding evidence may not outlive Finding summary.** You cannot keep the matched evidence longer
   than the fact that a finding happened at all.

### Window shapes

Each class's window is one of exactly three shapes:

| Setting | Meaning |
|---|---|
| **Not retained** | Never shown, regardless of age |
| **N days** | Shown only while the event is within the last N days. Valid range is 1 to 3650 |
| **Indefinite** | Always shown, no matter how old |

## Presets

Rather than setting all eight classes by hand, a **preset** fills them from one chosen duration, or
from "no history."

| Preset | Activity metadata | Identity | Request | Response | Finding summary | Everything else |
|---|---|---|---|---|---|---|
| **Full activity** | duration | duration | duration | duration | duration | duration |
| **Metadata only** | duration | — | — | — | — | — |
| **Findings only** | duration | duration | — | — | duration | — |
| **Request only** | duration | duration | duration | — | — | — |
| **Response only** | duration | duration | — | duration | — | — |
| **No history** | — | — | — | — | — | — |
| **Custom** | Set every class independently | | | | | |

A dash means Not retained.

Picking any preset other than Custom exposes a single **Duration** field. Change it once, and every
class the preset keeps updates together. Switch to **Custom** when you need the eight classes to
genuinely disagree — for example, keeping Activity metadata for a year but Response content for only
30 days.

## Writing A Rule Step By Step

### 1. Add the rule

Click **Add rule**. A new rule appears at the bottom of the ordered list, defaulted to Full activity
with no real condition yet.

### 2. Name it

Free text, up to 80 characters. The name is the rule's label everywhere it appears: history,
warnings, and the ladder view.

### 3. Build the "Applies to" condition

A query builder over the [field list](#fields-you-can-write-conditions-on). Pick a field, an operator,
and a value or set of values. Multiple conditions in one rule are combined with AND.

:::info
Leaving the condition empty makes the rule match everything — which is really the default rule's job.
An empty condition on a numbered rule usually means the logic belongs in the default instead.
:::

### 4. Set "Keeps visible"

Pick a preset and a duration, or switch to **Custom** and set each of the eight classes independently.
The horizon bars update immediately so you can see the relative windows at a glance. That scale is
logarithmic on purpose — a 30-day window and a 10-year window would otherwise be indistinguishable as
bars.

### 5. Order it

Use the up and down arrows to move the rule earlier or later. The first definitive match wins, so a
narrower, more specific rule should sit above a broader one that would otherwise shadow it.

The editor warns you when a rule's condition exactly duplicates an earlier one. Such a rule can never
fire, because the earlier rule already claims every event it would have matched.

### 6. Set the default rule

The default sits at the bottom of the list. It is always present, has no condition to write, and only
needs its own preset and duration, or a Custom per-class window.

### Worked example

Read top to bottom, as the page shows it:

```
Rule 1 — "Contractor requests, short window"
Applies to:      Smart Group  is  Contractors
Keeps visible:   Request only · 30 days

Rule 2 — "Blocked calls, keep evidence longer"
Applies to:      Blocked  is  true
Keeps visible:   Custom → Activity metadata: 365d · Identity: 365d ·
                 Finding summary: 365d · Finding evidence: 90d ·
                 everything else: Not retained

Default
Keeps visible:   Full activity · 1 year
```

That reads as: *Contractors' request content is only visible for 30 days. Separately, any blocked call
keeps its finding evidence visible for 90 days, even though the finding itself stays visible for a
year. Anything neither rule catches gets a flat one-year window across the board.*

Note the consequence of ordering: because Rule 1 is listed first, a blocked call from a contractor
still gets Rule 1's shorter request-content window. Order decided that — not which rule sounds more
specific.

## Fields You Can Write Conditions On

The **Add filter** search box lists all 35 fields in one picker. You can search by name, value,
section, or sensor. Fields are grouped into three sections: common fields used by both gateways, then
LLM Gateway fields, then MCP Gateway fields.

| Field | Type | Applies to |
|---|---|---|
| `gateway` | string, exact match only | LLM and MCP |
| `application` | string, exact match only | LLM and MCP |
| `person` | string, exact match only | LLM and MCP |
| `smart_group` | string, exact match only | LLM and MCP |
| `finding.present` | boolean | LLM and MCP |
| `finding.category` | string | LLM and MCP |
| `finding.subcategory` | string | LLM and MCP |
| `finding.side` | string | LLM and MCP |
| `finding.action` | string | LLM and MCP |
| `finding.outcome` | string | LLM and MCP |
| `state.blocked` | boolean | LLM and MCP |
| `state.error` | boolean | LLM and MCP |
| `llm.provider`, `llm.model`, `llm.surface`, `llm.agent`, `llm.framework`, `llm.tool`, `llm.status` | string | LLM only |
| `llm.routed`, `llm.streaming`, `llm.cache_enabled`, `llm.guardrails_enabled` | boolean | LLM only |
| `mcp.backend` | string, exact match only | MCP only |
| `mcp.tool`, `mcp.profile`, `mcp.agent`, `mcp.client`, `mcp.called_via`, `mcp.transport`, `mcp.auth_mode`, `mcp.dlp_outcome`, `mcp.protocol`, `mcp.rejection_reason`, `mcp.rejection_stage` | string | MCP only |

### Operators

Which operators are available depends on the field's type:

- **Exact-match-only string fields** — `gateway`, `application`, `person`, `smart_group`, and
  `mcp.backend` — support is any of, is none of, equals, not equals, exists, and does not exist. They
  do not support partial text matching, because they are meant to key off a known, exact value such
  as an application name, a person's identity, or a Smart Group name.
- **All other string fields** additionally support contains and does not contain.
- **Boolean fields** support is and is not.

`smart_group` and `gateway` are the two fields with a live picker of selectable values in the editor —
your tenant's actual Smart Groups, and LLM or MCP. Every other field is typed in free-form to match
the underlying data.

## The Default Rule

Every policy always has exactly one default rule. It has no condition to write, because it always
matches by definition, and only needs a preset and duration, or a Custom per-class window.

Think of it as the answer to "what happens to everything my numbered rules didn't specifically call
out." A brand new tenant's implicit policy is just a default rule set to **Full activity,
Indefinite** — keep showing everything forever, until an admin decides otherwise.

## Identity Coverage Differs Between LLM And MCP

If a rule's condition uses `person` or `smart_group`, the editor surfaces a standing warning on that
rule:

> LLM matching uses current directory membership only for attributable events; MCP matching uses the
> event-time Smart Group snapshot.

Concretely:

- **LLM events** are matched against who is in that Smart Group **right now**, and only for events the
  console can actually attribute to a person. An LLM event with no attributable identity can never
  match a `person` or `smart_group` condition — it falls through as unknown.
- **MCP events** are matched against the Smart Group snapshot recorded **at the time the event
  happened**, because MCP has no clean live identity linkage the way LLM does.

In practice: if someone joins or leaves a Smart Group, an LLM-scoped rule re-evaluates their *past*
events under their *current* membership, while an MCP-scoped rule keeps applying whatever membership
was true when each event actually occurred.

## Preview Impact Before You Publish

Once a draft is saved — not merely edited — **Preview impact** runs a bounded, read-only scan of
everything collected so far. It reports, per source (LLM and MCP) and per class:

- **Total events**, split into events with a known person and events without. This is exactly the
  attribution gap described above.
- **Events hidden** — how many would stop being visible under this draft.
- **Share** — that count as a percentage of the source's total.
- **Characters hidden** — an estimated character count only. The actual request and response text is
  never fetched or displayed to compute this; it is reduced to a length in the data store before
  anything leaves it.

:::warning
Publishing applies the policy to **everything already collected**, not just what arrives next. There
is no grace period for existing data, so use Preview impact to catch a rule that is far more, or far
less, aggressive than you intended.
:::

## The Lifecycle

| Step | What it does |
|---|---|
| **Validate** | Checks the in-progress edit for structural errors — duration ranges, the two invariants, duplicate rule IDs or priorities — and returns any shadowed-rule or identity-coverage warnings, all without saving. |
| **Save draft** | Persists your edit as an explicit draft, guarded by the revision you started from. A stale save is rejected rather than silently overwriting another person's concurrent edit. |
| **Preview impact** | Available only once the draft is saved and has no unsaved changes. |
| **Publish** | Turns the saved draft into the new active policy immediately. |
| **Discard draft** | Throws away the saved draft and returns to the currently active policy, unpublished. |

:::caution
Unlike the [Policy Engine](./policy-engine/llm-gateway.md), Data Retention has **no rollback button**.
History is read-only. To revert to an older configuration, open **Published revisions**, find the
revision you want back, and manually recreate its rules as a new draft, then publish that. Revision
history records configuration, actor, and time only — never the underlying data.
:::

## Where Retention Is Applied

Once published, a policy changes what appears in exactly these places:

- **Conversations** — the LLM, MCP, Browser Extension, Endpoint, OpenAI, and Copilot conversation
  search and detail views. Hidden classes show a placeholder, such as "Not retained by policy," rather
  than being omitted from the page. You still see that an event happened, just not the part your
  policy hides. This includes the findings shown inside a single conversation's detail: a finding's
  summary or evidence disappears under the same rule as everything else in that conversation.
- **Custom Dashboards** — query results come back with the hidden classes blanked out, for whichever
  tenant is running the dashboard.
- **Exports** — every export pins the policy that was active when it ran, so what is inside an export
  file matches what was visible in the console at that moment.

### Not covered yet

:::caution
The standalone **Findings** feed and catalog — the cross-conversation findings list, as distinct from
the per-conversation findings above — still shows data regardless of your retention policy. So do
**Overview, Graph, Cost, Posture, Adoption, Topics, Users, and Inventory**, along with the LLM and MCP
gateway analytics and inventory drawers.

This is tracked as open follow-up work. If you are asking whether tightening retention will hide
something from the Findings feed or from Inventory today, the answer is no, not yet.
:::

### Propagation

Publishing notifies every server process immediately, so the change is live within moments. A slower
60-second background sweep exists purely as a fallback in case a process misses that notification. It
is not the primary mechanism, and it is not a deletion sweep.

While a just-published change is still rolling out, the page shows an **Applying policy** status
instead of **Enforcing**.

:::note
Exports completed *before* a policy change keep whatever data was visible at export time. The status
panel flags this explicitly. Tightening retention today does not reach into an export file downloaded
yesterday.
:::

## Worked Examples

**Shrink the window for one Smart Group**

> WHEN Smart Group is "Contractors"
> KEEPS VISIBLE: Request only, 30 days

**Keep evidence on blocked calls longer than everything else**

> WHEN Blocked is true
> KEEPS VISIBLE: Custom — Finding evidence 90 days, everything else per default

**Drop response content for one noisy integration**

> WHEN Application is "internal-batch-agent"
> KEEPS VISIBLE: Custom — Response content Not retained, everything else Indefinite

**A conservative tenant-wide default**

> DEFAULT
> KEEPS VISIBLE: Full activity, 1 year

## Glossary

| Term | Meaning |
|---|---|
| **Policy** | The full ordered list of rules plus the default, for one tenant. |
| **Rule** | A condition plus a visibility window per class. |
| **Default rule** | The always-present fallback for anything no rule above it matches. |
| **Class** | One of the eight independently windowed kinds of data: Activity metadata, Identity, Request content, Response content, Finding summary, Finding evidence, Diagnostics, Derived insights. |
| **Period** | A class's window: Not retained, N days from 1 to 3650, or Indefinite. |
| **Preset** | A ready-made shortcut that sets all eight classes from one duration. |
| **Priority / order** | Rules are evaluated top to bottom; the first definitive match wins. |
| **Unknown match** | A rule whose condition cannot be evaluated for an event, such as one keyed to identity on an unattributable event. It is skipped, not treated as a match. |
| **Shadowed rule** | A rule whose condition exactly duplicates an earlier one, so it can never fire. |
| **Console visibility enforcement** | The enforcement mode this feature uses: it hides data from the console and never deletes it. |
| **Draft** | An unpublished, saved edit to the policy. |
| **Revision** | An immutable, numbered, published version of the policy. |
| **Validate** | A structural and invariant check that requires no save. |
| **Preview impact** | A read-only scan estimating how many events and characters a saved draft would hide. |
| **Applying policy** | The transient status shown while a just-published change is still propagating. |
| **Enforcing** | The steady-state status once propagation has finished. |

## Related Platform Areas

- [Audit Log And Exports](./audit-log-and-exports.md)
- [Settings And Administration](./settings-admin.md)
- [Policy Engine — LLM Gateway](./policy-engine/llm-gateway.md)
- [Policy Engine — MCP Gateway](./policy-engine/mcp-gateway.md)
- [Findings](./findings.md)
- [Users, Applications, And Accounts](./users-accounts-applications.md)
- [AI Inventory](./ai-inventory.md)

## Access Requirements

- Requires the Admin or Super Admin role, or the equivalent granular permission under the newer role
  model — the same gate as other tenant-wide settings.
- Every mutating action (save, publish, discard) requires a valid authenticated session.

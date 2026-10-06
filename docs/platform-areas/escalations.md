---
sidebar_position: 2.5
sidebar_custom_props:
  icon: ShieldAlert
---

# Escalations

Escalations gives SOC (Security Operations Center) and governance teams a structured way to raise
a finding for internal review, collaborate on it privately among admins, and - when needed - ask the
finding's own user for a justification, all without leaving QuilrAI. Every escalation becomes a
trackable **Case** with its own conversation history, status, and audit trail.

## When To Use It

Use Escalations when a finding needs more than a status change - for example, a sensitive-data
exposure, a policy violation, or any activity where the SOC team wants a documented, auditable
back-and-forth with the user involved before the finding is closed out.

:::note
Escalation is currently available for **Browser Extension** and **Endpoint Agent** findings only,
since those are the sources where the finding's own user can be identified and asked for a
justification. The **Escalate** action is not yet available on LLM Gateway, MCP Gateway,
compliance, or identity findings.
:::

## Prerequisite: SOC Escalation Settings

Before using Escalations, an admin must configure **Settings > SOC Escalation**:

- **SOC Escalation Recipients** - the list of SOC admin emails CC'd on justification-request
  emails. Optional, but recommended so the whole team sees outgoing requests.
- **Connect Your Own Email Service** - required. There is no default Quilr sender for escalation
  emails; a tenant must connect and verify their own SMTP mailbox before any admin can use
  **Escalate to User**. Raising a case for internal review (Escalate, internal notes) does
  not require this, since that step never sends an email.

See [Settings: SOC Escalation](#settings-soc-escalation) below for full configuration details.

## Workflow At A Glance

```text
[Case Creation]
        │
        │  • Admin opens the finding and selects "Escalate"
        │  • A new Case is created, status: Escalated
        │  • Admin can add an internal note on why it's being escalated
        │  • No email sent yet - the finding's user is not notified
        ▼
[Escalated - Internal Analysis]
        │
        │  • SOC admins add internal analysis and notes on the case
        │  • Admins review any justification the user has already submitted
        │  • Notes stay visible to the SOC team only - never the user
        │  • Admins can close here if no further justification is needed
        ▼
[Escalate to User]
        │
        │  • Admin writes the question/context the user should see
        │  • Admin chooses which SOC recipients are CC'd
        │  • Secure justification-request email sent to the user
        │  • Status changes to: Escalated to User
        ▼
[User Justifies]
        │
        │  • User opens the secure link - no QuilrAI login required
        │  • Sees only their own case context and the question asked
        │  • Submits a written justification
        │  • Status changes to: Justified
        ▼
[Admin Reviews The Justification]
        │
        │  • Admin reads the justification in the Case
        │  • Either: ask a follow-up ──► loops back to "Escalate to User"
        │  •     or: close the case
        ▼
[Closed]
```

## How It Works, End To End

1. **Escalate.** From any finding, an admin chooses **Escalate**. This creates a new
   Case for internal review only - no email is sent yet, and the finding's user is not notified.
   Admins can optionally add an internal note explaining why the finding was escalated.
2. **Internal Analysis.** The Case has its own private conversation thread. Any admin with
   access can add internal notes at any time. Internal notes are never shown to the finding's user
   and never go out by email - they are strictly for SOC-to-SOC discussion.
3. **Escalate to User.** When the team is ready to ask the finding's user to explain themselves, an
   admin uses **Escalate to User** on the Case and writes the question or context the user should
   see. This is the only step that sends an email - a secure link is emailed to the finding's user
   asking them to submit a justification. Admins can choose which SOC recipients are CC'd on that
   email at this step.
4. **The user responds.** The finding's user opens the secure link (no login required) and submits
   a written justification. They see only the specific question asked of them and their own prior
   responses - never the SOC team's internal notes or any other user's case.
5. **Review and repeat, or close.** Once the user responds, the admin can review the justification
   in the Case, ask a follow-up by escalating to the user again (the user sees the new question plus
   their own earlier exchange), or close the case if no further action is needed.

Admins can close a Case at any point in this lifecycle - they don't have to wait for a justification
if one isn't needed.

## Case Statuses

| Status | Meaning |
| --- | --- |
| **Escalated** | Case created and under internal SOC review. The user has not been contacted. |
| **Escalated to User** | A justification request has been emailed to the user; awaiting their response. |
| **Justified** | The user has responded; the case is awaiting admin follow-up or close-out. |
| **Closed** | The case is resolved. No further action is taken. |

## Case Management Workspace

Case Management lives alongside Findings and lists every Case raised for the current tenant. It
provides:

- **Summary counters** for Total Cases, Under Review (Escalated), Open Cases (Escalated to User),
  Awaiting Review (Justified), and Closed, each of which can be clicked to filter the list.
- **Status filters** - All, Escalated, Escalated to User, Justified, Closed - plus search by case ID
  or user, and filters for risk level and sensitive-data category.
- **A case list** showing the finding details, escalation category, risk level, and outcome for
  each case, with the most recently active cases easy to find.

Selecting a case opens its detail view, showing the full finding context, the conversation thread,
and the available actions for that case's current status.

### Opening A Case From The Findings Stream

Any finding with escalation history shows a **Case** indicator alongside its sensitive-data-type
pills directly in the findings stream. Clicking it opens that case's detail view immediately,
without navigating to Case Management first.

## Working A Case

From a Case's detail view, admins can:

- **Add an internal note** - visible only to SOC admins, never emailed or shown to the user.
- **Escalate to User** - write the question or context for the user, choose which SOC recipients
  are CC'd on the notification email, and send. This is available the first time a case is raised
  and again for any follow-up round.
- **Review the conversation** - admin notes and escalation requests are shown with the admin's
  name; the user's justifications are shown as their own responses, in chronological order.
- **Close the case** - available at any stage except on an already-closed case.

### Who Can Close A Case

To keep review decisions independent, **the user whose own activity triggered the finding cannot
close that case themselves**, even if they also hold an admin role. Any other admin on the team can
close it. This keeps the close-out decision with someone other than the person being reviewed.

## The User's Justification Experience

The finding's user never signs in to QuilrAI to respond - they use a secure, single-purpose link
sent by email. That page shows:

- The finding context relevant to their case (what happened, when, and where).
- The specific question or context the SOC admin raised when escalating to them.
- Any of their own prior justifications on this case, so a follow-up round has full context.
- A text box to submit their justification, once per round.

Once submitted, the page confirms the justification was received and that the security team has
been notified. If the admin team asks a follow-up question later, the same link reopens with the
new question. If the case has already been closed, or the link has expired or is invalid, the page
shows a clear, friendly message instead of an error.

The user never sees SOC-internal notes, other users' cases, or any part of the conversation beyond
their own case's justification thread.

## Settings: SOC Escalation

Administrators configure escalation behavior from **Settings > SOC Escalation**, which has two
sections:

### SOC Escalation Recipients

A list of SOC admin email addresses that are automatically CC'd whenever an admin sends a
justification-request email to a finding's user. The escalating admin is always included
automatically, so they don't need to add themselves to this list.

### Connect Your Own Email Service

There is no default Quilr sender for escalation emails - a tenant must connect and verify their own
SMTP mailbox (for example, `soc@yourcompany.com`) before any admin can use **Escalate to User**.
Internal review (Escalate and internal notes) does not require this, since that step never
sends an email. To connect a mailbox, an admin provides:

- The "From" address that should appear on outgoing emails.
- The SMTP host and port for their mail provider.
- The SMTP username and password for that mailbox.

The connection is tested before anything is saved - if authentication fails, the specific error
from the mail provider is shown so the admin can correct the configuration. Once connected, the
password is never displayed or returned again; only a masked, connected status is shown.

A connected mailbox can show one of the following states:

- **Active** - verified and currently used for outgoing escalation emails.
- **Broken** - a recent connection check failed (for example, the mailbox password changed or
  authentication was revoked on the provider's side). Escalation-to-user emails are paused until
  the connection is fixed and re-verified.
- **Not connected** - no mailbox has been set up yet. Until one is connected and verified,
  **Escalate to User** is unavailable tenant-wide; escalating findings to SOC for internal review
  still works normally.

:::note
Escalation-to-user emails never fall back to a default Quilr address. If the connected mailbox is
Broken or Not Connected, **Escalate to User** is blocked until an admin reconnects or fixes it in
Settings.
:::

## Related Platform Areas

- [Findings](./findings.md)
- [Settings And Administration](./settings-admin.md)

## Access Requirements

Escalations require access to the Findings/Escalation resource. Administrators without this
permission do not see the Case Management view, the Escalate action on findings, or the SOC
Escalation settings pages.

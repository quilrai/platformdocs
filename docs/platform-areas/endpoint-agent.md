---
sidebar_position: 11
sidebar_custom_props:
  icon: Laptop
---

# Endpoint Agent

Endpoint Agent extends QuilrAI visibility and protection to endpoint activity. It supports
deployment management, deployment status, and detection configurations for endpoint-observed apps
and browser processes.

## When To Use It

Use Endpoint Agent when you need to:

- Deploy endpoint coverage across managed devices.
- Track endpoint deployment status.
- Configure endpoint detection behavior by app or browser.
- Control DLP actions for endpoint-observed applications.
- Monitor Windows and macOS browser coverage.

## Key Capabilities

- Deployment management for endpoint agent rollout.
- Deployment status for endpoint coverage.
- Detection configuration rows for applications and browsers.
- Per-app DLP enabled state.
- Data-risk action dropdowns.
- Windows and macOS browser monitoring toggles.
- Dedicated endpoint policy rows for coding tools such as Cursor and Claude Code where configured.
- Access Control configuration per detection entry, enabling or disabling supported access-control
  features and supplying their required parameters from the Guardrails tab.
- Auto-save for detection configurations — changes are persisted automatically after a short pause
  with a live status indicator in the toolbar.
- A **Vulnerable Dependencies** tab for coding agents with dependency scanning support, listing
  dependency risk events and scheduled inventory scans.
- A **Context Savings** tab and Guardrails toggle for Claude Code that reduce verbose tool output
  before it reaches the agent's context window, with savings analytics.

## Detection Configurations

Endpoint configurations let administrators decide how the endpoint agent monitors specific apps and
browsers. Browser monitoring toggles are shown as customer-facing on/off controls, while the
platform preserves any backend exclusions that are outside the currently displayed browser labels.

Detection configurations auto-save. After any change, a status indicator in the page toolbar shows
the current save state (**Autosave pending**, **Saving...**, **Saved**, or **Save failed.
Retrying...**). If a save fails, it is retried automatically.

### Guardrails Tab

The Guardrails tab within each configuration drawer contains:

- **DLP settings** — enable or disable DLP and set data-risk category actions.
- **Desktop monitoring** — Windows and macOS browser monitoring controls.
- **Access Control** — one card per supported access-control feature. Each card has an enable/
  disable toggle and any required parameter fields (text, masked secret, numeric, toggle, or
  dropdown). Required fields are validated inline; a validation error blocks auto-save until
  corrected. The Access Control section is hidden entirely when no features apply to the selected
  configuration. Only features the admin interacts with in the current session are included in the
  save; untouched features remain at their previously saved values.
- **Tool output compression** — available for Claude Code. A toggle that token-reduces verbose
  tool output (git, docker, cargo, npm) before it reaches the agent's context window. The toggle
  saves with the same **Save** action as the rest of the Guardrails tab.

### Vulnerable Dependencies Tab

Available in the configuration drawer for coding agents with dependency scanning support (for
example, Claude Code), the **Vulnerable Dependencies** tab lists dependency events for the app:
package, version, ecosystem, status (vulnerable, clean, lookup failed, unscanned), severity,
advisory identifiers, source repository, the action taken, owner, and scan time. Events triggered
by a scheduled inventory scan are labeled **Inventory** / **Scheduled Scan** rather than a
blocked/warned/allowed decision, distinguishing routine inventory snapshots from live
install-time or manifest-write events. Summary cards show total dependencies, items needing
attention, vulnerable packages, scan count, and the last scan time. Admins can search by package
name and filter by ecosystem, status, severity, or a needs-attention-only toggle.

### Context Savings Tab

For Claude Code, a dedicated **Context Savings** tab shows the impact of tool output compression:
total bytes saved, an estimated token count saved, the average compression ratio, the number of
compression events, and a savings-over-time chart. The tab also surfaces the same **Tool output
compression** toggle available on the Guardrails tab. Data appears once compression has run on at
least one endpoint running the app; otherwise the tab shows an empty state.

## Main Workflows

1. Configure endpoint deployment and tenant-level management settings.
2. Monitor Deployment Status for rollout progress.
3. Open Detection Configurations.
4. Search for the app or browser configuration that needs adjustment.
5. Enable or disable DLP, update data-risk action behavior, and adjust platform-specific browser
   monitoring.
6. If the configuration supports Access Control features, open the Guardrails tab, enable the
   desired features, and supply any required parameters.
7. Changes save automatically. Review the toolbar status indicator to confirm the save completed,
   then review endpoint findings for operational impact.

## Related Platform Areas

- [Findings](./findings.md)
- [Browser Extension](./browser-extension.md)
- [AI Inventory](./ai-inventory.md)
- [Detection Models](./detection-models.md)

## Access Requirements

Endpoint Agent pages require Endpoint Agent permissions. Endpoint tabs appear only when endpoint is
enabled for the tenant.

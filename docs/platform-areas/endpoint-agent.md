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
- Dependency vulnerability scanning for supported coding agents, with enforcement settings and a
  dedicated ADLC (Agent Detection Lifecycle) tab for reviewing scanned dependency events.
- Auto-save for detection configurations — changes are persisted automatically after a short pause
  with a live status indicator in the toolbar.

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
- **Dependency security** — shown for supported coding agents (Claude Code, Cursor, Codex, and
  GitHub Copilot CLI/extension). Admins can enable dependency scanning, block dependencies with
  known vulnerabilities, and inform users when a newer version of a dependency is available. These
  settings save independently from the rest of the Guardrails tab.

### ADLC Tab

The ADLC (Agent Detection Lifecycle) tab appears alongside Guardrails for endpoint configurations
that support dependency scanning. It is a read-only view of scanned dependency events for the
selected application, including:

- Summary cards for total dependencies, dependencies needing attention, vulnerable packages, scan
  count, and last scan time.
- A table of dependency events with package, version, ecosystem, scan status (vulnerable, clean,
  lookup failed, unscanned), severity, advisory identifiers, the action taken (blocked, warned, or
  allowed) and its trigger, the user who triggered the event, and when it was scanned.
- Filters for package search, ecosystem, status, severity, and a **Needs attention only** toggle,
  plus pagination.

## Main Workflows

1. Configure endpoint deployment and tenant-level management settings.
2. Monitor Deployment Status for rollout progress.
3. Open Detection Configurations.
4. Search for the app or browser configuration that needs adjustment.
5. Enable or disable DLP, update data-risk action behavior, and adjust platform-specific browser
   monitoring.
6. If the configuration supports Access Control features, open the Guardrails tab, enable the
   desired features, and supply any required parameters.
7. For supported coding agents, enable dependency scanning in the Guardrails tab and choose
   whether to block vulnerable dependencies and inform users about newer versions, then open the
   ADLC tab to review scanned dependency events and filter for items that need attention.
8. Changes save automatically. Review the toolbar status indicator to confirm the save completed,
   then review endpoint findings for operational impact.

## Related Platform Areas

- [Findings](./findings.md)
- [Browser Extension](./browser-extension.md)
- [AI Inventory](./ai-inventory.md)
- [Detection Models](./detection-models.md)

## Access Requirements

Endpoint Agent pages require Endpoint Agent permissions. Endpoint tabs appear only when endpoint is
enabled for the tenant. The Dependency security controls and ADLC tab appear only for configurations
for supported coding agents (Claude Code, Cursor, Codex, and GitHub Copilot CLI/extension).

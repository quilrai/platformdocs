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
- Group & User Rules for scoping DLP behavior to a specific smart group or individual user.
- A Monitored Browsers tab summarizing per-browser coverage for the selected app or method.

## Detection Configurations

Endpoint configurations let administrators decide how the endpoint agent monitors specific apps and
browsers. Browser monitoring toggles are shown as customer-facing on/off controls, while the
platform preserves any backend exclusions that are outside the currently displayed browser labels.

Detection configurations auto-save. After any change, a status indicator in the page toolbar shows
the current save state (**Autosave pending**, **Saving...**, **Saved**, or **Save failed.
Retrying...**). If a save fails, it is retried automatically.

Each configuration drawer is organized into tabs: **Guardrails**, **Monitored Browsers**, and
**Group & User Rules**. The same drawer and tabs are available from Endpoint Detection
Configurations in Settings and from an Endpoint Agent asset's detail drawer in
[AI Inventory](./ai-inventory.md).

### Guardrails Tab

The Guardrails tab within each configuration drawer contains:

- **DLP settings** — enable or disable DLP and set data-risk category actions.
- **Desktop monitoring** — Windows and macOS browser monitoring controls.
- **Access Control** — one card per supported access-control feature. Each card has an enable/
  disable toggle and any required parameter fields (text, masked secret, numeric, toggle, or
  dropdown). Required fields are validated inline; a validation error blocks saving until
  corrected. The Access Control section is hidden entirely when no features apply to the selected
  configuration. Only features the admin interacts with in the current session are included in the
  save; untouched features remain at their previously saved values.

### Monitored Browsers Tab

The Monitored Browsers tab shows per-browser coverage for the selected app or method, broken out by
Windows and macOS. Admins can turn monitoring on or off for each detected browser without leaving the
tab.

### Group & User Rules Tab

The Group & User Rules tab lets admins create DLP overrides scoped to a specific smart group or
individual user, for either all methods in an app group or a single method.

- **Scope types:** Smart group or individual user (by email).
- **Overrides:** DLP enabled state, and data-risk and adversarial-risk category enablement and
  action (Monitor, Block, Justify) for the selected scope. Fields left unset inherit the app or
  method's default configuration.
- **Save behavior:** Each rule is created, edited, and deleted independently with its own save
  action — rules do not save with the rest of the configuration drawer.
- **Effective Settings preview:** Enter a user email or smart group to resolve the merged
  configuration that scope would receive.
- Available only when at least one tenant is resolved for the signed-in user.

## Main Workflows

1. Configure endpoint deployment and tenant-level management settings.
2. Monitor Deployment Status for rollout progress.
3. Open Detection Configurations.
4. Search for the app or browser configuration that needs adjustment.
5. Enable or disable DLP, update data-risk action behavior, and adjust platform-specific browser
   monitoring.
6. If the configuration supports Access Control features, open the Guardrails tab, enable the
   desired features, and supply any required parameters.
7. Use Monitored Browsers to confirm per-browser coverage, and Group & User Rules to scope
   overrides to a smart group or individual user when needed.
8. Changes save automatically. Review the toolbar status indicator to confirm the save completed,
   then review endpoint findings for operational impact.

## Related Platform Areas

- [Findings](./findings.md)
- [Browser Extension](./browser-extension.md)
- [AI Inventory](./ai-inventory.md)
- [Detection Models](./detection-models.md)

## Access Requirements

Endpoint Agent pages require Endpoint Agent permissions. Endpoint tabs appear only when endpoint is
enabled for the tenant.

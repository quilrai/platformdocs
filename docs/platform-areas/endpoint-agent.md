---
sidebar_position: 12
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
- Application Configuration screen for allowing or blocking any discovered application, scoped to
  everyone, a smart group, or a single user.

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

## Application Configuration

The Application Configuration tab lets admins allow or block any discovered application at the
endpoint level, independently of the per-app DLP and browser settings in Detection
Configurations.

- **Application** — chosen from discovered applications; the picker excludes system components,
  which the agent refuses to terminate regardless of policy.
- **Action** — Allow or Block. Block terminates the app and shows the agent's on-device popup
  automatically; that behavior is not a per-rule setting.
- **Scope** — one of:
  - **Everyone** — applies tenant-wide.
  - **Smart group** — applies to members of a selected [Smart Group](./smart-groups.md). Group
    membership is managed on the Smart Groups screen, not here; changing membership re-targets the
    rule without editing it.
  - **User** — applies to a single user, matched against the email the device reports,
    case-insensitively.

Rules can be edited later — action and scope can change, but the application and OS are fixed for
an existing rule; to change the application, remove the rule and add a new one. Rules can also be
removed. The rules table supports search and filtering by action (All, Allow, Block).

**Precedence** is user > smart group > everyone, applied per application. A user- or group-scoped
Allow therefore overrides a tenant-wide Block, so scoped Allow rules should be used as deliberate
exceptions. When a user belongs to two smart groups with conflicting rules for the same
application, the rule whose action changed most recently wins; there is no ranking between groups.
Rules authored earlier from the discovery screen, before scoped rules existed, continue to apply
at the lowest precedence.

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
8. To allow or block an application outright, open Application Configuration, add a rule with the
   desired action and scope, and review precedence before relying on a scoped Allow to override a
   tenant-wide Block.

## Related Platform Areas

- [Findings](./findings.md)
- [Browser Extension](./browser-extension.md)
- [AI Inventory](./ai-inventory.md)
- [Detection Models](./detection-models.md)
- [Smart Groups](./smart-groups.md)

## Access Requirements

Endpoint Agent pages require Endpoint Agent permissions. Endpoint tabs appear only when endpoint is
enabled for the tenant.

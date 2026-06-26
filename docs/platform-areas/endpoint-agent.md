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
- Group & User Rules — per smart-group and per-user DLP overrides within each endpoint application
  configuration, with an Effective Settings preview that resolves the full configuration for a
  given user.

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

### Group & User Rules Tab

The **Group & User Rules** tab lets admins create DLP override rules scoped to a smart group or an
individual user within a specific endpoint application. Rules are partial: any field not set in a
rule inherits the base endpoint guardrail configuration.

**Creating a rule**:

1. Open the configuration drawer for an endpoint app and select the **Group & User Rules** tab. A
   **Group & User Rules** shortcut button on each app card opens this tab directly.
2. Choose a **Target** — all methods in the app or a specific endpoint method.
3. Choose a **Scope type** — Smart group or User.
   - For smart groups, select from the searchable smart-group catalog.
   - For users, enter the user's email address.
4. Click **Create rule** to open the rule editor.

**Rule editor**:

- **DLP detections** — Enable or Disable the DLP detection state for this scope and target.
  Selecting **Use inherited state** removes the override and falls back to the base configuration.
- **Category overrides** — Switch between **Data risks** and **Adversarial risks** tabs to see
  individual categories. For each category, admins can:
  - Enable or Disable monitoring for this scope (or use the inherited state).
  - Set the action to **Monitor**, **Block**, or **Justify** (or use the inherited action).
- Each override shows the inherited value from the base configuration for reference.
- Click **Save rule** to persist the rule. Scoped rules save independently and are not affected by
  the page-level auto-save.

**Effective Settings preview**:

Enter a user email and, optionally, select an active smart group to preview how all saved rules
resolve for that user. The preview shows the resolved DLP state, data-risk category actions,
adversarial-risk category actions, and which rule scopes were applied. The preview uses saved rules
only; unsaved drafts are not included.

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
8. To apply different DLP behavior for specific groups or users, open the **Group & User Rules**
   tab (or click the **Group & User Rules** button on the app card). Create a rule, choose a smart
   group or user scope, configure the desired DLP and category overrides, and click **Save rule**.
   Use the **Effective Settings** preview to confirm the resolved configuration for a given user
   before deploying.

## Related Platform Areas

- [Findings](./findings.md)
- [Browser Extension](./browser-extension.md)
- [AI Inventory](./ai-inventory.md)
- [Detection Models](./detection-models.md)

## Access Requirements

Endpoint Agent pages require Endpoint Agent permissions. Endpoint tabs appear only when endpoint is
enabled for the tenant.

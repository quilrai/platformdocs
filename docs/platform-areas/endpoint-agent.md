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
- Restrict which file types or labeled files can be uploaded to a monitored application.

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
- File Restrictions — extension- and label-based upload rules per application, with smart-group
  and user-level overrides.
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

### File Restrictions Tab

The File Restrictions tab, shown alongside Guardrails in the configuration drawer, controls file
uploads to the selected application independently of DLP detections:

- **Restriction state** — a top-level on/off switch. Rules can be authored while restrictions are
  off; they are saved but not enforced until the switch is turned on.
- **File rules** — each rule matches on one property, either the file's **extension** (matches
  values in or not in a list) or a **file label** carried inside the file itself, such as a
  sensitivity or classification label (matches equals, does not equal, is in, is not in, contains,
  or does not contain). Each rule has one action: **Monitor**, **Block**, or **Justify** (require
  the user to provide a justification before the upload proceeds).
- Rules are evaluated **first-match-wins**, in the order they are listed.
- File Restrictions run independently of sensitive-data (DLP) detections. When both a file
  restriction and a DLP detection apply to the same upload, the more restrictive action wins.
- Tenant-level rules apply to every method surface of the selected application and save
  automatically along with the rest of the configuration — there is no separate Save button.

### Group & User Rule Overrides

The **Group & User Rules** tab lets admins scope either Guardrails or File Restrictions rules to a
specific smart group or user for a given application, overriding the tenant-level default for
that scope. Overrides are saved explicitly with a **Save rule** action, separate from the
auto-saving tenant-level configuration.

## Main Workflows

1. Configure endpoint deployment and tenant-level management settings.
2. Monitor Deployment Status for rollout progress.
3. Open Detection Configurations.
4. Search for the app or browser configuration that needs adjustment.
5. Enable or disable DLP, update data-risk action behavior, and adjust platform-specific browser
   monitoring.
6. If the configuration supports Access Control features, open the Guardrails tab, enable the
   desired features, and supply any required parameters.
7. To restrict uploads by file type or file label, open the File Restrictions tab, turn on
   restrictions, and add rules with the desired action.
8. To scope a rule to one smart group or user, open Group & User Rules, choose Guardrails or File
   Restrictions, select a target, and save the override.
9. Changes to tenant-level settings save automatically; review the toolbar status indicator to
   confirm the save completed. Group & User Rules overrides save when you choose Save rule. Then
   review endpoint findings for operational impact.

## Related Platform Areas

- [Findings](./findings.md)
- [Browser Extension](./browser-extension.md)
- [AI Inventory](./ai-inventory.md)
- [Detection Models](./detection-models.md)

## Access Requirements

Endpoint Agent pages require Endpoint Agent permissions. Endpoint tabs appear only when endpoint is
enabled for the tenant.

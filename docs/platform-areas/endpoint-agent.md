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
- File Restrictions tab for controlling uploads by file extension or file label, with Monitor,
  Block, or Justify actions.
- Group & User Rules tab for overriding DLP and file-restriction behavior for specific smart groups
  or users.
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

The File Restrictions tab within each app's configuration drawer controls file upload behavior:

- A tenant-level **File upload restrictions** toggle turns enforcement on or off for the app. Rules
  can be created and saved while the toggle is off; they are stored but not enforced until it is
  turned on.
- Rules match on **file extension** or on a **file label** carried inside the file, with an action
  of **Monitor**, **Block**, or **Justify** (upload allowed only after the user provides a
  justification).
  - File extension matching uses the single canonical type detected from the file's own bytes, not
    the file name — so a rule can only match one extension at a time and does not match compound
    patterns such as `.tar.gz`.
- Rules apply to the upload event across every monitored surface of the app and run independently
  of sensitive-data (DLP) detections. When both a file rule and a data-risk detection apply to the
  same upload, the more restrictive action wins.
- Rule order matters — evaluation is first-match-wins — and the editor flags any rule that is fully
  shadowed by an earlier rule so it can be reordered or removed.

### Group & User Rules Tab

The Group & User Rules tab lets admins override DLP and file-restriction behavior for specific
smart groups or users, inheriting the app's tenant-level configuration by default.

## Main Workflows

1. Configure endpoint deployment and tenant-level management settings.
2. Monitor Deployment Status for rollout progress.
3. Open Detection Configurations.
4. Search for the app or browser configuration that needs adjustment.
5. Enable or disable DLP, update data-risk action behavior, and adjust platform-specific browser
   monitoring.
6. If the configuration supports Access Control features, open the Guardrails tab, enable the
   desired features, and supply any required parameters.
7. To restrict uploads by file type, open the File Restrictions tab, turn on file upload
   restrictions, and add rules by file extension or file label.
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

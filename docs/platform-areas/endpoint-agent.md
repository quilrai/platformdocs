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
- Remote log collection — a tenant-level toggle that lets admins trigger and download diagnostic
  log bundles from selected devices, directly from the Deployment Status table.

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

## Remote Log Collection

Remote log collection lets admins pull diagnostic logs from a device's endpoint agent on demand,
without waiting on the user, for troubleshooting deployment or detection issues.

- **Enable the capability:** Under Deployment Management, the **Remote Log Collection** card has an
  **Enable Remote Log Collection** toggle. This is off by default and controls the feature for the
  whole tenant. When it is off, the Deployment Status table shows no remote-log controls.
- **Trigger a pull:** Once enabled, a **Remote Logs** button appears in the Deployment Status
  table toolbar. Select up to 5 devices in the table, then choose **Trigger Remote Pull**. Each
  selected device receives one collection request; a device that already has a pull in progress is
  skipped automatically and reported separately so a batch selection is never silently dropped.
- **Track progress:** The **Remote Logs** menu lists recent pulls with a status for each: waiting
  for device, device acknowledged, collecting logs, completed, failed, or expired. A pull that gets
  no response from the device after about 15 minutes is called out as such. The list refreshes
  automatically while a pull is in progress and also updates when the page regains focus, so
  another admin's pull or one started earlier is reflected without a manual refresh.
- **Download the result:** Completed pulls can be downloaded as a zip bundle directly from the
  **Remote Logs** menu. Collected logs cover a 72-hour window and exclude raw request/response
  bodies by default.

Triggering a pull requires device-level update permission for Endpoint Agent; the tenant toggle
requires tenant-level update permission. Without the required permission, the trigger option is
shown disabled rather than hidden.

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
8. To troubleshoot a specific device, enable Remote Log Collection under Deployment Management,
   select the device on the Deployment Status table, trigger a remote pull, and download the
   bundle once it completes.

## Related Platform Areas

- [Findings](./findings.md)
- [Browser Extension](./browser-extension.md)
- [AI Inventory](./ai-inventory.md)
- [Detection Models](./detection-models.md)

## Access Requirements

Endpoint Agent pages require Endpoint Agent permissions. Endpoint tabs appear only when endpoint is
enabled for the tenant. Enabling or disabling Remote Log Collection for the tenant requires
tenant-level update permission; triggering a remote pull requires device-level update permission.

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
- Dangerous permission controls for Claude Code: per-permission block toggles that stop high-risk
  actions on the endpoint before they run.

## Detection Configurations

Endpoint configurations let administrators decide how the endpoint agent monitors specific apps and
browsers. Browser monitoring toggles are shown as customer-facing on/off controls, while the
platform preserves any backend exclusions that are outside the currently displayed browser labels.

## Dangerous Permissions

The **Dangerous Permissions** section appears in the Guardrails tab of a detection configuration
card when the selected method tab is Claude Code. It lists high-risk actions that Claude Code can
perform on the endpoint, such as file deletion or shell execution, each shown with a description
and representative examples.

Admins can set each permission to **Allowed** or **Blocked** using a per-row toggle. Blocked
actions are intercepted by the endpoint agent before they execute. A badge in the section header
shows the number of currently blocked permissions out of the total. Changes are saved automatically
with debounced writes, and a status indicator confirms each save. If another admin updates the
policy at the same time, the UI detects the conflict and reloads the latest state.

Users without endpoint configuration update permission see the toggles in read-only mode.

## Main Workflows

1. Configure endpoint deployment and tenant-level management settings.
2. Monitor Deployment Status for rollout progress.
3. Open Detection Configurations.
4. Search for the app or browser configuration that needs adjustment.
5. Enable or disable DLP, update data-risk action behavior, and adjust platform-specific browser
   monitoring.
6. For Claude Code configurations, open the Guardrails tab and use **Dangerous Permissions** to
   block high-risk actions on managed endpoints.
7. Save changes and review endpoint findings for operational impact.

## Related Platform Areas

- [Findings](./findings.md)
- [Browser Extension](./browser-extension.md)
- [AI Inventory](./ai-inventory.md)
- [Detection Models](./detection-models.md)

## Access Requirements

Endpoint Agent pages require Endpoint Agent permissions. Endpoint tabs appear only when endpoint is
enabled for the tenant.

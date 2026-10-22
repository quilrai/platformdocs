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
- Endpoint Configuration (separately licensed) for managing the redirector, proxy auto-config
  (PAC), and upstream proxy that route an endpoint's traffic to inspection.

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

## Endpoint Configuration

Endpoint Configuration is a separately licensed tab under Settings > Endpoint that controls the
three pieces of remote state deciding how an endpoint's traffic reaches inspection. The tab, its
route, and its data fetch are all gated on the same license flag, so an unlicensed tenant sees no
tab and generates no traffic to the underlying service.

- **Redirector** — choose between the user-mode packet redirector (WinDivert-based capture of
  egress traffic on monitored ports) and the kernel-mode Quilr redirector (a WFP driver that
  redirects AI-bound HTTPS to the local inspection proxy). Each has its own enable state and
  version, so switching between them never disturbs the other's stored configuration.
- **Proxy auto-config (PAC)** — controls what the PAC script hands to browsers. A tenant is either
  **Managed**, where the script is generated from app monitoring's published host sets and cannot
  be hand-edited, or **Manual**, a legacy hand-written script that app monitoring can no longer
  publish to. Manual tenants are offered a guided import that previews the host vocabulary it found
  before converting to Managed.
- **Upstream proxy** — where the endpoint sends traffic it has re-originated, including the
  authentication method: none, username and password, Kerberos/SPNEGO, or NTLM. Clearing the
  address is the supported way to go direct.

Saves publish a new version to endpoints. A save that resolves to no effective change is reported
as unchanged rather than as a successful rollout, both in the toast and inline, so admins are never
told a rollout happened when it did not. Admins without update permission for the endpoint agent
see the panels in read-only mode.

Endpoint Configuration requires the endpoint agent plus a separate **Endpoint Configuration**
license flag; having the endpoint agent alone does not grant access.

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
enabled for the tenant. The Endpoint Configuration tab additionally requires its own tenant license
flag; it does not appear for tenants that only have the endpoint agent.

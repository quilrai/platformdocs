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
- Configure access-control features for supported endpoint applications.
- Monitor Windows and macOS browser coverage.

## Key Capabilities

- Deployment management for endpoint agent rollout.
- Deployment status for endpoint coverage.
- Detection configuration rows for applications and browsers.
- Per-app DLP enabled state.
- Data-risk action dropdowns.
- Windows and macOS browser monitoring toggles.
- Dedicated endpoint policy rows for coding tools such as Cursor and Claude Code where configured.
- Per-app Access Control configuration for apps that support access-control features.

## Detection Configurations

Endpoint configurations let administrators decide how the endpoint agent monitors specific apps and
browsers. Browser monitoring toggles are shown as customer-facing on/off controls, while the
platform preserves any backend exclusions that are outside the currently displayed browser labels.

### Access Control

When an application's configuration includes supported access-control features, an **Access
Control** section appears in the Guardrails tab of the detection-configuration drawer. The section
is server-driven: it renders only for apps that report one or more supported features and is absent
for apps that do not.

Each supported feature is displayed as a card showing:

- The feature name and an explanatory description.
- An **Enabled / Disabled** status badge and a toggle to change that state.
- Any configurable parameters defined for the feature, such as text inputs, numeric fields, masked
  secret fields, dropdown selectors, or boolean toggles.

Admins change values directly in the card. Only features that were actively toggled or edited
during the current session are included in the save request; features that were not touched keep
their previously saved values.

The page-level **Save** button is blocked until all required parameters in any touched feature have
valid values. A required field is indicated with a red asterisk; a validation error message appears
below the field when the value is missing or does not match the expected format.

Admins without update permission see the Access Control section in read-only mode — controls are
visible but cannot be changed.

## Main Workflows

1. Configure endpoint deployment and tenant-level management settings.
2. Monitor Deployment Status for rollout progress.
3. Open Detection Configurations.
4. Search for the app or browser configuration that needs adjustment.
5. Enable or disable DLP, update data-risk action behavior, and adjust platform-specific browser
   monitoring.
6. If the app supports access-control features, expand the Guardrails tab to find the Access
   Control section, toggle features on or off, and fill in any required parameters.
7. Save changes and review endpoint findings for operational impact.

## Related Platform Areas

- [Findings](./findings.md)
- [Browser Extension](./browser-extension.md)
- [AI Inventory](./ai-inventory.md)
- [Detection Models](./detection-models.md)

## Access Requirements

Endpoint Agent pages require Endpoint Agent permissions. Endpoint tabs appear only when endpoint is
enabled for the tenant.

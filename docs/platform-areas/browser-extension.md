---
sidebar_position: 10
sidebar_custom_props:
  icon: MonitorSmartphone
---

# Browser Extension

Browser Extension helps organizations discover and govern browser-based AI and SaaS usage. It gives
teams deployment workflows, tenant-level deployment controls, user-level status, and whitelisting.

## When To Use It

Use Browser Extension when you need to:

- Deploy the QuilrAI browser extension to users.
- Track extension deployment status.
- Enable, disable, or force updates for the tenant.
- Control deployment modes.
- Configure whitelisting behavior.
- Monitor user, extension, and agent status where available.

## Key Capabilities

- Deployment setup for managed browser-extension rollout.
- Deployment management for tenant-level enablement and update controls.
- Deployment status tables with user, group, location, department, persona, and extension state.
- Whitelisting configuration.
- Support for managed deployment approaches such as Google Business Profile, MDM, Jamf, or Intune
  where configured.
- Export support for deployment status.

## Deployment Management

Deployment Management lets administrators control tenant-level behavior, including extension
enablement, force update, selected mode, and persona-related options. Some persona capabilities
depend on forced login and background tab reading.

## Main Workflows

1. Connect the required identity or management integration.
2. Configure deployment method and rollout settings.
3. Use Deployment Management to enable or adjust tenant-level behavior.
4. Monitor Deployment Status to confirm coverage.
5. Configure whitelist settings for approved behavior.
6. Export deployment status when operational reporting is required.

## Related Platform Areas

- [Findings](./findings.md)
- [Endpoint Agent](./endpoint-agent.md)
- [Integrations](./integrations.md)
- [Audit Log And Exports](./audit-log-and-exports.md)

## Access Requirements

Browser Extension pages require Extension permissions. Some deployment and status actions depend on
additional create, update, export, or force-update scopes.

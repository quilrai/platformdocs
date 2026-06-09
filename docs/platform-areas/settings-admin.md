---
sidebar_position: 13
sidebar_custom_props:
  icon: Settings
---

# Settings And Administration

Settings and Administration provide the tenant, policy, user, communication, gateway, extension,
endpoint, compliance, and user-interaction configuration surfaces for QuilrAI.

## When To Use It

Use Settings when administrators need to:

- Configure organizational context.
- Manage organizational policies.
- Create and maintain smart groups.
- Manage platform users and access.
- Configure Browser Extension, Endpoint Agent, and AI Gateway settings.
- Customize end-user interaction content and links.
- Configure compliance service credentials.

## Main Settings Areas

- **Organizational Context:** General settings, organizational policies, smart groups, profile, and
  manage users.
- **Browser Extension:** Deployment, deployment management, deployment status, and whitelist.
- **Endpoint:** Deployment management, deployment status, and detection configurations.
- **AI Gateway:** LLM Gateway and MCP Gateway settings.
- **User Interaction Hub:** Review user responses and customize popup content, policies, visual
  styling, and user-facing links.
- **Compliance:** Configure provider credentials used by compliance services, including OpenAI and
  Claude where enabled.

## Organizational Context

Organizational Context captures tenant-level configuration that helps QuilrAI interpret policy,
users, groups, and organizational priorities. It includes general settings, policies, smart groups,
profile information, and user management where permitted.

## User Interaction Hub

User Interaction Hub lets teams customize what end users see in QuilrAI interactions.
Administrators can review user responses and configure popup content, policy links, and visual
styling that appear in user-facing prompts or justifications.

## Compliance

Compliance includes provider key setup and key management for compliance services. Current settings
include OpenAI Compliance key management and Claude-related compliance configuration where enabled.
Administrators with write access can save and revoke registered keys.

## Related Platform Areas

- [Browser Extension](./browser-extension.md)
- [Endpoint Agent](./endpoint-agent.md)
- [AI Gateway](./ai-gateway.md)
- [Controls](./controls.md)
- [Findings](./findings.md)

## Access Requirements

Settings visibility is permission-based. Each nested settings area has its own resource requirement,
including Tenant, Organizational Policy, Smart Group, User Management, Extension, Endpoint Agent,
AI Gateway, Template, and Compliance permissions.

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

### Smart Groups

Smart Groups is a dedicated top-level page accessible from the main sidebar for admins with Smart
Group permission. It provides a searchable, paginated table of all smart groups.

From the Smart Groups page, admins can:

- **Search** for groups by name using the search bar.
- **Create** a new smart group using the **Create Smart Group** button (requires Create permission).
  Groups can be created with or without an initial set of users.
- **Delete** one or more groups by selecting them and clicking **Delete** (requires Delete
  permission). A confirmation dialog shows which groups will be removed.
- **Drill into a group** by clicking a row to open a per-group drawer. The drawer shows the group's
  member users in a paginated, searchable table. Within the drawer, admins can:
  - **Add users** to the group using **Add Users to Smart Group** — opens a modal that lists users
    not already in the group and lets the admin select and add them.
  - **Remove users** from the group using **Delete Users from Smart Group** — available when one or
    more members are selected in the drawer table.

Smart Groups is also reachable via the platform Cmd+K quick search.

The Smart Groups submenu that was previously available in the Users page Actions dropdown has been
removed. All smart group management is now handled from the dedicated Smart Groups page.

### Manage Users

Manage Users lets administrators create, edit, and remove platform users and assign roles. In
addition to name and role editing, admins with Admin or Super Admin roles can configure LLM Gateway
app access for users assigned the AI Gateway Admin role. The **App Access** control appears inline
when creating a new user or editing an existing one, and lets the admin choose between allowing all
LLM Gateway apps or restricting access to a specific subset.

The App Access control is also available directly in the users table — for AI Gateway Admin users,
a compact selector shows the current access state and can be updated without opening the full edit
panel.

### Timezone Display Preference

Administrators can select a timezone for displaying timestamps across the platform. The preference
is saved to the database and loaded on sign-in, so it persists across browsers and devices.

The timezone selector in the Display section of General Settings provides a searchable dropdown of
all available timezones.

The selected timezone applies across findings, users, applications, accounts, AI inventory, Browser Extensions, Controls, Audit Log, Exports, AI Gateway.

A hover tooltip shows the alternate time (UTC when a non-UTC timezone is active; local browser time when UTC
is selected) for any displayed timestamp.

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
- [LLM Gateway](./llm-gateway.md)
- [Controls](./controls.md)
- [Findings](./findings.md)

## Access Requirements

Settings visibility is permission-based. Each nested settings area has its own resource requirement,
including Tenant, Organizational Policy, Smart Group, User Management, Extension, Endpoint Agent,
AI Gateway, Template, and Compliance permissions.

---
sidebar_position: 1
sidebar_label: Microsoft Entra ID
sidebar_custom_props:
  icon: KeyRound
---

# Microsoft Entra ID

Microsoft Entra ID (formerly Azure AD) secures identities and access, enhanced by Quilr's exclusive, advanced Identity Security Checks.

- **Category:** Identity
- **Integration Type:** OAuth 2.0
- **Vendor:** Microsoft

## Setup

1. Go to **Integrations** and open the **Available** tab.
2. Click **+ Add** on the **Microsoft Entra ID** tile.
3. Sign in with a Microsoft Entra ID administrator account and consent to the requested permissions.
4. Click **Allow** to authorize the connection.

## Required Scopes

| Scope Group | Permissions | Purpose |
|-------------|-------------|---------|
| User Information | `openid`, `profile`, `offline_access`, `User.Read.All`, `Domain.Read.All` | Allows Platform to access user details from Microsoft Entra ID to help improve your organization's security posture. |
| Enterprise Applications | `Directory.Read.All`, `Application.Read.All` | Allows Platform to read application details from Microsoft Entra ID to help improve your organization's security posture. |

### Scope justifications (Microsoft Entra / Graph)


| Permission | Usage |
|------------|--------|
| `openid` | Completes the OAuth consent / sign-in flow when an admin connects Microsoft Entra ID (Microsoft: **Sign you in**; ID token `sub` claim). |
| `profile` | Identifies the consenting admin from ID token profile claims (name, preferred username, object ID). |
| `offline_access` | Obtains a refresh token so fabrics can call Microsoft Graph on a schedule without re-prompting the admin (Microsoft: **Maintain access to data you have given it access to**). |
| `User.Read.All` | Lists and reads full user profiles and managers (`GET /users`, `GET /users/{id}`, `GET /users/{id}/manager`) for identity ingestion and security checks. |
| `Domain.Read.All` | Reads verified tenant domain properties so the platform can correlate the connected Entra tenant with organizational domains. |
| `Directory.Read.All` | Reads directory data such as groups and membership (`GET /groups`, members / delta), directory roles, and related objects used by identity fabric and IDP → Smart Group. |
| `Application.Read.All` | Discovers enterprise applications via service principals (`GET /servicePrincipals`) and app role assignments (`appRoleAssignedTo`) for application posture. |

## What This Integration Does

- Collects users along with their department, group, and role assignments.
- Discovers enterprise applications and their access and configuration.
- Surfaces identity security posture through Quilr's Identity Security Checks.
- Mirrors selected Entra ID groups into Quilr [Smart Groups](../../smart-groups.md) through the
  **IDP to Smart Group** utility.

## IDP to Smart Group

After Microsoft Entra ID is connected, admins can mirror Entra groups into Quilr smart groups from
the integration configure screen. Mirrored membership is matched by email. Entra members that do
not already exist as Quilr users are skipped.

### Setup

1. Go to **Integrations** and open **Connected** (or **Available** if you are still configuring the
   instance).
2. Open the **Microsoft Entra ID** integration.
3. Confirm an instance exists and Microsoft consent is still valid. The utility needs a connected
   instance to load Entra groups.
4. In the **Utilities** section, open **IDP to Smart Group**.
5. Under **Entra groups**, either:
   - Type in the search box to find groups by name, or scroll the list to load more groups, then
     select individual groups, or
   - Choose **All groups** to mirror every Entra group, including groups created later.
6. Click **Save**.

Selected groups appear under **Smart groups to mirror**. After save, the mirrored groups are
available on the [Smart Groups](../../smart-groups.md) screen with the label
**Converted from IDP group**.

Entra groups load a page at a time, with the next page loading automatically as you scroll. Search
runs against Entra directly, so results include matches beyond the groups already loaded on
screen — this keeps the picker responsive for tenants with large numbers of Entra groups.

### Important Behaviors

| Behavior | Detail |
|----------|--------|
| One-way save | A group that has been saved stays mirrored. You can add groups later, but you cannot remove a saved mirrored group from this utility. |
| All groups | When **All groups** is saved, every current and future Entra group is mirrored. The selection cannot be narrowed from the utility afterward. |
| Membership matching | Members are matched by email. Emails with no matching Quilr user are skipped. |
| Name conflicts | An individually selected Entra group cannot be added if a Quilr smart group with the same display name already exists. Rename the existing smart group first, or choose a different Entra group. This check does not run against the full directory when **All groups** is chosen. |
| Membership management | Membership for IDP-converted groups is managed through this utility, not by manually adding or removing users on the Smart Groups screen. |
| Deletion | Groups converted from IDP cannot be deleted from the Smart Groups screen. |

### Related Platform Areas

- [Smart Groups](../../smart-groups.md)
- [Controls](../../controls.md)
- [MCP Gateway](../../mcp-gateway.md)
- [LLM Gateway](../../llm-gateway.md)

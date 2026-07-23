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

## Configuration Options

When creating or editing a Microsoft Entra ID instance, admins can control what the connector
collects:

- **Data collection scope:** Choose **Users**, **Apps**, or both. Selecting only Users skips
  enterprise application discovery for that instance; selecting only Apps skips directory user
  collection. Both scopes are selected by default, and at least one scope must always remain
  selected.
- **Sync app status details:** An opt-in switch available when **Apps** is selected. When on,
  each sync refreshes application approval status and criticality from Microsoft Entra ID. When
  off (the default), previously set approval status and criticality values are preserved between
  syncs.
- **Configure user condition:** When the instance's forwarding scope is not set to send all audit
  events, an additional filter section lets admins add attribute-based conditions that scope which
  users are collected. This section is specific to Microsoft Entra ID and is not shown for other
  Microsoft-ecosystem integrations (Azure Cloud, Microsoft Intune, Microsoft Calendar, Microsoft
  Purview) that share the same underlying connection.

## Required Scopes

| Scope Group | Permissions | Purpose |
|-------------|-------------|---------|
| User Information | `openid`, `profile`, `offline_access`, `User.Read.All`, `User.ReadBasic.All`, `User.Read`, `Domain.Read.All` | Allows Quilr to access user details from Microsoft Entra ID to help improve your organization's security posture. |
| Enterprise Applications | `Directory.Read.All`, `Application.Read.All`, `AuditLog.Read.All`, `Reports.Read.All` | Allows Quilr to read application details, audit logs, and reports from Microsoft Entra ID to help improve your organization's security posture. |
| Devices | `DeviceManagementManagedDevices.Read.All` | Allows Quilr to read device details from Microsoft Entra ID to help improve your organization's security posture. |

## What This Integration Does

- Collects users along with their department, group, and role assignments.
- Discovers enterprise applications and their access and configuration.
- Surfaces identity security posture through Quilr's Identity Security Checks.

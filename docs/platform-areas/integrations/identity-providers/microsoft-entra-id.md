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
| User Information | `openid`, `profile`, `offline_access`, `User.Read.All`, `User.ReadBasic.All`, `User.Read`, `Domain.Read.All` | Allows Quilr to access user details from Microsoft Entra ID to help improve your organization's security posture. |
| Enterprise Applications | `Directory.Read.All`, `Application.Read.All`, `AuditLog.Read.All`, `Reports.Read.All` | Allows Quilr to read application details, audit logs, and reports from Microsoft Entra ID to help improve your organization's security posture. |
| Devices | `DeviceManagementManagedDevices.Read.All` | Allows Quilr to read device details from Microsoft Entra ID to help improve your organization's security posture. |

## What This Integration Does

- Collects users along with their department, group, and role assignments.
- Discovers enterprise applications and their access and configuration.
- Surfaces identity security posture through Quilr's Identity Security Checks.

---
sidebar_position: 1
sidebar_label: Microsoft Intune
sidebar_custom_props:
  icon: MonitorSmartphone
---

# Microsoft Intune

This connector integrates Microsoft Intune with Quilr, allowing secure access to device information, application details, and device compliance policies.

- **Category:** Mobile Device Management (MDM)
- **Integration Type:** OAuth 2.0
- **Vendor:** Microsoft

## Setup

1. Go to **Integrations** and open the **Available** tab.
2. Click **+ Add** on the **Microsoft Intune** tile.
3. Sign in with a Microsoft administrator account and consent to the requested permissions.
4. Click **Allow** to authorize the connection.

## Required Scopes

| Scope Group | Permissions | Purpose |
|-------------|-------------|---------|
| Device Information | `openid`, `profile`, `offline_access`, `DeviceManagementManagedDevices.Read.All` | Allows Quilr to access device details in Microsoft Intune to help improve your organization's security posture. |
| Device Applications | `DeviceManagementApps.Read.All` | Allows Quilr to read application details from Microsoft Intune to help improve your organization's security posture. |
| Device Policy & Configuration | `DeviceManagementConfiguration.Read.All` | Allows Quilr to read device compliance policies and configuration from Microsoft Intune to help improve your organization's security posture. |

## What This Integration Does

- Monitors managed device inventory.
- Tracks device compliance status.
- Identifies non-compliant devices.

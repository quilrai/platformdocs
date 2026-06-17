---
sidebar_position: 1
sidebar_label: Microsoft Purview
sidebar_custom_props:
  icon: ShieldCheck
---

# Microsoft Purview

This connector integrates Microsoft Purview with Quilr, allowing Quilr to manage data governance and compliance.

- **Category:** Data Governance
- **Integration Type:** OAuth 2.0
- **Vendor:** Microsoft

## Setup

1. Go to **Integrations** and open the **Available** tab.
2. Click **+ Add** on the **Microsoft Purview** tile.
3. Sign in with a Microsoft administrator account and consent to the requested permissions.
4. Click **Allow** to authorize the connection.

## Required Scopes

| Scope Group | Permissions | Purpose |
|-------------|-------------|---------|
| Purview Access | `openid`, `profile`, `offline_access`, `InformationProtectionPolicy.Read` | Allows Quilr to manage Microsoft Purview for user data protection policies. |

## What This Integration Does

- Reads Microsoft Purview information protection policies.
- Supports data governance and compliance workflows.
- Provides visibility into data protection posture.

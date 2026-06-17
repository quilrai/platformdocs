---
sidebar_position: 2
sidebar_label: Google Drive
sidebar_custom_props:
  icon: FileText
---

# Google Drive

Quilr integrates with Google Drive using secure Google Login, enabling enhanced collaboration, productivity, and seamless access to cloud-based tools and services.

- **Category:** Storage & Collaboration
- **Integration Type:** OAuth 2.0
- **Vendor:** Google

## Setup

1. Go to **Integrations** and open the **Available** tab.
2. Click **+ Add** on the **Google Drive** tile.
3. Sign in with your Google account and grant the requested access.
4. Click **Allow** to authorize the connection.

## Required Scopes

| Scope Group | Permissions | Purpose |
|-------------|-------------|---------|
| Drive Access | `openid`, `email`, `profile`, `drive.readonly` | Allows Quilr to access user and Drive information from Google to enhance your organization's security posture. |

## What This Integration Does

- Monitors file sharing patterns and permissions.
- Identifies sensitive files shared externally.
- Tracks document access and collaboration.
- Provides visibility into cloud storage security.

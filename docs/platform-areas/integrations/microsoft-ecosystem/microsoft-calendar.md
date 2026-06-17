---
sidebar_position: 2
sidebar_label: Microsoft Calendar
sidebar_custom_props:
  icon: Activity
---

# Microsoft Calendar

This connector integrates Microsoft Calendar with Quilr, allowing Quilr to manage and access user calendar information for scheduling and coordination.

- **Category:** Calendar
- **Integration Type:** OAuth 2.0
- **Vendor:** Microsoft

## Setup

1. Go to **Integrations** and open the **Available** tab.
2. Click **+ Add** on the **Microsoft Calendar** tile.
3. Sign in with a Microsoft account and consent to the requested permissions.
4. Click **Allow** to authorize the connection.

## Required Scopes

| Scope Group | Permissions | Purpose |
|-------------|-------------|---------|
| Calendar Access | `openid`, `profile`, `offline_access`, `Calendars.Read`, `Calendars.ReadWrite` | Allows Quilr to manage Microsoft Calendar for user scheduling and meeting coordination. |

## What This Integration Does

- Reads user calendar events and schedules.
- Enables calendar-based workflow automation.
- Provides calendar visibility for coordination.

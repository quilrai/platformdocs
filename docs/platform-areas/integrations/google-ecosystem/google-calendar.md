---
sidebar_position: 1
sidebar_label: Google Calendar
sidebar_custom_props:
  icon: Activity
---

# Google Calendar

This connector integrates Google Calendar with Quilr, allowing Quilr to manage and access user calendar information for scheduling and coordination.

- **Category:** Calendar
- **Integration Type:** OAuth 2.0
- **Vendor:** Google

## Setup

1. Go to **Integrations** and open the **Available** tab.
2. Click **+ Add** on the **Google Calendar** tile.
3. Sign in with your Google account and grant the requested access.
4. Click **Allow** to authorize the connection.

## Required Scopes

| Scope Group | Permissions | Purpose |
|-------------|-------------|---------|
| Calendar Access | `openid`, `email`, `profile`, `calendar.readonly`, `calendar` | Allows Quilr to manage Google Calendar for user scheduling and meeting coordination. |

## What This Integration Does

- Reads user calendar events and schedules.
- Enables calendar-based workflow automation.
- Provides calendar visibility for coordination.

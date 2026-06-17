---
sidebar_position: 3
sidebar_label: Zoom ChatBot
sidebar_custom_props:
  icon: Bot
---

# Zoom ChatBot

Integrate the Zoom chat bot with Quilr to streamline team communication, improve collaboration, and enhance productivity.

- **Category:** Communication
- **Integration Type:** OAuth 2.0 / Bot
- **Vendor:** Zoom

## Setup

1. Go to **Integrations** and open the **Available** tab.
2. Click **+ Add** on the **Zoom ChatBot** tile.
3. Sign in to Zoom and authorize the requested bot scopes.
4. Click **Allow** to authorize the connection.

## Required Scopes

| Scope Group | Permissions | Purpose |
|-------------|-------------|---------|
| Chatbot Access | `imchat:bot` | Allows the bot to send and receive messages and interact with users within Zoom Team Chat. |
| Channel Visibility | `team_chat:read:list_user_channels:admin` | Allows the bot to view the list of Zoom Team Chat channels that a specific user is a member of. |
| Member Management | `team_chat:write:members:admin` | Allows the bot to add or remove members in Zoom Team Chat channels and manage channel membership. |

## What This Integration Does

- Sends security alerts and notifications to Zoom Team Chat.
- Enables interactive bot communication within Zoom.
- Allows users to respond to security workflows via Zoom.
- Manages channel membership for security communications.

---
sidebar_position: 2
sidebar_label: Azure Cloud
sidebar_custom_props:
  icon: Boxes
---

# Azure Cloud

This connector integrates Azure AI Foundry and Azure Machine Learning Studio with Quilr, allowing secure access to AI asset information.

- **Category:** Asset Discovery
- **Integration Type:** OAuth 2.0
- **Vendor:** Microsoft

## Setup

1. Go to **Integrations** and open the **Available** tab.
2. Click **+ Add** on the **Azure Cloud** tile.
3. Sign in with a Microsoft administrator account and consent to the requested permissions.
4. Click **Allow** to authorize the connection.

## Required Scopes

| Scope Group | Permissions | Purpose |
|-------------|-------------|---------|
| Azure Access | `openid`, `profile`, `offline_access` | Allows Quilr to access Azure management APIs for retrieving AI/ML resources. |

## What This Integration Does

- Discovers AI/ML assets in Azure.
- Monitors Azure AI Foundry workspaces.
- Tracks Machine Learning Studio resources.
- Provides AI asset inventory visibility.

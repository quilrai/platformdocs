---
sidebar_position: 2
sidebar_label: Google Workspace
sidebar_custom_props:
  icon: Users
---

# Google Workspace

Quilr integrates with Google Workspace to enhance collaboration, productivity, and communication visibility with powerful cloud-based tools and services.

- **Category:** Identity
- **Integration Type:** OAuth 2.0
- **Vendor:** Google

## Setup

1. Go to **Integrations** and open the **Available** tab.
2. Click **+ Add** on the **Google Workspace** tile.
3. Sign in with a Google Workspace administrator account and grant the requested access.
4. Click **Allow** to authorize the connection.

## Required Scopes

| Scope Group | Permissions | Purpose |
|-------------|-------------|---------|
| User & Customer Details | `admin.directory.user.readonly`, `admin.directory.user.security`, `admin.directory.customer.readonly`, `openid`, `email`, `profile` | Allows Quilr to access user details and customer data from Google Admin Directory to help improve your organization's security posture. |
| Domain & Group Information | `admin.directory.domain.readonly`, `admin.directory.group.readonly` | Allows Quilr to read domain and group details from Google Admin Directory to help improve your organization's security posture. |
| Role Management | `admin.directory.rolemanagement.readonly` | Allows Quilr to view role management details in Google Admin Directory to help improve your organization's security posture. |

## What This Integration Does

- Discovers and monitors Google Workspace users and customer details.
- Reviews domain, group, and role assignments.
- Provides identity visibility across your Google Workspace organization.

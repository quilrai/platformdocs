---
sidebar_position: 1
sidebar_label: SAML
sidebar_custom_props:
  icon: KeyRound
---

# SAML

Integrate SAML with Quilr for enterprise Single Sign-On (SSO) authentication.

- **Category:** SAML/SSO
- **Integration Type:** SAML 2.0

## Setup

1. Go to **Integrations** and open the **Available** tab.
2. Click **+ Add** on the **SAML** tile.
3. Provide the configuration details below from your identity provider.
4. Click **Allow** to complete the setup.

## Required Configuration

- **IdP SSO URL** — the identity provider's Single Sign-On URL. Must be a valid HTTPS URL.
- **IdP SLO URL** — the identity provider's Single Logout URL, if provided. Must be a valid HTTPS
  URL.
- **IdP Entity ID** — the identity provider's entity identifier. Must be a valid URL or URN.
- **IdP Signing Certificate** — paste the certificate provided by your identity provider. PEM
  headers, footers, and line breaks are stripped automatically, so the certificate can be pasted
  as-is.
- **NameID Format** — choose the SAML NameID format your identity provider issues: Email Address,
  Unspecified, Persistent, or Transient.
- **Enforce SSO** — when enabled, Microsoft and Google social login attempts are redirected to your
  configured SAML identity provider instead of completing sign-in directly.

The setup form validates these fields as you type. Fields with invalid values show an inline error,
and the **Allow** button stays disabled with an explanatory message until all SAML configuration
errors are resolved.

## What This Integration Does

- Enables SSO authentication for Quilr.
- Integrates with enterprise identity providers.
- Validates SAML configuration values before the integration can be enabled.
- Optionally enforces SSO so social login is redirected to your identity provider.
- Provides secure authentication workflows.

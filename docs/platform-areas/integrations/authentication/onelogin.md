---
sidebar_position: 2
sidebar_label: OneLogin
sidebar_custom_props:
  icon: KeyRound
---

# OneLogin SAML Configuration

Configure OneLogin as your SAML identity provider for Quilr Single Sign-On (SSO).

- **Category:** SAML/SSO
- **Integration Type:** SAML 2.0
- **Identity Provider:** OneLogin

## Prerequisites

- OneLogin administrator access
- Quilr administrator access
- Your organization's email domain configured in Quilr

## Step 1: Create a New Application in OneLogin

1. Log in to your **OneLogin Admin Portal** at `https://your-subdomain.onelogin.com/admin`
2. Navigate to **Applications** → **Add App**
3. Search for **"SAML Custom Connector (Advanced)"** and select it
4. Enter a **Display Name** (e.g., "Quilr")
5. Optionally upload a logo for easy identification
6. Click **Save**

## Step 2: Download Quilr SP Metadata

Before configuring OneLogin, download the Quilr Service Provider (SP) metadata:

1. In Quilr, go to **Integrations** → **SAML**
2. Click **Download SAML Service Provider Metadata XML**
3. This XML contains the values you'll need for OneLogin configuration

## Step 3: Configure Application Settings in OneLogin

In the **Configuration** tab of your OneLogin application, set the following:

| OneLogin Field | Value |
|----------------|-------|
| **Audience (EntityID)** | Copy from Quilr's SP Metadata XML (EntityID) |
| **Recipient** | `https://auth.quilr.ai/auth/saml/callback` |
| **ACS (Consumer) URL** | `https://auth.quilr.ai/auth/saml/callback` |
| **ACS URL Validator** | `.*` or `https://auth\.quilr\.ai/auth/saml/callback` |
| **Single Logout URL** | Leave empty unless SLO is required |

## Step 4: Configure SAML Parameters

In the **Parameters** tab:

1. Ensure the **NameID** parameter is configured
2. Set **NameID value** to the user's email address
3. This ensures Quilr receives the user's email for authentication

## Step 5: Configure SSO Settings

In the **SSO** tab, configure the following security settings:

| Setting | Recommended Value |
|---------|-------------------|
| **SAML Signature Element** | Both (Response and Assertion) |
| **SAML nameID format** | Email |
| **SAML Signature Algorithm** | SHA-256 |

## Step 6: Get OneLogin IDP Details

From the **SSO** tab in OneLogin, collect the following values to configure in Quilr:

| Quilr Field | Where to Find in OneLogin |
|-------------|---------------------------|
| **IDP Entity ID** | Issuer URL |
| **IDP SSO URL** | SAML 2.0 Endpoint (HTTP-POST) |
| **IDP SLO URL** | SLO Endpoint (HTTP-Redirect) |
| **IDP Signing Certificate** | X.509 Certificate → Click "View Details" and copy |

## Step 7: Assign Users in OneLogin

1. Go to the **Access** tab in your OneLogin application
2. Assign the appropriate users or roles who should have access to Quilr
3. Users must be assigned to the application to authenticate via SAML

## Step 8: Configure Quilr SAML Integration

1. In Quilr, go to **Integrations** → **Available** tab
2. Click **+ Add** on the **SAML** tile
3. Enter the following configuration:

| Quilr Field | Value |
|-------------|-------|
| **Name** | OneLogin SSO (or your preferred name) |
| **IDP Entity ID** | Paste the Issuer URL from OneLogin |
| **IDP SSO URL** | Paste the SAML 2.0 Endpoint (HTTP-POST) from OneLogin |
| **IDP SLO URL** | Paste the SLO Endpoint from OneLogin (optional) |
| **IDP Signing Certificate** | Paste the X.509 certificate from OneLogin |
| **Domain** | Your organization's email domain (e.g., `company.com`) |
| **Name ID Format** | `emailAddress` |
| **Signature Algorithm** | `SHA256` |
| **Want Assertions Signed** | `Yes` |
| **Want Authn Response Signed** | `Yes` |
| **Enforce SAML** | `Yes` to redirect Microsoft/Google logins to OneLogin, `No` to allow independent login methods |

4. Click **Allow** to save the configuration

## Step 9: Test the Integration

1. Open an incognito/private browser window
2. Navigate to your Quilr login page
3. If **Enforce SAML** is enabled:
   - Clicking Microsoft or Google login will redirect to OneLogin
4. If **Enforce SAML** is disabled:
   - You can test SAML by entering your email domain
5. Authenticate with your OneLogin credentials
6. You should be redirected back to Quilr and logged in

## Configuration Options

### Enforce SAML

The **Enforce SAML** option controls how users authenticate:

| Setting | Behavior |
|---------|----------|
| **Yes** | Microsoft and Google login attempts redirect to OneLogin SSO |
| **No** | Users can choose between Microsoft, Google, or SAML independently |

This is useful for organizations that want to enforce centralized authentication through OneLogin for all users.

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| "Invalid signature" error | Verify the IDP Signing Certificate is correctly copied without extra spaces or line breaks |
| "User not found" error | Ensure the user is assigned to the application in OneLogin |
| "Invalid audience" error | Verify the Audience (EntityID) in OneLogin matches Quilr's SP metadata |
| Login redirects but fails | Check that the ACS URL is exactly `https://auth.quilr.ai/auth/saml/callback` |

### Verifying Certificate Format

The IDP Signing Certificate should be the raw base64 content. When pasting in Quilr:
- Headers (`-----BEGIN CERTIFICATE-----`) are optional
- Line breaks will be stripped automatically
- Ensure the complete certificate is copied

## Reference

For additional OneLogin SAML configuration details, see the [OneLogin SAML Configuration Guide](https://onelogin.service-now.com/support?id=kb_article&sys_id=8a1f3d501b392510c12a41d5ec4bcbcc).

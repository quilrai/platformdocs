---
sidebar_position: 3
sidebar_label: Okta
sidebar_custom_props:
  icon: KeyRound
---

# Okta SAML Configuration

Configure Okta as your SAML identity provider for Quilr Single Sign-On (SSO).

- **Category:** SAML/SSO
- **Integration Type:** SAML 2.0
- **Identity Provider:** Okta

## Prerequisites

- Okta administrator access
- Quilr administrator access
- Your organization's email domain configured in Quilr

## Step 1: Create a New SAML Application in Okta

1. Log in to your **Okta Admin Console** at `https://your-subdomain-admin.okta.com`
2. Navigate to **Applications** → **Applications**
3. Click **Create App Integration**
4. Select **SAML 2.0** and click **Next**
5. Enter an **App name** (e.g., "Quilr")
6. Optionally upload a logo for easy identification
7. Click **Next**

## Step 2: Configure SAML Settings in Okta

In the **Configure SAML** step, set the following:

### General Settings

| Okta Field | Value |
|------------|-------|
| **Single sign-on URL** | `https://<your-quilr-domain>/bff/auth/auth/saml/callback` |
| **Use this for Recipient URL and Destination URL** | ✓ Checked |
| **Audience URI (SP Entity ID)** | `https://<your-quilr-domain>/bff/auth/saml/metadata/<tenant-id>` |
| **Default RelayState** | Leave empty |
| **Name ID format** | EmailAddress |
| **Application username** | Email |

### Advanced Settings

| Setting | Recommended Value |
|---------|-------------------|
| **Response** | Signed |
| **Assertion Signature** | Signed |
| **Signature Algorithm** | RSA-SHA256 |
| **Digest Algorithm** | SHA256 |
| **Assertion Encryption** | Unencrypted |

## Step 3: Complete App Creation

1. In the **Feedback** step, select **I'm an Okta customer adding an internal app**
2. Click **Finish**

## Step 4: Get Okta IDP Details

After creating the application, go to the **Sign On** tab and click **View SAML setup instructions** or **View IdP metadata**.

Collect the following values to configure in Quilr:

| Quilr Field | Where to Find in Okta |
|-------------|----------------------|
| **IDP Entity ID** | Identity Provider Issuer |
| **IDP SSO URL** | Identity Provider Single Sign-On URL |
| **IDP SLO URL** | Identity Provider Single Logout URL (if available) |
| **IDP Signing Certificate** | X.509 Certificate (download and copy contents) |

### Downloading the Certificate

1. In the **Sign On** tab, scroll to **SAML Signing Certificates**
2. Click **Actions** → **Download certificate** for the active certificate
3. Open the downloaded `.cert` file and copy the contents

## Step 5: Assign Users and Groups in Okta

1. Go to the **Assignments** tab in your Okta application
2. Click **Assign** → **Assign to People** or **Assign to Groups**
3. Select the users or groups who should have access to Quilr
4. Click **Save and Go Back**
5. Users must be assigned to the application to authenticate via SAML

## Step 6: Configure Quilr SAML Integration

1. In Quilr, go to **Integrations** → **Available** tab
2. Click **+ Add** on the **SAML** tile
3. Enter the following configuration:

| Quilr Field | Value |
|-------------|-------|
| **Name** | Okta SSO (or your preferred name) |
| **IDP Entity ID** | Paste the Identity Provider Issuer from Okta |
| **IDP SSO URL** | Paste the Identity Provider Single Sign-On URL from Okta |
| **IDP SLO URL** | Paste the Single Logout URL from Okta (optional) |
| **IDP Signing Certificate** | Paste the X.509 certificate from Okta |
| **Domain** | Your organization's email domain (e.g., `company.com`) |
| **Name ID Format** | `emailAddress` |
| **Signature Algorithm** | `SHA256` |
| **Want Assertions Signed** | `Yes` |
| **Want Authn Response Signed** | `Yes` |
| **Enforce SAML** | `Yes` to redirect Microsoft/Google logins to Okta, `No` to allow independent login methods |

4. Click **Allow** to save the configuration

## Step 7: Test the Integration

1. Open an incognito/private browser window
2. Navigate to your Quilr login page
3. If **Enforce SAML** is enabled:
   - Clicking Microsoft or Google login will redirect to Okta
4. If **Enforce SAML** is disabled:
   - You can test SAML by entering your email domain
5. Authenticate with your Okta credentials
6. You should be redirected back to Quilr and logged in

## Configuration Options

### Enforce SAML

The **Enforce SAML** option controls how users authenticate:

| Setting | Behavior |
|---------|----------|
| **Yes** | Microsoft and Google login attempts redirect to Okta SSO |
| **No** | Users can choose between Microsoft, Google, or SAML independently |

This is useful for organizations that want to enforce centralized authentication through Okta for all users.

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| "Invalid signature" error | Verify the IDP Signing Certificate is correctly copied without extra spaces or line breaks |
| "User not found" error | Ensure the user is assigned to the application in Okta |
| "Invalid audience" error | Verify the Audience URI (SP Entity ID) in Okta matches Quilr's SP metadata |
| Login redirects but fails | Check that the Single sign-on URL matches your Quilr environment (e.g., `https://<your-quilr-domain>/bff/auth/auth/saml/callback`) |
| "SAML Response not valid" | Ensure both Response and Assertion signatures are enabled in Okta |

### Verifying Certificate Format

The IDP Signing Certificate should be the raw base64 content. When pasting in Quilr:
- Headers (`-----BEGIN CERTIFICATE-----`) are optional
- Line breaks will be stripped automatically
- Ensure the complete certificate is copied

### Certificate Rotation

Okta periodically rotates signing certificates. When this happens:
1. Download the new certificate from Okta
2. Update the IDP Signing Certificate in Quilr's SAML configuration
3. Test the integration to ensure it works with the new certificate

## Reference

For additional Okta SAML configuration details, see the [Okta SAML Documentation](https://help.okta.com/en-us/content/topics/apps/apps_app_integration_wizard_saml.htm).

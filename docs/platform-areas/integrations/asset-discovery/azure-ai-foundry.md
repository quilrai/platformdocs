---
sidebar_position: 3
sidebar_label: Azure AI Foundry
sidebar_custom_props:
  icon: Sparkles
---

# Azure AI Foundry

The Azure AI Foundry connector gives Quilr read-only visibility into the agents, models, and agent
activity running in your Azure AI Foundry projects. You register a Microsoft Entra application in
your own tenant, grant it three Azure roles, and choose which subscriptions and projects Quilr
watches. A background sync then keeps AI Inventory, the Overview dashboard, and — where you opt in —
Conversations up to date.

- **Category:** Asset Discovery
- **Integration Type:** Microsoft Entra service principal (OAuth 2.0 client credentials)
- **Vendor:** Microsoft

:::note
This connector is separate from [Azure Cloud](./azure-cloud.md). Azure Cloud uses an interactive
Microsoft sign-in for broad Azure AI and Machine Learning Studio asset discovery. Azure AI Foundry
uses a customer-owned service principal and adds per-project control over agent inventory and agent
conversation history.
:::

## How It Works

1. You create a Microsoft Entra app registration and client secret in your own tenant.
2. You grant that app three Azure roles at subscription scope.
3. You enter the tenant ID, client ID, and client secret in Quilr.
4. You select the Azure subscriptions Quilr should monitor.
5. You enable **Inventory** and, optionally, **Conversations** for each discovered Foundry project.
6. A background worker signs in as that service principal, pulls data for the enabled projects, and
   surfaces the results across the platform.

Quilr acts only as a reader. The connector never creates, modifies, or deletes Azure resources.

## Before You Start

You need:

- An Azure subscription that contains at least one Azure AI Foundry project.
- Permission in Microsoft Entra ID to create an app registration and a client secret (Application
  Administrator, Cloud Application Administrator, or equivalent).
- Permission to assign Azure roles at subscription scope (Owner or User Access Administrator).
- Integration permissions in Quilr, with update access if you are editing an existing connection.

## Required Azure Permissions

The connector authenticates as a **customer-owned Entra service principal** using the OAuth 2.0
client-credentials flow. It is not a managed identity and does not use a raw API key.

Assign all three roles to the app registration at **subscription scope**, for every subscription you
plan to monitor.

| Role | Purpose |
|------|---------|
| Reader | Discovers subscriptions, resource groups, and Foundry resources. |
| Azure AI Foundry User | Reads agent and project data-plane resources such as assistants, deployments, files, and vector stores. |
| Log Analytics Reader | Reads Azure Monitor and Log Analytics telemetry associated with the project. |

The credentials are validated against the API audiences the connector needs:

- Azure Resource Manager (`management.azure.com`)
- Azure AI Foundry (`ai.azure.com`)
- Azure Machine Learning (`ml.azure.com`)
- Azure Cognitive Services (`cognitiveservices.azure.com`)
- Log Analytics (`api.loganalytics.io`)

:::caution
**Azure AI Foundry User** is a broad built-in role. Among other rights, it can list Cognitive
Services keys. Quilr only ever performs read operations with this service principal, but you should
review the role against your own least-privilege standards before assigning it, and scope it to only
the subscriptions you intend to monitor.
:::

## Setup

Setup is a four-step wizard. You can leave and return to it; completed steps are preserved.

### Step 1 — Prepare

Complete this step in the Azure portal or Azure CLI:

1. In Microsoft Entra ID, create a new app registration for Quilr.
2. Copy the **Directory (tenant) ID** and **Application (client) ID** from the app's overview page.
3. Under **Certificates & secrets**, create a new **client secret** and copy its value immediately.
   Azure shows the secret only once. Note its expiry date.
4. Copy the `az role assignment create` snippet generated on this step and run it for each
   subscription you want to monitor. It grants the three required roles at subscription scope:

   ```bash
   az role assignment create \
     --assignee <application-client-id> \
     --role "Reader" \
     --scope /subscriptions/<subscription-id>

   az role assignment create \
     --assignee <application-client-id> \
     --role "Azure AI Foundry User" \
     --scope /subscriptions/<subscription-id>

   az role assignment create \
     --assignee <application-client-id> \
     --role "Log Analytics Reader" \
     --scope /subscriptions/<subscription-id>
   ```

   Use the snippet shown in the wizard rather than this example — it is pre-filled for your
   connection.

Role assignments can take a few minutes to propagate before the connector can see a subscription.

### Step 2 — Credentials

Enter the following in Quilr:

| Field | Description |
|-------|-------------|
| Connection name | A label that identifies this connection in Integrations and in status messages. |
| Directory (tenant) ID | The Entra tenant that owns the app registration. |
| Application (client) ID | The app registration's client ID. |
| Client secret | The secret value you created in Step 1. |

The credentials are submitted once and validated against the required audiences. If validation
fails, the wizard reports which audience or role is missing so you can correct the assignment and
retry.

### Step 3 — Subscriptions

Quilr lists the Azure subscriptions the service principal can see and shows a readiness indicator
for each one, covering whether Management, Foundry, and Log Analytics access is actually present.

1. Review the readiness indicators.
2. Select the subscriptions you want Quilr to monitor.
3. Fix any missing role assignment in Azure and re-check readiness if a subscription is incomplete.

A subscription with partial readiness can still be selected, but the data that depends on the
missing access will not be collected.

### Step 4 — Projects

Quilr discovers the Foundry projects inside the selected subscriptions and lists them with two
independent switches:

- **Inventory** — collects asset metadata for the project.
- **Conversations** — collects agent thread content for the project. Inventory must be enabled first.

Turn on only what each project needs, then finish the wizard. Use **Refresh projects** at any time
to run an on-demand sync and pick up newly created projects.

## Data Collection Options

The two switches are deliberately separate because they collect very different kinds of data.

| Option | What it collects | Sensitivity |
|--------|------------------|-------------|
| Inventory | Metadata only: agents, model deployments, files, and vector stores. | Configuration and posture data. |
| Conversations | Content: full agent thread, message, run, and run-step detail. | Content-bearing. Includes prompts and tool calls. |

### Inventory

When **Inventory** is on, the connector reads the project through the Foundry or Azure OpenAI APIs —
whichever generation the project uses — and collects:

- Assistants (agents) and their configured tools
- Model deployments, including the assigned content-safety (RAI) policy name
- Files
- Vector stores

### Conversations

When **Conversations** is on, the connector additionally collects full agent thread history:
messages, runs, and run steps, including prompts, tool calls, and run outcomes.

:::info
Conversations is an explicit, per-project opt-in because it retrieves conversation content rather
than metadata. Enable it only for the projects where you need agent-level activity history.
:::

## Where The Data Appears

### AI Inventory

Inventory-enabled projects produce these asset types in [AI Inventory](../../ai-inventory.md):

| Asset type | Source in Azure |
|------------|-----------------|
| Application | The Foundry project itself. |
| Agent | Each assistant defined in the project. |
| Tool, Plugin, MCP server, Skill | The tools configured on each assistant. |
| Model | Each model deployment, with its content-safety (RAI) policy name recorded as metadata. |

### Conversations

Conversation-enabled projects appear in the Conversations view as agent thread history — prompts,
tool calls, and run outcomes.

Conversation data from this connector does not create entries in [Findings](../../findings.md). The
closest equivalent to a finding is a failed run outcome, which is visible on the thread itself.
Content-safety and RAI policy information is inventory metadata attached to the Model asset, not
part of the conversation pull.

### Overview Dashboard

The Azure Foundry estate tile on the Overview dashboard shows:

- Whether the connection is configured and ready
- Project count
- Agent count
- Active applications — projects with activity in the selected time range
- Total interactions
- A top-applications list with name and interaction count

The tile is scoped to **conversation-enabled projects only**. Projects with Inventory alone
contribute assets to AI Inventory but do not appear in these activity metrics.

## Sync Behavior And Status

The connector runs an hourly bounded sweep of the enabled projects. You can also trigger an
immediate sync with **Refresh projects** in the wizard's Projects step.

### Connection status

| Status | Meaning |
|--------|---------|
| Connected | Credentials are valid and the connection is syncing normally. |
| Action required | Something needs attention, such as an expired secret or a missing role assignment. |
| Disabled | The connection exists but is not syncing. |

### Sync status

| Status | Meaning |
|--------|---------|
| Never synced | No sync has run yet. |
| Queued | A sync is waiting to start. |
| Syncing | A sync is running. |
| Ready | The last sync completed successfully. |
| Partial | The last sync completed but some projects or data types failed. |
| Failed | The last sync did not complete. |

### Per-project status

| Status | Meaning |
|--------|---------|
| Never synced | The project has not been collected yet. |
| Ready | The last collection for this project succeeded. |
| Partial | Some data for this project could not be collected. |
| Disabled | Both switches are off for this project. |

## Credential Handling

- The client secret is encrypted at rest and keyed to the scope of that specific connection.
- The secret is never returned by Quilr once accepted. It is write-only from the console's
  perspective — you can replace it, but you cannot read it back.
- Rotate the secret in Azure before it expires, then re-enter the new value in the Credentials step.
  An expired secret puts the connection into **Action required**.

## Troubleshooting

| Symptom | What to check |
|---------|---------------|
| Credentials rejected during setup | Confirm the tenant ID, client ID, and secret value. Confirm the secret has not expired and that you copied the value, not the secret ID. |
| No subscriptions listed | The **Reader** role is missing, or the role assignment has not propagated yet. Re-run the snippet and re-check after a few minutes. |
| Subscription shows partial readiness | One of the three roles is missing for that subscription. Compare the readiness indicators against the required roles table. |
| No projects discovered | Confirm the subscription actually contains a Foundry project and that **Azure AI Foundry User** is assigned at subscription scope. |
| Conversations switch cannot be turned on | Enable **Inventory** for that project first. |
| Project shows Partial | Part of the data plane was unreachable. Check the Foundry and Log Analytics role assignments for that subscription. |
| Connection shows Action required | Most often an expired client secret. Rotate it in Azure and re-enter it in Quilr. |
| Overview tile shows no activity | The tile only counts conversation-enabled projects. Enable Conversations for the projects you want reflected there. |

## What This Integration Does

- Discovers Azure AI Foundry projects across the subscriptions you select.
- Inventories agents, agent tools, model deployments, files, and vector stores.
- Records each model deployment's content-safety (RAI) policy as asset metadata.
- Collects agent thread, message, run, and run-step history for projects you explicitly opt in.
- Surfaces Foundry estate size and agent activity on the Overview dashboard.
- Performs read operations only, using a service principal you own and can revoke at any time.

## Related Platform Areas

- [Azure Cloud](./azure-cloud.md)
- [AI Inventory](../../ai-inventory.md)
- [Microsoft Entra ID](../identity-providers/microsoft-entra-id.md)
- [Insights](../../insights.md)
- [Findings](../../findings.md)
- [Integrations](../index.md)

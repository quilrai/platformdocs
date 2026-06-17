---
sidebar_position: 1
sidebar_label: AWS Cloud
sidebar_custom_props:
  icon: Boxes
---

# AWS Cloud

Integrate AWS with Quilr to discover and monitor AI assets in your AWS environment.

- **Category:** Asset Discovery
- **Integration Type:** IAM Credentials
- **Vendor:** AWS

## Setup

1. Go to **Integrations** and open the **Available** tab.
2. Click **+ Add** on the **AWS Cloud** tile.
3. Enter IAM credentials with the required read access.
4. Click **Allow** to authorize the connection.

## Required Permissions

The AWS integration requires IAM credentials with read access to:

- EC2 instances
- S3 buckets
- SageMaker endpoints
- Lambda functions
- IAM roles and policies

## What This Integration Does

- Discovers AI/ML resources in AWS.
- Monitors SageMaker models and endpoints.
- Tracks cloud AI asset inventory.

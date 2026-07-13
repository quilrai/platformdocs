---
sidebar_position: 14
sidebar_custom_props:
  icon: FileText
---

# Audit Log And Exports

Audit Log and Exports support operational review, reporting, and evidence collection. They help
administrators understand what changed in the platform and generate downloadable records for
supported tables.

## Audit Log

Audit Log provides searchable, filterable event history for platform activity.

### Key Capabilities

- Search audit events.
- Filter by actor, event code, category, action, resource, status, severity, IP address, keyword,
  and date range.
- Expand events to review snapshots and before/after context where available.
- Configure visible table columns.
- Select rows for export workflows where supported.

### Main Workflow

1. Open Audit Log.
2. Search or apply filters.
3. Expand an event to inspect supporting details.
4. Export or retain the event set for review when needed.

## Exports

Exports provides export history and starts new exports for supported platform data sources.

### Key Capabilities

- Review export history.
- Start a new export.
- Select a supported data source.
- Choose CSV or JSON format.
- Review the export limit hint in the export modal before confirming.
- Receive notification when an export is ready.
- Download completed exports from history.

Supported export sources include:

- **Browser Extension Deployment Status** — user, group, location, department, and extension state
  records from the deployment status table.
- **Applications** — application inventory records from the Applications page, with support for
  current-filter or full-range scope and selection-based export. Currently in Beta.

The export history list automatically refreshes every 30 seconds while any export is still
processing, so the status and download link update without a manual page reload.

### Export Limits

Each export is bounded either by a maximum row count or by a maximum date-range duration,
depending on tenant configuration.

- **Row limit (default):** Each export includes up to a tenant-configured maximum number of rows.
  The export modal displays an inline hint—for example, "Up to 5,000 rows will be exported."—so
  admins know the cap before confirming. The default limit is 5,000 rows. If a custom limit has
  been configured for the tenant, the modal reflects that value instead. The same row limit
  applies to Findings exports.
- **Duration limit (optional):** If a tenant has a maximum export duration configured, exports
  are bounded by date range instead of row count. The export modal exports every record within the
  selected date range and states this in the hint—for example, "All records within the selected
  date range (up to 30 days) will be exported."—and the date-range picker in the modal is limited
  to that same number of days.

When no duration limit is configured, the export date-range picker defaults to a 14-day window.

## Related Platform Areas

- [Browser Extension](./browser-extension.md)
- [Users, Applications, and Accounts](./users-accounts-applications.md)
- [Settings And Administration](./settings-admin.md)
- [Findings](./findings.md)

## Access Requirements

Audit Log and Exports require reporting-related permissions. Specific data sources may require
additional permissions for the underlying feature area.

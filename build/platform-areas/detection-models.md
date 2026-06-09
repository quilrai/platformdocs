# Detection Models

Detection Models define what QuilrAI should detect. They help teams tune data-risk detection so the
platform can identify sensitive information, contextual risk, adversarial behavior, and custom risk
patterns that matter to the organization.

## When To Use It

Use Detection Models when you need to:

- Review out-of-box data-risk detection coverage.
- Enable or tune data-risk categories.
- Create custom detections for organization-specific data.
- Test detection behavior before saving changes.
- Improve precision when existing detection categories are too broad or too narrow.
- Review adversarial or insider-risk detection tabs when those experiences are enabled.

## Key Capabilities

- Review out-of-box and custom detection models.
- Work with contextual and non-contextual data-risk categories.
- Tune sensitivity for data categories and subcategories.
- Create custom data-risk models using precision, semantic, or intent techniques.
- Upload files for semantic detection workflows.
- Test detection models with sample data.
- Enable, disable, edit, and delete custom detections when permitted.
- Use the Adversarial Risks or Insider Risks tabs when the tenant has those detection experiences
  enabled.

## Detection Techniques

- **Precision:** Use explicit patterns, positive examples, or words for highly specific matching.
- **Semantic:** Use uploaded examples so QuilrAI can learn the meaning and shape of the data.
- **Intent:** Use positive and negative examples to detect intent-driven risk.

## Main Workflows

1. Open Detection Models and select the data-risk experience.
2. Review out-of-box detections and current tenant configuration.
3. Tune category sensitivity or enabled state.
4. Add a custom detection when out-of-box coverage is not enough.
5. Test and refine the model.
6. Save the model and revisit Findings or Controls to validate the operational impact.

## Additional Detection Tabs

Data Risks is the default detection model experience. Adversarial Risks and Insider Risks may appear
as additional tabs when enabled for the tenant. These tabs keep detection configuration grouped by
risk domain while preserving Data Risks as the default landing page.

## Related Platform Areas

- [Findings](./findings.md)
- [Controls](./controls.md)
- [LLM Gateway](./llm-gateway.md)
- [Endpoint Agent](./endpoint-agent.md)

## Access Requirements

Detection Models require Detection Models permissions. Create, update, delete, enable, and disable
operations depend on the user's assigned scopes.
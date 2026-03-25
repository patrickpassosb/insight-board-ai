# InsightBoard KPI Card Fragment

A highly reusable Liferay fragment component for rendering an important business metric (KPI). Can be duplicated and placed side-by-side multiple times on a page.

## Configuration Options (`configuration.json`)
These options appear in the **Configuration** menu when the fragment is selected in the page editor:
- **Material Icon Name**: Provide the string name of any Google Material Symbol (e.g., `payments`, `group`).
- **Trend State**: Select whether the background indicator badge should be styled `Positive (Green)` or `Negative (Red)`.

## Editable Elements (Liferay Page Editor)
- `trend-value`: The inline percentage or metric next to the right-aligned trend icon.
- `kpi-label`: The title name of the metric (e.g., "Revenue").
- `kpi-value`: The main numerical value.

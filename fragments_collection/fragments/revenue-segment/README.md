# InsightBoard Revenue Segment Chart Fragment

A Liferay fragment doughnut-chart component built utilizing `Chart.js`, coupled with a custom 4-item visual legend.

## Data-Agnostic Functionality
This chart is dynamic. By default, it will gracefully fallback to a standard static demo payload to present beautifully.

### Configuration Options (`configuration.json`)
- **JSON Data Endpoint URL**: Input a fully-qualified REST API URL. The fragment will asynchronously `fetch()` this payload on initialization, overriding the dummy data with your live external analytics.

## Editable Elements
- `title`: The header name of the chart block.
- `l1`, `l2`, `l3`, `l4`: Custom categorical legends labels.
- `v1`, `v2`, `v3`, `v4`: Corresponding percentage text values for each categorical legend block.

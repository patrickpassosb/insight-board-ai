# InsightBoard Revenue Trend Chart Fragment

A Liferay fragment line-chart component built utilizing `Chart.js`.

## Data-Agnostic Functionality
This chart is dynamic. By default, it will gracefully fallback to a standard static demo payload to present beautifully.

### Configuration Options (`configuration.json`)
- **JSON Data Endpoint URL**: Input a fully-qualified REST API URL. The fragment will asynchronously `fetch()` this payload on initialization, overriding the dummy data with your live external analytics.

## Editable Elements
- `chart-title`: The primary header name of the chart block.
- `chart-badge`: A period identifier badge located on the top right.

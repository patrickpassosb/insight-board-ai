# InsightBoard AI Insights Fragment

A premium, interactive AI Analysis component designed for Liferay. This fragment is "Marketplace Ready," meaning it is fully dynamic and can be connected to any data source.

## 🚀 Marketplace Features
- **Dynamic Data Mapping:** Connect Revenue, Churn, and User metrics directly to Liferay Data Providers.
- **Custom AI Persona:** Define the AI's role (e.g., COO, Financial Analyst, Sales Lead) via the configuration sidebar.
- **Configurable Proxy:** Point the fragment to your own middleware or production API.
- **Zero-Conflict Caching:** Uses `fragmentNamespace` to ensure multiple instances on one page don't overwrite each other's insights.

## 🛠 Setup & Configuration
1. **AI Proxy URL:** In the fragment configuration, set your middleware endpoint (Default: `http://localhost:3000/api/analyze`).
2. **Metrics:**
   - **Manual:** Type values directly into the sidebar.
   - **Dynamic:** Click the `+` icon next to each metric to map it to a Liferay Data Provider (e.g., Salesforce, REST API, or Spreadsheet).
3. **Custom Prompt:** Tailor the AI's output by describing your business context in the "AI Persona" field.

## 📡 API Requirement
The fragment expects a `POST` request returning a JSON object with:
- `summary` (string)
- `risk_level` ("Low", "Medium", "High")
- `insights` (array of 2 strings)
- `recommendation` (string)

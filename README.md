# InsightBoard AI

> Turning Data into Decisions with Mistral AI

A Liferay Fragment that acts as an intelligent business command center. By integrating Liferay's frontend with a Node.js middleware and the Mistral AI API, it provides real-time executive summaries, anomaly detection, and actionable strategic recommendations directly within the portal.

## Getting Started

1. **Setup API server:**
   ```bash
   cd api
   npm install
   cp .env.example .env
   # Edit .env and supply MISTRAL_API_KEY
   npm start
   ```

2. **Liferay Fragment:**
   - Compress the `fragment` folder into a `.zip` file.
   - Import the zip into Liferay's Fragment Editor.
   - Alternatively, copy-paste `index.html`, `index.css`, `index.js`, and `configuration.json` into Liferay.

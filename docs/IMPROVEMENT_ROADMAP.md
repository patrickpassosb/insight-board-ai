# Roadmap for Fragment Refinement: Marketplace & Hackathon Readiness

Based on the official Hackathon regulations and the "Masters of Fragments" challenge, the following improvements are required to transform the current `InsightBoard AI` static structure into reusable, high-performance Liferay Fragments suitable for the Marketplace.

## 1. Modular Architecture (Fragment Granularity)
- **Breakdown:** Convert the static dashboard into atomic components.
    - **Header:** Branding, date picker, user profile.
    - **KPI Card:** Generic container for metrics (value, label, growth indicator, icon).
    - **Charts (Modular):** Generic chart wrapper that accepts JSON data (Line, Donut, Bar).
    - **AI Insight Component:** Call-to-action block with loading/error states.
    - **Global Actions:** Consistent "Generate Report" button.

## 2. Technical Quality & Reusability (30% Score)
- **Configuration-Driven:** Move away from hardcoded values. Use `configuration.json` to allow content authors to:
    - Update KPI labels and data sources.
    - Toggle growth indicator colors (Red/Green/Neutral).
    - Select chart themes.
- **Data-Agnostic:** Ensure fragments consume data via REST APIs rather than hardcoded scripts. Use Liferay Client Extensions for data fetching.
- **Clay Design System:** Utilize [Clay UI](https://clayui.com/) CSS classes for all components to ensure native look, feel, and accessibility.

## 3. Business Value & Marketplace Readiness (20% Score)
- **Robustness:** Implement proper error handling (e.g., API failure, empty data states).
- **Responsive Design:** Ensure all fragments use Liferay's grid system and are fully responsive across mobile/tablet/desktop.
- **Documentation:** Include a `README.md` within each fragment package explaining:
    - Setup requirements.
    - Configuration options.
    - API endpoint expectations.

## 4. AI Integration (Optional, but Encouraged)
- **Enhanced AI Insights:** Improve the AI component to include:
    - A visible "Loading" state while fetching analysis.
    - A clear "No Data" or "Error" state if the AI analysis fails.
    - A clear visual distinction between user-provided data and AI-generated analysis.

## 5. Next Steps
1.  **Schema Definition:** Define the `configuration.json` schema for the KPI Card fragment.
2.  **Implementation:** Build the base KPI fragment using the Fragments Toolkit.
3.  **Validation:** Test reusability by dropping the same KPI fragment on different pages with different configurations.

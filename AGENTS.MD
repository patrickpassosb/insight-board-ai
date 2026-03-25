# AGENTS.MD

## Project Overview
This repository contains the source code for **InsightBoard AI**, a dashboard application being developed for a hackathon.

## Goal
The objective is to refactor the current static dashboard into a set of reusable, high-quality Liferay Fragments. These fragments will enable dynamic content management and be optimized for potential publication on the Liferay Marketplace.

## Fragment Strategy
We are breaking down the dashboard into atomic components (fragments). Each fragment will feature editable areas (text, images, values) to ensure reusability and flexibility.

### Target Components for Fragments:
- **Header:** Branding, user profile, and date display.
- **Navigation Sidebar:** Dynamic navigation links.
- **KPI Cards:** Reusable cards for metrics (e.g., Revenue, Growth, Users).
- **Charts:**
    - Line chart for trends.
    - Donut chart for segmentation.
    - Bar chart for ticket volume.
- **AI Insight Component:** Call-to-action block for AI analysis.
- **Action Buttons:** Global action buttons (e.g., "Generate Report").

---

## Technical Notes & Gotchas

### Liferay Fragment Configuration (`configuration.json`)
When creating editable properties for a Liferay Fragment in 7.4+, strict schema rules apply to prevent the "Please provide a valid configuration" error in the Page Editor:
1. **`dataType` is Required**: Every field must define its data type (e.g., `"dataType": "string"`).
2. **`select` Field Syntax**: For dropdown/select inputs, do not use an `options` array. Instead, you MUST use `typeOptions` containing a `validValues` array:
   ```json
   {
     "name": "trendState",
     "type": "select",
     "label": "Trend State",
     "dataType": "string",
     "typeOptions": {
       "validValues": [
         { "value": "positive", "label": "Positive (Green)" },
         { "value": "negative", "label": "Negative (Red)" }
       ]
     },
     "defaultValue": "positive"
   }
   ```

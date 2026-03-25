# InsightBoard AI Insights Fragment

A premium, interactive AI Analysis component designed to fetch insights dynamically. Features complex CSS backgrounds and interactive loading states. 

## API Endpoint Requirements
- The "Generate Insights" action button executes an asynchronous `POST` request to `http://localhost:3000/api/analyze`.
- To function correctly, ensure the accompanying `InsightBoard AI` Node.js middleware server is actively running on port 3000 in the background.

## Editable Elements
*All descriptive text within the fragment's pre-generation, error, loading, and completed state are natively editable in Liferay.*
- `title` / `description`: High level copy.
- `btn-text`: CTA text.
- `loading-text`: Wait-state copy.
- `error-msg`: Fallback failure copy.
- `placeholder-text`: Instructional default text.
- `action-text`: Quick link recommendation generated text.

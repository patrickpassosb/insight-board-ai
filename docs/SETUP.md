# Development Setup

## Prerequisites

- Docker (for Liferay)
- Node.js (v18+)
- npm
- Mistral API key

## 1. Start Liferay

```bash
docker run -it -p 8080:8080 liferay/portal:7.4.3.132-ga132
```

Access at http://localhost:8080
- Email: `test@liferay.com`
- Password: `test`

## 2. Set Up the API

```bash
cd api
npm install
```

Create `.env`:
```
MISTRAL_API_KEY=your_key_here
```

Start the server:
```bash
node server.js
```

Runs on http://localhost:3000

## 3. Deploy the Fragment to Liferay

1. Log into Liferay as admin
2. Go to **Site Administration → Design → Fragments**
3. Click **+** to create a new Fragment Set (name: "InsightBoard AI")
4. Click **+** inside the set to create a new Fragment
5. Copy the contents of `fragment/index.html` into the **HTML** tab
6. Copy `fragment/index.css` into the **CSS** tab
7. Copy `fragment/index.js` into the **JavaScript** tab
8. Paste `fragment/configuration.json` into the **Configuration** tab
9. Click **Publish**

## 4. Add Fragment to a Page

1. Go to **Site Administration → Site Builder → Pages**
2. Create or edit a page (use **Content Page** type)
3. In the page editor, find "InsightBoard AI" in the Fragments panel
4. Drag the fragment onto the page
5. Click **Publish**

## 5. Test

1. Ensure Docker (Liferay) is running on :8080
2. Ensure Node.js API is running on :3000
3. Open the page with the fragment
4. Verify charts render with mock data
5. Click "Generate AI Insights"
6. Verify AI response appears in the insights panel

## External Dependencies

| Dependency | Loaded via |
|------------|-----------|
| Chart.js 4.x | CDN (`<script>` in fragment HTML) |
| Express | npm (api/) |
| Axios | npm (api/) |
| cors | npm (api/) |
| dotenv | npm (api/) |

# Architecture

## High-Level Flow

```
User → Liferay Portal → Fragment (HTML/CSS/JS)
                              │
                              ├── Chart.js renders visualizations
                              │
                              └── "Generate Insights" click
                                       │
                                       ▼
                              Node.js API (Express :3000)
                                       │
                                       ▼
                              Mistral AI API
                                       │
                                       ▼
                              Structured JSON response
                                       │
                                       ▼
                              Fragment renders AI insights
```

## Directory Structure

```
insightboard-ai/
├── docs/                       # Project documentation
│   ├── PROJECT_SPEC.md
│   ├── ARCHITECTURE.md
│   ├── SCORING_STRATEGY.md
│   ├── PITCH.md
│   └── SETUP.md
│
├── api/                        # Node.js Middleware
│   ├── .env                    # MISTRAL_API_KEY (not committed)
│   ├── package.json
│   └── server.js               # Express server + Mistral integration
│
├── fragment/                   # Liferay Fragment
│   ├── configuration.json      # Fragment config fields
│   ├── index.html              # Dashboard layout
│   ├── index.css               # Styling (Grid, Cards, Charts)
│   └── index.js                # Chart logic + API integration
│
├── .gitignore
└── README.md
```

## API Contract

### `POST /api/analyze`

**Request:**
```json
{
  "period": "March 2026",
  "metrics": {
    "revenue": 125000,
    "revenue_growth": -5.2,
    "active_users": 1200,
    "churn_rate": 4.8,
    "support_tickets": 85
  }
}
```

**Response:**
```json
{
  "summary": "Revenue is down 5.2% due to increased churn.",
  "risk_level": "High",
  "insights": [
    "Churn rate (4.8%) is 2x above industry average.",
    "Support ticket volume suggests product stability issues."
  ],
  "recommendation": "Initiate a customer retention campaign immediately and audit recent product releases for bugs."
}
```

## Mistral Prompt Strategy

**System prompt role:** Seasoned Chief Operating Officer (COO) analyzing a company's monthly dashboard.

**Output:** Strictly valid JSON with 4 fields:
1. `summary` — 1-sentence executive overview
2. `risk_level` — "Low", "Medium", or "High"
3. `insights` — Array of 2 distinct, data-driven observations
4. `recommendation` — One specific, actionable strategic move

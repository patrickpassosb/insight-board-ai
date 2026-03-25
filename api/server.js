require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Main analysis endpoint
app.post("/api/analyze", async (req, res) => {
  const { period, metrics } = req.body;

  if (!period || !metrics) {
    return res.status(400).json({ error: "Missing required fields: period, metrics" });
  }

  const systemPrompt = `You are a seasoned Chief Operating Officer (COO) analyzing a company's monthly dashboard.
You will receive business metrics and must provide a strategic analysis.

You MUST respond with strictly valid JSON containing exactly these 4 fields:
1. "summary" — One sentence executive overview of the current situation
2. "risk_level" — Exactly one of: "Low", "Medium", or "High"
3. "insights" — An array of exactly 2 distinct, data-driven observations
4. "recommendation" — One specific, actionable strategic move

Do not include any text outside the JSON object. Do not use markdown formatting.`;

  const userPrompt = `Analyze the following business metrics for ${period}:

- Revenue: $${metrics.revenue?.toLocaleString() || metrics.revenue}
- Revenue Growth: ${metrics.revenue_growth}%
- Active Users: ${metrics.active_users?.toLocaleString() || metrics.active_users}
- Churn Rate: ${metrics.churn_rate}%
- Support Tickets: ${metrics.support_tickets}

Provide your strategic analysis as a JSON object.`;

  try {
    const response = await axios.post(
      "https://api.mistral.ai/v1/chat/completions",
      {
        model: "mistral-large-latest",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        response_format: { type: "json_object" },
        max_tokens: 512,
        temperature: 0.3,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
        },
      }
    );

    const content = response.data.choices[0].message.content;
    const analysis = JSON.parse(content);

    // Validate the response structure
    if (!analysis.summary || !analysis.risk_level || !analysis.insights || !analysis.recommendation) {
      return res.status(500).json({ error: "Invalid AI response structure" });
    }

    res.json(analysis);
  } catch (error) {
    console.error("Mistral API error:", error.response?.data || error.message);

    if (error.response?.status === 401) {
      return res.status(500).json({ error: "Invalid Mistral API key" });
    }

    res.status(500).json({ error: "Failed to generate AI insights. Please try again." });
  }
});

app.listen(PORT, () => {
  console.log(`InsightBoard AI API running on http://localhost:${PORT}`);
});

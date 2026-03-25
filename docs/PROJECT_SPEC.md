# InsightBoard AI

**Liferay Marketplace App Hackathon - March 25, 2026**

> Turning Data into Decisions with Mistral AI

## What It Is

A Liferay Fragment that acts as an intelligent business command center. Unlike traditional dashboards that only *show* data, InsightBoard *interprets* it. By integrating Liferay's frontend with a Node.js middleware and the Mistral AI API, it provides real-time executive summaries, anomaly detection, and actionable strategic recommendations directly within the portal.

## Why It Matters

- **Zero-Config AI:** Works out of the box with mocked data — perfect for demos and instant value
- **Actionable Intelligence:** Doesn't just report numbers; suggests *what to do* about them
- **Seamless Design:** Native Liferay look-and-feel using Clay CSS with a modern aesthetic

## Category

**Category A: Dashboards & Data Operations** (20% priority bonus)

## Features

- 4 KPI cards (Revenue, Growth, Active Users, Churn Rate)
- Line chart — Revenue trend (6 months)
- Doughnut chart — Revenue by segment / user distribution
- Bar chart — Monthly support tickets
- "Generate AI Insights" button
- AI panel with: executive summary, risk level, data-driven insights, strategic recommendation
- Loading states and error handling
- localStorage caching for instant reload

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | HTML5, CSS3 (Clay), Vanilla JS      |
| Charts     | Chart.js 4.x                        |
| Backend    | Node.js + Express                   |
| AI Engine  | Mistral API (Large model)            |
| Container  | Docker (Liferay 7.4.3.132-ga132)    |
| VCS        | Git + GitHub                         |

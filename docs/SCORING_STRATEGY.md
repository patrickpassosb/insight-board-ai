# Scoring Strategy

## Judging Breakdown

| Criteria                         | Weight | Our Strategy                                              |
|----------------------------------|--------|-----------------------------------------------------------|
| **Technical Implementation**     | 30%    | Clean architecture (Fragment + API + AI), modular code     |
| **Innovation**                   | 25%    | AI-powered insights, not just charts — the dashboard *thinks* |
| **Business Value**               | 20%    | Any Liferay customer can drop it in for instant analytics  |
| **UX & Design**                  | 15%    | Polished UI via Google Stitch, Clay CSS, smooth loading states |
| **Presentation**                 | 10%    | Clear 3-min pitch: problem → demo → architecture → value  |
| **Priority Category (Dashboard)**| 20%    | Category A — full 20% bonus                               |

## How to Maximize Each Criterion

### Technical Implementation (30%) — Most Important
- Fragment + Express API + Mistral = clear 3-tier architecture
- CORS properly configured
- API key secured server-side (never in frontend)
- Error handling on both sides
- localStorage caching for resilience

### Innovation (25%)
- AI doesn't just summarize — it detects risks and recommends actions
- "Actionable buttons" based on AI recommendations (e.g., mailto: link for "Email Sales Team")
- Zero-config: works immediately with mock data

### Business Value (20%)
- Universal use case: every company has KPIs to monitor
- Marketplace-ready: any Liferay customer can install and use
- Reduces time-to-insight for executives

### UX & Design (15%)
- Google Stitch for polished design
- Loading spinner during AI generation
- Smooth transitions and clear visual hierarchy
- Responsive grid layout

### Presentation (10%)
- Structured 3-minute pitch (see PITCH.md)
- Live demo showing the full flow
- Show architecture diagram briefly

## Priority: Working Demo Over Polish

Solo team with 9 hours of coding (11:30 - 20:30). Time is the constraint.

**Order of importance:**
1. End-to-end flow working (Fragment → API → Mistral → rendered insights)
2. Charts rendering with mock data
3. Visual polish
4. Bonus features (actionable buttons, caching)

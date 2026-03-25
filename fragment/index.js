/**
 * InsightBoard AI - Fragment JavaScript
 * Initializes Chart.js and handles the Mistral AI integration.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Chart configurations
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    }
  };

  // 1. Revenue Chart (Line)
  const ctxRevenue = document.getElementById('revenueChart');
  if (ctxRevenue) {
    new Chart(ctxRevenue, {
      type: 'line',
      data: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [{
          label: 'Revenue',
          data: [105000, 110000, 115000, 118000, 122000, 125000],
          borderColor: '#0040a1',
          backgroundColor: 'rgba(0, 64, 161, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        ...chartOptions,
        scales: {
          y: { beginAtZero: false, suggestedMin: 80000 }
        }
      }
    });
  }

  // 2. Support Tickets Chart (Bar)
  const ctxSupport = document.getElementById('supportChart');
  if (ctxSupport) {
    new Chart(ctxSupport, {
      type: 'bar',
      data: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [{
          label: 'Support Tickets',
          data: [42, 38, 45, 41, 95, 85],
          backgroundColor: [
            '#e0e3e5', '#e0e3e5', '#e0e3e5', '#e0e3e5', '#ba1a1a', '#e0e3e5'
          ],
          borderRadius: 4
        }]
      },
      options: {
        ...chartOptions,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }

  // 3. Segment Chart (Doughnut)
  const ctxSegment = document.getElementById('segmentChart');
  if (ctxSegment) {
    new Chart(ctxSegment, {
      type: 'doughnut',
      data: {
        labels: ['Enterprise', 'Mid-Market', 'SMB', 'Startup'],
        datasets: [{
          data: [45, 30, 15, 10],
          backgroundColor: ['#0040a1', '#0056d2', '#d5e3fc', '#eceef0'],
          borderWidth: 0,
          cutout: '80%'
        }]
      },
      options: chartOptions
    });
  }

  // AI Insights Integration
  const btnGenerate = document.getElementById('btn-generate-insights');
  const loadingState = document.getElementById('ai-loading');
  const errorState = document.getElementById('ai-error');
  const errorText = document.getElementById('ai-error-text');
  const placeholder = document.getElementById('ai-placeholder');
  const contentState = document.getElementById('ai-content');

  // Result Elements
  const elSummary = document.getElementById('ai-summary');
  const elRiskBadge = document.getElementById('risk-badge');
  const elInsight1 = document.getElementById('ai-insight-1');
  const elInsight2 = document.getElementById('ai-insight-2');
  const elRecommendation = document.getElementById('ai-recommendation');

  // Hardcoded current metrics for the demo
  const currentMetrics = {
    revenue: 125000,
    revenue_growth: -5.2,
    active_users: 1200,
    churn_rate: 4.8,
    support_tickets: 85
  };

  // Check LocalStorage for cached results
  const cachedData = localStorage.getItem('insightBoard_aiResult');
  if (cachedData) {
    try {
      populateAIResults(JSON.parse(cachedData));
    } catch(e) { /* ignore */ }
  }

  btnGenerate?.addEventListener('click', async () => {
    // UI Reset
    btnGenerate.style.display = 'none';
    placeholder.style.display = 'none';
    contentState.style.display = 'none';
    errorState.style.display = 'none';
    loadingState.style.display = 'flex';

    try {
      const response = await fetch('http://localhost:3000/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          period: 'March 2026',
          metrics: currentMetrics
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch AI insights. Is the API server running?');
      }

      const data = await response.json();
      
      // Cache the result
      localStorage.setItem('insightBoard_aiResult', JSON.stringify(data));
      
      populateAIResults(data);
    } catch (err) {
      errorText.textContent = err.message;
      errorState.style.display = 'flex';
      loadingState.style.display = 'none';
      btnGenerate.style.display = 'block';
    }
  });

  function populateAIResults(data) {
    if(!data) return;

    elSummary.textContent = data.summary || '';
    
    // Risk Level Badge Styling
    const risk = data.risk_level || 'Medium';
    elRiskBadge.textContent = risk + ' Risk';
    elRiskBadge.className = 'ib-risk-badge'; // reset
    if (risk.toLowerCase() === 'high') elRiskBadge.classList.add('risk-high');
    else if (risk.toLowerCase() === 'low') elRiskBadge.classList.add('risk-low');
    else elRiskBadge.classList.add('risk-medium');

    if (data.insights && data.insights.length >= 2) {
      elInsight1.textContent = data.insights[0];
      elInsight2.textContent = data.insights[1];
    } else {
      elInsight1.textContent = data.insights?.[0] || 'No specific insights provided.';
      elInsight2.textContent = '';
    }

    elRecommendation.textContent = data.recommendation || '';

    // Show Content
    loadingState.style.display = 'none';
    errorState.style.display = 'none';
    placeholder.style.display = 'none';
    contentState.style.display = 'block';
    
    // allow regenerating
    btnGenerate.style.display = 'block';
    btnGenerate.innerHTML = '<span class="material-symbols-outlined">refresh</span> Regenerate Insights';
  }
});

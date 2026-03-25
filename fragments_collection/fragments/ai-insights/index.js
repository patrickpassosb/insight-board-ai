const btnGenerate = fragmentElement.querySelector('#btn-generate-insights');
const loadingState = fragmentElement.querySelector('#ai-loading');
const errorState = fragmentElement.querySelector('#ai-error');
const errorText = fragmentElement.querySelector('#ai-error-text');
const placeholder = fragmentElement.querySelector('#ai-placeholder');
const contentState = fragmentElement.querySelector('#ai-content');

// Result Elements
const elSummary = fragmentElement.querySelector('#ai-summary');
const elRiskBadge = fragmentElement.querySelector('#risk-badge');
const elInsight1 = fragmentElement.querySelector('#ai-insight-1');
const elInsight2 = fragmentElement.querySelector('#ai-insight-2');
const elRecommendation = fragmentElement.querySelector('#ai-recommendation');

// Unique cache key per fragment instance
const cacheKey = `insightBoard_aiResult_${fragmentNamespace}`;

// Check LocalStorage for cached results
const cachedData = localStorage.getItem(cacheKey);
if (cachedData) {
  try {
    populateAIResults(JSON.parse(cachedData));
  } catch(e) { /* ignore */ }
}

// Safely handle configuration
const config = typeof configuration !== 'undefined' ? configuration : {};

if (btnGenerate) {
  btnGenerate.addEventListener('click', async () => {
    // Dynamic metrics from Configuration (Manual or Data Provider)
    const currentMetrics = {
      revenue: parseFloat(config.revenue) || 0,
      revenue_growth: parseFloat(config.revenueGrowth) || 0,
      active_users: parseInt(config.activeUsers) || 0,
      churn_rate: parseFloat(config.churnRate) || 0,
      support_tickets: parseInt(config.supportTickets) || 0
    };

    // UI Reset
    btnGenerate.style.display = 'none';
    placeholder.style.display = 'none';
    contentState.style.display = 'none';
    errorState.style.display = 'none';
    loadingState.style.display = 'flex';

    try {
      const apiEndpoint = config.proxyUrl || 'http://localhost:3000/api/analyze';
      
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          period: config.period || 'Current Period',
          metrics: currentMetrics,
          customPrompt: config.customPrompt
        })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Failed to fetch AI insights.');
      }

      const data = await response.json();
      
      // Cache the result
      localStorage.setItem(cacheKey, JSON.stringify(data));
      
      populateAIResults(data);
    } catch (err) {
      errorText.textContent = err.message;
      errorState.style.display = 'flex';
      loadingState.style.display = 'none';
      btnGenerate.style.display = 'flex';
    }
  });
}

function populateAIResults(data) {
  if(!data) return;

  if(elSummary) elSummary.textContent = data.summary || '';
  
  // Risk Level Badge Styling
  if(elRiskBadge) {
    const risk = data.risk_level || 'Medium';
    elRiskBadge.textContent = risk + ' Risk';
    elRiskBadge.className = 'ib-risk-badge'; // reset
    if (risk.toLowerCase() === 'high') elRiskBadge.classList.add('risk-high');
    else if (risk.toLowerCase() === 'low') elRiskBadge.classList.add('risk-low');
    else elRiskBadge.classList.add('risk-medium');
  }

  if (data.insights && data.insights.length >= 2) {
    if(elInsight1) elInsight1.textContent = data.insights[0];
    if(elInsight2) elInsight2.textContent = data.insights[1];
  } else {
    if(elInsight1) elInsight1.textContent = data.insights?.[0] || 'No specific insights provided.';
    if(elInsight2) elInsight2.textContent = '';
  }

  if(elRecommendation) elRecommendation.textContent = data.recommendation || '';

  // Show Content
  loadingState.style.display = 'none';
  errorState.style.display = 'none';
  placeholder.style.display = 'none';
  contentState.style.display = 'block';
  
  // allow regenerating
  if(btnGenerate) {
    btnGenerate.style.display = 'flex';
    btnGenerate.innerHTML = '<span class="material-symbols-outlined">refresh</span> <span data-lfr-editable-id="btn-text-regen" data-lfr-editable-type="text">Regenerate Insights</span>';
  }
}

const canvas = fragmentElement.querySelector('canvas');
const endpointUrl = configuration.endpointUrl || '';

if (typeof Chart === 'undefined') {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.min.js';
  script.onload = () => loadDataAndInitChart();
  document.head.appendChild(script);
} else {
  loadDataAndInitChart();
}

async function loadDataAndInitChart() {
  let chartData = JSON.parse(configuration.chartData);
  
  if (endpointUrl.trim() !== '') {
    try {
      const response = await fetch(endpointUrl);
      if (response.ok) {
        chartData = await response.json();
      }
    } catch(err) {
      console.error('Error fetching chart data:', err);
    }
  }

  new Chart(canvas, {
    type: 'bar',
    data: chartData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });
}

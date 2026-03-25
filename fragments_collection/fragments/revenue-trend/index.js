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
  let chartData = {
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
  };
  
  if (endpointUrl.trim() !== '') {
    try {
      const response = await fetch(endpointUrl);
      if (response.ok) {
        chartData = await response.json();
      } else {
        console.error('Failed to fetch chart data from endpoint:', response.status);
      }
    } catch(err) {
      console.error('Error fetching chart data:', err);
    }
  }

  new Chart(canvas, {
    type: 'line',
    data: chartData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: false, suggestedMin: 80000 } }
    }
  });
}

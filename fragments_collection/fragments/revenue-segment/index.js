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
    labels: ['Enterprise', 'Mid-Market', 'SMB', 'Startup'],
    datasets: [{
      data: [45, 30, 15, 10],
      backgroundColor: ['#0040a1', '#0056d2', '#d5e3fc', '#eceef0'],
      borderWidth: 0,
      cutout: '80%'
    }]
  };
  
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
    type: 'doughnut',
    data: chartData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } }
    }
  });
}

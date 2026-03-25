const canvas = fragmentElement.querySelector('canvas');

if (typeof Chart === 'undefined') {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.min.js';
  script.onload = () => initChart();
  document.head.appendChild(script);
} else {
  initChart();
}

function initChart() {
  new Chart(canvas, {
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
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } }
    }
  });
}

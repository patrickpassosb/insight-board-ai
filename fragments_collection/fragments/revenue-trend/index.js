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
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: false, suggestedMin: 80000 } }
    }
  });
}

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
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });
}

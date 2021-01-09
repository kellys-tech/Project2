var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'pie',
  // The data for our dataset
  data: {
    labels: ['Living Expenses', 'Entertainment', 'Debt', 'Misc.'],
    datasets: [{
      label: 'total expenses',
      data: [10, 15, 20, 25],
      backgroundColor: ['rgb(0, 153, 0)',
        'rgb(0, 0, 255)',
        'rgb(255, 0, 0)',
        'rgb(255, 153, 51)',],
      borderColor: 'rgb(255, 99, 132)',
    }]
  },
  // Configuration options go here
  options: {
    cutoutPercentage: 0,
  }
});

chart();



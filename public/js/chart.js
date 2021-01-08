
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'pie',
  // The data for our dataset
  data: {
    labels: ['Living Expenses', 'Entertainment', 'Debt', 'Misc.'],
    datasets: [{
      label: 'total expenses',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [10, 15, 20, 25]
    }]
  },
  // Configuration options go here
  options: {
    cutoutPercentage: 0,
    color: [
      'green', // color for data at index 0
      'blue', // color for data at index 1
      'red', // color for data at index 2
      'orange', // color for data at index 3
      //...
    ]
  }
});

chart();
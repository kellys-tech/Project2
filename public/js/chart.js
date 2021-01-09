var ctx = document.getElementById('myChart').getContext('2d');

const getData = async () => {
  const living = await $.get('/total/1');
  const entertaiment = await $.get('/total/2');
  const debt= await $.get('/total/3');
  const misc = await $.get('/total/4');
const arrayOfEx = [living,entertaiment,debt,misc];
  console.log(arrayOfEx);
  // eslint-disable-next-line no-unused-vars
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',
    // The data for our dataset
    data: {
      labels: ['living', 'Entertainment', 'Debt', 'Misc.'],
      datasets: [{
        label: 'total expenses',
        data: arrayOfEx,
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
};


getData();


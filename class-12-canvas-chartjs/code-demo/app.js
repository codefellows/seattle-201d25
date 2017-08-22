'use strict';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// var scatterChart = new Chart(ctx, {
//     type: 'scatter',
//     data: {
//         datasets: [{
//             label: 'Scatter Dataset',
//             data: [{
//                 x: -10,
//                 y: 0
//             }, {
//                 x: 0,
//                 y: 10
//             }, {
//                 x: 10,
//                 y: 5
//             }]
//         }]
//     },
//     options: {
//         scales: {
//             xAxes: [{
//                 type: 'linear',
//                 position: 'bottom'
//             }]
//         }
//     }
// });

var chartConfig = {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // x-axis labels for every entry in your data set. It should match up with the number of things you're plotting (if it's a bar chart)
    datasets: [{ // <-- notice that this can be an array of multiple data sets.
      // each data set is its own object literal.
      label: '# of Votes', // <-- the label of this one data set
      data: [12, 19, 3, 5, 2, 3], // <-- where your data actually goes. just the numbers
      backgroundColor: [ // <-- this can be either one single color or a color for each item in your bar chart.
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 5 // border width in pixels
    }]
  },
  options: {
    // maintainAspectRatio: false,
    // animation: {
    //   duration: 1000
    // },
    title: {
      display: true,
      text: 'Some stuff and some junk'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
};

var myChart = new Chart(ctx, chartConfig);

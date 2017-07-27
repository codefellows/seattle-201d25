// var chartjsCanvas = document.getElementById('chart-js-demo');
// var context = chartjsCanvas.getContext('2d');

function PieGraph(title){
  this.title = title;
  this.chartData = [];
}

PieGraph.prototype.pushPieGraphData = function(pieData){
  this.chartData.push(pieData);
};

PieGraph.prototype.renderToCanvasContainer = function(){
  var canvasContainer = document.getElementById('canvas-container');
  canvasContainer.textContent = '';
  var canvasEl = document.createElement('canvas');
  canvasEl.setAttribute('width', '500');
  canvasEl.setAttribute('height', '500');

  var context = canvasEl.getContext('2d');
  new Chart(context).PolarArea(this.chartData);
  document.getElementById('canvas-container').appendChild(canvasEl);
};

function PieGraphData(label, value, color){
  this.label = label;
  this.value = value;
  this.color = color;
  this.highlight = '#fa7a7a';
}

var red = new PieGraphData('red', 8, '#ff0000');
var green = new PieGraphData('green', 10, '#00ff00');
var blue = new PieGraphData('blue', 2, '#0000ff');

var colorGraph = new PieGraph('lulwat color');
colorGraph.pushPieGraphData(red);
colorGraph.pushPieGraphData(green);
colorGraph.pushPieGraphData(blue);
colorGraph.renderToCanvasContainer();
colorGraph.renderToCanvasContainer();


// var chartjsCanvas = document.getElementById('javascript-pie-graph');
// var javascriptContext = chartjsCanvas.getContext('2d');
//
// var timeOut = new PieGraphData('setTimeout', 10, '#ff0330');
// var constr = new PieGraphData('Constructors', 12, '#03ff03');
// var literals = new PieGraphData('Object Literals', 1, '#3030ff');
//
// var colorGraph = new PieGraph('lulwat color');
// colorGraph.pushPieGraphData(timeOut);
// colorGraph.pushPieGraphData(constr);
// colorGraph.pushPieGraphData(literals);
// colorGraph.pushPieGraphData(red);
// colorGraph.pushPieGraphData(green);
// colorGraph.pushPieGraphData(blue);
// colorGraph.renderToContext(javascriptContext);

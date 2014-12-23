var spaceWindow = d3.select('body').append('svg')
  .attr('width', 1000)
  .attr('height', 600)
  .style('border', '3px solid black')
  .style('background-color', 'rgb(30,30,30)');

  var planetsRadi = [4,5,9,10,39,40,95,102];
  var newRadius = 0;

var planetData = [
  //{'x_axis': 105, 'y_axis': 300, 'radius': 102, 'color' : 'tan'},//jupiter
  //{'x_axis': 310, 'y_axis': 300, 'radius': 95, 'color' : 'brown'},//saturn
  //{'x_axis': 450, 'y_axis': 300, 'radius': 40, 'color' : 'blue'},//uranus
  //{'x_axis': 540, 'y_axis': 300, 'radius': 39, 'color' : 'skyblue'},//neptune
  //{'x_axis': 600, 'y_axis': 300, 'radius': 10, 'color' : 'darkblue'},//earth
  //{'x_axis': 640, 'y_axis': 300, 'radius': 9, 'color' : 'green'},//venus
  //{'x_axis': 680, 'y_axis': 300, 'radius': 5, 'color' : 'red'},//mars
  {'x_axis': 500, 'y_axis': 300, 'radius': 4, 'color' : 'white', 'class': 'mercury'},//mercury
  //{'x_axis': 680, 'y_axis': 300, 'radius': 10, 'color' : 'blue'},
];

	//give planets names
	//give planets distance values
	//give planets radius

var planets = spaceWindow.selectAll('circle')
  .data(planetData)
  .enter()
  .append('circle');

var planetAttributes = planets
  .attr('cx',    function(d) {return d.x_axis;})
  .attr('cy',    function(d) {return d.y_axis;})
  .attr('r',     function(d) {return d.radius;})
  .style('fill', function(d) {return d.color;});

d3.selectAll('circle').on('click', function(){
	if(newRadius < 8){
    d3.selectAll('circle').transition()
      .attr('r', planetsRadi[newRadius]);

    newRadius = newRadius + 1;
  } else {
    newRadius = 0;
  }
});

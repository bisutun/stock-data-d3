var raw = d3.select('#csvdata').text();
var parsed = d3.csv.parse(raw);

var chartOptions = {
  height: 1000,
  width: 1875
}

var chart = d3.select('.container')
  .append('svg').attr({"height": chartOptions.height, "width": chartOptions.width})
  .style('background','white');
var startX = 10;
chart.selectAll('circle').data(parsed).enter()
  .append('circle')
  .attr('cx',function(d,i){
    return startX += 1;
  })
  .attr('cy',function(d,i){
    var height = parseInt(d.AdjClose)*10;
    return height;
  })
  .attr('r',function(d,i){
    return d.Volume/10000000;
  })
  .style('fill',function(d,i){
  if (parsed[i-1] !== undefined) {
    console.log(d.AdjClose);
    console.log(parsed[i-1].AdjClose);
    if (d.AdjClose > parsed[i-1].AdjClose) {
        return "green";
    } else {
        return "red";
    }
  } else {
    return "green";
  }

});

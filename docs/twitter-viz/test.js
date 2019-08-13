var primary = String(first),
    secondary = String(second);

var margin = {top: 20, right: 20, bottom: 30, left: 60},
    width = 500 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

var parseDate = d3.time.format("%Y").parse;

var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var preline = d3.svg.area()
    .interpolate("monotone")
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d["Pre"]); });

var postline = d3.svg.area()
    .interpolate("monotone")
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d["Post"]); });

var area = d3.svg.area()
    .interpolate("monotone")
    .x(function(d) { return x(d.date); })
    .y1(function(d) { return y(d["Pre"]); });
    
    
    ////////////////  CHINOOK  ////////////////////
    
var svgchin = d3.select("#chinook").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//d3.csv("chingill.csv", function(error, data) {
var data = d3.csv.parse( d3.select("pre#chingill").text() );
    
  data.forEach(function(d) {
    d.date = parseDate(d.Year);
    d["Pre"]= +d["Pre"];
    d["Post"] = +d["Post"];
  });

  x.domain(d3.extent(data, function(d) { return d.date; }));

  y.domain([
    d3.min(data, function(d) { return Math.min(d["Pre"], d["Post"]); }),
    d3.max(data, function(d) { return Math.max(d["Pre"], d["Post"]); })
  ]);

  svgchin.datum(data);

  svgchin.append("clipPath")
      .attr("id", "clip-below-chin")
    .append("path")
      .attr("d", area.y0(height));

  svgchin.append("clipPath")
      .attr("id", "clip-above-chin")
    .append("path")
      .attr("d", area.y0(0));

  svgchin.append("path")
      .attr("class", "area above")
      .attr("clip-path", "url(#clip-above-chin)")
      .attr("d", area.y0(function(d) { return y(d["Post"]); }));

  svgchin.append("path")
      .attr("class", "area below")
      .attr("clip-path", "url(#clip-below-chin)")
      .attr("d", area);

  svgchin.append("path")
      .attr("class", "preline")
      .attr("d", preline)
      .style("stroke", "#828282");

  svgchin.append("path")
      .attr("class", "postline")
      .attr("d", postline)
      .style("stroke", "#000");

  svgchin.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svgchin.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Pieces");
//});

window.updateSeine = function(){    // making jsFiddle-friendly
//function updateSeine() {

    var data = d3.csv.parse( d3.select("pre#chinseine").text() );
    //d3.csv("chinseine.csv", function(error, data) {
      data.forEach(function(d) {
        d.date = parseDate(d.Year);
        d["Pre"]= +d["Pre"];
        d["Post"] = +d["Post"];
      });

      x.domain(d3.extent(data, function(d) { return d.date; }));

      y.domain([
        d3.min(data, function(d) { return Math.min(d["Pre"], d["Post"]); }),
        d3.max(data, function(d) { return Math.max(d["Pre"], d["Post"]); })
      ]);

      var svgchin = d3.select("#chinook").datum(data).transition();
      
      svgchin.select(".preline")
        .duration(750)
        .attr("d", preline(data));
      
      svgchin.select(".postline")
        .duration(750)
        .attr("d", postline(data));
      
      svgchin.select("#clip-above-chin path")
        .duration(750)
        .attr("d", area.y0(0));
        
      svgchin.select("#clip-below-chin path")
        .duration(750)
        .attr("d", area.y0(height));
        
      svgchin.select(".area.above")
        .duration(750)
        .attr("d", area.y0(function(d) { return y(d["Post"]); }));
    
      svgchin.select(".area.below")
        .duration(750)
        .attr("d", area);
        
      svgchin.select(".y.axis") // change the y axis
        .duration(750)
        .call(yAxis);
        
    //});
}
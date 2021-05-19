

function interpolateZoom (translate, scale) {
   return d3.zoomIdentity
      .translate(width / 2.75, height / 2.75)
      .scale(zoomLevel)
      .translate(-width/2.75, -height/2.75);
}


var data = [10, 5, 12, 15];
         
         var width = 300 
            scaleFactor = 20, 
            barHeight = 30;
            height = 30;
         
         var graph = d3.select("#chartAreaModal")
            .append("svg")
            .attr("width", width)
            .attr("height", barHeight * data.length);
         
         var bar = graph.selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", function(d, i) {
               return "translate(0," + i * barHeight + ")";
            });
         bar.append("rect").attr("width", function(d) {
            return d * scaleFactor;
         })
         
         
         .attr("height", barHeight - 1);
         
         function colorPicker(d){
           var colorCode = "#79abbd";
            switch(d){
               case 10:
               colorCode = "#79abbd"
               break;
               case 5:
               colorCode = "#6784b4"
               break;
               case 12:
               colorCode = "#9b799b"
               break;
               case 15:
               colorCode = "#3905f7"
               break;
                }
                return colorCode;
            }

         bar.append("text")
            .attr("x", function(d) { return (d*scaleFactor); })
            .attr("y", barHeight / 2)
            .attr("dy", ".35em")
            .text(function(d) { return d; })
            .attr("fill", function(d) {
               return colorPicker(d); // call the color picker to get the fill.
            }).attr("color", function(d) {
               return colorPicker(d); // call the color picker to get the fill.
            })
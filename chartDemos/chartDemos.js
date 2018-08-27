var data = [4, 8, 15, 16, 23, 42];

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

var bar = d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });

// data = [5, 4, 3, 2, 1, 10];

function updateChart() {
    setInterval(function () {
        data = [];
        for(var i = 0; i < Math.floor(Math.random() * 10 + 5); i++){
            data.push(Math.floor(Math.random() * 10 + 1));
        }
        console.log("length: ", data.length , "data: ", data);

        //update
        d3.select(".chart")
            .selectAll("div")
            .data(data)
            .transition()
            .duration(300)
            .style("width", function (d) {
                return x(d) + "px"
            })
            .text(function (d) {
                return d;
            });

        //enter
        d3.select(".chart")
            .selectAll("div")
            .data(data)
            .enter().append("div")
            .style("width", function (d) {
                return x(d) + "px"
            })
            .text(function (d) {
                return d;
            });

        //remove
        d3.select(".chart")
            .selectAll("div")
            .data(data)
            .exit()
            .remove();
        updateChart();
    }, 3000);
}

updateChart();
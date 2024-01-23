// Assuming you've already loaded D3.js in your HTML

d3.json('/assets/js/crypto_bubble.json').then(data => {
    // Set the dimensions of the chart
    const margin = { top: 20, right: 20, bottom: 150, left: 50 },
          width = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

    // Append the SVG object to the div with id "bubble-chart"
    const svg = d3.select("#bubble-chart")
                  .append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                  .attr("transform", `translate(${margin.left},${margin.top})`);

    // X-axis scale
    const x = d3.scaleBand()
                .range([0, width])
                .domain(data.map(d => d.Type))
                .padding(1);

    // Add the x-axis
    const xAxis = svg.append("g")
                     .attr("transform", `translate(0,${height})`)
                     .call(d3.axisBottom(x))
                     .selectAll("text")
                        .style("text-anchor", "end")
                        .attr("dx", "-.8em")
                        .attr("dy", ".15em")
                        .attr("transform", "rotate(-45)");

    // Color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10)
                    .domain(data.map(d => d.Type));

    const tooltip = d3.select("body").append("div")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px");

    // Force simulation setup
    const simulation = d3.forceSimulation(data)
                         .force("x", d3.forceX(d => x(d.Type)).strength(1))
                         .force("y", d3.forceY(height / 2).strength(0.5))
                         .force("collide", d3.forceCollide(20))
                        //  .velocityDecay(0.1)
                         .on("tick", ticked);

    function ticked() {
        bubbles
            .attr("cx", d => d.x = Math.max(20, Math.min(width - 20, d.x)))
            .attr("cy", d => d.y = Math.max(20, Math.min(height - 20, d.y)));
    }

    // Create the bubbles
    const bubbles = svg.append("g")
                       .selectAll("circle")
                       .data(data)
                       .enter().append("circle")
                       .attr("r", 16) // Fixed bubble size
                       .style("fill", d => color(d.Type))
                       .style("opacity", 0.7)
                       .attr("stroke", "black")
                       .on("mouseover", function(event, d) {
                            tooltip.html(d["Primary Subject"])
                                   .style("visibility", "visible");
                        })
                       .on("mousemove", function(event) {
                            tooltip.style("top", (event.pageY - 10) + "px")
                                   .style("left", (event.pageX + 10) + "px");
                        })
                       .on("mouseout", function() {
                            tooltip.style("visibility", "hidden");
                        });

    // Optionally, add tooltips or labels
    function continuousMovement() {
        simulation.nodes().forEach(d => {
            d.x += (Math.random() - 0.05) * 1; // Adjust values for different movement speed
            d.y += (Math.random() - 0.05) * 1;
        });

        simulation.alpha(0.1).restart(); // Restarts the simulation with a small alpha value
    }

    // Start the continuous movement
    setInterval(continuousMovement, 1);
});

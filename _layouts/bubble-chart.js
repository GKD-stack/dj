// Assuming you've already loaded D3.js in your HTML

d3.json('/assets/js/crypto_bubble.json').then(data => {
    // Set the dimensions of the chart
    const margin = { top: 20, right: 20, bottom: 30, left: 50 },
          width = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

    // Append the SVG object to the div with id "bubble-chart"
    const svg = d3.select("#bubble-chart")
                  .append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                  .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create a scale for your x-axis
    const x = d3.scaleBand()
                .range([0, width])
                .domain(data.map(d => d.Type))
                .padding(0.1);

    svg.append("g")
       .attr("transform", `translate(0,${height})`)
       .call(d3.axisBottom(x));

    // Create a scale for your y-axis (if needed)

    // Create a scale for bubble size
    const z = d3.scaleSqrt()
                .domain([0, d3.max(data, d => d.count)])
                .range([2, 30]); // Adjust size range as needed

    // Create the bubbles
    svg.selectAll("bubble")
       .data(data)
       .enter().append("circle")
       .attr("cx", d => x(d.Type))
       .attr("cy", height / 2) // Adjust as needed
       .attr("r", d => z(d.count))
       .style("fill", "lightblue")
       .style("opacity", "0.7")
       .attr("stroke", "black");

    // Optionally, add labels or tooltips here
});

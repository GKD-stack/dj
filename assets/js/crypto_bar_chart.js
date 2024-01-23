// // Assuming your data is an array of objects [{ scamName: 'Scam A', count: 10, description: 'Sample description for Scam A' }, ...]

// d3.json('/assets/js/scams.json').then(data => {
//     // Set dimensions and margins for the graph
//     const margin = {top: 30, right: 30, bottom: 150, left: 60},
//           width = 600 - margin.left - margin.right,
//           height = 600 - margin.top - margin.bottom;

//     // Append the svg object to the div with id "my-d3-graph"
//     const svg = d3.select("#crypto_bar_chart")
//                   .append("svg")
//                   .attr("width", width + margin.left + margin.right)
//                   .attr("height", height + margin.top + margin.bottom)
//                   .append("g")
//                   .attr("transform", `translate(${margin.left},${margin.top})`);

//     // X axis
//     const x = d3.scaleBand()
//                 .range([0, width])
//                 .domain(data.map(d => d.scamName))
//                 .padding(0.2);

//     svg.append("g")
//        .attr("transform", `translate(0,${height})`)
//        .call(d3.axisBottom(x))
//        .selectAll("text")
//        .style("text-anchor", "end")
//        .attr("dx", "-.8em")
//        .attr("dy", ".15em")
//        .attr("transform", "rotate(-45)");

//     // Add Y axis
//     const y = d3.scaleLinear()
//                 .domain([0, d3.max(data, d => d.count)])
//                 .range([height, 0]);

//     svg.append("g")
//        .call(d3.axisLeft(y));

//     // Bars
    
    
//     svg.selectAll("mybar")
//        .data(data)
//        .enter()
//        .append("rect")
//        .attr("x", d => x(d.scamName))
//        .attr("y", d => y(d.count))
//        .attr("width", x.bandwidth())
//        .attr("height", d => height - y(d.count))
//        .attr("fill", "#69b3a2")
//        // Tooltip
//        .on("mouseover", (event, d) => {
//            // Show tooltip on hover
//            // You can use d3.select('body').append('div') to create a tooltip div and set its content to d.description
//        })
//        .on("mouseleave", (event, d) => {
//            // Hide tooltip
//            // You can remove or hide the tooltip div created earlier
//        });
// });

// Assuming your data is an array of objects [{ scamName: 'Scam A', count: 10, description: 'Sample description for Scam A' }, ...]

d3.json('/assets/js/scams.json').then(data => {
    // Set dimensions and margins for the graph
    const margin = {top: 30, right: 30, bottom: 150, left: 60},
          width = 600 - margin.left - margin.right,
          height = 600 - margin.top - margin.bottom;

    // Append the svg object to the div with id "crypto_bar_chart"
    const svg = d3.select("#crypto_bar_chart")
                  .append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                  .attr("transform", `translate(${margin.left},${margin.top})`);

    // X axis
    const x = d3.scaleBand()
                .range([0, width])
                .domain(data.map(d => d.scamName))
                .padding(0.2);

    svg.append("g")
       .attr("transform", `translate(0,${height})`)
       .call(d3.axisBottom(x))
       .selectAll("text")
       .style("text-anchor", "end")
       .attr("dx", "-.8em")
       .attr("dy", ".15em")
       .attr("transform", "rotate(-45)");

    // Add Y axis
    const y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.count)])
                .range([height, 0]);

    svg.append("g")
       .call(d3.axisLeft(y));

    // Tooltip
    const tooltip = d3.select("body").append("div")
                      .attr("class", "tooltip")
                      .style("opacity", 0);

    // Bars
    svg.selectAll("mybar")
       .data(data)
       .enter()
       .append("rect")
       .attr("x", d => x(d.scamName))
       .attr("y", d => y(d.count))
       .attr("width", x.bandwidth())
       .attr("height", d => height - y(d.count))
       .attr("fill", "#69b3a2")
       // Tooltip
       .on("mouseover", (event, d) => {
           tooltip.transition()
                  .duration(200)
                  .style("opacity", .9);
           tooltip.html(`Scam Name: ${d.scamName}<br/>Count: ${d.count}<br/>Description: ${d.description}`)
                  .style("left", (event.pageX) + "px")
                  .style("top", (event.pageY - 50) + "px");
       })
       .on("mouseleave", (event, d) => {
           tooltip.transition()
                  .duration(500)
                  .style("opacity", 0);
       });
});

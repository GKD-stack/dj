document.addEventListener("DOMContentLoaded", function() {
    const agencies = [
        {
            name: "CMS via CLIA",
            description: "The CLIA is primarily concerned with analytical validation of testing but has no authority to assess the utility of the tests being performed or regulate the information DTC-GT companies convey to consumers."
        },
        {
            name: "FDA",
            description: "The FDA approves any diagnostic testing, but doesn’t monitor any data storage techniques."
        },
        {
            name: "FTC",
            description: "The FTC is supposed to ensure DTC-GT companies don't act deceptively and prevent them from misleading consumers. It endorses the NIST Privacy Framework and the Fair Information Practice Principles but lacks enforcement."
        }
    ];

    const agencyInfoDiv = d3.select("#agency")
        .style("display", "flex")
        .style("flex-wrap", "wrap")
        .style("justify-content", "center")
        .style("align-items", "flex-start")
        .style("gap", "20px");

    const agencyBoxes = agencyInfoDiv.selectAll(".agency-box")
        .data(agencies)
        .enter()
        .append("div")
        .attr("class", "agency-box")
        .style("border", "1px solid #ccc")
        .style("padding", "20px")
        .style("min-width", "200px")
        .style("min-height", "100px")
        .style("display", "flex")
        .style("flex-direction", "column")
        .style("justify-content", "center")
        .style("align-items", "center")
        .style("text-align", "center")
        .style("box-shadow", "0 4px 8px rgba(0,0,0,0.1)")
        .style("border-radius", "16px")
        .style("background-color", "#fff");

    // Add agency name text
    agencyBoxes.append("p")
        .text(d => d.name)
        .style("margin", "0")
        .style("padding", "0")
        .style("font-weight", "bold");

    // Add hidden descriptions
    agencyBoxes.append("div")
        .attr("class", "description")
        .text(d => d.description)
        .style("display", "none")
        .style("position", "absolute")
        .style("width", "auto")
        .style("max-width", "80%")
        .style("background-color", "#f9f9f9")
        .style("border", "1px solid #ddd")
        .style("z-index", "100")
        .style("padding", "10px")
        .style("box-shadow", "0 4px 8px rgba(0,0,0,0.1)")
        .style("border-radius", "8px")
        .style("text-align", "justify");

    // Show description on hover
    agencyBoxes.on("mouseover", function(event, d) {
        d3.select(this).select(".description").style("display", "block");
    })
    .on("mouseout", function(event, d) {
        d3.select(this).select(".description").style("display", "none");
    });
});


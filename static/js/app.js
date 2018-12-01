//create a variable to story contents of data.js
var tableData = data;
//create a reverence to the table contents
var tbody = d3.select("tbody");

// create init functions to display data from data.js
function init() {
    //apply function to data to display on webpage
    data.forEach((render) => {
        var row = tbody.append("tr");
        Object.entries(render).forEach(([key, value]) => {
            var cell = tbody.append("td");
        cell.text(value);
        });
    });
}

// function to remove table contents
function clearTable() {
    tbody.html("");
}

//function to listen for input date and filter table accordingly
function filterDate() {
    var target = d3.select("#filter-btn");

    target.on("click", function() {
        //prevent page from refreshing
        d3.event.preventDefault();

        //select the inpute element and get the raw html block
        var element = d3.select("#datetime");
        //obtain value of html block
        var filterValue = element.property("value");

        //for troubleshooting
        console.log(filterValue);

        var filterData = tableData.filter(ufo => ufo.datetime === filterValue);

        //for troubleshooting: print result to console
        console.log(filterData); 

        //remove table body
        clearTable();

        //apply function to print fitlered data
        filterData.forEach((render) => {
            var row = tbody.append("tr");
            Object.entries(render).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
            });
        });
    })
};

//use init() to automatically display data in html document
init();
//call function to listen and filter according to user input
filterDate();
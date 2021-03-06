// from data.js
var tableData = data;

var tableSelect = d3.select('tableSelect');

// go through each and append
tableData.forEach( function(ufos) { 
    var newRow = tableSelect.append('tr');
    Object.entries(ufos).forEach(function([key,value]) {

        var newcells = newRow.append('td');
        newcells.text(value);
    });
});

// make sure the function works on submit and button click
var button = d3.select('#filter-btn');
var form = d3.select("#form");

button.on('click', searchDate);
form.on('submit', searchDate);


// function to search through input and display date search
function searchDate() {

    //prevent refresh
    d3.event.preventDefault();

    // capture input form id
    var inputID = d3.select("#datetime");

    //input value
    var inputDate = inputID.property("value");

    // create filter dataset
    var datesinp = tableData.filter( dates => dates.datetime === inputID.property('value'));

    // clear existing outputs
    tableSelect.text('');

    // show results called on the datesinp variable
    datesinp.forEach( function(ufos) { 
        var newRow = tableSelect.append('tr');
        Object.entries(ufos).forEach(function([key,value]) {

            var newcells = newRow.append('td');
            newcells.text(value);
        });
    });

    //make sure everything matches
    console.log(datesinp);
    console.log(inputDate);
};
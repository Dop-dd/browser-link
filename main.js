
/*
var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/"); 
xhr.send();

xhr.onreadystatechange = function() {       
    if(this.readyState == 4 && this.status == 200) {
        //document.getElementById("data").innerHTML = this.responseText;
       data = JSON.parse(this.responseText);         
       
    }
};

// gives the onreadyState time to reach a ready state of 4
setTimeout(function() {
    console.log(data);     
}, 500);

*///
//--------------- using callbacks-----------------------------------------

//const baseURL =  "https://ci-swapi.herokuapp.com/api/";

function  getData(url, cb) {
    var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", url); 
xhr.send();

xhr.onreadystatechange = function() {       
    if(this.readyState == 4 && this.status == 200) {
        //document.getElementById("data").innerHTML = this.responseText;
      cb(JSON.parse(this.responseText));         
       
    }
 };

};
// this displays the results in a table

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);
  })
  return `<tr>${tableHeaders}</tr>`;
}
 
//--------------- Pagination-----------------
function genetatePaginationButtons(next, prev) {
    if (next && prev) {
        return `<button onclick="writeToDocument('${prev}')">Previous</button>`;
         `<button onclick="writeToDocument('${next}')">Next</button>`;
    }
        else if (next && !prev) {
            return  `<button onclick="writeToDocument('${next}')">Next</button>`;
        } else if (!next && prev) {
            return `<button onclick="writeToDocument('${prev}')">Previous</button>`;
        }

    
}

function writeToDocument(url) {
    var tableRows = [];
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(url, function(data) {
        var pagination;
        if (data.next || data.previous) {
            pagination = genetatePaginationButtons(data.next, data.previous);
        }
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {    
            var dataRows = [];
            
            Object.keys(item).forEach(function(key) {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                dataRows.push(`<td>${truncatedData}</td>`);
        });
           tableRows.push(`<tr>${dataRows}</tr>`);

          el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`.replace(/,/g, "");
 });

});
}

/*
function printDataTocons(data) {
    console.log(data);
}

getData(printDataTocons);
*/

/*
getData(function(data) {
    console.log(data)
});
*/

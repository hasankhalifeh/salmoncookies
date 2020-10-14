'use strict';

var branches = [];

var hours = [];
function fillHours() {
    for (var i = 6; i <= 12; i++) {
        if (i === 12) {
            hours.push(i + 'pm');
        }
        else {
            hours.push(i + 'am');
        }
    }

    for (var j = 1; j <= 7; j++) {
        hours.push(j + 'pm');
    }
}

fillHours();
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
function Branch(bName, minCust, maxCust, averageSale,) {
    this.branchName = bName,
        this.mincustomers = minCust;
    this.maxcustomers = maxCust;
    this.avgSale = averageSale;
    this.randCustomers = [];
    this.totalCookies = 0;
    this.cookiesPerSale = [];
    branches.push(this);

}
Branch.prototype.fillRandCustomers = function () {
    for (var i = 0; i < hours.length; i++) {
        this.randCustomers.push(getRndInteger(this.mincustomers,this.maxcustomers));
    }
};
Branch.prototype.fillCookiePerSale = function () {

    for (var k = 0; k < hours.length; k++) {
        var cookiePerHr = Math.floor(this.randCustomers[k] * this.avgSale);
        this.cookiesPerSale.push(cookiePerHr);
        this.totalCookies = this.totalCookies + cookiePerHr;


    }
};


var seattle = new Branch('Seattle', 23, 65, 6.3);
seattle.fillRandCustomers();
seattle.fillCookiePerSale();
console.log(seattle)

var tokyo = new Branch('Tokyo', 3, 24, 1.2);
tokyo.fillRandCustomers();
tokyo.fillCookiePerSale();
console.log(tokyo)

var paris = new Branch('Paris', 20, 38, 2.3);
paris.fillRandCustomers();
paris.fillCookiePerSale();
console.log(paris)

var lima = new Branch('Lima', 2, 16, 4.6);
lima.fillRandCustomers();
lima.fillCookiePerSale();
console.log(lima)

var dubai = new Branch('Dubai', 11, 38, 3.7);
dubai.fillRandCustomers();
dubai.fillCookiePerSale();
console.log(dubai)

console.log(branches)

/*function buildTable(branchesArray) {
    var section1 = document.getElementById('tablesection');
    var table1 = document.createElement('table');
    section1.appendChild(table1);
    var thead1 = document.createElement('thead');
    var tr1 = document.createElement('tr');
    var th1 = document.createElement('th');
    table1.appendChild(thead1)
    tr1.appendChild(th1);
    thead1.appendChild(tr1);

    for (var i = 0; i < hours.length; i++) {
        var tableheader = document.createElement('th')
        tableheader.textContent = hours[i];
        tr1.appendChild(tableheader);
    }
    var tbody1 = document.createElement('tbody');
    table1.appendChild(tbody1);
    var th2 = document.createElement('th');
    th2.textContent = 'Daily Location Total';
    tr1.appendChild(th2);*/

    Branch.prototype.render = function () {
        
        var tr2 = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.textContent= this.branchName;
        tr2.appendChild(td1);
        
        for(var i =0 ; i<this.cookiesPerSale.length; i++){
            var td2 = document.createElement('td');
            td2.textContent = this.cookiesPerSale[i];
            tr2.appendChild(td2);

        }

        var td3 = document.createElement('td');
        td3.textContent = this.totalCookies;
        tr2.appendChild(td3);
        return tr2;  
        
    }

    function tableHead() {
        var thead1 = document.createElement('thead');
        var tr1 = document.createElement('tr');
        thead1.appendChild(tr1);
        var th1 = document.createElement('th');
        tr1.appendChild(th1);

        for(var i=0 ; i<hours.length;i++){
            var tableheader = document.createElement('th');
            tableheader.textContent= hours[i];
            tr1.appendChild(tableheader);

        }
        var th2 = document.createElement('th');
        th2.textContent= 'dailyTotal';
        tr1.appendChild(th2);
        return thead1;

    }

    function tablebody(branchArray){ 
        var tbody = document.createElement('tbody');
        for(var i = 0 ; i< branchArray.length ; i++){
            var branchrow = branchArray[i].render();
            tbody.appendChild(branchrow);
            
        }
        return tbody;

    }
    
    function tablefooter(branchArray) {
        var tr3 = document.createElement('tr');
        var tr3td1 = document.createElement('td');
        tr3td1.textContent= 'totalCookies';
        tr3.appendChild(tr3td1);
        var tfoot = document.createElement('tfoot');
        var dailyTotal = 0;
        for(var i = 0 ; i < hours.length;i++){
            var totalCookies = 0;
            for(var k=0;k<branchArray.length;k++){
                totalCookies= totalCookies + branchArray[k].cookiesPerSale[i];
            }
            var tr3td2 = document.createElement('td');
            tr3td2.textContent= totalCookies;
            tr3.appendChild(tr3td2);
            dailyTotal = dailyTotal + totalCookies;
         }
            var tr3td3= document.createElement('td');
            tr3td3.textContent='dailytotal';
            tr3.appendChild(tr3td3);
            tfoot.appendChild(tr3);
            return tfoot;
    }
        function buildtable(branchArray) {
            var section1 = document.getElementById('tablesection');
            var table1 = document.createElement('table');
            section1.innerHTML=' ';
            section1.appendChild(table1);
            table1.appendChild(tableHead());
            table1.appendChild(tablebody(branchArray));
            table1.appendChild(tablefooter(branchArray));
    
            
        }
        buildtable(branches);

var myForm = document.getElementById('cookies');
console.log(myForm)


myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var location = event.target.location.value;
    var minCustomer = parseInt(event.target.minCustomer.value);
    var maxCustomer = parseInt(event.target.maxCustomer.value);
    var avgSales = parseFloat(event.target.avgSales.value)

   
    var location1 = new Branch(location,minCustomer, maxCustomer, avgSales);
    console.log(location1);
    location1.fillRandCustomers();
    location1.fillCookiePerSale();

    buildtable(branches);

})
    //console.log(location1);
    //branches.push(location1);
     //myForm.reset();

/* myForm.addEventListener("submit"), function (event) {
    document.event.preventDefault();
    var city = event.target.location.value;
    var minCustomer = parseInt(event.target.minCustomer.value);
    var maxCustomer = parseInt(event.target.maxCustomer.value);
    var avgSales = parseFloat(event.target.avgSales.value);
    console.log(typeof(minCustomer));
    console.log(typeof(avgSales));
    console.log(submit);
    event.preventDefault();
}*/
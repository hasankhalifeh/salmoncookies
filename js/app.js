;function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
  // Seattle
var Seattle = {
    branchName:'Seattle',
    minCustomer: 23,
    maxCustomer: 65,
    avgSale: 6.3,
    hours: [],
    randCustomers:[],
    cookiePerSale:[],

    fillHours:function(){
        for(i=6;i<=12;i++){
            this.hours.push(i+'am')
        }
        for(j=1;j<=7;j++){
            this.hours.push(j+'pm')
    }
},
    

    fillRandCustomers: function(){
        for (var i=0;i<14;i++){
        this.randCustomers.push(getRndInteger(23,65)); 
        }
    },
    fillCookiePerSale:function(){
        this.fillRandCustomers();
        for (var k=0; k<=14; k++){
            for(var k=0; k<this.randCustomers.length;k++)
            this.cookiePerSale.push(Math.floor(this.randCustomers[k]*this.avgSale));
    
        }
},
};

Seattle.fillCookiePerSale();
Seattle.fillHours();
console.log(Seattle);


  // Tokyo
  var Tokyo = {
    branchName:'Tokyo',
    minCustomer: 3,
    maxCustomer: 24,
    avgSale: 1.2,
    hours: [],
    randCustomers:[],
    cookiePerSale:[],

    fillHours:function(){
        for(i=6;i<=12;i++){
            this.hours.push(i+'am')
        }
        for(j=1;j<=7;j++){
            this.hours.push(j+'pm')
    }
},
    

    fillRandCustomers: function(){
        for (var i=0;i<14;i++){
        this.randCustomers.push(getRndInteger(23,65)); 
        }
    },
    fillCookiePerSale:function(){
        this.fillRandCustomers();
        for (var k=0; k<=14; k++){
            for(var k=0; k<this.randCustomers.length;k++)
            this.cookiePerSale.push(Math.floor(this.randCustomers[k]*this.avgSale));
    
        }
},
};

Tokyo.fillCookiePerSale();
Tokyo.fillHours();
console.log(Tokyo);

   // Dubai
var Dubai = {
    branchName:'Dubai',
    minCustomer: 11,
    maxCustomer: 38,
    avgSale: 3.7,
    hours: [],
    randCustomers:[],
    cookiePerSale:[],

    fillHours:function(){
        for(i=6;i<=12;i++){
            this.hours.push(i+'am')
        }
        for(j=1;j<=7;j++){
            this.hours.push(j+'pm')
    }
},
    

    fillRandCustomers: function(){
        for (var i=0;i<14;i++){
        this.randCustomers.push(getRndInteger(23,65)); 
        }
    },
    fillCookiePerSale:function(){
        this.fillRandCustomers();
        for (var k=0; k<=14; k++){
            for(var k=0; k<this.randCustomers.length;k++)
            this.cookiePerSale.push(Math.floor(this.randCustomers[k]*this.avgSale));
    
        }
},
};

Dubai.fillCookiePerSale();
Dubai.fillHours();
console.log(Dubai);

  // Paris
  var Paris = {
    branchName:'Paris',
    minCustomer: 20,
    maxCustomer: 38,
    avgSale: 2.3,
    hours: [],
    randCustomers:[],
    cookiePerSale:[],

    fillHours:function(){
        for(i=6;i<=12;i++){
            this.hours.push(i+'am')
        }
        for(j=1;j<=7;j++){
            this.hours.push(j+'pm')
    }
},
    

    fillRandCustomers: function(){
        for (var i=0;i<14;i++){
        this.randCustomers.push(getRndInteger(23,65)); 
        }
    },
    fillCookiePerSale:function(){
        this.fillRandCustomers();
        for (var k=0; k<=14; k++){
            for(var k=0; k<this.randCustomers.length;k++)
            this.cookiePerSale.push(Math.floor(this.randCustomers[k]*this.avgSale));
    
        }
},
};

Paris.fillCookiePerSale();
Paris.fillHours();
console.log(Paris);

  // Lima
  var Lima = {
    branchName:'Lima',
    minCustomer: 2,
    maxCustomer: 16,
    avgSale: 4.6,
    hours: [],
    randCustomers:[],
    cookiePerSale:[],

    fillHours:function(){
        for(i=6;i<=12;i++){
            this.hours.push(i+'am')
        }
        for(j=1;j<=7;j++){
            this.hours.push(j+'pm')
    }
},
    

    fillRandCustomers: function(){
        for (var i=0;i<14;i++){
        this.randCustomers.push(getRndInteger(23,65)); 
        }
    },
    fillCookiePerSale:function(){
        this.fillRandCustomers();
        for (var k=0; k<=14; k++){
            for(var k=0; k<this.randCustomers.length;k++)
            this.cookiePerSale.push(Math.floor(this.randCustomers[k]*this.avgSale));
    
        }
},
};

Lima.fillCookiePerSale();
Lima.fillHours();
console.log(Seattle);

function printBranchData(obj){
    var root = document.getElementById('body');
    var branchSection = document.createElement('section');
    var branchTitle = document.createElement('h2');
    var hourlySaleList = document.createElement('ul');
        for (var i=0;i<14; i++){
        var listItem = document.createElement('li');
        listItem.textContent=obj.hours[i]+':'+obj.cookiePerSale[i] +'cookies';
        hourlySaleList.appendChild(listItem)
    }
    branchTitle.textContent=obj.branchName;
    branchSection.appendChild(branchTitle);
    root.appendChild(branchSection);
    branchSection.appendChild(hourlySaleList);
}
    printBranchData(Seattle);
    printBranchData(Tokyo);
    printBranchData(Dubai);
    printBranchData(Paris);
    printBranchData(Lima);

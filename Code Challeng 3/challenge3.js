var resBill=[124,48,268];

 function billCal(bill){
    switch(true){
        case bill < 50:
            return bill*(20/100);
            
        case bill>=50 && bill< 200:
            return bill*(15/100);
            
        case bill > 200:
            return bill*(10/100);
    }
}

//console.log(resBill[0]);
console.log(billCal(resBill[0]));

var tip=[billCal(resBill[0]),billCal(resBill[1]),billCal(resBill[2])];

var totalBill= [(tip[0]+resBill[0]),(tip[1]+resBill[1]),(tip[2]+resBill[2])];

console.log(tip);
console.log(totalBill);
var budgetController = (function () {

    var Expense = function (id, description, value, percentage) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    
    Expense.prototype.calculatePercentages = function(totalIncome){
        
        if(totalIncome > 0){
        this.percentage = Math.round((this.value / totalIncome)*100);
    } else {
        this.percentage = -1;
    }
    };
    
    Expense.prototype.getPercentage = function(){
      return this.percentage;  
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function(curr) {
            sum += curr.value;
    });
data.total[type] = sum;
};


var data = {                                      // to add new exp and inc values
    allItems: {
        inc: [],
        exp: []
    },
    total : {
        inc : 0,
        exp : 0
    },

    budget : 0,

    percentage : -1
};



return {

    addItem : function (type, des, val) {

        var newItem, ID;


        // Here we are creating a new unique id for exp and inc. Eg: id=inc[2-1].id= 1
        if (data.allItems[type].length > 0) {
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
        } else {
            ID = 0;
        }

        //creating a new item based on exp or inc
        if (type === 'exp') {
            newItem = new Expense(ID, des, val);
        } else if (type === 'inc') {
            newItem = new Income(ID, des, val);

        }
        data.allItems[type].push(newItem); // item is pushed to arry

        return newItem; //returing the new element
    },

    deleteItem : function (type, id) {

        var ids, index;

        //eg : we need to delete id=6
        //data.allitems[type][id];
        //ids = [1 2 4 6 8] but we have an array like this in which id= 6 has index = 3



        ids = data.allItems[type].map(function (current) {
            return current.id;
        });

        index = ids.indexOf(id);

        if (index !== -1) {
            data.allItems[type].splice(index, 1); // here splice is a array method used to delete the item. index is which one to delete and 1 is how many we have to delete.
        }



    },


    calculateBudget : function () {

        // calculate the income and expenses
        calculateTotal('exp');
        calculateTotal('inc');


        // calculate the budget : income - expense

        data.budget = data.total.inc - data.total.exp;

        // calculate the percentage of income the we spent

        if (data.total.inc > 0) {

            data.percentage = Math.round((data.total.exp / data.total.inc) * 100);
        } else {
            data.percentage = -1;
        }
    },
    
    
    calculatePercentages : function(){
        /*
        eg : a=20
        b=10
        c=40
        
        income = 100
        a= 20/100*100 = 20%
        */
        
        data.allItems.exp.forEach(function(crr){
            crr.calculatePercentages(data.total.inc);
        });
   
    },
    
    getPercentage: function(){
        var allPer = data.allItems.exp.map(function(crr){
            return crr.getPercentage();
        });
        return allPer;
    },

    getBudget : function () {

        return {
            budget : data.budget,
            totalInc : data.total.inc,
            totalExp : data.total.exp,
            percentage : data.percentage

        };
    },

    testing: function () {
        console.log(data);
    }
};

})();

/**********************************************************************************/
var UIController = (function(){

    var DOMstring = {
        typeString : '.add__type',
        descriptionString : '.add__description',
        valueString : '.add__value',
        inputbtn : '.add__btn',
        incomeContainer : '.income__list',
        expenseContainer : '.expenses__list',
        budgetLabel : '.budget__value',
        incomeLabel : '.budget__income--value',
        expenseLabel : '.budget__expenses--value',
        percentageLabel : '.budget__expenses--percentage',
        container : '.container',
        expPercentLabel: '.item__percentage',
        dateLbel: '.budget__title--month'

    };
    
        var formatNumber = function(num, type){
            var numSplit, int, dec;
            /*
            + or - before number
            exactly 2 decimal points
            coma seperator for thousands
            
            eg: 5455.455 > +5,455.00
            */
            
            num = Math.abs(num);
            num = num.toFixed(2);
            
            numSplit= num.split('.');
            
            int = numSplit[0];
            
            if(int.length > 3){
                int = int.substr(0,int.length - 3) + ','+int.substr(int.length-3,3);//input = 2000, output= 2,000
            }
            
            dec = numSplit[1];
            
            return (type === 'exp'? '-':'+' ) + ' ' + int + '.' + dec;
            
        };
    
    var nodeListForEach = function(list, callBack){
        for(var i = 0; i<list.length ; i++){
            callBack(list[i], i);
        }
                
    };
    

    return{
        getInput : function(){ // declared as a publish funtion so that we can use in another module

            return{
                type : document.querySelector(DOMstring.typeString).value, // getting the income or expense type
                description : document.querySelector(DOMstring.descriptionString).value,
                value : parseFloat(document.querySelector(DOMstring.valueString).value)// to convert string into number to calculate
            };
        },

        addItemList : function(obj, type){

            var html, newHtml, element;
            //1. create html element string with placeholder

            if(type === 'inc'){
                element = DOMstring.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div>'
            }

            else if(type === 'exp'){
                element = DOMstring.expenseContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            //2. replace the placeholder data with actual data

            newHtml= html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%' , obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
            //3, insert the html into the DOM

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },


        deleteListItem: function(selectorID){

            // here we have to remove the child element to delete the item
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);

        },

        clearField : function(){

            var fields, fieldArr;

            fields = document.querySelectorAll(DOMstring.descriptionString+ ', '+DOMstring.valueString);// passing the two fileds that are to be cleared after use


            // here we converting list to an array by using slice function
            fieldArr =  Array.prototype.slice.call(fields);

            fieldArr.forEach(function(current, index, array){

                current.value = "";
            });

            fieldArr[0].focus();
        },

        displayBudget : function(obj){
            
            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DOMstring.budgetLabel).textContent = formatNumber(obj.budget, type);

            document.querySelector(DOMstring.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');

            document.querySelector(DOMstring.expenseLabel).textContent = formatNumber(obj.totalExp, 'exp');


            if (obj.percentage > 0){

                document.querySelector(DOMstring.percentageLabel).textContent = obj.percentage = obj.percentage + '%';


            }
            else{

                document.querySelector(DOMstring.percentageLabel).textContent = obj.percentage = '---';

            }
        },
        
        displayPercentages : function(percentages){
            
            var fields = document.querySelectorAll(DOMstring.expPercentLabel);
            

            
            nodeListForEach(fields, function(current, index){
                
                if(percentages[index] > 0){
                    current.textContent = percentages[index] + '%';
                } else {
                    
                
                current.textContent = '---';
                }
            });
            
        },
        
        diplayMonth : function(){
          var now, year, month, months;
            
            now = new Date();
            
            months = ['Jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jly', 'aug', 'sep', 'oct', 'nov', 'dec' ];
            
            month = now.getMonth();
            year = now.getFullYear();
            document.querySelector(DOMstring.dateLbel).textContent = months[month] + ' ' + year;
        },
        
        changeType : function(){
          
            var feilds= document.querySelectorAll(
            DOMstring.typeString + ','+
            DOMstring.descriptionString +','+
            DOMstring.valueString);
            
            nodeListForEach(feilds, function(cur){
                cur.classList.toggle('red-focus');
                
            });
            
            document.querySelector(DOMstring.inputbtn).classList.toggle('red');
        },


        getString : function(){ // declared as a publish funtion so that we can use in another module
            return DOMstring;
        }
    };

})();


/**********************************************************************************/


var controller = (function(budgetcrtl, UIcrtl){


    var setUpEventListners = function(){

        var DOM = UIcrtl.getString();


        document.querySelector(DOM.inputbtn).addEventListener('click', crtlAddItem);

        document.addEventListener('keypress', function(event){

            if(event.keyCode === 13 || event.which === 13){

                crtlAddItem();
            }

        });
        document.querySelector(DOM.container).addEventListener('click', crtldelItem);
        
        document.querySelector(DOM.typeString).addEventListener('change', UIcrtl.changeType);
        
    };
    
    

    var updateBudget = function(){

        //1. calculate the budget.

        budgetcrtl.calculateBudget();


        //2. returns the budget

        var budget = budgetcrtl.getBudget();

        //3. display the budget to UI

        UIcrtl.displayBudget(budget);
    };
    
    var updatePercentages = function(){
      
        //1. calculate the percentages
        
        budgetcrtl.calculatePercentages();
        
        //2. read the percentages from budget controller
        
        var percent = budgetcrtl.getPercentage();
        
        
        //3. update the UI with new percentage
        
        UIcrtl.displayPercentages(percent);
    };

    var crtlAddItem = function() {
        var inputItem,newItem;
        //1.get input items

        inputItem = UIcrtl.getInput();

        if(inputItem.description !== "" && !isNaN(inputItem.value) && inputItem.value>0){

            //2. add the item to budgetController

            newItem = budgetcrtl.addItem(inputItem.type, inputItem.description, inputItem.value);

            //3. add the item to UIController

            UIcrtl.addItemList(newItem, inputItem.type);

            //4.clear the feilds

            UIcrtl.clearField();

            //5. Calculate and updat the budget

            updateBudget();
            
            //6.calculate and update percentages
            
            updatePercentages();
        }
    };


    var crtldelItem = function(event){
        var itemID, splitID, type, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if(itemID){

            //inc-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            //1. delete the item from the data structure

            budgetcrtl.deleteItem(type, ID);

            //2. delete the item from UI

            UIcrtl.deleteListItem(itemID);
            //3. update and show the new budget


            updateBudget();
            
             //4.calculate and update percentages
            
            updatePercentages();

        }
    };


    return {
        init : function(){
            console.log('Application Works');
            
            UIcrtl.diplayMonth();

            UIcrtl.displayBudget({
                budget : 0,
                totalInc : 0,
                totalExp : 0,
                percentage : -1

            });
            
            

            setUpEventListners();
        }
    };

})(budgetController, UIController);

controller.init();
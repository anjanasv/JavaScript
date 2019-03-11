//function Consturctors*********************************************************************

/*//var john={
//    name : 'john',
//    yearOfBrith : 1990,
//    job : 'teacher'
//};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBrith = yearOfBirth;
    this.job = job;
}

Person.prototype.calAge = 
    function() {
        console.log(2019 - this.yearOfBrith);
    }
Person.prototype.lastName = 'smith';


var john = new Person('john', 1992, 'driver');
var jane = new Person('jane', 1990, 'teacher');
var vasu = new Person('vasu', 1996, 'developer');

john.calAge();
jane.calAge();
vasu.calAge();

console.log(john.lastName);
console.log(vasu.lastName);*/

/**********************************************************************************
//create.object method

//fist we will create a object that acts like a prototype

var personProto = {
    
    calAge : function (){
        console.log ( 2019- this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john. name = 'john';
john.yearOfBirth= 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name : {value: 'jane'},
    yearOfBirth : {value : 1990},
    job : {value : 'teacher'}
});
*/

/*
//*********************************************************************************************
Premitives vs Object

var a= 10;
var b = a;
 a= 20;
console.log(a);
console.log(b);


var obj1 = {
  name:'john',
    age: 20
};

obj1.age = 90;

var obj2 = obj1;

console.log(obj1.age);
console.log(obj2.age);
*/


/*********************************************************************************************************

//first-class functions or callback functions

var years = [1990, 1992, 1994, 1996, 1998, 2012];

function arrCal(arr , fn){
    var resArr=[];
    for(i=0; i < arr.length; i++){
        resArr.push(fn(arr[i]));
    }
//    console.log(resArr);
return resArr;
}

function calAge(el){
    return 2019 - el;
}

function isfullAge(el){
    return el >= 18;
}

function heartRate(el){
    if (el >= 18 && el <= 81){
        return Math.round(206.9 - 0.67*el);
    }
    else{
        return -1;
    }
}

var ages = arrCal(years , calAge);
console.log(ages);

var fAge = arrCal(ages, isfullAge);
console.log(fAge);

var hRate = arrCal(ages, heartRate);
console.log(hRate);


*/

//functions returning functions

function interviewQus(job){
    if(job === 'teacher'){
        return function(name){
            console.log('Your a teacher' +  name);
        }
    }
    else if ( job === 'designer'){
        return function(name){
            console.log('Your a designer' + name);
        }
    }
else {
    return function(name){
        console.log('Are you a developer' + name);
    }
}
}

var devQues = interviewQus('developer');
    devQues('Anjana');
var teacherQus = interviewQus('teacher');
teacherQus('Vasavi');
var designerQus = interviewQus('designer');
designerQus('donkey');
designerQus('monkey');
devQues('Vasavi');

interviewQus('teacher')('Vasu');
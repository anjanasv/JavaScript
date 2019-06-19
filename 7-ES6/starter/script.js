/* variables in ES5 and ES6 

var k = 23;

k=26;   
console.log(k);

const x= 23;

x=34;

console.log(x);



//ES5

function drivingLicence5(Test){
    
    if (Test){
        var firstName = 'john';
        var yearOfBirth = 1990;
        
    }
    
            console.log('my name is '+ firstName+' and age is '+yearOfBirth);

}

drivingLicence5(true);

//ES6
function drivingLicence6(Test){
    

            let firstName ;
            const yearOfBirth = 1990;


    if (Test){
        firstName = 'john';

    }
        console.log('my name is '+ firstName+' and age is '+yearOfBirth);

    
}

drivingLicence6(true);



let i = 23;

for( let i=0; i<5; i++){
    console.log(i);
}
console.log(i);
*/


/*************************************************************************************
//Strings


let firstName= 'John';
let lastName= 'Smith';
const yearOfBirth = 1992;

function calAge(year){
    return 2019-year;
}

//ES5
console.log('my name is '+firstName +' '+lastName+ ' and my age is '+calAge(yearOfBirth));

//ES6
console.log(`my name is ${firstName} ${lastName} and my age is ${calAge(yearOfBirth)}`);// this is template literals


const n= `${firstName} ${lastName}`;

console.log(n.startsWith('j'));
console.log(n.endsWith('Sm'));
console.log(n.includes('o'));
console.log(`${firstName} `.repeat(10));

*/

/**********************************************************************************************

////Arrow functions

const years = [1990, 1991, 1992, 1993, 1994];

//ES5

var ages5 = years.map(function(el){
    return 2019- el;
});

console.log(ages5);

//ES6

var age6 = years.map(el => 2019-el);

console.log(age6);

age6 = years.map((el, index) => `Age element ${index + 1 }: ${2019-el}`);

console.log(age6);

age6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1 }: ${age}`
});

console.log(age6);


*/

/**************************************************************************

//Arrow functions with this keyword

//ES5

var box5 = {
    color: 'green',
    position : 1,
    clickMe: function(){
    
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'this is a '+ self.color+' color box with position '+ self.position;
            alert(str);
            });
}
};

//box5.clickMe();

//ES6

const box6 = {
    color: 'green',
    position : 1,
    clickMe: function(){
    

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'this is a '+ this.color+' color box with position '+ this.position;
            alert(str);
            });
}
};

box6.clickMe();

//
//const box66 = {
//    color: 'green',
//    position : 1,
//    clickMe: () => {
//    
//
//        document.querySelector('.green').addEventListener('click', () => {
//            var str = 'this is a '+ this.color+' color box with position '+ this.position;
//            alert(str);
//            });
//}
//};
//
//box66.clickMe();


*/

/***********************************************************************************************


// Arrow functions


function Person(name) {
    this.name = name;
}

//ES5

Person.prototype.myFriends5 = function(fr) {
  
    var arr = fr.map(function(el) {
        return this.name + 'is friends with '+ el;
        
    }.bind(this));
    
    console.log(arr);
}

var friend = ['jane', 'bob', 'mark'];

new Person('John').myFriends5(friend);

//ES6

Person.prototype.myFriends6 = function(fr) {
  
    var arr = fr.map((el) => `${this.name} is friends with ${el}`);
    
    console.log(arr);
}



new Person('Mark').myFriends6(friend);
*/

/****************************************************************************************************
//Destructuring

//ES5

var john = ['John', 28];

var namr = john[0];
var age = john[1];


//ES6

const [name, ages]= ['john', 29];
console.log(name);
console.log(ages);


const obj = {
    firstName: 'Vasavi',
    lastName : 'Chandika'
};

const{ firstName: a, lastName : b} = obj;

console.log(a);
console.log(b);



//functions in destructuring

function calAge(years) {
    const age1 = new Date().getFullYear()- years;
    return [age1, 65- age1];
}

const [age2, retirement] = calAge(1980);
console.log(age2);
console.log(retirement);

*/

/************************************************************************************************

// Arrays in ES6


const boxes = document.querySelectorAll('.box');

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
});


//ES6

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur =>cur.style.backgroundColor = 'dodgerblue');


//ES5

for (var i = 0; i< boxesArr5.length; i++){
    if(boxesArr5[i].className === 'box blue'){
        continue;
    }
    
    boxesArr5[i].textContent = ' i am changes to blue';
}

//ES6

for( const cur of boxesArr6){
    if(cur.className.includes('blue')){
       continue;
       }
    cur.textContent = ' i am changes to blue';
}


//ES5

var ages = [12, 17, 21, 3,14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(crr => crr >= 18));

*/

/***********************************************************************************

//Spread operator

function addFourNum(a,b,c,d){
    return a+b+c+d;
}

var sum1 = addFourNum(12,13,14,15);
console.log(sum1);

//ES5
var ages = [12,13,14,15];
var sum2 = addFourNum.apply(null, ages);// here we are passing array into function so for that apply method is used
console.log(sum2);

//ES6

const sum3 = addFourNum(...ages);
console.log(sum3);



const smith = ['billy', 'lilly', 'gully'];
const miller = ['small', 'midium', 'large'];

const family = [...smith, ...miller];
const family2 = [...smith,'mally', ...miller];

console.log(family);
console.log(family2);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'red');
*/


/************************************************************************************************************

//Rest parameters

//ES5

function isFullAge5() {
//   console.log(arguments);
    
     var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur) { console.log((2016 - cur) >= 18); })
}

isFullAge5(1920, 1910, 1990);

//ES6
function isFullAge6(...years) {

    years.forEach(cur => console.log((2018 - cur) >=18));
}

isFullAge6(1990,  2016, 1992);

*/

/***************************************************************************************************************

//Default Parameters

//ES5
/*function SmithPerson(fname, yOB, lName, nationality) {
    
    lName === undefined ? lName = 'smith': lName = lName;
    nationality === undefined ? nationality = 'Italian' : nationality = nationality;
    
    this.fName= fname;
    this.yOB = yOB;
    this.lName= lName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1920,);
var sumath = new SmithPerson('Sumath', 1960, 'Miller', 'Indian');


//ES6
function SmithPerson(fname, yOB, lName = 'Smith', nationality='Aferican') {
    
    this.fName= fname;
    this.yOB = yOB;
    this.lName= lName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1920,);
var sumath = new SmithPerson('Sumath', 1960, 'Miller', 'Indian');

*/

/**************************************************************************************************************

//Maps

const question = new Map();

question.set('question', 'What is the latest version of JavaScript?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);

question.set(true, 'Correct answer');
question.set(false, 'wrong answer');

console.log(question.get('question'));

//console.log(question.size);

if(question.has(4)){
    
//question.delete(4);
//    console.log('4is there');
}

//question.clear();

//question.forEach((value, key)=> console.log(`this is ${key} and is set to ${value}`));

for(let[key, value] of 
   question.entries()){
    if(typeof(key) === 'number'){
    console.log(`Answer ${key} : ${value}`);
}
}

const ans= parseInt(prompt('enter the correct answer!!!'));

console.log(question.get(ans === question.get('correct')));
*/


/*******************************************************************************************

//classes

//ES5
var Person5 = function(name, yob, job){
    this.name = name;
    this.yob = yob;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = 2019 - this.yob;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

//john5.calculateAge();

//ES6

class Person6{
    constructor (name, yob, job){
        this.name = name;
        this.yob = yob;
        this.job = job;
    }
    calculateAge(){
            var age = 2019 - this.yob;
            console.log(age);
    }
}


const john6 = new Person5('John', 1990, 'teacher');

*/

/****************************************************************************************************/

//classes with subclasses

















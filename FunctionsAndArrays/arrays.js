/* Arrays*/

var names=['John','james','mary']
console.log(names[0]);
console.log(names.length);

// mutate array data

names[1]='ben';
names[names.length]='Mary';
console.log(names)

//array data types

var Mary= ['Ms','driver',1920,'blue','rosy' ];
Mary.push('red');// add element at end
Mary.unshift('hello');// add element at beginning

console.log(Mary);

Mary.pop();// remove the element at end
Mary.pop();
Mary.shift();//remove element at beginning


console.log(Mary);

console.log(Mary.indexOf('Ms'));

var isDriver= Mary.indexOf('driver')===-1? 'Mary is not driver': 'Mary is driver';

console.log(isDriver);
var johnB,markB,johnH,markH, johnBMI, markBMI;
johnB=70;//in kg
markB=60;
johnH= prompt("john height in meters?");
markH= prompt("mark height in meters?");

console.log(johnH+' '+'in meters'+' '+markH+' '+'in meters');

johnBMI= johnB/(johnH*johnH);
markBMI= markB/(markH*markH);


console.log('John BMI is'+ ' '+johnBMI+'kg/m2');
console.log('Mark BMI is'+' '+markBMI+'kg/m2');

var ifgreater= johnBMI > markBMI;

console.log(ifgreater);

console.log('Is John BMI is higher than Mark BMI'+' '+ifgreater);



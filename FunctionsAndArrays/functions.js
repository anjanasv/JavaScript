//functions
function calculator(birthyear)
{
    return 2018-birthyear;
}
var johnAge= calculator(1992);
var markAge= calculator(1987);
var jameAge= calculator(1920);

console.log(johnAge, markAge, jameAge);


function yearsUntil(year, name){
    var age= calculator(year);
    var retirement= 65- age;
    if(age<=65)
        {
    console.log(name+' retires in '+ retirement+' years.');
        }
    else{
        console.log(name+' is already retired.')
    }
}
yearsUntil(1992,'John');
yearsUntil(1987,'Mark');
yearsUntil(1950,'James');


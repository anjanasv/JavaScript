console.log(this);


calAAge(1990);

function calAAge(year){
    console.log(2018-year);
    console.log(this);// as this is a regular function call but not a method this variable is a function object
    
}

var john={
    name: 'john',
        year: 1990,
            calAge: function(){
                console.log(this);
                console.log(2018-this.year);
                            }
        
}

john.calAge();


var mark={
    Name:'Mark',
    year:1992
    
}

mark.calAge=john.calAge;
mark.calAge();
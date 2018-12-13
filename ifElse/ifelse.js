/*************if Else statements*/
var name='John';
var mariatalStatus='Single';

if(mariatalStatus === 'married')
    {
        console.log(name+' is married');
    }
else{
    console.log(name+' is still single, ready to mingle');
}


var isMarried=true;
if(isMarried)
    {
        console.log(name+' is married!');
    }
else{
    console.log(name+' is still single, ready to mingle');
}

/*Ternery Operator*/

//var age=prompt('Age of John');
var age;

age >= 18 ? console.log(name+' has an eligible age.'):console.log(name+' doesnot have an eligible age.');


//switch statement

//var job = prompt('job of John');
var job= 'teacher';

switch(job)
    {
        case 'teacher': console.log('He is a teacher');
            break;
        case 'driver': console.log('He is a driver');
            break;
            default : console.log('he is dong something else');
    }

switch(age)
    {
        case age>=0 || age<13:console.log(name+' is a boy');
            break;
        case age=13 || age<20: console.log(name+' is a teenager');
            break;
        case age>=20 || age<40: console.log(name+' is a young man');
            break;
        case age>=40: console.log(name+' is a man');
            break;
        default: console.log(name+' age is not know');
    }





















































































































































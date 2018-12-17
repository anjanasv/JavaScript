var john={
    firstName: 'John',
    mass: 70,
    height: 1.67,
    calBMI: function(){
     this.bmi= this.mass/(this.height*this.height);
}
};
var mark={
  firstName: 'Mark',
    mass: 60,
    height: 1.5,
    calBMI: function(){
     this.bmi =this.mass/(this.height*this.height);
}
};



       if (john.calBMI()> mark.calBMI()) {
       console.log(john.firstName+' has higher BMI '+john.bmi+'kg/m2');
       }
else if(mark.bmi>john.bmi){
    console.log(mark.firstName+' has higher BMI '+mark.bmi+'kg/m2');
}
else {
    console.log(john.firstName+' and '+mark.firstName+' has same BMI values');
}
    
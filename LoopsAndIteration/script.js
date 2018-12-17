//for loop

var Mary= ['Ms','driver',1920,'blue','rosy' ];
for(var i=0; i<10;i++){
    console.log(i);
}

//var Mary= ['Ms','driver',1920,'blue','rosy' ];
//
//for(var j=0; j<Mary.length;j++){
//    console.log(Mary[j]);
//}


// While loop

var k=0;
while(k<Mary.length){
    console.log(Mary[k]);
    k++;
}


//continue and break statements



for(var j=0; j<Mary.length;j++){
    
    if (typeof(Mary[j])!== 'string') continue;
    console.log(Mary[j]);
}


for(var j=0; j<Mary.length;j++){
    
    if (typeof(Mary[j])!== 'string') break;
    console.log(Mary[j]);
}


var johnRes=
    {
        res:[124,48,268,180,40],
   
        calTip: function()
        {
            this.tips=[];
            this.totalBill=[];
            for(var i=0; i<this.res.length; i++)
            {        
            var percentage;
          
            if(this.res[i] < 50){
            percentage= 0.2;}
                      
            else if(this.res[i]>=50 && this.res[i]< 200){
            percentage=0.15;}
                
            else if(this.res[i] > 200){
            percentage=0.1;}
                
                this.tips[i]= this.res[i]*percentage;
                this.totalBill[i]= this.tips[i]+ this.res[i];
            }            
        }
    };

johnRes.calTip();
console.log(johnRes);

var markRes=
    {
        res:[77,375,110,45],
   
        calTip: function()
        {
            this.tips=[];
            this.totalBill=[];
            for(var i=0; i<this.res.length; i++)
            {        
            var percentage;
          
            if(this.res[i] < 100){
            percentage= 0.2;}
                      
            else if(this.res[i]>=100 && this.res[i]< 300){
            percentage=0.1;}
                
            else if(this.res[i] > 300){
            percentage=0.25;}
                
                this.tips[i]= this.res[i]*percentage;
                this.totalBill[i]= this.tips[i]+ this.res[i];
            }            
        }
    };

markRes.calTip();
console.log(markRes);

function calAvg(tips){
    for(var j=0; j<tips.length;j++) {
        var sum=0;
        sum += tips[j];
        var avg = sum/tips.length;
    }
    return avg;
}

var jtAvg=calAvg(johnRes.tips);
var mtAvg= calAvg(markRes.tips);

console.log(jtAvg, mtAvg);

if (jtAvg>mtAvg){
 console.log('John gave higher tip');   
}
else if (mtAvg>jtAvg){
    console.log('Mark gave higher tip');
}
else{
    console.log('Both gave same tip');
}




var jamesRes=
    {
        res:[77 , 375 , 110, 45],
   
        calTip: function()
        {
            this.tips=[];
           
            for(var i=0; i < this.res.length; i++)
            {        
                if(this.res[i] < 100){
                    this.tips[i]=this.res[i]*(20/100);}

                else if(this.res[i]>=100 && this.res[i]< 300)
                    { this.tips[i]=this.res[i]*(15/100);}

                else { this.tips[i]=this.res[i]*(10/100);}
            }
              
            }            

    };
jamesRes.calTip();
console.log(jamesRes);

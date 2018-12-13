var gJ1,gJ2,gJ3,gM1,gM2,gM3,gMa1,gMa2,gMa3, avgMa, avgJ, avgM;

gJ1=97;
gJ2=134;
gJ3=105;
gM1=116;
gM2=94;
gM3=123;
gMa1=97;
gMa2=134;
gMa3=105;

avgJ=(gJ1+gJ2+gJ3)/3;
avgM=(gM1+gM2+gM3)/3;
avgMa=(gMa1+gMa2+gMa3)/3;

if(avgJ>avgM && avgJ>avgMa)
{
console.log('John team is the winner and score is '+avgJ);    
} 
else if(avgM>avgJ && avgM>avgMa)
{
console.log('Mark team is the winner and score is '+avgM);
}
else if(avgMa>avgJ && avgMa>avgM)
    {
console.log('Mary team is the winner and score is '+avgMa);
}
else
{
    console.log('Game Draw');
}
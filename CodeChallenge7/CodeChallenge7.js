(function(){
    


function Question(questions, answers, correct){
    this.questions= questions;
    this.answers = answers;
    this.correct = correct;
}


Question.prototype.displayQues = 
    function()
{
    console.log(this.questions);
     for(var i = 0; i< this.answers.length ; i++){
         console.log(i + ':' + this.answers[i]);
     }
}

Question.prototype.checkAnswer = function(ans, callback){
    var sc;
    if (ans === this.correct){
        console.log('Answer is correct');
        sc = callback(true);
    }
    else {
        console.log('Answer is worng!!!!');
          sc = callback(false);
         }
    this.displayAns(sc);
}

 Question.prototype.displayAns = function(score){
     console.log('your correct score is : '+ score);
     console.log('---------------------------------------------------------');
 }

var q1 = new Question('is JS easy to learn?', 
                                        ['yes','no'],
                                                    0);
var q2 = new Question('name of the course is?',
                                    ['html', 'css','JS'], 2);
var q3 = new Question('how many wonders in the world?',
                                    ['2','3','7'], 2);


function score(){
    var sc = 0;
    return function(correct){
        if(correct){
            sc++;
            
        }
        return sc;
    }
}

var keepScore = score();    

var questions = [q1, q2, q3];
    
    function nextQues(){

var n = Math.floor(Math.random(questions)*3);

questions[n].displayQues();

var answer = prompt('what is the correct answer??');

        if(answer !== 'exit'){
questions[n].checkAnswer(parseInt(answer), keepScore);
        nextQues();
    }
}
    nextQues();
    })(); 
var playing = false;
var score;
var action;
var timeremaining,gameOverTime; 
var correctAnswer;
var dialogNumb1,dialogNumb2,dialogAns;
var questionAndAnswer = [];
var totalQuestion=0;


document.getElementById("startreset").onclick=function(){
    if(playing==true){
        location.reload();
        
    }else{
        playing=true;
        score=0;
        document.getElementById("scorevalue").innerHTML = score;
        document.getElementById("time").style.display = "block";
        
        
        timeremaining=60;
        gameOverTime=5;
        
        hide("gameover");
        //hide("answershow");
        
        document.getElementById("startreset").innerHTML = "Reset Game";
        
        startCountDown();
        
        questionAndAnswerGenerate();
    }
    
}



for(i=1;i<=4;i++){
    document.getElementById("box"+i).onclick=function(){
    if(playing==true){
        if(this.innerHTML == correctAnswer){
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            questionAndAnswerGenerate();
        }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);
        }
    }
}
}




function questionAndAnswerGenerate(){
    totalQuestion += 1;
    var numb1 = 1+Math.round(9*Math.random());
    var numb2 = 1+Math.round(9*Math.random());
    
    dialogNumb1=numb1;
    dialogNumb2=numb2;
    var correctPosition = 1+Math.round(3*Math.random());
    correctAnswer = numb1+numb2;
    //dialogAns=correctAnswer;
    
    document.getElementById("question").innerHTML = numb1 + " + " + numb2;
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
    
    var answers = [correctAnswer];
    
    //questionAndAnswer.push(numb1+" + "+numb2+" = "+correctAnswer+"<br>");
    
    for(i=1;i<=4;i++){
        if(i!=correctPosition){
            var wrongAnswer;
            do{
               wrongAnswer = (1+Math.round(9*Math.random()))+(1+Math.round(9*Math.random())); 
            }while(answers.indexOf(wrongAnswer)>-1) 
                
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
    
    //    for(i=1;i<=4;i++){
    //        if(i!=correctPosition){
    //            var wrongAnswer = (1+Math.round(9*Math.random()))+(1+Math.round(9*Math.random())); document.getElementById("box"+i).innerHTML = wrongAnswer;
    //        }
    //    }
    
}

function startCountDown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremaining").innerHTML = timeremaining;
        if(timeremaining == 0){
            stopCountDown();
            //gameOver();
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Game Over<br> &#128547;";
            hide("time");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
        if(timeremaining <= 5){
            document.getElementById("timeremaining").style.color = "RED";
        }
    },1000);
}
function answerShow(){
    for(i=0;i<questionAndAnswer.length;i++){
        if(i<=10){
            document.getElementById("column1").innerHTML = questionAndAnswer[i]+"<br>";
        }
        else if(i>=11 && i<=20){
            document.getElementById("column2").innerHTML = questionAndAnswer[i]+"<br>";
        }
        else if(i>=21 && i<=30){
            document.getElementById("column3").innerHTML = questionAndAnswer[i]+"<br>";
        }
    }
    ocument.getElementById("scorevalue").innerHTML = totalQuestion+" jdesn";
    alert(totalQuestion);
}
function gameOver(){
    action = setInterval(function(){
        gameOverTime -= 1;
        show("gameover");
        document.getElementById("gameover").innerHTML = "<p>Game Over<br> &#128547;<br>"+dialogNumb1+" + "+dialogNumb2+" = "+dialogAns+"</p>";
        if(timeremaining == 0){
            stopCountDown();
            hide("gameover");
            hide("correct");
            hide("wrong");
            show("answershow");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    },1000);
    
}
function stopCountDown(){
    clearInterval(action);
}
function hide(id){
    document.getElementById(id).style.display = "none";
}
function show(id){
    document.getElementById(id).style.display = "block";
}
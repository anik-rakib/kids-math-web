var playing = false;
var score;
var action;
var timeremaining,gameOverTime; 
var correctAnswer;
var dialogNumb1,dialogNumb2,dialogAns;
var questionAndAnswer = [];
var totalQuestion=0;
var sign;
var helpSign;


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
        if(this.innerHTML == sign){
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
    var ran = 1+Math.round(3*Math.random());
    
    question();
   
    switch (ran){
            case 1:
                document.getElementById("box1").innerHTML = "+";
                document.getElementById("box2").innerHTML = "-";
                document.getElementById("box3").innerHTML = "X";
                document.getElementById("box4").innerHTML = "÷";
                break;
            case 2:                
                document.getElementById("box1").innerHTML = "÷";
                document.getElementById("box2").innerHTML = "+";
                document.getElementById("box3").innerHTML = "-";
                document.getElementById("box4").innerHTML = "X";
                break;
            case 3:
                document.getElementById("box1").innerHTML = "X";
                document.getElementById("box2").innerHTML = "+";
                document.getElementById("box3").innerHTML = "-";
                document.getElementById("box4").innerHTML = "÷";
                break;
            case 4:
                document.getElementById("box1").innerHTML = "+";
                document.getElementById("box2").innerHTML = "X";
                document.getElementById("box3").innerHTML = "-";
                document.getElementById("box4").innerHTML = "÷";
                break;
    }
    
}

function question(){
    /**
         * --------- 0 for + sign
         * --------- 1 for - sign
         * --------- 2 for X sign
         * --------- 3 for ÷ sign
         **/
    var numb1 = 1+Math.round(9*Math.random());
    var numb2 = 1+Math.round(9*Math.random());
    var correctPosition = 1+Math.round(3*Math.random());
    //correctAnswer = numb1+numb2;
    helpSign = 1+Math.round(3*Math.random());
    
    
    switch (helpSign){
            case 0:
                sign = '+';
                correctAnswer = numb1 + numb2;
                break;
            case 1:
                sign = '-';
                correctAnswer = numb1 - numb2;
                break;
            case 2:
                sign = 'X';
                correctAnswer = numb1 * numb2;
                break;
            case 3:
                sign = '÷';
                correctAnswer = numb1 / numb2;
                break;
    }
    if (Number.isInteger(correctAnswer) ){
        document.getElementById("question").innerHTML = numb1 + " ? " + numb2 + " = " +correctAnswer;    
    }else{
        document.getElementById("question").innerHTML = numb1 + " ? " + numb2 + " = " +correctAnswer.toFixed(2);
    }
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
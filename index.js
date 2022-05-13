

function startGame(){

    const textArray = ["RED", "GREEN", "BLUE", "BLACK", "YELLOW"];

    var textOutput = document.getElementById("random-text");
    var scoreOutput = document.getElementById("score-output");
    var accuracy = document.getElementById("accuracy");

    var redBtn = false; 
    document.getElementById("red-btn").onclick = function(){redBtn = true;};

    var blueBtn = false;
    document.getElementById("blue-btn").onclick = function(){blueBtn = true;};

    var greenBtn = false;
    document.getElementById("green-btn").onclick = function(){greenBtn = true;};

    var blackBtn = false;
    document.getElementById("black-btn").onclick = function(){blackBtn = true;};
    
    var yellowBtn = false;
    document.getElementById("yellow-btn").onclick = function(){yellowBtn = true;};

    var incorrectScore = 0;
    var correctScore = 0;
    var startTime = new Date().getTime();

    var runGame = setInterval(function(){
        var randomText = Math.floor(Math.random()*textArray.length);
        var radomColor = Math.floor(Math.random()*textArray.length);

        textOutput.style.color = textArray[randomText];
        textOutput.innerHTML = textArray[radomColor];

        if(textOutput.style.color === "red" && redBtn){
            correctScore++;
            redBtn  = false;
        }else if(textOutput.style.color === "green" && greenBtn){
            correctScore++;
            greenBtn = false;
        }else if(textOutput.style.color === "blue" && blueBtn){
            correctScore++;
            blueBtn = false;
        }else if(textOutput.style.color === "black" && blackBtn){
            correctScore++;
            blackBtn = false;
        }else if(textOutput.style.color === "yellow" && yellowBtn){
            correctScore++;
            yellowBtn = false;
        }
        if(new Date().getTime() - startTime > 60000){
            clearInterval(runGame);
            scoreOutput.innerHTML = "Your Score is: " + correctScore;
            accuracy.innerHTML = "Your Accuracy is: " + (correctScore / 60)*100 + "%";
            return;
        }
    }, 1000);


}

function timeOut(redBtn, yellowBtn, greenBtn, blackBtn, blueBtn){
    if(!redBtn && !greenBtn && !yellowBtn && !blueBtn && !blackBtn){
       clearInterval();
       clearTimeout();
    }
}

function setNewValues(textOutput, textArray){
    var randomText = Math.floor(Math.random()*textArray.length);
    var radomColor = Math.floor(Math.random()*textArray.length);

    textOutput.style.color = textArray[randomText];
    textOutput.innerHTML = textArray[radomColor];
}

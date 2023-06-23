let randomNumber = Math.floor(Math.random()*100)+1;

let guesses = document.querySelector(".Guesses");
let lastResult = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let guessSubmit = document.querySelector(".guessSubmit");
let guessField = document.querySelector(".guessField");
let resultPara = document.querySelectorAll(".resultParas");

let guessCount = 1;

let resetButton;

guessSubmit.addEventListener("click",()=>{
    const userGuess = Number(guessField.value);
    if(userGuess === randomNumber){
        lastResult.textContent = "CONGRATS YOU HAVE TAKEN IT HOME!!!";
        lastResult.style .backgroundColor = "green";
        setGameOver();

    }else if(userGuess > 100){
        lowOrHi.textContent = "That digit is Greater than expected!!"
        lowOrHi.style .backgroundColor = "blue";
    } else if (userGuess < 1 ){
        lowOrHi.textContent = "Insert a Digit Please between 1 and 100";
        guessCount--;
        guessSubmit.disabled = true;
       setGameOver();
    }


    else if(guessCount === 10){
        lastResult.textContent = "GAME IS OVER!! TRY YOUR LUCK AGAIN";
        setGameOver();
    }

    else{
        lastResult.textContent = "wrong";
        lastResult.style.backgroundColor = "red";
        if(userGuess < randomNumber){
            lowOrHi.textContent = "last Guess was a bit low";
            
        }else if(userGuess > randomNumber){
            lowOrHi.textContent = "last Guess was a bit higher keep trying";
        }
    }
    if(guessCount === 1){
        guesses.textContent = "previous Guess was ...";
     } 
     guesses.textContent += `${userGuess} `;

    
    
    
    guessCount++;
    guessField.value ="";
    guessField.focus();
}
);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button")
    resetButton.textContent = "NewGame";
    document.body.appendChild(resetButton);
    


resetButton.addEventListener("click",()=>{
    guessCount = 1;
 resultPara.textContent ="";
 resetButton.parentNode.removeChild(resetButton);
 guessField.disabled = false;
 guessSubmit.disabled = false;
 guessField.Value = "";
 guessField.focus();
 lastResult.textContent ="You want to give it another trial If YES add your number and click submit"
 lastResult.style.backgroundColor = 'blue';

 randomNumber = Math.floor(Math.random()*100) + 1;
})
}





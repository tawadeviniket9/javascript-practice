let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const currentCheck = document.querySelector('.currentCheck');
const lowOrHi = document.querySelector('.lowOrHi');

const guessInput = document.querySelector('.guessInput');
const guessSubmit = document.querySelector('.guessSubmit');

let guessCount = 1;
let resetButton;

function checkGuess(){
    let userGuess = Number(guessInput.value);
    if (guessCount === 1)
     {
      guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
   
    if(userGuess === randomNumber)
    {
        currentCheck.textContent = 'Congratulations you have won the game!';
        currentCheck.style.backgroundColor = 'green';
        lowOrHi.textContent= '';
        setGameOver();
    }
    else if(guessCount === 10){
        currentCheck.textContent = '!!!Too many attempts game over!';
        currentCheck.style.backgroundColor = 'red';
        setGameOver();
    }
    else
    {
        currentCheck.textContent = 'Wrong answer';
        currentCheck.style.backgroundColor = 'red';
        if(userGuess < randomNumber){
            lowOrHi.textContent = 'Last guess was too low!'; 
            currentCheck.style.backgroundColor = 'red';

        }
        else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
            currentCheck.style.backgroundColor = 'red';
          }
    }

    guessCount++;
    guessInput.value = '';
    guessInput.focus();

}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){

    guessInput.disabled = true;
    guessSubmit.disabled= true;
    resetButton = document.createElement('button');
    resetButton.textContent='Reset game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount=1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessInput.disabled=false;
    guessSubmit.disabled=false;
    guessInput.focus();
    currentCheck.style.backgroundcolor='white';
    
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

checkGuess();

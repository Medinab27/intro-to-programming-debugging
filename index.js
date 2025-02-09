const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');

let targetNumber;
let attempts = 0;
const maxNumberOfAttempts = 5;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
  attempts = attempts + 1;

  hideAllMessages();

  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

    correctMessage.style.display = '';
    submitButton.disabled = true;
    guessInput.disabled = true;
  } else{
    if (guess < targetNumber){
      tooLowMessage.style.display="";
    }else{
        tooHighMessage.style.display="";
      }

  if (attempts < maxNumberOfAttempts) {
    const remainingAttempts = maxNumberOfAttempts - attempts;
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`; 
  } else {
    numberOfGuessesMessage.innerHTML = `0 guesses remaining`;
  }}

  if (attempts === maxNumberOfAttempts || guess === targetNumber) { //combined this 
    submitButton.disabled = false;//changed from true to false
    guessInput.disabled = true;
  }

  guessInput.value = '';
  resetButton.style.display = '';
}

function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) { //fixed to "<"
   messages[elementIndex].style.display = 'none';
  }
}

function setup() { //function was spelled wrong
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

  // Moved this so that this is run first.
  guessInput.value=""; //Clears the guess input
  resetButton.style.display="none";
  hideAllMessages();

  // Enable the input and submit button
  submitButton.disabeld = false;
  guessInput.disabled = false;

}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();

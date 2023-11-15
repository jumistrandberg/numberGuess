// Global variables 
const lives = document.getElementById("lives");
const guessInput = document.getElementById("guess-input");
const guessBtn = document.querySelector("button");
const feedback = document.getElementById("feedback");
const guessedList = document.getElementById("guessedList");
let guessValue;
let lifeCounter = Number(lives.innerHTML);
const formText = document.getElementById('formText')
const restartBtn = document.querySelector('button'[1])
const guessedNumsList = [];
let resetBtn;

// focus on input
window.addEventListener('load', function() {
    guessInput.focus();
})

//Random number
const randomNumber = Math.floor(Math.random() * 10) + 1;

//Listen for button click
guessBtn.addEventListener("click", function (event) {
  event.preventDefault();
  guessValue = guessInput.value;

  console.log(randomNumber);
  logGuesses();
  guessInput.value = "";
  guessInput.focus();
});

// Listen for Enter key 
guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        guessValue = guessInput.value;
        logGuesses();
        guessInput.value = '';
    }
});

// Show player guesses on screen 
function logGuesses() {
  if (guessValue >= 1 && guessValue <= 10) {
    console.log(guessValue);
    guessedNumsList.push(guessValue);
    guessedList.innerText = guessedNumsList.join(', ')
    //Call compare to give feedback
    compare();
    // Call losingGuesses to count lives 
    losingGuesses();
  } else {
    // Give feedback to direct player 
    feedback.innerText = "Guess a number between 1 and 10";
  };
};

// Compare player guess and randomNumber and provide feedback 
function compare() {
  if (guessValue < randomNumber) {
    feedback.innerText = "Too low!";
  } else if (guessValue > randomNumber) {
    feedback.innerText = "Too high!";
  };
};

// Life counter 
function losingGuesses() {
  if (lifeCounter === 1) {
    youLose();
  };
  lifeCounter--;
  lives.innerHTML = lifeCounter;
};


function youLose() {
  feedback.innerHTML = "Loser LOSER!!!";
  guessInput.disabled = true;
  guessBtn.disabled = true;
  formText.innerText= '';

  //Restart game 
  resetBtn = document.createElement('button');
  resetBtn.textContent = 'Try Again';
  document.body.appendChild(resetBtn);

  resetBtn.addEventListener('click', function() {
    location.reload();
  });

  document.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        location.reload();
    };
  })
}; 



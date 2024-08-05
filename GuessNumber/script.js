let userSelect = document.getElementById("guessField");
let submit = document.getElementById("submit");
let guessSlot = document.getElementById("guesses");
let remaining = document.getElementById("lastResult");
let lowAndHigh = document.getElementById("LowOrHI");
let startOver = document.getElementById("resultParas");
let randomNumber = parseInt(Math.random() * 100 + 1);

const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;
let playGame = true;

// Setup new game event listener initially
newGame(); 

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userSelect.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a greater number");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(
        `Game Over! You have exceeded the limit of 10 guesses and the random number was ${randomNumber}`
      );
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(
      `Congratulations! You guessed the number in ${numGuess} attempts. The number was ${randomNumber}`
    );
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  userSelect.value = "";
  guessSlot.innerHTML += ` ${guess},  `;
  numGuess++;
  remaining.innerHTML = ` ${11 - numGuess}`;
}

function displayMessage(message) {
  lowAndHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userSelect.value = "";
  userSelect.setAttribute("disabled", "true");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  // No need to call newGame() here, it's already set up
}

function newGame() {
  let newGameButton = document.getElementById("newGame");
  // If newGameButton exists (after endGame), attach the event listener
  if (newGameButton) {
    newGameButton.addEventListener("click", (e) => {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = "";
      remaining.innerHTML = ` ${11 - numGuess}`;
      userSelect.removeAttribute("disabled");
      startOver.removeChild(p);
      lowAndHigh.innerHTML = "";
      playGame = true;
    });
  }
}
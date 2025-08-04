let guessInput = document.querySelector("#guessNumber");
let submitBtn = document.querySelector("#submitBtn");
let result = document.querySelector(".result");
let attempts = document.querySelector(".attempts");
let message = document.querySelector(".message");
let restartBtn = document.querySelector("#restartBtn");

let secretNumber = Math.floor(Math.random() * 100) + 1;
let remainingAttempts = 10;

// ✅ Enable submitBtn when user types something
guessInput.addEventListener("input", () => {
  submitBtn.disabled = false;
});

submitBtn.addEventListener("click", () => {
  let userGuess = Number(guessInput.value);

  // ❌ Handle empty or invalid input
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.innerText = "❗ Please enter a number between 1 and 100.";
    return;
  }

  if (userGuess === secretNumber) {
    message.innerText = "😃 Correct! You guessed it right!";
    result.innerText = `🎯 The number was: ${secretNumber}`;
    submitBtn.disabled = true;
    guessInput.disabled = true;
    restartBtn.style.display = "inline-block"; // ✅ show restart
  } else {
    remainingAttempts--;

    if (userGuess > secretNumber) {
      message.innerText = "📈 Too High!";
    } else {
      message.innerText = "📉 Too Low!";
    }

    attempts.innerText = `⏱️ Attempts left: ${remainingAttempts}`;
    guessInput.value = "";

    if (remainingAttempts === 0) {
      result.innerText = `❌ Game Over! The number was: ${secretNumber}`;
      submitBtn.disabled = true;
      guessInput.disabled = true;
      restartBtn.style.display = "inline-block"; // ✅ show restart
    }
  }
});

// ✅ Restart button logic
restartBtn.addEventListener("click", () => {
  // Reset values
  secretNumber = Math.floor(Math.random() * 100) + 1;
  remainingAttempts = 10;

  message.innerText = "";
  result.innerText = "";
  attempts.innerText = "";
  guessInput.value = "";
  guessInput.disabled = false;
  submitBtn.disabled = true; // disable until next input
  restartBtn.style.display = "none";
});

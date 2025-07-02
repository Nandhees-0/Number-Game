let randomNumber = Math.floor(Math.random() * 100) + 1;
let lives = 10;

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const livesCount = document.getElementById("livesCount");

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "Please enter a number between 1 and 100!";
    return;
  }

  if (guess === randomNumber) {
    window.location.href='Win.html'
    message.textContent = `🎉 Correct! The number was ${randomNumber}. You won!`;
    endGame();
  } else {
    lives--;
    livesCount.textContent = lives;
    if (lives === 0) {
        window.location.href='Lose.html'
      message.textContent = '💀 Game Over! The number was ${randomNumber}.';
      endGame();
    } else {
      message.textContent = guess < randomNumber ? "📉 Too low!" : "📈 Too high!";
    }
  }

  document.getElementById("guessInput").value = '';
}

function endGame() {
  document.getElementById("guessInput").disabled = true;
  document.querySelector("button").disabled = true;
  document.getElementById("restartBtn").style.display = "inline-block";
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  lives = 10;
  document.getElementById("guessInput").disabled = false;
  document.querySelector("button").disabled = false;
  document.getElementById("guessInput").value = '';
  document.getElementById("message").textContent = '';
  document.getElementById("livesCount").textContent = lives;
  document.getElementById("restartBtn").style.display = "none";
}

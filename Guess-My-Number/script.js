// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   // When there is no input
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔ Not a number';
//   }
//   // When the answer is correct
//   else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '🎉 Correct answer';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').textContent = secretNumber;

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   }
//   // When the guess is wrong
//   else if (guess !== secretNumber) {
//     document.querySelector('.message').textContent =
//       guess > secretNumber ? '💪 Too high' : '🤏 Too low';
//     score--;
//     document.querySelector('.score').textContent = score;
//     if (score < 1) {
//       document.querySelector('.message').textContent = '💥 You Lose The Game';
//     }
//   }
// });

// // Reset functionality with a new secret number
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1; // Change the secret number

//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.highscore').textContent = highscore;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Not a number';
  }
  // When the answer is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct answer';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    highscore = score; // High score becomes the score when the game ends
    document.querySelector('.highscore').textContent = highscore;
  }
  // When the guess is wrong
  else if (guess !== secretNumber) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? '💪 Too high' : '🤏 Too low';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent = '💥 You Lose The Game';
    }
  }
});

// Reset functionality with a new secret number
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; // Change the secret number

  highscore = 0; // Reset high score to zero
  document.querySelector('.highscore').textContent = highscore;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

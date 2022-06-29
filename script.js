'use strict';

// generate the random number to guess
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// displays starting score
let score = 20;
// displays highscore
let highscore = 0;

// selector to change the state of the game
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// selector for click event on check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // displays the correct number on top of the screen
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    // changes the color of the body 
    document.querySelector('body').style.backgroundColor = '#60b347';
    // changes the size of the character displaying the correct number
    document.querySelector('.number').style.width = '30rem';
    // compare the score vs the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // gives hint to players and decreases the score for each attempt
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // when the player loses the game
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// reset the game after the player finishes playing
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});



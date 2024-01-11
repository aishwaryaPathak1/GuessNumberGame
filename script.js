'use strict';

//initial conditions
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let highscore = document.querySelector('.highscore');
let check = document.querySelector('.check');
let message = document.querySelector('.message');
let scoreEl = document.querySelector('.score');
let number = document.querySelector('.number');
let score = 20;
const init = function () {
  number.textContent = '?';
  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing...';
  score = 20;
  scoreEl.textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
};
init();
const displayMessage = function (disMessage) {
  message.textContent = disMessage;
  return message.textContent;
};
//condition after check is clicked

check.addEventListener('click', function () {
  //if guess input is empty & check is clicked4
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number!');
  } //if guess is not empty
  else {
    if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');
      if (score > highscore.textContent) {
        highscore.textContent = score;
      }
      number.textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = 'green';
      number.style.width = '36rem';
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreEl.textContent = score;
    }
  }
});

//on clicking again button
document.querySelector('.again').addEventListener('click', init);

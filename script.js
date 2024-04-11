'use strict';
let number1 = Math.trunc(Math.random() * 20) + 1;

//   Math.trunc(Math.random() * 20) + 1);

let score = 20;
let highscore = 0;
const mesaageCall = function (message) {
  Number((document.querySelector('.message').textContent = message));
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    mesaageCall('Do not try to be oversmart🤷‍♂️😶‍🌫️');
  } else if (guess > number1) {
    if (score > 1) {
      mesaageCall('too high');
      score--;
      Number((document.querySelector('.score').textContent = score));
    } else {
      mesaageCall('you lost😒');
      Number((document.querySelector('.score').textContent = 0));
    }
  } else if (guess < number1) {
    if (score > 1) {
      Number((document.querySelector('.message').textContent = 'Too Low📉'));
      score--;
      Number((document.querySelector('.score').textContent = score));
    } else {
      Number((document.querySelector('.message').textContent = 'you lost😒'));
      Number((document.querySelector('.score').textContent = 0));
    }
  } else if (guess === number1) {
    document.querySelector('.message').textContent = 'Correct Number🥳🥳';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number1;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number1 = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
});

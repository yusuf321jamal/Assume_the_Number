'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; //it gives the number bw 0 and 1  and we can make it our desired no. by multiplying//math.trunc removes decimal
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //refactroring the repeated codes into function
  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

  if (!guess) {
    // document.querySelector('.message').textContent = 'NO NUMBER ENTERED';
    displayMessage('NO NUMBER ENTERED');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'CORRECT NUMBER!';
    displayMessage('CORRECT NUMBER!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'TOO HIGH' : 'TOO LOW';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      displayMessage('YOU LOST THE GAME');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//making work again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#1c1d1c';
  document.querySelector('number').style.width = '15rem';
});

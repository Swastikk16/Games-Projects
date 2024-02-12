'use strict';
// document.querySelector('.message').textContent = '😄 Correct number';
// document .querySelector('.number').textContent = 13 ;

let secretNumber = Math.trunc((Math.random()*20)) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message ;
}

// document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document .querySelector('.guess').value)
    // console.log(guess, typeof guess );

        //When there is no Input
    if (!guess) {
        displayMessage('⛔ No Number')
    }

    
    
        //When then player wins.
    else if (guess === secretNumber){
        displayMessage('🏆🤸Correct number')
        document .querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore ;
        }

        //when guess is different!
    } else if(guess !== secretNumber){

        if(score > 1){
            displayMessage( guess > secretNumber ? '📈TOO HIGH!!! ' :'📉TOO LOW!!!')
            score--;
            document.querySelector('.score').textContent = score;
        }else{
        document.querySelector('.score').textContent = 0 ;
        displayMessage('💥GAME OVER!' );
        }
    
    }
      
})

    //AGAIN Button 
document.querySelector('.again').addEventListener
('click' , function(){
    score = 20; 
    secretNumber = Math.trunc((Math.random()*20)) + 1;
    document.querySelector('.score').textContent = 20;
    displayMessage('Start Guessing!!!')
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'




})
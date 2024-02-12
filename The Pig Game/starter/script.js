'use strict';


const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')


let scores , currentScore , activePlayer = 0 , playing ;


//initialising Function
const init = function () {

    scores = [0,0];
    currentScore = 0;
    playing = true ; // A STATE VARIABLE
    dice.classList.add('hidden')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner') ;
    activePlayer = 0;
    player0.classList.add('player--active') ;
    player1.classList.remove('player--active') ;
    score0.textContent = 0 ;
    score1.textContent = 0 ;
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;
}


init()

const newGame = document.querySelector('.btn--new')
const roll = document.querySelector('.btn--roll')
const hold = document.querySelector('.btn--hold')





//A FUNCTION TO SwITCH PLAYER................................
const switchPlayer = function(){
    activePlayer = activePlayer === 0 ? 1 :0 ;
    player0.classList.toggle('player--active') ;
    player1.classList.toggle('player--active') ;
}

roll.addEventListener('click' , function(){
    if(playing){
    //Creating a random dice roll
    let num = Math.trunc(Math.random()*6) + 1
    console.log(num);
    //Displaying the dice
    dice.classList.remove('hidden')
   
    //use This instead of the if-else ladder..................
    dice.src = `dice-${num}.png`;

    //Check if num == 1
    if (num !== 1) {
        //Add to current score
        currentScore += num ;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore ;
    } else {
        document.getElementById(`current--${activePlayer}`).textContent = 0 ;
        currentScore = 0 ;
        switchPlayer();
    }
}    
})



//HOLD SCORE BUTTONN..........................................

hold.addEventListener
('click' , function(){
    if(playing){
        scores[activePlayer] += currentScore ;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]  ;
        currentScore = 0 ;
        document.getElementById(`current--${activePlayer}`).textContent = 0 ;
        if (scores[activePlayer] >= 100) {
        document.getElementById(`score--${activePlayer}`).textContent = 'WINNER'  ;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner') ;
        playing = false ;
        dice.classList.add('hidden') ;

    } else {
        switchPlayer()    
    }
}    
})


newGame.addEventListener
('click' , function(){
    init()
})
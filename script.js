`use strict`;

let num = Math.trunc(Math.random()*20)+1;
console.log(num);

let count = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click',function(){
    let guess = Number(document.querySelector('.guess').value);

    if (guess===num){
        document.querySelector('.message').textContent = "Congrats! You won";
        document.querySelector('.number').textContent = guess;
        document.querySelector('body').style.backgroundColor = 'grey';

        if (highScore<count){
            highScore = count;
            document.querySelector('.highscore').textContent = highScore;
        }

    }else if (guess > num){
        if (count>1){
            document.querySelector('.message').textContent = "it's too high";
            count--;
            document.querySelector('.score').textContent = count;
        }else {
            alert("Lose the game")
            document.querySelector('.message').textContent = "You lose the game."
        }
    
    }else {
        if (count>1){
            document.querySelector('.message').textContent = "it's too low";
            count--;
            document.querySelector('.score').textContent = count;
        }else {
            alert("Lose the game")
            document.querySelector('.message').textContent = "You lose the game."
        }
    }
    if (!guess){
        document.querySelector('.message').textContent = "No number";
    }
});

document.querySelector('.again').addEventListener('click', function(){
    count = 20;
    num = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = count;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';

})
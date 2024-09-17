// Если число больше или равно нулю, но меньше 0.3 = камень
// Если число больше или равно 0.3, но меньше 0.6 = бумага
// Если число больше или рано 0.6, но меньше 1 = ножницы

let computerMove = '';
let playerMove = '';
let result = '';

let score = {
    wins: 0,
    looses: 0,
    ties: 0
}

function playGame(move) {

    let randomNumber = Math.random();

    //ход компьютерa
    if (randomNumber >= 0 && randomNumber < 0.3) {
        computerMove = 'rock';
    } else if (randomNumber >= 0.3 && randomNumber < 0.6) {
        computerMove = 'paper';
    } else if (randomNumber >= 0.6 && randomNumber < 1) {
        computerMove = 'scissors';
    }    

    // результат
    if (move === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie'
        } else if (computerMove === 'paper') {
            result = 'You Lose'
        } else if (computerMove === 'scissors') {
            result = 'You Win!'
        }
    } else if (move === 'paper') {
        if (computerMove === 'rock') {
            result = 'You Win!'
        } else if (computerMove === 'paper') {
            result = 'Tie'
        } else if (computerMove === 'scissors') {
            result = 'You Lose'
        }
    } else if (move === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You Lose'
        } else if (computerMove === 'paper') {
            result = 'You Win!'
        } else if (computerMove === 'scissors') {
            result = 'Tie'
        }
    }

    //обновляем объект
    if (result === 'You Win!') {
        score.wins ++;
    } else if (result === 'You Lose') {
        score.looses ++;
    } else if (result === 'Tie') {
        score.ties ++;
    }

    //выводим на экран
    document.querySelector('.game__result')
        .innerHTML =  `${result}`;
    document.querySelector('.game__moves')
        .innerHTML = `You : ${move} Computer: ${computerMove}`;
    document.querySelector('.game__score')
        .innerHTML = `Wins: ${score.wins} Looses: ${score.looses}, Ties ${score.ties}`
}

function resetScore() {
    score.wins = 0;
    score.looses = 0;
    score.ties = 0;

    document.querySelector('.game__score').innerHTML = `Wins: ${score.wins} Looses: ${score.looses} Ties: ${score.ties}`;
}







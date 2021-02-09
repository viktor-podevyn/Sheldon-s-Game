let userChosen
let computerChosen
const displayResult = document.getElementById('result')
const userChoice = document.getElementById('user-choice')
var result = results()
const possibleChoices = document.querySelectorAll('.choices')
const computerChoice = document.getElementById('computer-choice')
const randomNumber = Math.round(Math.random() * (5))



// Get users userChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChosen = e.target.id
    generatedComputerChoice()
    results()
    userChoice.innerHTML = userChosen
    computerChoice.innerHTML = computerChosen
    displayResult.innerHTML = result
}))

//Get a random computers choice
function generatedComputerChoice() {
    if (randomNumber === 1) {
        return computerChosen = 'rock'
    } else if (randomNumber === 2) {
        return computerChosen = 'paper'
    } else if (randomNumber === 3) {
        return computerChosen = 'scissors'
    } else if (randomNumber === 4) {
        return computerChosen = 'lizard'
    } else if (randomNumber === 5) {
        return computerChosen = 'spock'
    }
}

function results() {
    if (computerChosen === userChosen) {
        return result = 'There was a tie'
    } else if (computerChosen === 'rock' && userChosen === 'paper') {
        return result = 'you win! Paper covers rock!'
    } else if (computerChosen === 'rock' && userChosen === 'scissors') {
        return result = 'you lose! Rock crushes Scissors!'
    } else if (computerChosen === 'paper' && userChosen === 'rock') {
        return result = 'you lose! Paper covers rock!'
    } else if (computerChosen === 'paper' && userChosen === 'scissors') {
        return result = 'you win! Scissors cut paper!'
    } else if (computerChosen === 'scissors' && userChosen === 'rock') {
        return result = 'you win! Rock crushes Scissors!'
    } else if (computerChosen === 'scissors' && userChosen === 'paper') {
        return result = 'you lose! Scissors cut paper!'
    } else if (computerChosen === 'lizard' && userChosen === 'paper') {
        return result = 'you lose! Lizard eats Paper!'
    } else if (computerChosen === 'paper' && userChosen === 'lizard') {
        return result = 'you win! Lizard eats Paper!'
    } else if (computerChosen === 'lizard' && userChosen === 'rock') {
        return result = 'you win! Rock crushes Lizard!'
    } else if (computerChosen === 'rock' && userChosen === 'lizard') {
        return result = 'you lose! Rock crushes Lizard!'
    } else if (computerChosen === 'lizard' && userChosen === 'scissors') {
        return result = 'you win! Scissors decapitate Lizard!'
    } else if (computerChosen === 'scissors' && userChosen === 'lizard') {
        return result = 'you lose! Scissors decapitate Lizard!'
    } else if (computerChosen === 'lizard' && userChosen === 'spock') {
        return result = 'you lose! Lizard poisons Spock!'
    } else if (computerChosen === 'spock' && userChosen === 'lizard') {
        return result = 'you win! Lizard poisons Spock!'
    } else if (computerChosen === 'spock' && userChosen === 'rock') {
        return result = 'you lose! Spock vaporizes Rock!'
    } else if (computerChosen === 'rock' && userChosen === 'spock') {
        return result = 'you win! Spock vaporizes Rock!'
    } else if (computerChosen === 'spock' && userChosen === 'paper') {
        return result = 'you win! Paper disproves Spock!'
    } else if (computerChosen === 'paper' && userChosen === 'spock') {
        return result = 'you lose! Paper disproves Spock!'
    } else if (computerChosen === 'spock' && userChosen === 'scissors') {
        return result = 'you lose! Spock smashes Scissors!'
    } else if (computerChosen === 'scissors' && userChosen === 'spock') {
        return result = 'you win! Spock smashes Scissors!'
    }
}

document.getElementById("reset").onclick = function() {
    window.location.reload();
};


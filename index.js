const normal_deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']; // problem 2: need 52 cards

const startButton = document.querySelector('#start_game_button');
const dealButton = document.querySelector('#deal_button');
const playerCardOne = document.querySelector('.pcard_one');
const playerCardTwo = document.querySelector('.pcard_two');
const playerTotal = document.querySelector('#total_score');
const dealerCardOne = document.querySelector('.dcard_one');
const dealerCardTwo = document.querySelector('.dcard_two');
const hitMeButton = document.querySelector('#hit_button');
const stayButton = document.querySelector('#stay_button');

const playerhand = [];
// const dealerHand = []

document.addEventListener('DOMContentLoaded', hideItAll());

function hideItAll() {
    dealButton.style.display = "none"
    playerCardOne.style.display = "none"
    playerCardTwo.style.display = "none"
    playerTotal.style.display = "none"
    dealerCardOne.style.display = "none"
    dealerCardTwo.style.display = "none"
    hitMeButton.style.display = "none"
    stayButton.style.display = "none"
};

startButton.addEventListener('click', function (e) {
    dealAll()
    startButton.style.display = "none"
});

dealButton.addEventListener('click', function (e) {
    dealAll()
});

hitMeButton.addEventListener('click', function (e) {
    hitMe(playerHand)
});

function dealAll() {
    playerCardOne.style.display = ""
    playerCardTwo.style.display = ""
    playerTotal.style.display = ""
    dealerCardOne.style.display = ""
    dealerCardTwo.style.display = ""
    hitMeButton.style.display = ""
    stayButton.style.display = ""
    dealPlayer()
    dealDealer()
};

function dealPlayer() {
    playerHand = []
    while (playerHand.length < 2) {
        playerHand.push(Math.floor(Math.random() * normal_deck.length + 1))
    }
    playerCardOne.innerHTML = `${playerHand[0]}`
    playerCardTwo.innerHTML = `${playerHand[1]}`
    playerTotalScore(playerHand)
};

function dealDealer() {
    dealerHand = []
    while (dealerHand.length < 2) {
        dealerHand.push(Math.floor(Math.random() * normal_deck.length + 1))
    }
    dealerCardOne.innerHTML = `${dealerHand[0]}`
    dealerCardTwo.innerHTML = `${dealerHand[1]}`
    houseTotalScore(dealerHand)
};

function hitMe(e) {
    e.push(Math.floor(Math.random() * normal_deck.length + 1))
    console.log(e)
    playerTotalScore(e)
};

function playerTotalScore(e) {
    var playerSum = 0
    for (let i = 0; i < e.length; i++) {
        if (e[i] > 10) {
            e[i] = 10
        }
        playerSum = e[i] + playerSum
    }
    if (playerSum < 21) {
        console.log("Your Total Score: " + `${playerSum}`)
        playerTotalScore.innerHTML = `${playerSum}`
    } else if (playerSum > 21) {
        console.log("Bust!" + ` ${playerSum}`)
        playerTotalScore.innerHTML = `Bust!`
        hitMeButton.style.display = 'none'
        stayButton.style.display = 'none'
        startButton.style.display = ''
    } else {
        console.log("Blackjack!")
        playerTotalScore.innerHTML = `Blackjack!`
    }
};


function houseTotalScore(e) {
    var houseSum = 0
    for (let i = 0; i < e.length; i++) {
        if (e[i] > 10) {
            e[i] = 10
        }
        houseSum = e[i] + houseSum
    }
    if (houseSum <= 21) {
        console.log("Your Total Score: " + `${houseSum}`)
        houseTotalScore.innerHTML = `${houseSum}`
    } else if (houseSum > 21) {
        console.log("The House Busted!")
        houseTotalScore.innerHTML = `The House Busted!`
    } else {
        console.log("House Blackjack!")
        houseTotalScore.innerHTML = `House Blackjack!`
    }
    console.log("House Total Score: " + `${houseSum}`)
};
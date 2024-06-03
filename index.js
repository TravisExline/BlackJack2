const normal_deck = [2,3,4,5,6,7,8,9,10, 'J', 'Q', 'K', 'A']

const dealButton = document.querySelector('#deal_button')
const playerCardOne = document.querySelector('.pcard_one')
const PLayerCardTwo =  document.querySelector('pcard_two')
var playerhand= []

// event listener to trigger dealAll function on button press. 
dealButton.addEventListener('click', function(e) {
    dealAll()
})

// calls both functions to deal all cards
function dealAll() {
    dealPlayer()
    dealDealer()
}
 // deals cards to the player
function dealPlayer() {
    playerHand=[]
    while(playerHand.length<2) {
        playerHand.push(Math.floor(Math.random() * normal_deck.length + 1))
    }
    console.log('Your cards are: ' + playerHand[0],playerHand[1])
    playerTotalScore(playerHand[0],playerHand[1]) // eventually this will need to be placed into the pcard_one/pcard_two elements
};
// deals cards to the dealer
function dealDealer() {
    var dealerHand=[]
    while(dealerHand.length<2) {
        dealerHand.push(Math.floor(Math.random() * normal_deck.length + 1))
    }
    console.log('Dealer cards are: ' + dealerHand[0],dealerHand[1])
    houseTotalScore(dealerHand[0],dealerHand[1]) // eventually this will need to be placed into the dcard_one/dcard_two elements
};

function playerTotalScore(a, e) {
    console.log("Your Total Score: " + a+e) // this isn't working, taking as a string, needs to be int
}

function houseTotalScore(a,e) {
    console.log(a+e)
}
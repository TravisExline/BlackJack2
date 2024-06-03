const normal_deck = [2,3,4,5,6,7,8,9,10, 'J', 'Q', 'K', 'A']

const dealButton = document.querySelector('#deal_button')
const playerCardOne = document.querySelector('.pcard_one')
const PLayerCardTwo =  document.querySelector('pcard_two')

dealButton.addEventListener('click', function(e) {
    dealAll()
})

function dealAll() {
    dealPlayer()
    dealDealer()
}

function dealPlayer() {
    var playerHand=[]
    while(playerHand.length<2) {
        playerHand.push(Math.floor(Math.random() * normal_deck.length + 1))
    }
    console.log(playerHand) // eventually this will need to be placed into the pcard_one/pcard_two elements
};

function dealDealer() {
    var dealerHand=[]
    while(dealerHand.length<2) {
        dealerHand.push(Math.floor(Math.random() * normal_deck.length + 1))
    }
    console.log(dealerHand) // eventually this will need to be placed into the pcard_one/pcard_two elements
};
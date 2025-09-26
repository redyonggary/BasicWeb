let cardOne = 10;
let cardTwo = 1;
let cardThree = 2;

let cardOneBank = 9;
let cardTwoBank = 7;
let cardThreeBank = 3;
let cardFourBank = 1;

function getSum(cards) {
    return cards.reduce((acc, cur) => acc + cur, 0);
}

let playerCards = [cardOne, cardTwo, cardThree];
let playerSum = getSum(playerCards);

if (playerSum === 21) {
    console.log("Player Blackjack! Player wins!");
    console.log(`Player: ${playerCards} (sum: ${playerSum})`);
} else if (playerSum > 21) {
    console.log("Player Bust! Dealer wins!");
    console.log(`Player: ${playerCards} (sum: ${playerSum})`);
} else {
    let dealerCards = [cardOneBank, cardTwoBank];
    let dealerSum = getSum(dealerCards);

    const dealerDeck = [cardThreeBank, cardFourBank];
    let deckIndex = 0;
    while (dealerSum < 17) {
        let next;
        if (deckIndex < dealerDeck.length) {
            next = dealerDeck[deckIndex++];
        } else {
            next = Math.floor(Math.random() * 10) + 1;
        }
        dealerCards.push(next);
        dealerSum = getSum(dealerCards);
    }

    if (dealerSum > 21) {
        console.log("Dealer Bust! Player wins!");
    } else if (dealerSum === playerSum) {
        console.log("Draw!");
    } else if (playerSum > dealerSum) {
        console.log("Player wins!");
    } else {
        console.log("Dealer wins!");
    }

    console.log(`Player: ${playerCards} (sum: ${playerSum})`);
    console.log(`Dealer: ${dealerCards} (sum: ${dealerSum})`);
}

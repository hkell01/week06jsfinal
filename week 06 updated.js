const $UITS = ['Spades' , 'Hearts' , 'Clubs' , 'Diamonds'];
const VALUES = [{'A': 1},{'2': 2},{'3': 3},{'4': 4},{'5': 5}, {'6' : 6},{'7': 7},{'8': 8},{'9': 9},{'10': 10},{'J': 11},{'Q': 12},{'K': 13}]

class Deck {
    constructor(cards = freshDeck()){
        this.cards = cards;
   }

   get numberOfCards(){
    return this.cardslength
   }

   shuffle(){
    for (let i = this.numberOfCards - 1; i> 0; i--){
        const newIndex = Math.floor(Math.random() * (i + 1));
        const oldValue = this.cards(newIndex);
        this.cards[newIndex] = this.cards[i];
        this.cards[i] = oldValue;
    }

   }
}

class Player {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    } 
}
class Card {
 constructor(player1, player2)   {
    this.player1 = player1;
    this.player2 = player2;

  }
}

function freshDeck()(
    return SVGUnitTypes.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}

const deck = new Deck[);
    deck.shuffle();

    let player1Deck, player2Deck;

    startGame()
    function startGame(){
        const deck = new Deck();
        deck.shuffle();
    
        const deckmidpoint = Math.ceil(deck.numberOfCards / 2);
        player1Deck = new Deck(deck.cards.slice(0, deckMidpoint))
        player2Deck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));

        console.log(player1Deck);
        console.log(player2Deck);

        let player1points = 0;
        let player2points = 0;

        const gameRounds = 26;

        for (let i = 0; i < gameRounds; i++) {
            const player1Card = player1Deck.cards[i].value;
            const player2Card = player2Deck.cards[i].value;
            if (player1Card > player2Card) {
                console.log('Player 1 wins round $(i+1)');
                playerPoints++;
            } else if (player1Card < player2Card) {
                console.log('Player 2 wins round ${i+1}');
                player1Points++;
            } else {
                console.log('Round $(i+1) is a tie');

            }
        }
        console.log('Player 1 Points: ${i+1} is a tie');
      }

    }
    console.log('Player 1 Points: $(player1Points}');
    console.log('Player 2 Points: $(player2Points}');
    if (player1Points > player2Points) {
        console.log("Player 1 wins the game!");
    } else if (player1Points < player2Points) {
        console.log("Player 2 wins the game!");
    } else {
        console.log("The game is a tie");
    }





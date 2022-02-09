
class Card {
    constructor(name, suit, value) {
        this.name = name;
        this.suit = suit;
        this.value = value;
        this.suitCard = [];
    }

    addSuitCards(suit) {
        for (let i = 2; i < 11; i++) {
            this.suitCard.push(new Card(i, suit, i));
        }
        this.suitCard.push(new Card('Jack', suit, 11));
        this.suitCard.push(new Card('Queen', suit, 12));
        this.suitCard.push(new Card('King', suit, 13));
        this.suitCard.push(new Card('Ace', suit, 14));
    }

}

class Menu {
    constructor() {
        this.player1 = '';
        this.player2 = '';
        this.unshuffledDeck = [];
    }

    start() {
        let selection = this.showMenu();

        while (selection != 0) {
            switch(selection) {
                case '1':
                    this.addPlayers();
                    break;
                case '2':
                    this.dealCards();
                    break;
                case '3':
                    this.startWAR();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMenu();
        }

        alert('Goodbye coward!');
    }

    showMenu() {
        return prompt(`
        0) Exit
        1) Add Players
        2) Shuffle and Deal Cards
        3) Declare WAR!!!
        --------------------------`);
    }

    addPlayers() {
        this.player1 = prompt('Enter name for Player One:');
        this.player2 = prompt('Enter name for Player Two:');
    }

    buildDeck() {
        let card = new Card;
        card.addSuitCards('Hearts');
        card.addSuitCards('Spades');
        card.addSuitCards('Clubs');
        card.addSuitCards('Diamonds');
        for (let i = 0; i < card.suitCard.length; i++) {
            this.unshuffledDeck.push(card.suitCard[i]);
        }
    }

    shuffleDeck() {
        this.player1Deck = [];
        this.player2Deck = [];
        for (let i = 0; i < 26; i++) {
            this.player1Deck.push(this.unshuffledDeck.splice((Math.floor(Math.random()*this.unshuffledDeck.length)),1));
            this.player2Deck.push(this.unshuffledDeck.splice((Math.floor(Math.random()*this.unshuffledDeck.length)),1));

        }
    }

    dealCards() {
        menu.buildDeck();
        menu.shuffleDeck();
        alert('Deck is shuffled and player hands have been dealt');
    }

    startWAR() {
        this.player1Points = 0;
        this.player2Points = 0;
        alert(`${this.player1} has declared WAR on ${this.player2}!!!`)

        for (let i = 0; i < 26; i++) {
            if (this.player1Deck[i][0].value > this.player2Deck[i][0].value) {
                this.player1Points += 1;
            } else if (this.player1Deck[i][0].value < this.player2Deck[i][0].value) {
                this.player2Points += 1;
            }
        };
        if (this.player1Points > this.player2Points) {
            alert(`${this.player1} has defeated ${this.player2}!
            The final score was ${this.player1Points} to ${this.player2Points}
            Better luck next time ${this.player2}!`);
        } else if (this.player2Points > this.player1Points) {
            alert(`${this.player2} has defeated ${this.player1}!
            The final score was ${this.player2Points} to ${this.player1Points}
            Better luck next time ${this.player1}!`);
        } else {
            alert(`It is a stalemate!
            The final score was ${this.player1}: ${this.player1Points} to ${this.player2}: ${this.player2Points}
            `);
        }
    }
}

let menu = new Menu;
menu.start();

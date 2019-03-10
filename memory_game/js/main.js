console.log('Up and running!')
console.log('please select a card \'0-3\' by using flipCard');
var score = 0
var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		console.log(cards[i])
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};


var cards = [
{
rank: "queen",	
suit: "hearts",
cardImage:"images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage:	"images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage:"images/king-of-hearts.png" 
},
{
rank: "king",
suit:"diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {	
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
};

var flipCard = function() {
	var cardID = this.getAttribute('data-id');
	console.log('User flipped ' + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
    this.setAttribute('src', (cards[cardID].cardImage));
if (cardsInPlay.length === 2){
	console.log(cardsInPlay);
	checkForMatch();
} else console.log('pick another card')
};

createBoard();


/*console.log(cardsInPlay);
console.log(flipCard(0));*/



/*if (cardsInPlay.length === 2) {
	console.log('two cards present');
}
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!")
}	 else {
	alert('Sorry, try again.')
}

*/
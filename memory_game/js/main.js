console.log('Up and running!')
console.log('please select a card \'0-3\' by using flipCard');

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
}

var flipCard = function(cardID) {
	console.log('User flipped ' + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].name);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
if (cardsInPlay.length === 2){
	checkForMatch();
} else console.log('pick another card')
};
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
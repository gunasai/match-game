var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$(document).ready(function() {
	var $game = $('#game');
	var values = MatchGame.generateCardValues();
	MatchGame.renderCards(values, $game);
});
/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
	var arr = [];
	for (var i = 1; i <= 8; i++) {
		arr.push(i);
		arr.push(i);
	}

	var cardValues = [];

	while (arr.length > 0) {
		var random = Math.floor(Math.random() * arr.length);
		var randomValue = arr.splice(random, 1)[0];
		cardValues.push(randomValue);  
	}

	return cardValues;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
	var colors = [
		'hsl(25, 85%, 65%)',
		'hsl(55, 85%, 65%)',
		'hsl(90, 85%, 65%)',
		'hsl(160, 85%, 65%)',
		'hsl(220, 85%, 65%)',
		'hsl(265, 85%, 65%)',
		'hsl(310, 85%, 65%)',
		'hsl(360, 85%, 65%)'
	];

	$game.empty();
	for (var i = 0; i < cardValues.length; i++) {
		var value = cardValues[i];
		var color = colors[value - 1];
		var $cardElement = $('<div class="card col-md-3 col-xs-3 col-lg-3"></div>');
		$cardElement.data('value', cardValues[i]);
		$cardElement.data('isFlipped', false);
		$cardElement.data('color', color);

		$game.append($cardElement);
	}
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
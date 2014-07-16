var Scrabble = require('./scrabble');
var wordplay = require('./wordplay');

var seriesOfTiles = function(hand) {
  return wordplay.seriesOfLetters(hand.letters());
};

var bag = new Scrabble.Bag();
var hand = new Scrabble.Hand(bag);
console.log(hand.letters());
seriesOfTiles(hand).forEach(function(series) {
  console.log(series.join(''));
});

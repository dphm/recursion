var Scrabble = require('./scrabble');
var wordplay = require('./wordplay');
var Dictionary = require('./dictionary').Dictionary;
var hasWord = require('./dictionary').hasWord;

var seriesOfTiles = function(hand) {
  return wordplay.seriesOfLetters(hand.letters());
};

var bag = new Scrabble.Bag();
var hand = new Scrabble.Hand(bag);
console.log(hand.letters());
seriesOfTiles(hand).forEach(function(series) {
  var s = series.join('').toLowerCase();
  if (hasWord(Dictionary, s)) console.log(s);
});

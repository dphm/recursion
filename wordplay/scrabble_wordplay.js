var Scrabble = require('./scrabble');
var wordplay = require('./wordplay');
var Dictionary = require('./dictionary').Dictionary;
var hasWord = require('./dictionary').hasWord;

function seriesOfTiles(hand) {
  return wordplay.seriesOfLetters(hand.letters());
};

function validWords(Dictionary, hand) {
  return seriesOfTiles(hand).filter(function(series) {
    var s = series.join('').toLowerCase();
    return hasWord(Dictionary, s);
  });
}

var bag = new Scrabble.Bag();
var hand = new Scrabble.Hand(bag);
console.log(hand.letters());
console.log(validWords(Dictionary, hand));

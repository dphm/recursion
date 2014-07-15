var Scrabble = {
  Bag: function() {
    this.tiles = {
      A: { value:  1, quantity:  9 },
      B: { value:  3, quantity:  2 },
      C: { value:  3, quantity:  2 },
      D: { value:  2, quantity:  4 },
      E: { value:  1, quantity: 12 },
      F: { value:  4, quantity:  2 },
      G: { value:  2, quantity:  3 },
      H: { value:  4, quantity:  2 },
      I: { value:  1, quantity:  9 },
      J: { value:  8, quantity:  1 },
      K: { value:  5, quantity:  1 },
      L: { value:  1, quantity:  4 },
      M: { value:  3, quantity:  2 },
      N: { value:  1, quantity:  6 },
      O: { value:  1, quantity:  8 },
      P: { value:  3, quantity:  2 },
      Q: { value: 10, quantity:  1 },
      R: { value:  1, quantity:  6 },
      S: { value:  1, quantity:  4 },
      T: { value:  1, quantity:  6 },
      U: { value:  1, quantity:  4 },
      V: { value:  4, quantity:  2 },
      W: { value:  4, quantity:  2 },
      X: { value:  8, quantity:  1 },
      Y: { value:  4, quantity:  2 },
      Z: { value: 10, quantity:  1 },
      _: { value:  0, quantity:  2 }
    }
  },

  Tile: function(letter, value) {
    this.letter = letter;
    this.value = value;
  },

  Hand: function(bag) {
    this.bag = bag;
    this.tiles = bag.drawTiles(7);
  }
}

Scrabble.Bag.prototype = {
  drawTile: function() {
    var i = Math.floor(Math.random() * 27);
    var letter = Object.keys(this.tiles)[i];
    if (this.tiles[letter].quantity < 1) return this.drawTile();

    this.tiles[letter].quantity--;
    return new Scrabble.Tile(letter, this.tiles[letter].value);
  },

  drawTiles: function(n) {
    var tiles = [];
    for (var i = 0; i < n; i++) {
      tiles.push(this.drawTile());
    }
    return tiles;
  }
};

Scrabble.Hand.prototype = {
  add: function(tiles) {
    this.tiles = this.tiles.concat(tiles);
    this.tiles = this.tiles.slice(0, 7);
  },

  play: function(letters) {
    var _this = this;
    letters.forEach(function(letter) {
      for (var i = 0; i < _this.tiles.length; i++) {
        if (letter === _this.tiles[i].letter) {
          _this.remove(i);
          console.log('Played ' + letter);
          return;
        }
      }
    });
  },

  remove: function(i) {
    this.tiles = this.tiles.slice(0, i).concat(this.tiles.slice(i + 1));
  },

  full: function() {
    return this.tiles.length === 7;
  }
}

module.exports = Scrabble;

var bag = new Scrabble.Bag();
var hand = new Scrabble.Hand(bag);
console.log(hand.tiles);
console.log(bag.tiles);

console.log(hand.tiles[0]);
hand.play([hand.tiles[0].letter]);

hand.add(bag.drawTiles(2));
console.log(hand.tiles);

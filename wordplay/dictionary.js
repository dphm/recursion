var fs = require('fs');
var trie = require('./trie');

var Dictionary = new trie.Trie();
var hasWord = trie.lookup;

function importWords(dictionary, filename) {
  var lines = fs.readFileSync(filename, 'utf8').split('\n');

  lines.forEach(function(line) {
    trie.insert(dictionary, line);
  });
}

function exportJSON(dictionary) {
  var json = JSON.stringify(dictionary);
  fs.writeFile('./dictionary.json', json, function(err) {
    if (err) throw err;
  });
}

importWords(Dictionary, './ospd.txt');

module.exports = {
  Dictionary: Dictionary,
  hasWord: hasWord
}

var Letter = require("./letter.js");

function Word(wordArr) {
    this.wordArr = wordArr;
    this.refWord = [];
    this.makeWord = function() {
        for (var i=0; i<wordArr.length; i++) {
            var let = new Letter(wordArr[i]);
            this.refWord.push(let);
        }
    }
    this.showWord = function() {
        var wordSelect = [];
        for (var i=0; i<this.refWord.length; i++) {
            wordSelect.push(this.refWord[i].displayLet());
        }
        return wordSelect.join(" ");
    }
    this.checkGuess = function(myGuess) {
        for (var i=0; i<this.refWord.length; i++) {
            this.refWord[i].check(myGuess);
        }
    }
}

module.exports = Word;
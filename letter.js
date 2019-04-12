function Letter(first) {
    this.first = first;
    this.guessed = false;
    this.displayLet = function() {
        if (this.first === " ") {
            return " ";
        }
        else if(!this.guessed) {
            return "_";
        }
        else {
            return this.first;
        }
    }
    this.check = function(userGuess) {
        if (userGuess === this.first) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;
// This will construct each individual letter for our hangman game. It will be exported and required by Letter.js

var Letter = function(char){
  this.char = char;
  this.guessed = false;

};
  // check if the letter has been guessed - if not, display a "_", if it has, display the char as a string
  Letter.prototype.isGuessedCheck = function() {

    var char = this.char.toString();

    if(!this.guessed){
      return '_ ';
    } else {
      return char
    }
  };

  //  checks input vs. the char. Saving this as a separate function for now.

  Letter.prototype.checkLetter = function(input){
    if(input.toUpperCase() === this.char.toUpperCase()){
      return this.guessed = true;
    };
  };

var testLetter = new Letter("W");

// testLetter.checkLetter("f");
// console.log(testLetter);
// console.log(this);
// console.log(testLetter.guessed);
// console.log(testLetter.isGuessedCheck());
// console.log(testLetter.checkLetter("f", testLetter));
// console.log(this.guessed);
module.exports = Letter;

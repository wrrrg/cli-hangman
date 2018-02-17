// This will construct each individual letter for our hangman game. It will be exported and required by Letter.js

var Letter = function(char){
  this.char = char;
  this.guessed = false;
  // check if the letter has been guessed - if not, display a "_", if it has, display the char as a string
  this.displayLetter = function(){
    var display = '';
    if(!this.guessed){
      display = '_';
    } else {
      display = char.toString();
    }
    console.log(display);
  };
  //  checks input vs. the char - if it's correct (either lower or uppercase will count) we change guessed boolean to true and run the display function
  this.checkLetter = function(input){
    if(input === this.char.toUpperCase() || this.char.toLowerCase()){
      this.guessed = true;
      this.displayLetter();
    } else {
      console.log("Not the right answer!");
    };
  };
};

var testLetter = new Letter("W");

testLetter.checkLetter("w");
module.exports = Letter;

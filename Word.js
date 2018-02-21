var Letter = require('./letter.js');

var Word = function(input){
  this.input = input;
  this.wordString = input.toString();
  this.wordArr = [];
  this.guessedLetters = [];
  // creates a Letter object for each char in the input string
  for (var i = 0; i < this.wordString.length; i++) {
    this.wordArr.push(new Letter(this.wordString[i]));
  }
};

  // creates a string out of the word.
Word.prototype.makeString = function(){
    var arr = this.wordArr;
    var string = '';
    for (var i = 0; i < arr.length; i++) {
      newChar = arr[i].isGuessedCheck();
      string += newChar;
    };
    this.wordString = string;
    // gives the string
    return this.wordString;

  };
  //

Word.prototype.userGuess = function(input){
  var arr = this.wordArr;
  var char = input;
  var correct = false;
// first check if they guessed already
  if (this.guessedLetters.indexOf(char) > -1){
    console.log("You already guessed that letter!");
  } else {
  this.guessedLetters.push(char);
  for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i].char);
    // console.log(arr[i].guessed);
    arr[i].checkLetter(char);
    if(arr[i].checkLetter(char)){
      correct = true;
    }
  };

  return correct;

 };
};

// console.log('Word is linked!');


// };

// var testWord = new Word("neat");
// // console.log(testWord.wordArr);
// console.log(testWord.makeString());
// testWord.userGuess("t");
// console.log(testWord.makeString());
// console.log(testWord.guessedLetters);
// testWord.userGuess("t");
// console.log(testWord.guessedLetters);

module.exports = Word;

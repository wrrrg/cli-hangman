var Letter = require('./letter.js');

var Word = function(word){
  this.word = word;
  // an array to store our Letter objects
  this.wordArr = [];
  //
  this.wordString = '';

  // creates a Letter object for each char in the input string
  for (var i = 0; i < this.word.length; i++) {
    this.wordArr.push(new Letter(this.word[i]));
  };

  // creates a string out of the word.
  this.makeString = function(){
    var arr = this.wordArr;
    var string = '';
    for (var i = 0; i < arr.length; i++) {
      newChar = arr[i].displayLetter();
      string += newChar;
    };
    this.wordString = string;
    // gives the string
    return this.wordString;

  };




};

var testWord = new Word("neat");
console.log(testWord.wordArr);
console.log(testWord.makeString());

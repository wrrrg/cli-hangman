var Letter = require('./Letter.js');
var Word = require('./Word.js');
var randomWords = require('random-words');


// Game logic variables

// picks a new word for the game
var currentWord = new Word(randomWords());
// console.log(currentWord);

// counts the remaining guesses the user has before defeat

var remainingGuesses = 7;


// Win condition variables
var victory = false;
var defeat = false;
var winCount = 0;
var lossCount = 0;



function startGame(){
  currentWord = new Word(randomWords());
  console.log("Thanks for playing hangman! Best of luck.");
  console.log("You have " + remainingGuesses + " guesses left.");
  console.log(currentWord.makeString());
};

startGame();

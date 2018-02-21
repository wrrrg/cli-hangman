var Letter = require('./Letter.js');
var Word = require('./Word.js');
var randomWords = require('random-words');
var inquirer = require('inquirer');


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
var remainingGuesses = 7;

// is the game still running?

var stillPlaying = true;

// var continueGame = true;

function startGame(){
  //first, start a new game
  resetGame();

};

function guessLoop(){
  if (remainingGuesses > 0){
    inquirer.prompt({
      type:"input",
      name:"letterGuess",
      message:"Guess a letter!"
    }).then(data => {
      if(data.letterGuess.length !== 1 || currentWord.guessedLetters.indexOf(data.letterGuess) > -1){
        console.log("Please enter a single letter, that you haven't already guessed. So far you have guessed: " + currentWord.guessedLetters);
        guessLoop();

      } else {
        if(currentWord.userGuess(data.letterGuess) === true){
          console.log("Nice! That one's in there.");
          console.log("You have " + remainingGuesses + " guesses left.");
          console.log(currentWord.makeString());
        } else {
          remainingGuesses --;
          console.log("Oof, ouch, owie. Wrong answer.")
          console.log("You have " + remainingGuesses + " guesses left.");
          console.log(currentWord.makeString());
        };
        checkVictory();
        guessLoop();
      }
    })
  } else if (remainingGuesses <= 0){
      defeat = true;
      console.log("sorry, that was your last guess!");
      resetGame();
    }
};


function checkVictory(){
  correctGuesses = 0;
  arr = currentWord.wordArr;

  for (var i = 0; i < arr.length; i++) {
    if(arr[i].guessed === true){
      correctGuesses += 1;
    }
  };

  if(correctGuesses === currentWord.wordArr.length){
    victory = true;
    console.log("You got the word!");
    resetGame();
  };

};

function resetGame(){
  inquirer.prompt({
    type: "list",
    name: "continueGame",
    message: "Do you want to play some hangman?",
    choices: ["Sure, why not", "Not really, no."]
  }).then(data => {
    if(data.continueGame === "Not really, no.") {
      console.log("Thanks anyway! Have a good day.");
      return stillPlaying = false;
    } else {
      console.log("Neat!");
      currentWord = new Word(randomWords());
      console.log(currentWord);
      remainingGuesses = 7;
      console.log("Thanks for starting a new game of hangman! Best of luck.");
      console.log("You've accrued " + winCount + " wins and " + lossCount + " losses so far.");
      console.log("You have " + remainingGuesses + " guesses left.");
      console.log(currentWord.makeString());
      guessLoop();
    }
  })

};

startGame();

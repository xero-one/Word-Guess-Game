var choicesArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var userGuess= [];
var wins = 0;
var losses = 0;
var guessesLeft = 13;
var invalidInput = null;

var computerGuess = choicesArray[Math.floor(Math.random() * choicesArray.length)];

var userGuessText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");



var restart = function() {
    var userGuess= [];
    var guessesLeft = 13;
    var computerGuess = choicesArray[Math.floor(Math.random() * choicesArray.length)];
};


document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(computerGuess);

    guessesLeft--;

   

    if (userGuess === computerGuess) {
        wins++;
        restart();
      }

    if (guessesLeft === 0) {
        losses++;
        restart();
    }

        userGuessText.textContent = "Your guess: " + userGuess;      
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses left: " + guessesLeft;
    };

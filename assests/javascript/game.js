var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Creates an array that lists out all of the options of words for computer
var words = [
  "squash",
  "pineapple",
  "cilantro",
  "avocado",
  "oats",
  "hazelnut",
  "mango",
  "apples",
  "blueberries",
  "beans"
];

var wordToGuess = words[Math.floor(Math.random() * words.length)];
var lettersInArray = wordToGuess.split("");
var lines = [];
var endGame = false;
var wrongLetters = [];
var numberGuessesLeft = 12;
// var lettersGuessed = [];
var wordInArray = [];
var match;
var linesFilled = [];
var wins = 0;

lettersInArray.forEach(letter => {
  lines.push(" _ ");
});

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  if (endGame === false) {
    //WORK ON ADDING OPTION TO GUESS ANOTHER WORD
    var userGuess = event.key.toLowerCase();

    // lettersGuessed.push(userGuess);

    //This for each loop checks that the input is a letter
    if (alphabet.includes(userGuess)) {
      match = true;
    } else {
      match = false;
    }

    //IS LETTER IN ALPHABET
    if (match === true) {
      //GUESS WAS CORRECT
      if (lettersInArray.includes(userGuess)) {
        //PLACE LETTER IN PLACE OF DASH LINE
        for (var l = 0; l < lettersInArray.length; l++) {
          if (lettersInArray[l] === userGuess) {
            lines[l] = userGuess;
            lines = lines.fill(userGuess, lines[l], lines[l]);
            linesFilled = lines.join(" ");
          }
        }
        if (lines.includes(" _ ") === false) {
          wins++;
          endGame = true;
          numberGuessesLeft = 12;
          // wrongLetters = wrongLetters.fill(0, wrongLetters.length - 1);
          wrongLetters = [];
        }

        // if (lines.toString === lettersInArray.toString) {
        // for (var i = 0; i < lines.length; i++) {
        //   if (lines[i] === lettersInArray[i])
        //   wins++;
        //   endGame = true;
        // }
        // }
      } else if (!lettersInArray.includes(userGuess)) {
        //what to do with when the letters are populated
        if (linesFilled === undefined) {
        }
        if (wrongLetters.includes(userGuess) === true) {
          console.log("WRONG ANSWER TWICE" + userGuess);
        } else {
          wrongLetters.push(userGuess); //have to work on not adding a letter twice
          console.log(wrongLetters);
          numberGuessesLeft--;
        }
        if (numberGuessesLeft === 0) {
          console.log("sorry but you do not get another guess");
          console.log("END GAME");
          endGame = true;
        }
      }
    }
  }
  var output =
    "<p>wins: " +
    wins +
    "</p>" +
    "<p>Number of Guesses Remaining: " +
    numberGuessesLeft +
    "</p>" +
    "<p>Letters You Have Choosen: " +
    wrongLetters +
    "</p>" +
    "<p>Current Word: <p>" +"<p>"+
    linesFilled +
    "</p>";

  document.querySelector("#game").innerHTML = output;
};

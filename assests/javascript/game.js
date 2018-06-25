$(".display-4").html("<p>Food in the Background Hangman!</p>");
$("#startMsg").html("<p>Press start to get started!</p>");
$("#game").hide();
$(document).on("click", ".btn.btn-success", function() {
  $(".btn.btn-success").hide();
  $("#game").hide();
  $("#startMsg").html(
    "<p>Words to guess are inspired by the images on the background!<br>Examples: strawberry,lemon, etc.<br>Press any key to get started!</p>"
  );

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
    "strawberry",
    "lemon",
    "kiwi",
    "broccoli",
    "seeds",
    "lime",
    "nuts",
    "herbs"
  ];

  var lines = [];
  var endGame = false;
  var wrongLetters = [];
  var numberGuessesLeft = 12;
  var wordInArray = [];
  var match;
  var linesFilled = [];
  var wins = -1;
  var wordToGuess = words[Math.floor(Math.random() * words.length)];
  var lettersInArray = wordToGuess.split("");

  function generateNew() {
    wordToGuess = words[Math.floor(Math.random() * words.length)];
    lettersInArray = [];
    lines = [];
    lettersInArray = wordToGuess.split("");
    lettersInArray.forEach(letter => {
      lines.push(" _ ");
    });
    console.log(lettersInArray);
    numberGuessesLeft = 12;
    wrongLetters = [];
    endGame = false;
  }

  // This function is run whenever the user presses a key.
  document.onkeyup = function(event) {
    $("#game").show();
    //WORK ON ADDING OPTION TO GUESS ANOTHER WORD
    var userGuess = event.key.toLowerCase();

    if (endGame === false) {
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
            }
          }

          //ANSWER IS NOT IN ARRAY
        } else if (!lettersInArray.includes(userGuess)) {
          if (wrongLetters.includes(userGuess) === true) {
            console.log("WRONG ANSWER TWICE" + userGuess);
          } else if (wrongLetters.includes(userGuess) === false) {
            wrongLetters.push(userGuess); //have to work on not adding a letter twice
            numberGuessesLeft--;
            if (numberGuessesLeft === 0) {
              endGame = true;
            }
          }
        }
      }
    }
    if (lines.includes(" _ ") === false) {
      endGame = true;
      if (wins === -1) {
        wins = 0;
      } else {
        wins++;
      }
      generateNew();
    }
    var output =
      "<p>wins: " +
      wins +
      "</p>" +
      "<p>Number of Guesses Remaining: " +
      numberGuessesLeft +
      "</p>" +
      "<p>Wrong Letters: " +
      wrongLetters +
      "</p>" +
      "<p>Current Word: <p>" +
      "<p>" +
      lines.join(" ") +
      "</p>";

    $("#game").html(output);
  };
});

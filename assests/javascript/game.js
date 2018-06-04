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
  "omnivore",
  "hazelnut",
  "rice",
  "tortillas",
  "blueberries"
];

var wordToGuess = words[Math.floor(Math.random() * words.length)];
var wins = 0;
var wrongLetters = [];
var numberGuessesLeft = 12;
var lettersGuessed = [];
var wordInArray = [];
var match;
var lettersInArray = wordToGuess.split("");
var guess;
var lines = [];
var lettersObj = {};
var endGame = false;

console.log(lettersInArray);

// This function is run whenever the user presses a key.
lettersInArray.forEach(letter => {
  lines.push(" _ ");
});
console.log(lines);

for (var i = 0; i < lettersInArray.length; i++) {
  var num = lettersInArray[i];
  lettersObj[num] = lettersObj[num] ? lettersObj[num] + 1 : 1;
}

document.onkeyup = function(event) {
  if (endGame === false) {
    //WORK ON ADDING OPTION TO GUESS ANOTHER WORD
    var userGuess = event.key.toLowerCase();
    var linesFilled;
    console.log("this is the guess == " + userGuess);

    lettersGuessed.push(userGuess);

    //This for each loop checks that the input is a letter
    alphabet.forEach(function(element) {
      if (userGuess === element) {
        match = true;
      }
    });

    //IS LETTER IN ALPHABET
    if (match === true) {
      //GUESS WAS CORRECT
      if (lettersInArray.includes(userGuess)) {
        //PLACE LETTER IN PLACE OF DASH LINE
        for (var l = 0; l < lettersInArray.length; l++) {
          if (lettersInArray[l] === userGuess) {
            lines[l] = userGuess;
            var fillIn = lines.fill(userGuess, lines[l], lines[l]);
            console.log("this is the array" + fillIn);
            linesFilled = fillIn.join(" ");
            // var html2 =
            // "<p>Current Word</p>"+"<p>" +fillIn.join(" ") +"</p>";
            
              var html2 = "<p>Current Word </p><p>" + linesFilled + "</p>";
            
          }
        }
        //GUESS WAS WRONG
      } else if (!lettersInArray.includes(userGuess)) {
        //what to do with when the letters are populated
        if(linesFilled === undefined){
          break;
        }
        if (wrongLetters.includes(userGuess) === true) {
          console.log("WRONG ANSWER TWICE" + userGuess);
        } else {
          wrongLetters.push(userGuess); //have to work on not adding a letter twice
          numberGuessesLeft--;
        }
        if (numberGuessesLeft === 0) {
          console.log("sorry but you do not get another guess");
          console.log("END GAME");
          endGame = true;
        }
                  
            /////////if you have to delete a slash it will be this one
      }
    }
    //DETERMINES IF A POINT IS EARNED FOR GUESSING CORRECTLY
    if (lines.includes(" _ ") == false) {
      console.log("YOU WIN A POINT!!!!!!!!!!!");
      endGame = true;
      wins++;
    }

    var html4 =
      "<p>wins: " +
      wins +
      "</p>" +
      "<p>Number of Guesses Remaining: " +
      numberGuessesLeft +
      "</p>" +
      "<p>Letters You Have Choosen: " +
      wrongLetters +
      "</p>";

    // if (linesFilled === undefined) {
    //   return "";
    // } else {
    //   var html2 = "<p>Current Word </p><p>" + linesFilled + "</p>";
    // }
    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html4 + html2;
  }
};

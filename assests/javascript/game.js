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
  "appetizer",
  "carbohydrate",
  "cilantro",
  "avocado",
  "omnivore",
  "hazelnut"
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
var lines;

console.log(lettersInArray);
// This function is run whenever the user presses a key.
lettersInArray.forEach(letter => {
  lines.concat("_");
  var html3 = "_ ";
  document.querySelector("#game").innerHTML = html3.concat;
});

document.onkeyup = function(event) {
  var userGuess = event.key.toLowerCase().toString();
  console.log("this is the guess == " + userGuess);
  //This for each loop checks that the input is a letter

  alphabet.forEach(function(element) {
    if (userGuess === element) {
      // console.log("Letter:  " + element+" ===="+userGuess);
      // match=true
      return (match = true);
    }
  });

  if (match === true) {
    if (lettersInArray.includes(userGuess)) {
      lettersGuessed.push(userGuess);
      numberGuessesLeft++;
      console.log("RIGHT!!" + userGuess);
      var html = "<p>You chose Correct!!!!! ===>" + userGuess + "</p>";
      document.querySelector("#game").innerHTML = html;
    } else if (!lettersInArray.includes(userGuess)) {
      console.log("WRONG" + userGuess);
      wrongLetters.push(userGuess);
      numberGuessesLeft--;
      var html2 = "<p>Try Again ===>" + userGuess + "</p>";
      document.querySelector("#game").innerHTML = html2;
    }
  }
  console.log(lettersGuessed);
  console.log(wrongLetters);
};

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
var lines = [];
var lettersObj = {};
var endGame = false;

console.log(lettersInArray);

// This function is run whenever the user presses a key.
lettersInArray.forEach(letter => {
  lines.push(" _ ");
});
console.log(lines);

var html3 = lines.join(" ");
document.querySelector("#linesForLetters").innerHTML = html3;

for (var i = 0; i < lettersInArray.length; i++) {
  var num = lettersInArray[i];
  lettersObj[num] = lettersObj[num] ? lettersObj[num] + 1 : 1;
}

document.onkeyup = function(event) {
  if (endGame === false) {//WORK ON ADDING OPTION TO GUESS ANOTHER WORD 
    var userGuess = event.key.toLowerCase();
    console.log("this is the guess == " + userGuess);

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
        var html = "<p>CORRECT! ===>" + userGuess + "</p>";
        document.querySelector("#game").innerHTML = html;
        //PLACE LETTER IN PLACE OF DASH LINE
        for (var l = 0; l < lettersInArray.length; l++) {
          if (lettersInArray[l] === userGuess) {
            lines[l] = userGuess;
            console.log("RIGHT!!" + lines[l]);
          } else {
            lines[l] = lines[l];
          }
        }
        console.log(lines);

        //GUESS WAS WRONG
      } else if (!lettersInArray.includes(userGuess)) {//have to work on not considering a double letter as another point deduction

        if(wrongLetters.includes(userGuess)===true){
          console.log("WRONG ANSWER TWICE" + userGuess);
        }else{
        wrongLetters.push(userGuess);//have to work on not adding a letter twice 
        numberGuessesLeft--;}
        if (numberGuessesLeft >= 1) {
          var html2 = "<p>Try Again ===>" + userGuess + "</p>";
          console.log(numberGuessesLeft);
          document.querySelector("#game").innerHTML = html2;
        } else if (numberGuessesLeft === 0) {
          var html2 = "<p>Try Again ===>" + userGuess + "</p>";
          console.log("sorry but you do not get another guess");
          console.log("END GAME");
          endGame = true;
        }

/////////if you have to delete a slash it will be this one
      

      }
    }
    //DETERMINES IF A POINT IS EARNED FOR GUESSING CORRECTLY
    if (lines.includes(" _ ")==false) {
      console.log("YOU WIN A POINT!!!!!!!!!!!");
      //endGame = true;
      wins++;      
    }

  }
};

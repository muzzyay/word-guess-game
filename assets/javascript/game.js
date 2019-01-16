// Library of countries
var countries = [
  "albania",
  "algeria",
  "belgium",
  "belarus",
  "croatia",
  "denmark",
  "england",
  "finland",
  "germany",
  "holland",
  "jamaica",
  "morocco",
  "nigeria",
  "romania",
  "senegal",
  "ukraine",
  "tunisia",
  "vietnam",
  "myanmar",
  "ireland",
  "iceland",
  "hungary",
  "prussia",
  "georgia",
  "estonia",
  "ecuador",
  "armenia"
];

// Array of guessed letter
var guessedLetters = [];
// set variables for wins and remaining guess
var wins = 0;
var guessesRemaining = 10;

// array for letters of picked country
var letters = ["_ ", "_ ", "_ ", "_ ", "_ ", "_ ", "_ "];

//randomly picked country variable
var pickedCountry = countries[Math.floor(Math.random() * countries.length)];
console.log(pickedCountry);

// runs the code below when a key is pressed
document.onkeyup = function(event) {
  var userLetter = event.key.toLowerCase();
  console.log(userLetter);

  //   checks if the key is entered before if true exits the function
  if (guessedLetters.includes(userLetter)) {
    return;
  }

//   adds entered keys to guessed letters array
  guessedLetters.push(userLetter);
  console.log("You guessed: " + guessedLetters[guessedLetters.length - 1]);

  //checks if the letter is in the word and if true, reveals it
  if (pickedCountry.includes(userLetter)) {
    for (k = 0; k < pickedCountry.length; k++) {
      if (userLetter === pickedCountry[k]) {
        letters[k] = userLetter;
      }
    }
  } else {
    guessesRemaining--;
  }

  

  // checks if whole word is revealed or not, if true, resets the code
  if (
    letters[0] === pickedCountry[0] &&
    letters[1] === pickedCountry[1] &&
    letters[2] === pickedCountry[2] &&
    letters[3] === pickedCountry[3] &&
    letters[4] === pickedCountry[4] &&
    letters[5] === pickedCountry[5] &&
    letters[6] === pickedCountry[6]
  ) {
    wins++;

    reset();
  }

// checks if user out of guesses, if true, resets the code
  if (guessesRemaining === 0) {
    reset();
  }


  // adds texts to the HTML
  document.getElementById("wins-text").innerHTML = wins;
  document.getElementById("guessed-letters-text").innerHTML = guessedLetters;
  document.getElementById("remaining-text").innerHTML = guessesRemaining;
  document.getElementById("letters-text").innerHTML =
    letters[0] +
    letters[1] +
    letters[2] +
    letters[3] +
    letters[4] +
    letters[5] +
    letters[6];
};


// a function to reset the code
function reset() {
  letters = ["_ ", "_ ", "_ ", "_ ", "_ ", "_ ", "_ "];
  pickedCountry = countries[Math.floor(Math.random() * countries.length)];
  console.log(pickedCountry);
  guessesRemaining = 10;
  guessedLetters = [];
}

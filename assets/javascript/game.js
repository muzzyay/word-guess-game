// Library of countries
var game = {
  countries: [
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
  ],
  guessedLetters: [],
  wins: 0,
  guessesRemaining: 10,
  letters: ["_ ", "_ ", "_ ", "_ ", "_ ", "_ ", "_ "],

  reset: function() {
    game.letters = ["_ ", "_ ", "_ ", "_ ", "_ ", "_ ", "_ "];
    pickedCountry =
      game.countries[Math.floor(Math.random() * game.countries.length)];
    console.log(pickedCountry);
    game.guessesRemaining = 10;
    game.guessedLetters = [];
  }
};

var pickedCountry =
  game.countries[Math.floor(Math.random() * game.countries.length)];

  $(document).ready(function() {
    $(document).on("keyup click",  function(event) {
      var userLetter = event.key.toLowerCase();
      console.log(userLetter);
    
      //   checks if the key is entered before if true exits the function
      if (game.guessedLetters.includes(userLetter)) {
        return;
      }
    
      //   adds entered keys to guessed letters array
      game.guessedLetters.push(userLetter);
      console.log(
        "You guessed: " + game.guessedLetters[game.guessedLetters.length - 1]
      );
    
      //checks if the letter is in the word and if true, reveals it
      if (pickedCountry.includes(userLetter)) {
        for (k = 0; k < pickedCountry.length; k++) {
          if (userLetter === pickedCountry[k]) {
            game.letters[k] = userLetter;
          }
        }
      } else {
        game.guessesRemaining--;
      }
    
      // checks if whole word is revealed or not, if true, alerts the user "You won" and resets the game
    
      var wincheck = 0;
      for (var i = 0; i < pickedCountry.length; i++) {
        if (game.letters[i] === pickedCountry[i]) {
          wincheck++;
          if (wincheck === 7) {
    
            
            alert("You Won");
            game.wins++;
            game.reset();
          }
        }
      }
    
      // checks if user out of guesses, if true, resets the game
      if (game.guessesRemaining === 0) {
        game.reset();
      }
    
      // adds texts to the HTML
      document.getElementById("wins-text").innerHTML = game.wins;
      document.getElementById("guessed-letters-text").innerHTML =
        game.guessedLetters;
      document.getElementById("remaining-text").innerHTML = game.guessesRemaining;
      document.getElementById("letters-text").innerHTML =
        game.letters[0] +
        game.letters[1] +
        game.letters[2] +
        game.letters[3] +
        game.letters[4] +
        game.letters[5] +
        game.letters[6];
    })
  
  })


  
    
  

    

  
// runs the code below when a key is pressed

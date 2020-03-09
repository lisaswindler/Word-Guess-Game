// Create variables that reference the HTML so we know where to display things
var correctLetters = document.getElementById("correct-letters");
var wrongLetters = document.getElementById("wrong-letters");
var guessesLeft = document.getElementById("guesses-left");
var winsText = document.getElementById("wins-text");   
var lossesText = document.getElementById("losses-text"); 
var emptySpaces = document.getElementById("empty-spaces");     
// Create an array of words to choose from
var seaAnimals = ["sea urchin", "whale shark", "lamprey", "angelfish", 
"swordfish", "stingray", "octopus", "giant squid", "manatee", "anemone", 
"barnacle", "cuttlefish", "narwhal", "porpoise", "beluga"];
// Take a random word from the array
var seaAnimal = seaAnimals[Math.floor(Math.random() * seaAnimals.length)];
console.log(seaAnimal);
//Track number of wins
var wins = 0;
// winsText.textContent = wins;
// Track how many letters are left to be guessed
var remainingLetters = seaAnimal.length;
console.log(remainingLetters);
// Create number of guesses allowed
var remainingGuesses = 12;
console.log(remainingGuesses);
// Turn word into underscores
var blankArray = [];
for (var i=0; i < seaAnimal.length; i++)
blankArray.push('_');
console.log(blankArray);
// Track keys pressed
document.onkeyup = function(event) {
console.log(event.key);
// If key pressed is not a letter
if (event.key !== 'a')
{alert("Please press a letter")
// If letter pressed is in word
} else if (seaAnimal.includes(event.key)) {
    console.log("Right")
// If letter is not in word
} else {
    console.log("Wrong");
    remainingGuesses--;
}
}
// Display guess
// wrongLetters.textContent = guess;
// // Turn word into underscores

//Display underscores in HTML
// emptySpaces.textContent = blankArray;
// var blankArray = document.getElementById("empty-spaces");
// If input matches a letter in the word, fill in that letter
// for (var j = 0; j < seaAnimal.length; j++) {
//     if (seaAnimal[j] === guess) {
//         emptySpaces[j] = guess;
//         remainingLetters--;
// }
// }
// When page opens:
// You see blank spaces and a heading that tells you to press a key
// while game goes {
//     Keys pressed are detected    
//     if not a letter {
//         return an error} 
//         if a letter in the word that hasn't been guessed {
//         replace underscore with letter + decrease remaining letters by 1
//     }   else if letter pressed is not in word {
//         add letter to wrong letter display + decrease remaining guesses by 1
//     }  if letter has already been pressed {
//         do nothing
//     } 
// if all letters are filled in {
//     congratulate player + show picture of animal + wins++
// } else if 12 letters are pressed without guessing correctly {
//     fill in letters + show picture of animal
// } 
// repeat process with new word
// }
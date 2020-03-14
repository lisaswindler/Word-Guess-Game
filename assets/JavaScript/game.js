// Create variables that reference the HTML so we know where to display things
var correctLetters = document.getElementById("correct-letters");
var wrongLetters = document.getElementById("wrong-letters");
var guessesLeft = document.getElementById("guesses-left");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var emptySpaces = document.getElementById("empty-spaces");

// Create an array of words to choose from
var seaAnimals = ["whale", "shark", "lamprey", "angelfish",
"swordfish", "stingray", "octopus", "squid", "manatee", "anemone",
"barnacle", "cuttlefish", "narwhal", "porpoise", "beluga"];
//    var seaAnimals = ["whale", "shark"];

//var seaAnimal = seaAnimals[Math.floor(Math.random() * seaAnimals.length)];
//console.log(seaAnimal);
// Track number of wins
var wins = 0;
winsText.textContent = wins;

// Track number of losses
var losses = 0;
lossesText.textContent = losses;

var remainingGuesses = 12;
var numCorrectLetters = 0;

// Create number of guesses allowed
var randomWord = makeNewGame();

// Function to turn word into underscores
function makeBlankArray(arr) {
    for (var x = 0; x < arr.length; x++) {
        // for each letter, push a new span that contains an underscore
        correctLetters.innerHTML += '<span id="underscore_'+ x +'"> _ </span>'; 
    }
}

function makeArray(str) {
    var newArray = str.split("");
    return newArray;
}

// function to make a new game
function makeNewGame() {  
    var seaAnimal = seaAnimals[Math.floor(Math.random() * seaAnimals.length)];  
    var positionAnimal = seaAnimals.indexOf(seaAnimal);
    if (seaAnimals.length < 1) {
            alert("Good job!");
        } else {
            seaAnimals.splice(positionAnimal, 1);
        }     
    remainingGuesses = 12;
    numCorrectLetters = 0;
    correctLetters.textContent = "";
    wrongLetters.textContent = ""
    guessesLeft.textContent = remainingGuesses;
    makeBlankArray(makeArray(seaAnimal));
    allLetters = [];
    
    return seaAnimal;
}

var allLetters = [];

// Track keys pressed
 document.onkeyup = function (event) {
    // If key pressed is a letter, record the key pressed and store it
        var letter = event.key;
        var letterCode = event.keyCode;
        
        if (letterCode >= 65 && letterCode <= 90) {
            
            //check if that key was already pressed
            if (allLetters.includes(letter) === false) {
                allLetters.push(letter);
                console.log(letter);
                
                if (randomWord.indexOf(letter) !== -1) {
                    //var addCorrectLetter = letter + ""
                    //correctLetters.textContent += addLetter;
                    var pos = 0;
                    var i = -1;
                    while (pos != -1) {
                        pos = randomWord.indexOf(letter, i + 1);
                        i = pos;
                        console.log(i);
                        if (i !== -1) {
                            var replaceUnderscore = document.getElementById("underscore_" + i)
                            replaceUnderscore.textContent = " " + letter + " ";
                            numCorrectLetters++;
                        }
                    }
                    if (numCorrectLetters === randomWord.length) {
                        randomWord = makeNewGame();
                        wins++;
                        winsText.textContent = wins;
                    }
                } else {
                        var addLetter = letter + " ";
                        wrongLetters.innerHTML += addLetter;
                        remainingGuesses--;
                        guessesLeft.textContent = remainingGuesses;
                        if (remainingGuesses === 0) {
                            randomWord = makeNewGame();
                            losses++;
                            lossesText.textContent = losses;
                        }
                }
            }
        }
 }    
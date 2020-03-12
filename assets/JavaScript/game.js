// Create variables that reference the HTML so we know where to display things
var correctLetters = document.getElementById("correct-letters");
var wrongLetters = document.getElementById("wrong-letters");
var guessesLeft = document.getElementById("guesses-left");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var emptySpaces = document.getElementById("empty-spaces");
wrongLetters.textContent = "hi";
    // Create an array of words to choose from
    var seaAnimals = ["whale", "shark", "lamprey", "angelfish",
        "swordfish", "stingray", "octopus", "squid", "manatee", "anemone",
        "barnacle", "cuttlefish", "narwhal", "porpoise", "beluga"];
        
    // Take a random word from the array
    var seaAnimal = seaAnimals[Math.floor(Math.random() * seaAnimals.length)];
    //Track number of wins
    var wins = 0;

    // Track how many letters are left to be guessed
    var remainingLetters = seaAnimal.length;
    console.log(remainingLetters);

    // Create number of guesses allowed
    var remainingGuesses = 12;
    console.log(remainingGuesses);  

    // Turn word into underscores
    var lettersGuessed = [];

    function makeBlankArray(arr) {
        
        var blankArray = [];

        for (var i = 0; i < arr.length; i++) {
            blankArray.push('_');
            console.log(blankArray);
        }
        return blankArray;
    }

    function makeArray(str) {
        var newArr = seaAnimal.split("");
        console.log(newArr);
        return newArr;
    }

    // Track keys pressed
    document.onkeyup = function (event) {

        // If key pressed is a letter, record the key pressed and store it
        var letter = event.key;
        var letterCode = event.keyCode;
        if (letterCode >= 65 && letterCode <= 90) {
        
        var blankArr = makeBlankArray(seaAnimal);
        
        console.log(blankArr);
        console.log(letter);
           
        //check if that key was already pressed
            if (wrongLetters.includes(letter) === false || correctLetters.includes(letter) === false) {
                if (seaAnimal.includes(letter) === true {
                    
                } else {
                    remainingGuesses--;
                

            }
        
            //check if the letter is in our word
                //if not add letter to guessed letters array and decrease our guess count
                    //update the DOM
                //check if our guess left is 0
                    //if yes game over reset!!!!

                //otherwise continue

            //loop through the word array, find matching letter and replace blankarray with matching letter
            //add to guessed letters
                //Update the DOM
            //check if they won and increase win count otherwise continue
                //if won picking new word, create a new blankkarray, make a new strArray


        }


            // If letter pressed is in word
        // } else if (seaAnimal.includes(letter)) {
        //     console.log("Right")
        //     // If letter is not in word
        // } else {
        //     console.log("Wrong");
        //     remainingGuesses--;
        // }
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
    //     if a letter {
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
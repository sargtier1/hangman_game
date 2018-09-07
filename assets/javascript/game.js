//////  ARRAY WITH POSSIBLE WORDS TO GUESS FROM //////

var wordPool = 
  [
    "jacket", 
    "audacious",
    "taciturn",
    "puissant",
    "exigent",
    "cerulean",
    "computation",
    "fledgling",
    "boon",
    "bereft",
    "agog", 
    "tempestuous",
    "stretch", 
    "ego",
    "bastille",
    "zipper",
    "wily",
    "bombastic",
    "yearning"      
  ];
                              
// Variables that hold refernece to HTML
// var playArea = document.getElementById("playArea");
var letterGuessed = document.getElementById("lettersGuessed");
var playArea = document.getElementById("playArea");
var wins = document.getElementById("wins");
var guessLeft = document.getElementById("remaining");

// Variables that hold of wins loses, and whats being guessed
var winCount = 0;
var maxGuesses = 9;
var GuessRight = false;
var GuessWrong = false;
console.log(GuessRight)

//Selects random word and creats empty array/ checks remaing lettes
var chosenWord = wordPool[Math.floor(Math.random() * wordPool.length)];
var answer = [];
var remainingLetters;



window.onload = function () {
   
    // figures out how many characters are in selected word //
    for (var i = 0; i < chosenWord.length; i++) {
        console.log(i);
        answer.push("_");
        console.log(answer);
        console.log(chosenWord); 
    }

    remainingLetters = chosenWord.length
    console.log(remainingLetters)


    document.getElementById("playArea").innerHTML = answer.join(" "); //replaces spaces with blanks on web page
    document.getElementById("remaining").innerHTML = maxGuesses; //puts max guesses on screen
    document.getElementById("wins").innerHTML = winCount; // puts wins on screen
  };

  //Runs everytime a key is pressed\\

document.onkeyup = function whenGuessed (event) {
    var count = 0;


  // Determines what is being pressed, and then logs that guess in the "letters Guessed" box
    var playerGuess = (event.key);
    lettersGuessed.innerHTML += " " + playerGuess;
    

  // creates variable to see how many letters are left in the word.  

      for (var i = 0; i < chosenWord.length; i++) {//this helps following code reference the hidden word
        
        if (chosenWord[i] === playerGuess) {
          // checks if guess is the same as a character 
          answer[i]= playerGuess; 


          // displays new array with filled in blank spaces
          document.getElementById("playArea").innerHTML = answer.join(" ")
          GuessRight = true;
          count++;
          }
        }

        console.log('count ' + count);

        if (GuessRight === true) {
          // reduces index of string by one
          remainingLetters = remainingLetters - count;
           // console test
           console.log(answer); 
           console.log('remaining ' + remainingLetters);

        } else {
          // reduces max guess by one
          maxGuesses --;
        }

          // updates max guess by one
          document.getElementById("remaining").innerHTML = maxGuesses;
 
        if (remainingLetters === 0) {
          winCount++;
          document.getElementById("wins").textContent = winCount;
          document.getElementById("gameStatus").innerHTML = "You Win!";
          maxGuesses = 9;
          chosenWord = wordPool[Math.floor(Math.random() * wordPool.length)];
          answer = [];
          remainingLetters = chosenWord.length
        }


        if (maxGuesses === 0) {
        alert("You Lose!");
        maxGuesses = 9;
        chosenWord = wordPool[Math.floor(Math.random() * wordPool.length)];
        answer = [];
        remainingLetters = chosenWord.length
        }
};
 /// point of win/loss reset game for another round, but dont reload stats
 
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
var letterGuessed =  document.getElementById("lettersGuessed");
var playArea= document.getElementById("playArea");
var wins = document.getElementById("wins");
var guessLeft = document.getElementById("remaining");

// Variables that hold of wins loses, and whats being guessed
var wins = 0;
var maxGuesses = 9;

//Selects random word and creats empty array
var chosenWord = wordPool[Math.floor(Math.random() * wordPool.length)];
var answer = [];

window.onload = function () {
   
    // figures out how many characters are in selected word //
    for (var i = 0; i < chosenWord.length; i++) {
        console.log(i);
        answer.push("_");
        console.log(answer);
        console.log(chosenWord); 
    }

    document.getElementById("playArea").innerHTML = answer.join(" "); //replaces spaces with blanks on web page
    document.getElementById("remaining").innerHTML = maxGuesses; //puts max guesses on screen
    document.getElementById("wins").innerHTML = wins; // puts wins on screen


  //Runs everytime a key is pressed\\

document.onkeyup = function whenGuessed (event) {

    var playerGuess = (event.key);//figures out whats being pressed
    lettersGuessed.innerHTML += " " + playerGuess; //Players guess displayed
    guessLeft - 1;//removes guesses remaining by one each guess
    
    
      for (var i = 0; i < chosenWord.length; i++) {//this helps following code reference the hidden word

        if (chosenWord[i] === playerGuess) {
          document.getElementById("playArea").textContent += playerGuess;
          

          } else if (maxGuesses === 0) {
            // after 9 presses alerts "you lose!"
              alert("You Lose");
              
          } else {
            // if all spaces are filled you alert "you win!""
            wins++;
          }
    }
  };
};


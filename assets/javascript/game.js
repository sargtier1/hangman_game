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

//Selects random word and creats empty array (bonus player guess var)
var chosenWord = wordPool[Math.floor(Math.random() * wordPool.length)];
var answer = [];

// figures out how many characters are in selected word, updates game screen with stats //
window.onload = function load() {
   
    // figures out how many characters are in selected word, updates game screen with stats //
    for (var i = 0; i < chosenWord.length; i++) {
        answer[i] = "_";
        console.log([i]);
        console.log(answer)
        console.log(chosenWord); //test
    }

    var remainingLetters = chosenWord.length
    document.getElementById("playArea").innerHTML = answer.join(" "); //replaces spaces with blanks on web page
    document.getElementById("remaining").innerHTML = maxGuesses; //puts max guesses on screen
    document.getElementById("wins").innerHTML = wins; // puts wins on screen

  };

  //Runs everytime a key is pressed\\

document.onkeyup = function whenGuessed (event) {

    var playerGuess = (event.key);//figures out whats being pressed
    lettersGuessed.innerHTML += " " + playerGuess; //Players guess displayed
    maxGuesses -1;
    var remainingLetters = chosenWord.length; 

      for (var j = 0; j < chosenWord.length; j++) {//this helps following code reference the hidden word
        
        if (playerGuess < "a" || playerGuess > "z") {
          return;
          }

        if (chosenWord.charAt[j] === playerGuess) {
          //change vale of answer[i] to current character
          answer[j] = playerGuess;
          remainingLetters - 1;
          console.log(answer);
          return;
          }

        if (chosenWord.charAt[j] !== playerGuess) {
          // reduce guesses by 1
          guessLeft = maxGuesses - 1;   
          return;       
          }

        if (maxGuesses === 0) {
          // end game
            alert("You Lose!");
            prompt("play Again?")
            if (true) {
              // execute load function
            }
          } 
        }

        if (remainingLetters === 0){
          alert("You Win!")
          prompt("play Again?") 
            if (true) {
              //execute load funtion
            }
        }
        
};
  // updating the playingfield



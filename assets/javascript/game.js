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
                              
////// Randomly chooses a choice from the options array. This is the Computer's guess.


var chosenWord = wordPool[Math.floor(Math.random() * wordPool.length)];
var wins = 0;
var answer = [];
const maxGuesses = 9;



window.onload = function () {
   
    // This uses iteration to figure out how many characters on in a selected word //
    for (var i = 0; i < chosenWord.length; i++) {
        console.log(i);
        answer.push("_");
        console.log(answer);
    }

    document.getElementById("playArea").innerHTML = answer.join(" ");//replaces spaces with blanks
  };


document.onkeyup = function(keyPressed) {

  var chr = String.fromCharCode(event.keyCode);//converts the keycode into a character
  document.getElementById("lettersGuessed").innerHTML += " " + chr;//replaces letters with blank spaces
}

// Checking to see if player guess matches letters in array //
document.onkeypress = function(event){

  var chr = charAt(event.keyCode);

    for (var i = 0; i < chosenWord.length; i++) {
            console.log(chosenWord[i]);

            if (chosenWord[i].charAt(answer) === chr) {
              document.getElementById("playArea").innerHTML += event.keyCode.join;
            }
    }
  };




    




// var words = {
// 	["r", "o", "r", "s", "c", "h", "a", "c", "h"]:["_", "_", "_", "_", "_", "_", "_", "_", "_"],
// 	["d", "r", "m", "a", "n", "h", "a", "t", "t", "a", "n"]:["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
// 	["w", "a", "t", "c", "h", "m", "a", "k", "e", "r"]:["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
// 	["s", "i", "l", "k", "s", "p", "e", "c", "t", "r", "e"]:["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
// 	["c", "o", "m", "e", "d", "i", "a", "n"]:["_", "_", "_", "_", "_", "_", "_", "_", "_"],
// 	["n", "i", "g", "h", "t", "o", "w", "l"]:["_", "_", "_", "_", "_", "_", "_", "_"],
// 	["c", "o", "m", "p", "r", "o", "m", "i", "s", "e"]:["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
// 	["a", "l", "a", "n", "m", "o", "o", "r", "e"]:["_", "_", "_", "_", "_", "_", "_", "_", "_"],
// 	["d", "a", "v", "e", "g", "i", "b", "b", "o", "n", "s"]:["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
// 	["o", "z", "y", "m", "a", "n", "d", "i", "a", "s"]:["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
// 	["b", "u", "b", "a", "s", "t", "i", "s"]:["_", "_", "_", "_", "_", "_", "_", "_"],
// 	["g", "r", "a", "p", "h", "i", "c", "n", "o", "v", "e", "l"]:["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
// 	["s", "m", "i", "l", "e", "y", "f", "a", "c", "e"]:["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
// 	["a", "r", "c", "h", "i", "e"]:["_", "_", "_", "_", "_", "_"],
// 	["d", "o", "o", "m", "s", "d", "a", "y", "c", "l", "o", "c", "k"]:["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
// }

var words = [
["r", "o", "r", "s", "c", "h", "a", "c", "h"],
["d", "r", "m", "a", "n", "h", "a", "t", "t", "a", "n"],
["w", "a", "t", "c", "h", "m", "a", "k", "e", "r"],
["s", "i", "l", "k", "s", "p", "e", "c", "t", "r", "e"],
["c", "o", "m", "e", "d", "i", "a", "n"],
["n", "i", "g", "h", "t", "o", "w", "l"],
["c", "o", "m", "p", "r", "o", "m", "i", "s", "e"],
["a", "l", "a", "n", "m", "o", "o", "r", "e"],
["d", "a", "v", "e", "g", "i", "b", "b", "o", "n", "s"],
["o", "z", "y", "m", "a", "n", "d", "i", "a", "s"],
["b", "u", "b", "a", "s", "t", "i", "s"],
["g", "r", "a", "p", "h", "i", "c", "n", "o", "v", "e", "l"],
["s", "m", "i", "l", "e", "y", "f", "a", "c", "e"],
["a", "r", "c", "h", "i", "e"],
["d", "o", "o", "m", "s", "d", "a", "y", "c", "l", "o", "c", "k"]
]


var currentWord ="";
var placeholder =[];
var guessesRemaining=15;
var alreadyGuessed=[];


window.onload = function() {
		
		document.getElementById("guesses").innerHTML=guessesRemaining;
		
		currentWord = words[Math.floor(Math.random()* words.length)];
			console.log(currentWord);
			document.getElementById("letters").innerHTML=currentWord;

	for (var i = 0; i < currentWord.length; i++) {
			placeholder += "_ ";
		}

	document.getElementById("letters").innerHTML=placeholder;
}
	

document.onkeyup = function() {
		var correctLetter = false;
		userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			console.log(userGuess);
			console.log(currentWord.indexOf(userGuess));

			alreadyGuessed.push(" " + userGuess);
			document.getElementById("alreadyGuessed").innerHTML=alreadyGuessed;


		for (var i = 0; i < currentWord.length; i++) {

			if  (currentWord.indexOf(userGuess) !== -1) {
				correctLetter=true;
				document.getElementById("letters").innerHTML = userGuess;
				//replace guessesRemaining with the current number -1
			}

			else if (currentWord.indexOf(userGuess) == -1) {
				correctLetter=false;
				//replace guessesRemaining with the current number -1
				guessesRemaining -= 1;
				
			}
			//for (var i = 0; i < 1; i++) {
				//alreadyGuessed.push(userGuess);
				//console.log(alreadyGuessed);
			

			//for (var i = 0; i <alreadyGuessed.length; i++) {
				
				
			}
			//document.getElementById("guesses").innerHTML=guessesRemaining--;
			}
		
	
	

	






// function setup() {
// 	var availableLetters= "abcdefghijklmnopqrstuvwxyz";
// 	var remainingGuesses= 15;
// 	

// //Computer chooses randomly from the array of words in hangmanWords 
// //and displays the corresponding number of underscores.
	

// 	var currentWord = words[Math.floor(Math.random() * 
// 		hangmanWords.length)];

// 	for(var i =0; i < word.length; i ++) {
// 		word[i] = "_ ";
// 	}

// 	function printWord() {
// 		for (var i = 0; i < word.length; i++) {
// 			var wordField = document.getElementById("wordField");
// 			var letter = document.createTextNode(word[i]);
// 			wordField.appendChild(letter);
// 		}
// 	};

//   		var letters = document.getElementById("letters");
//         letters.innerHTML = '<li class="current-word">Current word:</li>';

//         var letter, i;
//         for (i = 0; i < currentWord.length; i++) {
//             letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
//             letters.insertAdjacentHTML('beforeend', letter);
































// var hangmanWords = [
// ["R", "O", "R", "S", "C", "H", "A", "C", "H"],
// ["D", "R", "M", "A", "N", "H", "A", "T", "T", "A", "N"],
// ["W", "A", "T", "C", "H", "M", "A", "K", "E", "R", "G", "O", "D"],
// ["S", "I", "L", "K", "S", "P", "E", "C", "T", "R", "E"],
// ["C", "O", "M", "E", "D", "I", "A", "N"],
// ["N", "I", "G", "H", "T", "O", "W", "L"],
// ["C", "O", "M", "P", "R", "O", "M", "I", "S", "E"],
// ["A", "L", "A", "N", "M", "O", "O", "R", "E"],
// ["D", "A", "V", "E", "G", "I", "B", "B", "O", "N", "S"],
// ["O", "Z", "Y", "M", "A", "N", "D", "I", "A", "S"],
// ["B", "U", "B", "A", "S", "T", "I", "S"],
// ["G", "R", "A", "P", "H", "I", "C", "N", "O", "V", "E", "L"],
// ["S", "M", "I", "L", "E", "Y", "F", "A", "C", "E"],
// ["A", "R", "C", "H", "I", "E"],
// ["D", "O", "O", "M", "S", "D", "A", "Y", "C", "L", "O", "C", "K"],
// ]
// var noOfWins = 0;
// var remainingGuesses = 15;
// var alreadyGuessed = [];

// //Computer chooses randomly from the array of words in hangmanWords 
// //and displays the corresponding number of underscores.
// 	var computerChoice = hangmanWords[Math.floor(Math.random() * 
// 		hangmanWords.length-1)];
// 	var currentWord = hangmanWords[random];
// 	var word = new Array(currentWord.length);
// 	var error = 0;

// 	for(var i =0; i < word.length; i ++) {
// 		word[i] = "_ ";
// 	}

// 	function printWord() {
// 		for (var i = 0; i < word.length; i++) {
// 			var wordField = document.getElementById("wordField");
// 			var letter = document.createTextNode(word[i]);
// 			wordField.appendChild(letter);
// 		}
// 	}

// 	printWord();

// //User types a letter into the keyboard and one of two things happen:
// 	//a. If the letter appears in the current word, (1) it will replace 
// 	//the underscore
// 		document.onkeyup = function(event) {
// 			var userGuess = event.key;
// 		}



	//(2) remainingGuesses will decrease by 1.
	//IMPORTANT: letter cannot be guesses more than once.




//If all guesses are used up without figuring out the word, the game 
//ends.



//Once the user has guessed all correct letters, (1) display a picture 
//that goes with the clue.



//(2)Computer picks a new word from the array and starts the game over.



























// document.onkeyup = function(event) {
// 	var userInput = event.key;

// 	if (userInput === "r") {
// 		alert("hello!");
// 		//replace blank #1 and #3 with 'R'
// 	}

// 	else if (userInput === "o") {
// 		//replace blank #2 with 'O'
// 	}


// var hangmanWords = [
// ["R", "O", "R", "S", "C", "H", "A", "C", "H"],
// ["D", "R", "M", "A", "N", "H", "A", "T", "T", "A", "N"],
// ["W", "A", "T", "C", "H", "M", "A", "K", "E", "R", "G", "O", "D"],
// ["S", "I", "L", "K", "S", "P", "E", "C", "T", "R", "E"],
// ["C", "O", "M", "E", "D", "I", "A", "N"],
// ["N", "I", "G", "H", "T", "O", "W", "L"],
// ["C", "O", "M", "P", "R", "O", "M", "I", "S", "E"],
// ["A", "L", "A", "N", "M", "O", "O", "R", "E"],
// ["D", "A", "V", "E", "G", "I", "B", "B", "O", "N", "S"],
// ["O", "Z", "Y", "M", "A", "N", "D", "I", "A", "S"],
// ["B", "U", "B", "A", "S", "T", "I", "S"],
// ["G", "R", "A", "P", "H", "I", "C", "N", "O", "V", "E", "L"],
// ["S", "M", "I", "L", "E", "Y", "F", "A", "C", "E"],
// ["A", "R", "C", "H", "I", "E"],
// ["D", "O", "O", "M", "S", "D", "A", "Y", "C", "L", "O", "C", "K"],
// ]

// document.onkeyup = function(event) {
// 	var userInput = event.key;


// var random = Math.floor((Math.random()* (hangmanWords.length-1)));

// var randomWord = hangmanWords[random];

// var words = new Array(randomWord.length); var error= 0;

// for (var i = 0; i < words.length; i++) {
// 	words[i] = "_ ";
// }

// function printWords() {
// 	for (var i = 0; i < words.length; i++) {
// 		var wordField =
// 		document.getElementById("wordField");
// 		var letter = document.createTextNode(words[i]);
// 		wordField.appendChild(letter);
// 	}
// }

// 	if (userInput === "r") {
// 		alert("hello!");
// 		//replace blank #1 and #3 with 'R'
// 	}

// 	else if (userInput === "o") {
// 		//replace blank #2 with 'O'
// 	}

// var random = Math.floor((Math.random()* (hangmanWords.length-1)));

// var randomWord = hangmanWords[random];

// var words = new Array(randomWord.length); var error= 0;

// for (var i = 0; i < words.length; i++) {
// 	words[i] = "_ ";
// }

// function printWords() {
// 	for (var i = 0; i < words.length; i++) {
// 		var wordField =
// 		document.getElementById("wordField");
// 		var letter = document.createTextNode(words[i]);
// 		wordField.appendChild(letter);
// 	}
// }















// }
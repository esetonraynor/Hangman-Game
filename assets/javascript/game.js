//Variable declared
//list of words to choose from
var words = ["rorschach", "drmanhattan", "watchmaker", "silkspectre", "comedian", "nightowl", "compromise", "alanmoore", "davegibbons", "ozymandias", "bubastis", "graphicnovel", "smileyface", "archie", "doomsdayclock"];
//computer will choose random word
var word =words[Math.floor(Math.random() * words.length)];
//variable that holds number of wins
var wins;
//variable that holds number of guesses left
var guessesLeft;
//array that holds which letters were already guessed
var alreadyGuessed=[];
//variable that holds how many letters are left to guess in the word
var remainingLetters=word.length;
//an array that will hold placeholders for the letters
var letterArray=[];
//for loop that creates the underscores as placeholders for each letter in the chosen word
		for (var i = 0; i < word.length; i++) {
			letterArray[i]="_ ";
		}

//when the HTML loads
window.onload=function setScreen() {
//establish number of wins so far
		wins=0;
		document.getElementById("noOfWins").innerHTML= wins;
//establish guesses remaining and innerHTML to proper <div>
		guessesLeft=15;
		document.getElementById("guessesLeft").innerHTML= guessesLeft;
		console.log(word);
//prints the letterArray into the <div>--THEORETICALLY
		document.getElementById("currentWord").innerHTML= letterArray.join(" ");
		console.log(letterArray);
		//alert(letterArray);
}	


//when user presses key
document.onkeyup=function() {
//variable that holds the key pressed 
	var userGuess=event.key;
//changes the guess to lower case
	userGuess=String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);
//each time user presses a key, their number of guesses decreases by 1
	guessesLeft=guessesLeft-1;
	document.getElementById("guessesLeft").innerHTML=guessesLeft;


//for loop that dictates that each time a key is pressed, the key must be compared to each letter in the current word
		
		for (var i = 0; i < word.length; i++) {
//if the letter is equal to one of the letters in the word
			if(word[i] === userGuess) {
//number of remaining letters to be guessed decreases by 1
				remainingLetters--;
				console.log(remainingLetters);
//the placeholder at that index should be replaced by the user's input
				letterArray[i] = userGuess;
				console.log(letterArray);
				//alert(letterArray);
//print changes to the HTML--THEORETICALLY
				document.getElementById("currentWord").innerHTML= letterArray.join(" ");
			}
		}
//if the letter guessed does not appear anywhere in the word
			if (word[i] !== userGuess) {
//that letter will be pushed to the array alreadyGuessed and displayed
					alreadyGuessed.push(" " + userGuess);
					document.getElementById("alreadyGuessed").innerHTML=alreadyGuessed;
			}
				


//ending the game: if user runs out of guesses, they are alerted
	if (guessesLeft==0) {
			alert("Game Over!");
//wrong letters array emptied
		alreadyGuessed=[];
		document.getElementById("alreadyGuessed").innerHTML=alreadyGuessed;
//number of guesses remaining resets
		guessesLeft=15;
		document.getElementById("guessesLeft").innerHTML=guessesLeft;
//reset the number of letters remaining
		remainingLetters=word.length;
//computer picks a new word
		word=words[Math.floor(Math.random() * words.length)];
		console.log(word);
//replaces letters with underscores		
		for (var i = 0; i < word.length; i++) {
			letterArray[i] = "_ ";
//prints the new letterArray into the <div>--THEORETICALLY
			document.getElementById("currentWord").innerHTML=letterArray.join(" ");
		}	
	}

//switching to the next word: if the user has guessed all the letters for that word
	if (remainingLetters === 0) {

//they are alerted by Rorschach
		alert("Hurm...you got a word.");
//number of wins resets
		wins=wins+1;
		document.getElementById("noOfWins").innerHTML=wins;
//wrong letters array emptied
		alreadyGuessed=[];
		document.getElementById("alreadyGuessed").innerHTML=alreadyGuessed;
//number of guesses remaining resets
		guessesLeft=15;
		document.getElementById("guessesLeft").innerHTML=guessesLeft;
//reset the number of letters remaining
		remainingLetters=word.length;
//computer picks a new word
		word=words[Math.floor(Math.random() * words.length)];
		console.log(word);
//replaces letters with underscores		
		for (var i = 0; i < word.length; i++) {
			letterArray[i] = "_ ";
//prints the new letterArray into the <div>--THEORETICALLY
			document.getElementById("currentWord").innerHTML=letterArray.join(" ");
		}	
	}

}














// //variables established
// var words = ["rorschach".split(""), "dr manhattan".split(""), "watchmaker".split(""), "silk spectre".split(""), "comedian".split(""), "night owl".split(""), "compromise".split(""), "alan moore".split(""), "dave gibbons".split(""), "ozymandias".split(""), "bubastis".split(""), "graphic novel".split(""), "smiley face".split(""), "archie".split(""), "doomsday clock".split("")];
// var noOfWins;
// var currentWord;
// var underscores;
// var guessesLeft;
// var lettersArray=[];

// window.onload=function() {
// //establish number of wins so far
// 	wins=0;
// 	document.getElementById("noOfWins").innerHTML=wins;
// //establish guesses remaining and innerHTML to proper <div>
// 	guessesLeft=15;
// 	document.getElementById("guessesLeft").innerHTML=guessesLeft;
// 	var currentWord=words[Math.floor(Math.random() * words.length)];
// console.log(currentWord);
// 	document.getElementById("currentWord").innerHTML=currentWord;
// }
// //computer chooses a word from the array



// //words is replaced with underscores to hide letters
// //the current word will be placed in <div>

// //loop creates the appropriate number of underscores to replace the letters of the current word.
// 		for (var i = 0; i < currentWord; i++) {
// 				placeholder += "_ ";
// 		}
// //and places them as the current word's inner HTML
// 		document.getElementById("currentWord").innerHTML=placeholder;



// document.onkeyup=function(event) {
// 	var userGuess=event.key;
// 	console.log(userGuess);
// 	userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// 	//for(var i = 0; i < currentWord.length; i++) {
// 		//if (userGuess==currentWord[0])
// 		//}
// }

	

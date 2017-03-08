var words = ["rorschach", "drmanhattan", "watchmaker", "silkspectre", "comedian", "nightowl", "compromise", "alanmoore", "davegibbons", "ozymandias", "bubastis", "graphicnovel", "smileyface", "archie", "doomsdayclock"];
var word =words[Math.floor(Math.random() * words.length)];
var letterArray=[];
		for (var i = 0; i < word.length; i++) {
			letterArray[i]="_ ";
		}
var wins;
var guessesLeft;
var alreadyGuessed=[];
var remainingLetters=word.length;

window.onload=function setScreen() {
//establish number of wins so far
		wins=0;
		document.getElementById("noOfWins").innerHTML= wins;
//establish guesses remaining and innerHTML to proper <div>
		guessesLeft=15;
		document.getElementById("guessesLeft").innerHTML= guessesLeft;
		console.log(word);
//prints the letterArray into the <div>
		document.getElementById("currentWord").innerHTML= letterArray;
		console.log(letterArray);
		alert(letterArray);
}	



document.onkeyup=function() {
	var userGuess=event.key;
	userGuess=String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);
	
	guessesLeft=guessesLeft-1;
	document.getElementById("guessesLeft").innerHTML=guessesLeft;

		for (var i = 0; i < word.length; i++) {
			if(word[i] === userGuess) {
				letterArray[i] = userGuess;
				//alert("correct letter!");
				console.log(letterArray);
				document.getElementById("currentWord").innerHTML=letterArray[i];
				remainingLetters--;
				console.log(remainingLetters);
			}
			else if (word[i] !== userGuess) {
				alreadyGuessed.push(" " + userGuess);
				document.getElementById("alreadyGuessed").innerHTML=alreadyGuessed;
			}
			
		}
			
			
		}

		if (guessesLeft==0) {
			alert("Game Over!");
		}

		if (remainingLetters==0) {
			alert("Hurm...you got a word.");
//establish number of wins so far
			wins=wins+1;
			document.getElementById("noOfWins").innerHTML=wins;
//make computer pick a new word
			word=words[Math.floor(Math.random() * words.length)];
			console.log(word);
//reset the number of letters remaining
			remainingLetters=word.length;
		//console.log(remainingLetters);
//wrong letters array emptied
			alreadyGuessed=[];
			document.getElementById("alreadyGuessed").innerHTML=alreadyGuessed;
//establish guesses remaining and innerHTML to proper <div>
			guessesLeft=15;
			document.getElementById("guessesLeft").innerHTML=guessesLeft;
//replaces letters with underscores		
			for (var i = 0; i < word.length; i++) {
			letterArray[i] = "_ ";
//prints the letterArray into the <div>
			document.getElementById("currentWord").innerHTML+=letterArray[i];
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

	

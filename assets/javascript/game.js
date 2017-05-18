window.onload = function(){

	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var wordArray = ["montana", "florida", "apple", "avacado", "banana", "breakfast", "glasses", "xylophone", "xenomorph", "saxaphone", "wallet", "watch", "waffle", "water", 
					  "highway", "microphone", "headphones", "pillow", "painting", "tissue", "keyboard", "piano", "mouse", "rabbit", "grizzly", "mountain", "television", "javascript"];
	var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
	var chosenWord;
	var guessedLetter;
	var count = 1;
	var wordArray = [];
	var guesses = [];

	startGame();

	// Function for selecting a random word

	function startGame(){
		for (var i = 0; i < randomWord.length; i++){
			wordArray[i] = "_";
		}
		chosenWord = wordArray.join(" ");
		document.getElementById("empty").innerHTML = chosenWord;
	}
	
	// Detects keypress

	document.onkeyup = function(event){
		var userGuess = event.key;
				for (var i = 0; i < randomWord.length; i++){
					if (randomWord[i] === userGuess){
						guesses.push(userGuess)
						wordArray[i] = userGuess;
						chosenWord = wordArray.join(" ");
						document.getElementById("empty").innerHTML = chosenWord;
						guessedLetter = guesses.join(" ");
						document.getElementById("guesses").innerHTML = guessedLetter;
					}
				}
			}

	function wrongAnswer(){
			document.getElementById("hang").src="assets/images/Hang-" + (count) + ".png";
		}	

}
window.onload = function(){

	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var wordArray = ["montana", "florida", "apple", "avacado", "banana", "breakfast", "glasses", "xylophone", "xenomorph", "saxaphone", "wallet", "watch", "waffle", "water", 
					  "highway", "microphone", "headphones", "pillow", "painting", "tissue", "keyboard", "piano", "mouse", "rabbit", "grizzly", "mountain", "television", "javascript"];
	var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
	var chosenWord;
	var count = 1;
	var guesses = [];

	startGame();

	// Function for selecting a random word

	function startGame(){
		for (var i = 0; i < randomWord.length; i++){
			guesses[i] = "_";
		}
		chosenWord = guesses.join(" ");
		document.getElementById("empty").innerHTML = chosenWord;
	}
	
	// Detects keypress

	document.onkeyup = function(event){
		var userGuess = event.key;
			if (userGuess.length > 0){
				for (var i = 0; i < randomWord.length; i++){
					if (randomWord[i] === userGuess){
						
					}
					else {
						wrongAnswer();
					}
				}
			}
	}

	function wrongAnswer(){

			document.getElementById("hang").src="assets/images/Hang-" + (count) + ".png"
		}	

}
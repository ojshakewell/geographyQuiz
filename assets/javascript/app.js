// Option One: Basic Quiz (Timed Form)
// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz. 
//timer()

// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
//when (timer === 0) display correct answer count

var minutes = 2
var seconds = 5;

console.log(121%60)

var interval = setInterval(countdown, 1000);

function countdown(){
	if (seconds > 0){	
		//console.log("timer:",seconds);
		displayClock();
		--seconds;
	// } else (if seconds === 59)
	// 	--minutes;
	} else {	
		clearInterval(interval);
		calculateScore();
	}
}//end .countdown

function displayClock(){
	$('#clock').text("Time Remaining: " + minutes + ":" + seconds);
}

function calculateScore(){
	var score = 0;
	console.log("calculate score here");






	$('#clock').text('Score: ',score);	
}

// Don't forget to include a countdown timer.

// Option Two: Advanced Assignment (Timed Questions)

// You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.


// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.


// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).



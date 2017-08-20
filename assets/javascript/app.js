// Option One: Basic Quiz (Timed Form)
// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz. 
//timer()

// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
//when (timer === 0) display correct answer count

var correctAnswers = 0;
var incorrectAnswers = 0;
var seconds = 2 * 60;

var answerKey = ["ORD","athens","singapore","france"];
var answers = [];

displayClock();

var interval = setInterval(countdown, 1000);

function countdown(){
	if (seconds > 0){	

		displayClock();
	} else {	
		clearInterval(interval);
		calculateScore();
	}
}//end .countdown

function displayClock(){

	var divider = ":"

	if (seconds % 60 <= 9){
		divider = ":0";
	}

	var minutes = Math.trunc(seconds / 60);

	$('#clock').text("Time Remaining: " + minutes + divider + seconds % 60);

	--seconds;
}//end .displayClock

function calculateScore(){

	$('#clock').text("Time's up!");	

	console.log("calculate score here");

//$("form input:nthchild(" + (i+1) + "")
	answers[0] = $("input[name=airport]:checked").val();
	console.log(answers[0]);

	answers[1] = $("input[name=georgia]:checked").val();
	console.log(answers[1]);

	answers[2] = $("input[name=colony]:checked").val();
	console.log(answers[2]);

	answers[3] = $("input[name=canal]:checked").val();
	console.log(answers[3]);


	for (var i = 0; i < answerKey.length; i++) {

		if (answers[i] === answerKey[i]){
			correctAnswers++;
		} else {
			incorrectAnswers++;
		}
	}

	$("#correct").text("Correct Answers: " + correctAnswers);

	$("#incorrect").text("Incorrect Answers: " + incorrectAnswers);

}//end .calculateScore



// Option Two: Advanced Assignment (Timed Questions)

// You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.


// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.


// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).



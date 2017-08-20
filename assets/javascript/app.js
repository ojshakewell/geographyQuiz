var correctAnswers;
var incorrectAnswers;
var seconds;
var answerKey = ["ORD","athens","singapore","france"];
var answers;
var interval;

reset();
displayClock();


//Runs the countdown funtion once per second after the start button is clicked
$("#start").click(function(){
	reset();
//the buttons need to  prevent double clicking
	interval = setInterval(countdown, 1000);
	//need to display questions only after the start button is clicked
});

$("#end").click(function(){
	seconds = 0;
});


//Runs the clock timer down until the time reaches 00:00, then calculates score
function countdown(){
	if (seconds != 0){	
		displayClock();
	} else {
		clearInterval(interval);	
		calculateScore();
	}
}//end .countdown

//Updates the time on the clock and send displays the time in the html page
function displayClock(){

	var divider = ":"

	if (seconds % 60 <= 9){
		divider = ":0";
	}

	var minutes = Math.trunc(seconds / 60);

	$('#clock').text("Time Remaining: " + minutes + divider + seconds % 60);

	--seconds;
}//end .displayClock

// when the time runs out, determine if the answer is correct, and display score.
function calculateScore(){

	$('#clock').text("Time's up!");	
	/*	// this code should loop through the radio buttons to get the user answers, try using an N-th child.
	
	for (var i = 0; i < Things.length; i++) {
		$("form input:nthchild(" + (i+1) + "")
	}*/

	//here is the lazy way to get the answers form the radio buttons
	answers[0] = $("input[name=airport]:checked").val();

	answers[1] = $("input[name=georgia]:checked").val();

	answers[2] = $("input[name=colony]:checked").val();

	answers[3] = $("input[name=canal]:checked").val();

	//loop to compare the user answers to correct answers.
	for (var i = 0; i < answerKey.length; i++) {

		if (answers[i] === answerKey[i]){
			correctAnswers++;
		} else {
			incorrectAnswers++;
		}
	}


	//Display score
	$("#correct").text("Correct Answers: " + correctAnswers);

	$("#incorrect").text("Incorrect Answers: " + incorrectAnswers);

}//end .calculateScore

function reset(){
	seconds = 2 * 60;
	answers = [];
	correctAnswers = 0;
	incorrectAnswers = 0;
}

// Option Two: Advanced Assignment (Timed Questions)

// You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.


// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.


// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).



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
	//prevent double clicking
	event.preventDefault();
	interval = setInterval(countdown, 1000);
	//Add code: need to display questions only after the start button is clicked
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

	//here is the lazy way to get the answers form the radio buttons, ideally will add loop later
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

//reset default values
function reset(){
	seconds = 2 * 60;
	answers = [];
	correctAnswers = 0;
	incorrectAnswers = 0;
}

/*
	TODO: Store references to the DOM objects in variables below
*/
var timerDiv;		// Where we will display the time
var startBtn;		// When clicked, start or resume timer
var pauseBtn;		// When clicked, pause timer
var resetBtn;		// When clicked, reset timer to original status
var tickAudio;		// Play once per second while the timer counts down
var alarmAudio;		// Play repeatedly when timer reaches 00:00:00, 
					// until pause or reset is pressed (for simplicity)

/*
	TODO: Set initial values to the variables below
*/
var secDuration;	// How long the timer is set, in seconds
var running;		// A boolean

/*
	TODO: Figure what this one may be used for (later)
*/
var timerInterval;

/*
	TODO: getTimeString takes in a number of seconds and return
	a time string in the format "hh+:mm:ss" (2 or more digits for hours,
	2 digits for minutes, 2 digits for seconds)

	Example: 	getTimeString(10) => "00:00:10"
				getTimeString(12000) => "03:36:45"
*/
function getTimeString(totalSeconds) {
	/*YOUR CODE HERE*/
}

/*
	TODO: render(displayDiv, totalSeconds) displays the totalSeconds
	in "hh+:mm:ss" format in the browser where displayDiv is
*/
function render(displayDiv, totalSeconds) {
	/*YOUR CODE HERE*/
}

/*
	TODO: Write functions that correspond to the specs of our buttons
*/

/*
	TODO: Uncomment the line below when you have implemented render
*/
// render(timerDiv, secDuration);
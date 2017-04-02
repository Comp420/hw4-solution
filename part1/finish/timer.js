var DURATION = 10;

var timerDiv = document.getElementById("timer");
var startBtn = document.getElementById("start");
var pauseBtn = document.getElementById("pause");
var resetBtn = document.getElementById("reset");
var tickAudio = document.getElementById("audio-tick");
var alarmAudio = document.getElementById("audio-alarm");

var secDuration = DURATION;
var running = false;
var timerInterval;

// Given a number of seconds, convert it into time format hh:mm:ss
function getTimeString(totalSeconds) {
	var hours = Math.floor(totalSeconds / 3600);
	totalSeconds %= 3600;
	var minutes = Math.floor(totalSeconds / 60);
	var seconds = totalSeconds % 60;

	return `${appendZero(hours)}:${appendZero(minutes)}:${appendZero(seconds)}`;
}

// (Helper function for cleaner code) if number is less than 10, append
// a 0 in front of it, otherwise do nothing
function appendZero(number) {
	return number < 10 ? "0" + number : number;
}

// Given a div and a number of seconds, display a time string in format
// hh:mm:ss inside the div
function render(containerDiv, totalSeconds) {
	containerDiv.innerText = getTimeString(totalSeconds);
}

function start() {
	if (running) return;

	timerInterval = setInterval(function() {
		if (secDuration > 0) {	
			secDuration--;
			tickAudio.play();
		}
		else {
			alarmAudio.play();
		}
		render(timerDiv, secDuration);
	}, 1000);

	running = true;
}

function pause() {
	if (!timerInterval) return;
	
	clearInterval(timerInterval); 
	running = false;
}

function reset() {
	pause();
	secDuration = DURATION;
	render(timerDiv, secDuration);
}

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);

// Render must be called once so we have an initial display of the time
render(timerDiv, secDuration);
/*globals $ window document */

$(document).ready(function() {
	var videoEl = $('#video')[0],
		playPauseBtn = $('#playPause'),
		vidControls = $('#controls'),
		muteBtn = $('#muteUnmute'),
		timeHolder = $('#timer');
	

	// Check to see if the video is already ready (if it's cached, for example)
	if (videoEl.readyState == 4) {
		videoEl.removeAttribute("controls");
		vidControls.removeClass("hidden");
	}

	videoEl.addEventListener('canplay', function () {
	  console.log('canplaythrough');
	  videoEl.removeAttribute("controls");
		vidControls.removeClass("hidden");

	}, true);

	// click handler for play/pause btn
	playPauseBtn.bind('click', function () {

		if (videoEl.paused) {
			videoEl.play();
		} else {
			videoEl.pause();
		}
	});

	// listening for 'play' events
	videoEl.addEventListener('play', function () {
	  console.log('plAY');
		playPauseBtn.addClass("playing");
		playPauseBtn.title = "Pause";
	}, false);

	// listening for 'pause' events
	videoEl.addEventListener('pause', function () {
	  console.log('pause');
		playPauseBtn.removeClass("playing");
		playPauseBtn.title = "Play";
	}, false);

	muteBtn.bind('click', function () {
		if (videoEl.muted) {
			videoEl.muted = false;
		} else {
			videoEl.muted = true;
		}
	});
	
	// listening for 'volumechange' events
	videoEl.addEventListener('volumechange', function () {
		if (videoEl.muted) {
			muteBtn.addClass("muted");
		} else {
			muteBtn.removeClass("muted");
		}
	}, false);

	// listening for 'ended' events
	videoEl.addEventListener('ended', function () {
		videoEl.currentTime = 0;
		videoEl.pause();
	}, false);

	// listening for 'timeupdate' events
	// Every time the time changes, the 'secondsToTime' function runs
	videoEl.addEventListener('timeupdate', function () {
		timeHolder[0].innerHTML = secondsToTime(videoEl.currentTime);
	}, false);
		  
});

// currentTime is in seconds; this function converts it to properly formatted time
function secondsToTime(s) {
	var h = Math.floor(s / (60 * 60)),
		dm = s % (60 * 60),
		m = Math.floor(dm / 60),
		ds = dm % 60,
		secs = Math.ceil(ds);

	// this fixes the crossover from 59 seconds to 1 minute
	if (secs === 60) {
		secs = 0;
		m = m + 1;
	}

	if (secs < 10) {
		secs = "0" + secs;
	}

	// this fixes the crossover from 59 minutes to 1 hour
	if (m === 60) {
		m = 0;
		h = h + 1;
	}

	if (m < 10) {
		m = "0" + m;
	}

	if (h === 0) {
		fulltime = m + ":" + secs;
	} else {
		fulltime = h + ":" + m + ":" + secs;
	}

	return fulltime;
}
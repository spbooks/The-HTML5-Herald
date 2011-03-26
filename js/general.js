/*globals $ window document */

$(function () {
	var videoEl = $('#video')[0],
		playPauseBtn = $('#playPause'),
		vidControls = $('#controls'),
		muteBtn = $('#muteUnmute'),
		timeHolder = $('#timer');
	
	// The if statement below works in all browsers locally; The "canplaythrough" listener works in all except Firefox.
	if (videoEl.readyState === 4) {
		//videoEl.removeAttribute("controls");
		//vidControls.removeClass("displaynone");
	}

	videoEl.addEventListener('canplaythrough', function () {
		videoEl.removeAttribute("controls");
		vidControls.removeClass("displaynone");

	}, false);

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
		playPauseBtn.addClass("playing");
		playPauseBtn.title = "Pause";
	}, false);

	// listening for 'pause' events
	videoEl.addEventListener('pause', function () {
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

});
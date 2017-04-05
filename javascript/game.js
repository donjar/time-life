var currentPage = 1;

function startGame() {
	$(`section[data-page="${currentPage}"]`).fadeIn(pageFadeTime);
	play();

	$('.button[data-event="time-passed"]').click(function() {
		const numberOfPages = currentPage;
		const guess = $('input[data-event="time-passed"]').val();

		if (checkTimePassed(guess, numberOfPages)) {
			$(`section[data-page="${currentPage + 1}"] .wrong`).hide();
		} else {
			$(`section[data-page="${currentPage + 1}"] .right`).hide();
		}
		play();
	});
}

function checkTimePassed(timeGuess, numberOfPages) {
	const actual = (startFadeOut + (numberOfPages - 1) * slideTime + pageFadeTime) / 1000;
	return Math.abs(parseInt(timeGuess) - actual) <= 0.5;
}

function play() {
	const interval = setInterval(function() {
		$(`section[data-page="${currentPage}"]`).fadeOut(pageFadeTime, function() {
			currentPage++;
			$(`section[data-page="${currentPage}"]`).fadeIn(pageFadeTime);

			if ($(`section[data-page="${currentPage}"]`).hasClass('stop')) {
				clearInterval(interval);
			}
		});

	}, slideTime);
}

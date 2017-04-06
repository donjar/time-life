var currentSection;
var introInterval;

function startGame(start) {
	start.fadeIn(pageFadeTime);
	currentSection = start;
	play();

	$('.button[data-event="time-passed"]').click(function() {
		const guess = $('input[data-event="time-passed"]').val();

		if (checkTimePassed(guess, 3)) {
			currentSection.next().find('.wrong').hide();
		} else {
			currentSection.next().find('.right').hide();
		}
		step();
		play();
	});
}

function checkTimePassed(timeGuess, pageNumber) {
	const actual = (startFadeOut + (pageNumber - 1) * introSlideTime + pageFadeTime) / 1000;
	return Math.abs(parseInt(timeGuess) - actual) <= 0.5;
}

function play() {
	introInterval = setInterval(step, introSlideTime);
}

function step() {
	if (currentSection.hasClass('intro')) {
		currentSection.fadeOut(pageFadeTime, actualStep)
	} else {
		currentSection.hide();
		actualStep();
	}
}

function actualStep() {
	const previousSection = currentSection;
	currentSection = currentSection.next();

	if (currentSection.hasClass('white')) {
		currentSection.parent().css('transition', 'background 3s ease');
	} else {
		currentSection.parent().css('transition', 'background 0.5s ease');
	}
	currentSection.parent().attr('class', 'container bg-' + currentSection.attr('class'));

	if (currentSection.hasClass('stop')) {
		clearInterval(introInterval);
	}

	if (currentSection.hasClass('intro')) {
		if (currentSection.hasClass('end')) {
			currentSection.fadeIn(introSlideTime);
		} else {
			currentSection.fadeIn(pageFadeTime);
		}

		if (!previousSection.hasClass('intro')) {
			play();
		}

	} else {
		currentSection.show();
		clearInterval(introInterval);
		typeElement(currentSection.find('.text'));
	}
}

function typeElement(elem, delay = defaultDelay) {
	let text = elem.text();
	elem.text('');

	if (elem.data('delay') !== undefined) {
		delay = elem.data('delay');
	}

	const typeTimer = setInterval(function() {
		if (elem.text().length >= text.length) {
			clearInterval(typeTimer);
			setTimeout(step, pageFadeTime);
		} else {
			elem.text(elem.text() + text.charAt(elem.text().length));
		}
	}, delay);
}

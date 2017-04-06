$(document).ready(function() {
	$('section').hide();
	$('section').first().show();

	$('.start-button').click(function(e) {
		const section = $(e.target).parents('section')
		section.fadeOut(startFadeOut, function() {
			startGame(section.next());
		});
	});
})

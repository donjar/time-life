$(document).ready(function() {
	$('section').hide();
	$('section[data-page="0"]').show();

	$('.start-button').click(function(e) {
		$(e.target).parents('section').fadeOut(startFadeOut, function() {
			startGame();
		});
	});
})

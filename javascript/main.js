$(document).ready(function() {
	$('section').hide();
	$('section[data-page="1"]').show();

	$('.start-button').click(function(e) {
		$(e.target).parent('section').fadeOut(startFadeOut, function() {
			startGame();
		});
	});
})

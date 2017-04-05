function startGame() {
	$('section[data-page="2"]').fadeIn(pageFadeTime);
	var currentPage = 2;

	var interval = setInterval(function() {
		$(`section[data-page="${currentPage}"]`).fadeOut(pageFadeTime, function() {
			currentPage++;
			$(`section[data-page="${currentPage}"]`).fadeIn(pageFadeTime);

			if ($(`section[data-page="${currentPage}"]`).hasClass('stop')) {
				clearInterval(interval);
			}
		});

	}, slideTime);
}

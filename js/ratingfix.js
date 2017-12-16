function width_check(init) {
	if($(window).width() <= 680) {
		$('#rating').addClass('text-center');
	} else {
		$('#rating').removeClass('text-center');	
	}
}

$(document).ready(function() {
	width_check(true);

	$(window).resize(function() {
		width_check(false);
	});

});
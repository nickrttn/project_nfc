$(document).ready(function() {

	var windowHeight = $(window).height();

	$('.site-wrapper .carousel .carousel-inner .item').css('max-height', windowHeight + 'px');

	smoothScroll.init();

});

$(document).ready(function() {

	var windowHeight = $(window).height(),
			carouselItem = $('.site-wrapper .carousel .carousel-inner .item');

	carouselItem.css('max-height', windowHeight + 'px');

	smoothScroll.init();

});

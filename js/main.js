$('document').ready(function(){
	var left = $(window).width() - $('#lefttoright').offset().left;

	$("#lefttoright").animate({
		opacity: 0.25,
		left: left,
	}, 5000, function () { 
		// Animation complete.
	});
});


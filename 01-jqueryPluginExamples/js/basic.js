$(document).ready(function() {
	$("h1").fitText(0.34)

	$("nav.sticky").sticky();

	$(".dial").knob({
	    'min':-60,
	    'max':60
	});

	$('.unslider').unslider({
		autoplay: true,
	  	arrows: false
	});
})
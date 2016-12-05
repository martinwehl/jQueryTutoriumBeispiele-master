$(document).ready(function() {
	$("h1").fitText(0.34)

	$("nav.sticky").sticky();

	$(".dial").knob({
	    'min':-50,
	    'max':50
	});

	$('.unslider').unslider({
		autoplay: true,
	  	arrows: false
	});
})
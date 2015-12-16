//fancybox
$(document).ready(function() {
	$('.fancybox').fancybox();
});

//Open up the work submenu
$(".work").click(function(event){
	$(".work-links").toggle();
	$(".work-links li").toggle();
});
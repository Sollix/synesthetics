//fancybox
$(document).ready(function() {
	$('.fancybox').fancybox();
});

//hover
$("#feature1").mouseover(function(event){
	$(this).find(".overlay").css("display","block");
});

$(".work").hover(function(event){
	$(".work-links").toggle();
});
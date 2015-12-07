//fancybox
$(document).ready(function() {
	$('.fancybox').fancybox();
});

//hover
$("#feature1").mouseover(function(event){
	$(this).find(".overlay").css("display","block");
});

$(".work").click(function(event){
	$(".work-links").toggle();
	$(".work-links li").toggle();
});
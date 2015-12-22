//fancybox
$(document).ready(function() {
	$('.fancybox').fancybox();
});

$(document).ready(function() {
    $('.fancybox-media').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            media : {}
        }
    });
});

//Open up the work submenu
$(".work").click(function(event){
	$(".work-links").toggle();
	$(".work-links li").toggle();
});

//show more for writing, with help from http://codepen.io/maxds/pen/jgeoA
$(document).ready(function() {
    var showChar = 300;
    var ellipsestext = "...";
    var moretext = "Read More";
    var lesstext = "Show Less";

    $('.more').each(function() {
        var content = $(this).html(); //get the content of the html
        if(content.length > showChar) { //compares content length to the umber of characters you're showing by default
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
            $(this).html(html);
        }
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
/*
* How to detect browser width
*/
$(window).ready(function() {
    var wi = $(window).width();  
    $(".testp").text('Initial screen width is currently: ' + wi + 'px.');
 
    $(window).resize(function() {
        var wi = $(window).width();
 
        if (wi <= 480){
            $(".testp").text('Screen width is less than or equal to 480px. Width is currently: ' + wi + 'px.');
            }
        else if (wi <= 767){
            $(".testp").text('Screen width is between 481px and 767px. Width is currently: ' + wi + 'px.');
            }
        else if (wi <= 980){
            $(".testp").text('Screen width is between 768px and 980px. Width is currently: ' + wi + 'px.');
            }
        else if (wi <= 1200){
            $(".testp").text('Screen width is between 981px and 1199px. Width is currently: ' + wi + 'px.');
            }
        else {
            $(".testp").text('Screen width is greater than 1200px. Width is currently: ' + wi + 'px.');
            }
    });            
});
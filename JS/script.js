/*===============Services================= */
$(function() {
    new WOW().init();
});
/*===============Services================= */
$(function() {
   $("#specials").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
        enabled: true
    }
    // other options
   });
});


/*===============Navigation================= */
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 50) {
            $("nav").removeClass("vesco-top-nav");
        } else {
            $("nav").addClass("vesco-top-nav");
        }
    });
});

$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();

        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop:$(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});


$(function() {
    $("#flyer").magnificPopup({
     delegate: 'a', // child items selector, by clicking on it popup will open
     type: 'image',
     gallery: {
         enabled: true
     }
     // other options
    });
 });

 $(function() {
    $(".navbar-collapse ul li a").on("click touch", function(){
        $(".navbar-toggle").click();
    });
 });
 
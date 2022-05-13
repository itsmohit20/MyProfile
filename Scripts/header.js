$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 80) {
            $("nav").addClass("nav-scroll");
        } else {
            $("nav").removeClass("nav-scroll");
        }
    });
});
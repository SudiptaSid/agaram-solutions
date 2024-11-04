// ==================== Banner Slider ====================
$('#banner_slider').owlCarousel({
    margin:0,
    items: 1,
    nav:true,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
    dots:true,
    loop:true,
    smartSpeed:2000,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass:true, 
    responsive: {
        300: {
            nav:false,
        },
        700: {
            dots:true,
            nav:true,
        }
    }
});
// ==================== Lightbox ==================== 
$(function(){
    var gallery = $('.gallery a').simpleLightbox({navText:    ['&lsaquo;','&rsaquo;']});
});
// ================= To Top =================
$(document).ready(function(){ 
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scrollup').fadeIn();
        } else {
            $('#scrollup').fadeOut();
        }
    }); 
    $('#scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
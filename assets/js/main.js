(function ($) {
    "use strict";

    /*----------------------------
        1. Preloader
    -----------------------------*/
        jQuery(window).on('load', function() {
            jQuery("#status").fadeOut();
            jQuery("#preloader").delay(350).fadeOut("slow");
        });

    /*----------------------------
        2. Mobile Menu Activation
    -----------------------------*/
        jQuery('.mobile-menu nav').meanmenu({
            meanScreenWidth: "768",
        });

    /*--------------------------
        3. Sticky Menu 
    ---------------------------- */
        $(window).on('scroll', function(){
            if( $(window).scrollTop()>900 ){
                $('#sticky').addClass('sticky');
                } else {
                $('#sticky').removeClass('sticky');
            }
        });

        $('.menu_scroll ul li a').on('click' , function(e){
            $('.menu_scroll ul li').removeClass('active');
            $(this).parent().addClass('active');
            var target = $('[section-scroll='+$(this).attr('href')+']');
            e.preventDefault();
            var targetHeight = target.offset().top-parseInt('80');
            $('html, body').animate({
                scrollTop: targetHeight
            }, 1000);
        });

        $(window).scroll(function() {
            var windscroll = $(window).scrollTop();
            var target = $('.menu_scroll ul li');
            if (windscroll >= 0) {
                $('[section-scroll]').each(function(i) {
                if ($(this).position().top <= windscroll + 95) {
                target.removeClass('active');
                target.eq(i).addClass('active');
                }
                });
            }else{
                target.removeClass('active');
                $('.menu_scroll ul li:first').addClass('active');
            }
        });

    /*----------------------------
        4. wow js active
    ------------------------------ */
        new WOW().init();

    /*--------------------------
        5. jarallax active
    ---------------------------- */
        $('.jarallax').jarallax({
            speed: 0.5
        });

    /*--------------------------
        6. count down
    ---------------------------- */
        function e() {
            var e = new Date;
                e.setDate(e.getDate() + 25);
            var futureFormattedDate = '6' + "/" + '1' + "/" + '2023' + ' 12:47:00';
            return futureFormattedDate;
        }
        $('.counter').downCount({
            date: e(),
            offset: 16
        });

    /*--------------------------
        7. Home slider bxslider active
    ---------------------------- */
        $('.sliders').bxSlider({
            mode: 'fade',
            speed:2000,
            auto:true
        });

    /*--------------------------
        8. scrollUp
    ---------------------------- */	
        $.scrollUp({
            scrollText: "<svg class='ast-arrow-svg' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' width='26px' height='16.043px' viewBox='57 35.171 26 16.043' enable-background='new 57 35.171 26 16.043' xml:space='preserve'> <path d='M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z'></path> </svg>",
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });

})(jQuery);


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        lazyLoad: true,
        autoplayHoverPause: true,
        nav: true,
        rtl: true,
        responsive: {
            0: {
                items: 1.2,
                nav: true,
                center: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
            },
            600: {
                items: 1.4,
                nav: true,
                center: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
            },
            1000: {
                items: 3,
                nav: true,
            },
        },
    });
});
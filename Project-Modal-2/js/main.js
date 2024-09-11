
// =================================================================================================================

$(document).ready(function(){
    // $('#yourModal').on('shown.bs.modal', function () {
        $('.owl-carousel-modal').owlCarousel({
            margin:10,
            responsiveClass:true,
            loop:false,
            nav:true,
            // rtl: true,

            autoWidth:true,
            responsive:{
                0:{
                    items:3,
                },
                600:{
                    items:4,
                },
                1000:{
                    items:6,
                }
            }
        });
    // });
});
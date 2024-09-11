// =================================================================================================================
$(document).ready(function(){
    // $('#yourModal').on('shown.bs.modal', function () {
        $('.owl-carousel-modal').owlCarousel({
            margin:10,
            responsiveClass:true,
            loop:false,
            nav:true,
            dots: false,
            rtl: true,

            autoWidth:true,
            responsive:{
                0:{
                    items:3,
                },
                600:{
                    items:4,
                },
                1000:{
                    items:5,
                }
            }
        });
    // });
});

$(document).ready(function() {
    $(window).on("scroll", function() {
      var scrollHeight = $(document).height();
      var scrollPosition = $(window).height() + $(window).scrollTop();
      
      if ((scrollHeight - scrollPosition) / scrollHeight <= 0.05) { 
        $(".box-Start-store-now").addClass("hidden");
      } else {
        $(".box-Start-store-now").removeClass("hidden");
      }
    });
  });
  
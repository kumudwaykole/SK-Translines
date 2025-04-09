
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
    });

    // NAVBAR
    $(".navbar").headroom();

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('.slick-slideshow').slick({
      autoplay: true,
      infinite: true,
      arrows: false,
      fade: true,
      dots: true,
    });

    $('.slick-testimonial').slick({
      arrows: false,
      dots: true,
    });
    
  })(window.jQuery);

  $(document).ready(function() {
  // Initialize Slick slider
  $('.slick-testimonial').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  // Synchronize the dot indicators
  $('.slick-testimonial').on('afterChange', function(event, slick, currentSlide) {
    $('.slick-dots li').removeClass('slick-active');
    $('.slick-dots li').eq(currentSlide).addClass('slick-active');
  });

  // Trigger previous slide
  $('.testimonial-prev').click(function() {
    $('.slick-testimonial').slick('slickPrev');
  });

  // Trigger next slide
  $('.testimonial-next').click(function() {
    $('.slick-testimonial').slick('slickNext');
  });
});






// click to service
function redirectToServices() {
  window.location.href = "service.html";
}


//about us feedback
var slideIndex = 1;
        var autoSlide;

        startAutoSlide();

        function startAutoSlide() {
            autoSlide = setInterval(function () {
                plusSlides(1);
            }, 3000);  // Adjust the interval as needed (in milliseconds)
        }

        function stopAutoSlide() {
            clearInterval(autoSlide);
        }

        function plusSlides(n) {
            showSlides((slideIndex += n));
            stopAutoSlide();
            startAutoSlide();
        }

        function currentSlide(n) {
            showSlides((slideIndex = n));
            stopAutoSlide();
            startAutoSlide();
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].classList.remove("active");
            }
            slides[slideIndex - 1].classList.add("active");
            dots[slideIndex - 1].classList.add("active");
        }
$(document).ready(function(){
    $('.image_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        lazyLoad: 'progressive',
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:
            "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        dots: true,
        responsive: 
        [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
        ],
    });
  });
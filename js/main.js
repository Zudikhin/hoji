$(document).ready(function () {
    "use strict";
    
    $('.news_block_slider').slick({
        dots: true,
        infinite: true,
        arrows: true,
        variableWidth: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        autoplaySpeed: 1000,
        cssEase: 'linear',
        prevArrow: $('.news_block_nav_arrows_prev'),
        nextArrow: $('.news_block_nav_arrows_next'),
        responsive: [
            {
              breakpoint: 770,
              settings: {
                variableWidth: true,
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });

    $('.similar_block_slider').slick({
      dots: false,
      infinite: true,
      arrows: true,
      variableWidth: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      autoplaySpeed: 1000,
      cssEase: 'linear',
      prevArrow: $('.similar_block_nav_arrows_prev'),
      nextArrow: $('.similar_block_nav_arrows_next')
    });
    
});
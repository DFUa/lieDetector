$(document).ready(function() {
  let windowWidth = $(window).width();
  $('.advantages-main-page').find('.triangle-left').css('border-left-width', (windowWidth / 2));
  $('.advantages-main-page').find('.triangle-right').css('border-right-width', (windowWidth / 2));

  $('.reviews-main-page-slider').slick({
    //autoplay: true,
    slidesToShow: 2,
    rows: 0,
    arrows: false,
    dots: true
  });
})

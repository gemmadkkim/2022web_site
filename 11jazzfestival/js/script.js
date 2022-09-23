$("#fullpage").fullpage({
  menu: ".nav",
  anchors: ["home", "lineup", "ticket", "program", "notice"],
  navigation: true,
  navigationPosition: "fp-left",
  navigationTooltips: ["home", "lineup", "ticket", "program", "notice"],
  responsiveWidth: 900

});


$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 4,
    loop: false,
    center: true,
    margin: 10,
    callbacks: true,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash'
  });
})

$(document).ready(function () {

  $(".tSec").mouseenter(function () {
    $(".tBody").hide()
    $(this).find(".tBody").stop().slideDown();
  });
  $(".tSec").mouseleave(function () {
    $(this).find(".tBody").stop().hide();

  });
})

//program slide
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});
$("#fullpage").fullpage({
    menu:".nav",
    anchors:["home","lineup","ticket","program","notice"],
    navigation:true,
    navigationPosition:"fp-left",
    navigationTooltips:["home","lineup","ticket","program","notice"],
    responsiveWidth:900

});


$(document).ready(function() {
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

$(document).ready(function() {

  $(".tSec").mouseover(function(){
    $(".tbWrap").animate().stop().slideDown();
  });
  $(".tSec").mouseout(function(){
    $(".tbWrap").animate().stop().slideUp();
  });
})

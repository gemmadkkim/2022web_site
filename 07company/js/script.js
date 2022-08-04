$(".navbar>ul>li").clone().appendTo(".mMenu")

let view = true;
$(".toggle").click(function(){
    if( view == true){
    $(this).addClass("active")
    $(".topMenu").addClass("active");
    $(".navbarClone").css("left",0);
    $(".mMenu").show();
    view = false;
    }else{
    $(this).removeClass("active")
    $(".topMenu").removeClass("active");
    $(".navbarClone").css("left","-100%");
    $(".mMenu").hide();
        view = true;
    }
})

$(".mMenu li>a").click(function(e){
    e.preventDefault();
    console.log($(this).parent().find(".submenu").height())

    // let subHeight = $(this).parent().find(".submenu").height();
    $(".mMenu li>a").parent().find(".submenu").slideUp();
    // $(".mMenu li").css("height","initial")
    if($(this).hasClass("active")){
        $(".mMenu li>a").removeClass("active");
        $(".mMenu li").css("height","initial");
    }else{
        $(this).parent().find(".submenu").slideDown();
        $(".mMenu li>a").removeClass("active");
        // $(this).parent().css("height",subHeight)
        $(this).addClass("active");
    }
})

// swiper
var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
});
// swiper02
var swiper = new Swiper(".clovaSwiper", {
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination02",
      clickable: true,
    }
});

// swiper03 blog
var swiper = new Swiper(".blogSwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  
  pagination: {
    el: ".swiper-pagination03",
    clickable: true,
  },
});



// scr Top

let wrapTop = $(".header").offset().top;

$(window).scroll(function(){
    let scrollY = window.pageYOffset
    
    if($("body").height()/2 < scrollY){
        $(".scr").fadeIn()
    }else{
        $(".scr").fadeOut()
    }
})

$(".scr").click(function(){
    $("html,body").animate({scrollTop:0},300)
})
$("#oslide").owlCarousel({
      loop:true,
      autoplay:true,
      center:true,
      nav:true,
      navText:['<i class="fa-solid fa-circle-chevron-left dots prve"></i>','<i class="fa-solid fa-circle-chevron-right dots next"></i>'],
      margin:30,
      responsive:{
          0:{items:1},
          760:{items:2},
          990:{items:4}
      }
  });

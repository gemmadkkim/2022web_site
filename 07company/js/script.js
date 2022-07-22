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

    let subHeight = $(this).parent().find(".submenu").height();
    //$(".mMenu li>a").parent().find(".submenu").slideUp();
    $(".mMenu li").css("height","initial")
    if($(this).hasClass("active")){
        $(".mMenu li>a").removeClass("active");
        $(".mMenu li").css("height","initial")
    }else{
        // $(this).parent().find(".submenu").slideDown();
        $(".mMenu li>a").removeClass("active");
        $(this).parent().css("height",subHeight)
        $(this).addClass("active");
    }
})


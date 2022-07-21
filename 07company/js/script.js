$(".navbar>ul>li").clone().appendTo(".mMenu")

let view = true;
$(".toggle").click(function(){
    if( view == true){
    $(".topMenu").addClass("active");
    $(".navbarClone").css("left",0);
    $(".mMenu").show();
    view = false;
    }else{
    $(".topMenu").removeClass("active");
    $(".navbarClone").css("left","-100%");
    $(".mMenu").hide();
        view = true;
    }
})
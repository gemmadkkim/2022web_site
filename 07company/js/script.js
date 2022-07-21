
$(".toggle").click(function(){
    $(".navbarClone").css("left",0);
    $(".mMenu").show();
}
// ,function(){
//     $(".navbarClone").css("left","-100%");
//     $(".mMenu").hide();
// }
)

$(".navbar>ul>li").clone().appendTo(".mMenu")

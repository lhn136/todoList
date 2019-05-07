$("input[type='text']").fadeOut()
// hover effect
$("ul").on("mouseenter mouseleave","li",function(event){
    $(this).toggleClass("hoverli")
});
$("ul").on("click","li",function (event) {
    $(this).toggleClass("completed")
});

// Click on x-box to delete todo
$("ul").on("click","span",function(event) {
    console.log("spanclicked");
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });B
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(".list").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()
});
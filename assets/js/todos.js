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
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Add new todo, with a trashcan button for each
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(".list").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")
        $(this).val("");
    }
});

// Plus symbol that lets unhide the "input"
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()
});

$(".fa-download").click(function(){
    // DOWNLOAD TODOS
    // extract li text from todos
    objarr = []
    $("ul li").text(function (index, text) {
        objarr.push(text);
    });
    txtfile = (objarr.join("\n"));
    download("todos.txt",txtfile)
});

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

$("#file-input").change(function (e) {
    // filename = this.files[0];
    console.log(filename);
    var filename = this.files[0];
    if (!filename) {
            return;
        }
    var reader = new FileReader();
    reader.onload = function (e) {
        var contents = this.result;
        var newTodos = contents.split("\n")
        

        
        $("li").fadeOut(500, function () {
            $(this).remove();
        });
        event.stopPropagation();
        newTodos.forEach(function(todo){
            console.log(todo)
            $(".list").append("<li><span><i class='fas fa-trash'></i></span> " + todo.trim()+ "</li>")
        });
    };
    // console.log(contents)
    reader.readAsText(filename);
    
});

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

// $(".fa-upload").click(function (event) {
//     var input = event.target;

//     var reader = new FileReader();
//     reader.onload = function () {
//         var text = reader.result;
//         var node = document.getElementById('output');
//         node.innerText = text;
//         console.log(reader.result.substring(0, 200));
//     };
//     reader.readAsText(input.files);
// });

// document.getElementsByClassName('fa-upload').addEventListener('click',openDialog);

// $(".fa-upload").click(function (callback) {
//     // on click: once clicked check if the input is null
//     const input = document.getElementById('uploadid')
//     // on change:
//     var loaded = false;

//     if (input.files[0] == null ){
//         document.getElementById("uploadid").click()
//     }

//     console.log(input.files[0] == null)
//     let count = 0
//     while (count < 10000){
//         count+=1
//         document.getElementById("uploadid").click()
//     } 
//     // add a sleep time out
//     console.log(input.files[0])
//     var reader = new FileReader();
//     reader.onload = function () {
//         console.log(reader.result);
//     };
//     reader.readAsDataURL(input.files[0]);

$("#file-input").change(function () {
    filename = this.files[0]
    console.log(filename);
});

// $(".fa-upload").click(function () {
//     print("clicked")
//     document.getElementById('uploadid').addEventListener('change', readSingleFile, false);
// });
    
// function readSingleFile(e) {
//         var file = e.target.files[0];
//         if (!file) {
//             return;
//         }
//         var reader = new FileReader();
//         reader.onload = function (e) {
//             var contents = e.target.result;
//             displayContents(contents);
//         };
//         reader.readAsText(file);
//     }

// function displayContents(contents) {
//         var element = document.getElementById('file-content');
//         element.textContent = contents;
//     }

// });
// function openDialog(){
//     document.getElementById('fileid').click()
// }

// document.getElementById("myBtn").addEventListener("click", function() {

//   var reader = new FileReader();
//   reader.addEventListener('load', function() {
//     document.getElementById('file').innerText = this.result;
//   });
//   reader.readAsText(document.querySelector('input').files[0]);

// });

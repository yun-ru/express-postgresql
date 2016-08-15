
var $guy = $(".guy");
var $updateBtn = $guy.find("button.update");
var $deleteBtn = $guy.find("button.delete");

$updateBtn.on("click",function() {
  const id = $(this).closest(".guy").data("id");
  const name = $(this).prev().val();
  $.ajax({
    url: "/people/" + id,
    method: "PUT",
    data: {name: name}
  }).then(res=>{
    console.log("Update success!!");
    location.reload();
  })
});

$deleteBtn.on("click",function() {
  const id = $(this).closest(".guy").data("id");
  $.ajax({
    url: "/people/" + id,
    method: "DELETE"
  }).then(res=>{
    console.log("Delete success!!");
    location.reload();
  })
});




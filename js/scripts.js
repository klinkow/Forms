$(document).ready(function() {
  $("#blanks form").submit(function() {
    var person1Input = $("input#person1").val();
    $(".person1").text(person1Input);
    $("#letter").show();
    event.preventDefault();
  });
});

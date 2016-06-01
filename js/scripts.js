$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var dob = $("#born").val();
    var favoriteColor = $("#color").val();
    var beverage = $("#beverage").val();
    var flavor = $("input:radio[name=flavor]:checked").val();

//  var result = $("Your name is " + name + " and you like " + flavor + " flavored ice cream.")
//  $("#results").text(result);

    $("#results").show();
  });
});

$(document).ready(function() {
  $("form#survey").submit(function(event) {

    var name = $("#name").val();
    var dob = $("#born").val();
    var favoriteColor = $("#color").val();
    var beverage = $("#beverage").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var music = $("#music").val();

    $(".name").text(name);
    $(".born").text(dob);
    $(".color").text(favoriteColor);
    $(".beverage").text(beverage);
    $(".flavor").text(flavor);
    $(".music").text(music);

//  var result = $("Your name is " + name + " and you like " + flavor + " flavored ice cream.")
//  $("#results").text(result);

    $("#results").show();

    event.preventDefault();
  });
});

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#showing").toggle();
    $("#hidden").toggle();
  });

  $(".clickableFade").click(function() {
    $("#fadeHidden").fadeToggle();
    $("#fadeShowing").fadeToggle();
  });

  $(".slidable").click(function() {
    $("#slide1").slideToggle();
    $("#slide2").slideToggle();
  });

  var showing = false;
  $("#image-toggle").click(function() {
    if (showing === false) {
      $("#secret-picture").fadeToggle();
      showing = true;
      $("#image-toggle").text("Click to hide it again!");
    } else {
      $("#secret-picture").fadeToggle();
      showing = false;
      $("#image-toggle").text("Click to see picture!");
    };
  });
});

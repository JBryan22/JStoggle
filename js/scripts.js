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
      $("#secret-picture").fadeTo("slow", 1);

      showing = true;
      $("#image-toggle").text("Click to hide it again!");
    } else {
      $("#secret-picture").animate({width: "-=33%"}, "slow");
      if ($("#secret-picture").width() <= 0) {
        $("#secret-picture").animate({width: "+=100%"});
      };
      $("#secret-picture").fadeTo("slow", 0.2);
      showing = false;
      $("#image-toggle").text("Click to see picture!");
    };
  });
});

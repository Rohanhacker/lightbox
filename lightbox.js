$(document).ready(function() {
  let h = $(document).height()
  $(".x").css({"height" : + h + "px"});
  $(".images a").click(function(event) {
    event.preventDefault();
    $(this).children().toggleClass("glow");
    $(".x").toggleClass("opacity");
      });
  $(".x").click(function() {
  $("img").removeClass("glow");
  $(".x").addClass("opacity");
    });

});

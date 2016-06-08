(function($) {
let h = $(document).height();
$("head").append("<style> \
.cc1 { \
  position: absolute; \
  background-color: rgba(0, 0, 0, 0.9); \
  top: 0; \
  right: 0; \
  left: 0; \
  bottom: 0; \
  height:" + h + "px; \
  z-index: 2; } \
  .hgg { \
    position: absolute; \
    height: 0px; \
  } \
  .glow1 { \
    transition: height 0.8s ease-in-out; \
    position: absolute; \
    z-index: 5; \
    top: 50%; \
    left: 50%; \
    transform: translate(-50%,-50%); \
    height: 70%; \
  </style>");
  $.fn.lightbox = function() {
    $("body").prepend("<div class=1-c></div>");
    $(".1-c").click(function() {
      $(".1-c").toggleClass("cc1");
      $(".hgg").toggleClass("glow1");
    });
    $("body").append("<img src="+ "a1.jpg" + " class=hgg>");
      $(this).click(function(event) {
      event.preventDefault();
      let source = $(this).find("img").attr("src");
      $(".hgg").attr("src",source);
      $(".1-c").toggleClass("cc1");
      $(".hgg").toggleClass("glow1");
      let h1 = window.pageYOffset
      $(".glow1").css({"top": "calc(50% + " + (h1) + "px)"});
      });
  };
}(jQuery));

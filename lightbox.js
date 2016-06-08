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
  z-index: 2; }\
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
      $(".1-g").remove();
    });
    console.log(this);
    var $a = this;
    var i = 0;
    $($a).click(function(event) {
      event.preventDefault();
      $(".1-c").toggleClass("cc1");
      let source = $(this).find("img").eq(0).attr("src");
      i++;
      $("body").append("<img src="+ source + " class=1-g>");
      $(".1-g").toggleClass("glow1");
      });
  };
}(jQuery));

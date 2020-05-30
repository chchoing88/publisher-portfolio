$(document).ready(function () {
  $("#header").load("/inc/head.html");
  $("#footer").load("/inc/footer.html");
});
$(window).ready(function () {
  $("body").addClass("loaded");
});

$("body a:first-child").click(function (event) {
  event.preventDefault();
  $("body div:eq(2)").toggle(1000);
  $("body div:eq(2)").show();
});

$("body a:eq(0)").click(function (event) {
  event.preventDefault();
  $("body div:eq(0)").toggle(1000);
  crea();
});

$("body a:eq(1)").click(function (a) {
  a.preventDefault();
  $("body div:eq(1)").toggle(1000);
  $("body div:eq(0)").html('<a href="" class="box3">tasto 2</a>');
});

function crea() {}

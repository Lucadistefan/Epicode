var bottoni = $("button");

$(bottoni[0]).click(function () {
  $("h1").hide();
});

$(bottoni[1]).click(function () {
  $("body div:eq(0)").css("color", "red");
});

$(bottoni[2]).mouseover(function () {
  $("body div:eq(1)").text("abc");
  mouseout("body div:eq(1)").text("secondo elemento div");
});

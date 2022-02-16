$(document).ready(() => {
  $("button").click(() => {
    var div = $("div");
    div.animate({ left: "100px" }, slow);
    div.animate({ fontSize: "4em" }, slow);
  });
});

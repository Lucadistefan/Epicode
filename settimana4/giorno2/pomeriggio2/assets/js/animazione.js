$(document).ready(function () {
  $("button").click(function () {
    $("div").animate({
      height: "200px",
      opacity: "0.4",
    });

    $("div").animate(
      {
        width: "200px",
        opacity: "0.8",
      },
      3000
    );

    $("div").animate({
      height: "105px",
      opacity: "0.4",
    });

    $("div").animate(
      {
        width: "105px",
        opacity: "0.8",
      },
      3000
    );
  });
});

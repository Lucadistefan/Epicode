var colors = [
  ["red", "white"],
  ["black", "grey"],
  ["green", "gold"],
];

var i = 0;

$("#btn").click(function () {
  $("body").css("background-color", colors[i][0]).css("color", colors[i][1]);
  $("strong").text(colors[i][1]);
  i < colors.length - 1 ? i++ : (i = 0);
});

/* 
  $("#btn").click(function () {
    switch($(p).attr("id"){
    case "testoBianco":
      $("body").css("background-color", "red");
      $("p").css("color", "white");
      $("#color").text("white");
        break;
      case "testoGrigio":
        $("body").css("background-color", "black");
        $("p").css("color", "grey");
        $("#color").text("grey");
        break;
        case "testoGold":
            $("body").css("background-color", "green");
            $("p").css("color", "gold");
            $("#color").text("gold");
        break;
        case "testoBianco":
            $("body").css("background-color", "white");
            $("p").css("color", "black");
            $("#color").text("black");
            break;
    
    });
});
*/

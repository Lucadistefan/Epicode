$(document).ready(function () {
  var titolo;
  var canzone;
  var titolo2;
  var filmato;
  $.ajax({
    url: "assets/json/media.json",
    contentType: "application/json",
    dataType: "json",
    success: function (data) {
      $.each(data, function (i, el) {
        var titolo = el.title;
        console.log(titolo);
        $("#canzoni").append(
          '<ul class="list-group col-md-6"><li class="list-group-item">' +
            "titolo" +
            "</li></ul>"
        );
        var titolo2 = el.title;
        console.log(titolo2);
        $("#filmato").append(
          '<ul class="list-group col-md-6"><li class="list-group-item">' +
            "titolo2" +
            "</li></ul>"
        );
      });
    },
  });
});

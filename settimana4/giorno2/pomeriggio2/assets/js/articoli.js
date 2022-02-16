$(document).ready(function () {
  $.ajax({
    url: "assets/data/articoli.json",
    data: "data",
    dataType: "json",
    success: function (data) {
      $.each(data, function (i, el) {
        // passo data al ciclo // due argomenti: 1. indice 2. elementi
        var titolo = el.title; // associo alla variabile sigla il contenuto di prov_it per ciascun elemento
        var text = el.body; // associo alla variabile nome il contenuto di prov_nome per ciascun elemento
        $("#cnt").append(
          '<div class="card col-sm-3 offset-sm-1 mb-5"><div class="card-body"><h5 class="card-title">' +
            titolo +
            '</h5><p class="card-text">' +
            testo +
            "</p></div></div>"
        );
      });
    },
  });
});

$(document)
  .ajaxStart(function () {
    $("#loader").show();
  })
  .ajaxStop(function () {
    $("#loader").hide();
  })
  .ready(function () {
    $.ajax({
      url: "assets/data/nomi_email.json",
      data: "data",
      dataType: "json",
      success: function (data) {
        console.log(data);
        $.each(data, function (i, el) {
          // passo data al ciclo // due argomenti: 1. indice 2. elementi
          var id = el.id;
          var nome = el.name; // associo alla variabile sigla il contenuto di prov_it per ciascun elemento
          var email = el.email; // associo alla variabile nome il contenuto di prov_nome per ciascun elemento
          $("#tbl").append(
            '<tr><th scope="row">' +
              id +
              "</th><td>" +
              nome +
              "</td><td>" +
              email +
              "</td>"
          );
        });
      },
    });
  });

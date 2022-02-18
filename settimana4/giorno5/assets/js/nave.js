$(document).ready(function () {
  $.ajax({
    url: "https://swapi.dev/api/starships/10",
    type: "GET",
    success: function (data) {
      console.log(data); //qui vedi tutte le proprietà in console
      /*aggiungi tutto*/
      $(".person .card-title").text(data.name);
      $(".person .card-text").append("<p>modello: " + data.model + "</p>");
      $(".person .card-text").append(
        "<p>costruttore: " + data.manufacturer + "</p>"
      );
      $(".person .card-text").append("<p>lunghezza: " + data.length + "</p>");
      $(".person .card-text").append("<p>equipaggio: " + data.crew + "</p>");
      $(".person .card-text").append(
        "<p>passeggeri " + data.passengers + "</p>"
      );
      /* appendo .piloti per stamparci dentro il ciclo dei piloti */
      $(".person .card-text").append('<div class="piloti"><ul></ul></div>');
      /* per film, pianeti etc che sono array stampo il link */
      $.each(data.pilots, function (i, el) {
        console.log(el);
        $(".person .piloti ul").append(
          '<li><a class="piloturl" href="' + el + '">' + el + "</a></li>"
        );
      });
      $(".piloturl").on("click", function (e) {
        e.preventDefault(); // per rendere il link cliccabile nella pagina
        const h = $(this).attr("href"); // chiamata sul film mi faccio dare l'url che c'è nell'href
        console.log(h);
        $.ajax({
          url: h, // passo la url dell'href dentro alla seconda chiamata ajax
          type: "GET",
          success: function (data) {
            console.log(data);
            $(".piloti .card-title").text(data.name); // stampo i dati nella card sotto
          },
        });
      });
    },
  });
});

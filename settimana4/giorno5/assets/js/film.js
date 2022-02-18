// esercizio di lettura json su star wars
$(document).ready(function () {
  $.ajax({
    url: "https://swapi.dev/api/people/1",
    type: "GET",
    success: function (data) {
      console.log(data); //qui vedi tutte le proprietà in console
      /*aggiungi tutto*/
      $(".person .card-title").text(data.name);
      $(".person .card-text").append("<p>height: " + data.height + "</p>");
      $(".person .card-text").append("<p>mass: " + data.mass + "</p>");
      $(".person .card-text").append(
        "<p>hair color: " + data.hair_color + "</p>"
      );
      /* appendo .films per stamparci dentro il ciclo dei film */
      $(".person .card-text").append('<div class="films"><ul></ul></div>');
      /* per film, pianeti etc che sono array stampo il link */
      $.each(data.films, function (i, el) {
        console.log(el);
        $(".person .films ul").append(
          '<li><a class="filmurl" href="' + el + '">' + el + "</a></li>"
        );
      });
      $(".filmurl").on("click", function (e) {
        e.preventDefault(); // per rendere il link cliccabile nella pagina
        const h = $(this).attr("href"); // chiamata sul film mi faccio dare l'url che c'è nell'href
        console.log(h);
        $.ajax({
          url: h, // passo la url dell'href dentro alla seconda chiamata ajax
          type: "GET",
          success: function (data) {
            console.log(data);
            $(".film .card-title").text(data.title); // stampo i dati nella card sotto
            $(".film .card-text").text(data.opening_crawl);
          },
        });
      });
    },
  });
});

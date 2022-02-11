var dati_libro = [];
var totale;

window.addEventListener("change", prezzo_da_pagare);

function prezzo_da_pagare() {
  dati_libro[0] = Number(document.getElementById("libri").value);
  dati_libro[1] = Number(document.getElementById("numLibri").value);
  dati_libro[2] = 1 - Number(document.querySelector("#percent").value) / 100;
  totale = document.getElementById("totale");
  var prezzo = 1;
  for (let i = 0; i < dati_libro.length; i++) {
    prezzo = dati_libro[i] * prezzo;
  }
  totale.value = Math.round((prezzo + Number.EPSILON) * 100) / 100;
  console.log(dati_libro, prezzo);
}

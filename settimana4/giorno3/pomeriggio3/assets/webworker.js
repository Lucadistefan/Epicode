var ww = {
  init: function () {
    console.log("WebWorker started");
    ww.load();
  },
  load: function () {
    setInterval(function () {
      width = Math.round(500 + Math.random() * 100); // arrotonda un numero random aggiunge 500 e moltiplica per 100 (se no è da 0 a 1)
      height = Math.round(500 + Math.random() * 100);
      path = "https://loremflickr.com/" + width + "/" + height;
      postMessage({ path: path, measure: [width, height] }); //invio dati alla pagina!
    }, 3000);
  },
};
ww.init();
// avvia il web worker
// ogni 3 secondi (setinterval) cambia i valori dei w, h e path (con valori random)
// poi manda il messaggio (postMessage)

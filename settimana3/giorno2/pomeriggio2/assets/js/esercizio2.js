var addBtn;
var taskTxt;
var taskListHTML;
// dichiarando le mie variabili

window.addEventListener("load", init);
// al caricamento della pagina chiama la funzione init
function init() {
  addBtn = document.querySelector("add_btn");
  taskTxt = document.querySelector("task_txt");
  taskListHTML = document.querySelector("#task_list_html");
  // aggancia alle variabili gli oggetti html
  addBtn.addEventListener("click", addTask);
  // si mette in ascolto in attesa di un evento click sul bottone
  // quando avviene il click chiamo addTask
}

function addTask() {
  tasksList.push(taskTxt.value);
  // inserisce nell'array tasklist il value scritto nell'input
  // chiamo le altre due funzioni
  buildList();
  clearForms();
}

function buildList() {
  var list = "";
  // pulisco
  for (var i = 0; i < tasksList.length; i++) {
    // fa il ciclo sull'array ottenuto sopra
    list += "<li>" + tasksList[i] + "</li>";
  }
  // inserisce l'html nella pagina
  taskListHTML.innerHTML = list;
  clearForms(); // pulisce ogni volta
}

function clearForms() {
  taskTxt.value = ""; // ripulisco il campo input
}

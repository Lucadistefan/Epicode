var addBtn;
var taskTxt;
var taskListHTML;
var tasksList = [];
// dichiara le variabili
window.addEventListener("load", init);
// al caricamento della pagina chiama la funzione init
function init() {
  addBtn = document.querySelector("#add_btn");
  taskTxt = document.querySelector("#task_txt");
  taskListHTML = document.querySelector("#tasks_list_html");
  // aggancia alle variabili gli oggetti html
  addBtn.addEventListener("click", addTask);
  // si mette in ascolto in attesa di un evento click sul bottone
  // quando avviene il click chiama addtask
}

function addTask() {
  tasksList.push(taskTxt.value);
  // inserisce nell'array tasklist il valore scritto nell'input
  // chiama le 2 funzioni sotto
  buildList();
  clearForms();
}

function buildList() {
  var list = "";
  // pulisce la stringa
  for (var i = 0; i < tasksList.length; i++) {
    // fa il ciclo sull'array ottenuto sopra
    list += "<li>" + tasksList[i] + "</li>";
  }
  // inserisce l'html nella pagina
  taskListHTML.innerHTML = list;
  clearForms(); // pulisce ogni volta
}

function clearForms() {
  taskTxt.value = ""; // pulisce al caricamento
}

var add_btn = document.getElementById("add_btn");
var lista = document.getElementById("lista");
add_btn.addEventListener("click", addText);

function addText() {
  var text = document.getElementById("testo").value;
  lista.innerHTML += "<li>" + text + "</li>";
}

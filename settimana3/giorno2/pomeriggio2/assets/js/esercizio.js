var prestampa = document.getElementById("btn");
prestampa.addEventListener("click", stampa);
var user = {};

function stampa() {
  user.nome = document.getElementById("nome").value;
  user.cognome = document.getElementById("cognome").value;
  user.eta = new Date().getFullYear() - document.getElementById("anno").value;

  console.log(user);
  console.log(
    "Ciao",
    user["nome"],
    user["cognome"],
    "hai",
    user["eta"],
    "anni!"
  );
}

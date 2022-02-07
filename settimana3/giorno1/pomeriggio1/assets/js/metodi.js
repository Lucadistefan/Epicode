var dati = {
  nome: prompt("Dimmi il tuo nome"),
  cognome: prompt("Dimmi il tuo cognome"),
  ruolo: prompt("Qual è il tuo ruolo?"),
  nascita: prompt("In che giorno sei nato?"),
  anni: prompt("Quanti anni hai?"),

  seigiovane: function () {
    return "Sei molto giovane, hai solo " + dati.anni + " anni";
  },
};

document.write(dati.seigiovane());
console.log(dati);
console.log("il tuo ruolo nel gruppo è " + dati["ruolo"]);
console.log(dati.seigiovane());

var voti = [];
var voto_medio;

window.addEventListener("load", media);

function media() {
  let studentiV = document.getElementsByClassName("voto");
  for (let i = 0; i < studentiV.length; i++) {
    voti[i] = Number(studentiV[i].textContent);
  }
  for (var n = 0, tot = 0; n < voti.length; n++) {
    tot = tot + voti[n];
  }
  voto_medio = tot / voti.length;
  console.log(tot, voto_medio);
  lettera();
}

function lettera() {
  switch (true) {
    case voto_medio < 60:
      console.log("la lettera è E");
      break;
    case voto_medio < 70:
      console.log("la lettera è D");
      break;
    case voto_medio < 80:
      console.log("la lettera è C");
      break;
    case voto_medio < 90:
      console.log("la lettera è B");
      break;
    default:
      console.log("la lettera è A");
      break;
  }
}

/*
function lettera() {
    if (voto_medio = < 60) {
        console.log('la lettera è E')

    } else if(voto_medio = <70) {
        console.log('la lettera è D')
    } else if(voto_medio = <80) {
        console.log('la lettera è C')
    } else if(voto_medio = <90) {
        console.log('la lettera è B')
    } else(voto_medio = <100) {
        console.log('la lettera è A')
    }
}
*/

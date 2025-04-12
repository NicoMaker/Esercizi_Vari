let buttom = document.getElementById("calcola_mesi");
buttom.addEventListener("click", function () {
  let mesi = parseInt(document.getElementById("mesi").value);
  let risultato = document.getElementById("risultato");

  switch (mesi) {
    case 1:
      risultato = mesi * 30;
      break;
    case 2:
      risultato = mesi * 30;
      break;
    case 3:
      risultato = mesi * 30;
      break;
    case 4:
      risultato = (mesi - 1) * 30 + 25;
      break;
    case 5:
      risultato = (mesi - 2) * 30 + 25 * 2;
      break;
    case 6:
      risultato = (mesi - 3) * 30 + 25 * 3;
      break;
    case 7:
      risultato = (mesi - 4) * 30 + (mesi - 4 * 25) + 20;
      break;
    case 8:
      risultato = (mesi - 5) * 30 + (mesi - 5 * 25) + 20 * 2;
      break;
    case 9:
      risultato = (mesi - 6) * 30 + (mesi - 6 * 25) + 20 * 3;
      break;
    case 10:
      risultato = (mesi - 7) * 30 + (mesi - 7 * 25) + 20 * 4;
      break;
    case 11:
      risultato = (mesi - 8) * 30 + (mesi - 8 * 25) + 20 * 5;
      break;
    case 12:
      risultato = (mesi - 9) * 30 + (mesi - 9 * 25) + 20 * 6;
      break;
    default:
      risultato = "Errore, inserire un mese compreso tra 1 e 12";
      break;
  }
  risultato = document.getElementById("risultato").innerHTML = risultato;
});

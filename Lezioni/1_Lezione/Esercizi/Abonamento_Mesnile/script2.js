let buttom = document.getElementById("calcola_mesi");
buttom.addEventListener("click", function () {
  let mesi = parseInt(document.getElementById("mesi").value);
  let risultatoOutput = document.getElementById("risultato");
  let risultato;

  if (mesi >= 1 && mesi <= 12) {
    risultato = 0;

    for (let i = 1; i <= mesi; i++) {
      if (i <= 3) {
        risultato += 30;
      } else if (i <= 6) {
        risultato += 25;
      } else {
        risultato += 20;
      }
    }
  } else {
    risultato = "Errore, inserire un mese compreso tra 1 e 12";
  }

  risultatoOutput.innerHTML = risultato;
});

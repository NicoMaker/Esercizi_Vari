// Seleziona il bottone "Calcola" usando il suo ID e lo assegna alla variabile 'buttom'
let buttom = document.getElementById("calcola_mesi");

// Aggiunge un event listener che ascolta il click sul bottone
buttom.addEventListener("click", function () {
  // Ottiene il valore del campo di input, lo converte in intero e lo assegna alla variabile 'mesi'
  let mesi = parseInt(document.getElementById("mesi").value);

  // Seleziona l'elemento che conterrà il risultato e lo assegna alla variabile 'risultatoOutput'
  let risultatoOutput = document.getElementById("risultato");

  // Dichiara una variabile per il risultato del calcolo
  let risultato;

  // Verifica che il numero di mesi inserito sia compreso tra 1 e 12
  if (mesi >= 1 && mesi <= 12) {
    // Inizializza il risultato a 0, per iniziare il calcolo
    risultato = 0;

    // Ciclo che esegue il calcolo del costo per ogni mese
    for (let i = 1; i <= mesi; i++) {
      // Se il mese è tra 1 e 3, aggiunge 30 al risultato
      if (i <= 3) {
        risultato += 30;
      }
      // Se il mese è tra 4 e 6, aggiunge 25 al risultato
      else if (i <= 6) {
        risultato += 25;
      }
      // Se il mese è maggiore di 6, aggiunge 20 al risultato
      else {
        risultato += 20;
      }
    }
  } else {
    // Se il numero di mesi non è tra 1 e 12, assegna un messaggio di errore al risultato
    risultato = "Errore, inserire un mese compreso tra 1 e 12";
  }

  // Mostra il risultato calcolato nell'elemento con ID "risultato"
  risultatoOutput.innerHTML = risultato;
});

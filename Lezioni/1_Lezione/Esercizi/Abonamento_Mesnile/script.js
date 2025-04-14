// Seleziona il bottone "Calcola" usando il suo ID e lo assegna alla variabile 'buttom'
let buttom = document.getElementById("calcola_mesi");

// Aggiunge un event listener che ascolta il click sul bottone
buttom.addEventListener("click", function () {
  // Ottiene il valore del campo di input, lo converte in intero e lo assegna alla variabile 'mesi'
  let mesi = parseInt(document.getElementById("mesi").value);

  // Seleziona l'elemento che conterrà il risultato e lo assegna alla variabile 'risultato'
  let risultato = document.getElementById("risultato");

  // Inizia una struttura 'switch' per calcolare il risultato in base al valore di 'mesi'
  switch (mesi) {
    case 1:
    case 2:
    case 3:
      // Se il valore di 'mesi' è 1, 2 o 3, moltiplica i mesi per 30 (costo di base)
      risultato = mesi * 30;
      break;

    case 4:
      // Se 'mesi' è 4, applica uno sconto (costo base per i primi 3 mesi e un prezzo ridotto per il quarto)
      risultato = (mesi - 1) * 30 + 25;
      break;

    case 5:
      // Se 'mesi' è 5, applica uno sconto maggiore (costo base per i primi 3 mesi e un prezzo ridotto per i successivi 2 mesi)
      risultato = (mesi - 2) * 30 + 25 * 2;
      break;

    case 6:
      // Se 'mesi' è 6, applica uno sconto ancora maggiore (costo base per i primi 3 mesi e uno sconto per i successivi 3 mesi)
      risultato = (mesi - 3) * 30 + 25 * 3;
      break;

    case 7:
      // Se 'mesi' è 7, applica uno sconto maggiore per i primi 4 mesi e un altro sconto per i successivi
      risultato = (mesi - 4) * 30 + (mesi - 4 * 25) + 20;
      break;

    case 8:
      // Se 'mesi' è 8, applica lo sconto sui primi 5 mesi e un altro sconto per i successivi 3 mesi
      risultato = (mesi - 5) * 30 + (mesi - 5 * 25) + 20 * 2;
      break;

    case 9:
      // Se 'mesi' è 9, applica lo sconto sui primi 6 mesi e uno per i successivi
      risultato = (mesi - 6) * 30 + (mesi - 6 * 25) + 20 * 3;
      break;

    case 10:
      // Se 'mesi' è 10, applica lo sconto sui primi 7 mesi e uno per i successivi
      risultato = (mesi - 7) * 30 + (mesi - 7 * 25) + 20 * 4;
      break;

    case 11:
      // Se 'mesi' è 11, applica lo sconto sui primi 8 mesi e uno per i successivi
      risultato = (mesi - 8) * 30 + (mesi - 8 * 25) + 20 * 5;
      break;

    case 12:
      // Se 'mesi' è 12, applica lo sconto sui primi 9 mesi e uno per i successivi
      risultato = (mesi - 9) * 30 + (mesi - 9 * 25) + 20 * 6;
      break;

    // Caso predefinito: se il valore di 'mesi' non è compreso tra 1 e 12, mostra un errore
    default:
      risultato = "Errore, inserire un mese compreso tra 1 e 12";
      break;
  }

  // Mostra il risultato calcolato nell'elemento con ID "risultato"
  risultato = document.getElementById("risultato").innerHTML = risultato;
});

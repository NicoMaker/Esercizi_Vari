document.addEventListener("DOMContentLoaded", function () {
  // Elementi DOM
  const button = document.getElementById("calcola_mesi"); // Bottone per calcolare
  const inputMesi = document.getElementById("mesi"); // Input per il numero di mesi
  const resultContainer = document.getElementById("result-container"); // Contenitore per mostrare il risultato
  const errorMessage = document.getElementById("error-message"); // Messaggio di errore
  const tabellaBody = document.getElementById("tabella-body"); // Corpo della tabella
  const totaleComplessivo = document.getElementById("totale-complessivo"); // Totale complessivo
  const pricingItems = document.querySelectorAll(".pricing-item"); // Gli elementi che mostrano le fasce di prezzo

  // Array con i nomi dei mesi in italiano
  const nomiMesi = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ];

  // Prezzi per le fasce (in €)
  const prezzi = {
    "1-3": 30, // Prezzo per 1-3 mesi
    "4-6": 25, // Prezzo per 4-6 mesi
    "7-12": 20, // Prezzo per 7-12 mesi
  };

  // Funzione per calcolare il costo mensile in base al numero di mesi
  function calcolaCostoMensile(mese) {
    if (mese <= 3) {
      return prezzi["1-3"];
    } else if (mese <= 6) {
      return prezzi["4-6"];
    } else {
      return prezzi["7-12"];
    }
  }

  // Imposta i prezzi nella parte grafica per ogni fascia di prezzo
  document.getElementById("price-1-3").textContent = `${prezzi["1-3"]}€`;
  document.getElementById("price-4-6").textContent = `${prezzi["4-6"]}€`;
  document.getElementById("price-7-12").textContent = `${prezzi["7-12"]}€`;

  // Event listener per il pulsante di calcolo
  button.addEventListener("click", function () {
    // Ottieni il valore dell'input (numero di mesi)
    const mesi = parseInt(inputMesi.value);

    // Pulisci la tabella e i messaggi di errore
    tabellaBody.innerHTML = "";
    errorMessage.textContent = "";

    // Rimuovi la classe active da tutti gli elementi pricing
    pricingItems.forEach((item) => {
      item.classList.remove("active-pricing");
    });

    // Verifica che il numero di mesi sia valido (compreso tra 1 e 12)
    if (mesi >= 1 && mesi <= 12) {
      let totale = 0;

      // Evidenzia le fasce di prezzo attive in base ai mesi inseriti
      if (mesi >= 1) pricingItems[0].classList.add("active-pricing");
      if (mesi >= 4) pricingItems[1].classList.add("active-pricing");
      if (mesi >= 7) pricingItems[2].classList.add("active-pricing");

      // Ottieni il mese corrente (0-11)
      const dataAttuale = new Date();
      const meseAttuale = dataAttuale.getMonth(); // 0 = Gennaio, 1 = Febbraio, ecc.

      // Popola la tabella con i dati mensili (per ogni mese richiesto)
      for (let i = 1; i <= mesi; i++) {
        const costoMensile = calcolaCostoMensile(i);
        totale += costoMensile;

        // Calcola l'indice del mese (considerando il ciclo annuale)
        const indiceMese = (meseAttuale + i - 1) % 12;
        const nomeMese = nomiMesi[indiceMese];

        // Crea una nuova riga della tabella
        const row = document.createElement("tr");

        // Aggiungi le celle alla riga
        row.innerHTML = `
            <td>${nomeMese}</td>
            <td>${costoMensile}€</td>
            <td>${totale}€</td>
          `;

        // Aggiungi la riga alla tabella
        tabellaBody.appendChild(row);
      }

      // Aggiorna il totale complessivo
      totaleComplessivo.textContent = totale + "€";

      // Mostra la tabella dei risultati
      resultContainer.style.display = "block";
    } else {
      // Nascondi la tabella dei risultati se il numero di mesi non è valido
      resultContainer.style.display = "none";

      // Mostra un messaggio di errore
      errorMessage.textContent =
        "Errore: inserire un numero di mesi compreso tra 1 e 12";
    }
  });

  // Permetti di premere Enter per calcolare automaticamente
  inputMesi.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      button.click();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Elementi DOM
  const button = document.getElementById("calcola_mesi");
  const inputMesi = document.getElementById("mesi");
  const resultContainer = document.getElementById("result-container");
  const errorMessage = document.getElementById("error-message");
  const tabellaBody = document.getElementById("tabella-body");
  const totaleComplessivo = document.getElementById("totale-complessivo");
  const pricingItems = document.querySelectorAll(".pricing-item");

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

  // Funzione per calcolare il costo mensile
  function calcolaCostoMensile(mese) {
    if (mese <= 3) {
      return 30;
    } else if (mese <= 6) {
      return 25;
    } else {
      return 20;
    }
  }

  // Event listener per il pulsante di calcolo
  button.addEventListener("click", function () {
    // Ottieni il valore dell'input
    const mesi = parseInt(inputMesi.value);

    // Pulisci la tabella e i messaggi di errore
    tabellaBody.innerHTML = "";
    errorMessage.textContent = "";

    // Rimuovi la classe active da tutti gli elementi pricing
    pricingItems.forEach((item) => {
      item.classList.remove("active-pricing");
    });

    // Verifica che il numero di mesi sia valido
    if (mesi >= 1 && mesi <= 12) {
      let totale = 0;

      // Evidenzia le fasce di prezzo attive
      if (mesi >= 1) pricingItems[0].classList.add("active-pricing");
      if (mesi >= 4) pricingItems[1].classList.add("active-pricing");
      if (mesi >= 7) pricingItems[2].classList.add("active-pricing");

      // Ottieni il mese corrente (0-11)
      const dataAttuale = new Date();
      const meseAttuale = dataAttuale.getMonth(); // 0 = Gennaio, 1 = Febbraio, ecc.

      // Popola la tabella con i dati mensili
      for (let i = 1; i <= mesi; i++) {
        const costoMensile = calcolaCostoMensile(i);
        totale += costoMensile;

        // Calcola l'indice del mese (considerando il ciclo annuale)
        const indiceMese = (meseAttuale + i - 1) % 12;
        const nomeMese = nomiMesi[indiceMese];

        // Crea una nuova riga
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
      // Nascondi la tabella dei risultati
      resultContainer.style.display = "none";

      // Mostra un messaggio di errore
      errorMessage.textContent =
        "Errore: inserire un numero di mesi compreso tra 1 e 12";
    }
  });

  // Permetti di premere Enter per calcolare
  inputMesi.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      button.click();
    }
  });
});

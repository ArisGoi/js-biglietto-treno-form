
// bottoni
var btnCrea = document.getElementById('crea');
var btnAnnulla = document.getElementById('annulla');

btnCrea.addEventListener('click', 
    function(){
        // 1) Raccolta dati
        var getName = document.getElementById('name').value;
        var getEta = document.getElementById('eta').value;
        var getDate = document.getElementById('dateForm').value;
        var getFrom = "Milano";
        var getDestination = document.getElementById('destination').value;
        var getClass = document.getElementById('classe').value;

        if (getName == "" || getEta == "" || getDate == "" || getDestination == "" || getClass == "") {
                alert('Non hai inserito tutti i dati')
            } else {
                // 2a) Generazioni codice biglietto
                var ticketCode = parseInt(Math.random() * 100000);
                // 2b) Generazione codice posto a sedere
                var randomSeat = parseInt(Math.random() * 30 + 1);
                if (getClass == "Prima") {
                    var seatNumber = "01" + " - " + randomSeat;
                } else if (getClass == "Economy"){
                    var randomVagon = parseInt(Math.random() * 15 + 1);
                    // Il while impedisce di generare una carrozza 0 oppure 1(prima classe)
                    while (randomVagon == 1 || randomVagon == 0){
                        randomVagon = parseInt(Math.random() * 15 + 1);
                    }
                    // impedisce una sola cifra nel numero vagone
                    if (randomVagon < 10){
                        seatNumber = "0" + randomVagon + " - " + randomSeat;
                    } else {
                        seatNumber = randomVagon + " - " + randomSeat;
                    }
                };

                // 3) calcolo il prezzo in base ai Km
                var ticketPrice = getDestination * 0.21; //Prezzo: 0.21€ al Km
            
                // 4) Calcolo lo sconto
                var sconto;

                if (getEta == "Minorenne"){
                    sconto = (ticketPrice * 20 /100);
                } else if (getEta == "Over65"){
                    sconto = (ticketPrice * 40 /100);
                } else {
                    sconto = 0;
                }

                // 5) Calcolo il prezzo finale
                if (getClass == "Prima") { // Se il posto è in prima classe il prezzo raddoppia
                    var finalPrice = ticketPrice - sconto;
                    finalPrice = (Math.round(finalPrice * 100) / 100 * 2).toFixed(2);
                } else {
                    var finalPrice = ticketPrice - sconto;
                    finalPrice = (Math.round(finalPrice * 100) / 100).toFixed(2);
                }


                // 6) Stampo i risultati
                console.log(getName, getEta, getDate, getDestination, getClass);
                console.log(ticketCode);
                console.log(seatNumber);
                console.log(finalPrice);

                    // nome e cognome
                    document.getElementById('innName').innerHTML = getName;
                    // Categoria passeggero (ETA)
                    document.getElementById('innEta').innerHTML = getEta;
                    // Data Biglietto
                    document.getElementById('innDate').innerHTML = getDate;
                    // Partenza
                    document.getElementById('innFrom').innerHTML = getFrom;
                    // Destinazione
                    if (getDestination == 216){
                        // Bologna
                        document.getElementById('innDestination').innerHTML = "Bologna";
                    } else if (getDestination == 306){
                        // Firenze
                        document.getElementById('innDestination').innerHTML = "Firenze";
                    } else if (getDestination == 764){
                        // Napoli
                        document.getElementById('innDestination').innerHTML = "Napoli";
                    } else if (getDestination == 581){
                        // Pescara
                        document.getElementById('innDestination').innerHTML = "Pescara";
                    } else if (getDestination == 575){
                        // Roma
                        document.getElementById('innDestination').innerHTML = "Roma";
                    } else if (getDestination == 966){
                        // Taranto
                        document.getElementById('innDestination').innerHTML = "Taranto";
                    } else if (getDestination == 270){
                        // Venezia
                        document.getElementById('innDestination').innerHTML = "Venezia";
                    } else if (getDestination == 97){
                        // Verbania
                        document.getElementById('innDestination').innerHTML = "Verbania";
                    };
                    // Classe
                    document.getElementById('innClass').innerHTML = getClass;
                    // Posto a sedere
                    document.getElementById('innSeat').innerHTML = seatNumber;
                    // Codice biglietto
                    document.getElementById('innCode').innerHTML = ticketCode;
                    // Prezzo Biglietto
                    document.getElementById('innPrice').innerHTML = finalPrice + " €";
            }

    }
);
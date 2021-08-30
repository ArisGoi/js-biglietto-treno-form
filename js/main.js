
// bottoni
var btnCrea = document.getElementById('crea');
var btnAnnulla = document.getElementById('annulla');

btnCrea.addEventListener('click', 
    function(){
        // 1) Raccolta dati
        var getName = document.getElementById('name').value;
        var getEta = document.getElementById('eta').value;
        var getDate = document.getElementById('dateForm').value;
        var getFrom = "MI";
        var getDestination = document.getElementById('destination').value;
        var getClass = document.getElementById('classe').value;

        if (getName == "" || getEta == "" || getDate == "" || getDestination == "" || getClass == "") {
                alert('Non hai inserito tutti i dati')
            } else {
                // 2a) Generazioni codice biglietto
                var ticketCode = parseInt(Math.random() * 100000);
                // 2b) Generazione codice posto a sedere
                var randomSeat = parseInt(Math.random() * 30 + 1);
                if (getClass == "first") {
                    var seatNumber = "01" + " - " + randomSeat;
                } else if (getClass == "eco"){
                    var randomVagon = parseInt(Math.random() * 15 + 1);
                    // Il while impedisce di generare una carrozza 0 oppure 1(prima classe)
                    while (randomVagon == 1 || randomVagon == 0){
                        randomVagon = parseInt(Math.random() * 15 + 1);
                    }
                    // impedisce una sola cifra nel numero vagone
                    if (randomVagon < 10){
                        seatNumber = "0" + randomVagon;
                    } else {
                        seatNumber = randomVagon;
                    }
                };

                // 3) calcolo il prezzo in base ai Km
                var ticketPrice = getDestination * 0.21; //Prezzo: 0.21€ al Km
            
                // 4) Calcolo lo sconto
                var sconto;

                if (getEta == "minor"){
                    sconto = (ticketPrice * 20 /100);
                } else if (getEta == "overEta"){
                    sconto = (ticketPrice * 40 /100);
                } else {
                    sconto = 0;
                }

                // 5) Calcolo il prezzo finale
                var finalPrice = ticketPrice - sconto;
                finalPrice = (Math.round(finalPrice * 100) / 100).toFixed(2);


                // FINE
                console.log(getName, getEta, getDate, getDestination, getClass);
                console.log(ticketCode);
                console.log(seatNumber);

                console.log(finalPrice);
            }

    }
);

// bottoni
var btnCrea = document.getElementById('crea');
var btnAnnulla = document.getElementById('annulla');

btnCrea.addEventListener('click', 
    function(){
        // Raccolta dati
        var getName = document.getElementById('name').value;
        var getEta = document.getElementById('eta').value;
        var getDate = document.getElementById('dateForm').value;
        var getDestination = document.getElementById('destination').value;
        var getClass = document.getElementById('classe').value;

        console.log(getName, getEta, getDate, getDestination, getClass)
    }
);
// Imposta la data e ora della scadenza
var countDownDate = new Date("Aug 30, 2024 12:00:00").getTime();

// Funzione per aggiornare il countdown ogni secondo
var countdownFunction = setInterval(function() {
    // Ottieni la data e l'ora attuali
    var now = new Date().getTime();
    
    // Calcola la distanza tra la data di scadenza e ora
    var distance = countDownDate - now;
    
    // Calcola giorni, ore, minuti e secondi rimanenti
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Verifica se i valori sono corretti
    console.log("Days: " + days + ", Hours: " + hours + ", Minutes: " + minutes + ", Seconds: " + seconds);
    
    // Aggiorna il countdown nella pagina
    document.getElementById("days1").innerHTML = days;
    document.getElementById("hours1").innerHTML = hours;
    document.getElementById("minutes1").innerHTML = minutes;
    document.getElementById("seconds1").innerHTML = seconds;

    document.getElementById("days2").innerHTML = days;
    document.getElementById("hours2").innerHTML = hours;
    document.getElementById("minutes2").innerHTML = minutes;
    document.getElementById("seconds2").innerHTML = seconds;
    
    // Se il countdown è scaduto, mostra "EXPIRED"
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("countdown2").innerHTML = "EXPIRED";
    }
}, 1000);
function startCountdown(targetDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdown2").innerHTML = "EXPIRED";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Aggiorna elementi countdown1
        document.getElementById("days1").innerHTML = formatNumber(days);
        document.getElementById("hours1").innerHTML = formatNumber(hours);
        document.getElementById("minutes1").innerHTML = formatNumber(minutes);
        document.getElementById("seconds1").innerHTML = formatNumber(seconds);

        // Aggiorna elementi countdown2
        document.getElementById("days2").innerHTML = formatNumber(days);
        document.getElementById("hours2").innerHTML = formatNumber(hours);
        document.getElementById("minutes2").innerHTML = formatNumber(minutes);
        document.getElementById("seconds2").innerHTML = formatNumber(seconds);
    }

    function formatNumber(number) {
        return number < 10 ? "0" + number : number;
    }

    const interval = setInterval(updateCountdown, 1000);
}

// Imposta la data di destinazione (ad esempio, 31 dicembre 2024)
const targetDate = new Date("Sept 22, 2024 23:59:59").getTime();
startCountdown(targetDate);

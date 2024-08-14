function copyText() {
    // Seleziona il testo da copiare
    var textToCopy = document.getElementById('text-to-copy').textContent;

    // Crea un elemento temporaneo per copiare il testo
    var tempElement = document.createElement('textarea');
    tempElement.value = textToCopy;
    document.body.appendChild(tempElement);

    // Seleziona il testo nel campo temporaneo
    tempElement.select();
    tempElement.setSelectionRange(0, 99999); // Per dispositivi mobili

    // Copia il testo negli appunti
    document.execCommand("copy");

    // Rimuovi l'elemento temporaneo
    document.body.removeChild(tempElement);

    // Mostra l'overlay di conferma
    var overlay = document.getElementById('copy-overlay');
    overlay.classList.add('show');

    // Riduci l'opacità del box di copia
    var copyBox = document.querySelector('.copy-box');
    copyBox.classList.add('dimmed');

    // Nascondi l'overlay e ripristina l'opacità dopo 1.5 secondi
    setTimeout(function() {
        overlay.classList.remove('show');
        copyBox.classList.remove('dimmed');
    }, 1500);
}

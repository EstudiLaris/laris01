function obrirModal(nomModal) {
    var modal = document.getElementById(nomModal);
    modal.style.display = "block";
}

function tancarModal(nomModal) {
    var modal = document.getElementById(nomModal);
    modal.style.display = "none";
}

function obrirOnLoad(nomModal) {
    var i = 0;
    var modal = document.getElementById(nomModal);
    modal.style.display = "block";
    setTimeout(function() {
        var modal = document.getElementById(nomModal);
        modal.style.display = "none";
    }, 3000);
}
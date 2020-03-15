var slideFotoIndex = 0;
showFotoSlides();

function showFotoSlides() {
    var iFoto;
    var slidesFoto = document.getElementsByClassName("divFotoPrincipal");

    for (iFoto = 0; iFoto < slidesFoto.length; iFoto++) {
        slidesFoto[iFoto].style.display = "none";
    }
    slideFotoIndex++;
    if (slideFotoIndex > slidesFoto.length) { slideFotoIndex = 1 }
    slidesFoto[slideFotoIndex - 1].style.display = "block";
    setTimeout(showFotoSlides, 3000); // Change image every 2 seconds
}
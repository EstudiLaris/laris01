window.onscroll = function() {
    menuScroll()
};


function menuScroll() {
    var navbar = document.getElementById("myNavbar");
    var idLogo = document.getElementById("Logo");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "clnavBar" + " j-w3-animate-top";
        idLogo.className = "img-height" + " j-w3-animate-top";
        document.getElementById("subTitol").style.display = "none";
        document.getElementById("titolPrincipal").style.width = "280px"
    } else {
        navbar.className = navbar.className.replace(" j-w3-animate-top", "");
        idLogo.className = idLogo.className.replace("img-height j-w3-animate-top", "");
        document.getElementById("subTitol").style.display = "block";
        document.getElementById("titolPrincipal").style.width = "320px"
    }
}
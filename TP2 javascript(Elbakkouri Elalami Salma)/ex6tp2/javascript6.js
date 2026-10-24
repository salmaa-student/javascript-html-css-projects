let titre = document.getElementById("titreMenu");
let contenu = document.getElementById("contenuMenu");

titre.addEventListener("click", function() {
    if (contenu.style.maxHeight === "" || contenu.style.maxHeight === "0px") {
        contenu.style.maxHeight = "150px"
    } else {
        contenu.style.maxHeight = "0px";
    }
});
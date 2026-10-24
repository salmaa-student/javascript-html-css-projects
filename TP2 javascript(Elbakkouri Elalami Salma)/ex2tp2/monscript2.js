let bouton = document.getElementById("btnToggle");

bouton.addEventListener("click", function() {
    let texte = document.getElementById("monTexte");

    if (texte.style.display === "none") {
        texte.style.display = "block";
        bouton.innerText = "Masquer";
    } else { 
        texte.style.display = "none";
        bouton.innerText = "Afficher";
    }
});
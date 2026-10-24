
let bouton = document.getElementById("btnCouleur");

 bouton.addEventListener("click", function() {
    let div = document.getElementById("maDiv");
    
    if (div.style.backgroundColor === "lightblue") {
        div.style.backgroundColor = "lightcoral";
    } else {
        div.style.backgroundColor = "lightblue";
    }
});
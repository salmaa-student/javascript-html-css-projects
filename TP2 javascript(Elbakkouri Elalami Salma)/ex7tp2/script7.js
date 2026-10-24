let secondes = 0;

let affichage = document.getElementById("chrono");

setInterval(function() {
    secondes++; 
    affichage.innerText = secondes; 
}, 1000);
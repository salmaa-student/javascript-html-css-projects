
function trier(liste) {

    return liste.sort((a, b) => a - b);
}
console.log("Exercice 3 :");
let maListe = [13, 4, 6, 9, 1, 20];
console.log("Avant le tri :", maListe);
console.log("Après le tri :", trier(maListe)); 
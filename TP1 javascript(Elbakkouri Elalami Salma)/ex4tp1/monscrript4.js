function calculerSomme() {

    let h1 = parseInt(document.getElementById("h1").value) || 0;
    let m1 = parseInt(document.getElementById("m1").value) || 0;
    let s1 = parseInt(document.getElementById("s1").value) || 0;

    let h2 = parseInt(document.getElementById("h2").value) || 0;
    let m2 = parseInt(document.getElementById("m2").value) || 0;
    let s2 = parseInt(document.getElementById("s2").value) || 0;

    let h3 = parseInt(document.getElementById("h3").value) || 0;
    let m3 = parseInt(document.getElementById("m3").value) || 0;
    let s3 = parseInt(document.getElementById("s3").value) || 0;

    if (h1 < 0 || m1 < 0 || s1 < 0 || h2 < 0 || m2 < 0 || s2 < 0 || h3 < 0 || m3 < 0 || s3 < 0) {
        alert("Erreur : Les nombres ne doivent pas être négatifs !");
        return; 
    }


    let totalSecondes = (h1 * 3600 + m1 * 60 + s1) + 
                        (h2 * 3600 + m2 * 60 + s2) + 
                        (h3 * 3600 + m3 * 60 + s3);

    let jours = Math.floor(totalSecondes / 86400);
    let reste = totalSecondes % 86400; 


    let heures = Math.floor(reste / 3600);
    reste = reste % 3600;

    let minutes = Math.floor(reste / 60);

    let secondes = reste % 60;

    document.getElementById("resJ").value = jours;
    document.getElementById("resH").value = heures;
    document.getElementById("resM").value = minutes;
    document.getElementById("resS").value = secondes;
}

function effacer() {
    document.querySelectorAll('input').forEach(input => input.value = '');
}
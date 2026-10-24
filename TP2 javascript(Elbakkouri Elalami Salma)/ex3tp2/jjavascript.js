let formulaire = document.getElementById("monFormulaire");

formulaire.addEventListener("submit", function(event) {
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;

    if (nom === "" || email === "") {
        alert("Veuillez remplir tous les champs !");
        event.preventDefault(); 
        
        alert("Formulaire envoyé avec succès !");
    }
});
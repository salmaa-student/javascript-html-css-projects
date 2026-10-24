function verifierEmail() {
    let email = document.getElementById("emailInput").value;
    let resultat = document.getElementById("resultat")
    let regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

  
    if (regex.test(email)) {
        resultat.innerText = "L'email est valide ✅";
        resultat.style.color = "green";
    } else {
        resultat.innerText = "L'email n'est pas valide ❌";
        resultat.style.color = "red";
    }
}
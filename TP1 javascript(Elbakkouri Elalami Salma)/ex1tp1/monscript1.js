const conteneur=document.querySelector(".qcm" );
const q1= {
text:"1-Que signifie HTML?",
choix:["HyperText Markup Language",
    "Hight Text Machine Language","Home Tool Markup Language"],
type:"radio",
reponseCorrecte:0
};
const q2={ 
    text:"2-Quels mots cles permettent de declarer des variables en Javascript ?",
    choixs:["var","let","int","const","bool"],
    type:"checkbox",
    reponseCorrecte:[0,1,3]
};
const q3={
    text:"3-Quelles instructions permettent d'afficher un message a l'utilisateur en Javascript?",
    choix:["alert()","console.log()","prompt()","document.write()"],
    type:"checkbox",
    reponseCorrecte:[0,3],
};
const q4={
    text:"4-Que va afficher ce code? \n let tab=[13,4,6,9] ; \n console.log(table.slice(1,3));",
    choix:["[13,9]","[4,6,9]","[4,6]","[6,9]"],
    type:"radio",
    reponseCorrecte:2
};
const q5={
    text:"5-Quelles sont les methodes qui s'applique sur un tableau en Javascript ?"  ,
    choix:["puhs()","pop()","alert()","length()"],
    type:"checkbox",
    reponseCorrecte:[0,1,3]
};


const tableau = [q1, q2, q3, q4, q5];

function afficherQCM() {
      for (let i = 0; i < tableau.length; i++) {
        const q = tableau[i];

        const pQuestion = document.createElement("p");
        pQuestion.innerHTML = "<b>" + q.text + "</b>";
        conteneur.appendChild(pQuestion);

        for (let j = 0; j < q.choix.length; j++) {
            const label = document.createElement("label");
            const input = document.createElement("input");
            
            input.type = q.type; 
            input.name = "question" + i; 
            input.value = j;  

            label.appendChild(input);
            label.appendChild(document.createTextNode(" " + q.choix[j]));
            conteneur.appendChild(label);
            conteneur.appendChild(document.createElement("br")); 
        }
        conteneur.appendChild(document.createElement("hr"));
    }

   
    const divBoutons = document.createElement("div");

   
    const btnInit = document.createElement("button");
    btnInit.innerText = "Initialiser le QCM";
    btnInit.onclick = function() {
        const tousLesInputs = document.querySelectorAll('input');
        for(let k=0; k<tousLesInputs.length; k++) {
            tousLesInputs[k].checked = false; // نحيو العلامة
        }
    };

    
    const btnAfficher = document.createElement("button");
    btnAfficher.innerText = "Afficher le corrigé";
    btnAfficher.onclick = function() {
        let texteHTML = "<html><body><h2>Corrigé</h2>";
        for (let i = 0; i < tableau.length; i++) {
            texteHTML += "<p><b>" + tableau[i].text + "</b><br>";
            let bonnesReponses = tableau[i].reponseCorrecte;
            
            if (typeof bonnesReponses === 'number') {
                texteHTML += "<span style='color:green'>" + tableau[i].choix[bonnesReponses] + "</span></p>";
            } else {
                
                for (let j = 0; j < bonnesReponses.length; j++) {
                    texteHTML += "<span style='color:green'>" + tableau[i].choix[bonnesReponses[j]] + "</span><br>";
                }
                texteHTML += "</p>";
            }
        }
        texteHTML += "</body></html>";
        window.open("", "Corrigé", "width=600,height=600").document.write(texteHTML);
    };

  
    const btnResultat = document.createElement("button");
    btnResultat.innerText = "Afficher le résultat";
    btnResultat.onclick = function() {
        let texteHTML = "<html><body><h2>Votre Résultat</h2>";
        
        for (let i = 0; i < tableau.length; i++) {
            let estCorrect = false;
            const q = tableau[i];

            if (q.type === "radio") {
                const choisi = document.querySelector('input[name="question' + i + '"]:checked');
                if (choisi && parseInt(choisi.value) === q.reponseCorrecte) {
                    estCorrect = true;
                }
            } else {
                const choisis = document.querySelectorAll('input[name="question' + i + '"]:checked');
                if (choisis.length === q.reponseCorrecte.length) {
                    estCorrect = true;
                    for(let c of choisis) {
                        if(!q.reponseCorrecte.includes(parseInt(c.value))) {
                            estCorrect = false; 
                        }
                    }
                }
            }

            if (estCorrect) {
                texteHTML += "<p style='color:green'>La réponse de la question " + (i+1) + " est correcte</p>";
            } else {
                texteHTML += "<p style='color:red'>La réponse de la question " + (i+1) + " est incorrecte</p>";
            }
        }
        texteHTML += "</body></html>";
        window.open("", "Résultat", "width=400,height=400").document.write(texteHTML);
    };

      divBoutons.appendChild(btnInit);
    divBoutons.appendChild(btnAfficher);
    divBoutons.appendChild(btnResultat);
    conteneur.appendChild(divBoutons);
}

afficherQCM();
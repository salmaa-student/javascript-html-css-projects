var input = document.getElementById('taskInput');
var addBtn = document.getElementById('addBtn');
var taskList = document.getElementById('taskList');

addBtn.addEventListener('click', function() {
    
    var texte = input.value.trim(); 

    if (texte === "") {
        alert("Veuillez entrer une tâche !");
        return; 
    }

    var li = document.createElement('li');
    
    var spanTexte = document.createElement('span');
    spanTexte.textContent = texte;
    
    var btnSupprimer = document.createElement('button');
    btnSupprimer.textContent = "Supprimer";
    btnSupprimer.className = "btn-supprimer";

    btnSupprimer.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(spanTexte);
    li.appendChild(btnSupprimer);

    taskList.appendChild(li);

    input.value = "";
});
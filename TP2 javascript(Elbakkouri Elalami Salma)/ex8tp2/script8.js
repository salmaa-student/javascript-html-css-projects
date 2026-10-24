const maDiv = document.getElementById('maDiv');

maDiv.addEventListener('mouseover', function() {
    maDiv.style.backgroundColor = '#e74c3c'; 
    maDiv.textContent = "Vous êtes dedans !";
});
maDiv.addEventListener('mouseout', function() {
    maDiv.style.backgroundColor = '#3498db';
    maDiv.textContent = "Passez la souris ici";
});
const progressBar = document.getElementById('progressBar');
const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', function() {
    startBtn.disabled = true;
    startBtn.textContent = "En cours...";

    let width = 0;
    progressBar.style.width = width + '%';
    progressBar.textContent = width + '%';

    let interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval); 
            startBtn.disabled = false; 
            startBtn.textContent = "Recommencer"; 
        } else {
            width++;
            progressBar.style.width = width + '%'; 
            progressBar.textContent = width + '%'; 
        }
    }, 50); 
});
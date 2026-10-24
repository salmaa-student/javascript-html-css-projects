const themeBtn = document.getElementById('themeBtn');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtn.textContent = "Activer le Thème Clair";
}

themeBtn.addEventListener('click', function() {
    
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = "Activer le Thème Clair";
        localStorage.setItem('theme', 'dark'); 
    } else {
        themeBtn.textContent = "Activer le Thème Sombre";
        localStorage.setItem('theme', 'light'); 
    }
});
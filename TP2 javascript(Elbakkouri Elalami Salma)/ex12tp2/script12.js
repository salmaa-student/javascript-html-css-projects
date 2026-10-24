const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const info = document.getElementById('info');
const allBoxes = document.querySelectorAll('.box'); 

function adapterLayout() {
    const width = window.innerWidth;

    if (width > 768) {
        box2.style.display = 'block';
        box3.style.display = 'block';
        info.textContent = "Mode : Grand écran (3 boîtes)";
        info.style.color = "#27ae60";
    } 
    else if (width > 480 && width <= 768) {
        box2.style.display = 'block';
        box3.style.display = 'none';
        info.textContent = "Mode : Tablette (2 boîtes)";
        info.style.color = "#f39c12";
    } 
    else {
        box2.style.display = 'none';
        box3.style.display = 'none';
        info.textContent = "Mode : Mobile (1 boîte)";
        info.style.color = "#e74c3c";
    }
}

adapterLayout();

window.addEventListener('resize', adapterLayout);

allBoxes.forEach(function(box) {
    box.addEventListener('click', function() {
        box.classList.toggle('active');
    });
});
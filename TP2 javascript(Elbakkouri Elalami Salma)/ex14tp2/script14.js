const items = document.querySelectorAll('.item');
const targetBox = document.getElementById('targetBox');

items.forEach(item => {
    item.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => { e.target.style.opacity = '0.5'; }, 0);
    });

    item.addEventListener('dragend', function(e) {
        e.target.style.opacity = '1'; 
    });
});

targetBox.addEventListener('dragenter', function(e) {
    e.preventDefault(); 
    targetBox.classList.add('hovered'); 
});

targetBox.addEventListener('dragleave', function() {
    targetBox.classList.remove('hovered');
});

targetBox.addEventListener('drop', function(e) {
    e.preventDefault(); 
    targetBox.classList.remove('hovered');
    
    const itemId = e.dataTransfer.getData('text/plain');
    const draggedItem = document.getElementById(itemId);

    targetBox.appendChild(draggedItem);
});

targetBox.addEventListener('dragover', function(e) {
    e.preventDefault(); 
});
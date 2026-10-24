const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const modalOverlay = document.getElementById('modalOverlay');

openBtn.addEventListener('click', function() {
    modalOverlay.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
    modalOverlay.style.display = 'none';
});

modalOverlay.addEventListener('click', function(event) {
    if (event.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});
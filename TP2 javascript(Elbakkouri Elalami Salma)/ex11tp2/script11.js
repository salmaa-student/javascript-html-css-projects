const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');

searchInput.addEventListener('input', function() {
    
    const filterText = searchInput.value.toLowerCase();

    const items = productList.getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        
        let itemText = items[i].textContent.toLowerCase();

        if (itemText.includes(filterText)) {
            items[i].style.display = ''; 
        } else {
            items[i].style.display = 'none'; 
        }
    }
});
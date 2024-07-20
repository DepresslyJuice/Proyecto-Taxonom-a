function toggleMenu() {
    const menu = document.querySelector('nav .menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

document.getElementById('ver-registro').addEventListener('click', function() {
    const searchSection = document.getElementById('search-section');
    if (searchSection.style.display === 'flex') {
        searchSection.style.display = 'none';
    } else {
        searchSection.style.display = 'flex';
    }
});

// Select the navbar toggler and menu
const toggler = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.navbar-menu');

// Add click event to toggle menu visibility
toggler.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.querySelector('.navbar-toggler').addEventListener('click', function () {
    document.querySelector('.navbar-menu').classList.toggle('show');
});
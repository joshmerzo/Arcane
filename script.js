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

document.getElementById("scroll-arrow").addEventListener("click", function() {
    // Hide Home section's title and subtitle
    document.getElementById("home-title").style.display = "none";
    document.getElementById("home-subtitle").style.display = "none";
    
    // Reveal the About section
    document.getElementById("About").style.display = "flex";  // Use 'flex' to display it properly
    
    // Optionally hide the scroll-down arrow
    document.getElementById("scroll-arrow").style.display = "none";
});


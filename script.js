// Select the navbar toggler and menu
const toggler = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.navbar-menu');

// Add click event to toggle menu visibility
toggler.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Scroll arrow click event
document.getElementById("scroll-arrow").addEventListener("click", function() {
    // Hide Home section's title and subtitle
    document.getElementById("home-title").style.display = "none";
    document.getElementById("home-subtitle").style.display = "none";
    
    // Reveal the About section
    document.getElementById("About").style.display = "flex";  // Use 'flex' to display it properly
    
    // Optionally hide the scroll-down arrow
    document.getElementById("scroll-arrow").style.display = "none";
});

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}
function setPositionThumbnail () {
    let thumbnailActive = document.querySelector('.thumbnail .item.active');
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})


// Get all interactive circles
const circles = document.querySelectorAll('.interactive-circle');

// Get the region info section
const regionInfo = document.getElementById('regionInfo');
const regionTitle = document.getElementById('regionTitle');
const regionDescription = document.getElementById('regionDescription');

// Region data for each area
const regionData = {
    'Noxus': {
        title: 'Noxus',
        description: 'Noxus is a militaristic and expansionist empire, known for its ruthless tactics and the power of its ruling class. The people here are driven by ambition and strength, often willing to do anything to achieve power and dominance.',
        characters: [
            'Mel', ' Ambessa',
        ],
    },
    'Zaun': {
        title: 'Zaun',
        description: 'Zaun is depicted as a place of invention and struggle, where the poor and downtrodden live amidst dangerous chemicals and oppressive corporations. The region is dominated by underground gangs and brilliant yet often morally gray inventors. ',
        characters: [
            'Jinx', ' Vi', ' Viktor', ' Silco', ' Vander', ' Singed'
        ],
    },
    'Piltover': {
        title: 'Piltover',
        description: 'Piltover is  as a center for progress, prosperity, and scientific advancement. The city’s shining towers and sophisticated society mask its political intrigue and growing tension with Zaun. ',
        characters: [
            'Caitlyn', ' Jayce', ' Heimerdinger', 
        ],
    }
};

// Show region info when circle is clicked
function showRegionInfo(region) {
    const data = regionData[region];
    regionTitle.textContent = data.title;
    regionDescription.textContent = data.description;
    regionCharacters.textContent = data.characters;

    // Show the region info section
    regionInfo.classList.remove('hidden');
}

// Add click event listeners to all circles
circles.forEach(circle => {
    circle.addEventListener('click', function() {
        const region = circle.getAttribute('data-region');
        showRegionInfo(region);
    });
});

// Close region info if clicked outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.interactive-circle') && !event.target.closest('#regionInfo')) {
        regionInfo.classList.add('hidden');
    }
});

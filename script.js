
const toggler = document.querySelector('.navbar-toggler');
const menu = document.querySelector('#mobile-menu')
const menuLink = document.querySelector('.navbar_menu')
const navbar = document.querySelector('.navbar'); 


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');

});

const aboutSection = document.getElementById('About');
const backgrounds = [
    'pics/bgAbout/2.png',
    'pics/bgAbout/3.png',
    'pics/bgAbout/4.jpg',
    'pics/bgAbout/5.jpg',
    'pics/bgAbout/6.jpg',
    'pics/bgAbout/7.png'
];
let currentIndex = 0;

// Array to store preloaded images
const preloadedImages = [];
let imagesLoaded = 0;

// Function to preload images
function preloadImages(urls, callback) {
    urls.forEach((url) => {
        const img = new Image();
        img.src = url;

        // Increment the counter when the image is loaded
        img.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === urls.length) {
                // When all images are loaded, invoke the callback
                callback();
            }
        };

        // Handle errors gracefully
        img.onerror = () => {
            console.error(`Error loading image: ${url}`);
            imagesLoaded++;
            if (imagesLoaded === urls.length) {
                callback();
            }
        };

        preloadedImages.push(img);
    });
}

// Function to change the background
function changeBackground() {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    aboutSection.style.backgroundImage = `url('${preloadedImages[currentIndex].src}')`;
}

// Preload images and start the transition only when all are loaded
preloadImages(backgrounds, () => {
    console.log("All images preloaded. Starting background transitions.");
    setInterval(changeBackground, 5000);
});

document.getElementById("scroll-arrow").addEventListener("click", function() {

});

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}
function setPositionThumbnail () {
    let thumbnailActive = document.querySelector('.thumbnail .item.active');
    let rect = thumbnailActive.getBoundingClientRect();

}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})


  const allEpisodes = [
    {
        season: 1,
        ep: "Season 1, Episode 01:",
        title: "Welcome to the Playground",
        description: "Following a struggle on the Bridge of Progress, the Zaunite sisters Vi and Powder discover their parents dead. Vander, the leader of the failed rebellion, takes them in. Years later, a Piltover penthouse is broken into by Vi, Powder, and their adopted brothers, Mylo and Claggor. Powder unintentionally broke something, triggering an explosion that partially demolishes the structure.",
        background: "epImg/ep/1.png",
        gradient: "radial-gradient(circle at 60% 40%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { top: "30%", left: "5%" }
    },
    {
        season: 1,
        ep: "Season 1, Episode 02:",
        title: "Some Mysteries Are Better Left Unsolved",
        description: "As tension rises after the botched heist, Vi and her crew deal with the fallout while Powder grapples with guilt over the disaster. Meanwhile, in Piltover, scientists Viktor and Jayce explore groundbreaking magical technology, Hextech, attempting to harness the stolen crystals' power. Zaun's criminal underworld begins to stir as Silco, a shadowy figure, schemes to assert his dominance.",
        background: "epImg/ep/2.png",
        gradient: "radial-gradient(circle at 10% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { top: "10%", left: "60%" }
    },
    {
        season: 1,
        ep: "Season 1, Episode 03:",
        title: "The Base Violence Necessary for Change",
        description: "The authorities close in on the gang. Vander faces Silco’s growing threats, forcing him to make difficult decisions to protect Zaun. Vi chooses to confront Silco head-on, leaving Powder behind for her safety. Tragedy strikes as an explosive showdown between Zaunites and Enforcers erupts, with devastating consequences that fracture the sisters' bond forever.",
        background: "epImg/ep/3.png",
        gradient: "radial-gradient(circle at 10% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { top: "30%", left: "5%" }
    },
    {
        season: 1,
        ep: "Season 1, Episode 04:",
        title: "Happy Progress Day!",
        description: "Years later, Piltover thrives on Hextech's advancements, led by Jayce and Viktor, who unveil revolutionary new technology. Meanwhile, a grown-up Powder, now called Jinx, wreaks havoc as Silco’s unhinged enforcer. Vi reemerges, determined to protect Zaun from Silco’s tyranny, but the years apart have made her sister unrecognizable.",
        background: "epImg/ep/4.png",
        gradient: "radial-gradient(circle at 10% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { top: "20%", left: "10%" }
    },
    {
        season: 1,
        ep: "Season 1, Episode 05:",
        title: "Everybody Wants to Be My Enemy",
        description: "Jinx's chaotic antics escalate tensions between Piltover and Zaun. Caitlyn, a dedicated Enforcer, partners with Vi to uncover the truth about Silco's operations. In Zaun, Viktor's obsession with improving Hextech pushes him to take increasingly desperate measures, blurring the line between humanity and progress.",
        background: "epImg/ep/5.png",
        gradient: "radial-gradient(circle at 10% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { top: "10%", left: "60%" }
    },
    {
        season: 1,
        ep: "Season 1, Episode 06:",
        title: "When These Walls Come Tumbling Down",
        description: "Vi and Caitlyn infiltrate Zaun, witnessing the dire conditions its people endure under Silco’s control. Jinx’s insecurities flare as she feels her sister’s presence. Meanwhile, Viktor's research takes a dangerous turn, unlocking Hextech's true potential but at great personal cost. The gap between the two cities grows wider.",
        background: "epImg/ep/6.png",
        gradient: "radial-gradient(circle at 10% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { top: "45%", left: "10%" }
    },
    {
        season: 1,
        ep: "Season 1, Episode 07:",
        title: "The Boy Savior",
        description: "Vi and Caitlyn find an unexpected ally in Ekko, a childhood friend now leading the Firelights, a rebel group opposing Silco. Jinx confronts her fractured psyche, haunted by memories of her sister and their past. A climactic battle ensues between the Firelights and Silco’s forces, leading to harrowing revelations.",
        background: "epImg/ep/7.png",
        gradient: "radial-gradient(circle at 10% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { top: "0%", left: "50%" }
    },
    {
        season: 1,
        ep: "Season 1, Episode 08:",
        title: "Oil and Water",
        description: "The fragile alliance between Piltover and Zaun teeters on the edge as Jayce proposes a dangerous deal with Silco to secure peace. Vi and Caitlyn's partnership deepens, but Jinx's instability threatens to derail everything. Viktor’s experiments take a shocking toll, pushing him further into darkness.",
        background: "epImg/ep/8.png",
        gradient: "radial-gradient(circle at 10% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { top: "45%", left: "15%" }
    },
    {
        season: 1,
        ep: "Season 1, Episode 09:",
        title: "The Monster You Created",
        description: "All-out chaos erupts as Jinx kidnaps key players from both sides, forcing a brutal confrontation between Vi, Silco, and herself. In the end, Jinx fully embraces her new identity, making a fateful decision that will alter the course of both cities. The explosive finale leaves Piltover and Zaun on the brink of war.",
        background: "epImg/ep/9.png",
        gradient: "radial-gradient(circle at 10% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { top: "10%", left: "60%" }
    },
    {
        season: 2,
        ep: "Season 2, Episode 01:",
        title: "Heavy Is The Crown",
        description: "The aftermath of Jinx’s Hextech rocket attack leaves the Piltover council in shambles. Caitlyn deals with grief, her legacy as a Kiramman, and takes a stand against Zaun.",
        background: "epImg/ep2/1.png",
        gradient: "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { top: "45%", left: "10%" }
    },
    {
        season: 2,
        ep: "Season 2, Episode 02:",
        title: "Watch It All Burn",
        description: "Isha meets Jinx and chooses to stay by her side. Sevika and Jinx bond over Silco’s death and form an alliance. Ekko and Heimerdinger, together with Jayce, investigate the strange markings they found on the sacred tree where they built their home and community. Viktor finally wakes up, but he is not himself.",
        background: "epImg/ep2/2.png",
        gradient: "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { top: "8%", left: "25%" }
    },
    {
        season: 2,
        ep: "Season 2, Episode 03:",
        title: "Finally Got the Name Right",
        description: "Caitlyn and Vi’s relationship takes a big step forward. Together, they confront Jinx, who has backup, which in turn impacts their relationship. Ambessa is confronted by the Black Rose, which causes her to lie and plot her next move. She nominates Caitlyn to be commander-in-chief.",
        background: "epImg/ep2/3.png",
        gradient: "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { top: "10%", left: "15%" }
    },
    {
        season: 2,
        ep: "Season 2, Episode 04:",
        title: "Paint the Town Blue",
        description: "As rumors of Jinx’s return swirl, Ambessa pursues her target with renewed enthusiasm. Jinx and Sevika go undercover and into the belly of the beast.",
        background: "epImg/ep2/4.png",
        gradient: "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { top: "30%", left: "15%" }
    },
    {
        season: 2,
        ep: "Season 2, Episode 05:",
        title: "Blisters and Bedrock",
        description: "Vi awakens to surprising news. An unsettling reunion isn’t what it seems. Caitlyn uncovers the origins of Shimmer.	",
        background: "epImg/ep2/5.png",
        gradient: "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { top: "20%", left: "55%" }
    },
    {
        season: 2,
        ep: "Season 2, Episode 06:",
        title: "The Message Hidden Within the Pattern",
        description: "Healing comes from a familiar face — in an unfamiliar place. A stunning betrayal threatens to change countless lives.",
        background: "epImg/ep2/6.png",
        gradient: "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { top: "10%", left: "5%" }
    },
    {
        season: 2,
        ep: "Season 2, Episode 07:",
        title: "Pretend Like It's the First Time",
        description: "A moment of darkness, a moment of light — and a vision of What Could Have Been.",
        background: "epImg/ep2/7.png",
        gradient: "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { top: "10%", left: "20%" }
    },
    {
        season: 2,
        ep: "Season 2, Episode 08:",
        title: "Killing Is a Cycle",
        description: "A brewing storm fuels a series of startling transformations. Elsewhere, the spark of rebellion still burns.",
        background: "epImg/ep2/8.png",
        gradient: "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { top: "5%", left: "20%" }
    },
    {
        season: 2,
        ep: "Season 2, Episode 09:",
        title: "The Dirt Under Your Nails",
        description: "Magic. Science. Power. Revenge. Destinies clash in an epic final chapter, igniting an all-out war.",
        background: "epImg/ep2/9.png",
        gradient: "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { top: "20%", left: "17%" }
    },
    

];

function preloadEpisodeImages(episodes, callback) {
    let imagesLoaded = 0;
    const totalImages = episodes.length;

    episodes.forEach(episode => {
        const img = new Image();
        img.src = episode.background;

        img.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === totalImages) {
                // All images loaded, call the callback
                callback();
            }
        };

        img.onerror = () => {
            console.error(`Failed to load image: ${episode.background}`);
            imagesLoaded++;
            if (imagesLoaded === totalImages) {
                callback();
            }
        };
    });
}


preloadEpisodeImages(allEpisodes, () => {
    console.log("All episode backgrounds are preloaded and ready to use.");
    initializeEpisodeDisplay();
});

function initializeEpisodeDisplay() {
    console.log("Initializing episodes display...");
}

let currentSeason = 1; 
let episodes = allEpisodes.filter(e => e.season === currentSeason);
let currentEpisode = 0;

function createEpisodeNavigationButtons() {
    const buttonContainer = document.getElementById("episodeButtons");
    buttonContainer.innerHTML = ""; 

    episodes.forEach((episode, index) => {
        const button = document.createElement("button");
        button.textContent = index + 1; 
        button.classList.add('navButton');
        
        button.addEventListener("click", () => {
            currentEpisode = index; 
            updateEpisodeUI(episode);
            updateBackground(episode); 
        });
        
        buttonContainer.appendChild(button);
    });
}

function initializeEpisodeNavigation() {
    const episodeData = episodes[currentEpisode];
    updateEpisodeUI(episodeData);
    updateBackground(episodeData);
    createEpisodeNavigationButtons();
}

initializeEpisodeNavigation();


function updateBackground(episodeData) {
    const episodeElement = document.getElementById("backgroundContainer");

    episodeElement.style.opacity = 0;

    setTimeout(() => {
        episodeElement.style.backgroundImage = `${episodeData.gradient}, url('${episodeData.background}')`;

        episodeElement.style.opacity = 1;
    }, 500); 
}

function updateEpisodeUI(episodeData) {
    const epElement = document.getElementById("ep");
    const epTitleElement = document.getElementById("epTitle");
    const epDescriptionElement = document.getElementById("epDescription");

    epElement.style.opacity = 0;
    epTitleElement.style.opacity = 0;
    epDescriptionElement.style.opacity = 0;

    setTimeout(() => {
        epElement.style.visibility = "hidden";
        epTitleElement.style.visibility = "hidden";
        epDescriptionElement.style.visibility = "hidden";

        epElement.textContent = episodeData.ep;
        epTitleElement.textContent = episodeData.title;
        epDescriptionElement.textContent = episodeData.description;

        setTimeout(() => {
            epElement.style.visibility = "visible";
            epTitleElement.style.visibility = "visible";
            epDescriptionElement.style.visibility = "visible";
            
            epElement.style.opacity = 1;
            epTitleElement.style.opacity = 1;
            epDescriptionElement.style.opacity = 1;

            const epTnD = document.querySelector(".epTnD");
            if (window.matchMedia("(max-width: 480px)").matches) {
                // Fixed position for small screens
                epTnD.style.position = "absolute";
                epTnD.style.top = "40%";
                epTnD.style.left = "5%";
            } else {
                // Default position from episodeData
                epTnD.style.position = "absolute";

                if (episodeData.position.top) epTnD.style.top = episodeData.position.top;
                if (episodeData.position.left) epTnD.style.left = episodeData.position.left;
            }
        }, 100); 
    }, 500); 

    
}


document.getElementById("switchSeasonBtn").addEventListener("click", () => {
    currentSeason = currentSeason === 1 ? 2 : 1; 
    episodes = allEpisodes.filter(e => e.season === currentSeason); 
    currentEpisode = 0; 

    initializeEpisodeNavigation();
});

document.getElementById("nextEpisodeBtn").addEventListener("click", () => {
    currentEpisode = (currentEpisode + 1) % episodes.length;

    const episodeData = episodes[currentEpisode];
    updateEpisodeUI(episodeData);
    updateBackground(episodeData);
});

document.getElementById("prevEpisodeBtn").addEventListener("click", () => {
    
    currentEpisode = (currentEpisode - 1) % episodes.length;
    if (currentEpisode <1){
        currentEpisode = 8
    }
    const episodeData = episodes[currentEpisode];
    updateEpisodeUI(episodeData);
    updateBackground(episodeData);
});


  

const circles = document.querySelectorAll('.interactive-circle');

const regionInfo = document.getElementById('regionInfo');
const regionTitle = document.getElementById('regionTitle');
const regionDescription = document.getElementById('regionDescription');
const regionCharacters = document.getElementById('regionCharacters');

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
        description: 'Piltover is portrayed as a center for progress, prosperity, and scientific advancement. The city’s shining towers and sophisticated society mask its political intrigue and growing tension with Zaun. Piltover is home to ambitious figures like Jayce, Caitlyn, and Heimerdinger, who strive for peace and progress, though often at the cost of others.',
        characters: [
            'Caitlyn', ' Jayce', ' Heimerdinger', 
        ],
    }
};

function showRegionInfo(region) {
    const data = regionData[region];
    regionTitle.textContent = data.title;
    regionDescription.textContent = data.description;
    regionCharacters.textContent = data.characters;

 
    regionInfo.classList.remove('hidden');
}

circles.forEach(circle => {
    circle.addEventListener('click', function() {
        const region = circle.getAttribute('data-region');
        showRegionInfo(region);
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.interactive-circle') && !event.target.closest('#regionInfo')) {
        regionInfo.classList.add('hidden');
    }
});

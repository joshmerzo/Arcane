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

// Episodes jscript

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
        position: { top: "30%", left: "5%" }
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
        position: { bottom: "10%", right: "20%" }
    },
    {
        season: 2,
        ep: "Season 2, Episode 08:",
        title: "Killing Is a Cycle",
        description: "A brewing storm fuels a series of startling transformations. Elsewhere, the spark of rebellion still burns.",
        background: "epImg/ep2/8.png",
        gradient: "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { bottom: "10%", right: "20%" }
    },
    {
        season: 2,
        ep: "Season 2, Episode 09:",
        title: "The Dirt Under Your Nails",
        description: "Magic. Science. Power. Revenge. Destinies clash in an epic final chapter, igniting an all-out war.",
        background: "epImg/ep2/9.png",
        gradient: "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75) 100%)",
        position: { bottom: "10%", right: "20%" }
    },
    

];

let currentSeason = 1; // Default season
let episodes = allEpisodes.filter(e => e.season === currentSeason); // Filter by season
let currentEpisode = 0;

function updateBackground(episodeData) {
    const episodeElement = document.getElementById("EpisodeID");

    // Start fade-out
    episodeElement.style.opacity = 0;

    // After fade-out transition, update the background and fade back in
    setTimeout(() => {
        episodeElement.style.backgroundImage = `${episodeData.gradient}, url('${episodeData.background}')`;

        // Fade back in
        episodeElement.style.opacity = 1;
    }, 500); // Matches the transition duration in CSS
}

function updateEpisodeUI(episodeData) {
    // Select the elements
    const epElement = document.getElementById("ep");
    const epTitleElement = document.getElementById("epTitle");
    const epDescriptionElement = document.getElementById("epDescription");

    // Start fade-out
    epElement.style.opacity = 0;
    epTitleElement.style.opacity = 0;
    epDescriptionElement.style.opacity = 0;

    // After fade-out, update the content and fade back in
    setTimeout(() => {
        // Hide the elements during content update
        epElement.style.visibility = "hidden";
        epTitleElement.style.visibility = "hidden";
        epDescriptionElement.style.visibility = "hidden";

        // Update the content
        epElement.textContent = episodeData.ep;
        epTitleElement.textContent = episodeData.title;
        epDescriptionElement.textContent = episodeData.description;

        // Make the elements visible and fade them back in
        setTimeout(() => {
            epElement.style.visibility = "visible";
            epTitleElement.style.visibility = "visible";
            epDescriptionElement.style.visibility = "visible";
            
            epElement.style.opacity = 1;
            epTitleElement.style.opacity = 1;
            epDescriptionElement.style.opacity = 1;

            const epTnD = document.querySelector(".epTnD");
            epTnD.style.position = "absolute";

            if (episodeData.position.top) epTnD.style.top = episodeData.position.top;
            if (episodeData.position.left) epTnD.style.left = episodeData.position.left;
        }, 100); // Delay slightly after updating content to avoid "flash"
    }, 500); // Matches the fade-out duration

    
}


// Switch Season Button
document.getElementById("switchSeasonBtn").addEventListener("click", () => {
    currentSeason = currentSeason === 1 ? 2 : 1; // Toggle between seasons
    episodes = allEpisodes.filter(e => e.season === currentSeason); // Filter episodes
    currentEpisode = 0; // Reset to the first episode

    const episodeData = episodes[currentEpisode];
    updateEpisodeUI(episodeData);
    updateBackground(episodeData);
});

// Next Episode Button
document.getElementById("nextEpisodeBtn").addEventListener("click", () => {
    currentEpisode = (currentEpisode + 1) % episodes.length;

    const episodeData = episodes[currentEpisode];
    updateEpisodeUI(episodeData);
    updateBackground(episodeData);
});


// End episodes


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

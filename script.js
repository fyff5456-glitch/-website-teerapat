
const games = [
    // ACTION
    {
        id: 1,
        name: "GTA V",
        category: "action",
        description: "สำรวจเมือง Los Santos ทำภารกิจและพบกับเรื่องราวของตัวละคร",
        developer: "Rockstar Games",
        platform: "PC, PlayStation, Xbox",
        mode: "Single Player / Online",
        year: "2013",
        image: "https://placehold.co/600x400/29134a/ffffff?text=GTA+V",
        link: "https://www.rockstargames.com/gta-v"
    },
    {
        id: 2,
        name: "VALORANT",
        category: "action",
        description: "เกมยิงแข่งขันแบบทีมที่ต้องใช้ทักษะและการวางแผน",
        developer: "Riot Games",
        platform: "PC",
        mode: "Multiplayer",
        year: "2020",
        image: "https://placehold.co/600x400/29134a/ffffff?text=VALORANT",
        link: "https://playvalorant.com/"
    },
    {
        id: 3,
        name: "CALL OF DUTY",
        category: "action",
        description: "เกมแอ็กชันที่มีโหมดการเล่นหลากหลาย",
        developer: "Activision",
        platform: "PC, PlayStation, Xbox",
        mode: "Single Player / Multiplayer",
        year: "2003",
        image: "https://placehold.co/600x400/29134a/ffffff?text=CALL+OF+DUTY",
        link: "https://www.callofduty.com/"
    },
    {
        id: 4,
        name: "APEX LEGENDS",
        category: "action",
        description: "เกมแข่งขันแนว Battle Royale ที่มีตัวละครและความสามารถแตกต่างกัน",
        developer: "Respawn Entertainment",
        platform: "PC, PlayStation, Xbox",
        mode: "Multiplayer",
        year: "2019",
        image: "https://placehold.co/600x400/29134a/ffffff?text=APEX+LEGENDS",
        link: "https://www.ea.com/games/apex-legends"
    },
    {
        id: 5,
        name: "FORTNITE",
        category: "action",
        description: "เกมที่ผสมผสานการต่อสู้ การสร้าง และความสนุก",
        developer: "Epic Games",
        platform: "PC, PlayStation, Xbox, Mobile",
        mode: "Multiplayer",
        year: "2017",
        image: "https://placehold.co/600x400/29134a/ffffff?text=FORTNITE",
        link: "https://www.fortnite.com/"
    },
    {
        id: 6,
        name: "OVERWATCH 2",
        category: "action",
        description: "เกมต่อสู้เป็นทีมที่มีฮีโร่หลากหลายและรูปแบบการเล่นแตกต่างกัน",
        developer: "Blizzard Entertainment",
        platform: "PC, PlayStation, Xbox",
        mode: "Multiplayer",
        year: "2022",
        image: "https://placehold.co/600x400/29134a/ffffff?text=OVERWATCH+2",
        link: "https://overwatch.blizzard.com/"
    },

    // ADVENTURE
    {
        id: 7,
        name: "MINECRAFT",
        category: "adventure",
        description: "เกมสร้างโลก สำรวจสถานที่ และสร้างสิ่งต่าง ๆ ได้อย่างอิสระ",
        developer: "Mojang Studios",
        platform: "PC, Mobile, Console",
        mode: "Single Player / Multiplayer",
        year: "2011",
        image: "https://placehold.co/600x400/173b48/ffffff?text=MINECRAFT",
        link: "https://www.minecraft.net/"
    },
    {
        id: 8,
        name: "GENSHIN IMPACT",
        category: "adventure",
        description: "เกมผจญภัยในโลกแฟนตาซีที่เต็มไปด้วยเรื่องราวและตัวละคร",
        developer: "HoYoverse",
        platform: "PC, PlayStation, Mobile",
        mode: "Single Player / Co-op",
        year: "2020",
        image: "https://placehold.co/600x400/173b48/ffffff?text=GENSHIN+IMPACT",
        link: "https://genshin.hoyoverse.com/"
    },
    {
        id: 9,
        name: "ZELDA",
        category: "adventure",
        description: "ผจญภัยในดินแดนแฟนตาซี สำรวจสถานที่และค้นพบความลับ",
        developer: "Nintendo",
        platform: "Nintendo Switch",
        mode: "Single Player",
        year: "1986",
        image: "https://placehold.co/600x400/173b48/ffffff?text=ZELDA",
        link: "https://www.nintendo.com/"
    },
    {
        id: 10,
        name: "STARDEW VALLEY",
        category: "adventure",
        description: "เกมทำฟาร์ม ใช้ชีวิตในชนบท และสำรวจหมู่บ้าน",
        developer: "ConcernedApe",
        platform: "PC, Mobile, Console",
        mode: "Single Player / Multiplayer",
        year: "2016",
        image: "https://placehold.co/600x400/173b48/ffffff?text=STARDEW+VALLEY",
        link: "https://www.stardewvalley.net/"
    },
    {
        id: 11,
        name: "HOGWARTS LEGACY",
        category: "adventure",
        description: "เกมผจญภัยในโลกเวทมนตร์ของโรงเรียนฮอกวอตส์",
        developer: "Avalanche Software",
        platform: "PC, PlayStation, Xbox, Switch",
        mode: "Single Player",
        year: "2023",
        image: "https://placehold.co/600x400/173b48/ffffff?text=HOGWARTS+LEGACY",
        link: "https://www.hogwartslegacy.com/"
    },
    {
        id: 12,
        name: "RED DEAD REDEMPTION 2",
        category: "adventure",
        description: "ผจญภัยในโลกตะวันตกที่กว้างใหญ่ พร้อมเรื่องราวเข้มข้น",
        developer: "Rockstar Games",
        platform: "PC, PlayStation, Xbox",
        mode: "Single Player / Online",
        year: "2018",
        image: "https://placehold.co/600x400/173b48/ffffff?text=RED+DEAD+REDEMPTION+2",
        link: "https://www.rockstargames.com/reddeadredemption2"
    },

    // SURVIVAL
    {
        id: 13,
        name: "PUBG",
        category: "survival",
        description: "เกม Battle Royale ที่ผู้เล่นต้องเอาตัวรอดในสนามแข่งขัน",
        developer: "KRAFTON",
        platform: "PC, PlayStation, Xbox, Mobile",
        mode: "Multiplayer",
        year: "2017",
        image: "https://placehold.co/600x400/49321c/ffffff?text=PUBG",
        link: "https://pubg.com/"
    },
    {
        id: 14,
        name: "THE FOREST",
        category: "survival",
        description: "เกมเอาชีวิตรอดและสำรวจป่าลึกลับ พร้อมเก็บทรัพยากร",
        developer: "Endnight Games",
        platform: "PC, PlayStation",
        mode: "Single Player / Co-op",
        year: "2018",
        image: "https://placehold.co/600x400/49321c/ffffff?text=THE+FOREST",
        link: "https://store.steampowered.com/app/242760/The_Forest/"
    },
    {
        id: 15,
        name: "SUBNAUTICA",
        category: "survival",
        description: "สำรวจโลกใต้ทะเลและค้นพบสิ่งมีชีวิตในมหาสมุทร",
        developer: "Unknown Worlds",
        platform: "PC, PlayStation, Xbox, Switch",
        mode: "Single Player",
        year: "2018",
        image: "https://placehold.co/600x400/49321c/ffffff?text=SUBNAUTICA",
        link: "https://unknownworlds.com/subnautica/"
    },
    {
        id: 16,
        name: "DONT STARVE TOGETHER",
        category: "survival",
        description: "เกมเอาชีวิตรอดที่ต้องรวบรวมทรัพยากรและวางแผนการใช้ชีวิต",
        developer: "Klei Entertainment",
        platform: "PC, PlayStation, Xbox",
        mode: "Multiplayer",
        year: "2016",
        image: "https://placehold.co/600x400/49321c/ffffff?text=DONT+STARVE",
        link: "https://www.klei.com/games/dont-starve-together"
    },
    {
        id: 17,
        name: "ARK SURVIVAL",
        category: "survival",
        description: "เอาชีวิตรอดในโลกที่เต็มไปด้วยไดโนเสาร์และสิ่งมีชีวิตต่าง ๆ",
        developer: "Studio Wildcard",
        platform: "PC, PlayStation, Xbox",
        mode: "Single Player / Multiplayer",
        year: "2017",
        image: "https://placehold.co/600x400/49321c/ffffff?text=ARK",
        link: "https://survivetheark.com/"
    },
    {
        id: 18,
        name: "RAFT",
        category: "survival",
        description: "เอาชีวิตรอดกลางมหาสมุทร เก็บทรัพยากรและสร้างแพ",
        developer: "Redbeet Interactive",
        platform: "PC",
        mode: "Single Player / Multiplayer",
        year: "2022",
        image: "https://placehold.co/600x400/49321c/ffffff?text=RAFT",
        link: "https://raft-game.com/"
    }
];

// ELEMENTS
const gallery = document.getElementById("gameGallery");
const searchInput = document.getElementById("searchInput");
const gameCount = document.getElementById("gameCount");
const modal = document.getElementById("profileModal");

let currentCategory = "all";

// CATEGORY NAMES
const categoryNames = {
    action: "⚔️ ACTION",
    adventure: "🌍 ADVENTURE",
    survival: "🔥 SURVIVAL"
};

// SHOW GAME CARDS
function displayGames() {

    const keyword = searchInput.value.toLowerCase().trim();

    const filteredGames = games.filter(game => {

        const matchCategory =
            currentCategory === "all" ||
            game.category === currentCategory;

        const matchSearch =
            game.name.toLowerCase().includes(keyword);

        return matchCategory && matchSearch;
    });

    gameCount.textContent =
        `แสดงเกม ${filteredGames.length} จาก ${games.length} เกม`;

    if (filteredGames.length === 0) {
        gallery.innerHTML =
            `<div class="no-result">😢 ไม่พบเกมที่ค้นหา</div>`;
        return;
    }

    gallery.innerHTML = filteredGames.map(game => `
        <div class="card">
            <img
                src="${game.image}"
                alt="${game.name}"
                loading="lazy"
            >

            <div class="info">
                <span class="category">
                    ${categoryNames[game.category]}
                </span>

                <h3>${game.name}</h3>

                <p>${game.description}</p>

                <button
                    class="profile-btn"
                    onclick="showProfile(${game.id})"
                >
                    ดูโปรไฟล์เกม →
                </button>
            </div>
        </div>
    `).join("");
}

// FILTER BUTTONS
document.querySelectorAll(".filters button").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".filters button")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        currentCategory = button.dataset.filter;

        displayGames();
    });

});

// SEARCH
searchInput.addEventListener("input", displayGames);

// SHOW GAME PROFILE
function showProfile(id) {

    const game = games.find(item => item.id === id);

    if (!game) return;

    document.getElementById("profileImage").src = game.image;
    document.getElementById("profileName").textContent = game.name;
    document.getElementById("profileCategory").textContent =
        categoryNames[game.category];

    document.getElementById("profileDescription").textContent =
        game.description;

    document.getElementById("profileDeveloper").textContent =
        game.developer;

    document.getElementById("profilePlatform").textContent =
        game.platform;

    document.getElementById("profileMode").textContent =
        game.mode;

    document.getElementById("profileYear").textContent =
        game.year;

    document.getElementById("profileLink").href = game.link;

    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

// CLOSE PROFILE
function closeProfile() {
    modal.classList.remove("show");
    document.body.style.overflow = "";
}

// CLOSE BUTTON
document.getElementById("closeModal").addEventListener("click", closeProfile);

// CLICK OUTSIDE MODAL
modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeProfile();
    }
});

// ESCAPE KEY
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeProfile();
    }
});

// START WEBSITE
displayGames();

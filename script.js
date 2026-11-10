
function filterGame(category, button) {

    const cards = document.querySelectorAll(".card");
    const buttons = document.querySelectorAll(".filters button");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    cards.forEach(card => {

        if (category === "all" ||
            card.dataset.category === category) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });
}

const gameProfiles = {
    gta: {
        name: "GTA V",
        category: "Action / Open World",
        description: "เกมโลกเปิดที่ผู้เล่นสามารถสำรวจเมือง Los Santos ทำภารกิจ และพบกับเรื่องราวของตัวละคร",
        developer: "Rockstar Games",
        platform: "PC, PlayStation, Xbox",
        mode: "Single Player / Online",
        image: "https://placehold.co/600x400/29134a/ffffff?text=GTA+V",
        link: "https://www.rockstargames.com/gta-v"
    },
    minecraft: {
        name: "Minecraft",
        category: "Adventure / Sandbox",
        description: "เกมสร้างโลกที่ผู้เล่นสามารถสร้างบ้าน สำรวจสถานที่ และสร้างสิ่งต่าง ๆ ได้อย่างอิสระ",
        developer: "Mojang Studios",
        platform: "PC, Mobile, Console",
        mode: "Single Player / Multiplayer",
        image: "https://placehold.co/600x400/173b48/ffffff?text=MINECRAFT",
        link: "https://www.minecraft.net/"
    },
    valorant: {
        name: "VALORANT",
        category: "Action / Tactical Shooter",
        description: "เกมแข่งขันแบบทีมที่มีตัวละครและความสามารถแตกต่างกัน",
        developer: "Riot Games",
        platform: "PC",
        mode: "Multiplayer",
        image: "https://placehold.co/600x400/29134a/ffffff?text=VALORANT",
        link: "https://playvalorant.com/"
    }
};

function showProfile(id) {
    const game = gameProfiles[id];

    if (!game) return;

    document.getElementById("profileName").textContent = game.name;
    document.getElementById("profileCategory").textContent = game.category;
    document.getElementById("profileDescription").textContent = game.description;
    document.getElementById("profileDeveloper").textContent = "ผู้พัฒนา: " + game.developer;
    document.getElementById("profilePlatform").textContent = "แพลตฟอร์ม: " + game.platform;
    document.getElementById("profileMode").textContent = "รูปแบบ: " + game.mode;
    document.getElementById("profileImage").src = game.image;
    document.getElementById("profileLink").href = game.link;

    document.getElementById("profileModal").style.display = "block";
}

function closeProfile() {
    document.getElementById("profileModal").style.display = "none";
}
